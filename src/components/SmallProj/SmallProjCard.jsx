import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

const SmallProjCard = ({ spUrl, spImage, altTitle, spTitle }) => {
 const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <article>
        <a href={spUrl} target="_blank">
          <img
            src={spImage}
            alt={altTitle}
            className={`mb-5 h-[150px] w-[250px] object-cover object-center outline-none transition-all duration-300 ease-out md:hover:scale-110 ${darkMode ? "shadow-box-shadow-dark" : "shadow-box-shadow"}`}
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
