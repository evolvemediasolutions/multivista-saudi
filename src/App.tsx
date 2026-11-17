import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Partners from './pages/Partners'
import PartnerDetail from './pages/PartnerDetail'
import Industries from './pages/Industries'
import Events from './pages/Events'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Chairman from './pages/Chairman'
import Sustainability from './pages/Sustainability'
import Careers from './pages/Careers'
import Insights from './pages/Insights'
import Why3T from './pages/Why3T'
import OpenPositions from './pages/OpenPositions'
import AirGasSolutions from './pages/AirGasSolutions'
import AutomationControlSolutions from './pages/AutomationControlSolutions'
import RefrigerationHvacSolutions from './pages/RefrigerationHvacSolutions'
import RefrigerationSolutions from './pages/RefrigerationSolutions'
import HvacSolutions from './pages/HvacSolutions'
import NonMetallicSolutions from './pages/NonMetallicSolutions'
import FirePumpSolutions from './pages/FirePumpSolutions'
import JobDetail from './pages/JobDetail'
import InsightDetail from './pages/InsightDetail'
import EventDetail from './pages/EventDetail'
import { useEffect } from 'react'
import { preloadCmsData } from './services/graphql'

function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      document.documentElement.scrollTo(0, 0)
      document.body.scrollTo(0, 0)
    } else {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo(0, 0)
      }
    }
  }, [pathname, search, hash])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a')
      if (target && target instanceof HTMLAnchorElement) {
        const href = target.getAttribute('href')
        if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && (!href.includes('#') || href.endsWith('#') || href.endsWith('#top'))) {
          setTimeout(() => {
            window.scrollTo(0, 0)
          }, 0)
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}

function RootRedirect() {
  const { locale } = useLanguage()
  return <Navigate to={`/${locale}`} replace />
}

function LocaleWrapper({ children }: { children: React.ReactNode }) {
  const { locale, setLocale } = useLanguage()
  const { lang } = useParams<{ lang: 'en' | 'ar' }>()

  useEffect(() => {
    preloadCmsData()
  }, [])

  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'ar') && lang !== locale) {
      setLocale(lang)
    }
  }, [lang, locale, setLocale])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main key={locale} className="flex-grow animate-fade-in">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Base Redirect */}
          <Route path="/" element={<RootRedirect />} />

          {/* Locale-aware Routes */}
          <Route
            path="/:lang"
            element={
              <LocaleWrapper>
                <Home />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/about"
            element={
              <LocaleWrapper>
                <About />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/chairman"
            element={
              <LocaleWrapper>
                <Chairman />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions"
            element={
              <LocaleWrapper>
                <Solutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/air-gas-solutions"
            element={
              <LocaleWrapper>
                <AirGasSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/refrigeration-solutions"
            element={
              <LocaleWrapper>
                <RefrigerationSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/refrigeration-solution"
            element={
              <LocaleWrapper>
                <RefrigerationSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/hvac-solutions"
            element={
              <LocaleWrapper>
                <HvacSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/hvac-solution"
            element={
              <LocaleWrapper>
                <HvacSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/refrigeration-hvac-solutions"
            element={
              <LocaleWrapper>
                <RefrigerationHvacSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/refrigeration-hvac"
            element={
              <LocaleWrapper>
                <RefrigerationHvacSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/automation-control"
            element={
              <LocaleWrapper>
                <AutomationControlSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/industrial-automation"
            element={
              <LocaleWrapper>
                <AutomationControlSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/non-metallic-solutions"
            element={
              <LocaleWrapper>
                <NonMetallicSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/non-metallic-solution"
            element={
              <LocaleWrapper>
                <NonMetallicSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/non-metallic-solutions/:partnerSlug"
            element={
              <LocaleWrapper>
                <PartnerDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/non-metallic-solution/:partnerSlug"
            element={
              <LocaleWrapper>
                <PartnerDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/fire-pump-solutions"
            element={
              <LocaleWrapper>
                <FirePumpSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/fire-pump-solution"
            element={
              <LocaleWrapper>
                <FirePumpSolutions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/fire-pump-solutions/:partnerSlug"
            element={
              <LocaleWrapper>
                <PartnerDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/fire-pump-solution/:partnerSlug"
            element={
              <LocaleWrapper>
                <PartnerDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/automation-control/:partnerSlug"
            element={
              <LocaleWrapper>
                <PartnerDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/air-gas-solutions/:partnerSlug"
            element={
              <LocaleWrapper>
                <PartnerDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/solutions/:solutionSlug/:partnerSlug"
            element={
              <LocaleWrapper>
                <PartnerDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/partners"
            element={
              <LocaleWrapper>
                <Partners />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/partners/:slug"
            element={
              <LocaleWrapper>
                <PartnerDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/industries"
            element={
              <LocaleWrapper>
                <Industries />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/events"
            element={
              <LocaleWrapper>
                <Events />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/events/:eventSlug"
            element={
              <LocaleWrapper>
                <EventDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/contact"
            element={
              <LocaleWrapper>
                <Contact />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/sustainability"
            element={
              <LocaleWrapper>
                <Sustainability />
              </LocaleWrapper>
            }
          />
           <Route
            path="/:lang/careers"
            element={
              <LocaleWrapper>
                <Careers />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/careers/:jobSlug"
            element={
              <LocaleWrapper>
                <JobDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/why-3t"
            element={
              <LocaleWrapper>
                <Why3T />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/open-positions"
            element={
              <LocaleWrapper>
                <OpenPositions />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/open-positions/:jobSlug"
            element={
              <LocaleWrapper>
                <JobDetail />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/insights"
            element={
              <LocaleWrapper>
                <Insights />
              </LocaleWrapper>
            }
          />
          <Route
            path="/:lang/insights/:slug"
            element={
              <LocaleWrapper>
                <InsightDetail />
              </LocaleWrapper>
            }
          />

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
