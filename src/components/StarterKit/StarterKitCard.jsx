const StarterKitCard = ({ starterLink, starterImg, altTitle }) => {
  return (
    <article>
      <a href={starterLink} target="_blank" rel="noreferrer">
        <div>
          <img
            src={starterImg}
            alt={altTitle}
            className="mb-5 h-[180px] w-[280px] object-cover object-center transition-all duration-300 ease-out border-[2px] border-black-main shadow-box-shadow-dark hover:shadow-none"
          />
        </div>
      </a>
    </article>
  );
};

export default StarterKitCard;
