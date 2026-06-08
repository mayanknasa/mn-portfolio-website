import { useEffect, useRef } from "react";

const TECH = [
  "React Native","React.js","TypeScript","Framer Motion","Redux",
  "Node.js","Tailwind CSS","REST APIs","CI/CD","Figma","Vite",
  "MoEngage","AppsFlyer","Cursor AI","Claude","Expo","Git","Xcode",
];

export default function Marquee() {
  const items = [...TECH, ...TECH];
  return (
    <div style={{ overflow:"hidden", padding:"20px 0", borderTop:"1px solid rgba(34,211,238,0.08)", borderBottom:"1px solid rgba(34,211,238,0.08)", background:"rgba(7,15,35,0.4)", backdropFilter:"blur(12px)", position:"relative", zIndex:2 }}>
      {/* Fade edges */}
      <div style={{ position:"absolute", left:0, top:0, bottom:0, width:"120px", background:"linear-gradient(90deg,#030712,transparent)", zIndex:2, pointerEvents:"none" }}/>
      <div style={{ position:"absolute", right:0, top:0, bottom:0, width:"120px", background:"linear-gradient(270deg,#030712,transparent)", zIndex:2, pointerEvents:"none" }}/>

      <div style={{ display:"flex", animation:"marqueeScroll 28s linear infinite", width:"max-content" }}>
        {items.map((t, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:"0", flexShrink:0 }}>
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"13px", color:"rgba(34,211,238,0.55)", whiteSpace:"nowrap", padding:"0 24px", textTransform:"uppercase", letterSpacing:".08em" }}>
              {t}
            </span>
            <span style={{ color:"rgba(129,140,248,0.3)", fontSize:"18px" }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
