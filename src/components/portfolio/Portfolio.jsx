import "./portfolio.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import ProjectData from './ProjectData';

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Throttled mouse position update
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    let timeoutId;
    const handleMouseMove = (e) => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = containerRef.current?.getBoundingClientRect() || {};
        const x = (clientX - (left || 0)) / (width || 1);
        const y = (clientY - (top || 0)) / (height || 1);
        setMousePosition({ x, y });
        timeoutId = null;
      }, 50); // Throttle to 50ms
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Memoize the background gradient style
  const gradientStyle = useMemo(() => ({
    background: `radial-gradient(
      circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
      rgba(56, 189, 248, 0.15),
      rgba(30, 41, 59, 0.7)
    )`
  }), [mousePosition.x, mousePosition.y]);

  const ProjectItem = ({ project, index }) => {
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });

    return (
      <motion.article
        ref={ref}
        key={project.id}
        className="portfolio__item"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ 
          duration: 0.3,
          delay: Math.min(index * 0.1, 0.3),
          ease: "easeOut"
        }}
        style={gradientStyle}
      >
        <div className="portfolio__item-image">
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            decoding="async"
          />
          <motion.div 
            className="portfolio__item-overlay"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href={project.demo}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        </div>
        <h3 className="portfolio__item-title">
          {project.title}
        </h3>
      </motion.article>
    );
  };

  return (
    <motion.section 
      id="portfolio" 
      className="portfolio__container"
      ref={containerRef}
      style={{ opacity }}
    >
      <motion.div 
        className="portfolio__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h5>My Recent Works</h5>
        <h2>Featured Projects</h2>
      </motion.div>

      <motion.div 
        className="portfolio__grid"
        style={{ y }}
      >
        {ProjectData.map((project, index) => (
          <ProjectItem 
            key={project.id} 
            project={project} 
            index={index} 
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
