
import "./portfolio.css";
import IMG1 from "../../assets/6thstreet.png";
import IMG2 from "../../assets/Crocs.png";
import IMG3 from "../../assets/Dunelondon.png";
import IMG4 from "../../assets/Rituals.png";
import IMG5 from "../../assets/portfolio2.jpg";
import IMG6 from "../../assets/portfolio3.jpg";
import IMG7 from "../../assets/CopyMe.jpg";
import IMG8 from "../../assets/levelUp.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "6THSTREET",
    demo: "https://www.6thstreet.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "CROCS GCC",
    demo: "https://en-ae.crocsgulf.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "DUNELONDON GCC",
    demo: "https://en.dunelondon.ae",
  },
  {
    id: 4,
    image: IMG4,
    title: "RITUALS UAE",
    demo: "https://en-ae.rituals.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Brain Booster",
    github: "https://github.com/mayanknasa/mn-quizapp",
    demo: "https://brainbooster.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Wedding House Design",
    github: "https://github.com/mayanknasa/mn-template",
    demo: "https://weddinghouse.netlify.app",
  },
  {
    id: 7,
    image: IMG7,
    title: "Copy Me !",
    github: "https://github.com/mayanknasa/mn-template",
    demo: "https://copy-me.netlify.app",
  },
  {
    id: 8,
    image: IMG8,
    title: "Level Up Gaming",
    github: "https://github.com/mayanknasa/mn-template",
    demo: "https://levelup-sonipat.netlify.app/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio__container">
      <h5>My Recent Works</h5>
      <h2>I've worked on many projects from scratch, are:</h2>

      <div className="container">
      <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1500}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <a href={demo}>
                    <img src={image} alt={title} />
                  </a>
                </div>
                <a href={demo}>
                  <h3 className="portfolio__item-title"> {title}</h3>
                </a>
                <div className="portfolio__item-cta">
                  {/* <a href={github} className="btn" target="__blank">
                  GitHub
                </a> */}
                  <a href={demo} className="btn btn-primary" target="__blank">
                    Go to website
                  </a>
                </div>
              </article>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
