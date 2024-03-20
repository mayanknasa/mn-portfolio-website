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
import configData from './components/Configuration/configData.json'
import particlesOptions from "./components/ParticlesBackground/particles.json";
function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])

  return (
    <div>
       <Particles options={particlesOptions} init={particlesInit}/>
      {configData.sections.Header && <Header />}
      {configData.sections.Nav && <Nav />}
      {configData.sections.About && <About />}
      {configData.sections.Experience && <Experience />}
      {configData.sections.Portfolio && <Portfolio />}
      {configData.sections.Testimonials && <Testimonials />}
      {configData.sections.Contact && <Contact />}
      {configData.sections.Footer && <Footer />}
    </div>
  );
}

export default App;
