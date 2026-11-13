<?php
/**
 * Plugin Name: MVGL Saudi Headless CMS Core
 * Description: Registers Products, Events, Careers Post Types, ACF Fields, WPGraphQL Schemas, Auto-Translation to Arabic, and CORS.
 * Version: 2.1.0
 * Author: MVGL / Antigravity
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * 1. Enable CORS & Zero-Delay Realtime Updates for GraphQL Requests
 */
add_action('init', function() {
    if (!headers_sent()) {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Cache-Control, Pragma");
        
        // Disable proxy/browser caching on GraphQL requests so publishes reflect instantly with 0 delay
        if (strpos($_SERVER['REQUEST_URI'] ?? '', 'graphql') !== false) {
            header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
            header("Pragma: no-cache");
            header("Expires: 0");
        }
    }
    
    if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        status_header(200);
        exit();
    }
});

/**
 * 2. Automatic Google Translate to Arabic Helper
 */
if (!function_exists('mvgl_auto_translate_to_arabic')) {
    function mvgl_auto_translate_to_arabic($text) {
        if (empty(trim($text))) {
            return '';
        }
        
        $encoded = urlencode(trim($text));
        $url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=" . $encoded;
        
        $response = wp_remote_get($url, [
            'timeout' => 15,
            'headers' => [
                'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            ]
        ]);
        
        if (is_wp_error($response)) {
            return $text;
        }
        
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);
        
        if (isset($data[0]) && is_array($data[0])) {
            $translated = '';
            foreach ($data[0] as $segment) {
                if (isset($segment[0])) {
                    $translated .= $segment[0];
                }
            }
            return trim($translated);
        }
        
        return $text;
    }
}

/**
 * 3. Register Custom Post Types with WPGraphQL Support
 */
