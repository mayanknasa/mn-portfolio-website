import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({
  index,
  title,
  subtitle,
  description,
  className = "",
  align = "left",
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25 } },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`mb-16 md:mb-20 pt-4 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : ""
      } ${className}`}
    >
      {index && (
        <motion.div
          variants={itemVariants}
          className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4 flex items-center gap-3 font-medium"
        >
          <span>{index}</span>
          <motion.span
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="h-px w-10 bg-[var(--border-strong)] inline-block"
          />
        </motion.div>
      )}

      {/* Main Title with Masked/Revealed Text */}
      <div className="overflow-hidden">
        <motion.h2
          variants={itemVariants}
          className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.03em] text-[var(--text)] leading-[1.03]"
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="mt-4 font-sans text-base sm:text-lg md:text-xl text-[var(--text)] font-normal max-w-[65ch] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p
          variants={itemVariants}
          className="mt-3 font-sans text-[15px] sm:text-base md:text-[17px] text-[var(--muted)] max-w-[65ch] leading-[1.6]"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
