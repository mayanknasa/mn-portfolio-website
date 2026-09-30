import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { PROFILE } from "../../data/profile";
import Container from "../ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "GitHub", href: PROFILE.contactDetails.github, Icon: FaGithub },
    { label: "LinkedIn", href: PROFILE.contactDetails.linkedin, Icon: FaLinkedin },
    { label: "Email", href: `mailto:${PROFILE.contactDetails.email}`, Icon: Mail },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-0 py-10 sm:py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
          {/* Identity & Year */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-heading text-lg font-normal text-[var(--text)] tracking-tight">
              {PROFILE.name}
            </span>
            <span className="hidden sm:inline text-[var(--border-strong)]">·</span>
            <span className="font-mono text-xs text-[var(--muted)]">
              © {currentYear} All rights reserved
            </span>
          </div>

          {/* Three Links: GitHub, LinkedIn, Email */}
          <nav className="flex items-center gap-6 sm:gap-8" aria-label="Footer links">
            {footerLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="font-sans text-sm text-[var(--muted)] hover:text-[var(--accent)] flex items-center gap-2 transition-colors duration-150 py-1 link-draw focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
              >
                <Icon size={14} className="shrink-0" />
                <span className="font-medium">{label}</span>
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <div>
            <button
              type="button"
              onClick={handleScrollTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[6px] border border-[var(--border)] bg-[var(--bg)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--accent)] transition-colors duration-150 font-mono text-xs font-medium min-h-[44px] cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
