export default function Tag({ children, className = "", active = false, ...props }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-[6px] font-mono text-xs tracking-tight transition-colors duration-150 select-none ${
        active
          ? "bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]"
          : "bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
      } ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
