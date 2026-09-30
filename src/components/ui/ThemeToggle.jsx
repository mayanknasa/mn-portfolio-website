import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ? stored : prefersDark ? "dark" : "dark"; // dark default
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    if (newTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  };

  const toggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <div
        className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-[6px] border border-[var(--border)] bg-transparent ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-[6px] border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] active:scale-95 ${className}`}
    >
      {theme === "dark" ? (
        <Sun size={15} strokeWidth={1.75} className="text-[var(--text)]" />
      ) : (
        <Moon size={15} strokeWidth={1.75} className="text-[var(--text)]" />
      )}
    </button>
  );
}
