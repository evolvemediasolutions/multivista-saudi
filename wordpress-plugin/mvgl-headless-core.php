<?php
/**
 * Plugin Name: MVGL Saudi Headless CMS Core
 * Description: Registers Products, Events, Careers Post Types, ACF Fields, WPGraphQL Schemas, Auto-Translation to Arabic, and CORS.
 * Version: 2.4.2
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
if (!function_exists('mvgl_is_arabic_text')) {
    function mvgl_is_arabic_text($text = '') {
        return !empty($text) && preg_match('/[\x{0600}-\x{06FF}]/u', (string)$text);
    }
}

if (!function_exists('mvgl_auto_translate_to_arabic')) {
    function mvgl_auto_translate_to_arabic($text = '') {
        $raw = trim((string)$text);
        if (empty($raw)) {
            return '';
        }

        // Clean plain text
        $plain = trim(wp_strip_all_tags($raw));
        if (empty($plain)) {
            return '';
        }

        $encoded = urlencode($plain);

        // Provider 1: Google Translate API
        $url1 = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=" . $encoded;
        $response1 = wp_remote_get($url1, [
            'timeout' => 12,
            'headers' => [
                'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            ]
        ]);

        if (!is_wp_error($response1)) {
            $body1 = wp_remote_retrieve_body($response1);
            $data1 = json_decode($body1, true);

            if (isset($data1[0]) && is_array($data1[0])) {
                $translated = '';
                foreach ($data1[0] as $segment) {
                    if (isset($segment[0])) {
                        $translated .= $segment[0];
                    }
                }
                $trimmedTrans = trim($translated);
                if (!empty($trimmedTrans) && preg_match('/[\x{0600}-\x{06FF}]/u', $trimmedTrans)) {
                    return $trimmedTrans;
                }
            }
        }

        // Provider 2: MyMemory API Fallback (Free, Highly Reliable)
        $url2 = "https://api.mymemory.translated.net/get?q=" . $encoded . "&langpair=en|ar";
        $response2 = wp_remote_get($url2, [
            'timeout' => 12,
            'headers' => [
                'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            ]
        ]);

        if (!is_wp_error($response2)) {
            $body2 = wp_remote_retrieve_body($response2);
            $data2 = json_decode($body2, true);
            if (!empty($data2['responseData']['translatedText'])) {
                $transText = html_entity_decode($data2['responseData']['translatedText'], ENT_QUOTES, 'UTF-8');
                $trimmedTrans2 = trim($transText);
                if (!empty($trimmedTrans2) && preg_match('/[\x{0600}-\x{06FF}]/u', $trimmedTrans2)) {
                    return $trimmedTrans2;
                }
            }
        }

        return '';
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
                    'kirloskar-chillers' => 'Kirloskar Chillers (HVAC Solutions)',
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
                    'refrigeration-solutions' => 'Refrigeration Solutions',
                    'hvac-solutions' => 'HVAC Solutions',
                    'refrigeration-hvac-solutions' => 'Refrigeration & HVAC Solutions (Legacy)',
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
                'key' => 'field_event_time_en',
                'label' => 'Timing / Hours (English)',
                'name' => 'time_en',
                'type' => 'text',
                'instructions' => 'e.g. 09:00 AM – 05:00 PM (AST)',
            ],
            [
                'key' => 'field_event_time_ar',
                'label' => 'Timing / Hours (Arabic)',
                'name' => 'time_ar',
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
                'key' => 'field_event_type_en',
                'label' => 'Event Type / Category (English)',
                'name' => 'event_type_en',
                'type' => 'text',
                'instructions' => 'e.g. Technical Exhibition & Conference, Industry Forum, Webinar',
                'default_value' => 'Technical Exhibition & Conference',
            ],
            [
                'key' => 'field_event_type_ar',
                'label' => 'Event Type / Category (Arabic)',
                'name' => 'event_type_ar',
                'type' => 'text',
                'instructions' => 'Leave empty to auto-translate.',
            ],
            [
                'key' => 'field_event_status',
                'label' => 'Event Status',
                'name' => 'status',
                'type' => 'select',
                'choices' => [
                    'upcoming' => 'Upcoming Event',
                    'ongoing' => 'Happening Now',
                    'past' => 'Past / Completed',
                ],
                'default_value' => 'upcoming',
            ],
            [
                'key' => 'field_event_description_en',
                'label' => 'Short Summary (English)',
                'name' => 'description_en',
                'type' => 'textarea',
                'rows' => 3,
            ],
            [
                'key' => 'field_event_description_ar',
                'label' => 'Short Summary (Arabic)',
                'name' => 'description_ar',
                'type' => 'textarea',
                'rows' => 3,
                'instructions' => 'Leave empty to auto-translate from English.',
            ],
            [
                'key' => 'field_event_content_en',
                'label' => 'Full Event Content & Highlights (English)',
                'name' => 'content_en',
                'type' => 'wysiwyg',
                'instructions' => 'Detailed event overview, exhibit highlights, schedule, and participation details.',
            ],
            [
                'key' => 'field_event_content_ar',
                'label' => 'Full Event Content & Highlights (Arabic)',
                'name' => 'content_ar',
                'type' => 'wysiwyg',
                'instructions' => 'Leave empty to auto-translate from English.',
            ],
            [
                'key' => 'field_event_registration_url',
                'label' => 'Registration / External Event URL',
                'name' => 'registration_url',
                'type' => 'url',
                'instructions' => 'Optional link to official exhibition registration, summit page, or tickets.',
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
            [
                'key' => 'field_blog_content_ar',
                'label' => 'Article Content (Arabic / العربية)',
                'name' => 'content_ar',
                'type' => 'wysiwyg',
                'instructions' => 'Detailed article text in Arabic. Leave empty to auto-translate from standard post content.',
            ],
            [
                'key' => 'field_blog_read_time_en',
                'label' => 'Estimated Read Time (English)',
                'name' => 'read_time_en',
                'type' => 'text',
                'instructions' => 'e.g. 5 min read',
                'default_value' => '5 min read',
            ],
            [
                'key' => 'field_blog_read_time_ar',
                'label' => 'Estimated Read Time (Arabic)',
                'name' => 'read_time_ar',
                'type' => 'text',
                'instructions' => 'e.g. ٥ دقائق قراءة',
                'default_value' => '٥ دقائق قراءة',
            ],
            [
                'key' => 'field_blog_author_name',
                'label' => 'Author Byline / Team',
                'name' => 'author_name',
                'type' => 'text',
                'instructions' => 'e.g. MVGL Industrial Engineering Team',
                'default_value' => 'MVGL Engineering Team',
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
add_action('acf/save_post', function($post_id = 0) {
    if (empty($post_id)) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (function_exists('wp_is_post_revision') && wp_is_post_revision($post_id)) {
        return;
    }
    if (!function_exists('get_field') || !function_exists('update_field')) {
        return;
    }
    
    $post_type = get_post_type($post_id);
    if (!$post_type) {
        return;
    }

    
    // Helper closure to translate if Arabic is empty, lacks Arabic letters, or accidentally equals English
    $ensure_ar = function($en_val, $ar_field_name) use ($post_id) {
        $en_trimmed = trim((string)$en_val);
        if (empty($en_trimmed)) return;
        $ar_val = get_field($ar_field_name, $post_id);
        if (empty($ar_val) || !mvgl_is_arabic_text($ar_val) || trim((string)$ar_val) === $en_trimmed) {
            $trans = mvgl_auto_translate_to_arabic($en_trimmed);
            if (mvgl_is_arabic_text($trans)) {
                update_field($ar_field_name, $trans, $post_id);
            }
        }
    };

    // 5.1 Translate Product Fields
    if ($post_type === 'product') {
        $title_en = get_field('title_en', $post_id);
        if (empty($title_en)) {
            $title_en = get_the_title($post_id);
        }
        $ensure_ar($title_en, 'title_ar');
        $ensure_ar(get_field('category_en', $post_id), 'category_ar');
        $ensure_ar(get_field('specs_en', $post_id), 'specs_ar');
        $ensure_ar(get_field('description_en', $post_id), 'description_ar');
    }
    
    // 5.2 Translate Event Fields
    if ($post_type === 'event') {
        $post_title = get_the_title($post_id);
        $title_en = get_field('title_en', $post_id);
        if (empty($title_en) && !empty($post_title)) {
            update_field('title_en', $post_title, $post_id);
            $title_en = $post_title;
        }
        $ensure_ar($title_en, 'title_ar');

        $simple_event_fields = ['date', 'time', 'location', 'event_type', 'description', 'content'];
        foreach ($simple_event_fields as $f) {
            $ensure_ar(get_field($f . '_en', $post_id), $f . '_ar');
        }
    }
    
    // 5.3 Translate Career Fields
    if ($post_type === 'career') {
        $post_title = get_the_title($post_id);
        $title_en = get_field('title_en', $post_id);
        if (empty($title_en) && !empty($post_title)) {
            update_field('title_en', $post_title, $post_id);
            $title_en = $post_title;
        }
        $ensure_ar($title_en, 'title_ar');

        $simple_fields = ['department', 'designation', 'location', 'experience', 'employment_type', 'about_role', 'responsibilities', 'requirements'];
        foreach ($simple_fields as $f) {
            $ensure_ar(get_field($f . '_en', $post_id), $f . '_ar');
        }
    }
    
    // 5.4 Translate Blog Fields
    if ($post_type === 'post') {
        $post_title = get_the_title($post_id);
        $ensure_ar($post_title, 'title_ar');
        $ensure_ar(get_field('tag_en', $post_id), 'tag_ar');
        $ensure_ar(get_field('excerpt_en', $post_id), 'excerpt_ar');
        $ensure_ar(get_field('read_time_en', $post_id), 'read_time_ar');

        $content_ar = get_field('content_ar', $post_id);
        if (empty($content_ar) || !mvgl_is_arabic_text($content_ar)) {
            $post_obj = get_post($post_id);
            if (!empty($post_obj->post_content)) {
                $clean_text = wp_strip_all_tags($post_obj->post_content);
                if (strlen($clean_text) < 3000) {
                    $trans = mvgl_auto_translate_to_arabic($clean_text);
                    if (mvgl_is_arabic_text($trans)) {
                        update_field('content_ar', $trans, $post_id);
                    }
                }
            }
        }
    }
}, 20);

/**
 * 5.5 Backend REST API & AJAX Translation Handlers
 */
