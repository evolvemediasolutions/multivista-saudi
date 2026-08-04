import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { solutionsData } from '../data/solutions'
import { partnersData } from '../data/partners'
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { locale, dir } = useLanguage()

  const solution = solutionsData.find((s) => s.slug === slug)

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900">404</h1>
          <p className="text-slate-600">
            {locale === 'ar' ? 'الحل غير موجود.' : 'Solution not found.'}
          </p>
          <Link
            to={`/${locale}/solutions`}
            className="inline-block px-6 py-2.5 bg-brand-primary text-white font-medium rounded-lg"
          >
            {locale === 'ar' ? 'العودة للحلول' : 'Back to Solutions'}
          </Link>
        </div>
      </div>
    )
  }

  const associatedPartners = partnersData.filter((p) =>
    solution.partners.includes(p.id)
  )

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      {/* Solution Header / Banner */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src={solution.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-4">
          <Link
            to={localizedPath('/solutions')}
            className="inline-flex items-center gap-2 text-sm text-brand-accent hover:underline font-semibold"
          >
            {dir === 'rtl' ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            {locale === 'ar' ? 'العودة للحلول' : 'Back to Solutions'}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {solution.title[locale]}
          </h1>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                {locale === 'ar' ? 'نظرة عامة على الحل' : 'Solution Overview'}
              </h2>
              <p className="text-slate-655 leading-relaxed text-lg text-start">
                {solution.description[locale]}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-950 text-start">
                {locale === 'ar' ? 'القدرات والمواصفات الفنية' : 'Capabilities & Features'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solution.features[locale].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Associated Partners */}
          <div className="lg:col-span-1 space-y-6">
            {associatedPartners.length > 0 && (
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4 text-start">
                <h3 className="text-lg font-bold text-slate-950">
                  {locale === 'ar' ? 'شركاء التكنولوجيا المعتمدين' : 'Technology Partners'}
                </h3>
                <div className="space-y-3">
                  {associatedPartners.map((partner) => (
                    <Link
                      key={partner.id}
                      to={localizedPath(`/partners/${partner.slug}`)}
                      className="block p-3 rounded-lg border border-slate-100 hover:border-brand-primary/45 transition-colors"
                    >
                      <span className="font-bold text-sm text-slate-900 block">{partner.name}</span>
                      <span className="text-xs text-brand-accent block mt-1 hover:underline">
                        {locale === 'ar' ? 'عرض تفاصيل الشريك' : 'View partner details'} &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-brand-secondary text-white rounded-2xl p-6 space-y-4 shadow-md text-start">
              <h3 className="text-lg font-bold">
                {locale === 'ar' ? 'هل تحتاج إلى استشارة فنية؟' : 'Need Technical Advice?'}
              </h3>
              <p className="text-sm text-slate-350 leading-relaxed">
                {locale === 'ar'
                  ? 'مهندسونا مستعدون لمساعدتك في تصميم وتحديد الحل الأنسب لمتطلبات عملياتك.'
                  : 'Our engineers are ready to help customize the ideal design for your operational parameters.'}
              </p>
              <Link
                to={localizedPath('/contact')}
                className="block text-center w-full py-2.5 bg-brand-accent hover:bg-brand-accent/90 text-white text-sm font-bold rounded-lg shadow"
              >
                {locale === 'ar' ? 'اتصل بخبرائنا' : 'Connect with Experts'}
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Reusable Challenge CTA */}
      <IndustrialChallengeCTA bgImage={solution.image} />

    </div>
  )
}
