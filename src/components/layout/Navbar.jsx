import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PROFILE } from "../../data/profile";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Scroll direction listener: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      // Hide only after scrolling past 120px
      if (currentY > lastScrollY.current + 8 && currentY > 120) {
        setHidden(true);
      } else if (currentY < lastScrollY.current - 8) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer for active indicator
  useEffect(() => {
    const sections = [
      { id: "hero", href: "#hero" },
      ...PROFILE.nav
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent background scrolling when mobile menu is open & listen for Escape key
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const navigateTo = (href) => {
    setMobileOpen(false);
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          scrolled || mobileOpen
            ? "bg-[var(--bg)]/95 border-b border-[var(--border)] py-3 backdrop-blur-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <button
            type="button"
            onClick={() => navigateTo("#hero")}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <span className="w-8 h-8 rounded-[6px] border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center font-mono font-medium text-xs text-[var(--text)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors duration-150">
              {PROFILE.monogram}
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-medium text-sm tracking-tight text-[var(--text)]">
                {PROFILE.name}
              </span>
              <span className="font-mono text-[10px] text-[var(--muted)] hidden sm:block uppercase tracking-wider">
                {PROFILE.roleTitle}
              </span>
            </div>
          </button>

          {/* Desktop Navigation with Active Section Indicator */}
          <nav className="hidden md:flex items-center gap-7">
            {PROFILE.nav.map(({ label, href, index }) => {
              const id = href.slice(1);
              const isActive = active === id;
              return (
                <button
                  key={href}
                  type="button"
                  onClick={() => navigateTo(href)}
                  className={`group relative py-1 font-sans text-[14px] flex items-center gap-1.5 transition-colors duration-150 ${
                    isActive
                      ? "text-[var(--text)] font-medium"
                      : "text-[var(--muted)] hover:text-[var(--text)] font-normal"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] transition-colors ${
                      isActive ? "text-[var(--accent)] font-medium" : "text-[var(--faint)] group-hover:text-[var(--muted)]"
                    }`}
                  >
                    {index}
                  </span>
                  <span>{label}</span>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[var(--accent)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Utilities: ThemeToggle + Hire Me button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden sm:inline-flex">
              <Button
                variant="primary"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("#contact");
                }}
                className="text-sm font-sans font-medium py-2 px-4 h-9 min-h-[44px]"
              >
                {PROFILE.cta.hireMe}
              </Button>
            </div>

            {/* Mobile Hamburger Button (>=44px Tap Target) */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-[6px] border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)] transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[var(--bg)] pt-24 pb-8 px-6 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            {/* Nav list */}
            <div className="flex flex-col divide-y divide-[var(--border)] border-t border-[var(--border)]">
              {PROFILE.nav.map(({ label, href, index }, i) => {
                const id = href.slice(1);
                const isActive = active === id;
                return (
                  <motion.button
                    key={href}
                    type="button"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.2 }}
                    onClick={() => navigateTo(href)}
                    className="flex items-center justify-between py-5 text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[var(--accent)]" : "bg-transparent"}`} />
                      <span className="font-heading text-3xl font-light tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                        {label}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {index}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Footer Area: Hire Me CTA, Resume, and Metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="pt-8 border-t border-[var(--border)] flex flex-col gap-4 mt-6"
            >
              <div>
                <Button
                  variant="primary"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("#contact");
                  }}
                  className="w-full font-sans text-sm font-medium py-3 text-center"
                >
                  {PROFILE.cta.hireMe}
                </Button>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] pt-2">
                <span>{PROFILE.location}</span>
                <span>{PROFILE.timezone}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
