import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Locale = 'en' | 'ar'

interface LanguageContextType {
  locale: Locale
  dir: 'ltr' | 'rtl'
  setLocale: (locale: Locale) => void
  t: (key: string, defaultValue?: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

import translationsData from '../data/translations.json'

const translations: Record<string, Record<string, string>> = translationsData

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Attempt to load from URL path first
    const path = window.location.pathname
    if (path.startsWith('/ar')) return 'ar'
    if (path.startsWith('/en')) return 'en'
    
    // Fallback to local storage or browser preference
    const saved = localStorage.getItem('3t_locale') as Locale
    if (saved === 'en' || saved === 'ar') return saved
    
    return 'en'
  })

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('3t_locale', newLocale)
  }

  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  // Apply lang and dir attribute to html tag
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
    
    if (locale === 'ar') {
      document.body.style.fontFamily = '"Noto Sans Arabic", system-ui, sans-serif'
    } else {
      document.body.style.fontFamily = '"Inter", system-ui, sans-serif'
    }
  }, [locale, dir])

  const t = (key: string, defaultValue?: string): string => {
    const dict = translations[locale] || {}
    return dict[key] || defaultValue || key
  }

  return (
    <LanguageContext.Provider value={{ locale, dir, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
