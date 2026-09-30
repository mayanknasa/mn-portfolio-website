import { ArrowLeft, Home, ArrowUpRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import Card from "./Card";

export default function NotFound({ onGoHome }) {
  const handleHomeClick = (e) => {
    e?.preventDefault();
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col justify-between py-12 selection:bg-[var(--accent)] selection:text-white">
      <div className="film-grain" aria-hidden="true" />

      {/* Header Landmark */}
      <header>
        <Container>
        <div className="flex items-center justify-between pb-6 border-b border-[var(--border)]">
          <button
            type="button"
            onClick={handleHomeClick}
            className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[6px]"
          >
            <span className="w-8 h-8 rounded-[6px] border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center font-mono font-medium text-xs text-[var(--text)]">
              MN
            </span>
            <span className="font-heading font-medium text-sm tracking-tight text-[var(--text)]">
              Mayank Nasa
            </span>
          </button>

          <span className="font-mono text-xs text-[var(--accent)]">
            SYSTEM STATUS: 404
          </span>
        </div>
      </Container>
    </header>

    {/* Center 404 Content */}
    <main className="my-auto py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>ERROR 404 · ROUTE NOT FOUND</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[var(--text)] leading-[1.03] mb-6">
            Endpoint not located.
          </h1>

          <p className="font-sans text-[17px] sm:text-lg text-[var(--muted)] leading-[1.6] max-w-[65ch] mb-10">
            The requested URI does not map to any active production feature, route, or editorial asset.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Button
              variant="primary"
              onClick={handleHomeClick}
              icon={<Home size={15} />}
              iconPosition="left"
              className="font-sans text-sm font-medium py-3 px-6"
            >
              Return to Homepage
            </Button>
            <Button
              variant="ghost"
              href="/#contact"
              onClick={() => {
                window.location.href = "/#contact";
              }}
              icon={<ArrowLeft size={15} />}
              iconPosition="left"
              className="font-sans text-sm font-medium py-3 px-6"
            >
              Contact Mayank
            </Button>
          </div>

          {/* Direct Section Jumps */}
          <Card className="w-full p-6 sm:p-8 text-left border-[var(--border)]">
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--faint)] mb-4 font-medium">
              Direct System Indices:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: "Selected Work", href: "/#projects", cat: "03" },
                { title: "Track Record", href: "/#experience", cat: "02" },
                { title: "Technical Skills", href: "/#skills", cat: "04" },
              ].map(({ title, href, cat }) => (
                <a
                  key={title}
                  href={href}
                  className="p-3.5 rounded-[6px] border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] flex items-center justify-between text-sm font-sans transition-colors group"
                >
                  <span className="text-[var(--muted)] group-hover:text-[var(--text)] font-medium">
                    <span className="font-mono text-xs text-[var(--accent)] mr-2">{cat}</span>
                    {title}
                  </span>
                  <ArrowUpRight size={14} className="text-[var(--faint)] group-hover:text-[var(--accent)]" />
                </a>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </main>

    {/* Footer Colophon */}
    <footer>
      <Container>
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[var(--faint)]">
          <div>© {new Date().getFullYear()} Mayank Nasa. Built with React and Vite.</div>
          <div>Signal Orange #FF5B2E</div>
        </div>
      </Container>
    </footer>
  </div>
);
}
