import { eventsData, type EventItem } from '../data/events'
import { jobsData, type JobOpening } from '../data/jobs'
import { solutionsData, type Solution } from '../data/solutions'
import { insightsData, type InsightItem } from '../data/insights'

export type BlogPostItem = InsightItem
export type { InsightItem }
export type { EventItem }

export const WP_GRAPHQL_URL =
  import.meta.env.VITE_WP_GRAPHQL_URL || 'https://saudicms.multivistaprintsolutions.com/graphql'

export const WP_REST_APPLY_URL =
  import.meta.env.VITE_WP_REST_APPLY_URL || 'https://saudicms.multivistaprintsolutions.com/wp-json/mvgl/v1/apply-job'

/**
 * Generic GraphQL Fetcher with robust error handling and cache-busting
 */
export async function fetchGraphQL<T = any>(query: string, variables = {}): Promise<T | null> {
  try {
    const url = `${WP_GRAPHQL_URL}${WP_GRAPHQL_URL.includes('?') ? '&' : '?'}_t=${Date.now()}`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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

// In-Memory and LocalStorage Cache for 0ms Instant Rendering of Events
const CACHE_KEY_EVENTS = 'mvgl_cache_events'
let inMemoryEvents: EventItem[] | null = null

/**
 * Synchronous instant cache getter for Events (0ms latency, zero delay)
 */
export function getCachedEvents(): EventItem[] {
  if (!inMemoryEvents) {
    try {
      const stored = localStorage.getItem(CACHE_KEY_EVENTS)
      if (stored) {
        inMemoryEvents = JSON.parse(stored)
      }
    } catch {}
  }

  if (inMemoryEvents && inMemoryEvents.length > 0) {
    return inMemoryEvents
  }
  return eventsData
}

/**
 * 1. Fetch Events from Headless WordPress (with instant cache & smart merge)
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
            timeEn
            timeAr
            locationEn
            locationAr
            eventTypeEn
            eventTypeAr
            status
            descriptionEn
            descriptionAr
            contentEn
            contentAr
            registrationUrl
          }
        }
      }
    }
  `

  const data = await fetchGraphQL<{ events: { nodes: any[] } }>(query)
  if (data?.events?.nodes && Array.isArray(data.events.nodes)) {
    const cmsMap = new Map<string, EventItem>()

    data.events.nodes.forEach((node) => {
      const f = node.eventFields || {}
      const titleEn = f.titleEn || node.slug || 'Event'
      const titleAr = f.titleAr || titleEn
      const slug = node.slug || node.id

      const evItem: EventItem = {
        id: slug || node.id,
        slug: slug,
        title: {
          en: titleEn,
          ar: titleAr,
        },
        date: {
          en: f.dateEn || '',
          ar: f.dateAr || f.dateEn || '',
        },
        time: {
          en: f.timeEn || '',
          ar: f.timeAr || f.timeEn || '',
        },
        location: {
          en: f.locationEn || '',
          ar: f.locationAr || f.locationEn || '',
        },
        eventType: {
          en: f.eventTypeEn || 'Technical Exhibition & Conference',
          ar: f.eventTypeAr || f.eventTypeEn || 'مؤتمر ومعرض تقني',
        },
        status: f.status || 'upcoming',
        description: {
          en: f.descriptionEn || '',
          ar: f.descriptionAr || f.descriptionEn || '',
        },
        content: {
          en: f.contentEn || f.descriptionEn || '',
          ar: f.contentAr || f.descriptionAr || f.contentEn || '',
        },
        image:
          node.featuredImage?.node?.sourceUrl ||
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
        registrationUrl: f.registrationUrl || undefined,
      }

      if (slug) cmsMap.set(slug.toLowerCase(), evItem)
      if (titleEn) cmsMap.set(titleEn.toLowerCase(), evItem)
    })

    // Merge logic:
    // 1. Process static fallback events: override if CMS customized them
    const mergedList: EventItem[] = []
    const usedSlugs = new Set<string>()

    for (const staticEv of eventsData) {
      const match =
        cmsMap.get(staticEv.slug.toLowerCase()) ||
        cmsMap.get(staticEv.id.toLowerCase()) ||
        cmsMap.get(staticEv.title.en.toLowerCase())

      if (match) {
        usedSlugs.add(match.slug.toLowerCase())
        usedSlugs.add(match.id.toLowerCase())
        mergedList.push(match)
      } else {
        mergedList.push(staticEv)
      }
    }

    // 2. Prepend brand-new events published from CMS
    data.events.nodes.forEach((node) => {
      const f = node.eventFields || {}
      const titleEn = f.titleEn || node.slug || ''
      const slug = node.slug || node.id

      if (usedSlugs.has(slug.toLowerCase()) || (titleEn && usedSlugs.has(titleEn.toLowerCase()))) {
        return // already merged
      }

      usedSlugs.add(slug.toLowerCase())

      const newEv: EventItem = {
        id: slug || node.id,
        slug: slug,
        title: {
          en: titleEn || 'Event',
          ar: f.titleAr || titleEn || 'فعالية',
        },
        date: {
          en: f.dateEn || '',
          ar: f.dateAr || f.dateEn || '',
        },
        time: {
          en: f.timeEn || '',
          ar: f.timeAr || f.timeEn || '',
        },
        location: {
          en: f.locationEn || '',
          ar: f.locationAr || f.locationEn || '',
        },
        eventType: {
          en: f.eventTypeEn || 'Technical Exhibition & Conference',
          ar: f.eventTypeAr || f.eventTypeEn || 'مؤتمر ومعرض تقني',
        },
        status: f.status || 'upcoming',
        description: {
          en: f.descriptionEn || '',
          ar: f.descriptionAr || f.descriptionEn || '',
        },
        content: {
          en: f.contentEn || f.descriptionEn || '',
          ar: f.contentAr || f.descriptionAr || f.contentEn || '',
        },
        image:
          node.featuredImage?.node?.sourceUrl ||
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
        registrationUrl: f.registrationUrl || undefined,
      }

      mergedList.unshift(newEv)
    })

    if (mergedList.length > 0) {
      inMemoryEvents = mergedList
      try {
        localStorage.setItem(CACHE_KEY_EVENTS, JSON.stringify(mergedList))
      } catch {}
      return mergedList
    }
  }

  return getCachedEvents()
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

// In-Memory and LocalStorage Cache for 0ms Instant Rendering of Careers
const CACHE_KEY_CAREERS = 'mvgl_cache_careers'
let inMemoryCareers: JobOpening[] | null = null

/**
 * Synchronous instant cache getter for Careers (0ms latency, zero delay)
 */
export function getCachedCareers(): JobOpening[] {
  if (!inMemoryCareers) {
    try {
      const stored = localStorage.getItem(CACHE_KEY_CAREERS)
      if (stored) {
        inMemoryCareers = JSON.parse(stored)
      }
    } catch {}
  }

  if (inMemoryCareers && inMemoryCareers.length > 0) {
    return inMemoryCareers
  }
  return jobsData
}

/**
 * 2. Fetch Careers / Jobs from Headless WordPress with instant cache & smart merge
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
  if (data?.careers?.nodes && Array.isArray(data.careers.nodes)) {
    const cmsMap = new Map<string, { job: JobOpening; isActive: boolean }>()

    data.careers.nodes.forEach((node) => {
      const f = node.careerFields || {}
      const isActive = f.isActive !== false
      const titleEn = f.titleEn || node.slug || 'Job Opening'
      const titleAr = f.titleAr || titleEn
      const jobCode = f.jobCode || ''
      const slug = node.slug || (jobCode ? jobCode.toLowerCase() : node.id)

      const jobItem: JobOpening = {
        id: slug || node.id,
        code: jobCode || 'VM-NEW',
        slug: slug,
        title: {
          en: titleEn,
          ar: titleAr,
        },
        department: {
          en: f.departmentEn || 'Engineering',
          ar: f.departmentAr || f.departmentEn || 'الهندسة',
        },
        designation: {
          en: f.designationEn || titleEn,
          ar: f.designationAr || titleAr,
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

      if (jobCode) cmsMap.set(jobCode.toLowerCase(), { job: jobItem, isActive })
      if (slug) cmsMap.set(slug.toLowerCase(), { job: jobItem, isActive })
      if (titleEn) cmsMap.set(titleEn.toLowerCase(), { job: jobItem, isActive })
    })

    // Merge logic:
    // 1. Process static fallback jobs: override if CMS has customized them, or hide if deactivated
    const mergedList: JobOpening[] = []
    const usedCmsSlugs = new Set<string>()

    for (const staticJob of jobsData) {
      const match =
        cmsMap.get(staticJob.code.toLowerCase()) ||
        cmsMap.get(staticJob.slug.toLowerCase()) ||
        cmsMap.get(staticJob.title.en.toLowerCase())

      if (match) {
        usedCmsSlugs.add(match.job.slug.toLowerCase())
        usedCmsSlugs.add(match.job.code.toLowerCase())
        if (match.isActive) {
          mergedList.push(match.job)
        }
      } else {
        mergedList.push(staticJob)
      }
    }

    // 2. Prepend brand-new active CMS jobs created from WordPress
    data.careers.nodes.forEach((node) => {
      const f = node.careerFields || {}
      if (f.isActive === false) return
      const titleEn = f.titleEn || node.slug || ''
      const jobCode = f.jobCode || ''
      const slug = node.slug || (jobCode ? jobCode.toLowerCase() : node.id)

      if (
        (jobCode && usedCmsSlugs.has(jobCode.toLowerCase())) ||
        (slug && usedCmsSlugs.has(slug.toLowerCase()))
      ) {
        return // already merged
      }

      usedCmsSlugs.add(slug.toLowerCase())
      if (jobCode) usedCmsSlugs.add(jobCode.toLowerCase())

      const newJob: JobOpening = {
        id: slug || node.id,
        code: jobCode || 'VM-NEW',
        slug: slug,
        title: {
          en: titleEn || 'Job Opening',
          ar: f.titleAr || titleEn || 'وظيفة شاغرة',
        },
        department: {
          en: f.departmentEn || 'Engineering',
          ar: f.departmentAr || f.departmentEn || 'الهندسة',
        },
        designation: {
          en: f.designationEn || titleEn,
          ar: f.designationAr || titleEn,
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

      mergedList.unshift(newJob)
    })

    if (mergedList.length > 0) {
      inMemoryCareers = mergedList
      try {
        localStorage.setItem(CACHE_KEY_CAREERS, JSON.stringify(mergedList))
      } catch {}
      return mergedList
    }
  }

  return getCachedCareers()
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
            specsEn
            specsAr
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

  const data = await fetchGraphQL<{ products: { nodes: any[] } }>(query)
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
          en: parseLines(f.specsEn),
          ar: parseLines(f.specsAr),
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

  const data = await fetchGraphQL<{ products: { nodes: any[] } }>(query)
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

// In-Memory and LocalStorage Cache for 0ms Instant Rendering of Insights
const CACHE_KEY_INSIGHTS = 'mvgl_cache_insights'
let inMemoryInsights: InsightItem[] | null = null

/**
 * Synchronous instant cache getter for Insights (0ms latency, zero delay)
 */
export function getCachedInsights(): InsightItem[] {
  if (!inMemoryInsights) {
    try {
      const stored = localStorage.getItem(CACHE_KEY_INSIGHTS)
      if (stored) {
        inMemoryInsights = JSON.parse(stored)
      }
    } catch {}
  }

  if (inMemoryInsights && inMemoryInsights.length > 0) {
    return inMemoryInsights
  }
  return insightsData
}

/**
 * 4. Fetch Blogs / Insights (Posts) from Headless WordPress with instant cache & smart merge
 */
export async function getBlogs(): Promise<InsightItem[]> {
  return getInsights()
}

export async function getInsights(): Promise<InsightItem[]> {
  const query = `
    query GetPosts {
      posts(first: 100) {
        nodes {
          id
          slug
          date
          title
          content
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
            readTimeEn
            readTimeAr
            authorName
          }
        }
      }
    }
  `

  const data = await fetchGraphQL<{ posts: { nodes: any[] } }>(query)
  if (data?.posts?.nodes && Array.isArray(data.posts.nodes)) {
    const cmsMap = new Map<string, InsightItem>()

    // Exclude default placeholder post if unconfigured
    const validNodes = data.posts.nodes.filter(
      (n) => n.slug !== 'hello-world' || (n.blogFields?.tagEn && n.title !== 'Hello world!')
    )

    validNodes.forEach((node) => {
      const f = node.blogFields || {}
      const titleEn = node.title || f.titleEn || 'Insight'
      const titleAr = f.titleAr || titleEn
      const slug = node.slug || node.id
      const dateFormattedEn = node.date
        ? new Date(node.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
        : 'Recent'
      const dateFormattedAr = node.date
        ? new Date(node.date).toLocaleDateString('ar-SA', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
        : 'حديثاً'

      const item: InsightItem = {
        id: slug || node.id,
        slug: slug,
        tag: {
          en: f.tagEn || 'INSIGHTS',
          ar: f.tagAr || f.tagEn || 'رؤى صناعية',
        },
        title: {
          en: titleEn,
          ar: titleAr,
        },
        desc: {
          en: f.excerptEn || '',
          ar: f.excerptAr || f.excerptEn || '',
        },
        content: {
          en: node.content || f.excerptEn || '',
          ar: f.contentAr || f.excerptAr || node.content || '',
        },
        date: {
          en: dateFormattedEn,
          ar: dateFormattedAr,
        },
        image:
          node.featuredImage?.node?.sourceUrl ||
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
        readTime: {
          en: f.readTimeEn || '5 min read',
          ar: f.readTimeAr || '٥ دقائق قراءة',
        },
        author: {
          en: f.authorName || 'MVGL Engineering Team',
          ar: 'فريق الهندسة - إم في جي إل',
        },
      }

      if (slug) cmsMap.set(slug.toLowerCase(), item)
      if (titleEn) cmsMap.set(titleEn.toLowerCase(), item)
    })

    // Merge logic:
    // 1. Process static fallback insights
    const mergedList: InsightItem[] = []
    const usedSlugs = new Set<string>()

    for (const staticItem of insightsData) {
      const match =
        cmsMap.get(staticItem.slug.toLowerCase()) ||
        cmsMap.get(staticItem.id.toString().toLowerCase()) ||
        cmsMap.get(staticItem.title.en.toLowerCase())

      if (match) {
        usedSlugs.add(match.slug.toLowerCase())
        usedSlugs.add(match.id.toString().toLowerCase())
        mergedList.push(match)
      } else {
        mergedList.push(staticItem)
      }
    }

    // 2. Prepend brand-new posts published from CMS
    validNodes.forEach((node) => {
      const slug = node.slug || node.id
      const titleEn = node.title || ''

      if (usedSlugs.has(slug.toLowerCase()) || (titleEn && usedSlugs.has(titleEn.toLowerCase()))) {
        return // already merged
      }

      usedSlugs.add(slug.toLowerCase())

      const f = node.blogFields || {}
      const titleAr = f.titleAr || titleEn
      const dateFormattedEn = node.date
        ? new Date(node.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
        : 'Recent'
      const dateFormattedAr = node.date
        ? new Date(node.date).toLocaleDateString('ar-SA', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
        : 'حديثاً'

      const newItem: InsightItem = {
        id: slug || node.id,
        slug: slug,
        tag: {
          en: f.tagEn || 'INSIGHTS',
          ar: f.tagAr || f.tagEn || 'رؤى صناعية',
        },
        title: {
          en: titleEn || 'Insight',
          ar: titleAr || titleEn || 'رؤية صناعية',
        },
        desc: {
          en: f.excerptEn || '',
          ar: f.excerptAr || f.excerptEn || '',
        },
        content: {
          en: node.content || f.excerptEn || '',
          ar: f.contentAr || f.excerptAr || node.content || '',
        },
        date: {
          en: dateFormattedEn,
          ar: dateFormattedAr,
        },
        image:
          node.featuredImage?.node?.sourceUrl ||
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
        readTime: {
          en: f.readTimeEn || '5 min read',
          ar: f.readTimeAr || '٥ دقائق قراءة',
        },
        author: {
          en: f.authorName || 'MVGL Engineering Team',
          ar: 'فريق الهندسة - إم في جي إل',
        },
      }

      mergedList.unshift(newItem)
    })

    if (mergedList.length > 0) {
      inMemoryInsights = mergedList
      try {
        localStorage.setItem(CACHE_KEY_INSIGHTS, JSON.stringify(mergedList))
      } catch {}
      return mergedList
    }
  }

  return getCachedInsights()
}
