import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EXPERIENCE_DATA } from "../../data/experience";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  const [expandedRoles, setExpandedRoles] = useState({});

  const toggleExpand = (idx) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section id="experience" className="py-24 sm:py-28 lg:py-36 border-b border-[var(--border)] relative">
      <Container>
        <SectionHeading
          index="02 / EXPERIENCE"
          title="Track Record"
          subtitle="Shipping at consumer scale across the GCC region, independent product architecture, and code audits."
          className="mb-14 sm:mb-16 lg:mb-20"
        />

        {/* 2-Column Experience Layout with Sticky Left Column (No Boxed Cards) */}
        <div className="divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
          {EXPERIENCE_DATA.map((item, idx) => {
            const isExpanded = Boolean(expandedRoles[idx]);
            const primaryBullets = item.highlights.slice(0, 3);
            const remainingBullets = item.highlights.slice(3);
            const hasMore = remainingBullets.length > 0;

            return (
              <div
                key={item.role + item.period}
                className="py-12 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
              >
                {/* Left Column: Sticky Company, Role, Badge & Dates */}
                <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-28 self-start">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-2 block">
                    {item.badge} · {item.loc}
                  </span>

                  <h3 className="font-heading text-2xl sm:text-3xl font-normal tracking-tight text-[var(--text)] mb-1">
                    {item.company}
                  </h3>

                  <p className="font-sans text-base sm:text-lg text-[var(--text)] font-medium">
                    {item.role}
                  </p>

                  {item.sub && (
                    <p className="font-sans text-sm text-[var(--muted)] mt-0.5">
                      {item.sub}
                    </p>
                  )}

                  <div className="font-mono text-xs text-[var(--faint)] mt-3">
                    {item.period}
                  </div>

                  {/* Highlight Metrics Chips */}
                  {item.metrics && item.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {item.metrics.slice(0, 4).map((metric) => (
                        <span
                          key={metric}
                          className="px-2 py-0.5 rounded-[4px] bg-[var(--surface)] border border-[var(--border)] font-mono text-[11px] text-[var(--muted)]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column: Strongest 3-4 Bullets, Expander, & Small Tech Stack Line */}
                <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between">
                  {/* Bullets List */}
                  <ul className="space-y-4">
                    {primaryBullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3.5 font-sans text-[15px] sm:text-base md:text-[17px] text-[var(--muted)] leading-[1.6] max-w-[65ch]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expanded Bullets */}
                  <AnimatePresence>
                    {isExpanded && hasMore && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-4 mt-4 overflow-hidden"
                      >
                        {remainingBullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3.5 font-sans text-[15px] sm:text-base md:text-[17px] text-[var(--muted)] leading-[1.6] max-w-[65ch]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Show All / Show Less Expander */}
                  {hasMore && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => toggleExpand(idx)}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent)] hover:underline py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
                      >
                        <span>
                          {isExpanded
                            ? "Show fewer highlights"
                            : `Show all ${item.highlights.length} achievements (+${remainingBullets.length} more)`}
                        </span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>
                  )}

                  {/* Single Small Tech Tags Line */}
                  <div className="font-mono text-xs text-[var(--muted)] mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-2 flex-wrap">
                    <span className="text-[var(--faint)] uppercase tracking-wider text-[10px] font-medium shrink-0">
                      Stack:
                    </span>
                    <span className="text-[var(--text)]">
                      {item.tags.join(" · ")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
