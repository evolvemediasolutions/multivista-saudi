import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { solutionsData } from '../../data/solutions'
import { partnersData } from '../../data/partners'

export default function Footer() {
  const { locale, t } = useLanguage()

  const localizedPath = (path: string) => {
    return `/${locale}${path === '/' ? '' : path}`
  }

  const quickLinks = [
    { label: t('nav.ourStory'), path: '/about#story' },
    { label: t('nav.visionMission'), path: '/about#vision-mission' },
    { label: t('nav.chairmanMessage'), path: '/chairman' },
    { label: t('nav.ourCulture'), path: '/about#culture' },
    { label: t('nav.events'), path: '/events' },
    { label: t('nav.contact'), path: '/contact' }
  ]

  return (
    <footer className="bg-brand-secondary text-slate-300 py-16 px-4 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Branding & Logo */}
        <div className="space-y-4">
          <Link to={localizedPath('/')} className="inline-flex items-center">
            <img 
              src="/LOGO/3T-Saudi.jpg" 
              alt="3T Saudi Logo" 
              className="h-10 w-auto object-contain rounded-md bg-white p-1"
            />
          </Link>
          <p className="text-sm leading-relaxed text-slate-300">
            {t('footer.tagline')}
          </p>
          <div className="text-xs text-slate-400 pt-4">
            &copy; {new Date().getFullYear()} 3T Saudi. {t('footer.rights')}
          </div>
        </div>

        {/* Solutions Links */}
        <div>
          <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">{t('footer.solutions')}</h3>
          <ul className="space-y-3 text-sm">
            {solutionsData.map((sol) => (
              <li key={sol.id}>
                <Link
                  to={localizedPath(`/solutions/${sol.slug}`)}
                  className="hover:text-white transition-colors"
                >
                  {sol.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">{t('footer.company')}</h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={localizedPath(link.path)} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Partners Links */}
        <div>
          <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">{t('footer.partners')}</h3>
          <ul className="space-y-3 text-sm">
            {partnersData.map((partner) => (
              <li key={partner.id}>
                <Link
                  to={localizedPath(`/partners/${partner.slug}`)}
                  className="hover:text-white transition-colors"
                >
                  {partner.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  )
}
