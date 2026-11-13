import { eventsData, type EventItem } from '../data/events'
import { jobsData, type JobOpening } from '../data/jobs'
import { solutionsData, type Solution } from '../data/solutions'

export interface BlogPostItem {
  id: number | string
  slug?: string
  tag: { en: string; ar: string }
  title: { en: string; ar: string }
  desc: { en: string; ar: string }
  date: { en: string; ar: string }
  image: string
  content?: { en: string; ar: string }
}

export const WP_GRAPHQL_URL =
  import.meta.env.VITE_WP_GRAPHQL_URL || 'https://saudicms.multivistaprintsolutions.com/graphql'

/**
 * Generic GraphQL Fetcher with robust error handling, cache-busting, and fallback
 */
export async function fetchGraphQL<T = any>(query: string, variables = {}): Promise<T | null> {
  try {
    const url = `${WP_GRAPHQL_URL}${WP_GRAPHQL_URL.includes('?') ? '&' : '?'}_t=${Date.now()}`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
      cache: 'no-store',
      body: JSON.stringify({ query, variables }),
    })

    if (!res.ok) {
      console.warn(`[WPGraphQL] Request failed with HTTP ${res.status}`)
      return null
    }

    const json = await res.json()
    if (json.errors && json.errors.length > 0) {
      console.warn('[WPGraphQL] Query returned errors:', json.errors)
    }
    return json.data || null
  } catch (err) {
    console.warn('[WPGraphQL] Connection error, using static fallback:', err)
    return null
  }
}

/**
 * 1. Fetch Events from Headless WordPress (with static fallback)
 */
export async function getEvents(): Promise<EventItem[]> {
  const query = `
    query GetEvents {
      events(first: 100) {
        nodes {
          id
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          eventFields {
            titleEn
            titleAr
            dateEn
            dateAr
            locationEn
            locationAr
            descriptionEn
            descriptionAr
          }
        }
      }
    }
  `

  const data = await fetchGraphQL<{ events: { nodes: any[] } }>(query)
  if (data?.events?.nodes && data.events.nodes.length > 0) {
    return data.events.nodes.map((node) => {
      const f = node.eventFields || {}
      return {
        id: node.slug || node.id,
        title: {
          en: f.titleEn || node.slug || 'Event',
          ar: f.titleAr || f.titleEn || 'فعالية',
        },
        date: {
          en: f.dateEn || '',
          ar: f.dateAr || f.dateEn || '',
        },
        location: {
          en: f.locationEn || '',
          ar: f.locationAr || f.locationEn || '',
        },
        description: {
          en: f.descriptionEn || '',
          ar: f.descriptionAr || f.descriptionEn || '',
        },
        image:
          node.featuredImage?.node?.sourceUrl ||
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      }
    })
  }

  // Fallback to static data
  return eventsData
}

/**
 * Helper to split multi-line textareas into string arrays
 */
function parseLines(text?: string): string[] {
  if (!text) return []
  return text
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
}

/**
 * 2. Fetch Careers / Jobs from Headless WordPress (with static fallback)
 */
export async function getCareers(): Promise<JobOpening[]> {
  const query = `
    query GetCareers {
      careers(first: 100) {
        nodes {
          id
          slug
          careerFields {
            jobCode
            isActive
            titleEn
            titleAr
            departmentEn
            departmentAr
            designationEn
            designationAr
            locationEn
            locationAr
            experienceEn
            experienceAr
            employmentTypeEn
            employmentTypeAr
            aboutRoleEn
            aboutRoleAr
            responsibilitiesEn
            responsibilitiesAr
            requirementsEn
            requirementsAr
          }
        }
      }
    }
  `

  const data = await fetchGraphQL<{ careers: { nodes: any[] } }>(query)
  if (data?.careers?.nodes && data.careers.nodes.length > 0) {
    const validJobs = data.careers.nodes
      .filter((node) => node.careerFields?.isActive !== false)
      .map((node) => {
        const f = node.careerFields || {}
        return {
          id: node.slug || node.id,
          code: f.jobCode || 'VM-NEW',
          slug: node.slug || node.id,
          title: {
            en: f.titleEn || 'Job Opening',
            ar: f.titleAr || f.titleEn || 'وظيفة شاغرة',
          },
          department: {
            en: f.departmentEn || 'Engineering',
            ar: f.departmentAr || f.departmentEn || 'الهندسة',
          },
          designation: {
            en: f.designationEn || f.titleEn || 'Engineer',
            ar: f.designationAr || f.titleAr || 'مهندس',
          },
          location: {
            en: f.locationEn || 'Saudi Arabia',
            ar: f.locationAr || 'المملكة العربية السعودية',
          },
          experience: {
            en: f.experienceEn || '3-5 Years',
            ar: f.experienceAr || '٣-٥ سنوات',
          },
          employmentType: {
            en: f.employmentTypeEn || 'Full-time',
            ar: f.employmentTypeAr || 'دوام كامل',
          },
          aboutRole: {
            en: f.aboutRoleEn || '',
            ar: f.aboutRoleAr || f.aboutRoleEn || '',
          },
          responsibilities: {
            en: parseLines(f.responsibilitiesEn),
            ar: parseLines(f.responsibilitiesAr),
          },
          requirements: {
            en: parseLines(f.requirementsEn),
            ar: parseLines(f.requirementsAr),
          },
        }
      })

    if (validJobs.length > 0) {
      return validJobs
    }
  }

  // Fallback to static jobs
  return jobsData
}

