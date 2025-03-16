import "./about.css";
import { FaAward, FaCode, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about">
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get To Know
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="container about__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="about__content" variants={containerVariants}>
          <motion.p className="about__introduction" variants={itemVariants}>
            I'm a passionate Software Engineer with over 3 years of expertise in building exceptional digital experiences. 
            Specializing in React and React Native development, I've had the privilege of working on high-impact projects 
            that serve millions of users. My approach combines technical excellence with a deep understanding of user needs 
            to create solutions that make a real difference.
          </motion.p>

          <motion.div className="about__cards" variants={containerVariants}>
            <motion.article className="about__card" variants={itemVariants}>
              <FaCode className="about__icon" />
              <h5>Technical Excellence</h5>
              <small>
                65+ features developed with focus on performance and scalability
              </small>
            </motion.article>

            <motion.article className="about__card" variants={itemVariants}>
              <FaRocket className="about__icon" />
              <h5>Impact Driven</h5>
              <small>
                Improved user engagement by 46% and saved $90K monthly in costs
              </small>
            </motion.article>

            <motion.article className="about__card" variants={itemVariants}>
              <FaAward className="about__icon" />
              <h5>Quality Focused</h5>
              <small>
                Achieved 94% PageSpeed score and resolved 135+ critical issues
              </small>
            </motion.article>
          </motion.div>

          <motion.div className="about__highlights" variants={itemVariants}>
            <h3>Key Achievements</h3>
            <div className="highlights__content">
              <div className="highlight__item">
                <h4>Mobile App Success</h4>
                <p>Led development of features driving 1M+ downloads and top 40 ranking in shopping apps</p>
              </div>
              <div className="highlight__item">
                <h4>Performance Optimization</h4>
                <p>Reduced API calls by 35% through innovative caching solutions and architectural improvements</p>
              </div>
              <div className="highlight__item">
                <h4>Technical Leadership</h4>
                <p>Spearheaded implementation of automation tools and marketing initiatives, driving significant ROI</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="about__cta" variants={itemVariants}>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Let's discuss how we can work together to create something amazing.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
              <span className="btn-icon">→</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
