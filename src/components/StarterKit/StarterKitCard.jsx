const StarterKitCard = ({ starterLink, starterImg, altTitle }) => {
  return (
    <article>
      <a href={starterLink} target="_blank" rel="noreferrer">
        <div className="h-[180px] w-[280px]">
          <img
            src={starterImg}
            alt={altTitle}
            className="mb-5 h-full w-full object-cover object-center shadow-box-shadow-dark transition-all duration-300 ease-out hover:shadow-none"
          />
        </div>
      </a>
    </article>
  );
};

export default StarterKitCard;
