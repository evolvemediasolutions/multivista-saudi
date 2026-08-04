import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { Menu, X, ChevronDown, Globe2 } from 'lucide-react'
import { solutionsData } from '../../data/solutions'

export default function Navbar() {
  const { locale, setLocale, t, dir } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleLang = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en'
    const currentPath = location.pathname
    let newPath = currentPath
    
    if (currentPath.startsWith('/en')) {
      newPath = currentPath.replace(/^\/en/, `/${nextLocale}`)
    } else if (currentPath.startsWith('/ar')) {
      newPath = currentPath.replace(/^\/ar/, `/${nextLocale}`)
    } else {
      newPath = `/${nextLocale}${currentPath === '/' ? '' : currentPath}`
    }
    
    setLocale(nextLocale)
    navigate(newPath)
  }

  const localizedPath = (path: string) => {
    return `/${locale}${path === '/' ? '' : path}`
  }

  const isActive = (path: string) => {
    const current = location.pathname
    const target = localizedPath(path)
    if (path === '/') {
      return current === `/en` || current === `/ar` || current === `/en/` || current === `/ar/`
    }
    return current.startsWith(target)
  }

  const navItems = [
    {
      id: 'about',
      label: t('nav.about'),
      path: '/about',
      dropdown: [
        { label: t('nav.ourStory'), path: '/about#story' },
        { label: t('nav.visionMission'), path: '/about#vision-mission' },
        { label: t('nav.chairmanMessage'), path: '/chairman' },
        { label: t('nav.ourCulture'), path: '/about#culture' },
        { label: t('nav.brandIdentity'), path: '/about#identity' }
      ]
    },
    {
      id: 'solutions',
      label: t('nav.solutions'),
      path: '/solutions',
      dropdown: solutionsData.map((s) => ({
        label: s.title[locale],
        path: `/solutions/${s.slug}`
      }))
    },
    {
      id: 'partners',
      label: t('nav.partners'),
      path: '/partners'
    },
    {
      id: 'industries',
      label: t('nav.industries'),
      path: '/industries'
    },
    {
      id: 'events',
      label: t('nav.events'),
      path: '/events'
    }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm font-sans">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to={localizedPath('/')} className="flex items-center">
              <img 
                src="/LOGO/3T-Saudi.jpg" 
                alt="3T Saudi Logo" 
                className="h-12 w-auto object-contain rounded-md"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => navigate(localizedPath(item.path))}
                  className={`px-4 py-2 text-[14px] font-semibold transition-colors flex items-center gap-1 hover:text-brand-primary rounded-md uppercase tracking-wider ${
                    isActive(item.path) ? 'text-brand-primary font-bold bg-brand-light/35' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-brand-primary transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.id && (
                  <div 
                    className={`absolute ${dir === 'rtl' ? 'right-0' : 'left-0'} mt-1 w-56 rounded-lg bg-white shadow-xl border border-slate-100 py-2 z-50`}
                  >
                    {item.dropdown.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={localizedPath(sub.path)}
                        className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 hover:text-brand-primary transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              aria-label="Change language"
              className="flex items-center justify-center gap-1.5 px-5 h-11 text-[14px] font-bold text-slate-600 hover:text-brand-primary transition-colors cursor-pointer border border-slate-200 hover:border-brand-primary rounded-lg uppercase tracking-wider"
            >
              <Globe2 className="h-4 w-4" />
              {t('nav.langSwitcher')}
            </button>

            {/* Contact Button */}
            <Link
              to={localizedPath('/contact')}
              className="flex items-center justify-center px-5 h-11 bg-brand-secondary hover:bg-brand-primary text-white text-[14px] font-bold rounded-lg shadow-md hover:shadow-brand-primary/10 transition-all duration-200 uppercase tracking-wider"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Language Switcher Mobile */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-md"
            >
              <Globe2 className="h-3.5 w-3.5" />
              {t('nav.langSwitcher')}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-brand-primary hover:bg-slate-100 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={() => {
                    if (!item.dropdown) {
                      navigate(localizedPath(item.path))
                      setIsOpen(false)
                    } else {
                      setActiveDropdown(activeDropdown === item.id ? null : item.id)
                    }
                  }}
                  className="w-full text-start px-3 py-2 text-base font-bold uppercase tracking-wide text-slate-700 hover:text-brand-primary hover:bg-slate-50 rounded-md flex items-center justify-between"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Sub items */}
                {item.dropdown && activeDropdown === item.id && (
                  <div className="pl-4 pr-4 space-y-1 bg-slate-50/50 py-1 rounded-md">
                    {item.dropdown.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={localizedPath(sub.path)}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm font-semibold uppercase tracking-wide text-slate-600 hover:text-brand-primary"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-200 mt-2 px-3">
              <Link
                to={localizedPath('/contact')}
                onClick={() => setIsOpen(false)}
                className="block text-center w-full py-2.5 bg-brand-secondary hover:bg-brand-primary text-white font-bold uppercase tracking-wider rounded-lg"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
