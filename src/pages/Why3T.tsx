import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { 
  Heart, 
  BookOpen, 
  Users, 
  TrendingUp, 
  ArrowRight
} from 'lucide-react'

export default function Why3T() {
  const { locale } = useLanguage()

  const growthReasons = [
    {
      icon: <Heart className="h-6 w-6 text-brand-primary" />,
      title: { en: 'Meaningful Work', ar: 'عمل ذو مغزى' },
      desc: {
        en: 'Contribute to projects that drive industrial efficiency, automation progress, and positive environmental impact.',
        ar: 'المساهمة في المشاريع التي تقود كفاءة العمليات الصناعية، وتطور الأتمتة، والأثر البيئي الإيجابي.'
      }
    },
    {
      icon: <BookOpen className="h-6 w-6 text-brand-primary" />,
      title: { en: 'Continuous Learning', ar: 'التعلم المستمر' },
      desc: {
        en: 'Expand your capabilities through technical training, specialized certifications, and hands-on guidance from industry leaders.',
        ar: 'توسيع مهاراتك من خلال التدريب الفني، والشهادات المتخصصة، والتوجيه العملي من قادة الصناعة.'
      }
    },
    {
      icon: <Users className="h-6 w-6 text-brand-primary" />,
      title: { en: 'Collaborative Culture', ar: 'ثقافة تعاونية' },
      desc: {
        en: 'Work alongside experienced professionals in a supportive, safety-first, and highly inclusive environment.',
        ar: 'العمل جنباً إلى جنب مع محترفين ذوي خبرة في بيئة داعمة تضع السلامة أولاً وتدعم الجميع.'
      }
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-primary" />,
      title: { en: 'Career Progression', ar: 'التطور المهني' },
      desc: {
        en: 'Build a long-term career with clear advancement paths designed to help you reach your full engineering and leadership potential.',
        ar: 'بناء مسيرة مهنية طويلة الأجل مع مسارات ترقية واضحة مصممة لمساعدتك على تحقيق كامل إمكاناتك الهندسية والقيادية.'
      }
    }
  ]

  const values = [
    { en: 'Integrity', ar: 'النزاهة' },
    { en: 'Excellence', ar: 'التميز' },
    { en: 'Customer Focus', ar: 'التركيز على العميل' },
    { en: 'Innovation', ar: 'الابتكار' },
    { en: 'Collaboration', ar: 'التعاون' }
  ]

  const localizedPath = (path: string) => `/${locale}${path === '/' ? '' : path}`

  return (
    <div className="font-sans min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Hero Section (Containerized layout) */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar' ? 'الوظائف / لماذا 3T' : 'CAREERS / WHY 3T'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {locale === 'ar' ? 'ابنِ مستقبلك مع 3T' : 'Build Your Future with 3T'}
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {locale === 'ar'
                ? 'كن جزءاً من فريق يقود الابتكار الصناعي والتميز الهندسي ونجاح العملاء في جميع أنحاء المملكة العربية السعودية.'
                : 'Be part of a team that is driving industrial innovation, engineering excellence, and customer success across Saudi Arabia. Discover opportunities to grow.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a 
                href="#growth" 
                className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200"
              >
                {locale === 'ar' ? 'اكتشف الفرص' : 'Explore Opportunities'}
              </a>
              <a 
                href="#culture" 
                className="px-6 py-3 border border-white hover:bg-white/10 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200"
              >
                {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Why You'll Grow Here */}
      <section id="growth" className="py-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {locale === 'ar' ? 'النمو والقيم' : 'GROWTH & VALUES'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {locale === 'ar' ? 'لماذا ستنمو وتتطور معنا؟' : "Why You'll Grow Here"}
          </h2>
          <p className="text-slate-550 text-sm sm:text-base leading-relaxed">
            {locale === 'ar'
              ? 'في 3T السعودية، ستعمل مع تقنيات رائدة في مجالات الأتمتة وهندسة العمليات والتبريد الصناعي. يلعب كل دور دوراً هاماً في تمكين عملائنا من النجاح.'
              : "At 3T Saudi, you'll work with leading technologies across industrial automation, process engineering, and industrial cooling. Every role plays a vital part in helping our clients succeed."}
          </p>
        </div>

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {growthReasons.map((reason, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
              <div className="h-12 w-12 bg-brand-light rounded-2xl flex items-center justify-center">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950 tracking-tight">
                {reason.title[locale]}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {reason.desc[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Build More Than a Career Banner (Background image) */}
      <section className="py-24 relative overflow-hidden bg-slate-900 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-3xl mx-auto px-6 relative z-20 space-y-6">
          <span className="text-xs font-bold text-brand-light uppercase tracking-widest block">
            {locale === 'ar' ? 'رسالتنا' : 'OUR MISSION'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {locale === 'ar' ? 'ابنِ ما هو أكثر من مجرد وظيفة' : 'Build More Than a Career'}
          </h2>
          <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
            {locale === 'ar'
              ? 'سواء كنت تبدأ مسيرتك المهنية أو تبحث عن اتخاذ خطوتك التالية، فإننا نوفر مكاناً لتحدي نفسك وتطوير مهاراتك وبناء مسيرة مهنية تفخر بها.'
              : 'Whether you are starting your career or looking to take the next step, we offer a place where you can challenge yourself, develop your skills, and build a career you are proud of.'}
          </p>
          <a 
            href="#positions" 
            className="inline-flex px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200"
          >
            {locale === 'ar' ? 'استكشف الفرص المتاحة' : 'Explore Opportunities'}
          </a>
        </div>
      </section>

      {/* 4. Driven by Purpose. United by Values. */}
      <section className="py-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-start border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {locale === 'ar' ? 'قيمنا' : 'OUR VALUES'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {locale === 'ar' ? 'مدفوعون بالهدف. متحدون بالقيم.' : 'Driven by Purpose. United by Values.'}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {locale === 'ar'
                ? 'النزاهة والتميز والتركيز على العملاء والابتكار والتعاون هي أساس كل ما نقوم به. توجه هذه القيم قراراتنا وتحدد كيفية عملنا معاً.'
                : 'Integrity, excellence, customer focus, innovation, and collaboration are at the core of everything we do. These values guide our decisions and define how we work together to achieve success.'}
            </p>
          </div>

          {/* Capsule Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {values.map((val, idx) => (
              <span 
                key={idx} 
                className="px-5 py-2.5 bg-white border border-slate-200 hover:border-brand-primary hover:text-brand-primary transition-colors text-slate-700 text-xs font-bold rounded-full uppercase tracking-wider shadow-2xs"
              >
                {val[locale]}
              </span>
            ))}
          </div>

          <button className="px-5 py-2.5 border border-brand-primary text-brand-primary hover:bg-brand-light font-bold rounded-lg text-xs uppercase tracking-wider transition-colors duration-200 inline-flex items-center gap-2">
            {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* 5. Where People and Innovation Thrive (Gallery Collage) */}
      <section id="culture" className="py-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {locale === 'ar' ? 'الحياة في 3T السعودية' : 'LIFE AT 3T SAUDI'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {locale === 'ar' ? 'حيث يزدهر الموظفون والابتكار' : 'Where People and Innovation Thrive'}
          </h2>
          <p className="text-slate-550 text-sm leading-relaxed">
            {locale === 'ar'
              ? 'نهيئ بيئة يتعلم فيها الأفراد من بعضهم البعض، ويساهمون في نجاحنا المشترك، ويعملون معاً على حلول تشكل المستقبل.'
              : 'We foster an environment where people can learn from each other, contribute to our shared success, and work together on solutions that shape the future of industry.'}
          </p>
        </div>

        {/* 4 Image Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 space-y-6">
            {/* Top Left */}
            <div className="h-64 sm:h-80 rounded-3xl overflow-hidden shadow-sm relative group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Collaboration" 
                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-550"
              />
            </div>
            {/* Bottom Left */}
            <div className="h-64 sm:h-80 rounded-3xl overflow-hidden shadow-sm relative group">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80" 
                alt="Engineering analytics" 
                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-550"
              />
            </div>
          </div>
          <div className="md:col-span-4 space-y-6">
            {/* Top Right */}
            <div className="h-64 sm:h-80 md:h-[332px] rounded-3xl overflow-hidden shadow-sm relative group">
              <img 
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80" 
                alt="Brainstorming" 
                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-550"
              />
            </div>
            {/* Bottom Right */}
            <div className="h-64 sm:h-80 md:h-[332px] rounded-3xl overflow-hidden shadow-sm relative group">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600&q=80" 
                alt="Industrial Site" 
                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Shape the Future of Industry CTA */}
      <section id="positions" className="py-20 bg-brand-primary text-white w-full text-center relative overflow-hidden">
        {/* Subtle design overlays */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/5 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {locale === 'ar' ? 'شكل مستقبل الصناعة معنا' : 'Shape the Future of Industry'}
          </h2>
          <p className="text-slate-100/90 text-sm max-w-xl mx-auto leading-relaxed">
            {locale === 'ar'
              ? 'انضم إلى فريق ملتزم بالابتكار والتميز والنمو المستمر. اكتشف الفرص حيث يمكن لأفكارك وخبراتك وشغفك إحداث فارق ملموس.'
              : 'Join a team that is committed to innovation, excellence, and continuous growth. Discover opportunities where your ideas, expertise, and passion can make a meaningful difference.'}
          </p>
          <div className="pt-2">
            <Link 
              to={localizedPath('/open-positions')}
              className="inline-flex px-6 py-3 bg-white text-brand-primary font-bold rounded-lg text-xs uppercase tracking-wider transition-colors hover:bg-slate-50 shadow-sm"
            >
              {locale === 'ar' ? 'استكشف الوظائف الشاغرة' : 'Explore Open Positions'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
