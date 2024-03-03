import "./ProjectCard.css";

const ProjectCard = ({ title, url, image, altTitle }) => {
  return (
    <>
      <article className="card__container">
        <div class="card">
          <a href={url} target="_blank">
            <img src={image} alt={altTitle} />
          </a>
        </div>
        <h3>{title}</h3>
      </article>
    </>
  );
};

export default ProjectCard;
