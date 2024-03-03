import "./Projects.css";
import ProjectCard from "./ProjectCard.jsx";

// images
import battleGame from "../../assets/projects/battle-game.jpg";
import akpica from "../../assets/projects/akpica-screenshot.webp";

const Projects = () => {
  return (
    <>
      <section class="project__container scroll" id="projects">
        <h2 class="project__heading">Projects</h2>
        <div class="project__content">

          <ProjectCard image={akpica} altTitle={"akpica-ecommerce"} url={"https://akpica.netlify.app/"} title={"akpica ecommerce"} />
          <ProjectCard image={battleGame} altTitle={"battle-game"} title={"Dragon⍟Ball 𝐙 Mini Battle Game"}/>

        </div>
      </section>
    </>
  );
};

export default Projects;