add_action('init', function() {
    // 3.1 Products
    register_post_type('product', [
        'labels' => [
            'name' => 'Products',
            'singular_name' => 'Product',
            'add_new' => 'Add New Product',
            'add_new_item' => 'Add New Product',
            'edit_item' => 'Edit Product',
            'all_items' => 'All Products',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-products',
        'supports' => ['title', 'thumbnail'],
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'product',
        'graphql_plural_name' => 'products',
    ]);

    // 3.2 Events
    register_post_type('event', [
        'labels' => [
            'name' => 'Events',
            'singular_name' => 'Event',
            'add_new' => 'Add New Event',
            'add_new_item' => 'Add New Event',
            'edit_item' => 'Edit Event',
            'all_items' => 'All Events',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-calendar-alt',
        'supports' => ['title', 'thumbnail'],
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'event',
        'graphql_plural_name' => 'events',
    ]);

    // 3.3 Careers
    register_post_type('career', [
        'labels' => [
            'name' => 'Careers',
            'singular_name' => 'Career / Job Opening',
            'add_new' => 'Add New Job Opening',
            'add_new_item' => 'Add New Job Opening',
            'edit_item' => 'Edit Job Opening',
            'all_items' => 'All Careers',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-businessperson',
        'supports' => ['title'],
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'career',
        'graphql_plural_name' => 'careers',
    ]);

    // 3.4 Job Applications (Received from "Apply for this role" website form)
    register_post_type('job_application', [
        'labels' => [
            'name' => 'Job Applications',
            'singular_name' => 'Job Application',
            'menu_name' => 'Job Applications',
            'all_items' => 'All Applications',
            'edit_item' => 'View Application',
            'view_item' => 'View Application',
            'search_items' => 'Search Applications',
            'not_found' => 'No applications received yet',
        ],
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 28,
        'menu_icon' => 'dashicons-clipboard',
        'supports' => ['title'],
        'capabilities' => [
            'create_posts' => 'do_not_allow',
        ],
        'map_meta_cap' => true,
    ]);
});

/**
 * 4. Programmatically Register ACF Fields with WPGraphQL Support
 */
add_action('acf/init', function() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    // 4.1 PRODUCT FIELDS (Linked to Partners and Categories)
    acf_add_local_field_group([
        'key' => 'group_product_fields',
        'title' => 'Product Details & Partner Assignment',
        'fields' => [
            [
                'key' => 'field_product_partner',
                'label' => 'Associated Partner',
                'name' => 'partner',
                'type' => 'select',
                'instructions' => 'Select which Technology Partner this product belongs to',
                'required' => 1,
                'choices' => [
                    'kirloskar-pneumatic' => 'Kirloskar Pneumatic (Air & Gas / Refrigeration)',
                    'kirloskar-chillers' => 'Kirloskar Chillers (HVAC & Process Cooling)',
                    'rockwell-automation' => 'Rockwell Automation (Industrial Automation)',
                    'spp-pumps' => 'SPP Pumps (Fire Protection & Critical Pumps)',
                    'epp-composites' => 'EPP Composites (FRP/GRP Non-Metallic)',
                    'hms-networks' => 'HMS Networks (Industrial Communication)',
                    'prosoft-technology' => 'ProSoft Technology (Industrial Connectivity)',
                ],
                'default_value' => 'kirloskar-pneumatic',
            ],
            [
                'key' => 'field_product_solution',
                'label' => 'Solution / Category Division',
                'name' => 'solution',
                'type' => 'select',
                'instructions' => 'Which overarching division does this product belong to?',
                'required' => 1,
                'choices' => [
                    'air-gas-solutions' => 'Air & Gas Solutions',
                    'refrigeration-hvac-solutions' => 'Refrigeration & HVAC Solutions',
                    'automation-control' => 'Automation & Control Solutions',
                    'non-metallic-solutions' => 'Non-Metallic Solutions',
                    'fire-pump-solutions' => 'Fire Pump Solutions',
                ],
                'default_value' => 'air-gas-solutions',
            ],
            [
                'key' => 'field_product_subcategory',
                'label' => 'Product Sub-Category / Filter ID',
                'name' => 'subcategory',
                'type' => 'text',
                'instructions' => 'e.g. controllers, drives, networks, screw, reciprocating, packages, chillers, piping, all',
                'default_value' => 'all',
            ],
            [
                'key' => 'field_product_title_en',
                'label' => 'Product Title (English)',
                'name' => 'title_en',
                'type' => 'text',
                'required' => 1,
                'instructions' => 'Type English title. Arabic will be automatically fetched on save if left empty!',
            ],
            [
                'key' => 'field_product_title_ar',
                'label' => 'Product Title (Arabic / العربية)',
                'name' => 'title_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-fetch Arabic translation automatically, or enter custom Arabic.',
            ],
            [
                'key' => 'field_product_specs_en',
                'label' => 'Specifications & Features (English)',
                'name' => 'specs_en',
                'type' => 'text',
                'instructions' => 'e.g. Capacity: 22 to 1047 cfm | Pressure Range: 7.5 to 13 kg/cm²',
            ],
            [
                'key' => 'field_product_specs_ar',
                'label' => 'Specifications & Features (Arabic / العربية)',
                'name' => 'specs_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-fetch Arabic translation automatically.',
            ],
            [
                'key' => 'field_product_description_en',
                'label' => 'Description (English)',
                'name' => 'description_en',
                'type' => 'textarea',
                'rows' => 4,
                'instructions' => 'Type English description. Arabic will be automatically fetched on save if left empty!',
            ],
            [
                'key' => 'field_product_description_ar',
                'label' => 'Description (Arabic / العربية)',
                'name' => 'description_ar',
                'type' => 'textarea',
                'rows' => 4,
                'instructions' => 'Leave empty to auto-fetch Arabic translation automatically.',
            ],
            [
                'key' => 'field_product_explore_url',
                'label' => 'Explore Product Link (Custom URL)',
                'name' => 'explore_url',
                'type' => 'url',
                'instructions' => 'Custom URL to open when user clicks "Explore Product" in the popup (e.g. https://www.rockwellautomation.com/... or a landing page). If left empty, falls back to the brochure PDF or contact inquiry.',
            ],
            [
                'key' => 'field_product_brochure',
                'label' => 'Product Brochure / Data Sheet (PDF)',
                'name' => 'brochure_pdf',
                'type' => 'file',
                'return_format' => 'url',
                'mime_types' => 'pdf',
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'product',
                ],
            ],
        ],
        'show_in_graphql' => 1,
        'graphql_field_name' => 'productFields',
    ]);

    // 4.2 EVENT FIELDS
    acf_add_local_field_group([
        'key' => 'group_event_fields',
        'title' => 'Event Details (Bilingual)',
        'fields' => [
            [
                'key' => 'field_event_title_en',
                'label' => 'Title (English)',
                'name' => 'title_en',
                'type' => 'text',
                'required' => 1,
            ],
            [
                'key' => 'field_event_title_ar',
                'label' => 'Title (Arabic)',
                'name' => 'title_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate from English.',
            ],
            [
                'key' => 'field_event_date_en',
                'label' => 'Date (English)',
                'name' => 'date_en',
                'type' => 'text',
                'instructions' => 'e.g. February 15, 2026',
                'required' => 1,
            ],
            [
                'key' => 'field_event_date_ar',
                'label' => 'Date (Arabic)',
                'name' => 'date_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate from English.',
            ],
            [
                'key' => 'field_event_location_en',
                'label' => 'Location (English)',
                'name' => 'location_en',
                'type' => 'text',
                'instructions' => 'e.g. Jubail, Saudi Arabia',
                'required' => 1,
            ],
            [
                'key' => 'field_event_location_ar',
                'label' => 'Location (Arabic)',
                'name' => 'location_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate from English.',
            ],
            [
                'key' => 'field_event_description_en',
                'label' => 'Description (English)',
                'name' => 'description_en',
                'type' => 'textarea',
                'rows' => 4,
            ],
            [
                'key' => 'field_event_description_ar',
                'label' => 'Description (Arabic)',
                'name' => 'description_ar',
                'type' => 'textarea',
                'rows' => 4,
                'instructions' => 'Leave empty to auto-translate from English.',
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'event',
                ],
            ],
        ],
        'show_in_graphql' => 1,
        'graphql_field_name' => 'eventFields',
    ]);

    // 4.3 CAREER FIELDS
    acf_add_local_field_group([
        'key' => 'group_career_fields',
        'title' => 'Career / Job Opening Details (Bilingual)',
        'fields' => [
            [
                'key' => 'field_job_code',
                'label' => 'Job Code',
                'name' => 'job_code',
                'type' => 'text',
                'instructions' => 'e.g. VM153',
                'required' => 1,
            ],
            [
                'key' => 'field_job_is_active',
                'label' => 'Is Position Open / Active?',
                'name' => 'is_active',
                'type' => 'true_false',
                'default_value' => 1,
                'ui' => 1,
            ],
            [
                'key' => 'field_job_title_en',
                'label' => 'Job Title (English)',
                'name' => 'title_en',
                'type' => 'text',
                'required' => 1,
            ],
            [
                'key' => 'field_job_title_ar',
                'label' => 'Job Title (Arabic)',
                'name' => 'title_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_job_department_en',
                'label' => 'Department (English)',
                'name' => 'department_en',
                'type' => 'text',
                'instructions' => 'e.g. Engineering & Technical',
            ],
            [
                'key' => 'field_job_department_ar',
                'label' => 'Department (Arabic)',
                'name' => 'department_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_job_designation_en',
                'label' => 'Designation (English)',
                'name' => 'designation_en',
                'type' => 'text',
                'instructions' => 'e.g. Project Manager',
            ],
            [
                'key' => 'field_job_designation_ar',
                'label' => 'Designation (Arabic)',
                'name' => 'designation_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_job_location_en',
                'label' => 'Location (English)',
                'name' => 'location_en',
                'type' => 'text',
                'instructions' => 'e.g. Dammam, Saudi Arabia',
            ],
            [
                'key' => 'field_job_location_ar',
                'label' => 'Location (Arabic)',
                'name' => 'location_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_job_experience_en',
                'label' => 'Experience (English)',
                'name' => 'experience_en',
                'type' => 'text',
                'instructions' => 'e.g. 5-8 Years',
            ],
            [
                'key' => 'field_job_experience_ar',
                'label' => 'Experience (Arabic)',
                'name' => 'experience_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_job_employment_type_en',
                'label' => 'Employment Type (English)',
                'name' => 'employment_type_en',
                'type' => 'text',
                'default_value' => 'Full-time',
            ],
            [
                'key' => 'field_job_employment_type_ar',
                'label' => 'Employment Type (Arabic)',
                'name' => 'employment_type_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_job_about_role_en',
                'label' => 'About Role (English)',
                'name' => 'about_role_en',
                'type' => 'textarea',
                'rows' => 4,
            ],
            [
                'key' => 'field_job_about_role_ar',
                'label' => 'About Role (Arabic)',
                'name' => 'about_role_ar',
                'type' => 'textarea',
                'rows' => 4,
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_job_responsibilities_en',
                'label' => 'Responsibilities (English - One per line)',
                'name' => 'responsibilities_en',
                'type' => 'textarea',
                'rows' => 5,
            ],
            [
                'key' => 'field_job_responsibilities_ar',
                'label' => 'Responsibilities (Arabic - One per line)',
                'name' => 'responsibilities_ar',
                'type' => 'textarea',
                'rows' => 5,
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_job_requirements_en',
                'label' => 'Requirements (English - One per line)',
                'name' => 'requirements_en',
                'type' => 'textarea',
                'rows' => 5,
            ],
            [
                'key' => 'field_job_requirements_ar',
                'label' => 'Requirements (Arabic - One per line)',
                'name' => 'requirements_ar',
                'type' => 'textarea',
                'rows' => 5,
                'instructions' => 'Leave empty to auto-translate.',
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'career',
                ],
            ],
        ],
        'show_in_graphql' => 1,
        'graphql_field_name' => 'careerFields',
    ]);

    // 4.4 BLOG (POST) ARABIC & EXTRA FIELDS
    acf_add_local_field_group([
        'key' => 'group_blog_fields',
        'title' => 'Blog Bilingual Fields (English & Arabic)',
        'fields' => [
            [
                'key' => 'field_blog_tag_en',
                'label' => 'Tag / Category (English)',
                'name' => 'tag_en',
                'type' => 'text',
                'instructions' => 'e.g. DIGITALIZATION, ROBOTICS, SUPPLY CHAIN',
            ],
            [
                'key' => 'field_blog_tag_ar',
                'label' => 'Tag / Category (Arabic)',
                'name' => 'tag_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_blog_title_ar',
                'label' => 'Title (Arabic)',
                'name' => 'title_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_blog_excerpt_en',
                'label' => 'Excerpt / Summary (English)',
                'name' => 'excerpt_en',
                'type' => 'textarea',
                'rows' => 3,
            ],
            [
                'key' => 'field_blog_excerpt_ar',
                'label' => 'Excerpt / Summary (Arabic)',
                'name' => 'excerpt_ar',
                'type' => 'textarea',
                'rows' => 3,
                'instructions' => 'Leave empty to auto-translate.',
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'post',
                ],
            ],
        ],
        'show_in_graphql' => 1,
        'graphql_field_name' => 'blogFields',
    ]);
});

