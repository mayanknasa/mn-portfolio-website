import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function useIV() {
  const ref = useRef(); const [v, setV] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, v];
}

const GH = { fontFamily:"'Syne',sans-serif", fontWeight:800, background:"linear-gradient(135deg,#22d3ee,#818cf8,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" };
const GL = (c="#22d3ee") => ({ background:"rgba(7,15,35,0.85)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", border:`1px solid ${c}22`, borderRadius:"18px", transition:"border-color .25s,box-shadow .25s" });

const CARDS = [
  { val:"60+",   label:"Features Shipped",   color:"#ffffff", sub:"At 6thStreet.com"         },
  { val:"500K+", label:"Active Users",        color:"#22d3ee", sub:"Across 6 GCC countries"   },
  { val:"4.6★",  label:"App Store Rating",    color:"#ffffff", sub:"iOS & Android"             },
  { val:"$390K", label:"Saved Annually",      color:"#22d3ee", sub:"Through in-house tooling"  },
  { val:"4+",    label:"Years Experience",    color:"#ffffff", sub:"React Native & React.js"   },
  { val:"18%",   label:"CVR Uplift",          color:"#22d3ee", sub:"Via AI Shopping Chatbot"   },
];

export default function About() {
  const [ref, vis] = useIV();
  const A = (i) => ({ initial:{opacity:0,y:24}, animate:vis?{opacity:1,y:0}:{}, transition:{delay:i*.08,duration:.6,ease:[.22,1,.36,1]} });

  return (
    <section id="about" ref={ref} style={{ padding: "clamp(72px,8vw,100px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto" }}>

        {/* Header */}
        <motion.div {...A(0)} className="sec-header">
          <div className="sec-num">01 — About</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"40px", alignItems:"end" }}>
            <h2 style={{ fontSize:"clamp(48px,7vw,88px)", lineHeight:.95, margin:0 }}>
              About<br/>Me.
            </h2>
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(14px,1.6vw,16px)", color:"#64748b", lineHeight:1.85, margin:0 }}>
              I'm a <span style={{color:"#22d3ee",fontWeight:600}}>Software Engineer</span> with <span style={{color:"#f1f5f9",fontWeight:600}}>4+ years</span> shipping production React Native & React.js at scale. My time at <span style={{color:"#f1f5f9",fontWeight:700}}>6thStreet.com</span> — UAE's top-10 fashion platform — taught me what real scale looks like.
            </p>
          </div>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1px", marginBottom:"40px", border:"1px solid rgba(255,255,255,0.06)", borderRadius:"20px", overflow:"hidden" }}>
          {CARDS.map(({ val, label, color, sub }, i) => (
            <motion.div key={label} {...A(i * 0.05 + 0.2)}
              style={{ padding:"32px 28px", background:"rgba(7,15,35,0.9)", cursor:"default", transition:"background .25s", borderRight: i%3!==2 ? "1px solid rgba(255,255,255,0.06)" : "none", borderBottom: i<3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(34,211,238,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(7,15,35,0.9)"; }}
            >
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(32px,4vw,48px)", color, lineHeight:1, marginBottom:"10px", letterSpacing:"-.02em" }}>
                {val}
              </div>
              <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:"14px", color:"#f1f5f9", fontWeight:600, marginBottom:"4px" }}>
                {label}
              </div>
              <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:"12px", color:"#475569" }}>
                {sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row: bio + traits */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"12px" }}>
          {/* Bio card — spans 1 col */}
          <motion.div {...A(0.5)} style={{ ...GL(), padding:"28px", gridColumn:"span 1" }}>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14px", color:"#f1f5f9", marginBottom:"12px" }}>My Approach</div>
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", color:"#64748b", lineHeight:1.8 }}>
              I combine <span style={{ color:"#a78bfa" }}>AI-assisted development</span> with deep frontend expertise. Every feature I ship traces back to a measurable metric.
            </p>
          </motion.div>

          {[
            { icon:"⚡", title:"Technical", text:"Production-grade React Native & React.js at scale.", color:"#22d3ee" },
            { icon:"🎯", title:"Impact First", text:"18% CVR uplift. $390K saved. Numbers over aesthetics.", color:"#818cf8" },
          ].map(({ icon, title, text, color }, i) => (
            <motion.div key={title} {...A(0.6 + i * 0.1)}
              style={{ ...GL(color), padding:"28px", display:"flex", flexDirection:"column", gap:"10px" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=color+"45"; e.currentTarget.style.boxShadow=`0 8px 32px ${color}14`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=color+"22"; e.currentTarget.style.boxShadow="none"; }}
            >
              <span style={{ fontSize:"28px" }}>{icon}</span>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"14px", color:"#f1f5f9" }}>{title}</div>
              <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", color:"#64748b", lineHeight:1.7 }}>{text}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
