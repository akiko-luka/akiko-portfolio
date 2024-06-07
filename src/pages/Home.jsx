import About from "../components/About.jsx";
import ContactContainer from "../components/Contact/ContactContainer.jsx";
import Header from "../components/Header/Header";
import Hero from "../components/Hero.jsx";
import ProjectContainer from "../components/Projects/ProjectContainer.jsx";
import SkillsContainer from "../components/Skills/SkillsContainer.jsx";

const Home = () => {
  return (
    <>
      <div className="bg-white-main min-h-screen mx-auto max-w-[1200px]">
        <Header />
        <Hero />
        <About />
        <SkillsContainer />
        <ProjectContainer />
        <ContactContainer />

        <footer className="text-center p-4">
          &copy; {new Date().getFullYear()} | Akiko Luka
        </footer>
      </div>
    </>
  );
};

export default Home;
