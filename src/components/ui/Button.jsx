import { forwardRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const Button = forwardRef(function Button(
  {
    variant = "primary",
    children,
    href,
    className = "",
    icon,
    iconPosition = "right",
    target,
    rel,
    onClick,
    type = "button",
    disabled = false,
    magnetic = null, // auto-enabled for primary unless reduced motion
    ...props
  },
  ref
) {
  const shouldReduceMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const isMagnetic =
    magnetic !== null
      ? magnetic && !shouldReduceMotion
      : variant === "primary" && !shouldReduceMotion;

  const handleMouseMove = (e) => {
    if (!isMagnetic) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Restrained, subtle magnetic pull (max ~6px)
    const x = (e.clientX - centerX) * 0.22;
    const y = (e.clientY - centerY) * 0.22;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    if (!isMagnetic) return;
    setOffset({ x: 0, y: 0 });
  };

  const baseStyles =
    "group inline-flex items-center justify-center gap-2 font-sans text-sm font-medium transition-colors duration-150 rounded-[6px] min-h-[44px] disabled:opacity-50 disabled:pointer-events-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--text)] text-[var(--bg)] border border-[var(--text)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white px-4 py-2.5 shadow-sm active:scale-[0.98]",
    ghost:
      "bg-transparent text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface)] hover:border-[var(--border-strong)] px-4 py-2.5 active:scale-[0.98]",
    link:
      "p-0 bg-transparent text-[var(--text)] hover:text-[var(--accent)] font-medium underline-offset-4 hover:underline",
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  const motionProps = isMagnetic
    ? {
        animate: { x: offset.x, y: offset.y },
        transition: { type: "spring", stiffness: 300, damping: 20, mass: 0.1 },
        whileTap: shouldReduceMotion ? {} : { scale: 0.97 },
      }
    : {
        whileTap: shouldReduceMotion ? {} : { scale: 0.98 },
      };

  const renderIcon = (pos) => {
    if (!icon || iconPosition !== pos) return null;
    return (
      <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        {icon}
      </span>
    );
  };

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === "_blank" ? "noreferrer noopener" : rel}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...motionProps}
        {...props}
      >
        {renderIcon("left")}
        <span>{children}</span>
        {renderIcon("right")}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...motionProps}
      {...props}
    >
      {renderIcon("left")}
      <span>{children}</span>
      {renderIcon("right")}
    </motion.button>
  );
});

export default Button;
