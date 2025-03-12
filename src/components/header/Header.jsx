import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });

      // Update CSS variables for gradient following mouse
      document.documentElement.style.setProperty('--mouse-x', `${(clientX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty('--mouse-y', `${(clientY / window.innerHeight) * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const achievements = [
    { number: "60+", text: "Features Developed" },
    { number: "1M+", text: "App Downloads" },
    { number: "94%", text: "PageSpeed Score" },
    { number: "35%", text: "Performance Boost" }
  ];

  const skills = [
    "React", "React Native", "JavaScript", "TypeScript",
    "Node.js", "Express", "MongoDB", "PostgreSQL",
    "AWS", "Docker", "CI/CD", "RESTful APIs"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header
      ref={headerRef}
      style={{
        opacity: headerOpacity,
        y: headerY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="container header__container"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="header__intro"
          variants={itemVariants}
        >
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Hello I'm
          </motion.h5>
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            Mayank Nasa
          </motion.h1>
          <motion.h5 
            className="text-light"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Crafting seamless digital experiences with modern web technologies
          </motion.h5>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <CTA />
          </motion.div>
        </motion.div>

        <motion.div 
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                >
                  {achievement.number}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                >
                  {achievement.text}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="skills-cloud"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {skills.map((skill, index) => (
              <motion.span 
                key={index}
                className="skill-tag"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>

        <HeaderSocials />
      </motion.div>
    </motion.header>
  );
};

export default Header;
