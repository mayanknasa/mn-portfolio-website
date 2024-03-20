
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Website",
    github: "https://github.com/mayanknasa/mn-portfolio-website",
    demo: "https://mayanknasa.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Quiz App",
    github: "https://github.com/mayanknasa/mn-quizapp",
    demo: "https://mn-quizapp.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Responsive Template Design",
    github: "https://github.com/mayanknasa/mn-template",
    demo: "https://mn-template.netlify.app/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