add_action('rest_api_init', function() {
    register_rest_route('mvgl/v1', '/translate', [
        'methods' => ['GET', 'POST'],
        'permission_callback' => '__return_true',
        'callback' => function($request) {
            $text = $request->get_param('text') ?? '';
            if (empty(trim($text))) {
                return new WP_REST_Response(['success' => false, 'error' => 'Empty text'], 400);
            }
            $translated = mvgl_auto_translate_to_arabic($text);
            return new WP_REST_Response([
                'success' => true,
                'original' => $text,
                'translated' => $translated
            ], 200);
        }
    ]);
});

add_action('wp_ajax_mvgl_ajax_translate', function() {
    $text = sanitize_text_field($_POST['text'] ?? '');
    if (empty($text)) {
        wp_send_json_error('Empty text');
    }
    $translated = mvgl_auto_translate_to_arabic($text);
    wp_send_json_success($translated);
});

add_action('wp_ajax_nopriv_mvgl_ajax_translate', function() {
    $text = sanitize_text_field($_POST['text'] ?? '');
    if (empty($text)) {
        wp_send_json_error('Empty text');
    }
    $translated = mvgl_auto_translate_to_arabic($text);
    wp_send_json_success($translated);
});

/**
 * 6. Add Instant "✨ Auto-Translate to Arabic" Button in WordPress Admin UI
 * Compatible with Gutenberg Block Editor, Classic Editor, and ACF Postboxes
 */
