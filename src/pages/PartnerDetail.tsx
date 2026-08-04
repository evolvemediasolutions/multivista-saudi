import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { partnersData } from '../data/partners'
import { solutionsData } from '../data/solutions'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function PartnerDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { locale, dir } = useLanguage()

  const partner = partnersData.find((p) => p.slug === slug)

  if (!partner) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-950">404</h1>
          <p className="text-slate-600">
            {locale === 'ar' ? 'الشريك غير موجود.' : 'Partner not found.'}
          </p>
          <Link
            to={`/${locale}/partners`}
            className="inline-block px-6 py-2.5 bg-brand-primary text-white font-medium rounded-lg"
          >
            {locale === 'ar' ? 'العودة للشركاء' : 'Back to Partners'}
          </Link>
        </div>
      </div>
    )
  }

  const associatedSolutions = solutionsData.filter((s) =>
    partner.solutions.includes(s.id)
  )

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      
      {/* Partner Header with Background Image and Centered Text */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/65 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-4">
          <Link
            to={localizedPath('/partners')}
            className="inline-flex items-center gap-2 text-sm text-brand-accent hover:underline font-semibold"
          >
            {dir === 'rtl' ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            {locale === 'ar' ? 'العودة للشركاء' : 'Back to Partners'}
          </Link>
          
          {partner.slug === 'rockwell-automation' && (
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent block pt-4">
              {locale === 'ar' ? 'شريك رئيسي لـ 3T' : '3T PRINCIPAL PARTNER'}
            </span>
          )}
          {partner.slug === 'epp-composites' && (
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent block pt-4">
              {locale === 'ar' ? 'هندسة المواد المركبة' : 'COMPOSITE ENGINEERING'}
            </span>
          )}
          {partner.slug === 'spp-pumps' && (
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent block pt-4">
              {locale === 'ar' ? 'حلول الضخ الهندسية' : 'ENGINEERED PUMPING SOLUTIONS'}
            </span>
          )}
          {partner.slug === 'kirloskar-pneumatic' && (
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent block pt-4">
              {locale === 'ar' ? 'هندسة بلا حدود' : 'ENGINEERING WITHOUT LIMITS'}
            </span>
          )}
          {partner.slug === 'kirloskar-chillers' && (
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent block pt-4">
              {locale === 'ar' ? 'التدفئة وتكييف الهواء وتبريد العمليات' : 'HVAC & PROCESS COOLING'}
            </span>
          )}
          {partner.slug === 'hms-networks' && (
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent block pt-4">
              {locale === 'ar' ? 'الاتصال الصناعي المتكامل' : 'INDUSTRIAL CONNECTIVITY'}
            </span>
          )}
          {partner.slug === 'prosoft-technology' && (
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent block pt-4">
              {locale === 'ar' ? 'الاتصالات الصناعية المتطورة' : 'INDUSTRIAL COMMUNICATION'}
            </span>
          )}

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">{partner.name}</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">{partner.description[locale]}</p>
        </div>
      </section>

      {/* Details & Solutions */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {partner.slug === 'rockwell-automation' ? (
              // 1. Rockwell Automation custom 3-Column Strategic Technologies layout
              <div className="space-y-12 text-start">
                
                {/* Introduction Card */}
                <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
                  <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                    {locale === 'ar' ? 'حلول أتمتة صناعية متكاملة' : 'Connected Enterprise'}
                  </h2>
                  <p className="text-slate-655 leading-relaxed text-base sm:text-lg">
                    {locale === 'ar'
                      ? 'تجمع روكويل أوتوميشن (Rockwell Automation) بين الأتمتة الصناعية والتحكم والبرمجيات والخدمات لمساعدة المؤسسات على بناء عمليات أكثر اتصالاً وإنتاجية.'
                      : 'Rockwell Automation combines industrial automation, control, software and services to help organizations build more connected and productive operations.'}
                  </p>
                </div>

                {/* Strategic Technologies (Three Cards Grid) */}
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block font-bold">
                      {locale === 'ar' ? 'التقنيات الاستراتيجية' : 'STRATEGIC TECHNOLOGIES'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {locale === 'ar' ? 'المكونات والبرمجيات والخدمات الذكية' : 'Core Strategic Technologies'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        name: 'Allen-Bradley',
                        tagline: { en: 'Automation Hardware', ar: 'أجهزة ومكونات الأتمتة' },
                        desc: {
                          en: 'Automation components and integrated control systems.',
                          ar: 'مكونات الأتمتة وأنظمة التحكم المتكاملة.'
                        }
                      },
                      {
                        name: 'FactoryTalk®',
                        tagline: { en: 'Industrial Software', ar: 'البرمجيات الصناعية' },
                        desc: {
                          en: 'Industrial software supporting advanced applications from edge environments and on-premise systems through cloud-connected operations.',
                          ar: 'البرمجيات الصناعية التي تدعم التطبيقات المتقدمة من بيئات الحوسبة الطرفية والأنظمة المحلية إلى العمليات المتصلة بالسحاب.'
                        }
                      },
                      {
                        name: 'LifecycleIQ™ Services',
                        tagline: { en: 'Lifecycle Support', ar: 'خدمات دعم دورة الحياة' },
                        desc: {
                          en: 'Services designed to connect, secure, mobilize and scale manufacturing operations while supporting performance, reliability, safety and innovation.',
                          ar: 'الخدمات المصممة لربط وتأمين وتعبئة وتوسيع نطاق عمليات التصنيع مع دعم الأداء والموثوقية والسلامة والابتكار.'
                        }
                      }
                    ].map((tech, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer text-start flex flex-col justify-between min-h-[220px]"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider block">
                              {tech.tagline[locale]}
                            </span>
                            <span className="text-xs font-bold text-slate-350">0{idx + 1}</span>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-base font-extrabold text-slate-950 group-hover:text-brand-primary transition-colors">
                              {tech.name}
                            </h4>
                            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                              {tech.desc[locale]}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-brand-light border border-brand-primary/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-start">
                    <h4 className="font-bold text-slate-950">
                      {locale === 'ar' ? 'شراكة 3T مع روكويل أوتوميشن' : '3T & Rockwell Automation Partnership'}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {locale === 'ar' ? 'تواصل مع خبرائنا لمناقشة حلول الأتمتة والتحكم المتكاملة لمشروعك.' : 'Connect with our specialists to explore control architectures and software licensing.'}
                    </p>
                  </div>
                  <Link
                    to={localizedPath('/contact')}
                    className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white text-sm font-bold rounded-xl shadow-sm transition-colors whitespace-nowrap"
                  >
                    {locale === 'ar' ? 'تحدث مع 3T حول روكويل أوتوميشن' : 'Talk to 3T About Rockwell Automation'}
                  </Link>
                </div>

              </div>
            ) : partner.slug === 'epp-composites' ? (
              // 2. EPP Composites Portfolio + Certifications
              <div className="space-y-12 text-start">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
                  <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                    {locale === 'ar' ? 'الريادة في صناعة البلاستيك المقوى' : 'Pioneering FRP/GRP Innovation'}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                    {locale === 'ar'
                      ? 'تأسست شركة إي بي بي كومبوزيتس (EPP Composites) عام 1986، وتتخصص في تصميم وهندسة وتصنيع حلول البلاستيك المقوى بالألياف (FRP) والبلاستيك المقوى بالزجاج (GRP).'
                      : 'Established in 1986, EPP Composites specializes in the design, engineering and manufacturing of Fiber Reinforced Plastic and Glass Reinforced Plastic solutions.'}
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                    <div className="text-center">
                      <span className="block text-2xl sm:text-3xl font-black text-brand-primary">1986</span>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">{locale === 'ar' ? 'تأسست' : 'Established'}</span>
                    </div>
                    <div className="text-center border-x border-slate-150">
                      <span className="block text-2xl sm:text-3xl font-black text-brand-primary">5,500+</span>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">{locale === 'ar' ? 'عملاء' : 'Customers'}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-2xl sm:text-3xl font-black text-brand-primary">45+</span>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">{locale === 'ar' ? 'دول' : 'Countries'}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'حلول المواد المركبة' : 'COMPOSITE SOLUTIONS'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{locale === 'ar' ? 'محفظة المنتجات الهندسية' : 'Product Portfolio'}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: { en: 'GRP Piping Systems', ar: 'أنظمة أنابيب GRP' }, desc: { en: 'High-strength, lightweight and corrosion-resistant piping systems.', ar: 'أنظمة أنابيب عالية القوة وخفيفة الوزن ومقاومة للتآكل.' } },
                      { title: { en: 'FRP Process Equipment', ar: 'معدات معالجة FRP' }, desc: { en: 'Tanks, vessels, scrubbers and engineered industrial equipment.', ar: 'الخزانات والأوعية وأجهزة الغسيل والمعدات الصناعية الهندسية.' } },
                      { title: { en: 'SMC Products', ar: 'منتجات SMC' }, desc: { en: 'Precision composite components for automotive, electrical and infrastructure applications.', ar: 'مكونات مركبة دقيقة لتطبيقات السيارات والكهرباء والبنية التحتية.' } },
                      { title: { en: 'Pultruded Products & Gratings', ar: 'المنتجات المسحوبة والشبكات' }, desc: { en: 'Lightweight structural components for industrial platforms and applications.', ar: 'مكونات هيكلية خفيفة الوزن للمنصات والتطبيقات الصناعية.' } },
                      { title: { en: 'Custom Moulded Products', ar: 'منتجات مصبوبة مخصصة' }, desc: { en: 'Composite products engineered around specific application requirements.', ar: 'منتجات مركبة مصممة خصيصاً لتلبية متطلبات تطبيقات معينة.' } },
                      { title: { en: 'Mobility Solutions', ar: 'حلول النقل' }, desc: { en: 'FRP components supporting transportation and mobility infrastructure.', ar: 'مكونات FRP التي تدعم البنية التحتية للنقل والخدمات اللوجستية.' } },
                      { title: { en: 'FRP Sheets', ar: 'ألواح FRP' }, desc: { en: 'Continuous-laminated sheets for industrial and architectural applications.', ar: 'ألواح صفائحية مستمرة للتطبيقات الصناعية والمعمارية.' } }
                    ].map((p, idx) => (
                      <div key={idx} className={`bg-white border border-slate-100 rounded-2xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer text-start flex flex-col justify-between ${idx === 6 ? 'md:col-span-2' : ''}`}>
                        <div className="space-y-3">
                          <span className="text-xs font-bold text-slate-400 block">0{idx + 1}</span>
                          <h4 className="text-lg font-bold text-slate-950 group-hover:text-brand-primary transition-colors">{p.title[locale]}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{p.desc[locale]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'معايير الجودة والاعتمادات' : 'STANDARDS & APPROVALS'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{locale === 'ar' ? 'الشهادات والاعتمادات الدولية' : 'Certifications'}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'API 15 LR', 'PESO', 'UL', 'WRAS', 'BIS'].map((cert) => (
                      <div key={cert} className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-center flex items-center justify-center gap-2 group hover:bg-white hover:border-brand-primary hover:shadow-xs transition-all duration-300">
                        <span className="text-sm font-bold text-slate-800 group-hover:text-brand-primary transition-colors">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : partner.slug === 'spp-pumps' ? (
              // 3. SPP Pumps key applications + expertise + CTA
              <div className="space-y-12 text-start">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
                  <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">{locale === 'ar' ? 'قرن ونصف من التميز الهندسي' : '150 Years of Engineering Excellence'}</h2>
                  <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                    {locale === 'ar' ? 'لأكثر من 150 عاماً، تخصصت شركة إس بي بي بمبس (SPP Pumps) في مضخات الطرد المركزي والأنظمة ذات الصلة.' : 'For nearly 150 years, SPP Pumps has specialized in centrifugal pumps and related systems.'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'مجالات العمل والتطبيقات' : 'OPERATIONAL SECTORS'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{locale === 'ar' ? 'التطبيقات الرئيسية للضخ' : 'Key Applications'}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { en: 'Fire Protection', ar: 'مكافحة الحرائق' },
                      { en: 'Oil & Gas', ar: 'النفط والغاز' },
                      { en: 'Industrial', ar: 'الصناعية' },
                      { en: 'Wastewater', ar: 'مياه الصرف الصحي' },
                      { en: 'Potable Water', ar: 'مياه الشرب' },
                      { en: 'Power Generation', ar: 'توليد الطاقة' },
                      { en: 'Construction', ar: 'البناء والتشييد' },
                      { en: 'Dewatering', ar: 'نزح المياه' },
                      { en: 'Mining', ar: 'التعدين' }
                    ].map((app, idx) => (
                      <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer text-center flex flex-col items-center justify-center gap-3 min-h-[110px]">
                        <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                        <h4 className="text-sm font-extrabold text-slate-950 group-hover:text-brand-primary transition-colors">{app[locale]}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                  <div className="space-y-4 relative z-10">
                    <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">{locale === 'ar' ? 'القدرات الهندسية الفائقة' : 'ENGINEERING CAPABILITIES'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold">{locale === 'ar' ? 'الخبرة الهندسية المتكاملة' : 'Engineering Expertise'}</h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {locale === 'ar' ? 'تشمل قدرات إس بي بي التصميم المتخصص، والتصنيع، والتركيب، والتشغيل التجريبي، والصيانة لأنظمة الضخ المصممة هندسياً بدقة.' : "SPP's capabilities span specialized design, manufacturing, installation, commissioning and servicing of precision-engineered pumping systems."}
                    </p>
                  </div>
                </div>

                <div className="bg-brand-light border border-brand-primary/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-start">
                    <h4 className="font-bold text-slate-950">{locale === 'ar' ? 'هل لديك متطلبات ضخ هندسية؟' : 'Have Engineered Pumping Requirements?'}</h4>
                    <p className="text-xs text-slate-500">{locale === 'ar' ? 'تحدث إلى خبرائنا الفنيين لمناقشة متطلبات الأداء والمواصفات.' : 'Speak with our technical experts to align on performance curves and installation specs.'}</p>
                  </div>
                  <Link to={localizedPath('/contact')} className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white text-sm font-bold rounded-xl shadow-sm transition-colors whitespace-nowrap">
                    {locale === 'ar' ? 'ناقش متطلبات الضخ الخاصة بك' : 'Discuss Your Pumping Requirement'}
                  </Link>
                </div>
              </div>
            ) : partner.slug === 'kirloskar-pneumatic' ? (
              // 4. Kirloskar Pneumatic solutions + vertical legacy timeline
              <div className="space-y-12 text-start">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
                  <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">{locale === 'ar' ? 'تكنولوجيا هندسية مبتكرة' : 'Innovation That Powers Industry'}</h2>
                  <p className="text-slate-655 leading-relaxed text-base sm:text-lg">
                    {locale === 'ar' ? 'تأسست شركة كيرلوسكار نيوماتيك (Kirloskar Pneumatic) في عام 1958، وتطور تكنولوجيات هندسية تدعم مختلف التطبيقات الصناعية.' : 'Founded in 1958, Kirloskar Pneumatic develops engineering technologies supporting diverse industrial applications.'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'حلولنا الهندسية' : 'OUR SOLUTIONS'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{locale === 'ar' ? 'محفظة الحلول المتكاملة' : 'Solution Portfolio'}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { en: 'Air Compressors', ar: 'ضواغط الهواء' },
                      { en: 'Air Conditioning & Refrigeration', ar: 'تكييف الهواء والتبريد' },
                      { en: 'Process Gas Systems', ar: 'أنظمة غاز العمليات' },
                      { en: 'Mechanical Transmissions', ar: 'ناقل الحركة الميكانيكي' }
                    ].map((sol, idx) => (
                      <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center justify-between">
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-slate-400 block">0{idx + 1}</span>
                          <h4 className="text-base font-extrabold text-slate-950 group-hover:text-brand-primary transition-colors">{sol[locale]}</h4>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary group-hover:text-white transition-colors">&rarr;</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'تاريخنا العريق' : 'HERITAGE'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{locale === 'ar' ? 'مسيرة كيرلوسكار الصناعية' : 'Legacy'}</h3>
                  </div>
                  <div className="relative border-l-2 border-slate-200/60 rtl:border-l-0 rtl:border-r-2 rtl:border-slate-200/60 pl-8 rtl:pl-0 rtl:pr-8 space-y-8 py-2 ml-4 rtl:ml-0 rtl:mr-4">
                    {[
                      { year: '1888', text: { en: 'Origins of the Kirloskar engineering legacy.', ar: 'بدايات إرث كيرلوسكار الهندسي العريق.' } },
                      { year: '1958', text: { en: 'Kirloskar Pneumatic established.', ar: 'تأسيس كيرلوسكار نيوماتيك وبداية مرحلة جديدة.' } },
                      { year: 'Today', text: { en: "Continuing the group's industrial innovation through evolving engineering technologies.", ar: 'مواصلة الابتكار الصناعي للمجموعة من خلال التقنيات الهندسية المتطورة.' } }
                    ].map((step, idx) => (
                      <div key={idx} className="relative group text-start">
                        <div className="absolute -left-[41px] rtl:-left-0 rtl:-right-[41px] top-6 h-4 w-4 rounded-full bg-slate-900 border-2 border-slate-50 group-hover:bg-brand-primary transition-colors duration-300 z-10"></div>
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative space-y-3">
                          <span className="inline-block px-3 py-1 bg-brand-light border border-brand-primary/10 rounded-lg text-brand-primary text-sm font-bold">{step.year}</span>
                          <p className="text-slate-600 text-sm leading-relaxed">{step.text[locale]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : partner.slug === 'kirloskar-chillers' ? (
              // 5. Kirloskar Chillers solutions + distinct scale metrics grid
              <div className="space-y-12 text-start">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
                  <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">{locale === 'ar' ? 'الريادة والتميز في التبريد' : 'HVAC&R Leadership'}</h2>
                  <p className="text-slate-655 leading-relaxed text-base sm:text-lg">
                    {locale === 'ar' ? 'تقدم كيرلوسكار تشيلرز (Kirloskar Chillers) عقوداً من الخبرة في مجال التدفئة والتهوية وتكييف الهواء والتبريد (HVAC&R)، مع التركيز على الموثوقية والكفاءة التشغيلية والدعم المستجيب لما بعد البيع.' : 'Kirloskar Chillers brings decades of experience in HVAC&R, with a focus on reliability, operating efficiency and responsive after-sales support.'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'الحلول والمنتجات' : 'OUR SOLUTIONS'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{locale === 'ar' ? 'مجموعات مبردات المياه والعمليات' : 'Solutions'}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { en: 'Centrifugal Chillers', ar: 'المبردات الطاردة المركزية' },
                      { en: 'Screw Chillers', ar: 'المبردات اللولبية' },
                      { en: 'Air-Cooled Systems', ar: 'أنظمة التبريد بالهواء' },
                      { en: 'Water-Cooled Systems', ar: 'أنظمة التبريد بالماء' },
                      { en: 'Process Cooling', ar: 'تبريد العمليات الصناعية' }
                    ].map((sol, idx) => (
                      <div key={idx} className={`bg-white border border-slate-100 rounded-2xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer text-center flex flex-col justify-between ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                        <div className="space-y-2">
                          <span className="text-xs font-bold text-slate-400 block">0{idx + 1}</span>
                          <h4 className="text-base font-extrabold text-slate-950 group-hover:text-brand-primary transition-colors">{sol[locale]}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'أداء وتأثير مثبت بالحقائق' : 'PERFORMANCE & SCALE'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{locale === 'ar' ? 'مؤشرات الأداء والسعة المثبتة' : 'Highlight Metrics'}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-start space-y-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'إجمالي السعة العالمية' : 'GLOBAL SCALE'}</span>
                        <h4 className="text-sm font-extrabold text-slate-500">{locale === 'ar' ? 'السعة الإجمالية للمعدات' : 'Total Equipment Capacity'}</h4>
                      </div>
                      <span className="block text-4xl sm:text-5xl font-black text-brand-primary tracking-tight">1,000,000+</span>
                      <span className="inline-block text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1">{locale === 'ar' ? 'طن تبريد (TR)' : 'TR Capacity'}</span>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-start space-y-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'مبردات قيد التشغيل' : 'GLOBAL SCALE'}</span>
                        <h4 className="text-sm font-extrabold text-slate-500">{locale === 'ar' ? 'مبرد في الميدان' : 'Total Chillers in Field'}</h4>
                      </div>
                      <span className="block text-4xl sm:text-5xl font-black text-brand-primary tracking-tight">5,000+</span>
                      <span className="inline-block text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1">{locale === 'ar' ? 'مبرد مائي' : 'Water Chillers'}</span>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-start space-y-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'سلسلة منتجات معينة' : 'SPECIALIZED RANGE'}</span>
                        <h4 className="text-sm font-extrabold text-slate-500">{locale === 'ar' ? 'سعة منتجات تبريد محددة' : 'Product Range Capacity'}</h4>
                      </div>
                      <span className="block text-4xl sm:text-5xl font-black text-brand-primary tracking-tight">500,000+</span>
                      <span className="inline-block text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1">{locale === 'ar' ? 'طن تبريد (TR)' : 'TR Capacity'}</span>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-start space-y-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block">{locale === 'ar' ? 'مبردات مثبتة محددة' : 'SPECIALIZED RANGE'}</span>
                        <h4 className="text-sm font-extrabold text-slate-500">{locale === 'ar' ? 'مبرد تم تركيبه' : 'Product Range Installed'}</h4>
                      </div>
                      <span className="block text-4xl sm:text-5xl font-black text-brand-primary tracking-tight">3,000+</span>
                      <span className="inline-block text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1">{locale === 'ar' ? 'مبرد مائي' : 'Chillers Installed'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : partner.slug === 'hms-networks' ? (
              // 6. HMS Networks key applications + market focus
              <div className="space-y-12 text-start">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
                  <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">{locale === 'ar' ? 'التقاء الأجهزة والبرمجيات' : 'Hardware Meets Software™'}</h2>
                  <p className="text-slate-655 leading-relaxed text-base sm:text-lg">
                    {locale === 'ar'
                      ? 'يرمز HMS إلى التقاء الأجهزة والبرمجيات (Hardware Meets Software™). وتمكن تقنياتها الأجهزة الصناعية من الاتصال وتبادل المعلومات مع البرامج والأنظمة الأخرى.'
                      : 'HMS stands for Hardware Meets Software™. Its technologies enable industrial hardware to communicate and exchange information with software and other systems.'}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block font-bold">{locale === 'ar' ? 'شركاء النجاح المستهدفين' : 'MARKET FOCUS'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{locale === 'ar' ? 'من تخدمهم إتش إم إس نتوركس' : 'Who HMS Serves'}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-start space-y-4">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block">{locale === 'ar' ? 'مصنعو الأجهزة والمعدات' : 'FOR OEMS'}</span>
                        <h4 className="text-lg font-extrabold text-slate-950">{locale === 'ar' ? 'مصنعو المعدات' : 'Equipment Makers'}</h4>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {locale === 'ar'
                          ? 'مصنعو محركات الأقراص والروبوتات ووحدات التدفئة والتهوية وتكييف الهواء والمركبات والمولدات والآلات والأجهزة الصناعية التي تبحث عن حلول الاتصال لمنتجاتها.'
                          : 'Manufacturers of drives, robots, HVAC units, vehicles, gensets, machines and industrial devices seeking connectivity for their products.'}
                      </p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-start space-y-4">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block">{locale === 'ar' ? 'مشغلو المصانع والمرافق' : 'FOR END USERS'}</span>
                        <h4 className="text-lg font-extrabold text-slate-950">{locale === 'ar' ? 'مستخدمو المعدات' : 'Equipment Users'}</h4>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {locale === 'ar'
                          ? 'أصحاب المصانع، ومدمجو الأنظمة، ومشغلو المرافق الذين يبحثون عن حلول الاتصال وتبادل المعلومات عبر المعدات الصناعية.'
                          : 'Factory owners, system integrators and facility operators seeking communication and information sharing across industrial equipment.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-light border border-brand-primary/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-start">
                    <h4 className="font-bold text-slate-950">{locale === 'ar' ? 'هل أنت مستعد لربط مصنعك؟' : 'Ready to Connect Your Assets?'}</h4>
                    <p className="text-xs text-slate-500">{locale === 'ar' ? 'اكتشف كيف يمكن لبوابات وأجهزة الاتصال الخاصة بـ HMS زيادة كفاءة التشغيل لديك.' : 'Discover how HMS gateways and routers can unlock hidden lifecycle data.'}</p>
                  </div>
                  <Link to={localizedPath('/contact')} className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white text-sm font-bold rounded-xl shadow-sm transition-colors whitespace-nowrap">
                    {locale === 'ar' ? 'استكشف حلول الاتصال الصناعي' : 'Explore Connectivity Solutions'}
                  </Link>
                </div>
              </div>
            ) : partner.slug === 'prosoft-technology' ? (
              // 7. ProSoft Technology core capabilities
              <div className="space-y-12 text-start">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
                  <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">{locale === 'ar' ? 'حلول الاتصال والتحسين والتحديث' : 'Connectivity, Optimization, Modernization'}</h2>
                  <p className="text-slate-655 leading-relaxed text-base sm:text-lg">
                    {locale === 'ar'
                      ? 'تقدم بروسوفت تكنولوجي (ProSoft Technology)، إحدى العلامات التجارية المتصلة بشركة بيلدن (Belden)، تقنيات اتصالات صناعية مصممة لمعالجة تحديات الاتصال والتحسين والتحديث والترحيل الرقمي.'
                      : "ProSoft Technology, one of Belden's connected brands, provides industrial communication technologies designed to address connectivity, optimization, modernization and migration challenges."}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block font-bold">{locale === 'ar' ? 'ركائز التكنولوجيا الصناعية' : 'CORE CAPABILITIES'}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{locale === 'ar' ? 'الاتصال والتحسين الذكي للمصانع' : 'Key Engineering Pillars'}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: { en: 'Connectivity', ar: 'الاتصال والتوصيل' }, desc: { en: 'Connect industrial equipment and previously separate systems.', ar: 'توصيل المعدات الصناعية والأنظمة المنفصلة سابقاً ببعضها البعض.' } },
                      { title: { en: 'Modernization', ar: 'التحديث والرقمنة' }, desc: { en: 'Integrate legacy equipment into modern industrial architectures.', ar: 'دمج المعدات القديمة في بنيات الأنظمة الصناعية الحديثة.' } },
                      { title: { en: 'Industrial Data', ar: 'البيانات الصناعية' }, desc: { en: 'Enable production data to move between industrial assets and systems.', ar: 'تمكين بيانات الإنتاج من الانتقال بسلاسة بين الأصول والأنظمة الصناعية.' } },
                      { title: { en: 'Communication', ar: 'شبكات الاتصال' }, desc: { en: 'Support industrial protocols and reliable communications required by industrial applications.', ar: 'دعم البروتوكولات الصناعية والاتصالات الموثوقة التي تتطلبها التطبيقات الصناعية.' } }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer text-start flex flex-col justify-between">
                        <div className="space-y-3">
                          <span className="text-xs font-bold text-slate-400 block">0{idx + 1}</span>
                          <h4 className="text-base font-extrabold text-slate-950 group-hover:text-brand-primary transition-colors">{item.title[locale]}</h4>
                          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc[locale]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Standard layout for other partners
              <div className="space-y-4 text-start">
                <h2 className="text-2xl font-bold text-slate-900">
                  {locale === 'ar' ? 'حول الشراكة التقنية' : 'About the Technology Partnership'}
                </h2>
                <p className="text-slate-655 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                  {partner.longDescription[locale]}
                </p>
              </div>
            )}

          </div>
          
          {/* Solutions Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {associatedSolutions.length > 0 && (
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4 text-start">
                <h3 className="text-lg font-bold text-slate-950">
                  {locale === 'ar' ? 'الحلول والقدرات المرتبطة' : 'Associated Engineering Solutions'}
                </h3>
                <div className="space-y-3">
                  {associatedSolutions.map((sol) => (
                    <Link
                      key={sol.id}
                      to={localizedPath(`/solutions/${sol.slug}`)}
                      className="block p-3 rounded-lg border border-slate-100 hover:border-brand-primary/45 transition-colors"
                    >
                      <span className="font-bold text-sm text-slate-900 block">{sol.title[locale]}</span>
                      <span className="text-xs text-brand-accent block mt-1 hover:underline">
                        {locale === 'ar' ? 'عرض تفاصيل الحل' : 'View solution details'} &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-brand-light rounded-2xl p-6 border border-slate-200/50 space-y-4 text-start">
              <h4 className="font-bold text-slate-950">
                {locale === 'ar' ? 'هل تود الاستفسار عن منتج معين؟' : 'Inquire About OEM Solutions'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {locale === 'ar'
                  ? 'اتصل بقسم المبيعات لدينا للحصول على عروض الأسعار والتكوينات المخصصة.'
                  : 'Contact our sales division to get quotes, technical catalog specs, and customization info.'}
              </p>
              <Link
                to={localizedPath('/contact')}
                className="block text-center w-full py-2 bg-brand-secondary hover:bg-brand-primary text-white text-sm font-semibold rounded-lg"
              >
                {locale === 'ar' ? 'طلب عرض سعر' : 'Request Quotation'}
              </Link>
            </div>
          </div>

        </div>
      </section>

      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" />

    </div>
  )
}
