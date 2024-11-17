import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <a href="#contact">
              <img src={ME} alt="Mayank" />
            </a>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Award-Winning Development</h5>
              <small>
                Recognized for delivering high-performance, scalable solutions
              </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Collaborative Team Player</h5>
              <small>
                Proven experience working with agile teams to deliver impactful
                results
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Building for Leading Brands</h5>
              <small>
                Worked on top-rated e-commerce platforms and mobile apps
              </small>
            </article>
          </div>

          <div className="milestones">
            <h3>
              <strong>Milestones Achieved:</strong>
            </h3>
            <ul className="highlighted-points">
              <li>
                Successfully developed and launched{" "}
                <strong>50+ new features</strong> for e-commerce platforms,
                including responsive web pages, mobile app screens, and design
                revamps, enhancing overall user experience.
              </li>
              <li>
                Integrated <strong>multiple APIs</strong> and managed state
                using <strong>Redux</strong>, optimizing performance and
                scalability for <strong>6thstreet.com</strong>, contributing to
                over 1 million downloads on Google Play.
              </li>
              <li>
                Resolved <strong>120+ critical bugs</strong> across websites and
                mobile apps, ensuring smooth, error-free functionality and a{" "}
                <strong>94% Google PageSpeed Insights score</strong> for the
                6thstreet website.
              </li>
              <li>
                Led the implementation of <strong>automation tools</strong> like
                WeltPixel, saving the company <strong>$90K monthly</strong>{" "}
                while significantly boosting operational efficiency.
              </li>
              <li>
                Spearheaded <strong>70+ marketing initiatives</strong> and A/B
                testing on mobile apps, improving user engagement by{" "}
                <strong>34%</strong> and driving record sales on e-commerce
                platforms.
              </li>
            </ul>
          </div>

          <a href="#contact" className="btn btn-primary star">
            Let&#39;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
