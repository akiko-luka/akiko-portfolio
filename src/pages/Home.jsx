import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext.jsx";

// Components
import About from "../components/About.jsx";
import ContactContainer from "../components/Contact/ContactContainer.jsx";
import Header from "../components/Header/Header";
import Hero from "../components/Hero.jsx";
import ProjectContainer from "../components/Projects/ProjectContainer.jsx";
import SkillsContainer from "../components/Skills/SkillsContainer.jsx";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div
        className={`mx-auto min-h-screen max-w-[1200px] ${darkMode ? "bg-black-main" : "bg-white-main"}`}
      >
        <Header />
        <Hero />
        <ProjectContainer />
        <SkillsContainer />
        <About />
        <ContactContainer />

        <footer
          className={`p-4 text-center ${darkMode ? "text-white" : "bg-green-light text-black"}`}
        >
          &copy; {new Date().getFullYear()} | Akiko Luka | All Rights Reserved
        </footer>
      </div>
    </>
  );
};

export default Home;
