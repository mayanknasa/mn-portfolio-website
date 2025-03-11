import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
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
          <motion.div className="about__cards" variants={containerVariants}>
            <motion.article className="about__card" variants={itemVariants}>
              <FaAward className="about__icon" />
              <h5>Award-Winning Development</h5>
              <small>
                Recognized for delivering high-performance, scalable solutions
              </small>
            </motion.article>

            <motion.article className="about__card" variants={itemVariants}>
              <FiUsers className="about__icon" />
              <h5>Collaborative Team Player</h5>
              <small>
                Proven experience working with agile teams to deliver impactful results
              </small>
            </motion.article>

            <motion.article className="about__card" variants={itemVariants}>
              <VscFolderLibrary className="about__icon" />
              <h5>Building for Leading Brands</h5>
              <small>
                Worked on top-rated e-commerce platforms and mobile apps
              </small>
            </motion.article>
          </motion.div>

          <motion.div className="milestones" variants={itemVariants}>
            <h3>Milestones Achieved</h3>
            <ul className="highlighted-points">
              <li>
                Successfully developed and launched{" "}
                <strong>50+ new features</strong> for e-commerce platforms,
                including responsive web pages, mobile app screens, and design
                revamps, enhancing overall user experience.
              </li>
              <li>
                Integrated <strong>multiple APIs</strong> and managed state using{" "}
                <strong>Redux</strong>, optimizing performance and scalability for{" "}
                <strong>6thstreet.com</strong>, contributing to over 1 million
                downloads on Google Play.
              </li>
              <li>
                Resolved <strong>120+ critical bugs</strong> across websites and
                mobile apps, ensuring smooth, error-free functionality and a{" "}
                <strong>94% Google PageSpeed Insights score</strong> for the
                6thstreet website.
              </li>
              <li>
                Led the implementation of <strong>automation tools</strong> like
                WeltPixel, saving the company <strong>$90K monthly</strong> while
                significantly boosting operational efficiency.
              </li>
              <li>
                Spearheaded <strong>70+ marketing initiatives</strong> and A/B
                testing on mobile apps, improving user engagement by{" "}
                <strong>34%</strong> and driving record sales on e-commerce
                platforms.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
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
