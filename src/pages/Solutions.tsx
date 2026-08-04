import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { solutionsData } from '../data/solutions'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function Solutions() {
  const { locale, dir, t } = useLanguage()

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      {/* Solutions Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            {locale === 'ar' ? 'قدراتنا الفنية' : 'OUR CAPABILITIES'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {locale === 'ar' ? 'حلول هندسية للعمليات الصناعية الحيوية' : 'Solutions That Work'}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            {locale === 'ar'
              ? 'مجموعة متكاملة من الحلول الهندسية والصناعية المصممة لتلبية متطلبات التطبيقات الحرجة في الأسواق السعودية.'
              : 'A comprehensive suite of engineering and industrial solutions designed to meet the demands of critical applications in Saudi markets.'}
          </p>
        </div>
      </section>

      {/* Solutions Showcase List (Image 2 Style) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {solutionsData.map((sol, idx) => {
          const isEven = idx % 2 === 0
          return (
            <div
              key={sol.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Text Area */}
              <div className="lg:w-1/2 space-y-6">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider bg-brand-light px-3 py-1 rounded">
                  {t(`nav.${sol.category}Category`, sol.category.toUpperCase())}
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900">{sol.title[locale]}</h2>
                <p className="text-slate-655 leading-relaxed">{sol.description[locale]}</p>
                
                {/* Bullet lists */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 text-start">
                  {sol.features[locale].map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <span className="text-brand-accent font-bold mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 text-start">
                  <Link
                    to={localizedPath(`/solutions/${sol.slug}`)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary hover:bg-brand-primary text-white font-bold rounded-lg transition-colors"
                  >
                    {locale === 'ar' ? 'استكشف الحل' : 'Explore Solution'}
                    {dir === 'rtl' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  </Link>
                </div>
              </div>

              {/* Image Area */}
              <div className="lg:w-1/2 w-full">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img
                    src={sol.image}
                    alt={sol.title[locale]}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* Reusable Challenge CTA */}
      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" />

    </div>
  )
}
