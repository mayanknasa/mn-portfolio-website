export const NAV=[
  {label:"Home",href:"#hero"},{label:"About",href:"#about"},
  {label:"Skills",href:"#skills"},{label:"Experience",href:"#experience"},
  {label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"},
];
export const STATS=[
  {value:4,suffix:"+",label:"Years Exp"},
  {value:60,suffix:"+",label:"Features"},
  {value:500,suffix:"K+",label:"Users"},
  {value:390,suffix:"K+",label:"$ Saved"},
];
export const ROLES=["Software Engineer","React Native Developer","Frontend Specialist","Mobile App Developer"];
export const SKILLS=[
  {cat:"Frontend & Mobile",color:"#22d3ee",items:["React.js","React Native","TypeScript","JavaScript","Redux Toolkit","Expo","Framer Motion","Tailwind CSS"]},
  {cat:"Backend & APIs",color:"#818cf8",items:["REST APIs","Node.js","API Integration","MoEngage","AppsFlyer","AsyncStorage","MMKV"]},
  {cat:"Dev Tools",color:"#a78bfa",items:["Git","Android Studio","Xcode","Postman","Figma","Jira","Vite","CI/CD"]},
  {cat:"AI & Productivity",color:"#34d399",items:["Cursor","Claude AI","ChatGPT","Prompt Engineering","AI-assisted Dev"]},
  {cat:"Analytics & Testing",color:"#fb923c",items:["Google Analytics","A/B Testing","PageSpeed","SEO","Performance","Web Vitals"]},
];
export const EXP=[
  {role:"Software Engineer",badge:"Full-Time",company:"6thstreet.com",sub:"Apparel Group · UAE",period:"Sep 2022 — Mar 2026",loc:"Bangalore, India",color:"#22d3ee",
   metrics:["60+ Features","500K+ Users","$220K Saved","18% CVR ↑","35% API ↓"],
   highlights:[
     "Shipped 60+ features for React Native app serving 500K+ users across 6 GCC countries (4.6 ★ App Store)",
     "Architected Quick Delivery Service — real-time fulfilment across 6 countries in under 60 days",
     "Built AI Shopping Chatbot (NLP + recommendations) → 18% conversion uplift",
     "Launched 6thStreet Promise price-match feature → 32.5% CVR",
     "Replaced third-party widget with in-house solution → $220K/year saved",
     "Reduced API calls 35% via local storage + client-side caching",
     "Drove 150% user engagement increase via MoEngage + AppsFlyer",
   ],
   tags:["React Native","React.js","TypeScript","Redux","CI/CD"]},
  {role:"Technical Intern",badge:"Internship",company:"6thstreet.com",sub:"Apparel Group · UAE",period:"Feb 2022 — Aug 2022",loc:"Bangalore, India",color:"#818cf8",
   metrics:["94% PageSpeed","30% Perf ↑"],
   highlights:[
     "Boosted PageSpeed to 94% via JS/CSS minification, image optimization, lazy loading",
     "Delivered REST API integrations for product listing and cart modules",
     "30% uplift in performance via SEO updates and critical bug fixes",
   ],
   tags:["React.js","SEO","Performance","REST APIs"]},
  {role:"B.Tech Mechanical Engg",badge:"Education",company:"DCRUST Murthal",sub:"AI/ML Spec · First Division",period:"Aug 2018 — May 2022",loc:"Haryana, India",color:"#a78bfa",
   metrics:["8.63 CGPA","First Division"],
   highlights:["First Division with Honors — 8.63/10 CGPA","Specialization in AI & Machine Learning"],
   tags:["AI/ML","Engineering"]},
];
export const PROJECTS=[
  {title:"AI Shopping Chatbot",desc:"NLP chatbot with recommendations, order support, personalized search. 18% conversion uplift across 500K+ users.",tags:["React Native","NLP","AI"],cat:"AI",metric:"18% CVR ↑",featured:true,color:"#34d399"},
  {title:"Quick Delivery Service",desc:"Real-time order fulfilment across 6 GCC countries. Zero to production in under 60 days.",tags:["React Native","React.js","APIs"],cat:"Mobile",metric:"6 Countries",featured:true,color:"#22d3ee"},
  {title:"6thStreet App",desc:"Fashion e-commerce app, 500K+ active users, 4.6 App Store rating. Led 60+ feature deliveries.",tags:["React Native","Redux","iOS","Android"],cat:"Mobile",metric:"500K+ Users",featured:true,color:"#818cf8"},
  {title:"6thStreet Promise",desc:"Price-match refund feature with 32.5% CVR. Complex pricing logic, seamless UX.",tags:["React Native","Product"],cat:"Mobile",metric:"32.5% CVR",featured:false,color:"#22d3ee"},
  {title:"Shop the Look",desc:"Image-based product discovery — search by visual similarity across the catalogue.",tags:["React Native","Computer Vision"],cat:"Mobile",metric:"Visual Search",featured:false,color:"#a78bfa"},
  {title:"Recently Viewed Widget",desc:"In-house RN widget replacing third-party. Built with MMKV + caching. Saved $220K/year.",tags:["React Native","MMKV"],cat:"Mobile",metric:"$220K Saved",featured:false,color:"#22d3ee"},
  {title:"Performance Optimization",desc:"React.js storefront optimized to 94% PageSpeed via minification, lazy loading, compression.",tags:["React.js","SEO","Web Vitals"],cat:"Web",metric:"94% PageSpeed",featured:false,color:"#fb923c"},
  {title:"Automation Tooling",desc:"In-house banner tooling saving $170K/year in licensing and manual deployment costs.",tags:["Automation","React.js"],cat:"Web",metric:"$170K Saved",featured:false,color:"#818cf8"},
];

export const LIVE_PROJECTS = [
  { id:1,  title:"6thStreet",              desc:"UAE's top-10 fashion e-commerce platform. Led 60+ features.",                 demo:"https://www.6thstreet.com",                                               cat:"Web"    },
  { id:2,  title:"6thStreet Mobile App",   desc:"React Native app, 500K+ users, 6 GCC countries. 4.6 ★ App Store.",           demo:"https://apps.apple.com/us/app/6thstreet-com/id1370217070",                cat:"Mobile" },
  { id:3,  title:"Crocs Middle East",      desc:"Regional e-commerce storefront for Crocs Gulf.",                              demo:"https://en-ae.crocsgulf.com",                                             cat:"Web"    },
  { id:4,  title:"Dune London ME",         desc:"Dune London Middle East — fashion retail web platform.",                      demo:"https://en.dunelondon.ae",                                                cat:"Web"    },
  { id:5,  title:"Rituals Middle East",    desc:"Rituals cosmetics regional storefront for the GCC market.",                   demo:"https://en-ae.rituals.com",                                               cat:"Web"    },
  { id:6,  title:"Brain Booster Quiz",     desc:"Interactive quiz app with multiple categories and score tracking.",           demo:"https://brainbooster.netlify.app",                                        cat:"Web"    },
  { id:7,  title:"Dollar Doge",            desc:"Crypto-themed web app built for fun and learning.",                          demo:"https://dollardoge.netlify.app",                                          cat:"Web"    },
  { id:8,  title:"Base Sheba",             desc:"Brand website for Base Sheba.",                                              demo:"https://www.basesheba.com",                                               cat:"Web"    },
  { id:9,  title:"Wedding House Design",   desc:"Beautiful wedding planning and showcase website.",                            demo:"https://weddinghouse.netlify.app",                                        cat:"Web"    },
  { id:10, title:"Copy Me",                desc:"Clean copy-to-clipboard utility web app.",                                   demo:"https://copy-me.netlify.app",                                             cat:"Web"    },
  { id:11, title:"LevelUp Gaming",         desc:"Gaming hub website for LevelUp Sonipat.",                                    demo:"https://levelup-sonipat.netlify.app",                                     cat:"Web"    },
  { id:12, title:"Many More...",           desc:"More projects on GitHub — open source tools, experiments & side projects.",  demo:"https://github.com/mayanknasa",                                           cat:"Web"    },
];
