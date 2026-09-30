import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PROFILE } from "../../data/profile";

export default function Loader() {
  const shouldReduceMotion = useReducedMotion();
  const [show, setShow] = useState(!shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setTimeout(() => setShow(false), 250);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[var(--bg)] flex flex-col items-center justify-center gap-6 pointer-events-none"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">
              {PROFILE.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          </div>
          <div className="w-32 h-[1px] bg-[var(--border)] overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-[var(--accent)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
