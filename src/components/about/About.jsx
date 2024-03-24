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
              <h5>Highly Appreciated for developments</h5>
              <small></small>
              {/* <small>6 Months of Working</small> */}
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Goal-Oriented Team Leader</h5>
              {/* <h5>Clients</h5>
              <small>200+ Worldwide</small> */}
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Working for Various Popular Brands</h5>
              {/* <small>80+ Completed</small> */}
            </article>
          </div>
          <div className="milestones">
            <h3>
              <strong>Milestones Achieved:</strong>
            </h3>
            <ul className="highlighted-points">
              <li>
              Led the development of <strong>100+ new features</strong>, including responsive navigation menus, various webpages, e-mail templates, etc. across multiple <strong>Magento</strong> and <strong>React driven e-commerce websites</strong>.
              </li>
              <li>
              <strong>Diagnosed</strong> and <strong>resolved 100+ existing bugs</strong> across various e-commerce websites, ensuring robust and <strong>error-free functionality</strong>.
              </li>
              <li>
              Conducted <strong>re-designs, updates</strong>, and comprehensive <strong>website maintenance tasks</strong>, improving website performance by <strong>+93%</strong>.
              </li>
              <li>
              Introduced various <strong>automation tools</strong> and <strong>modules</strong>, like WeltPixel, etc. yielding a notable <strong>$3200 daily savings and enhanced efficiency</strong>.
              </li>
              <li>
              Led the <strong>deployment of 70+ online marketing initiatives</strong>, including impactful banner advertisements, contributing to the attainment of <strong>record-breaking</strong> online orders on platforms.
              </li>
            </ul>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
