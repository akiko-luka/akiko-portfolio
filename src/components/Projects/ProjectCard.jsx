import "./ProjectCard.css";

const ProjectCard = ({ url, image, altTitle, title, description }) => {
  return (
    <>
      <article className="card__container">
        <div className="card-proj">
          <a href={url} target="_blank">
            <img src={image} alt={altTitle} />
        <h3>{title}</h3>
        <p>{description}</p>
          </a>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
