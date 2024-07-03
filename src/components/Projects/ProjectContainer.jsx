import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

import ProjectCard from "./ProjectCard";
import SmallProj from "../SmallProj/SmallProjContainer";
import StarterKitContainer from "../StarterKit/StarterKitContainer.jsx";

// images
import portfolioDci from "../../assets/projects/portfolio-dci.webp";
import akpicaEcommerce from "../../assets/projects/akpica-ecommerce.webp";
// import battleGame from "../../assets/projects/battle-game.webp";
import theProjects from "../../assets/projects/the-projects.webp";
import akpicaBlog from "../../assets/projects/akpica-blog.webp";
import ccEcommerce from "../../assets/projects/ecommerce-crusaders.webp";
import gridx from "../../assets/projects/gridx.webp";

const ProjectContainer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <section
        id="projects"
        className={`scroll flex flex-col items-center justify-center border-b-[3px] p-8 pb-20 ${darkMode ? "border-gray-dark bg-black-main text-white-main" : "bg-green-light"}`}
      >
        <h2 className="mb-16 mt-4 text-[2rem] font-[700]">Projects</h2>
        <div className="m-auto flex h-full flex-wrap justify-center gap-4">
          <ProjectCard
            image={akpicaBlog}
            altTitle={"akpica-blog"}
            imageUrl={"https://akpicablog.netlify.app/"}
            title={"akpica blog"}
            description={
              "This blog provides web development resources, offering tools and knowledge for developers of all levels to succeed."
            }
            codeUrl={"https://github.com/akiko-luka/akpica-blog"}
            demoUrl={"https://akpicablog.netlify.app/"}
          />

          <ProjectCard
            image={akpicaEcommerce}
            altTitle={"akpica-ecommerce"}
            imageUrl={"https://akpica.netlify.app/"}
            title={"akpica ecommerce"}
            description={
              "This eCommerce platform is designed to provide users with a range of features that make browsing, selecting, and purchasing products."
            }
            codeUrl={"https://github.com/akiko-luka/akpica-ecommerce"}
            demoUrl={"https://akpica.netlify.app/"}
          />

          <ProjectCard
            image={theProjects}
            altTitle={"the-projects"}
            imageUrl={"https://the-projects-js.netlify.app/"}
            title={"the projects"}
            description={
              "JavaScript Projects for mastering the art of web development through hands-on practice with Vanilla JavaScript."
            }
            codeUrl={"https://github.com/Pilag6/the-projects"}
            demoUrl={"https://the-projects-js.netlify.app/"}
          />

          <ProjectCard
            image={ccEcommerce}
            altTitle={"crusaders-ecommerce"}
            imageUrl={"https://crusaders-ecommerce.netlify.app/"}
            title={"Crusaders Ecommerce"}
            description={
              "This eCommerce website, built with HTML, CSS, and JavaScript, features product browsing, a shopping cart, and a responsive design."
            }
            demoUrl={"https://crusaders-ecommerce.netlify.app/"}
            codeUrl={"https://github.com/akiko-luka/ecommerce-crusaders"}
          />
          <ProjectCard
            image={gridx}
            altTitle={"gridx"}
            imageUrl={"https://gridxportfolio.netlify.app/"}
            title={"gridx portfolio"}
            description={
              "GridX is a responsive portfolio template with a clean design and smooth animations, built with HTML, CSS, and JavaScript."
            }
            demoUrl={"https://gridxportfolio.netlify.app/"}
            codeUrl={"https://github.com/akiko-luka/gridX"}
          />
          <ProjectCard
            image={portfolioDci}
            altTitle={"first-portfolio"}
            imageUrl={"https://akiko-dci-portfolio.netlify.app/"}
            title={"first project"}
            description={
              "This project showcases my basic HTML and CSS skills, marking a key milestone in my web development journey."
            }
            codeUrl={"https://github.com/akiko-luka/portfolio-dci"}
            demoUrl={"https://akiko-dci-portfolio.netlify.app/"}
          />
        </div>
      </section>
      <SmallProj />
      <StarterKitContainer />
    </>
  );
};

export default ProjectContainer;
