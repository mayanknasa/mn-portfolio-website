import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const S = [
  { cat:"Frontend & Mobile", color:"#22d3ee",
    items:["React.js","React Native","TypeScript","JavaScript","Redux Toolkit","Expo","Framer Motion","Tailwind CSS"] },
  { cat:"Backend & APIs", color:"#818cf8",
    items:["REST APIs","Node.js","API Integration","MoEngage","AppsFlyer","AsyncStorage","MMKV"] },
  { cat:"Dev Tools", color:"#a78bfa",
    items:["Git","Android Studio","Xcode","Postman","Figma","Jira","Vite","CI/CD"] },
  { cat:"AI & Productivity", color:"#34d399",
    items:["Cursor","Claude AI","ChatGPT","Prompt Engineering","AI-assisted Dev"] },
  { cat:"Analytics & Testing", color:"#fb923c",
    items:["Google Analytics","A/B Testing","PageSpeed","SEO","Performance","Web Vitals"] },
];

function useIV() {
  const ref = useRef();
  const [v, setV] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.05 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, v];
}

export default function Skills() {
  const [ref, vis] = useIV();
  return (
    <section id="skills" ref={ref} style={{ padding: "clamp(72px,8vw,100px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{opacity:0,y:20}} animate={vis?{opacity:1,y:0}:{}} transition={{duration:.5}}
          style={{ marginBottom:"48px" }}>
          <div className="sec-num">02 — Skills</div>
          <h2 style={{ fontSize:"clamp(48px,7vw,88px)", lineHeight:.95 }}>Tech<br/>Arsenal.</h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px" }}>
          {S.map(({ cat, color, items }, ci) => (
            <motion.div key={cat}
              initial={{ opacity:0, y:28 }} animate={vis?{opacity:1,y:0}:{}}
              transition={{ delay:ci*.1, duration:.5, ease:[.22,1,.36,1] }}
              style={{ background:"rgba(7,15,35,0.85)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", border:`1px solid ${color}28`, borderRadius:"16px", padding:"24px", transition:"border-color .25s,box-shadow .25s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=color+"60"; e.currentTarget.style.boxShadow=`0 8px 36px ${color}18`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=color+"28"; e.currentTarget.style.boxShadow="none"; }}
            >
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"18px" }}>
                <span style={{ width:"8px", height:"8px", borderRadius:"50%", background:color, flexShrink:0, boxShadow:`0 0 10px ${color}` }}/>
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14px", color:"#f1f5f9" }}>{cat}</span>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                {items.map((skill, si) => (
                  <motion.span key={skill}
                    initial={{ opacity:0, scale:.75 }} animate={vis?{opacity:1,scale:1}:{}}
                    transition={{ delay:ci*.1+si*.04+.2, duration:.28, ease:"backOut" }}
                    style={{ padding:"5px 12px", borderRadius:"8px", fontSize:"12px", fontFamily:"'Outfit',sans-serif", fontWeight:500, background:color+"18", color, border:`1px solid ${color}28`, display:"inline-block" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
