import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { number: "60+", text: "Features Developed" },
    { number: "1M+", text: "App Downloads" },
    { number: "94%", text: "PageSpeed Score" },
    { number: "35%", text: "Performance Boost" }
  ];

  const skills = [
    "React", "React Native", "JavaScript", "Performance Optimization",
    "REST APIs", "Redux", "Mobile Development", "Web Development"
  ];

  return (
    <header className={isVisible ? 'visible' : ''}>
      <div className="container header__container">
        <motion.div 
          className="header__intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Mayank Nasa</h1>
          <motion.div 
            className="role-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="role-title">
              <span className="icon">👨‍💻</span>
              Software Engineer
            </div>
            <div className="location-divider" />
            <div className="location-info">
              <span className="location-icon">📍</span>
              India
            </div>
          </motion.div>
        </motion.div>

        <HeaderSocials />
        <CTA />

        <motion.div 
          className="achievements-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            >
              <h3>{achievement.number}</h3>
              <p>{achievement.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="skills-cloud"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {skills.map((skill, index) => (
            <motion.span 
              key={index}
              className="skill-tag"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
