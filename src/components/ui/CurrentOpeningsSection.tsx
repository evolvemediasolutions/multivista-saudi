import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Briefcase, ChevronRight, ChevronLeft, SlidersHorizontal, RotateCcw } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { type JobOpening } from '../../data/jobs'
import { getCareers, getCachedCareers } from '../../services/graphql'

interface CurrentOpeningsSectionProps {
  id?: string
  className?: string
}

export default function CurrentOpeningsSection({ id = 'openings', className = '' }: CurrentOpeningsSectionProps) {
  const { locale, dir } = useLanguage()

  // Initialize with cached careers so openings show with 0ms delay
  const [jobs, setJobs] = useState<JobOpening[]>(() => getCachedCareers())
  const [keyword, setKeyword] = useState('')
  const [selectedDesignation, setSelectedDesignation] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  useEffect(() => {
    let mounted = true

    const loadCareers = () => {
      getCareers().then((data) => {
        if (mounted && data && data.length > 0) {
          setJobs(data)
        }
      })
    }

    loadCareers()

    // Real-time zero-delay revalidation when admin returns to tab after publishing in WordPress
    const handleRevalidate = () => {
      if (document.visibilityState === 'visible') {
        loadCareers()
      }
    }

    window.addEventListener('focus', handleRevalidate)
    document.addEventListener('visibilitychange', handleRevalidate)

    return () => {
      mounted = false
      window.removeEventListener('focus', handleRevalidate)
      document.removeEventListener('visibilitychange', handleRevalidate)
    }
  }, [])

  // Unique designations and locations for filters
  const designations = useMemo(() => {
    return Array.from(new Set(jobs.map((job) => job.designation[locale] || job.designation.en)))
  }, [jobs, locale])

  const locations = useMemo(() => {
    return Array.from(new Set(jobs.map((job) => job.location[locale] || job.location.en)))
  }, [jobs, locale])

  // Filter logic
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const titleEn = job.title.en.toLowerCase()
      const titleAr = job.title.ar.toLowerCase()
      const deptEn = job.department.en.toLowerCase()
      const deptAr = job.department.ar.toLowerCase()
      const locEn = job.location.en.toLowerCase()
      const locAr = job.location.ar.toLowerCase()
      const code = job.code.toLowerCase()
      const query = keyword.trim().toLowerCase()

      const matchesKeyword =
        !query ||
        titleEn.includes(query) ||
        titleAr.includes(query) ||
        deptEn.includes(query) ||
        deptAr.includes(query) ||
        locEn.includes(query) ||
        locAr.includes(query) ||
        code.includes(query)

      const jobDesignation = job.designation[locale] || job.designation.en
      const matchesDesignation = !selectedDesignation || jobDesignation === selectedDesignation

      const jobLocation = job.location[locale] || job.location.en
      const matchesLocation = !selectedLocation || jobLocation === selectedLocation

      return matchesKeyword && matchesDesignation && matchesLocation
    })
  }, [keyword, selectedDesignation, selectedLocation, locale])

  const handleReset = () => {
    setKeyword('')
    setSelectedDesignation('')
    setSelectedLocation('')
  }

  const localizedPath = (path: string) => `/${locale}${path}`

  return (
    <section id={id} className={`py-20 sm:py-24 bg-white font-sans text-start ${className}`}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold text-brand-primary tracking-widest block">
            {locale === 'ar' ? 'الوظائف الشاغرة الحالية' : 'CURRENT OPENINGS'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {locale === 'ar' ? 'ابحث عن فرصتك المهنية القادمة' : 'Find Your Next Opportunity'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {locale === 'ar'
              ? 'اكتشف فرصاً متميزة في مجالات الهندسة، وأتمتة العمليات الصناعية، والتصنيع، والعمليات التشغيلية، والمبيعات والمزيد. ابحث بالكلمة المفتاحية أو التخصص أو الموقع للعثور على الدور المناسب لك.'
              : 'Discover exciting opportunities across engineering, industrial automation, manufacturing, operations, sales, corporate functions and more. Search by keyword, department or location to find the role that\'s right for you.'}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl border border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Keyword Input */}
            <div className="md:col-span-5 relative">
              <Search className="h-5 w-5 text-slate-400 absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={locale === 'ar' ? 'ابحث بالكلمة المفتاحية / الموقع...' : 'Search By Keyword/location...'}
                className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-11 rtl:pl-4 rtl:pr-11 pr-4 py-3 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
              />
            </div>

            {/* Designation Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedDesignation}
                onChange={(e) => setSelectedDesignation(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-700 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all cursor-pointer"
              >
                <option value="">{locale === 'ar' ? 'اختر التخصص' : 'Select Designation'}</option>
                {designations.map((desig) => (
                  <option key={desig} value={desig}>
                    {desig}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-700 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all cursor-pointer"
              >
                <option value="">{locale === 'ar' ? 'اختر الموقع' : 'Select Location'}</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Search / Action Button */}
            <div className="md:col-span-1">
              <button
                type="button"
                className="w-full h-11 bg-brand-primary hover:bg-brand-secondary active:scale-95 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center cursor-pointer"
                aria-label="Search jobs"
              >
                {locale === 'ar' ? 'بحث' : 'Search'}
              </button>
            </div>

          </div>
        </div>

        {/* Counter and Active Filters Summary */}
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="font-semibold text-slate-700">
            {locale === 'ar' ? 'وجدنا ' : 'We Found '}
            <span className="text-brand-primary font-bold">
              {filteredJobs.length} {locale === 'ar' ? 'وظائف' : 'Jobs'}
            </span>
          </p>

          {(keyword || selectedDesignation || selectedLocation) && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-primary transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {locale === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset filters'}
            </button>
          )}
        </div>

        {/* Jobs List */}
        <div className="max-w-5xl mx-auto space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-primary/40 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5 group"
              >
                {/* Left Side: Job Title + Metadata */}
                <div className="space-y-3 flex-grow">
                  <Link
                    to={localizedPath(`/careers/${job.slug}`)}
                    className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors block"
                  >
                    {job.title[locale]}
                  </Link>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-500 font-medium">
                    {/* Location */}
                    <div className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span>{job.location[locale]}</span>
                    </div>

                    {/* Experience */}
                    <div className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4 text-slate-400" />
                      <span>{job.experience[locale]}</span>
                    </div>

                    {/* Job Code */}
                    <div className="inline-flex items-center gap-1 font-bold text-brand-primary">
                      <span>{job.code}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: CTA Button */}
                <div className="flex-shrink-0">
                  <Link
                    to={localizedPath(`/careers/${job.slug}`)}
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-brand-primary hover:bg-brand-secondary active:scale-95 text-white font-bold text-sm rounded-xl shadow transition-all duration-200 cursor-pointer w-full md:w-auto"
                  >
                    <span>{locale === 'ar' ? 'المزيد من التفاصيل' : 'More Detail'}</span>
                    {dir === 'rtl' ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-slate-50/70 rounded-3xl border border-dashed border-slate-200 space-y-4">
              <SlidersHorizontal className="h-10 w-10 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">
                {locale === 'ar' ? 'لم يتم العثور على وظائف مطابقة' : 'No matching positions found'}
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                {locale === 'ar'
                  ? 'جرب البحث بكلمة مفتاحية مختلفة أو إزالة الفلاتر المحددة لعرض جميع الفرص المتاحة.'
                  : 'Try searching with different keywords or clearing active filters to view all available positions.'}
              </p>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                {locale === 'ar' ? 'عرض جميع الوظائف' : 'View All Jobs'}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
