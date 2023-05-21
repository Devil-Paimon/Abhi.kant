import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Journey from "./Components/Journey";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
