import ProjectCard from "./ProjectCard";
import SmallProj from "../SmallProj/SmallProjContainer";

// images
import portfolioDci from "../../assets/projects/portfolio-dci.png";
import akpica from "../../assets/projects/akpica-screenshot.webp";
import battleGame from "../../assets/projects/battle-game.jpg";
import theProjects from "../../assets/projects/the-projects.jpeg";

const ProjectContainer = () => {
  return (
    <>
      <section
        id="projects"
        className="scroll border-gray-main flex items-center justify-center border-b-[3px] p-8 pb-20 flex-col"
      >
        <h2 className="mb-16 mt-4 text-[2rem] font-[700]">Projects</h2>
        <div className="m-auto flex h-full flex-wrap justify-center gap-4 p-0">
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
            image={theProjects}
            altTitle={"the-projects"}
            imageUrl={"https://the-projects-js.netlify.app/"}
            title={"the projects"}
            description={
              "JavaScript Projects for mastering the art of web development through hands-on practice with Vanilla JavaScript."
            }
            demoUrl={"https://the-projects-js.netlify.app/"}
            codeUrl={"https://github.com/Pilag6/the-projects"}
          />

          <ProjectCard
            image={portfolioDci}
            altTitle={"first-portfolio"}
            imageUrl={"https://akiko-dci-portfolio.netlify.app/"}
            title={"first project"}
            description={
              "This portfolio represents my first project, which showcases my skills and projects, illustrating my progress in web development and design."
            }
            demoUrl={"https://akiko-dci-portfolio.netlify.app/"}
            codeUrl={"https://github.com/akiko-luka/portfolio-dci"}
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

export default ProjectContainer;
