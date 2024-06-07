const SkillsCard = ({ icon, altTitle, iconName }) => {
  return (
    <>
      <article className="mb-4 mr-2 w-[100px]">
        <div className="flex flex-col items-center justify-center">
          {/* img -> bg-white-main? */}
          <img
            src={icon}
            alt={altTitle}
            className="mb-[7px] h-[60px] w-[60px] object-contain object-center"
          />
          <p className="text-center uppercase">{iconName}</p>
        </div>
      </article>
    </>
  );
};

export default SkillsCard;
