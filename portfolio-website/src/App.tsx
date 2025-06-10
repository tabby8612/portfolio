import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FooterContact from "./components/FooterContact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SkillSet from "./components/SkillSet";

function App() {
  return (
    <>
      <div className="dark:bg-black">
        <NavBar />
        <Hero />
        <About />
        <SkillSet />
        <Projects />
        <Contact />
        <FooterContact />
        <Footer />
      </div>
    </>
  );
}

export default App;
