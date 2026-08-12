import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ArrowRight, ArrowLeft, Shield, Lightbulb, Users, RefreshCw, ChevronLeft, ChevronRight, Cpu, Settings } from 'lucide-react'
import { industriesData } from '../data/industries'
import { solutionsData } from '../data/solutions'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function Home() {
  const { locale, dir } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const totalScroll = scrollWidth - clientWidth
      if (totalScroll > 0) {
        // Compute relative progress absolute because scrollLeft can be negative in RTL
        setScrollProgress(Math.abs(scrollLeft) / totalScroll)
      }
    }
  }

  const scrollSlider = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340 // card width + gap
      const dirFactor = direction === 'left' ? -1 : 1
      // If document is RTL, flip the direction factor
      const actualFactor = dir === 'rtl' ? -dirFactor : dirFactor
      scrollRef.current.scrollBy({ left: scrollAmount * actualFactor, behavior: 'smooth' })
    }
  }

  const slides = [
    {
      title: {
        en: 'Engineering Solutions That Keep Industries Moving',
        ar: 'حلول هندسية تدفع الصناعة إلى الأمام'
      },
      eyebrow: {
        en: 'INDUSTRIAL ENGINEERING SOLUTIONS',
        ar: 'حلول هندسية صناعية'
      },
      desc: {
        en: 'Delivering world-class industrial products, engineering expertise and dependable support to businesses across Saudi Arabia.',
        ar: 'نقدم منتجات صناعية عالمية المستوى، وخبرات هندسية، ودعماً موثوقاً للمنشآت والقطاعات الصناعية في المملكة العربية السعودية.'
      },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80'
    }
  ]

  const solutions = [
    {
      title: { en: 'Industrial Automation', ar: 'الأتمتة الصناعية' },
      desc: {
        en: 'Integrated automation, control and digital technologies designed to improve productivity and operational visibility.',
        ar: 'الأتمتة المتكاملة، وأنظمة التحكم والتقنيات الرقمية المصممة لتحسين الإنتاجية والرؤية التشغيلية.'
      },
      slug: 'industrial-automation'
    },
    {
      title: { en: 'Compressed Air', ar: 'حلول الهواء المضغوط' },
      desc: {
        en: 'Reliable compressed-air technologies engineered for demanding industrial environments.',
        ar: 'تقنيات الهواء المضغوط الموثوقة والمصممة للبيئات الصناعية الصعبة.'
      },
      slug: 'compressed-air'
    },
    {
      title: { en: 'Industrial Refrigeration', ar: 'التبريد الصناعي' },
      desc: {
        en: 'Industrial refrigeration compressors and packages supporting critical process applications.',
        ar: 'ضواغط وحزم التبريد الصناعي لدعم تطبيقات العمليات الحرجة.'
      },
      slug: 'industrial-refrigeration'
    },
    {
      title: { en: 'Process Gas Compression', ar: 'ضغط غازات العمليات' },
      desc: {
        en: 'Engineered compression technologies designed around demanding process requirements.',
        ar: 'تقنيات ضغط غازات العمليات المصممة هندسياً حول متطلبات العمليات الصعبة.'
      },
      slug: 'process-gas-compression'
    },
    {
      title: { en: 'HVAC & Process Cooling', ar: 'التكييف وتبريد العمليات' },
      desc: {
        en: 'Efficient chilled-water and HVAC solutions for industrial and commercial applications.',
        ar: 'حلول التكييف وتبريد المياه الفعالة للتطبيقات الصناعية والتجارية.'
      },
      slug: 'hvac-process-cooling'
    },
    {
      title: { en: 'Pumping Solutions', ar: 'حلول الضخ' },
      desc: {
        en: 'High-performance pumping technologies for industrial, water, fire-protection and process applications.',
        ar: 'تقنيات ضخ عالية الأداء لتطبيقات الصناعة، والمياه، ومكافحة الحرائق، والعمليات.'
      },
      slug: 'pumping'
    },
    {
      title: { en: 'Industrial Communication', ar: 'الاتصالات الصناعية' },
      desc: {
        en: 'Connected industrial technologies enabling machines, control systems and software to communicate effectively.',
        ar: 'تقنيات الاتصال الصناعي التي تمكن الآلات وأنظمة التحكم والبرمجيات من الاتصال بفعالية.'
      },
      slug: 'industrial-communication'
    },
    {
      title: { en: 'FRP / GRP Solutions', ar: 'حلول FRP / GRP' },
      desc: {
        en: 'Advanced composite piping, process equipment and structural solutions engineered for corrosion resistance and long service life.',
        ar: 'الأنابيب المركبة المتقدمة، ومعدات العمليات والحلول الإنشائية المصممة لمقاومة التآكل والخدمة الطويلة.'
      },
      slug: 'frp-grp'
    }
  ]

  const principles = [
    {
      title: { en: 'Integrity', ar: 'النزاهة والشفافية' },
      desc: {
        en: 'Doing business responsibly and maintaining transparency.',
        ar: 'العمل بمسؤولية والحفاظ على الشفافية المطلقة.'
      },
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: { en: 'Engineering Excellence', ar: 'التميز الهندسي' },
      desc: {
        en: 'Delivering solutions built around performance and reliability.',
        ar: 'تقديم حلول هندسية متطورة مبنية على الأداء والموثوقية.'
      },
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: { en: 'Customer Partnership', ar: 'الشراكة مع العميل' },
      desc: {
        en: 'Building lasting relationships through responsive support.',
        ar: 'بناء علاقات دائمة ومثمرة من خلال الدعم السريع والمسؤول.'
      },
      icon: <Users className="h-6 w-6" />
    },
    {
      title: { en: 'Continuous Improvement', ar: 'التطوير المستمر' },
      desc: {
        en: 'Strengthening our capabilities alongside our principal partners.',
        ar: 'تعزيز وتطوير قدراتنا جنباً إلى جنب مع شركائنا الرئيسيين.'
      },
      icon: <RefreshCw className="h-6 w-6" />
    }
  ]

  const events = [
    {
      title: { en: 'Engage to Excel', ar: 'التواصل للتميز' },
      desc: {
        en: 'Bringing teams and industry stakeholders together to exchange knowledge and strengthen collaboration.',
        ar: 'الجمع بين الفرق والشركاء في قطاع الصناعة لتبادل المعرفة وتعزيز التعاون.'
      }
    },
    {
      title: { en: 'Partnering for Success', ar: 'الشراكة من أجل النجاح' },
      desc: {
        en: 'Building stronger relationships with our technology partners and customers.',
        ar: 'بناء علاقات أقوى مع شركائنا التقنيين وعملائنا.'
      }
    },
    {
      title: { en: 'V Connect', ar: 'في كونكت' },
      desc: {
        en: 'Connecting expertise, technology and industry opportunities.',
        ar: 'ربط الخبرات والتكنولوجيا والفرص الصناعية في السوق المحلي.'
      }
    },
    {
      title: { en: 'Technology Day', ar: 'يوم التكنولوجيا' },
      desc: {
        en: 'Showcasing technologies and engineering solutions for modern industry.',
        ar: 'عرض التقنيات والحلول الهندسية للصناعة الحديثة.'
      }
    },
    {
      title: { en: 'Industry Expos', ar: 'المعارض الصناعية' },
      desc: {
        en: 'Participating in specialized exhibitions including Intersec and non-metallic industry events.',
        ar: 'المشاركة في المعارض المتخصصة بما في ذلك معرض إنترسك وفعاليات قطاع الصناعات غير المعدنية.'
      }
    }
  ]

  const partnerLogos = [
    { name: 'Rockwell Automation', image: '/PARTNERS LOGO/ROCKWELL AUTOMATION.png', slug: 'rockwell-automation', scale: 'scale-[1.45]' },
    { name: 'Allen Bradley', image: '/PARTNERS LOGO/ALLEN BRADLEY.png', slug: 'rockwell-automation', scale: 'scale-[1.45]' },
    { name: 'FactoryTalk', image: '/PARTNERS LOGO/FACTORY TALK.png', slug: 'rockwell-automation', scale: 'scale-115' },
    { name: 'EPP Composites', image: '/PARTNERS LOGO/EPP.jpg', slug: 'epp-composites', scale: 'scale-100' },
    { name: 'SPP Pumps', image: '/PARTNERS LOGO/SPP.jpg', slug: 'spp-pumps', scale: 'scale-100' },
    { name: 'Kirloskar Pneumatic', image: '/PARTNERS LOGO/KIRLOSKAR PNEUMATIC.jpg', slug: 'kirloskar-pneumatic', scale: 'scale-100' },
    { name: 'Kirloskar Chillers', image: '/PARTNERS LOGO/KCPL.jpg', slug: 'kirloskar-chillers', scale: 'scale-100' },
    { name: 'HMS Networks', image: '/PARTNERS LOGO/HMS.jpg', slug: 'hms-networks', scale: 'scale-90' },
    { name: 'ProSoft Technology', image: '/PARTNERS LOGO/PROSOFT TECHNOLOGIES.png', slug: 'prosoft-technology', scale: 'scale-120' },
    { name: 'Lifecycle IQ Services', image: '/PARTNERS LOGO/LIFECYCLE IQ SERVICES.webp', slug: 'rockwell-automation', scale: 'scale-115' }
  ]

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  return (
    <div className="font-sans min-h-screen bg-slate-50 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src={slides[0].image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded border border-brand-accent/25">
                {slides[0].eyebrow[locale]}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                {slides[0].title[locale]}
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                {slides[0].desc[locale]}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to={localizedPath('/solutions')}
                  className="px-6 py-3.5 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-lg shadow-lg transition-colors"
                >
                  {locale === 'ar' ? 'استكشف الحلول' : 'Explore Solutions'}
                </Link>
                <Link
                  to={localizedPath('/contact')}
                  className="px-6 py-3.5 bg-transparent border border-white hover:bg-white/10 text-white font-bold rounded-lg transition-colors"
                >
                  {locale === 'ar' ? 'تواصل مع فريقنا' : 'Contact Our Team'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Workplace / Leadership Stats Section */}
      <section className="py-24 bg-white font-sans text-center w-full">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-16">
            <span className="text-xs uppercase font-bold text-brand-primary tracking-widest block">
              {locale === 'ar' ? 'التميز الهندسي' : 'ENGINEERING EXCELLENCE'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {locale === 'ar' ? 'خلق القيمة من خلال الخبرة الهندسية' : 'Creating Value Through Engineering Expertise'}
            </h2>
            <p className="text-slate-555 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              {locale === 'ar' 
                ? 'تجمع شركة 3T السعودية بين الشراكات التقنية العالمية، والخبرة الصناعية، والدعم الذي يركز على العميل لتقديم حلول هندسية موثوقة. وتتأسس منهجيتنا على التميز التشغيلي، والشفافية، والنجاح المستدام لعملائنا.'
                : '3T Saudi brings together global technology partnerships, industrial expertise, and customer-focused support to deliver reliable engineering solutions. Our approach is built around operational excellence, transparency, and long-term customer success.'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
            {/* Card 1 */}
            <div className="bg-[#f3f7fc] border border-[#e4ecf5] rounded-3xl p-8 space-y-6 relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-gradient-to-b hover:from-brand-primary/30 hover:to-[#f3f7fc]">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-primary text-white">
                <ArrowRight className="h-6 w-6 transform -rotate-45" />
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">7</p>
                <p className="text-slate-550 text-sm font-semibold leading-normal">
                  {locale === 'ar' ? 'شركاء رئيسيون' : 'Principal Partners'}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f3f7fc] border border-[#e4ecf5] rounded-3xl p-8 space-y-6 relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-gradient-to-b hover:from-brand-primary/30 hover:to-[#f3f7fc]">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-primary text-white">
                {/* Draw a thick circle similar to screenshot */}
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8"></circle>
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">15+</p>
                <p className="text-slate-550 text-sm font-semibold leading-normal">
                  {locale === 'ar' ? 'قطاعات صناعية' : 'Industrial Markets'}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f3f7fc] border border-[#e4ecf5] rounded-3xl p-8 space-y-6 relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-gradient-to-b hover:from-brand-primary/30 hover:to-[#f3f7fc]">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-primary text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">8</p>
                <p className="text-slate-550 text-sm font-semibold leading-normal">
                  {locale === 'ar' ? 'مجالات الحلول' : 'Solution Areas'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Capabilities Section */}
      <section className="py-24 bg-slate-50 font-sans text-start w-full border-t border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs uppercase font-bold text-brand-primary tracking-widest block">
              {locale === 'ar' ? 'القدرات الهندسية' : 'ENGINEERING CAPABILITIES'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {locale === 'ar' ? 'حلول مخصصة للصناعة' : 'Solutions Built for Industry'}
            </h2>
            <p className="text-slate-550 text-base sm:text-lg leading-relaxed">
              {locale === 'ar' 
                ? 'تقدم شركة 3T حلولاً هندسية متكاملة تلبي متطلبات التطبيقات الصناعية الصعبة، بدءاً من الأتمتة والاتصال وصولاً إلى الضغط والتبريد والضخ والمواد المركبة المتقدمة.'
                : 'From automation and connectivity to compression, cooling, pumping and advanced composites, 3T delivers engineering solutions for demanding industrial applications.'}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md space-y-6 flex flex-col transition-all duration-300 hover:shadow-lg">
              <div className="h-64 overflow-hidden rounded-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
                  alt={locale === 'ar' ? 'الأتمتة والاتصال' : 'Automation & Connectivity'} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4 flex-grow flex flex-col justify-start">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-brand-primary text-white">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  {locale === 'ar' ? 'الأتمتة والاتصال' : 'Automation & Connectivity'}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {locale === 'ar' 
                    ? 'حلول متكاملة للأتمتة وأنظمة التحكم والاتصالات الصناعية للمساعدة في تحسين الاتصال والإنتاجية والأداء التشغيلي.'
                    : 'Integrated automation, control and industrial communication solutions that help improve connectivity, productivity and operational performance.'}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md space-y-6 flex flex-col transition-all duration-300 hover:shadow-lg">
              <div className="h-64 overflow-hidden rounded-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" 
                  alt={locale === 'ar' ? 'الحلول الميكانيكية والعمليات' : 'Mechanical & Process Solutions'} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4 flex-grow flex flex-col justify-start">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-brand-primary text-white">
                  <Settings className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  {locale === 'ar' ? 'الحلول الميكانيكية والعمليات' : 'Mechanical & Process Solutions'}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {locale === 'ar' 
                    ? 'تقنيات هندسية متطورة لتطبيقات الضغط، والتبريد، والضخ في العمليات الصناعية الحرجة.'
                    : 'Engineered technologies for compression, refrigeration, cooling and pumping applications across critical industrial operations.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Partner Logo Strip (Infinite scrolling marquee) */}
      <section className="bg-white py-16 border-b border-slate-100 my-10 overflow-hidden font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase font-bold text-brand-primary tracking-widest block">
            {locale === 'ar' ? 'تقنيات عالمية. خبرات محلية.' : 'GLOBAL TECHNOLOGY. LOCAL EXPERTISE.'}
          </span>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            {locale === 'ar'
              ? 'نتعاون مع شركات ومصنّعين عالميين لتقديم تقنيات موثوقة وحلول هندسية تلبي متطلبات التطبيقات الصناعية المختلفة.'
              : 'Working with globally recognized manufacturers to deliver reliable technologies and engineering solutions for demanding industrial applications.'}
          </p>
        </div>

        {/* Marquee Wrapper with side fade overlays */}
        <div className="relative mt-10 w-full overflow-hidden py-4 bg-slate-50/50">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          <div className={dir === 'rtl' ? 'animate-marquee-rtl' : 'animate-marquee-ltr'}>
            {/* Render logos list twice for seamless infinite looping */}
            {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <Link
                key={idx}
                to={localizedPath(`/partners/${logo.slug}`)}
                className={`mx-5 sm:mx-8 flex items-center justify-center h-16 w-28 sm:w-32 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex-shrink-0 ${logo.scale || ''}`}
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About 3T (Redesigned Split Layout) */}
      <section className="py-24 px-4 max-w-[1360px] mx-auto my-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side with decorative accents */}
          <div className="relative group">
            {/* Background accent block */}
            <div className="absolute -inset-4 bg-brand-light rounded-3xl -z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-brand-accent/10 rounded-full blur-xl -z-10"></div>
            
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="3T Saudi industrial expertise"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-xl border border-slate-800 text-white z-20">
                <p className="text-brand-accent text-2xl font-black">15+</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  {locale === 'ar' ? 'سنة من الخبرة المشتركة' : 'Years Combined Expertise'}
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-10 bg-brand-accent rounded-full"></span>
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                  {locale === 'ar' ? 'عن 3T السعودية' : 'ABOUT 3T SAUDI'}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {locale === 'ar' ? 'نصنع قيمة حقيقية لعملائنا' : 'Creating Value for Our Customers'}
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-base">
              <p>
                {locale === 'ar'
                  ? 'من محادثة ودية بين صديقين إلى أن أصبحنا مزوداً راسخاً للحلول الصناعية في المملكة العربية السعودية، قامت 3T ببناء أعمالها حول الخبرة الهندسية والمنتجات الموثوقة ودعم العملاء المستمر والسريع.'
                  : 'From a conversation between two friends to becoming an established industrial solutions provider in Saudi Arabia, 3T has built its business around engineering expertise, dependable products and responsive customer support.'}
              </p>
              <p>
                {locale === 'ar'
                  ? 'وتشمل قدراتنا الهواء المضغوط، والتبريد الصناعي، وضغط غازات العمليات، وأنظمة التكييف وتبريد العمليات، ومضخات المياه، والأتمتة، والاتصالات الصناعية.'
                  : 'Our capabilities span compressed air, industrial refrigeration, process gas compression, HVAC and chilled-water solutions, industrial pumps, automation and industrial communication.'}
              </p>
            </div>

            <div className="pt-4">
              <Link
                to={localizedPath('/about')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary hover:bg-brand-primary text-white font-bold rounded-lg shadow hover:shadow-brand-primary/10 transition-all duration-300"
              >
                {locale === 'ar' ? 'اكتشف قصتنا' : 'Discover Our Story'}
                {dir === 'rtl' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Solutions Section (Slider style matching user screenshot) */}
      <section className="py-20 px-4 max-w-[1360px] mx-auto my-10 font-sans">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Solid Blue Card */}
          <div className="w-full lg:w-[320px] bg-brand-primary text-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-lg flex-shrink-0 min-h-[420px]">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                {locale === 'ar' 
                  ? 'حلول هندسية للعمليات الصناعية الحيوية' 
                  : 'Engineering Solutions for Critical Industrial Operations'}
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'نقدم تقنيات الأتمتة والمرافق والروبوتات والعمليات التي تدعم العمليات الصناعية الفعالة والمستقبلية.'
                  : 'Delivering automation, utilities, robotics, and process technologies that support efficient and future-ready industrial operations.'}
              </p>
            </div>
            <Link
              to={localizedPath('/solutions')}
              className="mt-6 px-6 py-2.5 bg-white text-brand-primary font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors"
            >
              {locale === 'ar' ? 'عرض المزيد' : 'View More'}
            </Link>
          </div>

          {/* Right Scrollable Row of Solutions */}
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {solutions.map((sol) => {
                // Find solution image from solutionsData
                const solData = solutionsData.find(s => s.slug === sol.slug)
                const bgImage = solData ? solData.image : 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'

                return (
                  <Link
                    key={sol.slug}
                    to={localizedPath(`/solutions/${sol.slug}`)}
                    className="w-[280px] sm:w-[300px] h-[340px] rounded-3xl overflow-hidden relative shadow-md hover:shadow-xl transition-shadow flex-shrink-0 snap-start block group"
                  >
                    {/* Hover indicator arrow on the card */}
                    <div className="absolute top-4 right-4 z-20 h-8 w-8 bg-white/20 hover:bg-white/45 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {dir === 'rtl' ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 z-10"></div>
                    <img 
                      src={bgImage} 
                      alt={sol.title[locale]} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-start">
                      <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                        {sol.title[locale]}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Slider Navigation & Progress (Screenshot Style) */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
              {/* Progress Line */}
              <div className="flex-1 max-w-xs bg-slate-200 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-brand-primary h-full transition-all duration-300 rounded-full animate-pulse"
                  style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
                ></div>
              </div>

              {/* Arrow controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollSlider('left')}
                  className="h-10 w-10 bg-brand-primary text-white hover:bg-brand-secondary active:scale-95 rounded-lg flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label="Previous solution"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollSlider('right')}
                  className="h-10 w-10 bg-brand-primary text-white hover:bg-brand-secondary active:scale-95 rounded-lg flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label="Next solution"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Industries Section (Redesigned matching user locations style screenshot) */}
      <section className="py-24 bg-brand-secondary text-white my-12 font-sans relative overflow-hidden">
        {/* Subtle dotted watermark pattern container */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Heading, Description, CTA, and Navigation controls */}
            <div className="lg:col-span-5 space-y-6 text-start">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
                {locale === 'ar' ? 'القطاعات التي نخدمها' : 'INDUSTRIES WE SERVE'}
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight">
                {locale === 'ar' ? 'خبرات هندسية لمختلف القطاعات' : 'Engineering Expertise Across Industry'}
              </h2>
              <p className="text-slate-350 leading-relaxed text-sm">
                {locale === 'ar'
                  ? 'ندعم المنشآت والعمليات الصناعية في المملكة بمنتجات عالية الجودة متوافقة مع المعايير العالمية لمختلف القطاعات.'
                  : 'Delivering robust engineering support, utility configurations, and standard-compliant products tailored for Saudi Arabia\'s core industrial markets.'}
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to={localizedPath('/industries')}
                  className="px-6 py-2.5 bg-white text-brand-secondary hover:bg-slate-50 font-bold text-sm rounded-lg transition-colors shadow"
                >
                  {locale === 'ar' ? 'استكشف القطاعات' : 'Explore Industries'}
                </Link>
                
                {/* Arrow navigation triggers */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveIndustryIndex((prev) => (prev - 1 + industriesData.length) % industriesData.length)}
                    className="h-10 w-10 border border-white/20 text-white hover:bg-white/10 active:scale-95 rounded-lg flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous industry"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-xs font-mono text-slate-400">
                    {String(activeIndustryIndex + 1).padStart(2, '0')} / {String(industriesData.length).padStart(2, '0')}
                  </span>
                  <button
                    onClick={() => setActiveIndustryIndex((prev) => (prev + 1) % industriesData.length)}
                    className="h-10 w-10 border border-white/20 text-white hover:bg-white/10 active:scale-95 rounded-lg flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next industry"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: White card containing active industry preview (mimics screenshot card style) */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-100/50 space-y-6">
                
                <div className="space-y-2 text-start">
                  <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                    {locale === 'ar' 
                      ? industriesData[activeIndustryIndex]?.name.ar 
                      : industriesData[activeIndustryIndex]?.name.en}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {locale === 'ar' 
                      ? industriesData[activeIndustryIndex]?.description.ar 
                      : industriesData[activeIndustryIndex]?.description.en}
                  </p>
                </div>

                <div className="h-64 sm:h-80 rounded-2xl overflow-hidden relative shadow-sm border border-slate-100">
                  <img
                    src={industriesData[activeIndustryIndex]?.image || industriesData[0].image}
                    alt=""
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Vision / Mission Section (Redesigned with premium image backgrounds and overlays) */}
      <section className="py-20 px-4 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 font-sans">
        
        {/* Vision Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[300px] flex flex-col justify-end p-8 sm:p-10 group border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-brand-secondary/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-20 space-y-3 text-start">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
              {locale === 'ar' ? 'رؤيتنا' : 'OUR VISION'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {locale === 'ar' ? 'نضع معايير جديدة للتميز' : 'Setting the Benchmark'}
            </h3>
            <p className="text-slate-200 leading-relaxed text-sm max-w-xl">
              {locale === 'ar'
                ? 'أن نصبح رواداً في خدمة ودعم العملاء من خلال توفير الوصول إلى منتجات وخدمات عالمية المستوى تمثل الجودة والابتكار.'
                : 'To become a leader in customer service and support by providing access to world-class products and services representing quality and innovation.'}
            </p>
          </div>
          {/* Subtle top brand accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

        {/* Mission Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[300px] flex flex-col justify-end p-8 sm:p-10 group border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-brand-secondary/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-20 space-y-3 text-start">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
              {locale === 'ar' ? 'رسالتنا' : 'OUR MISSION'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {locale === 'ar' ? 'قيمة مستدامة لعملائنا' : 'Creating Sustainable Customer Value'}
            </h3>
            <p className="text-slate-200 leading-relaxed text-sm max-w-xl">
              {locale === 'ar'
                ? 'خلق قيمة لعملائنا من خلال حلول هندسية عالمية المستوى وخدمات دعم متميزة تتميز بالموثوقية والاستدامة والجدوى الاقتصادية.'
                : 'To create value for our customers through world-class engineering solutions and outstanding support services that are reliable, sustainable and cost-effective.'}
            </p>
          </div>
          {/* Subtle top brand accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

      </section>

      {/* 7. Core Principles Section (Redesigned with Brand Secondary and Dotted Watermark) */}
      <section className="bg-brand-secondary text-white py-20 px-4 my-10 relative overflow-hidden font-sans">
        {/* Subtle dotted watermark pattern container */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-[1360px] mx-auto space-y-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3 text-start">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
                {locale === 'ar' ? 'نهج 3T' : 'THE 3T WAY'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {locale === 'ar' ? 'التميز التشغيلي. والشفافية في كل خطوة.' : 'Operational Excellence. Built on Transparency.'}
              </h2>
            </div>
            <p className="lg:col-span-5 text-slate-300 text-base leading-relaxed text-start lg:max-w-sm lg:justify-self-end">
              {locale === 'ar'
                ? 'يرتكز نهجنا على مبدأين أساسيين: التميز التشغيلي والشفافية. يوجهان طريقة عملنا - بدءاً من الاستفسار الأول للعميل وحتى تسليم الحلول والدعم المستمر.'
                : 'Our approach is anchored by two principles: operational excellence and transparency. They guide how we work—from the first customer enquiry through solution delivery and ongoing support.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((pr, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-4 hover:-translate-y-1.5 hover:bg-white/10 hover:border-brand-accent transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer group text-start"
              >
                <div className="text-brand-accent transform group-hover:scale-110 transition-transform duration-300">{pr.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">{pr.title[locale]}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pr.desc[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Events Section */}
      <section className="py-20 px-4 max-w-[1360px] mx-auto my-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {locale === 'ar' ? 'فعاليات 3T' : '3T EVENTS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {locale === 'ar' ? 'نتواصل. نتعاون. نبتكر.' : 'Connect. Collaborate. Innovate.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <h3 className="text-lg font-bold text-slate-950">{ev.title[locale]}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{ev.desc[locale]}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={localizedPath('/events')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary hover:bg-brand-primary text-white font-bold rounded-lg transition-colors"
          >
            {locale === 'ar' ? 'استكشف الفعاليات' : 'Explore Events'}
          </Link>
        </div>
      </section>

      {/* 9. Final CTA */}
      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" />

    </div>
  )
}
