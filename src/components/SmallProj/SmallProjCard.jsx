const SmallProjCard = ({ spUrl, spImage, altTitle, spTitle }) => {
  return (
    <>
      <article>
        <a href={spUrl} target="_blank">
          <img
            src={spImage}
            alt={altTitle}
            className="shadow-box-shadow mb-5 h-[150px] w-[250px] object-cover object-center outline-none transition-all duration-300 ease-out md:hover:scale-110"
          />
          <p className="text-center font-[500] uppercase decoration-2 hover:underline">
            {spTitle}
          </p>
        </a>
      </article>
    </>
  );
};

export default SmallProjCard;
