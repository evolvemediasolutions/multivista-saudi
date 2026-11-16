import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getEvents, getCachedEvents, type EventItem } from '../services/graphql'
import { Calendar, MapPin, Clock, ArrowRight, ArrowLeft } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function Events() {
  const { locale, dir } = useLanguage()
  const [events, setEvents] = useState<EventItem[]>(() => getCachedEvents())

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  useEffect(() => {
    let mounted = true

    const loadFreshEvents = () => {
      getEvents().then((data) => {
        if (mounted && data && data.length > 0) {
          setEvents(data)
        }
      })
    }

    loadFreshEvents()

    // Real-time zero-delay revalidation when admin returns to tab after publishing in WordPress
    const handleRevalidate = () => {
      if (document.visibilityState === 'visible') {
        loadFreshEvents()
      }
    }

    window.addEventListener('focus', handleRevalidate)
    document.addEventListener('visibilitychange', handleRevalidate)

    return () => {
      mounted = false
      window.removeEventListener('focus', handleRevalidate)
      document.removeEventListener('visibilitychange', handleRevalidate)
    }
  }, [])

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      {/* Events Hero */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar' ? 'الرئيسية / الفعاليات' : 'HOME / EVENTS'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {locale === 'ar' ? 'نتواصل. نتعاون. نبتكر.' : 'Connect. Collaborate. Innovate.'}
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              {locale === 'ar'
                ? 'نبني شراكات قوية ونتبادل المعرفة من خلال مشاركتنا الفعالة في المعارض والمؤتمرات الفنية الكبرى.'
                : 'Building partnerships and exchanging technical knowledge through active engagement in major exhibitions and conferences.'}
            </p>
          </div>
        </section>
      </div>

      {/* Events List */}
      <section className="py-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row text-start group hover:-translate-y-0.5"
            >
              <Link
                to={localizedPath(`/events/${ev.slug || ev.id}`)}
                className="lg:w-1/3 h-64 lg:h-auto overflow-hidden relative block"
              >
                <img
                  src={ev.image}
                  alt={ev.title[locale] || ev.title.en}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-8 lg:p-10 lg:w-2/3 space-y-5 flex flex-col justify-center">
                {ev.eventType && (
                  <span className="inline-flex px-3 py-1 bg-brand-light text-brand-primary text-xs font-extrabold rounded-md uppercase tracking-wider self-start">
                    {ev.eventType[locale] || ev.eventType.en}
                  </span>
                )}

                <Link
                  to={localizedPath(`/events/${ev.slug || ev.id}`)}
                  className="block group-hover:text-brand-primary transition-colors"
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-snug">
                    {ev.title[locale] || ev.title.en}
                  </h3>
                </Link>

                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs font-bold text-slate-600">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <Calendar className="h-4 w-4 text-brand-primary" />
                    <span>{ev.date[locale] || ev.date.en}</span>
                  </div>
                  {ev.time && (
                    <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                      <Clock className="h-4 w-4 text-brand-primary" />
                      <span>{ev.time[locale] || ev.time.en}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <MapPin className="h-4 w-4 text-brand-primary" />
                    <span>{ev.location[locale] || ev.location.en}</span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base line-clamp-3">
                  {ev.description[locale] || ev.description.en}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    to={localizedPath(`/events/${ev.slug || ev.id}`)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md"
                  >
                    <span>{locale === 'ar' ? 'عرض تفاصيل الفعالية' : 'View Event Details'}</span>
                    {dir === 'rtl' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </Link>

                  {ev.registrationUrl && (
                    <a
                      href={ev.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-500 hover:text-brand-primary transition-colors"
                    >
                      {locale === 'ar' ? 'الموقع الرسمي' : 'Official Site'} ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80" />

    </div>
  )
}
