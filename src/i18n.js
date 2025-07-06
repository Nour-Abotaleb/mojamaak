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
      welcome: "Welcome to the Future City",
      welcomeDescription:
        "We build the most advanced architectural structures and infrastructure to move society into a new era",
      future: "Enjoy the Future Now",
      futureDescription:
        "Modern designs combining luxury and sustainability for a better life",
      creativity: "A World of Creativity",
      creativityDescription:
        "We turn ideas into tangible reality with global quality and advanced technologies",
    },
    about: {
      whatIsYourComplex: "What is Your Complex?",
      complexDescription:
        "Your Complex is an integrated platform for managing residential complexes. It makes it easier for owners and administrators to manage properties, residents, maintenance, and financial payments efficiently and easily.",
      personWorking: "Person working",
    },
    common: {
      learnMore: "Learn More",
    },
    features: {
      whyYourComplex: "Why Your Complex?",
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
    pricing: {
      pricing: "Pricing",
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
    },
    about: {
      know: "تعرف علي نظام مجمعك",
      knowDesc: 'نظام متكامل يوفر حلول إدارة المجمعات السكنية. يشمل إدارة العقارات. السكان. الصيانة. والإشعارات'
  
    },
  },
  ar: {
    about: {
      know: "Learn about Your Complex",
      knowDesc: 'A comprehensive system for managing residential complexes. It includes property management, resident registration, maintenance tracking, and financial payments management, all in one platform.'
  
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
    },
    pricing: {
      pricing: "الاسعار",
      choosePlan: "اختر الخطة المناسبة لإدارة مجمعك بسهولة",
      choosePlanDesc:
        "وفر وقتك وجهدك مع خطط الاشتراك المرنة. وابدأ في إدارة مجمعك السكني بكفاءة واحترافية",
      basic: "الباقة الاساسية",
      basic1: "الباقة المقدمة",
      basic2: "الباقة الاحترافية",
      monthly: "شهريا",
      unlimited: "إدارة المجمعات",
      unlimited1: "تسجيل السكان",
      unlimited2: "متابعة الصيانة",
      unlimited3: "إدارة المدفوعات",
      unlimited4: "التقارير المالية",
      unlimited5: "دعم فني علي مدار الساعة",
      start: "ابداء الان",
      popular1: "الأكثر شيوعًا",
    },
    nav: {
      home: "الرئيسية",
      about: "عن النظام",
      pricing: "الأسعار والاشتراكات",
      complexes: "المجمعات السكنية",
      partners: "الشركاء",
      contact: "تواصل معنا",
      search: "البحث",
      language: "English",
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
    common: {
      learnMore: "معرفة المزيد",
    },
    features: {
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
