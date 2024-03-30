import "./ProjectCard.css";

// icons
import { IoPlaySharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ imageUrl, image, altTitle, title, description, demoUrl, codeUrl }) => {
  return (
    <>
      <article className="card__container">
        <div className="card-proj">
          <a href={imageUrl} target="_blank">
            <img src={image} alt={altTitle} />
            <h3>{title}</h3>
          </a>
          <p>{description}</p>

          <div className="btn">
            {demoUrl && (
              <div className="demo">
                <a href={demoUrl} target="_blank">
                  Live Demo <IoPlaySharp />
                </a>
              </div>
            )}

            <div className="code">
              <a href={codeUrl} target="_blank">
                Code <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
