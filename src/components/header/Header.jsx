import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container" id="">
        <h5>Hey&#128075; I&#39;m</h5>
        <h1>Mayank Nasa</h1>
        <h5 className="text-light">Software Engineer &#128187;</h5>
        <h6>
          <quote>
          &#34; Transforming complex problems into elegant solutions through the
          power of code &#34;</quote>
        </h6>
        <HeaderSocials />
        <CTA />
        <a href="#contact" className="scroll__down">
          <div id="mouse-scroll">
            <div className="mouse">
              <div className="mouse-in"></div>
            </div>
            <div className="arrows-div">
              <span className="down-arrow-1"></span>
              <span className="down-arrow-2"></span>
              <span className="down-arrow-3"></span>
            </div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