add_action('admin_footer', function() {
    global $post;
    if (!$post) return;
    ?>
    <script>
    (function() {
        var isTranslating = false;

        function hasArabic(str) {
            return str && /[\u0600-\u06FF]/.test(str);
        }

        async function translateSingleChunk(chunk) {
            var trimmed = chunk.trim();
            if (!trimmed) return '';

            // Provider 1: Client-side MyMemory API (Fast, Free, CORS *, Never blocked by browser privacy/adblock)
            try {
                var url1 = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(trimmed) + '&langpair=en|ar';
                var r1 = await fetch(url1);
                if (r1.ok) {
                    var d1 = await r1.json();
                    if (d1 && d1.responseData && d1.responseData.translatedText) {
                        var res1 = d1.responseData.translatedText.trim();
                        var txt = document.createElement('textarea');
                        txt.innerHTML = res1;
                        var decoded = txt.value.trim();
                        if (hasArabic(decoded)) return decoded;
                    }
                }
            } catch(e1) {
                console.warn('[MVGL Translator] MyMemory provider error:', e1);
            }

            // Provider 2: Client-side Google Translate API
            try {
                var url2 = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=' + encodeURIComponent(trimmed);
                var r2 = await fetch(url2);
                if (r2.ok) {
                    var d2 = await r2.json();
                    if (d2 && d2[0]) {
                        var res2 = d2[0].map(function(s) { return s[0]; }).join('').trim();
                        if (hasArabic(res2)) return res2;
                    }
                }
            } catch(e2) {
                console.warn('[MVGL Translator] Google Translate provider error:', e2);
            }

            // Provider 3: WordPress REST API Backend Endpoint (/wp-json/mvgl/v1/translate)
            try {
                var restUrl = '/wp-json/mvgl/v1/translate?text=' + encodeURIComponent(trimmed);
                var r3 = await fetch(restUrl);
                if (r3.ok) {
                    var d3 = await r3.json();
                    if (d3 && d3.translated && hasArabic(d3.translated)) {
                        return d3.translated.trim();
                    }
                }
            } catch(e3) {
                console.error('[MVGL Translator] REST backend translation error:', e3);
            }

            return '';
        }

        async function callTranslateApi(text) {
            if (!text || !text.trim()) return '';
            var trimmed = text.trim();

            // For multiline lists (responsibilities, requirements, about role)
            if (trimmed.indexOf('\n') !== -1 && trimmed.length > 150) {
                var lines = trimmed.split('\n');
                var outLines = [];
                for (var li = 0; li < lines.length; li++) {
                    var line = lines[li];
                    if (!line.trim()) {
                        outLines.push('');
                    } else {
                        var translatedLine = await translateSingleChunk(line);
                        outLines.push(translatedLine || line);
                    }
                }
                var joined = outLines.join('\n');
                if (hasArabic(joined)) return joined;
            }

            return await translateSingleChunk(trimmed);
        }

        function getFieldValue(name) {
            // 1. Look for ACF field wrapper by data-name
            var field = document.querySelector('.acf-field[data-name="' + name + '"]');
            if (field) {
                var ta = field.querySelector('textarea');
                if (ta && ta.id && window.tinyMCE && tinyMCE.get(ta.id)) {
                    var html = tinyMCE.get(ta.id).getContent();
                    if (html && html.trim()) return html.trim();
                }
                var input = field.querySelector('input[type="text"], textarea, select');
                if (input && input.value && input.value.trim()) return input.value.trim();
            }

            // 2. Direct attribute match
            var direct = document.querySelector('[name*="' + name + '"]');
            if (direct && direct.value && direct.value.trim()) return direct.value.trim();

            return '';
        }

        function setFieldValue(name, value) {
            if (!value) return;
            var field = document.querySelector('.acf-field[data-name="' + name + '"]');
            if (field) {
                var ta = field.querySelector('textarea');
                if (ta && ta.id && window.tinyMCE && tinyMCE.get(ta.id)) {
                    tinyMCE.get(ta.id).setContent(value);
                    ta.value = value;
                    highlightField(field);
                    return;
                }
                var input = field.querySelector('input[type="text"], textarea, select');
                if (input) {
                    input.value = value;
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                    if (window.jQuery) {
                        try { window.jQuery(input).val(value).trigger('input').trigger('change'); } catch(e) {}
                    }
                    highlightField(field);
                    return;
                }
            }

            var direct = document.querySelector('[name*="' + name + '"]');
            if (direct) {
                direct.value = value;
                direct.dispatchEvent(new Event('input', { bubbles: true }));
                direct.dispatchEvent(new Event('change', { bubbles: true }));
                if (window.jQuery) {
                    try { window.jQuery(direct).val(value).trigger('input').trigger('change'); } catch(e) {}
                }
                highlightField(direct);
            }
        }

        function highlightField(el) {
            if (!el) return;
            el.style.transition = 'all 0.4s ease';
            var prevBg = el.style.backgroundColor;
            el.style.backgroundColor = '#dcfce7';
            setTimeout(function() {
                el.style.backgroundColor = prevBg || '';
            }, 1500);
        }

        // Main translation workflow
        async function runAutoTranslation(buttonEl) {
            if (isTranslating) return;
            isTranslating = true;

            var origHtml = buttonEl.innerHTML;
            buttonEl.disabled = true;
            buttonEl.innerHTML = '⏳ Translating to Arabic...';

            try {
                // If title_en is empty, check standard WordPress post title (Gutenberg & Classic)
                var titleEnVal = getFieldValue('title_en');
                if (!titleEnVal) {
                    if (window.wp && wp.data && wp.data.select && wp.data.select('core/editor')) {
                        try {
                            var gTitle = wp.data.select('core/editor').getEditedPostAttribute('title');
                            if (gTitle && gTitle.trim()) titleEnVal = gTitle.trim();
                        } catch(e) {}
                    }
                    if (!titleEnVal) {
                        var wpTitleInput = document.querySelector('#title') ||
                                           document.querySelector('[name="post_title"]') ||
                                           document.querySelector('.editor-post-title__input') ||
                                           document.querySelector('.wp-block-post-title');
                        if (wpTitleInput) {
                            var rawTitle = wpTitleInput.value || wpTitleInput.innerText || wpTitleInput.textContent || '';
                            if (rawTitle.trim()) {
                                titleEnVal = rawTitle.trim();
                            }
                        }
                    }
                    if (titleEnVal) {
                        setFieldValue('title_en', titleEnVal);
                    }
                }

                // If content_en is empty on post/insight, check standard WordPress content (Gutenberg & Classic)
                var contentEnVal = getFieldValue('content_en');
                if (!contentEnVal) {
                    if (window.wp && wp.data && wp.data.select && wp.data.select('core/editor')) {
                        try {
                            var gContent = wp.data.select('core/editor').getEditedPostContent();
                            if (gContent && gContent.trim()) contentEnVal = gContent.trim();
                        } catch(e) {}
                    }
                    if (!contentEnVal) {
                        if (window.tinyMCE && tinyMCE.get('content')) {
                            contentEnVal = tinyMCE.get('content').getContent();
                        } else {
                            var wpContent = document.querySelector('#content');
                            if (wpContent && wpContent.value) contentEnVal = wpContent.value;
                        }
                    }
                }

                var fieldPairs = [
                    { en: 'title_en', ar: 'title_ar', label: 'Title', fallbackEn: titleEnVal },
                    { en: 'specs_en', ar: 'specs_ar', label: 'Specifications' },
                    { en: 'description_en', ar: 'description_ar', label: 'Description' },
                    { en: 'category_en', ar: 'category_ar', label: 'Category' },
                    { en: 'department_en', ar: 'department_ar', label: 'Department' },
                    { en: 'designation_en', ar: 'designation_ar', label: 'Designation' },
                    { en: 'location_en', ar: 'location_ar', label: 'Location' },
                    { en: 'experience_en', ar: 'experience_ar', label: 'Experience' },
                    { en: 'employment_type_en', ar: 'employment_type_ar', label: 'Employment Type' },
                    { en: 'about_role_en', ar: 'about_role_ar', label: 'About Role' },
                    { en: 'responsibilities_en', ar: 'responsibilities_ar', label: 'Responsibilities' },
                    { en: 'requirements_en', ar: 'requirements_ar', label: 'Requirements' },
                    { en: 'date_en', ar: 'date_ar', label: 'Date' },
                    { en: 'time_en', ar: 'time_ar', label: 'Timing' },
                    { en: 'event_type_en', ar: 'event_type_ar', label: 'Event Type' },
                    { en: 'content_en', ar: 'content_ar', label: 'Content', fallbackEn: contentEnVal },
                    { en: 'tag_en', ar: 'tag_ar', label: 'Tag' },
                    { en: 'excerpt_en', ar: 'excerpt_ar', label: 'Excerpt' },
                    { en: 'read_time_en', ar: 'read_time_ar', label: 'Read Time' }
                ];

                var translatedCount = 0;

                for (var i = 0; i < fieldPairs.length; i++) {
                    var pair = fieldPairs[i];
                    var enText = getFieldValue(pair.en) || pair.fallbackEn || '';
                    if (!enText || !enText.trim()) continue;

                    // Translate if Arabic is empty OR if it doesn't contain Arabic letters (e.g. contains English text)
                    var arText = getFieldValue(pair.ar);
                    if (!arText || !hasArabic(arText) || arText.trim() === enText.trim()) {
                        buttonEl.innerHTML = '⏳ Translating ' + pair.label + '...';
                        var arabic = await callTranslateApi(enText);
                        if (arabic && hasArabic(arabic)) {
                            setFieldValue(pair.ar, arabic);
                            translatedCount++;
                        }
                    }
                }

                buttonEl.innerHTML = '✅ ' + (translatedCount > 0 ? (translatedCount + ' Fields Translated!') : 'Arabic Up To Date!');
                buttonEl.style.backgroundColor = '#16a34a';
                buttonEl.style.borderColor = '#15803d';

                setTimeout(function() {
                    buttonEl.innerHTML = origHtml;
                    buttonEl.disabled = false;
                    buttonEl.style.backgroundColor = '';
                    buttonEl.style.borderColor = '';
                    isTranslating = false;
                }, 3500);

            } catch (err) {
                console.error('[MVGL Translator Error]', err);
                buttonEl.innerHTML = '❌ Translation Error';
                setTimeout(function() {
                    buttonEl.innerHTML = origHtml;
                    buttonEl.disabled = false;
                    isTranslating = false;
                }, 3000);
            }
        }

        function createTranslateButton(extraClasses) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'button button-primary mvgl-translate-action-btn ' + (extraClasses || '');
            btn.innerHTML = '✨ Auto-Translate to Arabic';
            btn.style.fontWeight = 'bold';
            btn.style.backgroundColor = '#2563eb';
            btn.style.borderColor = '#1d4ed8';
            btn.style.color = '#ffffff';
            btn.style.cursor = 'pointer';
            btn.style.borderRadius = '6px';
            btn.style.transition = 'all 0.2s ease';

            btn.onclick = function(e) {
                e.preventDefault();
                runAutoTranslation(btn);
            };
            return btn;
        }

        function injectTranslationControls() {
            // 1. Inject Banner into every ACF Field Group Metabox (Products, Careers, Events, Insights)
            var postboxCandidates = Array.from(document.querySelectorAll('.acf-postbox, #acf-group_product_fields, #acf-group_career_fields, #acf-group_event_fields, #acf-group_blog_fields, #group_blog_fields, #group_event_fields, #group_product_fields, #group_career_fields, div[id*="group_product"], div[id*="group_career"], div[id*="group_event"], div[id*="group_blog"]'));
            
            document.querySelectorAll('.postbox').forEach(function(box) {
                if ((box.querySelector('.acf-fields') || (box.id && box.id.indexOf('group_') !== -1)) && postboxCandidates.indexOf(box) === -1) {
                    postboxCandidates.push(box);
                }
            });

            postboxCandidates.forEach(function(box) {
                if (box.querySelector('.mvgl-acf-translate-banner')) return;

                var banner = document.createElement('div');
                banner.className = 'mvgl-acf-translate-banner';
                banner.style.cssText = 'background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 1px solid #334155; border-radius: 8px; padding: 12px 16px; margin: 12px 14px 16px 14px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);';

                var info = document.createElement('div');
                info.innerHTML = '<strong style="color:#38bdf8; font-size:13px; display:block; margin-bottom:2px;">🌍 MVGL Arabic Auto-Translator</strong>' +
                                 '<span style="color:#94a3b8; font-size:12px;">Fill in English details, then click to automatically translate all fields to Arabic instantly.</span>';

                var actionBtn = createTranslateButton();
                actionBtn.style.padding = '6px 18px';
                actionBtn.style.fontSize = '13px';
                actionBtn.style.backgroundColor = '#10b981';
                actionBtn.style.borderColor = '#059669';

                banner.appendChild(info);
                banner.appendChild(actionBtn);

                var inside = box.querySelector('.inside') || box;
                inside.insertBefore(banner, inside.firstChild);
            });

            // 2. Inject into Classic Editor Submit Box
            var submitPost = document.getElementById('submitpost') || document.getElementById('major-publishing-actions');
            if (submitPost && !submitPost.querySelector('.mvgl-sidebar-translate-btn')) {
                var sideBtn = createTranslateButton('mvgl-sidebar-translate-btn');
                sideBtn.style.width = '100%';
                sideBtn.style.margin = '8px 0';
                sideBtn.style.padding = '8px 12px';
                submitPost.insertBefore(sideBtn, submitPost.firstChild);
            }

            // 3. Inject into Gutenberg Block Editor Toolbar / Settings
            var gutenbergHeader = document.querySelector('.edit-post-header__settings') || document.querySelector('.editor-header__settings');
            if (gutenbergHeader && !document.querySelector('.mvgl-gutenberg-translate-btn')) {
                var gBtn = createTranslateButton('mvgl-gutenberg-translate-btn');
                gBtn.style.marginRight = '8px';
                gBtn.style.marginLeft = '8px';
                gBtn.style.height = '32px';
                gBtn.style.lineHeight = '30px';
                gutenbergHeader.insertBefore(gBtn, gutenbergHeader.firstChild);
            }
        }

        // Initialize immediately and poll briefly for React/Gutenberg rendering
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectTranslationControls);
        } else {
            injectTranslationControls();
        }

        // Retry checks to guarantee injection in Gutenberg as panels load
        var pollCount = 0;
        var poller = setInterval(function() {
            pollCount++;
            injectTranslationControls();
            if (pollCount >= 12) clearInterval(poller);
        }, 800);

    })();
    </script>
    <?php
});

