import "./portfolio.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import ProjectData from './ProjectData';

const Portfolio = () => {
  const containerRef = useRef(null);

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
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.5,
          delay: Math.min(index * 0.1, 0.3)
        }}
      >
        <div className="portfolio__item-image">
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            decoding="async"
          />
          <div className="portfolio__item-overlay">
            <a
              href={project.demo}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        </div>
        <h3 className="portfolio__item-title">
          {project.title}
        </h3>
      </motion.article>
    );
  };

  return (
    <section 
      id="portfolio" 
      className="portfolio__container"
      ref={containerRef}
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

      <div className="portfolio__grid">
        {ProjectData.map((project, index) => (
          <ProjectItem 
            key={project.id} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
