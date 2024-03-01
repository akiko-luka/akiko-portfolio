import Navbar from "../components/Header/Navbar.jsx"
import Hero from "../components/Hero/Hero.jsx"
import About from "../components/About/About.jsx"
import Skills from "../components/Skills/Skills.jsx"
import Projects from "../components/Projects/Projects.jsx"
import Contact from "../components/Contact/Contact.jsx"


const Home = () => {
 
  return <>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />

  <footer>&copy; {new Date().getFullYear()} | Akiko Luka</footer>
  </>;
};

export default Home;
