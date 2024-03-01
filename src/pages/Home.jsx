import Navbar from "../components/Header/Navbar.jsx"
import Hero from "../components/Hero/Hero.jsx"
import About from "../components/About/About.jsx"
import Skills from "../components/Skills/Skills.jsx"
import Projects from "../components/Projects/Projects.jsx"


const Home = () => {
 
  return <>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />

  <footer>&copy; {new Date().getFullYear()} | Akiko Luka</footer>
  </>;
};

export default Home;