/**
 * 5. Automatic Translation Hook on Post Save
 * Whenever any item is saved in WordPress, if the user typed in English,
 * it automatically fetches the exact Arabic translation!
 */
add_action('acf/save_post', function($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (wp_is_post_revision($post_id)) {
        return;
    }
    
    $post_type = get_post_type($post_id);
    
    // 5.1 Translate Product Fields
    if ($post_type === 'product') {
        $title_en = get_field('title_en', $post_id);
        $title_ar = get_field('title_ar', $post_id);
        if (!empty($title_en) && empty($title_ar)) {
            update_field('title_ar', mvgl_auto_translate_to_arabic($title_en), $post_id);
        }
        
        $specs_en = get_field('specs_en', $post_id);
        $specs_ar = get_field('specs_ar', $post_id);
        if (!empty($specs_en) && empty($specs_ar)) {
            update_field('specs_ar', mvgl_auto_translate_to_arabic($specs_en), $post_id);
        }
        
        $desc_en = get_field('description_en', $post_id);
        $desc_ar = get_field('description_ar', $post_id);
        if (!empty($desc_en) && empty($desc_ar)) {
            update_field('description_ar', mvgl_auto_translate_to_arabic($desc_en), $post_id);
        }
    }
    
    // 5.2 Translate Event Fields
    if ($post_type === 'event') {
        $title_en = get_field('title_en', $post_id);
        $title_ar = get_field('title_ar', $post_id);
        if (!empty($title_en) && empty($title_ar)) {
            update_field('title_ar', mvgl_auto_translate_to_arabic($title_en), $post_id);
        }
        
        $date_en = get_field('date_en', $post_id);
        $date_ar = get_field('date_ar', $post_id);
        if (!empty($date_en) && empty($date_ar)) {
            update_field('date_ar', mvgl_auto_translate_to_arabic($date_en), $post_id);
        }
        
        $loc_en = get_field('location_en', $post_id);
        $loc_ar = get_field('location_ar', $post_id);
        if (!empty($loc_en) && empty($loc_ar)) {
            update_field('location_ar', mvgl_auto_translate_to_arabic($loc_en), $post_id);
        }
        
        $desc_en = get_field('description_en', $post_id);
        $desc_ar = get_field('description_ar', $post_id);
        if (!empty($desc_en) && empty($desc_ar)) {
            update_field('description_ar', mvgl_auto_translate_to_arabic($desc_en), $post_id);
        }
    }
    
    // 5.3 Translate Career Fields
    if ($post_type === 'career') {
        $simple_fields = ['title', 'department', 'designation', 'location', 'experience', 'employment_type', 'about_role', 'responsibilities', 'requirements'];
        foreach ($simple_fields as $f) {
            $en = get_field($f . '_en', $post_id);
            $ar = get_field($f . '_ar', $post_id);
            if (!empty($en) && empty($ar)) {
                update_field($f . '_ar', mvgl_auto_translate_to_arabic($en), $post_id);
            }
        }
    }
    
    // 5.4 Translate Blog Fields
    if ($post_type === 'post') {
        $tag_en = get_field('tag_en', $post_id);
        $tag_ar = get_field('tag_ar', $post_id);
        if (!empty($tag_en) && empty($tag_ar)) {
            update_field('tag_ar', mvgl_auto_translate_to_arabic($tag_en), $post_id);
        }
        
        $title_ar = get_field('title_ar', $post_id);
        if (empty($title_ar)) {
            $post_title = get_the_title($post_id);
            if (!empty($post_title)) {
                update_field('title_ar', mvgl_auto_translate_to_arabic($post_title), $post_id);
            }
        }
        
        $excerpt_en = get_field('excerpt_en', $post_id);
        $excerpt_ar = get_field('excerpt_ar', $post_id);
        if (!empty($excerpt_en) && empty($excerpt_ar)) {
            update_field('excerpt_ar', mvgl_auto_translate_to_arabic($excerpt_en), $post_id);
        }
    }
}, 20);

