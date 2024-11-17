import sectionController from "./components/JSON/sectionController.json";

// Lazy-loaded component imports
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import HealthCheck from "./HealthCheck";

function App() {
  const { sections } = sectionController; // Destructure to simplify code

  const componentsMap = {
    Header: <Header />,
    Nav: <Nav />,
    About: <About />,
    Experience: <Experience />,
    Portfolio: <Portfolio />,
    Testimonials: <Testimonials />,
    Contact: <Contact />,
    Footer: <Footer />,
  };

  return (
    <div>
      <HealthCheck />
      {Object.entries(sections).map(([key, isVisible]) =>
        isVisible ? <div key={key}>{componentsMap[key]}</div> : null
      )}
    </div>
  );
}

export default App;
