import IMG1 from "../assets/6thstreet.webp";
import IMG2 from "../assets/6thstreetmobileapp.webp";
import IMG3 from "../assets/Crocs.webp";
import IMG4 from "../assets/Dunelondon.webp";
import IMG5 from "../assets/Rituals.webp";
import IMG6 from "../assets/Brainbooster.webp";
import IMG7 from "../assets/Dollardoge.webp";
import IMG8 from "../assets/Basesheba.webp";
import IMG9 from "../assets/Weddinghouse.webp";
import IMG10 from "../assets/Copyme.webp";
import IMG11 from "../assets/Levelup.webp";

const IMG12 = "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=400&auto=format&fit=crop";

export const PROJECT_FILTERS = ["ALL", "MOBILE", "WEB", "EXTENSION", "CONSULTING"];

export const FEATURED_PROJECTS = [
  {
    id: "nofeepe",
    title: "noFeePe",
    subtitle: "Zero-MDR Smart UPI Payment Utility",
    pitch: "React Native Android payment app that splits bills above ₹1,999 into micro-installments to eliminate merchant MDR fees.",
    role: "Sole Creator & Mobile Architect",
    year: "2025",
    cat: "MOBILE",
    tags: ["React Native", "TypeScript", "Android Intent", "VisionCamera", "Zero-MDR"],
    github: "https://github.com/mayanknasa/noFeePe",
    link: "https://github.com/mayanknasa/noFeePe",
    linkLabel: "View on GitHub",
    points: [
      {
        title: "Instant QR Scanning & Threshold Detection",
        desc: "Scans standard UPI QR codes; automatically activates the Zero-MDR split engine when a bill exceeds the ₹1,999.00 limit."
      },
      {
        title: "MDR-Capped Micro-Installment Splitting",
        desc: "Divides large totals into legs capped strictly at ₹1,999.00 each, tracking amount paid vs remaining and legs completed in real time."
      },
      {
        title: "Native UPI Intent Hand-Off",
        desc: "Dispatches direct Android upi://pay deep intents to installed apps (GPay, PhonePe, Paytm, CRED) and reconciles completion."
      }
    ],
    highlights: [
      "Scan UPI QR codes, enter amount, and choose 'Pay Direct' or 'Split & Pay'",
      "Split & Pay activates for bills > ₹1,999, capping each leg strictly at ₹1,999.00 to avoid MDR",
      "Real-time visual progress tracker showing amount paid vs remaining and legs completed",
      "Native hand-off to installed UPI apps (GPay, PhonePe, Paytm, CRED) via Android upi://pay intent"
    ]
  },
  {
    id: "cleargram",
    title: "Cleargram",
    subtitle: "Instagram Follower Manager Extension",
    pitch: "Sleek, secure Firefox browser extension to audit non-followers, manage ghost accounts, and clean following lists with local privacy.",
    role: "Extension Developer & Publisher",
    year: "2024",
    cat: "EXTENSION",
    tags: ["Firefox Add-on", "WebExtensions API", "JavaScript", "DOM Automation", "Privacy"],
    addonUrl: "https://addons.mozilla.org/en-US/firefox/addon/cleargram/",
    link: "https://addons.mozilla.org/en-US/firefox/addon/cleargram/",
    linkLabel: "Get add-on",
    points: [
      {
        title: "Verified Firefox AMO Publication",
        desc: "Reviewed, signed, and published on the official Mozilla Add-ons (AMO) store with automatic update delivery."
      },
      {
        title: "Instant Non-Follower & Ghost Audit",
        desc: "Inspects follower vs. following relationships directly in the browser DOM to isolate unfollowers without API limits."
      },
      {
        title: "100% Client-Side Privacy & Zero Tracking",
        desc: "Operates entirely in local browser memory via WebExtensions APIs with zero credential scraping, telemetry, or server storage."
      }
    ],
    highlights: [
      "Published and verified on official Mozilla Add-ons (AMO) store",
      "Accurately lists accounts not following you back on Instagram",
      "Clean queue management for removing ghost followers and bulk unfollowing",
      "100% client-side execution with zero credential scraping or external tracking"
    ]
  }
];

