import "./portfolio.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectData from './ProjectData';
import { motion } from "framer-motion";

const Portfolio = () => {
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
    <section id="portfolio" className="portfolio__container">
      <motion.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Recent Works
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I&apos;ve worked on many projects from scratch, are:
      </motion.h2>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="portfolio-carousel"
          containerClass="container-without-dots"
          draggable
          focusOnSelect={false}
          infinite
          itemClass="carousel-item-padding-40-px"
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
              slidesToSlide: 1,
              partialVisibilityGutter: 40
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 1,
              partialVisibilityGutter: 30
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1,
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
            <motion.article
              key={id}
              className="portfolio__item"
              variants={itemVariants}
            >
              <div className="portfolio__item-image">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <h3 className="portfolio__item-title">{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <span className="btn-icon">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Portfolio;
