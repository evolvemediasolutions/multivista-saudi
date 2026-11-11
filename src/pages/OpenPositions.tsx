import { useLanguage } from '../context/LanguageContext'
import CurrentOpeningsSection from '../components/ui/CurrentOpeningsSection'

export default function OpenPositions() {
  const { locale } = useLanguage()
  return (
    <div className="font-sans min-h-screen bg-slate-50">
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full h-[380px] sm:h-[420px] rounded-3xl overflow-hidden bg-slate-950 text-white flex items-center justify-center shadow-xl">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              {locale === 'ar' ? 'الرئيسية / الوظائف الشاغرة' : 'HOME / OPEN POSITIONS'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {locale === 'ar' ? 'الوظائف الشاغرة' : 'Open Positions'}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {locale === 'ar'
                ? 'استكشف أحدث الشواغر والفرص الوظيفية في مختلف التخصصات الهندسية والإدارية.'
                : 'Explore our latest job vacancies and career opportunities across diverse engineering and operational fields.'}
            </p>
          </div>
        </section>
      </div>

      {/* Current Openings Section */}
      <CurrentOpeningsSection />
    </div>
  )
}
