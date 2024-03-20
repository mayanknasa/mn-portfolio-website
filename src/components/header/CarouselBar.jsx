import React from 'react';    
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel'; 

function CarouselBar() {
  return (
    <div className="carousel-container">
      <h2>thoughts</h2>
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} stopOnHover={true} interval={5000} showThumbs={false}>  
    <div>  
        {/* <img src="assets/1.jpeg" />   */}
        {/* <h2>thoughts</h2> */}
        <p className="carousel-thoughts">"User-centred design is a process that web developers use to focus on the client's needs, requirements, and customer base. Through every aspect of the design process, the front end developer will focus on what the user of that website needs. User-centred design requires a lot of research to work but is very beneficial. It often creates a more successful website with more organic traffic as the developer makes it with the user in mind."</p>  
    </div>  
    <div>  
        {/* <img src="assets/2.jpeg" />   */}
        {/* <h2>thoughts</h2> */}
        <p className="carousel-thoughts">"Creating websites that are user-friendly and accessible is extremely important to me as I want everyone to be able to enjoy my work. If the client agrees to it, I will add alt text to images so screen readers can describe the picture to those with visual impairments. Similarly, I'll create websites that allow users to enlarge or minimize the font to make it easier to read. I test my web applications on various browsers and devices to check how easy it is to use as well."</p>  
    </div>  
    <div>  
        {/* <img src="assets/3.jpeg" />   */}
        {/* <h2>thoughts</h2> */}
        <p className="carousel-thoughts">"I start by designing the mobile version of the website as that is how most people access the internet nowadays, through a phone or tablet. Mobile websites also tend to be easier to design as there is less space to fill. I will then reuse whatever design aspects or coding I can and create the desktop website. I focus on the different user interactions between the two platforms as aspects like dropdown menus or online forms will be different for desktop and mobile."</p>  
    </div>  
</Carousel>  </div>
  )
}

export default CarouselBar