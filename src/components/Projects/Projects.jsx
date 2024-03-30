import { useEffect } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard.jsx";
import SmallProj from "../SmallProj/SmallProj.jsx";

// AOS - animation
import AOS from "aos";
import "aos/dist/aos.css";

// images
import portfolio from "../../assets/projects/ss-portfolio-dci.png";
import akpica from "../../assets/projects/akpica-screenshot.webp";
import battleGame from "../../assets/projects/battle-game.jpg";
// import ssbattle from "../../assets/projects/ss1.png";

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
            image={portfolio}
            altTitle={"first-portfolio"}
            imageUrl={"https://akiko-dci-portfolio.netlify.app/"}
            title={"personal portfolio"}
            description={
              "This portfolio represents my first project, which showcases my skills and projects, illustrating my progress in web development and design."
            }
            demoUrl={"https://akiko-dci-portfolio.netlify.app/"}
            codeUrl={"https://github.com/akiko-luka/portfolio-dci"}
          />

          <ProjectCard
            image={akpica}
            altTitle={"akpica-ecommerce"}
            imageUrl={"https://akpica.netlify.app/"}
            title={"akpica ecommerce"}
            description={
              "This eCommerce platform is designed to provide users with a range of features that make browsing, selecting, and purchasing products."
            }
            demoUrl={"https://akpica.netlify.app/"}
            codeUrl={"https://github.com/akiko-luka/akpica-ecommerce"}
          />

          <ProjectCard
            image={battleGame}
            altTitle={"battle-game"}
            imageUrl={"https://github.com/akiko-luka/battle-game"}
            title={"Mini Battle Game"}
            description={
              "A turn-based console game built using Node.js. Offering a Dragon Ball Z-themed gaming experience."
            }
            codeUrl={"https://github.com/akiko-luka/battle-game"}
          />
        </div>
      </section>
      <SmallProj />
    </>
  );
};

export default Projects;
