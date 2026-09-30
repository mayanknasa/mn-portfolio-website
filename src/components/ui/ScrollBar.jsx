import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        scaleX,
        transformOrigin: "0%",
        backgroundColor: "var(--accent)",
        zIndex: 9995,
      }}
    />
  );
}
