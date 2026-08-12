import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import SolutionDetail from './pages/SolutionDetail'
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
import { useEffect } from 'react'

function RootRedirect() {
  const { locale } = useLanguage()
  return <Navigate to={`/${locale}`} replace />
}

function LocaleWrapper({ children }: { children: React.ReactNode }) {
  const { locale, setLocale } = useLanguage()
  const { lang } = useParams<{ lang: 'en' | 'ar' }>()

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
  return (
    <LanguageProvider>
      <BrowserRouter>
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
            path="/:lang/solutions/:slug"
            element={
              <LocaleWrapper>
                <SolutionDetail />
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
            path="/:lang/insights"
            element={
              <LocaleWrapper>
                <Insights />
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
