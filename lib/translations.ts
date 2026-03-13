export type Lang = 'en' | 'hi'

export const translations = {
  en: {
    // META
    siteTitle: 'Orbitle — Travel Business Platform by TrigrowTech',

    // TOPBAR
    topbar: {
      badge: 'Founding Offer',
      msg: 'First 50 clients get discounted rate —',
      slots: '47 spots',
      left: 'left',
      link: 'Reserve your spot →',
    },

    // NAV
    nav: {
      howItWorks: 'How It Works',
      platform: 'Platform',
      pricing: 'Pricing',
      contact: 'Contact',
      learnMore: 'Learn More',
      joinWaitlist: 'Join Waitlist',
      by: 'by TrigrowTech',
    },

    // HERO
    hero: {
      kicker: 'Waitlist Now Open',
      h1a: 'Bring Your Leads.',
      h1b: 'Add Your Agents.',
      h1c: 'We Handle the Rest.',
      desc: 'Orbitle is a complete travel business platform — marketplace, agent portal, admin panel, and lead management — deployed on your own branded domain in 48 hours. You sell leads to your agents. We run the infrastructure.',
      cta1: 'Join the Waitlist',
      cta2: 'See How It Works',
      trust: '40+ travel operators already on the waitlist',
      adminTitle: 'YourBrand.com — Admin',
      live: '● Live',
      agents: 'Agents',
      leads: 'Leads',
      packages: 'Packages',
      recentLeads: 'Recent Leads',
      bali: 'Bali 7N/8D',
      manali: 'Manali Family',
      dubai: 'Dubai Business',
      statusNew: 'New',
      statusTalk: 'In Talk',
      statusBooked: 'Booked ✓',
      notifTitle: 'New lead sold → Sara',
      notifSub: 'sara.yourbrand.com · just now',
    },

    // URGENCY STRIP
    urgency: {
      badge: '🔥 Founding Offer',
      text: 'Only',
      spots: '47 spots',
      textB: 'at discounted founding rate ·',
      trial: '1 week free trial',
      textC: 'for all waitlist members',
      endsIn: 'Offer ends in',
      cta: 'Claim Spot →',
    },

    // HOW IT WORKS
    how: {
      kicker: 'How It Works',
      h2a: 'You bring the business.',
      h2b: 'We build the platform.',
      sub: 'Three steps from zero to a fully running travel platform on your own domain.',
      steps: [
        {
          num: '1',
          icon: '🌐',
          title: 'Tell Us Your Domain',
          desc: "Share your domain name. We handle DNS, SSL, and every technical detail. Don't have one? We provide it — included on 6-month and yearly plans.",
          tag: 'We do the setup',
        },
        {
          num: '2',
          icon: '👥',
          title: 'Add Agents & Sell Leads',
          desc: 'Add your agents — each gets their own login and branded subdomain instantly. Upload leads and sell them to your agents at your own price. You control everything.',
          tag: "You're in control",
        },
        {
          num: '3',
          icon: '📈',
          title: 'Watch Conversions Climb',
          desc: 'Leads reach agents in seconds. Agent subdomains drive organic traffic to your marketplace. You see who is performing, what is converting, and where revenue is coming from.',
          tag: 'Live in 48 hours',
        },
      ],
    },

    // MODULES
    modules: {
      kicker: 'The Platform',
      h2a: 'Four Powerful Systems.',
      h2b: 'One Simple Platform.',
      sub: 'Run your entire travel business on your own domain — without building software.',
      valueKicker: 'The Value Proposition',
      valueStatement: "For less than the cost of a single lead, you're getting an entire travel business infrastructure.",
      infrastructureMessage: "You're not buying software. You're getting a complete travel business infrastructure.",
      security: {
        title: 'Your Leads Stay Yours',
        desc: 'Orbitle does not access or sell operator leads. Your data belongs only to you. Agents only see the leads you assign. All enquiries flow directly into your admin panel.',
      },
      cards: [
        {
          icon: '🏪',
          title: 'Travel Marketplace',
          desc: 'A branded travel marketplace on your domain. List packages and collect enquiries directly.',
          points: [
            'Agents publish packages directly on your marketplace',
            'Customer enquiries automatically reach your admin dashboard',
            'Your brand and domain — not a third-party platform',
          ],
        },
        {
          icon: '⚙️',
          title: 'Admin Panel',
          desc: 'Your command center for managing leads, agents, and revenue.',
          points: [
            'Assign and sell leads to agents at your own price',
            'Track every lead from enquiry to booking',
            'Monitor agent performance and revenue in one dashboard',
          ],
        },
        {
          icon: '🧑‍💼',
          title: 'Agent Portal',
          desc: 'A dedicated workspace for your agents. Simple, secure, and built for high-speed lead closing.',
          points: [
            'Each agent has their own secure login',
            'Agents only see leads assigned to them',
            'Update lead status in real time',
          ],
        },
        {
          icon: '🔗',
          title: 'Agent Subdomains',
          desc: 'Every agent gets their own mini-website — sara.yourbrand.com — the moment you add them.',
          points: [
            'Automatically created when you add an agent',
            'Agents share their page on WhatsApp, Instagram, Google',
            'All enquiries route back to your admin panel',
          ],
        },
      ],
    },

    // WHY
    why: {
      kicker: 'Why Orbitle',
      h2: 'Built for how travel operators actually work.',
      visualTitle: 'What changes when you use Orbitle',
      metrics: [
        { label: 'Lead Response Time', change: '18 min → 45 sec', width: '95%', badge: '95% faster' },
        { label: 'Lead Leakage', change: '40% → ~0%', width: '100%', badge: 'Eliminated' },
        { label: 'Setup vs. Custom Build', change: '6 months → 48 hrs', width: '99%', badge: '99% faster' },
        { label: 'Organic Traffic via Agent Subdomains', change: '0 → Every agent', width: '80%', badge: 'New channel' },
      ],
      source: 'Projected impact for operators with 10–50 agents.',
      points: [
        {
          icon: '💰',
          title: 'A fraction of the custom build cost',
          desc: 'Building this yourself costs ₹6–7 lakh and takes 6–12 months. Orbitle gives you the same infrastructure in 48 hours — at a small monthly subscription.',
        },
        {
          icon: '🌐',
          title: 'Your domain. Your brand. More organic traffic.',
          desc: 'Everything runs at yourbrand.com. Agent subdomains bring Google and social traffic back to your marketplace — not to a competitor\'s platform.',
        },
        {
          icon: '💼',
          title: 'Sell leads. Keep the margin.',
          desc: 'You buy or generate leads, then sell them to your agents at your own price. Orbitle gives you the full infrastructure to run this as a proper business.',
        },
      ],
      cta: "See If It's Right for You",
    },

    // LOGO STRIP
    logoStrip: {
      label: 'Travel businesses on our waitlist',
      pills: [
        '🌅 Sunrise Travel, Pune',
        '🏔️ Horizon Holidays, Delhi',
        '🌊 CoastalTours, Goa',
        '🌿 GreenRoutes, Bangalore',
        '🗺️ IndiaXplore, Jaipur',
      ],
    },

    // COMMENTS
    comments: {
      kicker: 'From Our Waitlist',
      h2a: 'What operators said',
      h2b: 'when they signed up',
      sub: 'The platform is still being built. These are real comments from operators who joined our waitlist after seeing the concept.',
      badge: '✓ On Waitlist',
      cards: [
        {
          initials: 'RS',
          name: 'Rahul S.',
          co: 'Tour Operator, Pune',
          text: '"Finally something built specifically for travel operators. I manage 20 agents across WhatsApp groups and spreadsheets — it\'s chaos. Can\'t wait for this to launch."',
        },
        {
          initials: 'PK',
          name: 'Pooja K.',
          co: 'Travel Franchise, Delhi',
          text: '"The agent subdomain idea is brilliant. Each of my agents gets their own branded link, and enquiries come back to me? That\'s the kind of organic reach we\'ve been missing."',
        },
        {
          initials: 'AM',
          name: 'Anil M.',
          co: 'Lead Aggregator, Ahmedabad',
          text: '"I get hundreds of leads a month from ads and distribute them manually. I lose track of at least 30%. A proper system with agent assignment and tracking is long overdue."',
        },
      ],
    },

    // PRICING
    pricing: {
      kicker: 'Pricing',
      h2a: 'Founding discount for the first 50 clients.',
      h2b: 'Starting from ₹999/month.',
      sub: 'Full pricing is shared after you express interest. Founding members get a discounted rate not available at public launch.',
      cardTitle: 'Orbitle Subscription Plans',
      cardSub: 'Monthly · 6-Month · Yearly · One-Time — all on your domain',
      startingLabel: 'Starting from',
      startingPrice: '₹999',
      startingPer: '/mo',
      startingSub: 'Founding rate · First 50 clients',
      plans: [
        {
          name: 'Monthly',
          price: '₹999',
          per: '/mo',
          bill: 'Billed monthly · cancel anytime',
          featured: false,
          features: [
            'Full platform on your domain',
            'Marketplace + Admin + Portal',
            'Unlimited agent subdomains',
            'Lead management & selling system',
            'Bring your own domain',
          ],
        },
        {
          name: '6-Month Plan',
          price: '₹799',
          per: '/mo',
          bill: 'Billed every 6 months · save 20%',
          featured: true,
          features: [
            'Everything in Monthly',
            'Domain provided & configured by us',
            'Priority support',
            'Onboarding assistance',
            'Save ₹1,200/year vs monthly',
          ],
        },
        {
          name: 'Yearly',
          price: '₹666',
          per: '/mo',
          bill: 'Billed yearly · best value',
          featured: false,
          features: [
            'Everything in 6-Month',
            'Custom branding & colors',
            'Priority support + onboarding call',
            'Save 33% vs monthly',
            'Founding rate locked for 1 year',
          ],
        },
        {
          name: 'Lifetime Access',
          price: '₹25,000',
          per: 'one-time',
          bill: 'Pay once · yours forever',
          featured: false,
          badge: '🔥 Best Deal',
          features: [
            'Everything in Yearly',
            'Lifetime access — no recurring fee',
            'All future updates included',
            'Dedicated onboarding session',
            'Priority support for life',
          ],
        },
      ],
      lockTitle: 'Pricing visible to interested operators only',
      lockSub: 'Express your interest below and we\'ll share full pricing — including the lifetime plan — within 24 hours.',
      lockCta: 'Unlock Pricing →',
      lockNote: 'No commitment required. Founding discount for first 50 clients only.',
      domainNoteTitle: 'Domain Note',
      domainNote: 'We provision and configure your domain as part of the subscription. Domain provisioning by us requires a minimum 6-month plan. You can also bring your own domain on any plan.',
    },

    // CONTACT / GET STARTED
    contact: {
      kicker: 'Get Started Today',
      h2a: 'Stop losing leads.',
      h2b: 'Start closing deals.',
      sub: 'Join the waitlist and reserve your spot. We\'ll reach out within 24 hours with full pricing details and your free trial setup.',
      fromLabel: 'Starting from',
      price: '₹999',
      pm: '/month',
      rate: '· Founding rate',
      points: [
        '1-week free trial — no credit card needed',
        'Founding discount locked in on submission',
        'Full platform live on your domain within 48 hours',
        'Sell leads to your agents at your own price',
        'Domain included on 6-month & yearly plans',
      ],
      urgencyTitle: 'founding spots remaining',
      urgencyOnly: 'Only',
      urgencySub: 'After the first 50 clients, the founding discount closes permanently.',
      phone: 'Questions? Call us at',
      formTitle: 'Request Early Access',
      formSub: "We'll reach out within 24 hours with pricing & next steps",
      intentLabel: 'I want to',
      intentWaitlist: '📋 Join Waitlist',
      intentWaitlistSub: 'Reserve spot & get pricing',
      intentDemo: '📞 Book a Demo',
      intentDemoSub: '30-min platform walkthrough',
      nameLabel: 'Your Name',
      namePlaceholder: 'Rahul Sharma',
      phoneLabel: 'Phone',
      phonePlaceholder: '+91 98765 43210',
      emailLabel: 'Email',
      emailPlaceholder: 'rahul@yourtravelco.com',
      bizLabel: 'Business Name',
      bizPlaceholder: 'Sunrise Travel',
      domainLabel: 'Domain Name (if any)',
      domainPlaceholder: 'sunrisetravel.com',
      agentsLabel: 'Team Size',
      agentsOptions: ['Select team size', '1–5 agents', '5–10 agents', '10–20 agents', '20–50 agents', '50+ agents'],
      msgLabel: 'Anything to add?',
      msgPlaceholder: 'Tell us about your current setup or what you\'re trying to solve...',
      submitBtn: 'Submit & Unlock Pricing →',
      submitFine: 'No spam. No credit card. Founding rate locked on submit.',
      successTitle: "You're on the list!",
      successText: "We'll reach out to {email} within 24 hours with full pricing and your free trial setup. Your founding spot is reserved — and the pricing section is now unlocked.",
    },

    // FOOTER
    footer: {
      desc: 'A white-label travel business platform by TrigrowTech. Marketplace, admin panel, agent portal, and lead management on your own branded domain.',
      platformTitle: 'Platform',
      platformLinks: ['Travel Marketplace', 'Admin Panel', 'Agent Portal', 'Agent Subdomains'],
      companyTitle: 'Company',
      companyLinks: ['About TrigrowTech', 'Careers', 'Contact'],
      resourcesTitle: 'Resources',
      resourcesLinks: ['Join Waitlist', 'Book a Demo', 'Privacy Policy', 'Terms of Service'],
      copy: '© 2026 TrigrowTech Pvt. Ltd. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },

  hi: {
    siteTitle: 'Orbitle — TrigrowTech का ट्रैवल बिज़नेस प्लेटफ़ॉर्म',

    topbar: {
      badge: 'फाउंडिंग ऑफर',
      msg: 'पहले 50 क्लाइंट्स को डिस्काउंटेड रेट मिलेगा —',
      slots: '47 स्पॉट',
      left: 'बचे हैं',
      link: 'अपना स्पॉट बुक करें →',
    },

    nav: {
      howItWorks: 'कैसे काम करता है',
      platform: 'प्लेटफ़ॉर्म',
      pricing: 'प्राइसिंग',
      contact: 'संपर्क',
      learnMore: 'और जानें',
      joinWaitlist: 'वेटलिस्ट जॉइन करें',
      by: 'TrigrowTech द्वारा',
    },

    hero: {
      kicker: 'वेटलिस्ट खुली है',
      h1a: 'अपने लीड्स लाएं।',
      h1b: 'अपने एजेंट जोड़ें।',
      h1c: 'बाकी हम संभालेंगे।',
      desc: 'Orbitle एक पूरा ट्रैवल बिज़नेस प्लेटफ़ॉर्म है — मार्केटप्लेस, एजेंट पोर्टल, एडमिन पैनल और लीड मैनेजमेंट — 48 घंटों में आपके खुद के ब्रांडेड डोमेन पर लाइव। आप लीड्स बेचें अपने एजेंट्स को। इंफ्रास्ट्रक्चर हम चलाते हैं।',
      cta1: 'वेटलिस्ट जॉइन करें',
      cta2: 'कैसे काम करता है देखें',
      trust: '40+ ट्रैवल ऑपरेटर पहले से वेटलिस्ट में हैं',
      adminTitle: 'YourBrand.com — Admin',
      live: '● लाइव',
      agents: 'एजेंट',
      leads: 'लीड्स',
      packages: 'पैकेज',
      recentLeads: 'हाल के लीड्स',
      bali: 'बाली 7N/8D',
      manali: 'मनाली फैमिली',
      dubai: 'दुबई बिज़नेस',
      statusNew: 'नया',
      statusTalk: 'बातचीत में',
      statusBooked: 'बुक ✓',
      notifTitle: 'नया लीड बेचा → Sara',
      notifSub: 'sara.yourbrand.com · अभी',
    },

    urgency: {
      badge: '🔥 फाउंडिंग ऑफर',
      text: 'केवल',
      spots: '47 स्पॉट',
      textB: 'डिस्काउंटेड फाउंडिंग रेट पर ·',
      trial: '1 हफ्ते का फ्री ट्रायल',
      textC: 'सभी वेटलिस्ट मेंबर्स के लिए',
      endsIn: 'ऑफर खत्म होने में',
      cta: 'स्पॉट क्लेम करें →',
    },

    how: {
      kicker: 'कैसे काम करता है',
      h2a: 'बिज़नेस आप लाइए।',
      h2b: 'प्लेटफ़ॉर्म हम बनाते हैं।',
      sub: 'तीन आसान स्टेप्स में अपना ट्रैवल प्लेटफ़ॉर्म आपके डोमेन पर लाइव।',
      steps: [
        {
          num: '1',
          icon: '🌐',
          title: 'अपना डोमेन बताएं',
          desc: 'अपना डोमेन नाम शेयर करें। DNS, SSL और हर टेक्निकल काम हम करेंगे। डोमेन नहीं है? 6-महीने और सालाना प्लान में हम देते हैं।',
          tag: 'सेटअप हम करेंगे',
        },
        {
          num: '2',
          icon: '👥',
          title: 'एजेंट जोड़ें और लीड बेचें',
          desc: 'अपने एजेंट्स को एडमिन पैनल में जोड़ें — उन्हें तुरंत खुद का लॉगिन और ब्रांडेड सबडोमेन मिलता है। लीड्स अपलोड करें और अपनी कीमत पर एजेंट्स को बेचें।',
          tag: 'आप कंट्रोल में हैं',
        },
        {
          num: '3',
          icon: '📈',
          title: 'कन्वर्ज़न देखें बढ़ते हुए',
          desc: 'लीड्स एजेंट्स तक सेकंडों में पहुंचती हैं। एजेंट सबडोमेन आपके मार्केटप्लेस पर ऑर्गेनिक ट्रैफिक लाते हैं। आप देखें कौन परफॉर्म कर रहा है।',
          tag: '48 घंटे में लाइव',
        },
      ],
    },

    modules: {
      kicker: 'प्लेटफ़ॉर्म',
      h2a: 'चार पावरफुल सिस्टम।',
      h2b: 'एक आसान प्लेटफ़ॉर्म।',
      sub: 'बिना सॉफ्टवेयर बनाए अपना पूरा ट्रैवल बिज़नेस अपने डोमेन पर चलाएं।',
      valueKicker: 'वैल्यू प्रपोज़िशन',
      valueStatement: "एक सिंगल लीड की कीमत से भी कम में, आपको पूरा ट्रैवल बिज़नेस इंफ्रास्ट्रक्चर मिल रहा है।",
      infrastructureMessage: "आप सिर्फ सॉफ्टवेयर नहीं खरीद रहे। आप एक पूरा ट्रैवल बिज़नेस इंफ्रास्ट्रक्चर पा रहे हैं।",
      security: {
        title: 'आपके लीड्स हमेशा आपके रहेंगे',
        desc: 'Orbitle ऑपरेटर्स के लीड्स को न तो एक्सेस करता है और न ही बेचता है। आपका डेटा सिर्फ आपका है। एजेंट्स सिर्फ वही लीड्स देख सकते हैं जो आप उन्हें सौंपते हैं।',
      },
      cards: [
        {
          icon: '🏪',
          title: 'ट्रैवल मार्केटप्लेस',
          desc: 'आपके डोमेन पर एक ब्रांडेड ट्रैवल मार्केटप्लेस। पैकेज सूचीबद्ध करें और सीधे पूछताछ प्राप्त करें।',
          points: [
            'एजेंट सीधे आपके मार्केटप्लेस पर पैकेज पब्लिश करते हैं',
            'ग्राहकों की एनक्वायरी ऑटोमैटिक आपके एडमिन डैशबोर्ड तक पहुंचती है',
            'आपका ब्रांड, आपका डोमेन — किसी थर्ड-पार्टी प्लेटफ़ॉर्म पर नहीं',
          ],
        },
        {
          icon: '⚙️',
          title: 'एडमिन पैनल',
          desc: 'लीड्स, एजेंट्स और रेवेन्यू मैनेज करने के लिए आपका कंट्रोल सेंटर।',
          points: [
            'एजेंट्स को अपनी मर्ज़ी की कीमत पर लीड असाइन करें और बेचें',
            'एनक्वायरी से बुकिंग तक हर लीड को ट्रैक करें',
            'एक ही डैशबोर्ड में एजेंट परफॉर्मेंस और रेवेन्यू देखें',
          ],
        },
        {
          icon: '🧑‍💼',
          title: 'एजेंट पोर्टल',
          desc: 'आपके एजेंट्स के लिए एक डेडिकेटेड वर्कस्पेस। सुरक्षित और तेज़ लीड क्लोजिंग के लिए बनाया गया।',
          points: [
            'हर एजेंट का अपना सुरक्षित लॉगिन होता है',
            'एजेंट्स सिर्फ उन्हें सौंपे गए लीड्स ही देख सकते हैं',
            'रीयल टाइम में लीड स्टेटस अपडेट करें',
          ],
        },
        {
          icon: '🔗',
          title: 'एजेंट सबडोमेन',
          desc: 'हर एजेंट को अपना मिनी-वेबसाइट मिलता है — sara.yourbrand.com — जैसे ही आप उन्हें जोड़ते हैं।',
          points: [
            'एजेंट जोड़ने पर तुरंत ऑटोमैटिक बन जाता है',
            'एजेंट अपना पेज WhatsApp, Instagram, Google पर शेयर करें',
            'सभी एनक्वायरी आपके एडमिन पैनल में वापस आती हैं',
          ],
        },
      ],
    },

    why: {
      kicker: 'क्यों Orbitle',
      h2: 'जैसा ट्रैवल ऑपरेटर काम करते हैं, उसी के लिए बनाया गया।',
      visualTitle: 'Orbitle से क्या बदलता है',
      metrics: [
        { label: 'लीड रिस्पॉन्स टाइम', change: '18 मिनट → 45 सेकंड', width: '95%', badge: '95% तेज़' },
        { label: 'लीड लीकेज', change: '40% → ~0%', width: '100%', badge: 'खत्म' },
        { label: 'सेटअप बनाम कस्टम बिल्ड', change: '6 महीने → 48 घंटे', width: '99%', badge: '99% तेज़' },
        { label: 'एजेंट सबडोमेन से ऑर्गेनिक ट्रैफिक', change: '0 → हर एजेंट', width: '80%', badge: 'नया चैनल' },
      ],
      source: '10–50 एजेंट वाले ऑपरेटर्स के लिए अनुमानित असर।',
      points: [
        {
          icon: '💰',
          title: 'कस्टम बिल्ड से बहुत सस्ता',
          desc: 'खुद बनाने पर ₹6–7 लाख और 6–12 महीने लगते हैं। Orbitle वही इंफ्रास्ट्रक्चर 48 घंटों में देता है — छोटी मासिक सब्सक्रिप्शन पर।',
        },
        {
          icon: '🌐',
          title: 'आपका डोमेन। आपका ब्रांड। ज़्यादा ट्रैफिक।',
          desc: 'सब कुछ yourbrand.com पर चलता है। एजेंट सबडोमेन Google और सोशल ट्रैफिक आपके मार्केटप्लेस पर लाते हैं।',
        },
        {
          icon: '💼',
          title: 'लीड बेचें। मार्जिन रखें।',
          desc: 'आप लीड्स खरीदें या जनरेट करें, फिर अपने एजेंट्स को अपनी कीमत पर बेचें। Orbitle आपको यह बिज़नेस प्रोफेशनली चलाने का पूरा इंफ्रास्ट्रक्चर देता है।',
        },
      ],
      cta: 'देखें क्या यह आपके लिए सही है',
    },

    logoStrip: {
      label: 'हमारी वेटलिस्ट में ट्रैवल बिज़नेस',
      pills: [
        '🌅 Sunrise Travel, पुणे',
        '🏔️ Horizon Holidays, दिल्ली',
        '🌊 CoastalTours, गोवा',
        '🌿 GreenRoutes, बैंगलोर',
        '🗺️ IndiaXplore, जयपुर',
      ],
    },

    comments: {
      kicker: 'हमारी वेटलिस्ट से',
      h2a: 'ऑपरेटर्स ने साइन अप के वक्त',
      h2b: 'क्या कहा',
      sub: 'प्लेटफ़ॉर्म अभी बन रहा है। ये उन ऑपरेटर्स की असली बातें हैं जो कॉन्सेप्ट देखकर वेटलिस्ट में आए।',
      badge: '✓ वेटलिस्ट में',
      cards: [
        {
          initials: 'RS',
          name: 'Rahul S.',
          co: 'टूर ऑपरेटर, पुणे',
          text: '"आखिरकार कुछ तो बना खास ट्रैवल ऑपरेटर्स के लिए। मैं 20 एजेंट्स को WhatsApp ग्रुप्स और स्प्रेडशीट्स पर मैनेज करता हूं — बड़ा झमेला है। लॉन्च का इंतज़ार है।"',
        },
        {
          initials: 'PK',
          name: 'Pooja K.',
          co: 'ट्रैवल फ्रेंचाइज़, दिल्ली',
          text: '"एजेंट सबडोमेन का आइडिया कमाल है। हर एजेंट को खुद का ब्रांडेड लिंक, और एनक्वायरी मेरे पास? यही ऑर्गेनिक रीच हमें चाहिए थी।"',
        },
        {
          initials: 'AM',
          name: 'Anil M.',
          co: 'लीड एग्रीगेटर, अहमदाबाद',
          text: '"मुझे हर महीने सैकड़ों लीड्स आती हैं ads से, मैन्युअली बांटता हूं। कम से कम 30% खो जाती हैं। एक प्रॉपर सिस्टम बहुत ज़रूरी था।"',
        },
      ],
    },

    pricing: {
      kicker: 'प्राइसिंग',
      h2a: 'पहले 50 क्लाइंट्स के लिए फाउंडिंग डिस्काउंट।',
      h2b: 'शुरुआत ₹999/महीने से।',
      sub: 'पूरी प्राइसिंग interest दिखाने के बाद शेयर की जाती है। फाउंडिंग मेंबर्स को वो रेट मिलता है जो पब्लिक लॉन्च पर नहीं होगा।',
      cardTitle: 'Orbitle सब्सक्रिप्शन प्लान',
      cardSub: 'मासिक · 6 महीने · सालाना · एक बार — सब आपके डोमेन पर',
      startingLabel: 'शुरुआत',
      startingPrice: '₹999',
      startingPer: '/माह',
      startingSub: 'फाउंडिंग रेट · पहले 50 क्लाइंट',
      plans: [
        {
          name: 'मासिक',
          price: '₹999',
          per: '/माह',
          bill: 'हर महीने बिल · कभी भी कैंसिल करें',
          featured: false,
          features: [
            'आपके डोमेन पर पूरा प्लेटफ़ॉर्म',
            'मार्केटप्लेस + एडमिन + पोर्टल',
            'असीमित एजेंट सबडोमेन',
            'लीड मैनेजमेंट और सेलिंग सिस्टम',
            'अपना डोमेन लाएं',
          ],
        },
        {
          name: '6 महीने का प्लान',
          price: '₹799',
          per: '/माह',
          bill: 'हर 6 महीने बिल · 20% बचत',
          featured: true,
          features: [
            'मासिक में सब कुछ',
            'डोमेन हम प्रोवाइड और कॉन्फ़िगर करते हैं',
            'प्रायोरिटी सपोर्ट',
            'ऑनबोर्डिंग असिस्टेंस',
            'मासिक से ₹1,200/साल बचत',
          ],
        },
        {
          name: 'सालाना',
          price: '₹666',
          per: '/माह',
          bill: 'सालाना बिल · बेस्ट वैल्यू',
          featured: false,
          features: [
            '6 महीने में सब कुछ',
            'कस्टम ब्रांडिंग और कलर',
            'प्रायोरिटी सपोर्ट + ऑनबोर्डिंग कॉल',
            'मासिक से 33% बचत',
            '1 साल के लिए फाउंडिंग रेट लॉक',
          ],
        },
        {
          name: 'लाइफटाइम एक्सेस',
          price: '₹25,000',
          per: 'एक बार',
          bill: 'एक बार भुगतान · हमेशा के लिए आपका',
          featured: false,
          badge: '🔥 बेस्ट डील',
          features: [
            'सालाना में सब कुछ',
            'लाइफटाइम एक्सेस — कोई रिकरिंग फीस नहीं',
            'सभी फ्यूचर अपडेट शामिल',
            'डेडिकेटेड ऑनबोर्डिंग सेशन',
            'जीवनभर प्रायोरिटी सपोर्ट',
          ],
        },
      ],
      lockTitle: 'प्राइसिंग केवल इच्छुक ऑपरेटर्स के लिए दिखती है',
      lockSub: 'नीचे अपनी रुचि दिखाएं और हम 24 घंटों में पूरी प्राइसिंग — लाइफटाइम प्लान सहित — शेयर करेंगे।',
      lockCta: 'प्राइसिंग अनलॉक करें →',
      lockNote: 'कोई commitment नहीं। फाउंडिंग डिस्काउंट सिर्फ पहले 50 क्लाइंट्स के लिए।',
      domainNoteTitle: 'डोमेन नोट',
      domainNote: 'हम सब्सक्रिप्शन के हिस्से के तौर पर आपका डोमेन प्रोवाइड और कॉन्फ़िगर करते हैं। हमारी तरफ से डोमेन के लिए न्यूनतम 6 महीने का प्लान ज़रूरी है। किसी भी प्लान पर आप अपना डोमेन ला सकते हैं।',
    },

    contact: {
      kicker: 'आज ही शुरू करें',
      h2a: 'लीड्स खोना बंद करें।',
      h2b: 'डील्स क्लोज़ करना शुरू करें।',
      sub: 'वेटलिस्ट जॉइन करें और अपना स्पॉट रिज़र्व करें। हम 24 घंटों में पूरी प्राइसिंग और फ्री ट्रायल सेटअप के साथ संपर्क करेंगे।',
      fromLabel: 'शुरुआत',
      price: '₹999',
      pm: '/महीने से',
      rate: '· फाउंडिंग रेट',
      points: [
        '1 हफ्ते का फ्री ट्रायल — कोई क्रेडिट कार्ड नहीं',
        'सबमिट करते ही फाउंडिंग डिस्काउंट लॉक',
        '48 घंटों में आपके डोमेन पर पूरा प्लेटफ़ॉर्म लाइव',
        'अपने एजेंट्स को अपनी कीमत पर लीड बेचें',
        '6 महीने और सालाना प्लान में डोमेन शामिल',
      ],
      urgencyTitle: 'फाउंडिंग स्पॉट बचे हैं',
      urgencyOnly: 'केवल',
      urgencySub: 'पहले 50 क्लाइंट्स के बाद फाउंडिंग डिस्काउंट हमेशा के लिए बंद हो जाएगा।',
      phone: 'सवाल हैं? हमें कॉल करें',
      formTitle: 'अर्ली एक्सेस रिक्वेस्ट करें',
      formSub: 'हम 24 घंटों में प्राइसिंग और अगले स्टेप्स के साथ संपर्क करेंगे',
      intentLabel: 'मैं चाहता/चाहती हूं',
      intentWaitlist: '📋 वेटलिस्ट जॉइन करें',
      intentWaitlistSub: 'स्पॉट रिज़र्व करें और प्राइसिंग पाएं',
      intentDemo: '📞 डेमो बुक करें',
      intentDemoSub: '30 मिनट का प्लेटफ़ॉर्म वॉकथ्रू',
      nameLabel: 'आपका नाम',
      namePlaceholder: 'राहुल शर्मा',
      phoneLabel: 'फोन',
      phonePlaceholder: '+91 98765 43210',
      emailLabel: 'ईमेल',
      emailPlaceholder: 'rahul@yourtravelco.com',
      bizLabel: 'बिज़नेस का नाम',
      bizPlaceholder: 'Sunrise Travel',
      domainLabel: 'डोमेन नाम (अगर है)',
      domainPlaceholder: 'sunrisetravel.com',
      agentsLabel: 'टीम साइज़',
      agentsOptions: ['टीम साइज़ चुनें', '1–5 एजेंट', '5–10 एजेंट', '10–20 एजेंट', '20–50 एजेंट', '50+ एजेंट'],
      msgLabel: 'कुछ और बताना है?',
      msgPlaceholder: 'अपना मौजूदा सेटअप या समस्या बताएं...',
      submitBtn: 'सबमिट करें और प्राइसिंग अनलॉक करें →',
      submitFine: 'कोई स्पैम नहीं। कोई क्रेडिट कार्ड नहीं। सबमिट पर फाउंडिंग रेट लॉक।',
      successTitle: 'आप लिस्ट में हैं!',
      successText: 'हम {email} पर 24 घंटों में पूरी प्राइसिंग और फ्री ट्रायल सेटअप के साथ संपर्क करेंगे। आपका फाउंडिंग स्पॉट रिज़र्व है — और प्राइसिंग सेक्शन अब अनलॉक हो गया है।',
    },

    footer: {
      desc: 'TrigrowTech का एक व्हाइट-लेबल ट्रैवल बिज़नेस प्लेटफ़ॉर्म। मार्केटप्लेस, एडमिन पैनल, एजेंट पोर्टल और लीड मैनेजमेंट — आपके ब्रांडेड डोमेन पर।',
      platformTitle: 'प्लेटफ़ॉर्म',
      platformLinks: ['ट्रैवल मार्केटप्लेस', 'एडमिन पैनल', 'एजेंट पोर्टल', 'एजेंट सबडोमेन'],
      companyTitle: 'कंपनी',
      companyLinks: ['TrigrowTech के बारे में', 'करियर', 'संपर्क'],
      resourcesTitle: 'रिसोर्सेज़',
      resourcesLinks: ['वेटलिस्ट जॉइन करें', 'डेमो बुक करें', 'प्राइवेसी पॉलिसी', 'शर्तें और नियम'],
      copy: '© 2026 TrigrowTech Pvt. Ltd. सर्वाधिकार सुरक्षित।',
      privacy: 'प्राइवेसी पॉलिसी',
      terms: 'शर्तें और नियम',
    },
  },
} as const

export type Translations = typeof translations.en

// Helper to make the type values strings rather than literals
type DeepStringify<T> = {
  [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string
}

export type SafeTranslations = DeepStringify<Translations>
