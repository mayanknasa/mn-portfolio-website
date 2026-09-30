import { motion, useReducedMotion } from "framer-motion";

export default function Card({
  children,
  className = "",
  hoverable = true,
  lift = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const hoverStyles = hoverable
    ? "transition-all duration-200 hover:border-[var(--border-strong)]"
    : "";

  const motionProps =
    lift && hoverable && !shouldReduceMotion
      ? {
          whileHover: { y: -3 },
          transition: { duration: 0.2, ease: "easeOut" },
        }
      : {};

  return (
    <motion.div
      className={`bg-[var(--surface)] border border-[var(--border)] rounded-[6px] p-6 md:p-8 ${hoverStyles} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}
