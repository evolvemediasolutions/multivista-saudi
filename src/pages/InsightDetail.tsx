import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Loader2 
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { getInsights, getCachedInsights, type InsightItem } from '../services/graphql'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function InsightDetail() {
  const { locale, dir } = useLanguage()
  const { slug } = useParams<{ slug: string }>()

  // Initialize with cached insights for instant 0ms load
  const [insightsList, setInsightsList] = useState<InsightItem[]>(() => getCachedInsights())
  const initialInsight = getCachedInsights().find(
    (i) => i.slug === slug || i.id.toString() === slug
  )
  const [isLoading, setIsLoading] = useState(!initialInsight)
  const [copied, setCopied] = useState(false)

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  useEffect(() => {
    let mounted = true
    getInsights()
      .then((items) => {
        if (mounted) {
          if (items && items.length > 0) {
            setInsightsList(items)
          }
          setIsLoading(false)
        }
      })
      .catch(() => {
        if (mounted) setIsLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [slug])

  const insight = insightsList.find(
    (i) => i.slug === slug || i.id.toString() === slug
  )

  // Loading skeleton state
  if (!insight && isLoading) {
    return (
      <div className="font-sans min-h-screen bg-slate-50 text-slate-900 pb-24">
        <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full min-h-[380px] rounded-3xl bg-slate-900 animate-pulse flex flex-col items-center justify-center p-8 space-y-4">
            <Loader2 className="w-10 h-10 text-emerald-400 animate-spin" />
            <div className="h-6 w-48 bg-slate-800 rounded-lg"></div>
            <div className="h-10 w-96 max-w-full bg-slate-800 rounded-lg"></div>
          </div>
        </div>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 mt-12 space-y-6">
          <div className="h-96 bg-white rounded-3xl border border-slate-200 animate-pulse"></div>
          <div className="h-48 bg-white rounded-3xl border border-slate-200 animate-pulse"></div>
        </div>
      </div>
    )
  }

  // Not found after fetch completed
  if (!insight) {
    return <Navigate to={`/${locale}/insights`} replace />
  }

  const title = insight.title[locale] || insight.title.en
  const desc = insight.desc[locale] || insight.desc.en
  const tag = insight.tag[locale] || insight.tag.en
  const date = insight.date[locale] || insight.date.en
  const readTime = insight.readTime?.[locale] || insight.readTime?.en || '5 min read'
  const author = insight.author?.[locale] || insight.author?.en || 'MVGL Engineering Team'
  const content = insight.content?.[locale] || insight.content?.en || desc

  // Related insights (exclude current)
  const relatedInsights = insightsList
    .filter((i) => (i.slug || i.id.toString()) !== (insight.slug || insight.id.toString()))
    .slice(0, 3)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Hero Header */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full rounded-3xl overflow-hidden bg-slate-950 text-white p-8 sm:p-14 lg:p-16 shadow-xl">
          <div className="max-w-4xl mx-auto space-y-6 text-start">
            
            {/* Breadcrumb Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
              <Link to={localizedPath('/')} className="hover:text-white transition-colors">
                {locale === 'ar' ? 'الرئيسية' : 'HOME'}
              </Link>
              <span>/</span>
              <Link to={localizedPath('/insights')} className="hover:text-white transition-colors">
                {locale === 'ar' ? 'الآراء والأفكار' : 'INSIGHTS'}
              </Link>
              <span>/</span>
              <span className="text-slate-400 truncate max-w-[180px]">{tag}</span>
            </div>

            {/* Tag Pill */}
            <span className="inline-flex px-3.5 py-1 bg-brand-primary/20 border border-brand-primary/30 text-emerald-400 text-xs font-extrabold rounded-md uppercase tracking-wider">
              {tag}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug">
              {title}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm font-semibold text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                <span>{author}</span>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* 2. Main Article Body */}
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="bg-white rounded-3xl p-6 sm:p-12 lg:p-14 border border-slate-200/80 shadow-sm space-y-10 text-start">
          
          {/* Featured Cover Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-md max-h-[520px]">
            <img
              src={insight.image}
              alt={title}
              className="w-full h-full object-cover max-h-[520px]"
            />
          </div>

          {/* Lead Summary Excerpt */}
          {desc && (
            <div className="p-6 bg-slate-50 border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-primary rounded-r-2xl rtl:rounded-r-none rtl:rounded-l-2xl">
              <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed italic">
                "{desc}"
              </p>
            </div>
          )}

          {/* Article Full Content */}
          <div 
            className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-6 prose-headings:font-extrabold prose-headings:text-slate-950 prose-headings:tracking-tight prose-h2:text-2xl sm:prose-h2:text-3xl prose-h3:text-xl sm:prose-h3:text-2xl prose-a:text-brand-primary hover:prose-a:underline prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Share & Actions Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-slate-100">
            <Link
              to={localizedPath('/insights')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-primary transition-colors"
            >
              {dir === 'rtl' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{locale === 'ar' ? 'العودة لجميع المقالات' : 'Back to all Insights'}</span>
            </Link>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">{locale === 'ar' ? 'تم نسخ الرابط!' : 'Link Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>{locale === 'ar' ? 'مشاركة الرابط' : 'Share Article'}</span>
                </>
              )}
            </button>
          </div>

        </article>
      </div>

      {/* 3. Related Insights Section */}
      {relatedInsights.length > 0 && (
        <section className="py-16 bg-[#f8fafc] border-t border-slate-200/60 text-start">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-2 mb-10">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
                {locale === 'ar' ? 'مقالات ذات صلة' : 'RELATED PERSPECTIVES'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {locale === 'ar' ? 'استكشف المزيد من الرؤى الصناعية' : 'Explore More Industrial Insights'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedInsights.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  <Link
                    to={localizedPath(`/insights/${rel.slug || rel.id}`)}
                    className="h-44 overflow-hidden relative block"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title[locale] || rel.title.en}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="inline-flex px-2.5 py-0.5 bg-brand-light text-brand-primary text-[9px] font-extrabold rounded uppercase tracking-wider">
                        {rel.tag[locale] || rel.tag.en}
                      </span>
                      <Link
                        to={localizedPath(`/insights/${rel.slug || rel.id}`)}
                        className="block group-hover:text-brand-primary transition-colors"
                      >
                        <h3 className="text-base font-bold text-slate-950 leading-snug line-clamp-2">
                          {rel.title[locale] || rel.title.en}
                        </h3>
                      </Link>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                        {rel.desc[locale] || rel.desc.en}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                      <span className="text-slate-400 text-2xs font-semibold">{rel.date[locale] || rel.date.en}</span>
                      <Link
                        to={localizedPath(`/insights/${rel.slug || rel.id}`)}
                        className="px-3.5 py-1.5 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-[10px] uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                      >
                        <span>{locale === 'ar' ? 'اقرأ' : 'Read'}</span>
                        <span>{dir === 'rtl' ? '←' : '→'}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Industrial Challenge CTA */}
      <IndustrialChallengeCTA />

    </div>
  )
}
