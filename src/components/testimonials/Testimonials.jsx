
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./testimonials.css";

// import required modules
import { EffectCards } from "swiper";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Feedback</h5>
      <h2>Client Reviews</h2>
      <div className="swiper-container">
      <Swiper
        effect={"cards"}
        autoPlay={true}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="client-review">Mayank, You are a savior!</p>
          <p className="client-name">Sreemoyee Basu</p>
          <p className="client-designation">Assistant Manager, Dunelondon</p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <p className="client-review"> You showed great potential , commitment, ownership and delivery!</p>
          <p className="client-name">Sathees Raja</p>
          <p className="client-designation">Engineering Manager, Brands</p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <p className="client-review">Your immediate support saved us !</p>
          <p className="client-name">Deepti Kundani</p>
          <p className="client-designation">Assistant Manager, Rituals</p>
        </SwiperSlide>
        <SwiperSlide><p className="client-review">The way you learnt and picked the things were really commendable.  Thanks for all your hard work.</p>
          <p className="client-name">Sathees Raja</p>
          <p className="client-designation">Engineering Manager, Brands</p></SwiperSlide>
        <SwiperSlide><p className="client-review">Mayank! You must be appreciated for before time submissions!</p>
          <p className="client-name">Rathna Ramappa</p>
          <p className="client-designation">Senior Project Manager, Brands</p></SwiperSlide>
        <SwiperSlide><p className="many-more-note">Many More :)</p></SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
