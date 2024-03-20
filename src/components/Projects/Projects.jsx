import { useEffect } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard.jsx";
import SmallProj from "../SmallProj/SmallProj.jsx";

// AOS - animation
import AOS from "aos";
import "aos/dist/aos.css";

// images
import battleGame from "../../assets/projects/battle-game.jpg";
import akpica from "../../assets/projects/akpica-screenshot.webp";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <section className="project__container scroll" id="projects">
        <h2 className="project__header">Projects</h2>
        <div className="project__content" data-aos="fade-up">
          <ProjectCard
            image={akpica}
            altTitle={"akpica-ecommerce"}
            url={"https://akpica.netlify.app/"}
            title={"akpica ecommerce"}
            subTitle={"E-commerce Website"}
          />

          <ProjectCard
            image={battleGame}
            altTitle={"battle-game"}
            url={"https://github.com/akiko-luka/battle-game"}
            title={"Dragon⍟Ball 𝐙 Mini Battle Game"}
            subTitle={"Console-Based App"}
          />
        </div>
      </section>
      <SmallProj />
    </>
  );
};

export default Projects;
