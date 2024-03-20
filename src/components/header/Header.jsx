
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import CarouselBar from "./CarouselBar";
const Header = () => {
  return (
    <header>
      <div className="container header__container" id="">
        <h5>Hello I'm</h5>
        <h1>Mayank</h1>
        <h5 className="text-light">Software Engineer</h5>
        <h6>"Transforming complex problems into elegant solutions through the power of code"</h6>
        <CTA />
        <HeaderSocials />
        <CarouselBar/>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
