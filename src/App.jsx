import "./styles/globals.css";
import { lazy, Suspense, useState, useEffect } from "react";
import Loader from "./components/ui/Loader";
import ScrollBar from "./components/ui/ScrollBar";
import Cursor from "./components/ui/Cursor";
import BackTop from "./components/ui/BackTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NotFound from "./components/ui/NotFound";
import { ToastProvider } from "./context/ToastContext";
import Hero from "./components/sections/Hero";

const About = lazy(() => import("./components/sections/About"));
const OutlineMarqueeDivider = lazy(() => import("./components/ui/OutlineMarqueeDivider"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Contact = lazy(() => import("./components/sections/Contact"));

export default function App() {
  const [is404, setIs404] = useState(() => {
    if (typeof window === "undefined") return false;
    const path = window.location.pathname;
    return path !== "/" && path !== "" && path !== "/index.html" && !path.startsWith("/#");
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setIs404(path !== "/" && path !== "" && path !== "/index.html" && !path.startsWith("/#"));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleGoHome = () => {
    window.history.pushState({}, "", "/");
    setIs404(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (is404) {
    return (
      <ToastProvider>
        <NotFound onGoHome={handleGoHome} />
      </ToastProvider>
    );
  }

  return (
    <ToastProvider>
      {/* Skip to Content Accessible Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2.5 focus:bg-[var(--accent)] focus:text-white focus:rounded-[6px] focus:font-mono focus:text-xs focus:font-medium focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[var(--text)]"
      >
        Skip to main content
      </a>

      <div className="bg-[var(--bg)] text-[var(--text)] font-sans min-h-screen relative selection:bg-[var(--accent)] selection:text-white transition-colors duration-200">
        {/* 4% SVG Film Grain Overlay */}
        <div className="film-grain" aria-hidden="true" />

        {/* Viewport UI primitives */}
        <Loader />
        <ScrollBar />
        <Cursor />
        <BackTop />

        {/* Main Content Layout with Semantic Landmarks */}
        <Navbar />
        <main id="main-content" tabIndex={-1} className="relative z-10 focus:outline-none">
          <Suspense fallback={<div className="min-h-screen bg-[var(--bg)]" />}>
            <Hero />
            <About />
            <OutlineMarqueeDivider />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </Suspense>
        </main>
      </div>
    </ToastProvider>
  );
}
