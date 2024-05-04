import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import sectionController from './components/JSON/sectionController.json'
import particlesOptions from "./components/ParticlesBackground/particles.json";
function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])

  return (
    <div>
       <Particles options={particlesOptions} init={particlesInit}/>
      {sectionController.sections.Header && <Header />}
      {sectionController.sections.Nav && <Nav />}
      {sectionController.sections.About && <About />}
      {sectionController.sections.Experience && <Experience />}
      {sectionController.sections.Portfolio && <Portfolio />}
      {sectionController.sections.Testimonials && <Testimonials />}
      {sectionController.sections.Contact && <Contact />}
      {sectionController.sections.Footer && <Footer />}
    </div>
  );
}

export default App;
