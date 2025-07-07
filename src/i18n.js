import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About the System",
      pricing: "Pricing & Subscriptions",
      complexes: "Residential Complexes",
      partners: "Partners",
      contact: "Contact Us",
      search: "Search",
      language: "Arabic",
      theme: "Dark Mode",
      login: "Login",
    },
    slider: {
      welcome: "Welcome to Mojamaak",
      welcomeDescription:
        "We build the most advanced architectural structures and infrastructure to move society into a new era",
      future: "Enjoy the Future Now",
      futureDescription:
        "Modern designs combining luxury and sustainability for a better life",
      creativity: "A World of Creativity",
      creativityDescription:
        "We turn ideas into tangible reality with global quality and advanced technologies",
    },
    aboutMojamaak: {
      whatIsYourComplex: "What is Mojamaak?",
      complexDescription:
        "Your Complex is an integrated platform for managing residential complexes. It makes it easier for owners and administrators to manage properties, residents, maintenance, and financial payments efficiently and easily.",
      personWorking: "Person working",
    },
    common: {
      learnMore: "Learn More",
    },
    features: {
      manageEasy: "Manage Compounds and Apartments Easily",
      manageProperties: "Easily add and edit residential compounds and housing units.",
      trackUnits: "Track apartment status (Available / Occupied).",
      paymentTracking: "Monitor payments and subscriptions.",
      recordPayments: "Record payments and schedule future ones.",
      generateInvoices: "Generate periodic invoices and financial reports.",
      smartMaintenance: "Smart Maintenance Request System",
      handleRequests: "Receive and efficiently handle maintenance requests from residents.",
      assignToVendors: "Assign requests to approved maintenance vendors and track their progress.",
      realTimeNotifications: "Real-time Notifications and Alerts",
      sendAlerts: "Send instant alert messages to residents and admins.",
      receiveUpdates: "Receive updates about payments, maintenance, and new offers.",
      whyYourComplex: "Why Mojamaak?",
      mainFeatures: "Core Features",
      systemAdvantages: "Key advantages offered by the system",
      apartmentManagement: "Apartment and Building Management",
      apartmentManagementDesc: "Organize properties and add residents easily",
      maintenanceTracking: "Maintenance Request Tracking",
      maintenanceTrackingDesc:
        "Receive requests and send them to approved maintenance teams",
      financialManagement: "Financial Payments Management",
      financialManagementDesc:
        "A secure system for recording invoices and electronic payments",
      instantNotifications: "Instant Notifications",
      instantNotificationsDesc:
        "Live updates on maintenance, rentals, and offers",
    },
   howWeWork: {
    title: "How We Work",
    addCompounds: "Add Compounds and Apartments",
    addCompoundsDesc: "Register residential compounds and link them to available units.",
    registerResidents: "Register Residents and Manage Their Data",
    registerResidentsDesc: "Add residents with contact details and residency type.",
    trackRequests: "Track Maintenance Requests and Payments",
    trackRequestsDesc: "Easily manage payments and monitor submitted maintenance requests."
    },
    vision: {
      title: "Our Goals and Vision",
      intro: "Mojamaak provides a set of features that make residential compound management easier and more efficient, helping improve user experience and save time and effort."
    },
    realEstate: {
      title: "Organize Real Estate Operations",
      centralPlatform: "Offers a centralized platform to manage all compounds, apartments, and residents with ease.",
      searchFilter: "Allows searching and filtering to quickly view any unit details.",
      statusTracking: "Helps track the status of each unit (Available / Occupied / Under Maintenance) in real time."
    },
    payments: {
      title: "Easily Track Requests and Payments",
      accurateSystem: "Provides a precise system to record payments and schedule future ones.",
      detailedReports: "Generates detailed financial reports showing income and overdue payments.",
      exportInvoices: "Admins can export payment receipts and invoices with a single click."
    },
    maintenance: {
      title: "Improve Maintenance and Services",
      easyInterface: "Facilitates maintenance request management via an easy-to-use interface.",
      requestStatus: "Allows tracking the status of each request (New / In Progress / Completed) in the dashboard.",
      assignVendors: "Enables admins to quickly assign certified maintenance vendors and monitor their punctuality.",
      maintenanceTitle: "Authorized Maintenance Companies",
      maintenanceDescription: "We provide you with a list of the best authorized maintenance companies to easily meet all residential complex needs. Whether you need electrical maintenance, plumbing, air conditioning, or others, you can browse the available companies and contact them directly through the system.",
      maintenanceLatest: "Latest",
      maintenanceGeneral: "General Maintenance",
      maintenanceRequest: "Maintenance Request"
    },
    security: {
      title: "Enhance Security and Control",
      logging: "Ensures all operations are logged for easy future review.",
      permissions: "Supports role-based permissions so each user accesses only the data they’re authorized to see.",
      encryption: "Keeps data confidential using advanced encryption technologies."
    },
    faq: {
      title: "Frequently Asked Questions",
      intro: "Answers to the most common questions about Mojamaak",
      q1: "How can I register?",
      a1: "You can register by filling out the form on our website.",
      q2: "Is there any fee to join the compound?",
      a2: "No, joining the compound is completely free.",
      q3: "How can I contact you?",
      a3: "You can contact us via email or phone available on the Contact page.",
      q4: "How can I make a reservation?",
      a4: "You can make a reservation by visiting our website and choosing the appropriate service."
      },
    cta: {
      title: "Still have questions?",
      subtitle: "Join over 4,000 residential communities relying on Mojamaak to manage their properties efficiently!",
      button: "Learn more"
    },
    pricing: {
      pricing: "Pricing",
      pricingPlan: "Pricing Plans in Mojamaak",
      planDescription: "Choose the plan that fits your needs to efficiently manage residential communities. Mojamaak offers flexible plans suitable for various types of housing complexes, whether you manage a small property or a full residential project.",
      choosePlan: "Choose the best plan to manage your complex easily",
      choosePlanDesc:
        "Save time and effort with subscription plans. Start managing your residential complex efficiently and professionally",
      basic: "Basic Plan",
      basic1: "Premium Plan",
      basic2: "Advanced Plan",
      monthly: "Monthly",
      unlimited: "Manage Complexes",
      unlimited1: "Register Residents",
      unlimited2: "Follow Maintenance",
      unlimited3: "Manage Payments",
      unlimited4: "Financial Reports",
      unlimited5: "24/7 Support",
      start: "Start Now",
      popular1: "Most Popular",
    },
    complexes: {
      riyan: "Rayyan Complex",
      rahat: "Rahat Complex",
      zahia: "Zahia Complex",
      yasmine: "Yasmine Complex",
      price25: "25 AED",
      price40: "40 AED",
      previous: "Previous",
      next: "Next",
    },
    homeFive: {
      title: "Discover registered residential complexes in your complex",
      showAll: "Show All",
      desc: "Browse top registered residential complexes. Explore unit details, services, and offers for each complex.",
      details: "Read More",
      perMonth: "Individuals/Families",
    },
    partnersSection: {
      title: "Our Partners in Success",
      showAll: "Show All",
      description:
        "Your Complex relies on the best specialized companies in maintenance and real estate services to ensure the best experience in managing residential complexes.",
      lastUpdate: "Last updated: 04/12/2020 - 4:13 PM Saudi Arabia Time",
      locationText: "Location:",
      units: "Available Units",
      offer: "Available Offers",
      phoneText: "Phone Number",
      emailText: "Email",
      categoryText: "Category",
      rating: "Rating",
      location: "Baghdad - Al-Yarmouk District",
      count: "12 Units",
      discount: '10% discount on annual rentals',
      phone: '+964 077 123 7654',
      email: '9Bb0M@example.com',
      category: 'Electricity',
    },
    loginPage: {
      login: "Login",
      email: "Email",
      password: "Password",
      forgotPassword: "Forgot Password?",
      signin: "Sign In"
    },
    forgotPage: {
      title: "Forgot Password",
      email: "Email",
      submit: "Submit",
    },
    resetPage: {
      title: "Reset Password",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      resetPassword: "Reset Password",
    },
    compounds: {
      title: "Residential Compounds",
      description: "Discover the best residential compounds registered in the Mojamaak system. You can browse full details of each compound—from its unique location to the number of available units, along with exclusive offers. Use the smart search feature to quickly and easily find the perfect compound that suits your needs!",
      viewDetails: "View Details"
    },
    footer: {
      overview: "Overview",
      aboutPortal: "About (Portal Name)",
      privacyTerms: "Privacy & Terms of Use",
      howToUse: "How to Use (Portal Name)",
      newsEvents: "News & Events",
      slaStats: "SLA Statistics",
      importantLinks: "Important Links",
      nationalService: "National Service Portal",
      openData: "Government Open Data",
      aiStrategy: "National Data & AI Strategy",
      openDataPortal: "Open Data Portal",
      eParticipation: "e-Participation Portal",
      contactSupport: "Contact & Support",
      customerCenter: "Customer Center",
      contactUs: "Contact Us",
      shareWithUs: "Share With Us",
      submitComplaint: "Submit a Complaint",
      reportCorruption: "Report Corruption",
      followUs: "Follow Us",
      accessibilityTools: "Accessibility Tools",
      mobileApp: "Mobile App",
      rss: "RSS",
      siteSettings: "Site Settings",
      copyright:
        "All Rights Reserved to the Digital Government Authority © {year}",
      developedBy: "Developed and Maintained by (Entity Name)",
      lastUpdate: "Last Updated: 04/12/2020",
      downloadApp: "Download the App",
      quickLinks: "Quick Links"
    },
    aboutPage: {
      know: "Learn about Your Complex",
      knowDesc: 'A comprehensive system for managing residential complexes. It includes property management, resident registration, maintenance tracking, and financial payments management, all in one platform.'
    },

  },
  ar: {
    aboutPage: {
      know: "تعرف علي نظام مجمعك",
      knowDesc: 'نظام متكامل يوفر حلول إدارة المجمعات السكنية. يشمل إدارة العقارات. السكان. الصيانة. والإشعارات'
  
    },
    homeFive: {
      title: "اكتشف المجمعات السكنية المسجلة في مجمعك",
      showAll: "عرض الكل",
      desc: "تصفح أهم المجمعات السكنية المسجلة لدينا. واستكشف تفاصيل الوحدات. الخدمات. والعروض المتاحة لكل مجمع.",
      details: "قراءة المزيد",
      perMonth: "أفراد/عائلة",
    },
    complexes: {
      riyan: "مجمع الريان",
      rahat: "مجمع الراحة",
      zahia: "مجمع الزاهية",
      yasmine: "مجمع الياسمين",
      price25: "25 درهم",
      price40: "40 درهم",
      previous: "السابق",
      next: "التالي",
    },
  howWeWork: {
      title: "كيف نعمل",
      addCompounds: "إضافة المجمعات والشقق",
      addCompoundsDesc: "تسجيل المجمعات السكنية وربطها بالوحدات المتاحة.",
      registerResidents: "تسجيل السكان وإدارة بياناتهم",
      registerResidentsDesc: "إضافة السكان مع تفاصيل الاتصال ونوع الإقامة.",
      trackRequests: "متابعة طلبات الصيانة والدفعات المالية",
      trackRequestsDesc: "إدارة عمليات الدفع بسهولة ومراقبة طلبات الصيانة المرسلة."
    },
  vision: {
    title: "أهدافنا و رؤيتنا",
    intro: "يقدم \"مجمعك\" مجموعة من الفوائد التي تجعل إدارة المجمعات السكنية أكثر سهولة وكفاءة، مما يساعد في تحسين تجربة المستخدم وتوفير الوقت والجهد."
    },
  realEstate: {
    title: "تنظيم العمليات العقارية",
    centralPlatform: "يوفر منصة مركزية لإدارة جميع المجمعات، الشقق، والسكان بسهولة.",
    searchFilter: "يتيح إمكانية البحث والتصفية لعرض تفاصيل أي وحدة سكنية بسرعة.",
    statusTracking: "يساعد على تتبع حالة كل شقة (متاحة / مشغولة / تحت الصيانة) في الوقت الفعلي."
    },
    payments: {
      title: "تتبع الطلبات والمدفوعات بسهولة",
      accurateSystem: "يتيح نظامًا دقيقًا لتسجيل المدفوعات وجدولة الدفعات المالية.",
      detailedReports: "يوفر تقارير مالية مفصلة توضح الإيرادات والمدفوعات المتأخرة.",
      exportInvoices: "يمكن للإداريين تصدير إيصالات الدفع والفواتير بضغطة زر."
    },
    maintenance: {
      title: "تحسين الصيانة والخدمات",
      easyInterface: "يسهل إدارة طلبات الصيانة عبر واجهة سهلة الاستخدام.",
      requestStatus: "يتيح تتبع حالة كل طلب (جديد / قيد التنفيذ / مكتمل) في لوحة التحكم.",
      assignVendors: "يمكن للإدارة تعيين شركات صيانة معتمدة بسرعة ومعرفة مدى التزامها بالمواعيد.",
      maintenanceTitle: "شركات الصيانة المعتمدة",
      maintenanceDescription: "نوفر لك قائمة بأفضل شركات الصيانة المعتمدة. لتلبية جميع احتياجات المجمعات السكنية بسهولة. سواء كنت بحاجة إلي صيانة كهربائية. سباكة تكييف. أو غيرها. يمكنك استعراض الشركات المتاحة والتواصل معها مباشرة عبر النظام",
      maintenanceLatest: "الأحدث",
      maintenanceGeneral: "صيانة عامة",
       maintenanceRequest: "طلب صيانة"
    },
    security: {
      title: "تعزيز الأمان والتحكم",
      logging: "يضمن توثيق جميع العمليات داخل النظام، مما يسهل مراجعتها لاحقًا.",
      permissions: "يدعم إمكانية التحكم في الصلاحيات بحيث يمكن لكل مستخدم الوصول فقط إلى البيانات المسموح بها.",
      encryption: "يحافظ على سرية المعلومات باستخدام تقنيات تشفير متقدمة."
    },
    faq: {
      title: "الأسئلة الشائعة",
      intro: "إجابات على أكثر الأسئلة شيوعًا حول مجمعك",
      q1: "كيف يمكنني التسجيل؟",
      a1: "يمكنك التسجيل عن طريق ملء النموذج المتوفر على موقعنا الإلكتروني.",
      q2: "هل يوجد رسوم للانضمام إلي المجمع؟",
      a2: "لا، الانضمام إلي المجمع مجاني تماماً.",
      q3: "كيف أستطيع التواصل معكم؟",
      a3: "يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف المتوفر في صفحة الاتصال.",
      q4: "كيف أستطيع الحجز؟",
      a4: "يمكنك الحجز من خلال زيارة موقعنا واختيار الخدمة المناسبة."
    },
    pricing: {
      pricing: "الاسعار",
      pricingPlan: "خطط الأسعار في مجمعك",
      planDescription: "اختر الخطة التي تناسب احتياجاتك لإدارة المجمعات السكنية بفعالية. نقدم لك مجمعك خططًا مرنة تناسب مختلف المجمعات السكنية، سواء كنت تدير مجمعًا صغيرًا أو مشروعًا سكنيًا متكاملاً.",
      choosePlan: "اختر الخطة المناسبة لإدارة مجمعك بسهولة",
      choosePlanDesc:
        "وفر وقتك وجهدك مع خطط الاشتراك المرنة. وابدأ في إدارة مجمعك السكني بكفاءة واحترافية",
      basic: "الباقة الاساسية",
      basic1: "الباقة المتقدمة",
      basic2: "الباقة الاحترافية",
      monthly: "شهريا",
      unlimited: "إدارة المجمعات",
      unlimited1: "تسجيل السكان",
      unlimited2: "متابعة الصيانة",
      unlimited3: "إدارة المدفوعات",
      unlimited4: "التقارير المالية",
      unlimited5: "دعم فني علي مدار الساعة",
      start: "ابدء الآن",
      popular1: "الأكثر شيوعًا",
    },
    nav: {
      home: "الرئيسية",
      about: "عن النظام",
      pricing: "الأسعار والاشتراكات",
      complexes: "المجمعات السكنية",
      partners: "الشركاء",
      contact: "تواصل معنا",
      search: "بحث",
      language: "الإنجليزية",
      theme: "الوضع الليلي",
      login: "تسجيل الدخول"
    },
    slider: {
      welcome: "مرحباً بك في مجمعك",
      welcomeDescription:
        "نظام ذكي لإدارة المجمعات السكنية بسهولة وكفاءة، يوفر حلولاً شاملة لإدارة العقارات، السكان، الصيانة، والدفعات المالية",
      future: "استمتع بالمستقبل الآن",
      futureDescription:
        "تصميمات حديثة تجمع بين الفخامة والاستدامة لتوفير حياة أفضل",
      creativity: "عالم من الإبداع",
      creativityDescription:
        "نحول الأفكار إلى واقع ملموس بجودة عالمية وتقنيات متطورة",
    },
    about: {
      whatIsYourComplex: "ما هو مجمعك؟",
      complexDescription:
        "مجمعك هو منصة متكاملة لإدارة المجمعات السكنية. تسهل على الملاك والإداريين إدارة العقارات، السكان، الصيانة، والمدفوعات المالية بكل كفاءة وسهولة",
      personWorking: "شخص يعمل",
    },
    aboutMojamaak: {
      whatIsYourComplex: "ما هو مجمعك؟",
      complexDescription: "مجمعك هو منصة متكاملة لإدارة المجمعات السكنية. تُسهل على الملاك والمشرفين إدارة العقارات، السكان، الصيانة، والمدفوعات المالية بكفاءة وسهولة.",
      personWorking: "الشخص العامل"
    },
    common: {
      learnMore: "معرفة المزيد",
    },
    cta: {
      title: "لا تزال لديك أسئلة ؟",
      subtitle: "انضم إلي أكثر من +4000 مجمع سكني يعتمدون على مجمعك لإدارة ممتلكاتهم بكفاءة!",
      button: "تعرف على المزيد"
    },
    features: {
      manageEasy: "إدارة المجمعات والشقق بسهولة",
      manageProperties: "إضافة وتعديل المجمعات السكنية والوحدات السكنية بسهولة.",
      trackUnits: "متابعة حالة الشقق (متاحة / مشغولة).",
      paymentTracking: "متابعة عمليات الدفع والاشتراكات",
      recordPayments: "تسجيل الدفعات المالية وجدولة المدفوعات.",
      generateInvoices: "إصدار فواتير وتقارير مالية دورية.",
      smartMaintenance: "نظام طلبات الصيانة الذكي",
      handleRequests: "استقبال طلبات الصيانة من السكان ومعالجتها بكفاءة.",
      assignToVendors: "إسناد الطلبات لشركات الصيانة المعتمدة وتتبع حالتها.",
      realTimeNotifications: "إشعارات وتنبيهات لحظية",
      sendAlerts: "إرسال رسائل تنبيهية مباشرة للسكان والإداريين.",
      receiveUpdates: "استلام إشعارات حول المدفوعات، الصيانة، والعروض الجديدة.",
      whyYourComplex: "لماذا مجمعك؟",
      mainFeatures: "الميزات الأساسية",
      systemAdvantages: "أهم المزايا التي يقدمها النظام",
      apartmentManagement: "إدارة الشقق والمباني",
      apartmentManagementDesc: "تنظيم العقارات وإضافة السكان بسهولة",
      maintenanceTracking: "متابعة طلبات الصيانة",
      maintenanceTrackingDesc: "استقبال الطلبات وإرسالها لفرق الصيانة المعتمدة",
      financialManagement: "إدارة الدفعات المالية",
      financialManagementDesc:
        "نظام أمن لتسجيل الفواتير والمدفوعات الإلكترونية",
      instantNotifications: "إشعارات لحظية",
      instantNotificationsDesc: "تحديثات مباشرة حول الصيانة الإيجارات. والعروض",
    },
    partnersSection: {
      title: "شركاؤنا في النجاح",
      showAll: "عرض الكل",
      description:
        "مجمعك يعتمد علي أفضل الشركات المتخصصة في الصيانة والخدمات العقارية لضمان أفضل تجربة لإدارة المجمعات السكنية.",
      lastUpdate: "تاريخ آخر تعديل: 04/12/2020 - 4:13 م بتوقيت السعودية",
      locationText: "الموقع:",
      units: "عدد الوحدات المتاحة",
      offer: "العروض المتوفرة",
      phoneText: "رقم الهاتف",
      emailText: "البريد الإلكتروني",
      categoryText: "التصنيف",
      rating: "التقييم",
      location: "بغداد - حي اليرموك",
      count: '12 وحدة',
      discount: 'خصم 10% علي الإيجارات السنوية',
      phone: '+964 077 123 7654',
      email: '9Bb0M@example.com',
      category: 'كهرباء',
    },
    loginPage: {
      login: "تسجيل الدخول",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      forgotPassword: "نسيت كلمة المرور؟",
      signin: "تسجيل الدخول"
    },
    forgotPage: {
      title: "نسيت كلمة المرور",
      email: "البريد الإلكتروني",
      submit: "إرسال",
    },
    resetPage: {
      title: "إعادة تعيين كلمة المرور",
      newPassword: "كلمة المرور الجديدة",
      confirmPassword: "تأكيد كلمة المرور",
      resetPassword: "إعادة تعيين كلمة المرور",
    },
    compounds: {
      title: "المجمعات السكنية",
      description: "اكتشف أفضل المجمعات السكنية المسجلة في نظام مجمعك. حيث يمكنك استعراض التفاصيل الكاملة لكل مجمع، من الموقع الفريد إلى عدد الوحدات المتاحة، بالإضافة إلى العروض الحصرية. استخدم خاصية البحث الذكي لتجد المجمع المثالي الذي يناسب احتياجاتك بسهولة وسرعة!",
      viewDetails: "عرض التفاصيل"
    },
    footer: {
      overview: "ملخص",
      aboutPortal: "حول (اسم البوابة)",
      privacyTerms: "الخصوصية وشروط الاستخدام",
      howToUse: "كيفية استخدام (اسم البوابة)",
      newsEvents: "الأخبار والأحداث",
      slaStats: "إحصائيات اتفاقية مستوى الخدمة",
      importantLinks: "روابط مهمة",
      nationalService: "بوابة الخدمة الوطنية",
      openData: "البيانات المفتوحة الحكومية",
      aiStrategy: "الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي",
      openDataPortal: "بوابة البيانات المفتوحة",
      eParticipation: "بوابة المشاركة الإلكترونية",
      contactSupport: "الاتصال والدعم",
      customerCenter: "مركز العملاء",
      contactUs: "تواصل معنا",
      shareWithUs: "شارك معنا",
      submitComplaint: "تقديم شكوى",
      reportCorruption: "الإبلاغ عن الفساد",
      followUs: "تابعنا على",
      accessibilityTools: "أدوات الإتاحة والوصول",
      mobileApp: "تطبيق الجوال",
      rss: "RSS",
      siteSettings: "ضبط الموقع",
      copyright: "جميع الحقوق محفوظة لنظام مجمعك © {year}",
      developedBy: "تم تطويره وصيانته بواسطة (اسم الجهة)",
      lastUpdate: "تاريخ آخر تعديل: 04/12/2020",
      downloadApp: "تحميل التطبيق",
      quickLinks: "روابط سريعة"
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("language") || "ar",
  fallbackLocale: "en",
  messages,
});

export default i18n;
