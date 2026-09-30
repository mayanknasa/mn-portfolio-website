import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin, Clock } from "lucide-react";
import { PROFILE } from "../../data/profile";
import Container from "../ui/Container";
import Button from "../ui/Button";
import CountUp from "../ui/CountUp";

function formatISTTime() {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const [currentTime, setCurrentTime] = useState(() => formatISTTime());
  const headingRef = useRef(null);
  const letterRefs = useRef([]);

  const nameWords = ["Mayank", "Nasa"];

  // Live IST Clock update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatISTTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Subtle interactive touch: Name letters gently shift weight or color toward accent on cursor proximity
  // Desktop only (pointer: fine), disabled for reduced motion
  useEffect(() => {
    if (shouldReduceMotion) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const RADIUS = 150; // Proximity threshold in pixels

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const headingEl = headingRef.current;
      if (!headingEl) return;

      const headingRect = headingEl.getBoundingClientRect();
      // Fast bounds rejection when cursor is outside heading vicinity
      if (
        mouseX < headingRect.left - RADIUS ||
        mouseX > headingRect.right + RADIUS ||
        mouseY < headingRect.top - RADIUS ||
        mouseY > headingRect.bottom + RADIUS
      ) {
        letterRefs.current.forEach((span) => {
          if (span && span.style.fontWeight !== "300") {
            span.style.fontWeight = "300";
            span.style.color = "";
          }
        });
        return;
      }

      letterRefs.current.forEach((span) => {
        if (!span) return;
        const rect = span.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height / 2;

        const dist = Math.hypot(mouseX - charCenterX, mouseY - charCenterY);

        if (dist < RADIUS) {
          const proximity = 1 - dist / RADIUS;
          // Fluid sine easing
          const factor = Math.sin((proximity * Math.PI) / 2);
          const weight = Math.round(300 + 320 * factor);
          span.style.fontWeight = `${weight}`;
          span.style.color = `color-mix(in srgb, var(--accent) ${Math.round(factor * 100)}%, var(--text))`;
        } else {
          if (span.style.fontWeight !== "300") {
            span.style.fontWeight = "300";
            span.style.color = "";
          }
        }
      });
    };

    const handleMouseLeave = () => {
      letterRefs.current.forEach((span) => {
        if (span) {
          span.style.fontWeight = "300";
          span.style.color = "";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldReduceMotion]);

  const metrics = PROFILE.heroMetrics || [
    { value: "5+", label: "years experience" },
    { value: "60+", label: "features shipped" },
    { value: "500K+", label: "active users" },
    { value: "4.6★", label: "App Store rating" },
  ];

  const tickerItems = [...PROFILE.tickerTech, ...PROFILE.tickerTech];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.querySelector("#projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Staggered masked reveal variants
  const lineRevealVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { y: "105%", opacity: 0 },
        visible: (custom = 0) => ({
          y: "0%",
          opacity: 1,
          transition: {
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
            delay: custom * 0.05,
          },
        }),
      };

  const fadeUpVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: (custom = 0) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1 + custom * 0.05,
          },
        }),
      };

  return (
    <section id="hero" className="relative pt-20 sm:pt-24 lg:pt-28 pb-0 overflow-hidden">
      <Container>
        {/* Main Two-Column Hero Grid: Left Content, Right Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
          {/* Left Column: Dominant Name, Role Line, Subheading, CTAs */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Dominant Name: Mayank Nasa at clamp(3.5rem, 11vw, 10rem) */}
            <div className="overflow-hidden mb-2 sm:mb-3">
              <motion.h1
                ref={headingRef}
                custom={0}
                initial="hidden"
                animate="visible"
                variants={lineRevealVariants}
                className="font-heading text-[clamp(3.5rem,11vw,10rem)] font-light tracking-[-0.04em] text-[var(--text)] leading-[0.92] select-none"
                aria-label="Mayank Nasa"
              >
                {nameWords.map((word, wIdx) => (
                  <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
                    {word.split("").map((char, cIdx) => {
                      const charIdx = wIdx === 0 ? cIdx : nameWords[0].length + cIdx;
                      return (
                        <span
                          key={cIdx}
                          ref={(el) => (letterRefs.current[charIdx] = el)}
                          className="inline-block transition-[font-weight,color] duration-200 ease-out"
                          style={{ fontWeight: 300 }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                ))}
              </motion.h1>
            </div>

            {/* Role line directly beneath it at readable size */}
            <div className="overflow-hidden mb-4 sm:mb-5">
              <motion.p
                custom={1}
                initial="hidden"
                animate="visible"
                variants={lineRevealVariants}
                className="font-heading text-xl sm:text-2xl lg:text-[26px] font-normal tracking-tight text-[var(--accent)]"
              >
                Full Stack & Mobile Engineer
              </motion.p>
            </div>

            {/* Subheading Statement */}
            <div className="overflow-hidden mb-6 sm:mb-8">
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={lineRevealVariants}
                className="font-sans text-[16px] sm:text-lg text-[var(--muted)] font-normal leading-[1.6] max-w-[55ch]"
              >
                {PROFILE.subheading}
              </motion.p>
            </div>

            {/* Two CTAs: View my work & Get in touch */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button
                variant="primary"
                href="#projects"
                onClick={handleScrollToProjects}
                icon={<ArrowDown size={15} />}
                className="font-sans text-[15px] font-medium py-3 px-6"
              >
                {PROFILE.cta.heroAction}
              </Button>
              <Button
                variant="ghost"
                href="#contact"
                icon={<ArrowRight size={15} />}
                className="font-sans text-[15px] font-medium py-3 px-6"
              >
                {PROFILE.cta.contact}
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Focal Portrait + Currently Card */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end justify-center w-full mt-6 lg:mt-0"
          >
            {/* Focal Portrait Wrapper */}
            <div className="w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[340px]">
              {/* Portrait Area with Subtle Offset Outline (strictly no glow) */}
              <div className="relative group">
                {/* Subtle offset hairline outline */}
                <div
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-[16px] border border-[var(--border-strong)] -z-10 pointer-events-none transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5"
                  aria-hidden="true"
                />

                {/* Cropped tall rounded rectangle */}
                <div className="relative rounded-[16px] overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-none">
                  <img
                    src="/mayank.jpg"
                    alt="Mayank Nasa — Full Stack & Mobile Engineer"
                    className="w-full h-auto aspect-[3/4] object-cover object-top grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-500"
                    width="340"
                    height="453"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>

              {/* "Currently" Card below portrait */}
              <div className="mt-4 p-3.5 sm:p-4 rounded-[12px] border border-[var(--border)] bg-[var(--surface)] text-left shadow-none">
                {/* Status row */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[var(--border)]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">Currently</span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
                    </span>
                    <span className="font-sans text-xs font-medium text-[var(--text)]">
                      Available for new roles
                    </span>
                  </div>
                </div>

                {/* Location & Live Clock */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[var(--muted)]">
                    <MapPin size={13} className="text-[var(--accent)] shrink-0" />
                    <span className="font-sans text-[var(--text)]">India</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--muted)] font-mono text-xs">
                    <Clock size={13} className="text-[var(--accent)] shrink-0" />
                    <span className="text-[var(--text)] font-medium">{currentTime}</span>
                    <span className="text-[var(--muted)] text-[10px]">IST</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* 4 Key Metrics in a Single Horizontal Strip Below the Hero */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        className="border-t border-b border-[var(--border)] bg-[var(--surface)]"
      >
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="py-5 sm:py-6 px-4 sm:px-6 flex flex-col justify-between"
              >
                <div className="font-mono text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight text-[var(--text)] mb-1">
                  <CountUp value={item.value} />
                </div>
                <div className="font-sans text-xs sm:text-sm text-[var(--muted)] font-normal">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </motion.div>

      {/* Slow, Subtle Tech Ticker in Mono Text Under the Hero */}
      <div className="bg-[var(--surface)] border-b border-[var(--border)] py-3 overflow-hidden select-none">
        <div
          className="flex whitespace-nowrap will-change-transform"
          style={{ width: "max-content", animation: "marqueeScroll 45s linear infinite" }}
        >
          {tickerItems.map((tech, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-wider text-[var(--muted)]"
            >
              <span>{tech}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
