export default function OutlineMarqueeDivider() {
  const phrases = [
    "React Native Architecture",
    "High-Scale Mobile Apps",
    "500K+ Active Users",
    "End-to-End MERN",
    "$390K+ Tooling Savings",
    "AI-Accelerated Velocity",
    "4.6★ App Store Rating",
    "Production Code Audits",
  ];

  const duplicated = [...phrases, ...phrases];

  return (
    <div
      className="w-full overflow-hidden select-none border-t border-b border-[var(--border)] bg-[var(--surface)]/70 py-5 sm:py-6 lg:py-7 backdrop-blur-sm"
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{ width: "max-content", animation: "marqueeScroll 38s linear infinite" }}
      >
        {duplicated.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-6 sm:gap-8 px-6 sm:px-8">
            <span className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight text-outline cursor-default transition-all duration-300">
              {item}
            </span>
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--accent)] shrink-0 opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
