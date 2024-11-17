// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import custom CSS for styling
import "./testimonials.css";

// Import required modules
import { EffectCards } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Feedback</h5>
      <h2>Client Reviews</h2>
      <div className="swiper-container">
        <Swiper
          effect="cards" // Set the effect to 'cards'
          autoplay={true} // Automatically transition between slides
          grabCursor={true} // Show the cursor on hover
          modules={[EffectCards]} // Include the EffectCards module
          className="mySwiper"
        >
          <SwiperSlide>
            <p className="client-review">Mayank, You are a savior!</p>
            <p className="client-name">Sreemoyee Basu</p>
            <p className="client-designation">Assistant Manager, Dunelondon</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="client-review">You showed great potential, commitment, ownership, and delivery!</p>
            <p className="client-name">Sathees Raja</p>
            <p className="client-designation">Engineering Manager, Brands</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="client-review">Your immediate support saved us!</p>
            <p className="client-name">Deepti Kundani</p>
            <p className="client-designation">Assistant Manager, Rituals</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="client-review">The way you learned and picked things up was really commendable. Thanks for all your hard work.</p>
            <p className="client-name">Sathees Raja</p>
            <p className="client-designation">Engineering Manager, Brands</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="client-review">Mayank! You must be appreciated for before-time submissions!</p>
            <p className="client-name">Rathna Ramappa</p>
            <p className="client-designation">Senior Project Manager, Brands</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="many-more-note">Many More :)</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
