import "./ProjectCard.css";

const ProjectCard = ({ url, image, altTitle, title, subTitle }) => {
  return (
    <>
      <article className="card__container">
        <div className="card">
          <a href={url} target="_blank">
            <img src={image} alt={altTitle} />
        <h3>{title}</h3>
        <p>{subTitle}</p>
          </a>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
