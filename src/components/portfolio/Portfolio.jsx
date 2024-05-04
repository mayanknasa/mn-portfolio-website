import "./portfolio.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectData from '../JSON/ProjectData.json';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio__container">
      <h5>My Recent Works</h5>
      <h2>I&apos;ve worked on many projects from scratch, are:</h2>
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
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
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
          {ProjectData.map(({ id, image, title, demo }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <a href={demo}>
                  <img src={image} alt={title} />
                </a>
              </div>
              <a href={demo}>
                <h3 className="portfolio__item-title">{title}</h3>
              </a>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary" target="__blank">
                  Go to website
                </a>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
