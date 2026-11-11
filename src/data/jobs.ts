export interface JobOpening {
  id: string
  code: string
  slug: string
  title: {
    en: string
    ar: string
  }
  department: {
    en: string
    ar: string
  }
  designation: {
    en: string
    ar: string
  }
  location: {
    en: string
    ar: string
  }
  experience: {
    en: string
    ar: string
  }
  employmentType: {
    en: string
    ar: string
  }
  aboutRole: {
    en: string
    ar: string
  }
  responsibilities: {
    en: string[]
    ar: string[]
  }
  requirements: {
    en: string[]
    ar: string[]
  }
}

export const jobsData: JobOpening[] = [
  {
    id: 'vm153',
    code: 'VM153',
    slug: 'project-manager-smart-infrastructure',
    title: {
      en: 'Project Manager, Smart Infrastructure',
      ar: 'مدير مشروع، البنية التحتية الذكية'
    },
    department: {
      en: 'Engineering & Technical',
      ar: 'الهندسة والخدمات الفنية'
    },
    designation: {
      en: 'Project Manager',
      ar: 'مدير مشروع'
    },
    location: {
      en: 'Chennai, India',
      ar: 'تشيناي، الهند'
    },
    experience: {
      en: '10+ Years Exp',
      ar: 'أكثر من 10 سنوات خبرة'
    },
    employmentType: {
      en: 'Full-time',
      ar: 'دوام كامل'
    },
    aboutRole: {
      en: 'Lead cross-functional engineering and industrial turnkey projects from scope definition through site commissioning across smart infrastructure and manufacturing clients.',
      ar: 'قيادة المشاريع الهندسية الصناعية المتكاملة والمتعددة التخصصات من تحديد النطاق حتى التشغيل التجريبي في الموقع لعملاء البنية التحتية الذكية والتصنيع.'
    },
    responsibilities: {
      en: [
        'Manage complex multi-disciplinary industrial turnkey projects from scope definition to final handover',
        'Coordinate on-site implementation of variable speed drives, PLC control panels, and compressor packages',
        'Act as prime technical liaison between client facility teams, consultants, and international OEMs',
        'Ensure strict adherence to quality, safety (EHS), schedule, and budget milestones',
        'Supervise factory acceptance testing (FAT), site acceptance testing (SAT), and client sign-off'
      ],
      ar: [
        'إدارة مشاريع تسليم المفتاح الصناعية المعقدة من تحديد النطاق وحتى التسليم النهائي',
        'تنسيق التنفيذ الميداني لمحركات السرعة المتغيرة، ولوحات التحكم PLC، وحزم الضواغط',
        'العمل كنقطة اتصال فنية رئيسية بين فرق منشآت العملاء والاستشاريين والمصنعين العالميين',
        'ضمان الالتزام الصارم بمعايير الجودة والسلامة والبيئة والجدول الزمني وميزانية المشروع',
        'الإشراف على اختبارات قبول المصنع (FAT)، واختبارات قبول الموقع (SAT)، واعتماد العميل'
      ]
    },
    requirements: {
      en: [
        "Bachelor's or Master's degree in Electrical, Mechanical, or Industrial Automation Engineering",
        '10+ years of proven hands-on project management experience in industrial plants or turnkey installations',
        'Demonstrated expertise in P&ID, automation architectures, project scheduling, and commissioning protocols',
        'PMP or PRINCE2 certification is highly advantageous',
        'Exceptional leadership, vendor management, and multi-stakeholder communication skills'
      ],
      ar: [
        'درجة البكالوريوس أو الماجستير في الهندسة الكهربائية أو الميكانيكية أو أتمتة العمليات الصناعية',
        'خبرة عملية لا تقل عن 10 سنوات في إدارة المشاريع الهندسية داخل المنشآت الصناعية',
        'معرفة متقدمة بمخططات P&ID، وهياكل الأتمتة، والجدولة الزمنية، وبروتوكولات التشغيل',
        'شهادة إدارة المشاريع الاحترافية (PMP) أو ما يعادلها تعتبر ميزة إضافية كبيرة',
        'مهارات قيادية متميزة وقدرة مثبتة على إدارة الموردين والتواصل مع مختلف الجهات'
      ]
    }
  },
  {
    id: 'vm152',
    code: 'VM152',
    slug: 'supply-chain-analyst',
    title: {
      en: 'Supply Chain Analyst',
      ar: 'محلل سلاسل الإمداد'
    },
    department: {
      en: 'Supply Chain & Logistics',
      ar: 'سلاسل الإمداد والخدمات اللوجستية'
    },
    designation: {
      en: 'Supply Chain Analyst',
      ar: 'محلل سلاسل إمداد'
    },
    location: {
      en: 'Mumbai, India',
      ar: 'مومباي، الهند'
    },
    experience: {
      en: '3-5 Years Exp',
      ar: '3-5 سنوات خبرة'
    },
    employmentType: {
      en: 'Full-time',
      ar: 'دوام كامل'
    },
    aboutRole: {
      en: 'Optimize regional supply chain logistics, vendor procurement pipelines, and inventory tracking for critical industrial equipment and spare parts.',
      ar: 'تحسين الخدمات اللوجستية الإقليمية لسلاسل الإمداد، وعمليات المشتريات من الموردين، وتتبع المخزون للمعدات الصناعية الحيوية وقطع الغيار.'
    },
    responsibilities: {
      en: [
        'Analyze procurement data, lead times, and freight routes to optimize end-to-end supply chain efficiency',
        'Collaborate with international equipment principals to monitor shipments and customs clearances',
        'Develop demand forecasting models aligned with upcoming industrial project milestones',
        'Maintain accurate inventory balances and KPI dashboards in the enterprise ERP system',
        'Identify cost-reduction opportunities in warehousing, logistics, and vendor sourcing'
      ],
      ar: [
        'تحليل بيانات المشتريات وأوقات التوريد ومسارات الشحن لتحسين كفاءة سلاسل الإمداد المتكاملة',
        'التعاون مع الشركاء التقنيين العالميين لمتابعة الشحنات وعمليات التخليص الجمركي',
        'تطوير نماذج التنبؤ بالطلب بالتوافق مع الجداول الزمنية للمشاريع الصناعية القادمة',
        'الحفاظ على دقة أرصدة المخزون ولوحات مؤشرات الأداء في نظام إدارة الموارد (ERP)',
        'تحديد فرص خفض التكاليف في التخزين، والخدمات اللوجستية، وتوريد المواد'
      ]
    },
    requirements: {
      en: [
        "Bachelor's degree in Supply Chain Management, Operations, Business Administration, or Engineering",
        '3-5 years of supply chain analysis or logistics experience in industrial equipment or distribution',
        'Advanced proficiency in SAP or similar enterprise ERP platforms and Microsoft Excel / Power BI',
        'Strong understanding of international commercial terms (Incoterms) and import/export documentation',
        'Strong analytical thinking, attention to detail, and cross-border vendor communication abilities'
      ],
      ar: [
        'درجة البكالوريوس في إدارة سلاسل الإمداد، أو العمليات، أو إدارة الأعمال، أو الهندسة',
        'خبرة من 3 إلى 5 سنوات في تحليل سلاسل الإمداد أو العمليات اللوجستية في قطاع التوزيع الصناعي',
        'إتقان التعامل مع أنظمة SAP أو منصات ERP المماثلة وبرامج Excel وPower BI',
        'فهم عميق لشروط التجارة الدولية (Incoterms) ووثائق الاستيراد والتصدير',
        'مهارات تحليلية قوية، ودقة في التفاصيل، وقدرة على التواصل الفعال مع الموردين'
      ]
    }
  },
  {
    id: 'vm151',
    code: 'VM151',
    slug: 'robotics-application-specialist',
    title: {
      en: 'Robotics Application Specialist',
      ar: 'أخصائي تطبيقات الروبوتات الصناعية'
    },
    department: {
      en: 'Automation & Robotics',
      ar: 'الأتمتة والروبوتات الصناعية'
    },
    designation: {
      en: 'Robotics Specialist',
      ar: 'أخصائي روبوتات'
    },
    location: {
      en: 'Bengaluru, India',
      ar: 'بنغالور، الهند'
    },
    experience: {
      en: '5-10 Years Exp',
      ar: '5-10 سنوات خبرة'
    },
    employmentType: {
      en: 'Full-time',
      ar: 'دوام كامل'
    },
    aboutRole: {
      en: 'Design, program, and integrate robotic cells and automated handling systems for smart manufacturing and industrial assembly lines.',
      ar: 'تصميم وبرمجة ودمج الخلايا الروبوتية وأنظمة المناولة الآلية لخطوط التصنيع الذكي والتجميع الصناعي.'
    },
    responsibilities: {
      en: [
        'Program and commission industrial articulated robots, cobots, and vision-guided robotic cells',
        'Integrate robotic controllers with PLC/PAC systems (Rockwell Automation / Allen-Bradley)',
        'Conduct kinematic reach studies, cycle time analyses, and safety perimeter risk assessments',
        'Deliver technical training and operational guidance to client automation and maintenance teams',
        'Troubleshoot robotic automation faults during site staging and pre-commissioning phases'
      ],
      ar: [
        'برمجة وتشغيل الروبوتات الصناعية المفصلية، والروبوتات التشاركية، وخلايا الرؤية البصرية',
        'دمج وحدات تحكم الروبوتات مع أنظمة PLC/PAC (Rockwell Automation / Allen-Bradley)',
        'إجراء دراسات الوصول الحركي، وتحليل زمن الدورة، وتقييم مخاطر السلامة والمحيط الآمن',
        'تقديم التدريب الفني والتوجيه التشغيلي لفرق الصيانة والأتمتة التابعة للعملاء',
        'تشخيص وحل الأعطال الفنية للأتمتة الروبوتية أثناء مراحل التجهيز والتشغيل الأولي'
      ]
    },
    requirements: {
      en: [
        'Degree in Robotics, Mechatronics, Electrical, or Mechanical Engineering',
        '5+ years of dedicated industrial robotics application and programming experience',
        'In-depth knowledge of major robotic platforms and machine vision systems',
        'Proven familiarity with industrial Ethernet networking (EtherNet/IP, PROFINET)',
        'Strong hands-on troubleshooting capability and proactive problem-solving mindset'
      ],
      ar: [
        'شهادة جامعية في هندسة الروبوتات، أو الميكاترونكس، أو الهندسة الكهربائية، أو الميكانيكية',
        'خبرة 5 سنوات على الأقل في تطبيقات وبرمجة الروبوتات الصناعية',
        'معرفة متعمقة بمنصات الروبوتات العالمية وأنظمة الرؤية الحاسوبية الصناعية',
        'إلمام مثبت ببروتوكولات الشبكات الصناعية (EtherNet/IP, PROFINET)',
        'قدرة عملية عالية على استكشاف الأعطال وحل المشكلات الفنية الميدانية'
      ]
    }
  },
  {
    id: 'vm150',
    code: 'VM150',
    slug: 'sales-engineer-distribution',
    title: {
      en: 'Sales Engineer, Distribution',
      ar: 'مهندس مبيعات، التوزيع والحلول الصناعية'
    },
    department: {
      en: 'Sales & Business Development',
      ar: 'المبيعات وتطوير الأعمال'
    },
    designation: {
      en: 'Sales Engineer',
      ar: 'مهندس مبيعات'
    },
    location: {
      en: 'New Delhi, India',
      ar: 'نيودلهي، الهند'
    },
    experience: {
      en: '3-5 Years Exp',
      ar: '3-5 سنوات خبرة'
    },
    employmentType: {
      en: 'Full-time',
      ar: 'دوام كامل'
    },
    aboutRole: {
      en: 'Drive technical sales growth across key regional accounts for industrial pumps, compressors, automation hardware, and composite engineering solutions.',
      ar: 'قيادة نمو المبيعات الهندسية للحسابات الرئيسية الإقليمية للمضخات الصناعية، والضواغط، ومعدات الأتمتة، وحلول المواد المركبة.'
    },
    responsibilities: {
      en: [
        'Identify target industrial clients and expand distribution network across key regional manufacturing hubs',
        'Prepare comprehensive techno-commercial proposals, tender submissions, and product selections',
        'Deliver compelling product presentations demonstrating engineering value and lifecycle cost benefits',
        'Coordinate with application engineering teams to ensure accurate solution sizing and quotation',
        'Maintain close client relationships through routine visits, technical seminars, and responsive follow-up'
      ],
      ar: [
        'تحديد العملاء الصناعيين المستهدفين وتوسيع شبكة التوزيع في المراكز الصناعية الإقليمية',
        'إعداد العروض الفنية والتجارية المتكاملة، ووثائق المناقصات، وتحديد المواصفات المناسبة للمنتجات',
        'تقديم عروض فنية مقنعة توضح القيمة الهندسية ومزايا تكلفة دورة الحياة للمنتجات',
        'التنسيق مع فرق الهندسة التطبيقية لضمان دقة الحسابات الفنية وتحديد الأسعار',
        'بناء والحفاظ على علاقات وثيقة مع العملاء من خلال الزيارات الدورية وورش العمل الفنية'
      ]
    },
    requirements: {
      en: [
        "Bachelor's degree in Mechanical, Electrical, or Chemical Engineering",
        '3-5 years of technical B2B sales experience in industrial equipment or engineering distribution',
        'Demonstrated track record of achieving sales targets in competitive industrial markets',
        'Strong technical comprehension of pumps, compressors, drives, or fluid handling systems',
        'Outstanding presentation, negotiation, and relationship-building abilities'
      ],
      ar: [
        'درجة البكالوريوس في الهندسة الميكانيكية أو الكهربائية أو الكيميائية',
        'خبرة من 3 إلى 5 سنوات في المبيعات الهندسية والتجارية (B2B) في قطاع المعدات الصناعية',
        'سجل حافل بتحقيق وتجاوز الأهداف البيعية في الأسواق الصناعية التنافسية',
        'فهم تقني متميز لأنظمة المضخات أو الضواغط أو المحركات أو أنظمة معالجة السوائل',
        'مهارات تفاوضية وعرض تقديمي وبناء علاقات تجارية استثنائية'
      ]
    }
  },
  {
    id: 'vm149',
    code: 'VM149',
    slug: 'automation-control-systems-engineer',
    title: {
      en: 'Automation & Control Systems Engineer',
      ar: 'مهندس أنظمة الأتمتة والتحكم'
    },
    department: {
      en: 'Engineering & Technical',
      ar: 'الهندسة والخدمات الفنية'
    },
    designation: {
      en: 'Automation Engineer',
      ar: 'مهندس أتمتة'
    },
    location: {
      en: 'Riyadh, Saudi Arabia',
      ar: 'الرياض، المملكة العربية السعودية'
    },
    experience: {
      en: '4-7 Years Exp',
      ar: '4-7 سنوات خبرة'
    },
    employmentType: {
      en: 'Full-time',
      ar: 'دوام كامل'
    },
    aboutRole: {
      en: 'Design, program, and commission PLC, SCADA, and telemetry architectures for water utility, oil & gas, and industrial manufacturing plants in Saudi Arabia.',
      ar: 'تصميم وبرمجة وتشغيل أنظمة PLC وSCADA وحلول المراقبة عن بعد لقطاعات معالجة المياه، والنفط والغاز، والمصانع في المملكة.'
    },
    responsibilities: {
      en: [
        'Develop ladder logic, structured text, and functional block diagrams for Rockwell Studio 5000 / ControlLogix',
        'Configure FactoryTalk View SCADA / HMI systems with intuitive operational interfaces and alarm management',
        'Perform loop testing, hardware configuration, and instrumentation calibration during site commissioning',
        'Ensure compliance with Saudi industrial cybersecurity regulations and network resilience standards',
        'Draft comprehensive Operation & Maintenance (O&M) documentation and control narratives'
      ],
      ar: [
        'تطوير وتعديل برامج التحكم المتقدمة لمنصات Rockwell Studio 5000 / ControlLogix',
        'برمجة وتهيئة أنظمة FactoryTalk View SCADA / HMI مع واجهات تشغيل بديهية وإدارة متطورة للتنبيهات',
        'إجراء اختبارات الدوائر والتهيئة الميدانية للأجهزة ومعايرة الحساسات أثناء التشغيل الميداني',
        'ضمان الامتثال للضوابط الوطنية للأمن السيبراني الصناعي ومعايير مرونة الشبكات',
        'إعداد كتيبات التشغيل والصيانة (O&M) ومستندات سرد التحكم الفني التفصيلية'
      ]
    },
    requirements: {
      en: [
        "Bachelor's degree in Electrical, Automation, Electronics, or Instrumentation Engineering",
        '4-7 years of industrial control systems engineering and site commissioning experience',
        'Hands-on expertise with Rockwell Automation hardware, FactoryTalk software, and variable speed drives',
        'Familiarity with industrial communication protocols: Modbus, EtherNet/IP, CIP, and OPC UA',
        'Valid Saudi engineering accreditation (SCE) or transferable residency is preferred'
      ],
      ar: [
        'بكالوريوس في الهندسة الكهربائية أو الأتمتة أو الإلكترونيات أو الأجهزة الدقيقة والتحكم',
        'خبرة من 4 إلى 7 سنوات في هندسة أنظمة التحكم والتشغيل الميداني للمصانع',
        'خبرة عملية مع أجهزة ومحركات ومنصات برمجيات Rockwell Automation وFactoryTalk',
        'إلمام كامل ببروتوكولات الاتصال الصناعي: Modbus, EtherNet/IP, CIP, OPC UA',
        'يفضل التسجيل في الهيئة السعودية للمهندسين (SCE) مع إقامة قابلة للنقل'
      ]
    }
  },
  {
    id: 'vm148',
    code: 'VM148',
    slug: 'industrial-refrigeration-hvac-specialist',
    title: {
      en: 'Industrial Refrigeration & HVAC Specialist',
      ar: 'أخصائي التبريد الصناعي وأنظمة HVAC'
    },
    department: {
      en: 'Mechanical & Cooling',
      ar: 'الحلول الميكانيكية والتبريد'
    },
    designation: {
      en: 'HVAC Specialist',
      ar: 'أخصائي تبريد وتكييف'
    },
    location: {
      en: 'Jeddah, Saudi Arabia',
      ar: 'جدة، المملكة العربية السعودية'
    },
    experience: {
      en: '5-8 Years Exp',
      ar: '5-8 سنوات خبرة'
    },
    employmentType: {
      en: 'Full-time',
      ar: 'دوام كامل'
    },
    aboutRole: {
      en: 'Provide technical engineering, sizing, and lifecycle support for heavy-duty industrial screw chillers, process cooling packages, and cold chain refrigeration systems.',
      ar: 'تقديم الدعم الهندسي والحسابات الفنية ودعم دورة الحياة للمبردات اللولبية الصناعية، وحزم تبريد العمليات، ومرافق التبريد والتخزين.'
    },
    responsibilities: {
      en: [
        'Engineer and select industrial chillers, screw compressors, and evaporative cooling solutions for process plants',
        'Perform thermal load calculations, refrigerant piping designs, and pump head pressure validations',
        'Lead pre-commissioning, pressure testing, vacuuming, and charging of ammonia / eco-refrigerant plants',
        'Diagnose complex compressor lubrication, vibration, and motor drive anomalies on-site',
        'Liaise with equipment principals (Kirloskar Chillers, KCPL) to deliver warranty and service solutions'
      ],
      ar: [
        'تصميم واختيار المبردات الصناعية، والضواغط اللولبية، وأبراج التبريد التبخيري لمحطات العمليات الصناعية',
        'إجراء حسابات الأحمال الحرارية، وتصميم مسارات أنابيب التبريد، وحسابات ضغوط المضخات',
        'قيادة عمليات الاختبار المسبق، واختبارات الضغط، والتفريغ، وشحن أنظمة التبريد',
        'تشخيص الأعطال المعقدة في تزييت الضواغط والاهتزازات ومحركات الدفع في الموقع',
        'التنسيق مع الشركاء المصنعين (مثل Kirloskar Chillers) لتقديم خدمات الضمان والصيانة الفنية'
      ]
    },
    requirements: {
      en: [
        "Bachelor's degree in Mechanical Engineering with specialization in Thermal / Refrigeration",
        '5-8 years of direct experience with large industrial refrigeration systems and central chilled water plants',
        'Deep practical knowledge of screw compressors, centrifugal chillers, and energy recovery heat pumps',
        'Strong site troubleshooting skills and commitment to environmental and refrigerant safety codes',
        'Valid Saudi driving license and willingness to travel to client industrial facilities'
      ],
      ar: [
        'بكالوريوس في الهندسة الميكانيكية مع تخصص في الديناميكا الحرارية أو التبريد والتكييف',
        'خبرة من 5 إلى 8 سنوات مع أنظمة التبريد الصناعية الكبرى ومحطات المياه المثلجة المركزية',
        'معرفة عملية متعمقة بالضواغط اللولبية والمبردات الطاردة للمركز ومضخات الحرارة المستدامة',
        'مهارات استكشاف أعطال ميدانية عالية والتزام تام بمعايير السلامة البيئية لوسائط التبريد',
        'رخصة قيادة سعودية سارية والاستعداد للتنقل بين مواقع المنشآت الصناعية للعملاء'
      ]
    }
  }
]
