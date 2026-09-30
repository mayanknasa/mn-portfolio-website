import { MARQUEE_TECH } from "../../data/skills";

export default function Marquee() {
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <div className="border-b border-[var(--border)] bg-[var(--surface)] py-3 overflow-hidden select-none">
      <div className="flex animation-marquee whitespace-nowrap will-change-transform" style={{ width: "max-content", animation: "marqueeScroll 35s linear infinite" }}>
        {items.map((tech, i) => (
          <div key={i} className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
            <span>{tech}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
