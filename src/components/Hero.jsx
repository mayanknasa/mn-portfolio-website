import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { STATS, ROLES } from "../data";

function useCount(target, go) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!go) return;
    const dur = 1800, t0 = Date.now();
    const id = setInterval(() => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p >= 1) { setN(target); clearInterval(id); }
    }, 16);
    return () => clearInterval(id);
  }, [go, target]);
  return n;
}

function Stat({ value, suffix, label }) {
  const ref = useRef();
  const [go, setGo] = useState(false);
  const n = useCount(value, go);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true); }, { threshold: .5 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ borderRight: "1px solid rgba(255,255,255,0.06)", padding: "0 32px 0 0" }}>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>
        {n}{suffix}
      </div>
      <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: "12px", color: "#475569", marginTop: "6px", fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}

function RoleCycler() {
  const [i, setI] = useState(0);
  const [vis, setVis] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setVis(false);
      setTimeout(() => { setI(x => (x + 1) % ROLES.length); setVis(true); }, 350);
    }, 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{ opacity: vis ? 1 : 0, transition: "opacity .3s ease", color: "#22d3ee", fontFamily: "'Outfit',sans-serif", fontWeight: 500 }}>
      {ROLES[i]}
    </span>
  );
}

const FV = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: .7, ease: [.22, 1, .36, 1] }
});

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/mayanknasa", Icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/mayanknasa", Icon: FaLinkedin },
  { label: "Email", href: "mailto:mayanknasa4@gmail.com", Icon: HiOutlineMail },
];

function MagneticBtn({ children, href, onClick, style }) {
  const ref = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={style}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px clamp(24px,6vw,80px) 80px", overflow: "hidden" }}>

      {/* Background grid — subtle */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,211,238,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.03) 1px,transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

      {/* Right side large number — decorative */}
      <div style={{ position: "absolute", right: "clamp(20px,5vw,60px)", top: "50%", transform: "translateY(-50%)", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(180px,22vw,320px)", color: "rgba(34,211,238,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none", letterSpacing: "-.04em" }}>
        MN
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", width: "100%" }}>

        {/* Top line */}
        <motion.div {...FV(0)} style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div style={{ width: "32px", height: "1px", background: "#22d3ee" }} />
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: "12px", fontWeight: 600, color: "#22d3ee", textTransform: "uppercase", letterSpacing: ".25em" }}>
            Software Engineer
          </span>
          <span style={{ padding: "3px 10px", borderRadius: "999px", background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)", color: "#4ade80", display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "'Outfit',sans-serif", fontSize: "11px", fontWeight: 600 }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "dotBlink 2s ease-in-out infinite" }} />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...FV(0.1)} style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(54px,8vw,96px)", fontWeight: 800, color: "#ffffff", lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "24px" }}>
          Mayank Nasa
        </motion.h1>

        {/* Sub-headline / Roles */}
        <motion.div {...FV(0.2)} style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(20px,3.5vw,32px)", fontWeight: 700, color: "#94a3b8", letterSpacing: "-0.02em", marginBottom: "32px" }}>
          Specializing in <RoleCycler />
        </motion.div>

        {/* Description */}
        <motion.p {...FV(0.3)} style={{ fontFamily: "'Outfit',sans-serif", fontSize: "clamp(16px,2vw,20px)", color: "#64748b", maxWidth: "640px", lineHeight: 1.7, marginBottom: "48px" }}>
          Software Engineer with 4+ years of experience building high-performance web & mobile applications. Shipped 60+ features for a UAE fashion platform serving <span style={{ color: "#f1f5f9", fontWeight: 600 }}>500K+ active users</span> and saving <span style={{ color: "#f1f5f9", fontWeight: 600 }}>$390K</span> in operational costs.
        </motion.p>

        {/* Stats Section */}
        <motion.div {...FV(0.4)} style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginBottom: "56px" }}>
          {STATS.map((s, index) => (
            <Stat key={s.label} {...s} />
          ))}
        </motion.div>

        {/* CTAs & Socials Group */}
        <motion.div {...FV(0.5)} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px" }}>
          
          {/* View Work CTA (with Magnetic Hover effect) */}
          <MagneticBtn
            href="#projects"
            onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 36px", borderRadius: "12px", background: "linear-gradient(135deg,#22d3ee,#818cf8)", color: "#030712", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 4px 20px rgba(34,211,238,0.2)" }}
          >
            View My Work <span style={{ transition: "transform 0.2s" }} className="arrow">→</span>
          </MagneticBtn>

          {/* Social Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {SOCIAL.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)", transition: "all .3s" }}
                whileHover={{ scale: 1.1, y: -2 }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#22d3ee";
                  e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
                  e.currentTarget.style.background = "rgba(34,211,238,0.06)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "32px", left: "clamp(24px,6vw,80px)", display: "flex", alignItems: "center", gap: "12px", color: "rgba(100,116,139,0.5)" }}>
        <span style={{ fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", fontFamily: "'Outfit',sans-serif", fontWeight: 600 }}>Scroll</span>
        <div style={{ animation: "scrollBounce 1.5s ease-in-out infinite", fontSize: "14px" }}>↓</div>
      </div>

    </section>
  );
}