/**
 * Helper: Find existing post safely without deprecated functions
 */
if (!function_exists('mvgl_find_post')) {
    function mvgl_find_post($slug_or_title = '', $post_type = 'product') {
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
add_filter('manage_job_application_posts_columns', function($columns = []) {
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

add_action('manage_job_application_posts_custom_column', function($column = '', $post_id = 0) {
    if (empty($post_id)) return;
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
function mvgl_handle_job_application_submission($request = null) {
    if (!$request) {
        return new WP_Error('invalid_request', 'Invalid request', ['status' => 400]);
    }
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

/**
 * 11. One-Click Importer to Seed All Events into WordPress
 */
add_action('admin_menu', function() {
    add_submenu_page(
        'edit.php?post_type=event',
        'Import Frontend Events',
        '📥 Import All Events',
        'manage_options',
        'mvgl-import-events',
        'mvgl_render_import_events_page'
    );
});

if (!function_exists('mvgl_render_import_events_page')) {
function mvgl_render_import_events_page() {
    $seed_file = __DIR__ . '/frontend-events-seed.json';
    $message = '';

    if (isset($_POST['mvgl_do_import_events']) && check_admin_referer('mvgl_import_events_nonce')) {
        if (!file_exists($seed_file)) {
            $message = '<div class="notice notice-error"><p>Seed file frontend-events-seed.json not found in plugin directory.</p></div>';
        } else {
            $json_data = file_get_contents($seed_file);
            $events = json_decode($json_data, true);
            $imported = 0;
            $updated = 0;

            if (is_array($events)) {
                foreach ($events as $ev) {
                    $title_en = sanitize_text_field($ev['title_en'] ?? '');
                    $slug = sanitize_title($ev['slug'] ?? '');
                    if (empty($title_en)) continue;

                    $existing = mvgl_find_post($slug, 'event');
                    if (!$existing) {
                        $existing = mvgl_find_post($title_en, 'event');
                    }

                    if ($existing) {
                        $post_id = $existing->ID;
                        $updated++;
                    } else {
                        $post_id = wp_insert_post([
                            'post_title' => $title_en,
                            'post_name' => $slug,
                            'post_type' => 'event',
                            'post_status' => 'publish',
                            'post_content' => $ev['content_en'] ?? '',
                        ]);
                        $imported++;
                    }

                    if ($post_id && !is_wp_error($post_id)) {
                        $meta_map = [
                            'title_en' => $title_en,
                            'title_ar' => $ev['title_ar'] ?? '',
                            'date_en' => $ev['date_en'] ?? '',
                            'date_ar' => $ev['date_ar'] ?? '',
                            'time_en' => $ev['time_en'] ?? '',
                            'time_ar' => $ev['time_ar'] ?? '',
                            'location_en' => $ev['location_en'] ?? '',
                            'location_ar' => $ev['location_ar'] ?? '',
                            'event_type_en' => $ev['event_type_en'] ?? 'Technical Exhibition & Conference',
                            'event_type_ar' => $ev['event_type_ar'] ?? 'مؤتمر ومعرض تقني',
                            'status' => $ev['status'] ?? 'upcoming',
                            'description_en' => $ev['description_en'] ?? '',
                            'description_ar' => $ev['description_ar'] ?? '',
                            'content_en' => $ev['content_en'] ?? '',
                            'content_ar' => $ev['content_ar'] ?? '',
                            'registration_url' => $ev['registration_url'] ?? '',
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
                $message = '<div class="notice notice-success is-dismissible" style="padding:12px; margin:16px 0;"><p style="font-size:15px;">🎉 <strong>Events Imported Successfully!</strong> ' . $imported . ' events created, ' . $updated . ' events updated. All events can now be edited under <strong>Events &gt; All Events</strong>.</p></div>';
            }
        }
    }

    ?>
    <div class="wrap" style="max-width: 900px; padding: 20px 0;">
        <h1>📥 Import Frontend Events to WordPress CMS</h1>
        <div style="background:#fff; border:1px solid #ccd0d4; padding:24px; border-radius:10px; margin-top:20px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
            <h2 style="margin-top:0;">Manage All Events Directly From WordPress</h2>
            <p style="font-size:14px; line-height:1.6; color:#475569;">
                This tool automatically imports all frontend events into your WordPress CMS as full, editable <code>Event</code> posts with complete bilingual dates, locations, event types, agendas, and registration links.
            </p>
            <ul style="list-style:disc; margin-left:24px; color:#475569; font-size:14px; line-height:1.7;">
                <li><strong>SABIC Technical Conference 2026</strong> (Jubail Industrial City)</li>
                <li><strong>Saudi Water Forum</strong> (Riyadh International Convention Center)</li>
            </ul>
            <p style="font-size:14px; color:#475569;">
                Once imported, publishing or editing events will immediately reflect on the live website and generate full dynamic event detail pages!
            </p>

            <?php echo $message; ?>

            <form method="post" style="margin-top:24px;">
                <?php wp_nonce_field('mvgl_import_events_nonce'); ?>
                <p>
                    <input type="submit" name="mvgl_do_import_events" class="button button-primary button-hero" value="🚀 Import / Sync All Frontend Events to CMS" onclick="return confirm('Import all frontend events into WordPress? Existing events will be updated safely without duplicates.');" style="font-weight:bold; height:46px; line-height:44px; padding:0 28px;">
                </p>
            </form>
        </div>
    </div>
    <?php
}
}

/**
 * 12. One-Click Importer to Seed All Insights (Posts) into WordPress
 */
add_action('admin_menu', function() {
    add_submenu_page(
        'edit.php',
        'Import Frontend Insights',
        '📥 Import All Insights',
        'manage_options',
        'mvgl-import-insights',
        'mvgl_render_import_insights_page'
    );
});

if (!function_exists('mvgl_render_import_insights_page')) {
function mvgl_render_import_insights_page() {
    $seed_file = __DIR__ . '/frontend-insights-seed.json';
    $message = '';

    if (isset($_POST['mvgl_do_import_insights']) && check_admin_referer('mvgl_import_insights_nonce')) {
        if (!file_exists($seed_file)) {
            $message = '<div class="notice notice-error"><p>Seed file frontend-insights-seed.json not found in plugin directory.</p></div>';
        } else {
            $json_data = file_get_contents($seed_file);
            $insights = json_decode($json_data, true);
            $imported = 0;
            $updated = 0;

            if (is_array($insights)) {
                foreach ($insights as $item) {
                    $title_en = sanitize_text_field($item['title_en'] ?? '');
                    $slug = sanitize_title($item['slug'] ?? '');
                    if (empty($title_en)) continue;

                    $existing = mvgl_find_post($slug, 'post');
                    if (!$existing) {
                        $existing = mvgl_find_post($title_en, 'post');
                    }

                    if ($existing) {
                        $post_id = $existing->ID;
                        $updated++;
                    } else {
                        $post_id = wp_insert_post([
                            'post_title' => $title_en,
                            'post_name' => $slug,
                            'post_type' => 'post',
                            'post_status' => 'publish',
                            'post_content' => $item['content_en'] ?? '',
                            'post_excerpt' => $item['excerpt_en'] ?? '',
                        ]);
                        $imported++;
                    }

                    if ($post_id && !is_wp_error($post_id)) {
                        $meta_map = [
                            'tag_en' => $item['tag_en'] ?? 'INSIGHTS',
                            'tag_ar' => $item['tag_ar'] ?? 'رؤى صناعية',
                            'title_ar' => $item['title_ar'] ?? '',
                            'excerpt_en' => $item['excerpt_en'] ?? '',
                            'excerpt_ar' => $item['excerpt_ar'] ?? '',
                            'content_ar' => $item['content_ar'] ?? '',
                            'read_time_en' => $item['read_time_en'] ?? '5 min read',
                            'read_time_ar' => $item['read_time_ar'] ?? '٥ دقائق قراءة',
                            'author_name' => $item['author_name'] ?? 'MVGL Engineering Team',
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
                $message = '<div class="notice notice-success is-dismissible" style="padding:12px; margin:16px 0;"><p style="font-size:15px;">🎉 <strong>Insights Imported Successfully!</strong> ' . $imported . ' articles created, ' . $updated . ' articles updated. All 7 industrial insights can now be edited under <strong>Posts &gt; All Posts</strong>.</p></div>';
            }
        }
    }

    ?>
    <div class="wrap" style="max-width: 900px; padding: 20px 0;">
        <h1>📥 Import Frontend Insights to WordPress CMS</h1>
        <div style="background:#fff; border:1px solid #ccd0d4; padding:24px; border-radius:10px; margin-top:20px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
            <h2 style="margin-top:0;">Manage All Industrial Insights &amp; Articles Directly From WordPress</h2>
            <p style="font-size:14px; line-height:1.6; color:#475569;">
                This tool imports all <strong>7 frontend industrial insights &amp; articles</strong> (including the Featured Insight) into your WordPress CMS as editable <code>Post</code> items with bilingual tags, excerpts, complete multi-paragraph article content, read times, and author bylines.
            </p>
            <ul style="list-style:disc; margin-left:24px; color:#475569; font-size:14px; line-height:1.7;">
                <li><strong>SUPPLY CHAIN:</strong> Building Resilient Industrial Supply Chains in Saudi Arabia (Featured)</li>
                <li><strong>DIGITALIZATION:</strong> Smart Technologies for the Transformation of Industry</li>
                <li><strong>ROBOTICS:</strong> Collaborative Robots: Shaping the Future of Manufacturing</li>
                <li><strong>AUTOMATION:</strong> Advancing Control Systems through Connected Devices</li>
                <li><strong>MATERIALS:</strong> The Rise of Advanced Composites in Heavy Industry</li>
                <li><strong>ENERGY:</strong> Optimizing Cooling Systems for Energy Efficiency</li>
                <li><strong>LOGISTICS:</strong> Navigating Global Trade and Port Performance</li>
            </ul>
            <p style="font-size:14px; color:#475569;">
                Once imported, you can edit content, write new articles, publish them, and dynamic article pages will generate on the website automatically!
            </p>

            <?php echo $message; ?>

            <form method="post" style="margin-top:24px;">
                <?php wp_nonce_field('mvgl_import_insights_nonce'); ?>
                <p>
                    <input type="submit" name="mvgl_do_import_insights" class="button button-primary button-hero" value="🚀 Import / Sync All 7 Frontend Insights to CMS" onclick="return confirm('Import all 7 frontend insights into WordPress? Existing articles will be updated safely without duplicates.');" style="font-weight:bold; height:46px; line-height:44px; padding:0 28px;">
                </p>
            </form>
        </div>
    </div>
    <?php
}
}
