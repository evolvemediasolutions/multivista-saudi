import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { solutionsData } from '../data/solutions'
import { getInsights, getCachedInsights, type InsightItem } from '../services/graphql'
import { featuredInsight } from '../data/insights'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type BlogPost = InsightItem

export default function Insights() {
  const { locale, dir } = useLanguage()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Initialize with cached insights for 0ms initial load
  const cached = getCachedInsights()
  const [featuredPost, setFeaturedPost] = useState<InsightItem>(() => cached[0] || featuredInsight)
  const [posts, setPosts] = useState<BlogPost[]>(() => (cached.length > 1 ? cached.slice(1) : cached))

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

  useEffect(() => {
    let mounted = true

    const loadFreshInsights = () => {
      getInsights().then((cmsPosts) => {
        if (mounted && cmsPosts && cmsPosts.length > 0) {
          setFeaturedPost(cmsPosts[0])
          setPosts(cmsPosts.length > 1 ? cmsPosts.slice(1) : cmsPosts)
        }
      })
    }

    loadFreshInsights()

    // Zero-delay auto-revalidation when user returns from WordPress Admin tab
    const handleRevalidate = () => {
      if (document.visibilityState === 'visible') {
        loadFreshInsights()
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
      title: { en: 'Refrigeration Solutions', ar: 'حلول التبريد' },
      desc: {
        en: 'Industrial refrigeration compressors, ammonia packages, and turnkey cold chain temperature control.',
        ar: 'ضواغط التبريد الصناعي، وحزم ضواغط الأمونيا، وأنظمة التحكم بالحرارة لسلاسل التبريد.'
      },
      slug: 'refrigeration-solutions'
    },
    {
      title: { en: 'HVAC Solutions', ar: 'حلول التكييف' },
      desc: {
        en: 'Advanced water-cooled and air-cooled chillers, magnetic bearing chillers, and large-scale climate control.',
        ar: 'مبردات مياه ومبردات هواء متقدمة، ومبردات بمحامل مغناطيسية، وأنظمة التكييف واسعة النطاق.'
      },
      slug: 'hvac-solutions'
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
          <Link
            to={localizedPath(`/insights/${featuredPost.slug || featuredPost.id}`)}
            className="lg:col-span-7 h-72 sm:h-96 lg:h-full relative overflow-hidden block"
          >
            <img
              src={featuredPost.image}
              alt={featuredPost.title[locale]}
              className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
            />
          </Link>
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center space-y-6 bg-white">
            <span className="inline-flex px-3 py-1 bg-brand-light text-brand-primary text-[10px] font-extrabold rounded-md uppercase tracking-wider self-start">
              {featuredPost.tag[locale]}
            </span>
            <Link
              to={localizedPath(`/insights/${featuredPost.slug || featuredPost.id}`)}
              className="block group-hover:text-brand-primary transition-colors"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 leading-snug">
                {featuredPost.title[locale]}
              </h3>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              {featuredPost.desc[locale]}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-slate-400 text-xs font-semibold">{featuredPost.date[locale]}</span>
              <Link
                to={localizedPath(`/insights/${featuredPost.slug || featuredPost.id}`)}
                className="px-5 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200 inline-flex items-center gap-1.5"
              >
                <span>{locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}</span>
                <span>{dir === 'rtl' ? '←' : '→'}</span>
              </Link>
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
                <Link
                  to={localizedPath(`/insights/${post.slug || post.id}`)}
                  className="h-48 overflow-hidden relative block"
                >
                  <img
                    src={post.image}
                    alt={post.title[locale]}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="inline-flex px-2.5 py-0.5 bg-brand-light text-brand-primary text-[9px] font-extrabold rounded uppercase tracking-wider">
                      {post.tag[locale]}
                    </span>
                    <Link
                      to={localizedPath(`/insights/${post.slug || post.id}`)}
                      className="block group-hover:text-brand-primary transition-colors"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
                        {post.title[locale]}
                      </h3>
                    </Link>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.desc[locale]}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-slate-400 text-2xs font-semibold">{post.date[locale]}</span>
                    <Link
                      to={localizedPath(`/insights/${post.slug || post.id}`)}
                      className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-[10px] uppercase tracking-wider transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                      <span>{locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}</span>
                      <span>{dir === 'rtl' ? '←' : '→'}</span>
                    </Link>
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
