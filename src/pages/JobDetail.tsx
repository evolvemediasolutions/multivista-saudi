import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useParams, Link, Navigate } from 'react-router-dom'
import { 
  MapPin, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  UploadCloud, 
  X, 
  CheckCircle, 
  FileText 
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { jobsData as fallbackJobs, type JobOpening } from '../data/jobs'
import { getCareers } from '../services/graphql'

export default function JobDetail() {
  const { locale } = useLanguage()
  const { jobSlug } = useParams<{ jobSlug: string }>()
  const [jobsList, setJobsList] = useState<JobOpening[]>(fallbackJobs)

  useEffect(() => {
    let mounted = true
    getCareers().then((data) => {
      if (mounted && data && data.length > 0) {
        setJobsList(data)
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [coverNote, setCoverNote] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (isApplyModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isApplyModalOpen])

  // Find job by slug or ID
  const job = jobsList.find((j) => j.slug === jobSlug || j.id === jobSlug)

  if (!job) {
    return <Navigate to={`/${locale}/careers`} replace />
  }

  // Filter other openings (exclude current job)
  const otherOpenings = jobsList.filter((j) => j.id !== job.id).slice(0, 4)

  const localizedPath = (path: string) => `/${locale}${path}`

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const resetModal = () => {
    setIsApplyModalOpen(false)
    setIsSubmitted(false)
    setFullName('')
    setEmail('')
    setPhone('')
    setCoverNote('')
    setResumeFile(null)
  }

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-900 pb-24">
      
      {/* 1. Hero Section */}
      <div className="pt-24 sm:pt-28 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full min-h-[380px] sm:min-h-[420px] rounded-3xl overflow-hidden bg-slate-950 text-white flex items-center shadow-2xl">
          {/* Subtle industrial background pattern & overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />

          <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-20 text-center space-y-5 py-12">
            {/* Breadcrumb Eyebrow */}
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
              <Link to={localizedPath('/')} className="hover:text-white transition-colors">
                {locale === 'ar' ? 'الرئيسية' : 'HOME'}
              </Link>
              <span>/</span>
              <Link to={localizedPath('/careers')} className="hover:text-white transition-colors">
                {locale === 'ar' ? 'الوظائف' : 'CAREERS'}
              </Link>
              <span>/</span>
              <span className="text-slate-300">{job.code}</span>
            </div>

            {/* Role Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {job.title[locale]}
            </h1>

            {/* Badges / Quick Meta */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm font-semibold">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 backdrop-blur-sm inline-flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-emerald-400" />
                {job.department[locale]}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 backdrop-blur-sm inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-emerald-400" />
                {job.location[locale]}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 backdrop-blur-sm inline-flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-emerald-400" />
                {job.experience[locale]}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-brand-primary text-white font-bold">
                {job.code}
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Main 2-Column Content Section (Matches Screenshot 2) */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Role Details (8 cols) */}
          <div className="lg:col-span-8 space-y-6 text-start">
            
            {/* Card 1: About this Role */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase text-brand-primary tracking-widest block">
                {locale === 'ar' ? 'نبذة عن الدور' : 'ROLE OVERVIEW'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {locale === 'ar' ? 'عن هذه الوظيفة' : 'About this Role'}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {job.aboutRole[locale]}
              </p>
            </div>

            {/* Card 2: Key Responsibilities */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <span className="text-xs font-bold uppercase text-brand-primary tracking-widest block">
                {locale === 'ar' ? 'المهام والمسؤوليات' : 'DUTIES & DELIVERABLES'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {locale === 'ar' ? 'المسؤوليات الرئيسية' : 'Key Responsibilities'}
              </h2>
              <ul className="space-y-4">
                {job.responsibilities[locale].map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Requirements & Experience */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <span className="text-xs font-bold uppercase text-brand-primary tracking-widest block">
                {locale === 'ar' ? 'المؤهلات المطلوبة' : 'QUALIFICATIONS'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {locale === 'ar' ? 'المتطلبات والخبرات' : 'Requirements & Experience'}
              </h2>
              <ul className="space-y-4">
                {job.requirements[locale].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* Widget 1: Job Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-6 text-start">
              <h3 className="text-xl font-extrabold text-slate-900">
                {locale === 'ar' ? 'نظرة عامة على الوظيفة' : 'Job Overview'}
              </h3>

              <div className="space-y-4 divide-y divide-slate-100 text-sm">
                
                {/* Job Code */}
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {locale === 'ar' ? 'رمز الوظيفة' : 'JOB CODE'}
                  </p>
                  <p className="text-base font-bold text-brand-primary mt-1">
                    {job.code}
                  </p>
                </div>

                {/* Department */}
                <div className="pt-3">
                  <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {locale === 'ar' ? 'القسم' : 'DEPARTMENT'}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {job.department[locale]}
                  </p>
                </div>

                {/* Location */}
                <div className="pt-3">
                  <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {locale === 'ar' ? 'الموقع' : 'LOCATION'}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {job.location[locale]}
                  </p>
                </div>

                {/* Experience Level */}
                <div className="pt-3">
                  <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {locale === 'ar' ? 'مستوى الخبرة' : 'EXPERIENCE LEVEL'}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {job.experience[locale]}
                  </p>
                </div>

                {/* Employment Type */}
                <div className="pt-3">
                  <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {locale === 'ar' ? 'نوع التوظيف' : 'EMPLOYMENT TYPE'}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {job.employmentType[locale]}
                  </p>
                </div>

              </div>

              {/* Big CTA Button */}
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="w-full py-3.5 bg-brand-primary hover:bg-brand-secondary active:scale-[0.98] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center text-base"
              >
                {locale === 'ar' ? 'التقدم لهذه الوظيفة' : 'Apply for this role'}
              </button>
            </div>

            {/* Widget 2: Other Openings Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4 text-start">
              <h3 className="text-xl font-extrabold text-slate-900">
                {locale === 'ar' ? 'وظائف شاغرة أخرى' : 'Other Openings'}
              </h3>

              <div className="space-y-3">
                {otherOpenings.map((other) => (
                  <Link
                    key={other.id}
                    to={localizedPath(`/careers/${other.slug}`)}
                    className="block p-4 rounded-2xl border border-slate-100 hover:border-brand-primary/40 bg-slate-50/60 hover:bg-brand-light/30 transition-all duration-200 space-y-1.5 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-primary transition-colors leading-snug">
                        {other.title[locale]}
                      </h4>
                      <span className="text-xs font-bold text-brand-primary flex-shrink-0">
                        {other.code}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      {other.location[locale]}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Apply for this role Popup Modal (Using createPortal to stay locked in viewport center) */}
      {isApplyModalOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) resetModal()
          }}
        >
          <div 
            className="relative my-auto max-w-lg w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-start"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {locale === 'ar' ? 'التقدم لهذه الوظيفة' : 'Apply for this role'}
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  {job.title[locale]}
                </p>
              </div>

              <button
                onClick={resetModal}
                className="h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {isSubmitted ? (
              /* Success State */
              <div className="py-8 text-center space-y-5 animate-fade-in">
                <div className="h-16 w-16 bg-brand-light text-brand-primary rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    {locale === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Application Submitted Successfully!'}
                  </h4>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                    {locale === 'ar'
                      ? 'شكراً لاهتمامك بالانضمام إلى فريق 3T السعودية. سيقوم فريق الموارد البشرية بمراجعة سيرتك الذاتية والتواصل معك في أقرب وقت.'
                      : 'Thank you for your interest in joining 3T Saudi. Our talent acquisition team will review your application and reach out shortly.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetModal}
                  className="px-8 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-sm"
                >
                  {locale === 'ar' ? 'إغلاق' : 'Done'}
                </button>
              </div>
            ) : (
              /* Application Form */
              <form onSubmit={handleApplySubmit} className="space-y-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    {locale === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={locale === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    className="w-full bg-slate-50 focus:bg-white text-slate-900 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {locale === 'ar' ? 'البريد الإلكتروني *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={locale === 'ar' ? 'name@example.com' : 'name@example.com'}
                      className="w-full bg-slate-50 focus:bg-white text-slate-900 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {locale === 'ar' ? 'رقم الهاتف' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={locale === 'ar' ? '+966 5X XXX XXXX' : '+966 5X XXX XXXX'}
                      className="w-full bg-slate-50 focus:bg-white text-slate-900 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Resume Upload Box (Matches Screenshot 3) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    {locale === 'ar' ? 'السيرة الذاتية (PDF أو Word)' : 'Résumé (PDF or Word)'}
                  </label>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-sky-300 hover:border-brand-primary bg-sky-50/30 hover:bg-brand-light/30 rounded-2xl p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 group"
                  >
                    {resumeFile ? (
                      <div className="flex items-center gap-2 text-brand-primary font-bold text-sm">
                        <FileText className="h-5 w-5" />
                        <span className="truncate max-w-[260px]">{resumeFile.name}</span>
                        <span className="text-xs text-slate-400 font-normal">
                          ({(resumeFile.size / 1024).toFixed(0)} KB)
                        </span>
                      </div>
                    ) : (
                      <>
                        <UploadCloud className="h-6 w-6 text-sky-500 group-hover:text-brand-primary transition-colors" />
                        <span className="text-sm font-semibold text-slate-600 group-hover:text-brand-primary transition-colors">
                          {locale === 'ar' ? 'اختر ملفاً...' : 'Choose a file...'}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Cover Note */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    {locale === 'ar' ? 'ملاحظة إضافية / خطاب تعريفي' : 'Cover note'}
                  </label>
                  <textarea
                    rows={4}
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    placeholder={locale === 'ar' ? 'أخبرنا باختصار عن دافعك وخبراتك...' : 'Tell us briefly about your motivation and key strengths...'}
                    className="w-full bg-slate-50 focus:bg-white text-slate-900 text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button (MVGL Saudi Green) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-brand-primary hover:bg-brand-secondary active:scale-[0.98] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center text-base disabled:opacity-50"
                >
                  {isSubmitting
                    ? (locale === 'ar' ? 'جارٍ الإرسال...' : 'Submitting...')
                    : (locale === 'ar' ? 'إرسال طلب التوظيف' : 'Submit Application')}
                </button>

              </form>
            )}

          </div>
        </div>,
        document.body
      )}

    </div>
  )
}