/**
 * 3. Fetch Products / Solutions from Headless WordPress (with static fallback)
 */
export async function getProducts(): Promise<Solution[]> {
  const query = `
    query GetProducts {
      products(first: 100) {
        nodes {
          id
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          productFields {
            category
            titleEn
            titleAr
            descriptionEn
            descriptionAr
            featuresEn
            featuresAr
            brochurePdf {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `

  let data = await fetchGraphQL<{ products: { nodes: any[] } }>(query)
  if (!data?.products) {
    // Graceful fallback if exploreUrl is not yet registered on the WordPress backend
    const fallbackQuery = query.replace('exploreUrl', '')
    data = await fetchGraphQL<{ products: { nodes: any[] } }>(fallbackQuery)
  }
  if (data?.products?.nodes && data.products.nodes.length > 0) {
    return data.products.nodes.map((node) => {
      const f = node.productFields || {}
      const rawCategory = Array.isArray(f.category) ? f.category[0] : f.category
      const category = (typeof rawCategory === 'string' && rawCategory.trim()) ? rawCategory.trim() : 'mechanical'
      const titleEn = f.titleEn || node.slug || 'Product'
      const titleAr = f.titleAr || titleEn

      return {
        id: node.slug || node.id,
        slug: node.slug || node.id,
        category: category as any,
        title: {
          en: titleEn,
          ar: titleAr,
        },
        description: {
          en: f.descriptionEn || '',
          ar: f.descriptionAr || f.descriptionEn || '',
        },
        features: {
          en: parseLines(f.featuresEn),
          ar: parseLines(f.featuresAr),
        },
        image:
          node.featuredImage?.node?.sourceUrl ||
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        partners: [],
      }
    })
  }

  // Fallback to static solutions
  return solutionsData
}

export interface PartnerProduct {
  id: string | number
  slug: string
  partner: string
  solution: string
  category: string
  tag: string
  title: {
    en: string
    ar: string
  }
  desc: {
    en: string
    ar: string
  }
  specs: {
    en: string
    ar: string
  }
  image: string
  brochureUrl?: string
  exploreUrl?: string
}

// In-Memory and LocalStorage Cache for 0ms Instant Rendering
const CACHE_KEY_PRODUCTS = 'mvgl_cache_partner_products'
let inMemoryProducts: PartnerProduct[] | null = null

/**
 * Synchronous instant cache getter (0ms latency, zero delay)
 */
export function getCachedPartnerProducts(partnerSlug?: string): PartnerProduct[] {
  if (!inMemoryProducts) {
    try {
      const stored = localStorage.getItem(CACHE_KEY_PRODUCTS)
      if (stored) {
        inMemoryProducts = JSON.parse(stored)
      }
    } catch {}
  }

  if (inMemoryProducts && inMemoryProducts.length > 0) {
    if (partnerSlug) {
      return inMemoryProducts.filter((p) => p.partner === partnerSlug.toLowerCase())
    }
    return inMemoryProducts
  }
  return []
}

/**
 * Fetch products assigned to a specific partner from WordPress with instant cache & background revalidation
 */
