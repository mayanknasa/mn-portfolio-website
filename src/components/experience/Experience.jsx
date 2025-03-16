import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiCodeAlt, BiGitBranch } from "react-icons/bi";
import { FaServer, FaTools, FaMobileAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="experience">
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What Skills I Have
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My Experience
      </motion.h2>

      <motion.div 
        className="container experience__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="experience__skills" variants={itemVariants}>
          <h3>Technical Expertise</h3>
          <div className="skills__grid">
            <div className="skill__category">
              <BiCodeAlt className="category__icon" />
              <h4>Frontend Development</h4>
              <div className="skill__items">
                <span className="skill__item">React.js</span>
                <span className="skill__item">React Native</span>
                <span className="skill__item">TypeScript</span>
                <span className="skill__item">JavaScript</span>
                <span className="skill__item">HTML5</span>
                <span className="skill__item">CSS3</span>
                <span className="skill__item">Redux</span>
                <span className="skill__item">Next.js</span>
              </div>
            </div>

            <div className="skill__category">
              <FaServer className="category__icon" />
              <h4>Backend & APIs</h4>
              <div className="skill__items">
                <span className="skill__item">Node.js</span>
                <span className="skill__item">REST APIs</span>
                <span className="skill__item">GraphQL</span>
                <span className="skill__item">JSON</span>
                <span className="skill__item">SQL</span>
                <span className="skill__item">MongoDB</span>
              </div>
            </div>

            <div className="skill__category">
              <FaMobileAlt className="category__icon" />
              <h4>Mobile Development</h4>
              <div className="skill__items">
                <span className="skill__item">iOS</span>
                <span className="skill__item">Android</span>
                <span className="skill__item">React Native CLI</span>
                <span className="skill__item">Expo</span>
                <span className="skill__item">Mobile UI/UX</span>
              </div>
            </div>

            <div className="skill__category">
              <FaTools className="category__icon" />
              <h4>Tools & Testing</h4>
              <div className="skill__items">
                <span className="skill__item">Jest</span>
                <span className="skill__item">React Testing Library</span>
                <span className="skill__item">Webpack</span>
                <span className="skill__item">Docker</span>
                <span className="skill__item">Postman</span>
              </div>
            </div>

            <div className="skill__category">
              <BiGitBranch className="category__icon" />
              <h4>Version Control & CI/CD</h4>
              <div className="skill__items">
                <span className="skill__item">Git</span>
                <span className="skill__item">GitHub</span>
                <span className="skill__item">GitLab</span>
                <span className="skill__item">CI/CD</span>
                <span className="skill__item">Agile/Scrum</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="experience__timeline" variants={itemVariants}>
          <h3>Work Experience</h3>
          <div className="timeline">
            <div className="timeline__item">
              <div className="timeline__content">
                <h4><FaBriefcase /> Software Engineer</h4>
                <h5>6thstreet.com | Sept 2022 - Present</h5>
                <ul className="timeline__achievements">
                  <li>Developed 65+ features for React-based mobile app, achieving 1M+ downloads and top 40 ranking</li>
                  <li>Optimized app performance reducing API calls by 35% through caching solutions</li>
                  <li>Enhanced user engagement by 46% using analytics and A/B testing</li>
                  <li>Achieved 94% PageSpeed score through performance optimization</li>
                  <li>Saved $90K monthly by implementing automation tools</li>
                </ul>
              </div>
            </div>

            <div className="timeline__item">
              <div className="timeline__content">
                <h4><FaBriefcase /> Technical Intern</h4>
                <h5>6thstreet.com | Feb 2022 - Aug 2022</h5>
                <ul className="timeline__achievements">
                  <li>Developed key features for React-based mobile app and website</li>
                  <li>Improved platform performance by 30% through bug fixes and optimizations</li>
                  <li>Collaborated in agile environment for platform maintenance and testing</li>
                </ul>
              </div>
            </div>

            <div className="timeline__item">
              <div className="timeline__content">
                <h4><FaGraduationCap /> B.Tech in Mechanical Engineering</h4>
                <h5>DCRUST, Murthal | 2018 - 2022</h5>
                <ul className="timeline__achievements">
                  <li>8.63/10 CGPA with First Division Honors</li>
                  <li>Specialization in AI & Machine Learning</li>
                  <li>Recipient of Topper Scholarships</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