/**
 * 6. Add Instant "✨ Auto-Translate to Arabic" Button in WordPress Admin UI
 */
add_action('admin_footer', function() {
    global $post;
    if (!$post) return;
    ?>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var publishBox = document.getElementById('major-publishing-actions') || document.querySelector('.edit-post-header__settings');
        if (!publishBox) return;

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'button button-secondary';
        btn.innerHTML = '✨ Auto-Translate to Arabic';
        btn.style.margin = '8px 0';
        btn.style.width = '100%';
        btn.style.fontWeight = 'bold';
        btn.style.color = '#1e3a8a';
        btn.style.borderColor = '#3b82f6';

        btn.onclick = async function() {
            btn.innerHTML = '⏳ Translating to Arabic...';
            btn.disabled = true;

            async function translate(val) {
                if (!val || !val.trim()) return '';
                try {
                    var res = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=' + encodeURIComponent(val.trim()));
                    var json = await res.json();
                    if (json && json[0]) {
                        return json[0].map(function(s) { return s[0]; }).join('');
                    }
                } catch(e) {}
                return val;
            }

            var pairs = [
                { en: 'title_en', ar: 'title_ar' },
                { en: 'specs_en', ar: 'specs_ar' },
                { en: 'description_en', ar: 'description_ar' },
                { en: 'location_en', ar: 'location_ar' },
                { en: 'date_en', ar: 'date_ar' },
                { en: 'department_en', ar: 'department_ar' },
                { en: 'designation_en', ar: 'designation_ar' },
                { en: 'about_role_en', ar: 'about_role_ar' },
                { en: 'responsibilities_en', ar: 'responsibilities_ar' },
                { en: 'requirements_en', ar: 'requirements_ar' },
                { en: 'tag_en', ar: 'tag_ar' },
                { en: 'excerpt_en', ar: 'excerpt_ar' }
            ];

            for (var i = 0; i < pairs.length; i++) {
                var enEl = document.querySelector('[name="acf[' + pairs[i].en + ']"]') || document.querySelector('[name*="' + pairs[i].en + '"]');
                var arEl = document.querySelector('[name="acf[' + pairs[i].ar + ']"]') || document.querySelector('[name*="' + pairs[i].ar + '"]');
                if (enEl && arEl && enEl.value && (!arEl.value || arEl.value === enEl.value)) {
                    arEl.value = await translate(enEl.value);
                }
            }

            btn.innerHTML = '✅ Arabic Translated!';
            setTimeout(function() {
                btn.innerHTML = '✨ Auto-Translate to Arabic';
                btn.disabled = false;
            }, 3000);
        };

        var container = document.getElementById('submitpost') || publishBox;
        container.insertBefore(btn, container.firstChild);
    });
    </script>
    <?php
});

