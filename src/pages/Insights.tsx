import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { solutionsData } from '../data/solutions'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogPost {
  id: number
  tag: { en: string; ar: string }
  title: { en: string; ar: string }
  desc: { en: string; ar: string }
  date: { en: string; ar: string }
  image: string
}

export default function Insights() {
  const { locale, dir } = useLanguage()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const progress = scrollLeft / (scrollWidth - clientWidth)
      setScrollProgress(progress || 0)
    }
  }

  const scrollSlider = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -320 : 320
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const solutions = [
    {
      title: { en: 'Air & Gas Solutions', ar: 'حلول الهواء والغاز' },
      desc: {
        en: 'Delivering reliable compressed air and process gas systems engineered for critical industrial duty.',
        ar: 'أنظمة موثوقة للهواء والغاز المضغوطين مصممة للعمليات الصناعية الحيوية.'
      },
      slug: 'air-gas-solutions'
    },
    {
      title: { en: 'Refrigeration & HVAC Solutions', ar: 'حلول التبريد والتكييف' },
      desc: {
        en: 'Industrial refrigeration compressors, chillers, and large-scale HVAC temperature control.',
        ar: 'ضواغط التبريد الصناعي، والمبردات وأنظمة التكييف واسعة النطاق.'
      },
      slug: 'refrigeration-hvac-solutions'
    },
    {
      title: { en: 'Automation & Control Solutions', ar: 'حلول الأتمتة والتحكم' },
      desc: {
        en: 'Intelligent automation, integrated PLCs/PACs, smart drives, and resilient industrial networking.',
        ar: 'حلول الأتمتة الذكية، وأنظمة التحكم المتكاملة، والمحركات، والاتصالات الصناعية.'
      },
      slug: 'automation-control'
    },
    {
      title: { en: 'Non Metallic Solution', ar: 'حلول المواد غير المعدنية' },
      desc: {
        en: 'Advanced FRP/GRP composite piping, chemical storage tanks, and structural profiles for corrosion resistance.',
        ar: 'أنظمة متكاملة من الأنابيب المركبة والخزانات والمقاطع المقاومة للتآكل.'
      },
      slug: 'non-metallic-solutions'
    },
    {
      title: { en: 'Fire Pump Solutions', ar: 'حلول مضخات الحريق' },
      desc: {
        en: 'FM-Approved and UL-Listed packaged fire pumps and pre-packaged containerized pump houses.',
        ar: 'مجموعات مضخات حريق معتمدة من FM/UL ومحطات ضخ مسبقة التجهيز.'
      },
      slug: 'fire-pump-solutions'
    }
  ]

  const featuredPost = {
    tag: { en: 'SUPPLY CHAIN', ar: 'سلسلة الإمداد' },
    title: { en: 'Building Resilient Industrial Supply Chains', ar: 'بناء سلاسل إمداد صناعية مرنة' },
    desc: {
      en: 'Strategies for securing raw materials and custom parts in a volatile global market.',
      ar: 'استراتيجيات لتأمين المواد الخام والقطع المخصصة في ظل تقلبات السوق العالمية.'
    },
    date: { en: 'June 25, 2026', ar: '٢٥ يونيو ٢٠٢٦' },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  }

  const posts: BlogPost[] = [
    {
      id: 1,
      tag: { en: 'DIGITALIZATION', ar: 'التحول الرقمي' },
      title: { en: 'Smart Technologies for the Transformation of Industry', ar: 'التقنيات الذكية لتحول القطاع الصناعي' },
      desc: {
        en: 'How IoT and advanced data analytics are optimizing production lines and minimizing downtime.',
        ar: 'كيف يساهم إنترنت الأشياء وتحليلات البيانات المتقدمة في تحسين خطوط الإنتاج وتقليل وقت التوقف.'
      },
      date: { en: 'June 20, 2026', ar: '٢٠ يونيو ٢٠٢٦' },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      tag: { en: 'ROBOTICS', ar: 'الروبوتات' },
      title: { en: 'Collaborative Robots: Shaping the Future of Manufacturing', ar: 'الروبوتات المتعاونة: صياغة مستقبل التصنيع' },
      desc: {
        en: 'The role of cobots in safe human-robot collaboration on the factory floor.',
        ar: 'دور الروبوتات المتعاونة في تعزيز العمل المشترك الآمن بين البشر والآلات في المصانع.'
      },
      date: { en: 'June 15, 2026', ar: '١٥ يونيو ٢٠٢٦' },
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      tag: { en: 'AUTOMATION', ar: 'الأتمتة' },
      title: { en: 'Advancing Control Systems through Connected Devices', ar: 'تطوير أنظمة التحكم من خلال الأجهزة المتصلة' },
      desc: {
        en: 'Integrating smart field devices to achieve real-time process monitoring and precision control.',
        ar: 'دمج الأجهزة الحقلية الذكية لتحقيق المراقبة الفورية والتحكم الدقيق في العمليات.'
      },
      date: { en: 'June 10, 2026', ar: '١٠ يونيو ٢٠٢٦' },
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      tag: { en: 'MATERIALS', ar: 'المواد المتقدمة' },
      title: { en: 'The Rise of Advanced Composites in Heavy Industry', ar: 'صعود المواد المركبة المتقدمة في الصناعات الثقيلة' },
      desc: {
        en: 'Why composite structures are replacing traditional metals for high-stress applications.',
        ar: 'لماذا تستبدل الهياكل المركبة المعادن التقليدية في التطبيقات ذات الإجهاد العالي.'
      },
      date: { en: 'May 28, 2026', ar: '٢٨ مايو ٢٠٢٦' },
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      tag: { en: 'ENERGY', ar: 'كفاءة الطاقة' },
      title: { en: 'Optimizing Cooling Systems for Energy Efficiency', ar: 'تحسين أنظمة التبريد لكفاءة استهلاك الطاقة' },
      desc: {
        en: 'Innovative chiller configurations that lower power consumption in large facilities.',
        ar: 'تكوينات المبردات المبتكرة التي تقلل من استهلاك الطاقة في المنشآت الكبيرة.'
      },
      date: { en: 'May 15, 2026', ar: '١٥ مايو ٢٠٢٦' },
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      tag: { en: 'LOGISTICS', ar: 'الخدمات اللوجستية' },
      title: { en: 'Navigating Global Trade and Port Performance', ar: 'توجيه التجارة العالمية وأداء الموانئ' },
      desc: {
        en: 'Understanding recent supply chain patterns to optimize shipping and port turnarounds.',
        ar: 'فهم أنماط سلاسل الإمداد الأخيرة لتحسين عمليات الشحن وأوقات دوران الموانئ.'
      },
      date: { en: 'May 02, 2026', ar: '٠٢ مايو ٢٠٢٦' },
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">

      {/* 1. Hero Banner (Containerized Layout) */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar' ? 'الرئيسية / المدونة والآراء' : 'HOME / INSIGHTS'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {locale === 'ar' ? 'الآراء والأفكار' : 'Insights'}
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {locale === 'ar'
                ? 'ابقَ على اطلاع بأحدث اتجاهات الصناعة والتطورات التقنية ووجهات نظر الخبراء في مجالات التصنيع والأتمتة والربط الصناعي وتبريد العمليات.'
                : 'Stay informed with the latest industry trends, technology advancements, expert perspectives, and business insights targeting the domains of manufacturing, automation, industrial connectivity, process cooling, and more.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#featured"
                className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200"
              >
                {locale === 'ar' ? 'استكشف المقالات' : 'Explore Insights'}
              </a>
              <a
                href="#subscribe"
                className="px-6 py-3 border border-white hover:bg-white/10 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200"
              >
                {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Featured Post Section */}
      <section id="featured" className="py-16 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="space-y-2 mb-10">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {locale === 'ar' ? 'مقالات مميزة' : 'FEATURED INSIGHT'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {locale === 'ar' ? 'اكتشف الأفكار التي تقود الابتكار الصناعي' : 'Discover the ideas Driving Industrial Innovation'}
          </h2>
          <p className="text-slate-550 text-sm max-w-2xl">
            {locale === 'ar'
              ? 'تصفح رؤى ودروس مهندسينا وخبراء الصناعة لمساعدتك في مواكبة المشهد التقني سريع التطور.'
              : 'Explore thoughts from our engineers and industrial experts, and stay ahead in a fast-evolving technical landscape.'}
          </p>
        </div>

        {/* Featured Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full relative overflow-hidden">
            <img
              src={featuredPost.image}
              alt={featuredPost.title[locale]}
              className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center space-y-6 bg-white">
            <span className="inline-flex px-3 py-1 bg-brand-light text-brand-primary text-[10px] font-extrabold rounded-md uppercase tracking-wider self-start">
              {featuredPost.tag[locale]}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 leading-snug">
              {featuredPost.title[locale]}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {featuredPost.desc[locale]}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-slate-400 text-xs font-semibold">{featuredPost.date[locale]}</span>
              <button className="px-5 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-[10px] uppercase tracking-wider transition-colors duration-200">
                {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Latest Articles Grid */}
      <section className="py-16 bg-[#f8fafc] border-t border-b border-slate-100 w-full text-start">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2 mb-12">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'آخر المقالات' : 'LATEST PERSPECTIVES'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {locale === 'ar' ? 'المقالات الأخيرة والآراء الصناعية' : 'Latest Articles & Industry Perspectives'}
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl">
              {locale === 'ar'
                ? 'ابق على اطلاع بالتحليلات والمقالات المفصلة حول أحدث أساليب الإنتاج والأتمتة والتقنيات الناشئة.'
                : 'Stay up to date with the latest advancements in industrial automation, digital transformation, process optimization, and emerging technologies.'}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title[locale]}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="inline-flex px-2.5 py-0.5 bg-brand-light text-brand-primary text-[9px] font-extrabold rounded uppercase tracking-wider">
                      {post.tag[locale]}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
                      {post.title[locale]}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.desc[locale]}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-slate-400 text-2xs font-semibold">{post.date[locale]}</span>
                    <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-[10px] uppercase tracking-wider transition-colors duration-200">
                      {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solutions Section (Slider style matching user screenshot) */}
      <section className="py-20 px-4 max-w-[1360px] mx-auto my-10 font-sans text-start">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Solid Card */}
          <div className="w-full lg:w-[320px] bg-brand-primary text-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-lg flex-shrink-0 min-h-[420px]">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-200 block">
                {locale === 'ar' ? 'القدرات الصناعية' : 'INDUSTRIAL CAPABILITIES'}
              </span>
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
                  className="p-2 border border-slate-200 rounded-full hover:border-brand-primary hover:text-brand-primary transition-colors cursor-pointer"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollSlider('right')}
                  className="p-2 border border-slate-200 rounded-full hover:border-brand-primary hover:text-brand-primary transition-colors cursor-pointer"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Newsletter Subscription Banner (Matches Hero Container Width) */}
      <section id="subscribe" className="py-16 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-primary text-white rounded-3xl py-16 sm:py-24 px-8 sm:px-12 relative overflow-hidden shadow-lg text-center space-y-6 w-full">
          {/* Subtle design overlays */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/5 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {locale === 'ar' ? 'ابق على اطلاع مع آراء 3T السعودية' : 'Stay Ahead with 3T Saudi Insights'}
              </h2>
              <p className="text-slate-100/90 text-sm max-w-xl mx-auto">
                {locale === 'ar'
                  ? 'ابتكارات مدفوعة بالمعرفة. اشترك لتصلك آخر المستجدات والحلول الفنية التي تشكل مستقبل الصناعة.'
                  : 'Knowledge-driven innovation. Subscribe to receive updates on new technologies and technical solutions shaping the future of industry.'}
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
              {subscribed ? (
                <div className="w-full py-3 px-4 bg-white/10 rounded-lg text-sm font-semibold text-white">
                  {locale === 'ar' ? '✓ تم الاشتراك بنجاح! شكرًا لك.' : '✓ Subscribed successfully! Thank you.'}
                </div>
              ) : (
                <>
                  <input 
                    type="email" 
                    required
                    placeholder={locale === 'ar' ? 'عنوان بريدك الإلكتروني' : 'Enter your email address'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-3 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light"
                  />
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-brand-secondary hover:bg-slate-950 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200"
                  >
                    {locale === 'ar' ? 'اشترك الآن' : 'Subscribe'}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
