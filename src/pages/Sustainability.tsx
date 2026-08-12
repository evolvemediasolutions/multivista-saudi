import { useState, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { 
  ShieldCheck, 
  Globe, 
  TrendingUp, 
  Cpu, 
  Leaf, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  Sparkles,
  FileText
} from 'lucide-react'

export default function Sustainability() {
  const { locale } = useLanguage()
  const [activeTab, setActiveTab] = useState<'all' | 'sustainability' | 'social' | 'governance' | 'operational'>('all')
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

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

  const values = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />,
      title: { en: '50+ Years', ar: 'أكثر من ٥٠ عاماً' },
      desc: {
        en: 'Delivering responsible industrial engineering services to help industry progress.',
        ar: 'تقديم خدمات هندسية صناعية مسؤولة لمساعدة القطاع الصناعي على التقدم.'
      }
    },
    {
      icon: <Globe className="h-6 w-6 text-brand-primary" />,
      title: { en: 'Global Presence', ar: 'حضور عالمي' },
      desc: {
        en: 'Supporting customers across international markets with sustainable products and services.',
        ar: 'دعم العملاء عبر الأسواق الدولية بمنتجات وخدمات مستدامة وصديقة للبيئة.'
      }
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-primary" />,
      title: { en: 'ESG Commitment', ar: 'الالتزام بمعايير ESG' },
      desc: {
        en: 'Embedding environmental, social, and governance principles into our business strategy.',
        ar: 'دمج المبادئ البيئية والاجتماعية وحوكمة الشركات في استراتيجية عملنا.'
      }
    },
    {
      icon: <Cpu className="h-6 w-6 text-brand-primary" />,
      title: { en: 'Operational Excellence', ar: 'التميز التشغيلي' },
      desc: {
        en: 'Continuous improvement in safety, environmental protection, and quality management.',
        ar: 'التحسين المستمر في مجالات السلامة وحماية البيئة وإدارة الجودة.'
      }
    }
  ]

  const pillars = [
    {
      slug: 'quality-management',
      title: { en: 'Quality Management System', ar: 'نظام إدارة الجودة' },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    },
    {
      slug: 'international-standards',
      title: { en: 'International Standards', ar: 'المعايير الدولية' },
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80'
    },
    {
      slug: 'process-optimization',
      title: { en: 'Process Optimization', ar: 'تحسين العمليات' },
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
    }
  ]

  const insights = [
    {
      id: 1,
      category: 'sustainability',
      tag: { en: 'SUSTAINABILITY', ar: 'الاستدامة' },
      title: { en: 'Reducing Carbon Footprint in Process Cooling', ar: 'تقليل البصمة الكربونية في تبريد العمليات' },
      desc: {
        en: 'How modern chiller configurations reduce energy consumption by up to 30%.',
        ar: 'كيف تقلل تكوينات المبردات الحديثة من استهلاك الطاقة بنسبة تصل إلى ٣٠٪.'
      },
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      category: 'social',
      tag: { en: 'SOCIAL IMPACT', ar: 'الأثر الاجتماعي' },
      title: { en: 'Empowering Local Talent in Industrial Sectors', ar: 'تمكين الكفاءات المحلية في القطاعات الصناعية' },
      desc: {
        en: 'Our training programs helping build the next generation of Saudi engineers.',
        ar: 'برامجنا التدريبية التي تساهم في بناء الجيل القادم من المهندسين السعوديين.'
      },
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      category: 'governance',
      tag: { en: 'GOVERNANCE', ar: 'الحوكمة' },
      title: { en: 'Supply Chain Transparency and Integrity', ar: 'شفافية ونزاهة سلسلة الإمداد' },
      desc: {
        en: 'Establishing strict ethics guidelines for sourcing and partner evaluation.',
        ar: 'وضع إرشادات أخلاقية صارمة لعمليات الشراء وتقييم الشركاء.'
      },
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      category: 'operational',
      tag: { en: 'OPERATIONAL', ar: 'العمليات والتشغيل' },
      title: { en: 'Zero Waste Goals in Heavy Manufacturing', ar: 'أهداف صفر نفايات في الصناعات الثقيلة' },
      desc: {
        en: 'Effective recycling initiatives adopted in our regional manufacturing sites.',
        ar: 'مبادرات إعادة التدوير الفعالة المعتمدة في مواقع التصنيع الإقليمية لدينا.'
      },
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=400&q=80'
    }
  ]

  const filteredInsights = activeTab === 'all' 
    ? insights 
    : insights.filter(item => item.category === activeTab)

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Containerized Hero Header */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar' ? 'الرئيسية / الاستدامة' : 'HOME / SUSTAINABILITY'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {locale === 'ar' ? 'النمو المستدام والأثر الدائم' : 'Sustainable Growth. Lasting Impact.'}
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {locale === 'ar'
                ? 'خلق القيمة من خلال التزامنا بالمعايير البيئية والاجتماعية والحوكمة (ESG)، وبصمتنا الهندسية، وشراكاتنا المثمرة مع عملائنا.'
                : 'Creating value through our ESG commitment, engineering footprint, and client partnerships, driving sustainable development across industrial sectors.'}
            </p>
            <div className="pt-2">
              <button className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200 inline-flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {locale === 'ar' ? 'تحميل تقرير الاستدامة' : 'Download ESG Report'}
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Creating Value Section */}
      <section className="py-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {locale === 'ar' ? 'أثرنا' : 'OUR IMPACT'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {locale === 'ar' ? 'خلق القيمة من خلال النمو المسؤول' : 'Creating Value Through Responsible Growth'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            {locale === 'ar'
              ? 'الاستدامة هي جوهر طريقة عملنا، حيث نساعد عملائنا على تقليل بصمتهم البيئية مع تعزيز الكفاءة والأمان في العمليات اليومية.'
              : 'Sustainability is embedded in the way we operate, helping our clients reduce their environmental footprint while improving efficiency and safety across industrial operations.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
              <div className="h-12 w-12 bg-brand-light rounded-2xl flex items-center justify-center">
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950 tracking-tight">
                {val.title[locale]}
              </h3>
              <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
                {val.desc[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Building a More Sustainable Future (Slider Section) */}
      <section className="py-20 px-4 max-w-[1360px] mx-auto my-10 font-sans text-start border-t border-b border-slate-100">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Solid Card */}
          <div className="w-full lg:w-[320px] bg-brand-primary text-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-lg flex-shrink-0 min-h-[400px]">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-200 block">
                {locale === 'ar' ? 'حلولنا' : 'OUR SOLUTIONS'}
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                {locale === 'ar' ? 'بناء مستقبل أكثر استدامة' : 'Building a More Sustainable Future'}
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'تمكين الصناعات من التطور بمسؤولية من خلال حلول هندسية متطورة مصممة لكفاءة استهلاك الموارد.'
                  : 'Empowering industries to progress responsibly through advanced engineering solutions tailored for resource and energy efficiency.'}
              </p>
            </div>
            <button className="px-6 py-2.5 bg-white text-brand-primary font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors">
              {locale === 'ar' ? 'عرض المزيد' : 'View More'}
            </button>
          </div>

          {/* Right Scrollable Row */}
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {pillars.map((pil) => (
                <div
                  key={pil.slug}
                  className="w-[280px] sm:w-[300px] h-[340px] rounded-3xl overflow-hidden relative shadow-md hover:shadow-xl transition-shadow flex-shrink-0 snap-start block group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 z-10"></div>
                  <img 
                    src={pil.image} 
                    alt={pil.title[locale]} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20 text-start">
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                      {pil.title[locale]}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation & Progress */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
              <div className="flex-1 max-w-xs bg-slate-200 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-brand-primary h-full transition-all duration-300 rounded-full"
                  style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
                ></div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => scrollSlider('left')}
                  className="p-2 border border-slate-200 rounded-full hover:border-brand-primary hover:text-brand-primary transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollSlider('right')}
                  className="p-2 border border-slate-200 rounded-full hover:border-brand-primary hover:text-brand-primary transition-colors cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Transparency Through Reporting Section */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-100 text-start w-full">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'تقرير الاستدامة' : 'SUSTAINABILITY REPORT'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {locale === 'ar' ? 'الشفافية من خلال التقارير المسؤولة' : 'Transparency Through Responsible Reporting'}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {locale === 'ar'
                ? 'نحن نؤمن بأن المشاركة الشفافة لتقدمنا في مجالات الحوكمة البيئية والاجتماعية والمؤسسية أمر ضروري. يسلط تقرير الاستدامة السنوي الضوء على أدائنا ومبادراتنا وأهدافنا المستقبلية.'
                : 'We believe that transparent sharing of our ESG progress is essential. Our annual Sustainability Report details our performance, initiatives, and goals for a greener future.'}
            </p>
            <button className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200">
              {locale === 'ar' ? 'اقرأ تقرير الاستدامة' : 'Read Sustainability Report'}
            </button>
          </div>

          {/* Overlapping Mockup Badges */}
          <div className="lg:col-span-6 flex justify-center items-center relative h-[300px]">
            <div className="h-44 w-44 rounded-full bg-white border border-slate-100 shadow-md flex flex-col items-center justify-center p-6 text-center space-y-2 z-20">
              <Sparkles className="h-8 w-8 text-amber-500" />
              <span className="text-[10px] font-extrabold text-slate-400 tracking-wider">ECOVADIS</span>
              <span className="text-xs font-bold text-slate-800">{locale === 'ar' ? 'تقييم ذهبي' : 'Gold Rating'}</span>
            </div>
            <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-white/80 border border-slate-100 shadow-sm flex flex-col items-center justify-center p-4 text-center space-y-1 z-10">
              <Leaf className="h-6 w-6 text-brand-primary" />
              <span className="text-[8px] font-bold text-slate-400">ESG</span>
              <span className="text-2xs font-bold text-slate-800">{locale === 'ar' ? 'ملتزم' : 'Committed'}</span>
            </div>
            <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-white/80 border border-slate-100 shadow-sm flex flex-col items-center justify-center p-4 text-center space-y-1 z-10">
              <ShieldCheck className="h-6 w-6 text-brand-primary" />
              <span className="text-[8px] font-bold text-slate-400">ISO 14001</span>
              <span className="text-2xs font-bold text-slate-800">{locale === 'ar' ? 'معتمد' : 'Certified'}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Partnering for a Sustainable Tomorrow */}
      <section className="py-20 bg-white text-start w-full">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'شراكاتنا' : 'OUR PARTNERSHIPS'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {locale === 'ar' ? 'الشراكة من أجل غد مستدام' : 'Partnering for a Sustainable Tomorrow'}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {locale === 'ar'
                ? 'نعتقد أن الاستدامة هي مسؤولية مشتركة. من خلال العمل الوثيق مع عملائنا وشركائنا، فإننا نهدف إلى خلق تغيير إيجابي دائم.'
                : 'We believe sustainability is a shared responsibility. By working closely with our clients and partners, we aim to create lasting, positive environmental and social impact.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Mockup Badges */}
            <div className="lg:col-span-6 flex justify-center items-center relative h-[300px]">
              <div className="h-44 w-44 rounded-full bg-white border border-slate-100 shadow-md flex flex-col items-center justify-center p-6 text-center space-y-2 z-20">
                <ShieldCheck className="h-8 w-8 text-brand-primary" />
                <span className="text-xs font-bold text-slate-800">3T SAUDI</span>
                <span className="text-[10px] font-extrabold text-slate-400 tracking-wider">ECOVADIS RATED</span>
              </div>
              <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white/80 border border-slate-100 shadow-sm flex flex-col items-center justify-center p-4 text-center space-y-1 z-10">
                <Leaf className="h-6 w-6 text-brand-primary" />
                <span className="text-2xs font-bold text-slate-800">{locale === 'ar' ? 'كفاءة طاقة' : 'Energy Eff.'}</span>
              </div>
              <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-white/80 border border-slate-100 shadow-sm flex flex-col items-center justify-center p-4 text-center space-y-1 z-10">
                <Cpu className="h-6 w-6 text-brand-primary" />
                <span className="text-2xs font-bold text-slate-800">{locale === 'ar' ? 'توفير مياه' : 'Water Saving'}</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
                {locale === 'ar' ? 'سياستنا للبيئة والمجتمع والحوكمة' : 'OUR ESG POLICY'}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {locale === 'ar' ? 'سياستنا للحوكمة البيئية والاجتماعية' : 'Our ESG Policy'}
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                {locale === 'ar'
                  ? 'تحدد سياستنا للبيئة والمجتمع والحوكمة إطار عملنا لتحقيق نمو مستدام، مما يضمن توافق جميع خدماتنا الهندسية ومورديننا مع القيم العالمية للمسؤولية والمحافظة على الموارد.'
                  : 'Our environmental, social, and governance policy frames our approach to sustainable business growth, ensuring that all our engineering services, products, and supply chain partners align with global values of stewardship.'}
              </p>
              <button className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200 inline-flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {locale === 'ar' ? 'اقرأ سياسة ESG' : 'Read ESG Policy'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Sustainability Insights */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-100 text-start w-full">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'آخر المقالات والآراء' : 'LATEST ARTICLES'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {locale === 'ar' ? 'آراء ومقالات الاستدامة' : 'Sustainability Insights'}
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl">
              {locale === 'ar'
                ? 'استكشف وجهات النظر والتقارير المتعلقة بالتقنيات المستدامة والأثر الاجتماعي والممارسات الصناعية الفعالة.'
                : 'Explore perspectives and stories relating to sustainable technologies, social impact, and efficient industrial operations.'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200/60">
            {(['all', 'sustainability', 'social', 'governance', 'operational'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  activeTab === tab 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-white text-slate-650 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {tab === 'all' && (locale === 'ar' ? 'الكل' : 'All')}
                {tab === 'sustainability' && (locale === 'ar' ? 'الاستدامة' : 'Sustainability')}
                {tab === 'social' && (locale === 'ar' ? 'الأثر الاجتماعي' : 'Social Impact')}
                {tab === 'governance' && (locale === 'ar' ? 'الحوكمة' : 'Governance')}
                {tab === 'operational' && (locale === 'ar' ? 'التشغيل' : 'Operational')}
              </button>
            ))}
          </div>

          {/* Insights Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredInsights.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title[locale]} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="inline-flex px-2 py-0.5 bg-brand-light text-brand-primary text-[9px] font-extrabold rounded uppercase tracking-wider">
                      {item.tag[locale]}
                    </span>
                    <h3 className="text-sm font-bold text-slate-950 leading-snug group-hover:text-brand-primary transition-colors">
                      {item.title[locale]}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {item.desc[locale]}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-50/50">
                  <button className="flex items-center gap-1.5 text-brand-primary hover:text-brand-secondary font-bold text-[10px] uppercase tracking-wider transition-colors duration-200">
                    {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