/**
 * Helper: Find existing post safely without deprecated functions
 */
if (!function_exists('mvgl_find_post')) {
    function mvgl_find_post($slug_or_title, $post_type) {
        if (empty($slug_or_title)) return null;

        // Try lookup by post_name (slug)
        $posts = get_posts([
            'name' => sanitize_title($slug_or_title),
            'post_type' => $post_type,
            'post_status' => 'any',
            'numberposts' => 1,
            'suppress_filters' => true,
        ]);
        if (!empty($posts)) return $posts[0];

        // Try lookup by title
        $posts = get_posts([
            'title' => sanitize_text_field($slug_or_title),
            'post_type' => $post_type,
            'post_status' => 'any',
            'numberposts' => 1,
            'suppress_filters' => true,
        ]);
        return !empty($posts) ? $posts[0] : null;
    }
}

/**
 * 7. One-Click Importer to Seed All 60 Frontend Products into WordPress
 */
add_action('admin_menu', function() {
    add_submenu_page(
        'edit.php?post_type=product',
        'Import Frontend Products',
        '📥 Import All Products',
        'manage_options',
        'mvgl-import-products',
        'mvgl_render_import_products_page'
    );
});

if (!function_exists('mvgl_render_import_products_page')) {
function mvgl_render_import_products_page() {
    $seed_file = __DIR__ . '/frontend-products-seed.json';
    $message = '';
    
    if (isset($_POST['mvgl_do_import']) && check_admin_referer('mvgl_import_nonce')) {
        if (!file_exists($seed_file)) {
            $message = '<div class="notice notice-error"><p>Seed file frontend-products-seed.json not found in plugin directory.</p></div>';
        } else {
            $json_data = file_get_contents($seed_file);
            $products = json_decode($json_data, true);
            $imported = 0;
            $updated = 0;
            
            if (is_array($products)) {
                foreach ($products as $prod) {
                    $title_en = sanitize_text_field($prod['title_en'] ?? '');
                    if (empty($title_en)) continue;
                    
                    // Check if product already exists by title
                    $existing = mvgl_find_post($title_en, 'product');
                    if ($existing) {
                        $post_id = $existing->ID;
                        $updated++;
                    } else {
                        $post_id = wp_insert_post([
                            'post_title' => $title_en,
                            'post_type' => 'product',
                            'post_status' => 'publish',
                        ]);
                        $imported++;
                    }
                    
                    if ($post_id && !is_wp_error($post_id)) {
                        $meta_map = [
                            'partner' => $prod['partner'] ?? '',
                            'solution' => $prod['solution'] ?? '',
                            'subcategory' => $prod['category'] ?? 'all',
                            'title_en' => $title_en,
                            'title_ar' => $prod['title_ar'] ?? '',
                            'specs_en' => $prod['specs_en'] ?? '',
                            'specs_ar' => $prod['specs_ar'] ?? '',
                            'description_en' => $prod['description_en'] ?? '',
                            'description_ar' => $prod['description_ar'] ?? '',
                            'explore_url' => $prod['explore_url'] ?? '',
                        ];

                        foreach ($meta_map as $key => $val) {
                            if (function_exists('update_field')) {
                                update_field($key, $val, $post_id);
                            } else {
                                update_post_meta($post_id, $key, $val);
                            }
                        }
                    }
                }
                $message = '<div class="notice notice-success is-dismissible" style="padding:12px; margin:16px 0;"><p style="font-size:15px;">🎉 <strong>Import Completed Successfully!</strong> ' . $imported . ' products created, ' . $updated . ' products updated. All 60 products can now be edited under <strong>Products &gt; All Products</strong>.</p></div>';
            }
        }
    }
    
    ?>
    <div class="wrap" style="max-width: 900px; padding: 20px 0;">
        <h1>📥 Import Frontend Products to WordPress CMS</h1>
        <div style="background:#fff; border:1px solid #ccd0d4; padding:24px; border-radius:10px; margin-top:20px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
            <h2 style="margin-top:0;">Manage All Frontend Products Directly From WordPress</h2>
            <p style="font-size:14px; line-height:1.6; color:#475569;">
                This tool automatically imports all <strong>60 industrial products</strong> currently hardcoded in the frontend code into your WordPress CMS as full, editable <code>Product</code> posts with their categories, partner assignments, and bilingual English &amp; Arabic specifications.
            </p>
            <ul style="list-style:disc; margin-left:24px; color:#475569; font-size:14px; line-height:1.7;">
                <li><strong>Rockwell Automation</strong> (12 Controllers, Drives, Networks)</li>
                <li><strong>SPP Pumps</strong> (Split Case &amp; End Suction Fire Pumps)</li>
                <li><strong>Kirloskar Pneumatic</strong> (6 Gas Compressors &amp; Packages)</li>
                <li><strong>Kirloskar Chillers</strong> (7 Water &amp; Air Cooled Chillers)</li>
                <li><strong>HMS Networks</strong> (7 Anybus Gateways &amp; Routers)</li>
                <li><strong>ProSoft Technology</strong> (18 In-Chassis Modules &amp; Gateways)</li>
                <li><strong>EPP Composites</strong> (8 FRP/GRP Structural Solutions)</li>
            </ul>
            <p style="font-size:14px; color:#475569;">
                Once imported, you can edit specifications, change titles, add custom <strong>"Explore Product"</strong> redirect links, and update descriptions directly from WordPress!
            </p>
            
            <?php echo $message; ?>
            
            <form method="post" style="margin-top:24px;">
                <?php wp_nonce_field('mvgl_import_nonce'); ?>
                <p>
                    <input type="submit" name="mvgl_do_import" class="button button-primary button-hero" value="🚀 Import / Sync All 60 Frontend Products to CMS" onclick="return confirm('Import all 60 frontend products into WordPress? Existing products with matching titles will be updated safely without duplicates.');" style="font-weight:bold; height:46px; line-height:44px; padding:0 28px;">
                </p>
            </form>
        </div>
    </div>
    <?php
}
}

