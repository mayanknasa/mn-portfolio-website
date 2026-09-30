import { useEffect, useRef, useState } from "react";
import { useInView, animate, useReducedMotion } from "framer-motion";

/**
 * Parses strings like "$390K+", "500K+", "4.6★", "94%", "5+" into:
 * { prefix, number, suffix, decimals }
 */
function parseMetric(val) {
  if (typeof val === "number") {
    return { prefix: "", number: val, suffix: "", decimals: 0 };
  }
  const str = String(val).trim();
  // Match prefix (like $), number (including float), and suffix (like K+, +, %, ★)
  const match = str.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: "", number: 0, suffix: str, decimals: 0 };
  }
  const prefix = match[1] || "";
  const numStr = match[2];
  const suffix = match[3] || "";
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return {
    prefix,
    number: parseFloat(numStr),
    suffix,
    decimals,
  };
}

export default function CountUp({ value, duration = 1.2, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  const { prefix, number, suffix, decimals } = parseMetric(value);
  const [displayNumber, setDisplayNumber] = useState(shouldReduceMotion ? number : 0);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setDisplayNumber(number);
      return;
    }

    const controls = animate(0, number, {
      duration: Math.min(Math.max(duration, 0.4), 1.5),
      ease: [0.16, 1, 0.3, 1], // Custom fast, purposeful ease-out
      onUpdate: (latest) => {
        setDisplayNumber(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, number, duration, shouldReduceMotion]);

  const formattedNumber =
    decimals > 0
      ? displayNumber.toFixed(decimals)
      : Math.round(displayNumber).toLocaleString();

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
