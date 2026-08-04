import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function NotFound() {
  const { locale } = useLanguage()

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center font-sans p-6 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-black text-brand-accent">404</h1>
        <h2 className="text-2xl font-bold text-slate-100">
          {locale === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <p className="text-slate-400">
          {locale === 'ar'
            ? 'عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.'
            : 'Sorry, the page you are looking for does not exist or has been moved.'}
        </p>
        <div className="pt-4">
          <Link
            to={`/${locale}`}
            className="px-6 py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-lg shadow-lg"
          >
            {locale === 'ar' ? 'العودة للرئيسية' : 'Go to Homepage'}
          </Link>
        </div>
      </div>
    </div>
  )
}
