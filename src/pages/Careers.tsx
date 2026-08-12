import { useLanguage } from '../context/LanguageContext'

export default function Careers() {
  const { locale } = useLanguage()
  return (
    <div className="font-sans min-h-screen bg-slate-50">
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar' ? 'الرئيسية / الوظائف' : 'HOME / CAREERS'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {locale === 'ar' ? 'الوظائف' : 'Careers'}
            </h1>
          </div>
        </section>
      </div>
      <section className="py-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <p>{locale === 'ar' ? 'صفحة الوظائف قيد الإنشاء.' : 'Careers page is under construction.'}</p>
      </section>
    </div>
  )
}