export const PROJECT_INDEX = [
  {
    id: "nofeepe",
    title: "noFeePe",
    pitch: "Android UPI payment utility with automated micro-installment splitting above ₹1,999 to eliminate merchant MDR fees.",
    role: "Sole Creator & Mobile Architect",
    year: "2025",
    cat: "MOBILE",
    tags: ["React Native", "TypeScript", "Android Intent", "Zero-MDR"],
    link: "https://github.com/mayanknasa/noFeePe",
    linkLabel: "GitHub Repo",
    metric: "Zero-MDR Capping",
    image: null,
    isFeatured: true
  },
  {
    id: "cleargram",
    title: "Cleargram",
    pitch: "Firefox browser extension to list unfollowers, remove ghost followers, and clear following lists on Instagram.",
    role: "Extension Developer & Publisher",
    year: "2024",
    cat: "EXTENSION",
    tags: ["Firefox Add-on", "WebExtensions", "JavaScript", "AMO"],
    link: "https://addons.mozilla.org/en-US/firefox/addon/cleargram/",
    linkLabel: "Mozilla Add-on",
    metric: "Published on AMO",
    image: null,
    isFeatured: true
  },
  {
    id: "ai-chatbot",
    title: "AI Shopping Chatbot",
    pitch: "Conversational retail assistant for iOS and Android with NLP search, personalized recommendations, and real-time order support.",
    role: "Lead Mobile Engineer",
    year: "2024",
    cat: "MOBILE",
    tags: ["React Native", "NLP Search", "AI Chatbot", "iOS", "Android"],
    link: "https://apps.apple.com/us/app/6thstreet-com/id1370217070",
    linkLabel: "App Store (4.6★)",
    metric: "18% Conversion Uplift",
    image: IMG2
  },
  {
    id: "quick-delivery",
    title: "Quick Delivery Service",
    pitch: "Real-time quick-commerce fulfillment infrastructure deployed across 6 GCC nations in under 60 days.",
    role: "Frontend Lead",
    year: "2023",
    cat: "MOBILE",
    tags: ["React Native", "React.js", "Quick Commerce", "REST APIs"],
    link: "https://www.6thstreet.com",
    linkLabel: "6thStreet Platform",
    metric: "6 GCC Nations",
    image: IMG1
  },
  {
    id: "aivi-promise",
    title: "AIVI Promise",
    pitch: "Automated price-matching engine granting instant refunds for verified lower prices, lifting feature conversion to 32.5%.",
    role: "Software Engineer",
    year: "2023",
    cat: "MOBILE",
    tags: ["React Native", "Price Engine", "Fintech", "Redux"],
    link: "https://apps.apple.com/us/app/6thstreet-com/id1370217070",
    linkLabel: "App Store (4.6★)",
    metric: "32.5% CVR",
    image: IMG2
  },
  {
    id: "shop-the-look",
    title: "Shop the Look",
    pitch: "Curated multi-item purchasing feature allowing shoppers to buy complete outfits with a single tap, increasing AOV by 12%.",
    role: "Software Engineer",
    year: "2024",
    cat: "MOBILE",
    tags: ["React Native", "Outfit Bundles", "E-Commerce", "Checkout Flow"],
    link: "https://apps.apple.com/us/app/6thstreet-com/id1370217070",
    linkLabel: "App Store (4.6★)",
    metric: "+12% AOV Uplift",
    image: IMG2
  },
  {
    id: "history-widget",
    title: "Recently Viewed Widget (MMKV)",
    pitch: "In-house MMKV-cached native history widget replacing expensive third-party SaaS tool to save $220K/year with offline access.",
    role: "Software Engineer",
    year: "2023",
    cat: "MOBILE",
    tags: ["React Native", "MMKV Storage", "Offline Caching", "$220K Saved"],
    link: "https://apps.apple.com/us/app/6thstreet-com/id1370217070",
    linkLabel: "Production Widget",
    metric: "$220K/yr Saved",
    image: IMG1
  },
  {
    id: "automation-tooling",
    title: "Automation Tooling",
    pitch: "Automated Magento campaign scheduling and in-house banner generation tool eliminating $170K/year in manual deployment overhead.",
    role: "Software Engineer",
    year: "2024",
    cat: "WEB",
    tags: ["React.js", "Magento Automation", "Internal Tooling", "$170K Saved"],
    link: "https://www.6thstreet.com",
    linkLabel: "Internal Systems",
    metric: "$170K/yr Saved",
    image: IMG4
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    pitch: "Comprehensive storefront remediation lifting PageSpeed Insights score to 94% through JS/CSS optimization, asset compression, and lazy loading.",
    role: "Technical Intern → Engineer",
    year: "2022",
    cat: "WEB",
    tags: ["React.js", "PageSpeed 94%", "Web Vitals", "SEO"],
    link: "https://www.6thstreet.com",
    linkLabel: "Live Storefront",
    metric: "94% PageSpeed Score",
    image: IMG3
  },
  {
    id: "medira-audit",
    title: "MEDIRA Security & UX Audit",
    pitch: "Comprehensive security architecture and UX code review for an AI-based healthcare platform, defining engineering roadmap.",
    role: "Technical Consultant",
    year: "2026",
    cat: "CONSULTING",
    tags: ["Security Review", "UX Audit", "Healthcare AI", "Code Review"],
    link: "#contact",
    linkLabel: "Consulting Engagement",
    metric: "Audit Report Delivered",
    image: null
  },
  {
    id: "lando-builder",
    title: "Lando Website Builder",
    pitch: "Wizard-based dynamic website builder, owning the frontend product architecture from concept to working build.",
    role: "Frontend Owner & Consultant",
    year: "2026",
    cat: "WEB",
    secondaryCat: "CONSULTING",
    tags: ["React.js", "Wizard UI", "Form Engine", "Full Frontend Ownership"],
    link: "#contact",
    linkLabel: "Consulting Engagement",
    metric: "End-to-End Ownership",
    image: null
  },
  {
    id: "reach-resume",
    title: "Reach Resume Product Audit",
    pitch: "End-to-end evaluation of AI resume tailoring platform across website performance, Chrome extension UI, API stability, and SEO.",
    role: "Technical Consultant",
    year: "2026",
    cat: "CONSULTING",
    secondaryCat: "EXTENSION",
    tags: ["Extension UI", "API Stability", "Session Handling", "SEO Audit"],
    link: "#contact",
    linkLabel: "Consulting Engagement",
    metric: "Full Product Audit",
    image: null
  }
];

