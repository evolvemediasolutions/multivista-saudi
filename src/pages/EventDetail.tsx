import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Share2, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Loader2, 
  ChevronRight,
  ExternalLink,
  Tag,
  Building2,
  Mail
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { getEvents, getCachedEvents, type EventItem } from '../services/graphql'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function EventDetail() {
  const { locale, dir } = useLanguage()
  const { eventSlug } = useParams<{ eventSlug: string }>()

  // Initialize with cached events for instant 0ms load
  const [eventsList, setEventsList] = useState<EventItem[]>(() => getCachedEvents())
  const initialEvent = getCachedEvents().find(
    (e) => e.slug === eventSlug || e.id.toString() === eventSlug
  )
  const [isLoading, setIsLoading] = useState(!initialEvent)
  const [copied, setCopied] = useState(false)

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  useEffect(() => {
    let mounted = true
    getEvents()
      .then((items) => {
        if (mounted) {
          if (items && items.length > 0) {
            setEventsList(items)
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
  }, [eventSlug])

  const event = eventsList.find(
    (e) => e.slug === eventSlug || e.id.toString() === eventSlug
  )

  // Loading skeleton state
  if (!event && isLoading) {
    return (
      <div className="font-sans min-h-screen bg-slate-50 text-slate-900 pb-24">
        <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full min-h-[380px] rounded-3xl bg-slate-900 animate-pulse flex flex-col items-center justify-center p-8 space-y-4">
            <Loader2 className="w-10 h-10 text-emerald-400 animate-spin" />
            <div className="h-6 w-48 bg-slate-800 rounded-lg"></div>
            <div className="h-10 w-96 max-w-full bg-slate-800 rounded-lg"></div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-80 bg-white rounded-3xl border border-slate-200 animate-pulse"></div>
            <div className="h-48 bg-white rounded-3xl border border-slate-200 animate-pulse"></div>
          </div>
          <div className="h-96 bg-white rounded-3xl border border-slate-200 animate-pulse"></div>
        </div>
      </div>
    )
  }

  // Not found after fetch completed
  if (!event) {
    return <Navigate to={`/${locale}/events`} replace />
  }

  const title = locale === 'ar' ? (event.title.ar || event.title.en) : event.title.en
  const date = locale === 'ar' ? (event.date.ar || event.date.en) : event.date.en
  const time = event.time ? (locale === 'ar' ? (event.time.ar || event.time.en) : event.time.en) : ''
  const location = locale === 'ar' ? (event.location.ar || event.location.en) : event.location.en
  const eventType = event.eventType ? (locale === 'ar' ? (event.eventType.ar || event.eventType.en) : event.eventType.en) : (locale === 'ar' ? 'معرض تقني ومؤتمر' : 'Technical Exhibition')
  const description = locale === 'ar' ? (event.description.ar || event.description.en) : event.description.en
  const content = event.content ? (locale === 'ar' ? (event.content.ar || event.content.en) : event.content.en) : ''

  // Related events
  const relatedEvents = eventsList
    .filter((e) => e.slug !== event.slug && e.id !== event.id)
    .slice(0, 2)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-900 pb-24" dir={dir}>
      {/* Top Banner Hero */}
      <div className="pt-28 sm:pt-32 pb-8 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6 rtl:space-x-reverse">
          <Link to={localizedPath('/')} className="hover:text-emerald-600 transition-colors">
            {locale === 'ar' ? 'الرئيسية' : 'Home'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 rtl:rotate-180" />
          <Link to={localizedPath('/events')} className="hover:text-emerald-600 transition-colors">
            {locale === 'ar' ? 'الفعاليات والمعارض' : 'Events'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 rtl:rotate-180" />
          <span className="text-slate-800 line-clamp-1 max-w-[200px] sm:max-w-md">{title}</span>
        </nav>

        {/* Hero Card */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-14 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Badges & Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Tag className="w-3.5 h-3.5" />
                {eventType}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {locale === 'ar' ? 'فعالية قادمة' : 'Upcoming Event'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] mb-6">
              {title}
            </h1>

            {/* Meta Row: Date, Time, Location */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{date}</span>
              </div>
              {time && (
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{time}</span>
                </div>
              )}
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="line-clamp-1">{location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left / Primary Column (Content & Highlights) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Event Cover Image */}
            {event.image && (
              <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                <img 
                  src={event.image} 
                  alt={title} 
                  className="w-full h-72 sm:h-96 object-cover object-center" 
                />
              </div>
            )}

            {/* Executive Summary */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2.5">
                <Building2 className="w-6 h-6 text-emerald-600" />
                {locale === 'ar' ? 'نظرة عامة على الفعالية' : 'Event Overview'}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {description}
              </p>
            </div>

            {/* Full Agenda / Detailed Content */}
            {content && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
                  {locale === 'ar' ? 'تفاصيل ومحاور الفعالية' : 'Event Highlights & Details'}
                </h2>
                <div 
                  className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-strong:text-slate-900 prose-a:text-emerald-600 prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            )}

            {/* Share & Back Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <Link
                to={localizedPath('/events')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
              >
                {dir === 'rtl' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                {locale === 'ar' ? 'العودة إلى جميع الفعاليات' : 'Back to All Events'}
              </Link>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{locale === 'ar' ? 'تم نسخ الرابط!' : 'Link Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>{locale === 'ar' ? 'مشاركة الفعالية' : 'Share Event'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Sidebar: Quick Facts & Registration */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            
            {/* Quick Facts Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                {locale === 'ar' ? 'معلومات سريعة' : 'Event Quick Facts'}
              </h3>

              <div className="space-y-5 text-sm">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    {locale === 'ar' ? 'التاريخ' : 'Date'}
                  </span>
                  <p className="font-semibold text-slate-800 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    {date}
                  </p>
                </div>

                {time && (
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                      {locale === 'ar' ? 'التوقيت' : 'Time'}
                    </span>
                    <p className="font-semibold text-slate-800 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      {time}
                    </p>
                  </div>
                )}

                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    {locale === 'ar' ? 'الموقع والمقر' : 'Location & Venue'}
                  </span>
                  <p className="font-semibold text-slate-800 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{location}</span>
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                    {locale === 'ar' ? 'نوع الفعالية' : 'Event Category'}
                  </span>
                  <p className="font-semibold text-slate-800 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
                    {eventType}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3 pt-6 border-t border-slate-100">
                {event.registrationUrl ? (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-500 hover:shadow-lg transition-all"
                  >
                    <span>{locale === 'ar' ? 'التسجيل في المعرض' : 'Register / Attend Event'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : null}

                <Link
                  to={localizedPath(`/contact?inquiry=${encodeURIComponent(title)}`)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>{locale === 'ar' ? 'استفسر عن مشاركتنا' : 'Inquire About Our Booth'}</span>
                </Link>
              </div>
            </div>

            {/* MVGL Presence Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white border border-slate-700 shadow-md">
              <h4 className="font-bold text-white text-base mb-2">
                {locale === 'ar' ? 'جناح شركة إم في جي إل السعودية' : 'Meet MVGL Saudi at the Event'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {locale === 'ar'
                  ? 'يسر مهندسينا وممثلينا لقاءكم لمناقشة أحدث الحلول الصناعية، والأنظمة الميكانيكية، وحلول الأتمتة والتحكم في المملكة.'
                  : 'Our industrial engineering specialists are available to discuss tailored heavy industrial solutions, air & gas compression, chillers, and automation.'}
              </p>
              <Link
                to={localizedPath('/contact')}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>{locale === 'ar' ? 'احجز موعداً خاصاً' : 'Schedule a 1-on-1 Meeting'}</span>
                <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Events Section */}
        {relatedEvents.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-black text-slate-900 mb-8">
              {locale === 'ar' ? 'فعاليات ومعارض أخرى' : 'Other Industrial Events'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedEvents.map((rel) => {
                const relTitle = locale === 'ar' ? (rel.title.ar || rel.title.en) : rel.title.en
                const relDate = locale === 'ar' ? (rel.date.ar || rel.date.en) : rel.date.en
                const relLoc = locale === 'ar' ? (rel.location.ar || rel.location.en) : rel.location.en

                return (
                  <Link
                    key={rel.id}
                    to={localizedPath(`/events/${rel.slug || rel.id}`)}
                    className="group block bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden bg-slate-900">
                      <img
                        src={rel.image}
                        alt={relTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                          {relDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 line-clamp-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                          {relLoc}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {relTitle}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
      </div>

      {/* Industrial Challenge CTA */}
      <div className="mt-20">
        <IndustrialChallengeCTA />
      </div>
    </div>
  )
}

