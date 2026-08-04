import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface IndustrialChallengeCTAProps {
  bgImage?: string
}

export default function IndustrialChallengeCTA({ bgImage }: IndustrialChallengeCTAProps) {
  const { locale, dir } = useLanguage()
  
  const defaultBg = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  const background = bgImage || defaultBg
  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  return (
    <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden border-t border-slate-800 w-full">
      <div className="absolute inset-0 bg-black/75 z-10"></div>
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="max-w-4xl mx-auto text-center relative z-20 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {locale === 'ar' ? 'هل تواجه تحدياً صناعياً؟' : 'Have an Industrial Challenge?'}
        </h2>
        <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
          {locale === 'ar'
            ? 'من اختيار التقنية المناسبة إلى الدعم الهندسي والتنفيذ، فريقنا جاهز لمساعدتك في تحديد الحل الأنسب.'
            : 'From selecting the right technology to engineering support and implementation, our team is ready to help you identify the right solution.'}
        </p>
        <div className="pt-4">
          <Link
            to={localizedPath('/contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-lg shadow-lg transition-colors uppercase tracking-wider"
          >
            {locale === 'ar' ? 'تحدث مع خبرائنا' : 'Talk to Our Experts'}
            {dir === 'rtl' ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
          </Link>
        </div>
      </div>
    </section>
  )
}
