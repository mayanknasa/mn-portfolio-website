
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
                Created and maintained front-end code for <strong>20+ e-commerce
                websites</strong> including re-designs, seasonal updates and production
                work.
              </li>
              <li>
                Led troubleshooting, fixed <strong>1,000+ bugs</strong> and other issues, and
                updated sites throughout production lifecycle which resulted in
                improved user experience.
              </li>
              <li>
                Developed the website navigation menus, various webpages, e-mail
                templates, and various other features multiple e-commerce
                websites.
              </li>
              <li>
              Assisted in the deployment of <strong>50+</strong> online marketing initiatives,
                including banner advertisements.
              </li>
              <li>
                Collaborated with designers, developers, and project managers to
                ensure seamless implementation of web development projects.
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
