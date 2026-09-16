import { useState, type FormEvent } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Mail, Phone, MapPin } from 'lucide-react'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  interest: string
  message: string
}

interface FormErrors {
  name?: string
  company?: string
  email?: string
  interest?: string
  message?: string
}

export default function Contact() {
  const { locale, t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const interestOptions = [
    { value: 'air-gas-solutions', label: locale === 'ar' ? 'حلول الهواء والغاز' : 'Air & Gas Solutions' },
    { value: 'refrigeration-hvac-solutions', label: locale === 'ar' ? 'حلول التبريد والتكييف' : 'Refrigeration & HVAC Solutions' },
    { value: 'automation-control', label: locale === 'ar' ? 'حلول الأتمتة والتحكم' : 'Automation & Control Solutions' },
    { value: 'non-metallic-solutions', label: locale === 'ar' ? 'حلول المواد غير المعدنية' : 'Non Metallic Solution' },
    { value: 'fire-pump-solutions', label: locale === 'ar' ? 'حلول مضخات الحريق' : 'Fire Pump Solutions' }
  ]

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) newErrors.name = t('validation.required')
    if (!formData.company.trim()) newErrors.company = t('validation.required')
    
    if (!formData.email.trim()) {
      newErrors.email = t('validation.required')
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('validation.email')
    }
    
    if (!formData.interest) newErrors.interest = t('validation.required')
    if (!formData.message.trim()) newErrors.message = t('validation.required')

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitStatus('submitting')

    // Simulate API Submission
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      
      {/* Contact Header */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1200&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar' ? 'الرئيسية / اتصل بنا' : 'HOME / CONTACT US'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {t('contact.title')}
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              {t('contact.description')}
            </p>
          </div>
        </section>
      </div>

      {/* Main Grid: Form + Address Info */}
      <section className="py-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Address and details */}
          <div className="lg:col-span-1 space-y-8 bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-950">Top Tag Trading / 3T Saudi</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                {locale === 'ar' ? 'المكتب الرئيسي' : 'HEAD OFFICE'}
              </p>
            </div>

            <div className="space-y-6 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="mt-1 leading-relaxed">
                    4th Floor, Al Jawahara Business Towers,<br />
                    Jeddah Street, 4th Street, Al Thuqbah,<br />
                    Al Khobar, Saudi Arabia – 31952
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a href="mailto:marketing@3t-saudi.com" className="text-brand-accent hover:underline block mt-1">
                    marketing@3t-saudi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <a href="tel:+966138876070" className="text-brand-accent hover:underline block mt-1 direction-ltr text-start">
                    (+966) 13 887 6070
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-slate-950">
              {locale === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
            </h3>

            {submitStatus === 'success' ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-semibold">
                {t('form.success')}
              </div>
            ) : submitStatus === 'error' ? (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-sm font-semibold">
                {t('form.error')}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-semibold text-slate-700">
                    {t('contact.name')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                      errors.name ? 'border-rose-300 focus:border-rose-500' : 'border-slate-200 focus:border-brand-primary'
                    }`}
                  />
                  {errors.name && <p className="text-rose-500 text-xs font-semibold">{errors.name}</p>}
                </div>

                {/* Company name */}
                <div className="space-y-1.5">
                  <label htmlFor="company" className="font-semibold text-slate-700">
                    {t('contact.company')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                      errors.company ? 'border-rose-300 focus:border-rose-500' : 'border-slate-200 focus:border-brand-primary'
                    }`}
                  />
                  {errors.company && <p className="text-rose-500 text-xs font-semibold">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-semibold text-slate-700">
                    {t('contact.email')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                      errors.email ? 'border-rose-300 focus:border-rose-500' : 'border-slate-200 focus:border-brand-primary'
                    }`}
                  />
                  {errors.email && <p className="text-rose-500 text-xs font-semibold">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="font-semibold text-slate-700">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 border-slate-200 focus:border-brand-primary"
                  />
                </div>
              </div>

              {/* Interest dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="interest" className="font-semibold text-slate-700">
                  {t('contact.interest')} <span className="text-rose-500">*</span>
                </label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                    errors.interest ? 'border-rose-300 focus:border-rose-500' : 'border-slate-200 focus:border-brand-primary'
                  }`}
                >
                  <option value="">{locale === 'ar' ? 'حدد مجالك المفضل' : 'Select an area of interest'}</option>
                  {interestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.interest && <p className="text-rose-500 text-xs font-semibold">{errors.interest}</p>}
              </div>

              {/* Requirement Text */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-semibold text-slate-700">
                  {t('contact.message')} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                    errors.message ? 'border-rose-300 focus:border-rose-500' : 'border-slate-200 focus:border-brand-primary'
                  }`}
                />
                {errors.message && <p className="text-rose-500 text-xs font-semibold">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="px-6 py-3 bg-brand-secondary hover:bg-brand-primary text-white font-bold rounded-lg shadow-md hover:shadow-brand-primary/10 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                >
                  {submitStatus === 'submitting' ? t('contact.submitting') : t('contact.submit')}
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  )
}