/**
 * 8. Custom Admin Columns & Meta Box for Job Applications
 */
add_filter('manage_job_application_posts_columns', function($columns) {
    return [
        'cb' => '<input type="checkbox" />',
        'title' => 'Applicant Name',
        'job_info' => 'Applied For Role',
        'applicant_email' => 'Email Address',
        'applicant_phone' => 'Phone Number',
        'resume' => 'Resume / CV',
        'date' => 'Received Date',
    ];
});

add_action('manage_job_application_posts_custom_column', function($column, $post_id) {
    if ($column === 'job_info') {
        $title = get_post_meta($post_id, '_job_title', true) ?: '-';
        $code = get_post_meta($post_id, '_job_code', true);
        echo '<strong>' . esc_html($title) . '</strong>';
        if ($code) {
            echo '<br/><span style="display:inline-block; margin-top:3px; padding:2px 7px; background:#e0f2fe; color:#0369a1; border-radius:4px; font-size:11px; font-weight:bold;">' . esc_html($code) . '</span>';
        }
    } elseif ($column === 'applicant_email') {
        $email = get_post_meta($post_id, '_applicant_email', true);
        if ($email) {
            echo '<a href="mailto:' . esc_attr($email) . '" style="font-weight:500;">' . esc_html($email) . '</a>';
        } else {
            echo '-';
        }
    } elseif ($column === 'applicant_phone') {
        $phone = get_post_meta($post_id, '_applicant_phone', true);
        if ($phone) {
            echo '<a href="tel:' . esc_attr($phone) . '">' . esc_html($phone) . '</a>';
        } else {
            echo '-';
        }
    } elseif ($column === 'resume') {
        $resume_url = get_post_meta($post_id, '_resume_url', true);
        if ($resume_url) {
            echo '<a href="' . esc_url($resume_url) . '" target="_blank" class="button button-small" style="font-weight:bold; color:#187645; border-color:#187645;">📥 Download Resume</a>';
        } else {
            echo '<span style="color:#94a3b8; font-style:italic;">No file attached</span>';
        }
    }
}, 10, 2);

