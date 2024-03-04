import "./Projects.css";
import ProjectCard from "./ProjectCard.jsx";

// images
import battleGame from "../../assets/projects/battle-game.jpg";
import akpica from "../../assets/projects/akpica-screenshot.webp";

const Projects = () => {
  return (
    <>
      <section className="project__container scroll" id="projects">
        <h2 className="project__header">Projects</h2>
        <div className="project__content">

          <ProjectCard image={akpica} altTitle={"akpica-ecommerce"} url={"https://akpica.netlify.app/"} title={"akpica ecommerce"} subTitle={"E-commerce Website"} />

          <ProjectCard image={battleGame} altTitle={"battle-game"} url={"https://github.com/akiko-luka/battle-game"} title={"Dragon⍟Ball 𝐙 Mini Battle Game"} subTitle={"Console-Based App"}/>

        </div>
      </section>
    </>
  );
};

export default Projects;