export async function getPartnerProducts(partnerSlug?: string): Promise<PartnerProduct[]> {
  const query = `
    query GetPartnerProducts {
      products(first: 200) {
        nodes {
          id
          slug
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          productFields {
            partner
            solution
            subcategory
            titleEn
            titleAr
            specsEn
            specsAr
            descriptionEn
            descriptionAr
            exploreUrl
            brochurePdf {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `

  let data = await fetchGraphQL<{ products: { nodes: any[] } }>(query)
  if (!data?.products) {
    // Graceful fallback if exploreUrl is not yet registered on the WordPress backend
    const fallbackQuery = query.replace('exploreUrl', '')
    data = await fetchGraphQL<{ products: { nodes: any[] } }>(fallbackQuery)
  }
  if (data?.products?.nodes && data.products.nodes.length > 0) {
    const all: PartnerProduct[] = data.products.nodes.map((node) => {
      const f = node.productFields || {}
      const rawPartner = Array.isArray(f.partner) ? f.partner[0] : f.partner
      const partner = typeof rawPartner === 'string' ? rawPartner.trim().toLowerCase() : ''
      const rawSolution = Array.isArray(f.solution) ? f.solution[0] : f.solution
      const solution = typeof rawSolution === 'string' ? rawSolution.trim().toLowerCase() : ''
      const subcategory = typeof f.subcategory === 'string' && f.subcategory.trim() ? f.subcategory.trim().toLowerCase() : 'all'

      const titleEn = f.titleEn || node.title || 'Product'
      const titleAr = f.titleAr || titleEn

      return {
        id: node.slug || node.id,
        slug: node.slug || node.id,
        partner,
        solution,
        category: subcategory,
        tag: partner.replace('-', ' ').toUpperCase(),
        title: {
          en: titleEn,
          ar: titleAr,
        },
        desc: {
          en: f.descriptionEn || '',
          ar: f.descriptionAr || f.descriptionEn || '',
        },
        specs: {
          en: f.specsEn || '',
          ar: f.specsAr || f.specsEn || '',
        },
        image:
          node.featuredImage?.node?.sourceUrl ||
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        brochureUrl: f.brochurePdf?.node?.mediaItemUrl || undefined,
        exploreUrl: f.exploreUrl || undefined,
      }
    })

    // Update in-memory and persistent cache
    inMemoryProducts = all
    try {
      localStorage.setItem(CACHE_KEY_PRODUCTS, JSON.stringify(all))
    } catch {}

    if (partnerSlug) {
      return all.filter((p) => p.partner === partnerSlug.toLowerCase())
    }
    return all
  }

  return getCachedPartnerProducts(partnerSlug)
}

/**
 * Preload all CMS data in background when site opens for 0ms transitions
 */
export function preloadCmsData() {
  getPartnerProducts()
  getEvents()
  getCareers()
  getBlogs()
}

/**
 * 4. Fetch Blogs (Posts) from Headless WordPress
 */
export async function getBlogs(): Promise<BlogPostItem[]> {
  const query = `
    query GetPosts {
      posts(first: 50) {
        nodes {
          id
          slug
          date
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          blogFields {
            tagEn
            tagAr
            titleAr
            excerptEn
            excerptAr
            contentAr
          }
          content
        }
      }
    }
  `

  const data = await fetchGraphQL<{ posts: { nodes: any[] } }>(query)
  if (data?.posts?.nodes && data.posts.nodes.length > 0) {
    return data.posts.nodes.map((node, idx) => {
      const f = node.blogFields || {}
      return {
        id: node.id || idx + 1,
        slug: node.slug,
        tag: {
          en: f.tagEn || 'INSIGHTS',
          ar: f.tagAr || 'رؤى صناعية',
        },
        title: {
          en: node.title || 'Insight',
          ar: f.titleAr || node.title || 'رؤية صناعية',
        },
        desc: {
          en: f.excerptEn || '',
          ar: f.excerptAr || f.excerptEn || '',
        },
        date: {
          en: new Date(node.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }),
          ar: new Date(node.date).toLocaleDateString('ar-SA', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }),
        },
        image:
          node.featuredImage?.node?.sourceUrl ||
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
        content: {
          en: node.content || '',
          ar: f.contentAr || node.content || '',
        },
      }
    })
  }

  return []
}
