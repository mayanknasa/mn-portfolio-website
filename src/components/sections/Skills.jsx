import { SKILLS_GROUPS } from "../../data/skills";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 lg:py-36 border-b border-[var(--border)]">
      <Container>
        <SectionHeading
          index="04 / SKILLS"
          title="Technical Skills"
          subtitle="Grouped proficiencies across languages, mobile frameworks, web systems, and AI tools."
          className="mb-14 sm:mb-16 lg:mb-20"
        />

        {/* Compact Grouped Layout: Balanced 2-Column Grid with No Empty Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 lg:gap-y-12">
          {SKILLS_GROUPS.map(({ cat, count, items }) => (
            <div key={cat} className="flex flex-col">
              {/* Group Heading + Count */}
              <div className="flex items-baseline justify-between pb-3 mb-4 border-b border-[var(--border)]">
                <h3 className="font-heading text-lg sm:text-xl font-normal text-[var(--text)]">
                  {cat}
                </h3>
                <span className="font-mono text-xs text-[var(--accent)] font-medium">
                  {count}
                </span>
              </div>

              {/* Wrapped Inline List of Skills */}
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1.5 rounded-[6px] bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] font-sans text-[13px] sm:text-[14px] font-normal transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
