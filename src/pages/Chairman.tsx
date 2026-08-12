import { useLanguage } from '../context/LanguageContext'
import IndustrialChallengeCTA from '../components/ui/IndustrialChallengeCTA'

export default function Chairman() {
  const { locale } = useLanguage()

  const message = {
    en: [
      "At 3T, we pursue our business objectives with integrity and commitment of the highest order, and we recognize that our success is built on our people.",
      "As a growing organization, our focus remains firmly market-oriented, with customer satisfaction at the centre of everything we do.",
      "Our inclusive work culture encourages expertise and a passion for service—qualities that allow us to deliver meaningful competitive advantages to our customers.",
      "With a multinational, multilingual and multicultural team, 3T is positioned to continue building its capabilities and pursuing sustainable growth."
    ],
    ar: [
      "في 3T، نسعى لتحقيق أهداف عملنا بنزاهة والتزام من أعلى طراز، ونقر بأن نجاحنا مبني على سواعد موظفينا.",
      "كمؤسسة متنامية، يظل تركيزنا موجهًا بحزم نحو السوق، مع وضع رضا العملاء في صميم كل ما نقوم به.",
      "تشجع ثقافة العمل الشاملة لدينا على الخبرة والعمل بشغف للخدمة - وهي صفات تتيح لنا تقديم مزايا تنافسية ذات مغزى لعملائنا.",
      "مع فريق متعدد الجنسيات واللغات والثقافات، تتمتع 3T بمكانة ممتازة لمواصلة بناء قدراتها والسعي نحو تحقيق النمو المستدام."
    ]
  }

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="pt-28 sm:pt-32 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative w-full h-[450px] rounded-3xl overflow-hidden bg-slate-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1200&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              {locale === 'ar' ? 'الرئيسية / من نحن / رسالة رئيس مجلس الإدارة' : 'HOME / ABOUT US / CHAIRMAN MESSAGE'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {locale === 'ar' ? 'الخبرة والخدمة بشغف' : 'Expertise and Serving with Passion'}
            </h1>
          </div>
        </section>
      </div>

      {/* Message Content Section */}
      <section className="py-24 px-4 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Chairman Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute inset-0 bg-brand-primary rounded-3xl transform translate-x-4 translate-y-4 -z-10 opacity-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt="Chairman of the Board"
                  className="w-full h-[450px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="p-6 bg-slate-900 text-white text-start">
                  <h3 className="text-xl font-bold">
                    {locale === 'ar' ? 'رئيس مجلس الإدارة' : 'Chairman of the Board'}
                  </h3>
                  <p className="text-sm text-brand-accent">
                    {locale === 'ar' ? 'تاق للتجارة / 3T السعودية' : 'Top Tag Trading / 3T Saudi'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Letter/Message on the Right */}
          <div className="lg:col-span-7 space-y-8 text-start">
            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
                {locale === 'ar' ? 'رسالة رئيس مجلس الإدارة' : "CHAIRMAN'S MESSAGE"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {locale === 'ar' ? 'الالتزام بالتنمية المستدامة' : 'Commitment to Sustainable Development'}
              </h2>
            </div>
            
            <div className="relative pl-6 rtl:pl-0 rtl:pr-6 border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-accent">
              <span className="absolute left-0 rtl:left-auto rtl:right-0 top-0 text-7xl text-brand-accent/20 font-serif leading-none select-none">“</span>
              <div className="space-y-6 pt-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                {message[locale].map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <IndustrialChallengeCTA bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" />

    </div>
  )
}
