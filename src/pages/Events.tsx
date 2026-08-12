import { useLanguage } from '../context/LanguageContext'
import { eventsData } from '../data/events'
import { Calendar, MapPin } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function Events() {
  const { locale } = useLanguage()

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
          {eventsData.map((ev) => (
            <div
              key={ev.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row text-start"
            >
              <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden relative">
                <img src={ev.image} alt={ev.title[locale]} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 lg:w-2/3 space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-950">{ev.title[locale]}</h3>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                    <Calendar className="h-4 w-4 text-brand-accent" />
                    <span>{ev.date[locale]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-md">
                    <MapPin className="h-4 w-4 text-brand-accent" />
                    <span>{ev.location[locale]}</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">{ev.description[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80" />

    </div>
  )
}
