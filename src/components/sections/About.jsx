import { useState } from "react";
import { Info } from "lucide-react";
import { PROFILE } from "../../data/profile";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import CountUp from "../ui/CountUp";

export default function About() {
  const [activeTooltip, setActiveTooltip] = useState(false);

  const capabilities = PROFILE.capabilities || [
    {
      num: "01",
      title: "Mobile apps",
      desc: "Production React Native apps for iOS & Android, offline MMKV client caching, and 4.6★ scale for 500K+ monthly active users.",
    },
    {
      num: "02",
      title: "Web products",
      desc: "High-performance React.js applications, responsive design systems, SEO optimization, and sub-second load times.",
    },
    {
      num: "03",
      title: "Backend and APIs",
      desc: "Node.js and Express RESTful architectures, MongoDB schema design, auth workflows, and production security audits.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-28 lg:py-36 border-b border-[var(--border)]">
      <Container>
        <SectionHeading
          index="01 / ABOUT"
          title="Engineering & Architecture"
          subtitle="Mobile architecture, full stack MERN systems, and AI-accelerated delivery."
          className="mb-14 sm:mb-16 lg:mb-20"
        />

        {/* Narrative & Capabilities Split: Spacing & Dividers instead of boxed cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-24 items-start">
          {/* Left Column: 3-Sentence Core Summary */}
          <div className="lg:col-span-6 xl:col-span-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-3 block">
              Core Background & Focus
            </span>
            <p className="font-sans text-xl sm:text-2xl lg:text-[26px] text-[var(--text)] font-light leading-[1.55] max-w-[55ch]">
              {PROFILE.summary}
            </p>
          </div>

          {/* Right Column: Numbered List of What I Do (Mobile apps, Web products, Backend and APIs) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
            {capabilities.map(({ num, title, desc }) => (
              <div key={title} className="py-6 sm:py-7 flex items-start gap-5 sm:gap-6 group">
                <span className="font-mono text-sm sm:text-base text-[var(--accent)] font-medium shrink-0 pt-0.5">
                  {num}
                </span>
                <div className="flex-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-normal text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {title}
                  </h3>
                  <p className="font-sans text-[15px] sm:text-base text-[var(--muted)] leading-[1.6]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 High-Impact Unique Metrics Strip (Dividers instead of boxed card) */}
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--faint)] mb-4 flex items-center gap-3">
            <span>Verified Operational & Revenue Impact</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="border-t border-b border-[var(--border)] bg-[var(--surface)]/40 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
            {PROFILE.aboutMetrics.map(({ val, label, sub, breakdown }) => (
              <div
                key={label}
                className="py-7 px-6 sm:px-8 flex flex-col justify-between relative group hover:bg-[var(--surface-hover)] transition-colors"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[var(--text)]">
                      <CountUp value={val} />
                    </div>

                    {/* Savings Tooltip trigger */}
                    {breakdown && (
                      <button
                        type="button"
                        onClick={() => setActiveTooltip((prev) => !prev)}
                        onMouseEnter={() => setActiveTooltip(true)}
                        onMouseLeave={() => setActiveTooltip(false)}
                        aria-label="View savings breakdown"
                        className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors p-1"
                      >
                        <Info size={16} />
                      </button>
                    )}
                  </div>

                  <div className="font-sans text-sm sm:text-base text-[var(--text)] font-medium mb-1.5">
                    {label}
                  </div>
                </div>

                <div className="font-sans text-[13px] sm:text-sm text-[var(--muted)] leading-[1.5]">
                  {sub}
                </div>

                {/* Tooltip Popup for $390K+ breakdown */}
                {breakdown && activeTooltip && (
                  <div className="absolute bottom-full left-4 right-4 mb-2 p-4 bg-[var(--bg)] border border-[var(--accent)] rounded-[6px] shadow-lg z-20 font-sans text-xs text-[var(--text)]">
                    <div className="font-mono text-[11px] text-[var(--accent)] font-medium mb-2 uppercase tracking-wider">
                      Savings Breakdown:
                    </div>
                    <ul className="space-y-1.5 text-[var(--muted)] leading-relaxed">
                      {breakdown.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[var(--accent)] shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