add_action('add_meta_boxes', function() {
    add_meta_box(
        'mvgl_application_details',
        '📄 Candidate Application Details',
        function($post) {
            $name = get_post_meta($post->ID, '_applicant_name', true);
            $email = get_post_meta($post->ID, '_applicant_email', true);
            $phone = get_post_meta($post->ID, '_applicant_phone', true);
            $job_title = get_post_meta($post->ID, '_job_title', true);
            $job_code = get_post_meta($post->ID, '_job_code', true);
            $cover = get_post_meta($post->ID, '_cover_note', true);
            $resume = get_post_meta($post->ID, '_resume_url', true);
            ?>
            <table class="form-table" style="font-size:14px;">
                <tr>
                    <th style="width:200px; font-weight:bold;">Applicant Full Name:</th>
                    <td><strong style="font-size:16px; color:#0f172a;"><?php echo esc_html($name); ?></strong></td>
                </tr>
                <tr>
                    <th style="font-weight:bold;">Applied For Position:</th>
                    <td>
                        <strong style="color:#187645; font-size:15px;"><?php echo esc_html($job_title); ?></strong>
                        <?php if ($job_code): ?>
                            &nbsp;<code>[<?php echo esc_html($job_code); ?>]</code>
                        <?php endif; ?>
                    </td>
                </tr>
                <tr>
                    <th style="font-weight:bold;">Email Address:</th>
                    <td><a href="mailto:<?php echo esc_attr($email); ?>" style="font-weight:600; text-decoration:underline;"><?php echo esc_html($email); ?></a></td>
                </tr>
                <tr>
                    <th style="font-weight:bold;">Phone Number:</th>
                    <td><a href="tel:<?php echo esc_attr($phone); ?>"><?php echo esc_html($phone); ?></a></td>
                </tr>
                <tr>
                    <th style="font-weight:bold;">Resume / CV Document:</th>
                    <td>
                        <?php if ($resume): ?>
                            <a href="<?php echo esc_url($resume); ?>" target="_blank" class="button button-primary button-large" style="font-weight:bold; background:#187645; border-color:#187645;">
                                📥 Download / View Resume File
                            </a>
                            <p class="description" style="margin-top:6px;"><?php echo esc_html($resume); ?></p>
                        <?php else: ?>
                            <em style="color:#64748b;">No resume uploaded with this application.</em>
                        <?php endif; ?>
                    </td>
                </tr>
                <tr>
                    <th style="font-weight:bold; vertical-align:top;">Cover Note / Message:</th>
                    <td>
                        <div style="background:#f8fafc; padding:16px; border-radius:8px; border:1px solid #e2e8f0; max-width:650px; font-size:14px; line-height:1.6; color:#334155; white-space:pre-wrap;">
                            <?php echo esc_html($cover ?: 'No additional notes provided by applicant.'); ?>
                        </div>
                    </td>
                </tr>
            </table>
            <?php
        },
        'job_application',
        'normal',
        'high'
    );
});

/**
 * 9. REST API Endpoint for Handling "Apply for this role" Website Submissions
 * Endpoint: POST /wp-json/mvgl/v1/apply-job
 */
add_action('rest_api_init', function() {
    register_rest_route('mvgl/v1', '/apply-job', [
        'methods' => 'POST',
        'permission_callback' => '__return_true',
        'callback' => 'mvgl_handle_job_application_submission',
    ]);
});

if (!function_exists('mvgl_handle_job_application_submission')) {
function mvgl_handle_job_application_submission($request) {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    $name = sanitize_text_field($request->get_param('fullName') ?? '');
    $email = sanitize_email($request->get_param('email') ?? '');
    $phone = sanitize_text_field($request->get_param('phone') ?? '');
    $cover = sanitize_textarea_field($request->get_param('coverNote') ?? '');
    $job_title = sanitize_text_field($request->get_param('jobTitle') ?? '');
    $job_code = sanitize_text_field($request->get_param('jobCode') ?? '');

    if (empty($name) || empty($email)) {
        return new WP_Error('missing_required_fields', 'Please provide both your full name and a valid email address.', ['status' => 400]);
    }

    $resume_url = '';
    if (!empty($_FILES['resume']['name'])) {
        if (!function_exists('wp_handle_upload')) {
            require_once(ABSPATH . 'wp-admin/includes/file.php');
            require_once(ABSPATH . 'wp-admin/includes/image.php');
            require_once(ABSPATH . 'wp-admin/includes/media.php');
        }

        $uploaded = wp_handle_upload($_FILES['resume'], ['test_form' => false]);
        if (!isset($uploaded['error']) && isset($uploaded['url'])) {
            $resume_url = $uploaded['url'];
        }
    }

    // Create the job application post
    $post_title = $name . ' — ' . ($job_title ?: ($job_code ?: 'General Role'));
    $post_id = wp_insert_post([
        'post_title' => $post_title,
        'post_type' => 'job_application',
        'post_status' => 'publish',
    ]);

    if (is_wp_error($post_id)) {
        return new WP_Error('application_failed', 'Could not record job application in the database.', ['status' => 500]);
    }

    update_post_meta($post_id, '_applicant_name', $name);
    update_post_meta($post_id, '_applicant_email', $email);
    update_post_meta($post_id, '_applicant_phone', $phone);
    update_post_meta($post_id, '_job_title', $job_title);
    update_post_meta($post_id, '_job_code', $job_code);
    update_post_meta($post_id, '_cover_note', $cover);
    update_post_meta($post_id, '_resume_url', $resume_url);

    return rest_ensure_response([
        'success' => true,
        'message' => 'Thank you! Your application has been successfully submitted and saved in our talent database.',
        'application_id' => $post_id,
        'resume_saved' => !empty($resume_url),
    ]);
}
}

/**
 * 10. One-Click Importer to Seed All 6 Frontend Job Openings into WordPress
 */
add_action('admin_menu', function() {
    add_submenu_page(
        'edit.php?post_type=career',
        'Import Frontend Openings',
        '📥 Import All Openings',
        'manage_options',
        'mvgl-import-careers',
        'mvgl_render_import_careers_page'
    );
});

