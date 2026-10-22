import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { partnersData } from '../data/partners'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function Partners() {
  const { locale, dir } = useLanguage()

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      {/* Partners Hero */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar' ? 'الرئيسية / شركاؤنا' : 'HOME / PARTNERS'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {locale === 'ar' ? 'التقنيات العالمية والخبرة المحلية' : 'Technology Partners'}
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              {locale === 'ar'
                ? 'نتعاون مع الشركات التقنية الرائدة عالمياً لتقديم حلول هندسية متطورة تلبي احتياجات الأسواق الصناعية في المملكة العربية السعودية.'
                : 'We collaborate with world-class technology leaders to deliver cutting-edge engineering solutions customized for Saudi industrial markets.'}
            </p>
          </div>
        </section>
      </div>

      {/* Partners List (Sticky-scroll Journey Showcase) */}
      <section className="py-24 px-4 max-w-[1360px] mx-auto font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side (Sticky on desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4 text-start">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'شراكاتنا الهندسية' : 'OUR ALIGNMENT'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {locale === 'ar' ? 'تكامل متميز لأفضل الأنظمة' : 'Integrated Solutions Engineered by Partners'}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {locale === 'ar'
                ? 'نحن نعمل جنباً إلى جنب مع كبار مصنعي التكنولوجيا حول العالم لتطوير حلول هندسية مصممة خصيصاً تلبي أدق المعايير التشغيلية.'
                : 'We work side-by-side with global technology leaders to deliver tailored industrial equipment and engineering integration that meet the highest operational standards.'}
            </p>
          </div>

          {/* Spacer Column */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Right Side (Scrolling timeline card stack) */}
          <div className="lg:col-span-7 relative border-l-2 border-slate-200/60 rtl:border-l-0 rtl:border-r-2 rtl:border-slate-200/60 pl-8 rtl:pl-0 rtl:pr-8 space-y-16 py-4">
            {partnersData.map((partner) => {
              const localLogo = (() => {
                switch (partner.slug) {
                  case 'rockwell-automation':
                    return '/PARTNERS LOGO/ROCKWELL AUTOMATION.png'
                  case 'epp-composites':
                    return '/PARTNERS LOGO/EPP.jpg'
                  case 'spp-pumps':
                    return '/PARTNERS LOGO/SPP.jpg'
                  case 'kirloskar-pneumatic':
                    return '/PARTNERS LOGO/KIRLOSKAR PNEUMATIC.jpg'
                  case 'kirloskar-chillers':
                    return '/PARTNERS LOGO/KCPL.jpg'
                  case 'hms-networks':
                    return '/LOGO/HMS_logo.png'
                  case 'prosoft-technology':
                    return '/PARTNERS LOGO/PROSOFT TECHNOLOGIES.png'
                  default:
                    return partner.logo
                }
              })()

              return (
                <div key={partner.id} className="relative group">
                  
                  {/* Timeline node circle */}
                  <div className="absolute -left-[41px] rtl:-left-0 rtl:-right-[41px] top-6 h-4 w-4 rounded-full bg-slate-900 border-2 border-slate-50 group-hover:bg-brand-primary transition-colors duration-300 z-10"></div>
                  
                  {/* Partner Card */}
                  <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow space-y-6 text-start">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
                        {locale === 'ar' ? 'الشركة المصنعة' : 'MANUFACTURER'}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                        {partner.name}
                      </h3>
                      <p className="text-slate-655 leading-relaxed text-sm">
                        {partner.description[locale]}
                      </p>
                    </div>

                    {/* Logo display container at the bottom of the card */}
                    <div className="rounded-2xl overflow-hidden h-48 sm:h-56 relative border border-slate-100 bg-slate-50 flex items-center justify-center p-6 sm:p-8">
                      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                      <img 
                        src={localLogo} 
                        alt={partner.name} 
                        className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-all duration-500 relative z-10" 
                      />
                    </div>

                    {/* Partnership details CTA link */}
                    <div className="pt-2">
                      <Link
                        to={localizedPath(`/partners/${partner.slug}`)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary group-hover:text-brand-secondary transition-colors"
                      >
                        {locale === 'ar' ? 'عرض تفاصيل الشراكة' : 'Partnership Details'}
                        {dir === 'rtl' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                      </Link>
                    </div>

                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" />

    </div>
  )
}
