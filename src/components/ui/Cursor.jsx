import { useEffect, useRef } from "react";

/**
 * Ultra-responsive, zero-latency custom cursor.
 * - Hardware accelerated translate3d without transition delay
 * - Zero React state updates on mousemove (pure RAF + direct DOM manipulation)
 * - Instant snap on viewport entry (no lag or off-screen spring delay)
 * - Reliably detects mouse movement regardless of touchscreen capabilities
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let isHovering = false;
    let rafId = null;

    const showCursor = () => {
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = isHovering ? "0.9" : "0.4";
      }
    };

    const hideCursor = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (!isVisible) {
        // Immediate entrance snap: teleport dot and ring to cursor with 0ms delay
        mouseX = x;
        mouseY = y;
        ringX = x;
        ringY = y;
        showCursor();
      } else {
        mouseX = x;
        mouseY = y;
      }

      // Precision center dot: direct 1:1 hardware transform, zero delay
      dot.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)${isHovering ? " scale(1.5)" : " scale(1)"}`;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = Boolean(
        target &&
          (target.closest("a") ||
            target.closest("button") ||
            target.closest("[role='button']") ||
            target.closest("input") ||
            target.closest("textarea") ||
            target.closest(".interactive-hover"))
      );

      if (interactive !== isHovering) {
        isHovering = interactive;
        if (isVisible) {
          ring.style.opacity = isHovering ? "0.9" : "0.4";
        }
        ring.style.width = isHovering ? "40px" : "26px";
        ring.style.height = isHovering ? "40px" : "26px";
        ring.style.borderColor = "var(--accent)";
        dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)${isHovering ? " scale(1.5)" : " scale(1)"}`;
      }
    };

    const handleMouseEnter = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      ringX = e.clientX;
      ringY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      ring.style.transform = `translate3d(${ringX - 13}px, ${ringY - 13}px, 0)`;
      showCursor();
    };

    const handleMouseLeave = () => {
      hideCursor();
    };

    // Smooth snappy trailing ring RAF
    const animateRing = () => {
      if (isVisible) {
        ringX += (mouseX - ringX) * 0.45;
        ringY += (mouseY - ringY) * 0.45;

        const offset = isHovering ? 20 : 13;
        ring.style.transform = `translate3d(${ringX - offset}px, ${ringY - offset}px, 0)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    // Listen to touchstart to hide on pure touch taps
    const handleTouchStart = () => {
      hideCursor();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchStart);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-[var(--accent)]"
        style={{
          width: 8,
          height: 8,
          opacity: 0,
          boxShadow: "0 0 6px rgba(255, 91, 46, 0.4)",
          willChange: "transform, opacity",
          transition: "opacity 120ms ease, transform 0ms",
        }}
      />
      {/* Trailing hair-line ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-[var(--accent)]"
        style={{
          width: 26,
          height: 26,
          opacity: 0,
          willChange: "transform, width, height, opacity",
          transition: "width 180ms ease, height 180ms ease, opacity 140ms ease",
        }}
      />
    </>
  );
}
