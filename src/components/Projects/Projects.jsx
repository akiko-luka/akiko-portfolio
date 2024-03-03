import "./Projects.css";

// images
import battleGame from "../../assets/projects/battle-game.jpg"
import akpica from "../../assets/projects/akpica-screenshot.webp"

const Projects = () => {
  return (
    <>
      <section class="project__container scroll" id="projects">
        <h2 class="project__heading">Projects</h2>
        <div class="project__content">
          <div class="project__card">
            <a href="https://akpica.netlify.app/" target="_blank"><img src={akpica} alt="akpica" />
            </a>
          </div>
            <h3>AKPICA ecommerce</h3>
          <div class="project__card">
            <img src={battleGame} alt="battle-game" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