if (!function_exists('mvgl_render_import_careers_page')) {
function mvgl_render_import_careers_page() {
    $seed_file = __DIR__ . '/frontend-careers-seed.json';
    $message = '';

    if (isset($_POST['mvgl_do_import_careers']) && check_admin_referer('mvgl_import_careers_nonce')) {
        if (!file_exists($seed_file)) {
            $message = '<div class="notice notice-error"><p>Seed file frontend-careers-seed.json not found in plugin directory.</p></div>';
        } else {
            $json_data = file_get_contents($seed_file);
            $jobs = json_decode($json_data, true);
            $imported = 0;
            $updated = 0;

            if (is_array($jobs)) {
                foreach ($jobs as $job) {
                    $title_en = sanitize_text_field($job['title']['en'] ?? '');
                    $code = sanitize_text_field($job['code'] ?? '');
                    $slug = sanitize_title($job['slug'] ?? '');
                    if (empty($title_en)) continue;

                    // Check if job exists by slug or title
                    $existing = mvgl_find_post($slug, 'career');
                    if (!$existing) {
                        $existing = mvgl_find_post($title_en, 'career');
                    }

                    if ($existing) {
                        $post_id = $existing->ID;
                        $updated++;
                    } else {
                        $post_id = wp_insert_post([
                            'post_title' => $title_en,
                            'post_name' => $slug,
                            'post_type' => 'career',
                            'post_status' => 'publish',
                        ]);
                        $imported++;
                    }

                    if ($post_id && !is_wp_error($post_id)) {
                        $meta_map = [
                            'job_code' => $code,
                            'is_active' => 1,
                            'title_en' => $title_en,
                            'title_ar' => $job['title']['ar'] ?? '',
                            'department_en' => $job['department']['en'] ?? '',
                            'department_ar' => $job['department']['ar'] ?? '',
                            'designation_en' => $job['designation']['en'] ?? '',
                            'designation_ar' => $job['designation']['ar'] ?? '',
                            'location_en' => $job['location']['en'] ?? '',
                            'location_ar' => $job['location']['ar'] ?? '',
                            'experience_en' => $job['experience']['en'] ?? '',
                            'experience_ar' => $job['experience']['ar'] ?? '',
                            'employment_type_en' => $job['employmentType']['en'] ?? 'Full-time',
                            'employment_type_ar' => $job['employmentType']['ar'] ?? 'دوام كامل',
                            'about_role_en' => $job['aboutRole']['en'] ?? '',
                            'about_role_ar' => $job['aboutRole']['ar'] ?? '',
                            'responsibilities_en' => implode("\n", $job['responsibilities']['en'] ?? []),
                            'responsibilities_ar' => implode("\n", $job['responsibilities']['ar'] ?? []),
                            'requirements_en' => implode("\n", $job['requirements']['en'] ?? []),
                            'requirements_ar' => implode("\n", $job['requirements']['ar'] ?? []),
                        ];

                        foreach ($meta_map as $key => $val) {
                            if (function_exists('update_field')) {
                                update_field($key, $val, $post_id);
                            } else {
                                update_post_meta($post_id, $key, $val);
                            }
                        }
                    }
                }
                $message = '<div class="notice notice-success is-dismissible" style="padding:12px; margin:16px 0;"><p style="font-size:15px;">🎉 <strong>Openings Imported Successfully!</strong> ' . $imported . ' positions created, ' . $updated . ' positions updated. All career roles are now live under <strong>Careers &gt; All Careers</strong>.</p></div>';
            }
        }
    }

    ?>
    <div class="wrap" style="max-width: 900px; padding: 20px 0;">
        <h1>📥 Import Frontend Job Openings to WordPress CMS</h1>
        <div style="background:#fff; border:1px solid #ccd0d4; padding:24px; border-radius:10px; margin-top:20px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
            <h2 style="margin-top:0;">Manage All Career Openings Directly From WordPress</h2>
            <p style="font-size:14px; line-height:1.6; color:#475569;">
                This tool imports all <strong>6 career positions</strong> currently hardcoded in the frontend code into your WordPress CMS as full, editable <code>Career</code> posts with their job codes, departments, designations, and bilingual responsibilities &amp; requirements.
            </p>
            <ul style="list-style:disc; margin-left:24px; color:#475569; font-size:14px; line-height:1.7;">
                <li><strong>VM153</strong>: Project Manager, Smart Infrastructure</li>
                <li><strong>VM152</strong>: Supply Chain Analyst</li>
                <li><strong>VM151</strong>: Robotics Application Specialist</li>
                <li><strong>VM150</strong>: Sales Engineer, Distribution</li>
                <li><strong>VM149</strong>: Automation &amp; Control Systems Engineer</li>
                <li><strong>VM148</strong>: Industrial Refrigeration &amp; HVAC Specialist</li>
            </ul>
            <p style="font-size:14px; color:#475569;">
                Once imported, you can edit requirements, change locations, toggle active status, delete roles, or create new openings!
            </p>

            <?php echo $message; ?>

            <form method="post" style="margin-top:24px;">
                <?php wp_nonce_field('mvgl_import_careers_nonce'); ?>
                <p>
                    <input type="submit" name="mvgl_do_import_careers" class="button button-primary button-hero" value="🚀 Import / Sync All 6 Frontend Openings to CMS" onclick="return confirm('Import all 6 frontend openings into WordPress? Existing positions will be updated safely without duplicates.');" style="font-weight:bold; height:46px; line-height:44px; padding:0 28px;">
                </p>
            </form>
        </div>
    </div>
    <?php
}
}