export const LIVE_PROJECTS_DATA = [
  {
    id: 1,
    title: "AIVI / 6thStreet Web",
    desc: "UAE's top-5 fashion e-commerce platform. Shipped 60+ features and 94% PageSpeed.",
    demo: "https://www.6thstreet.com",
    cat: "WEB",
    image: IMG1,
    tech: ["React.js", "Redux", "Tailwind CSS", "REST APIs"]
  },
  {
    id: 2,
    title: "AIVI / 6thStreet Mobile App",
    desc: "React Native app serving 500K+ active users across 6 GCC countries. 4.6★ App Store.",
    demo: "https://apps.apple.com/us/app/6thstreet-com/id1370217070",
    cat: "MOBILE",
    image: IMG2,
    tech: ["React Native", "MMKV", "Redux Toolkit", "iOS & Android"]
  },
  {
    id: 3,
    title: "Crocs Middle East",
    desc: "Regional localized e-commerce storefront for Crocs Gulf.",
    demo: "https://en-ae.crocsgulf.com",
    cat: "WEB",
    image: IMG3,
    tech: ["React.js", "E-Commerce", "Localization", "CSS Modules"]
  },
  {
    id: 4,
    title: "Dune London ME",
    desc: "Footwear & accessories digital flagship for Dune London Middle East.",
    demo: "https://en.dunelondon.ae",
    cat: "WEB",
    image: IMG4,
    tech: ["React.js", "Headless Storefront", "Performance", "REST APIs"]
  },
  {
    id: 5,
    title: "Rituals Cosmetics ME",
    desc: "Luxury personal care and cosmetics storefront for the GCC market.",
    demo: "https://en-ae.rituals.com",
    cat: "WEB",
    image: IMG5,
    tech: ["React.js", "Modern UI", "GCC Storefront", "Vite"]
  },
  {
    id: 6,
    title: "Brain Booster Quiz",
    desc: "Fast, accessible interactive quiz platform with real-time score progression.",
    demo: "https://brainbooster.netlify.app",
    cat: "WEB",
    image: IMG6,
    tech: ["JavaScript", "HTML5", "CSS3", "Netlify"]
  },
  {
    id: 7,
    title: "Dollar Doge",
    desc: "Algorithmic crypto tracking experiment and web dashboard.",
    demo: "https://dollardoge.netlify.app",
    cat: "WEB",
    image: IMG7,
    tech: ["React.js", "Crypto APIs", "Tailwind CSS", "Netlify"]
  },
  {
    id: 8,
    title: "Base Sheba",
    desc: "Brand presence and modern portfolio website for Base Sheba.",
    demo: "https://www.basesheba.com",
    cat: "WEB",
    image: IMG8,
    tech: ["React.js", "Tailwind CSS", "Responsive Design"]
  },
  {
    id: 9,
    title: "Wedding House Design",
    desc: "Showcase platform and booking experience for bespoke event planning.",
    demo: "https://weddinghouse.netlify.app",
    cat: "WEB",
    image: IMG9,
    tech: ["React.js", "Framer Motion", "UI/UX Showcase"]
  },
  {
    id: 10,
    title: "Copy Me",
    desc: "High-utility copy-to-clipboard productivity tool built with clean keyboard navigation.",
    demo: "https://copy-me.netlify.app",
    cat: "WEB",
    image: IMG10,
    tech: ["JavaScript", "Clipboard API", "Keyboard Navigation"]
  },
  {
    id: 11,
    title: "LevelUp Gaming",
    desc: "Esports hub and booking platform for LevelUp Sonipat.",
    demo: "https://levelup-sonipat.netlify.app",
    cat: "WEB",
    image: IMG11,
    tech: ["React.js", "Tailwind CSS", "Booking UI"]
  },
  {
    id: 12,
    title: "Open Source & Experiments",
    desc: "Additional tools, scripts, and open-source contributions on GitHub.",
    demo: "https://github.com/mayanknasa",
    cat: "WEB",
    image: IMG12,
    tech: ["Node.js", "TypeScript", "Python", "GitHub"]
  }
];

// Backward-compatible alias
export const PROJECTS_DATA = PROJECT_INDEX;
