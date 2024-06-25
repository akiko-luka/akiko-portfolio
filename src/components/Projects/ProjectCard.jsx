import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

// icons
import { IoPlaySharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({
  imageUrl,
  image,
  altTitle,
  title,
  description,
  demoUrl,
  codeUrl,
}) => {
  const { darkMode } = useContext(DarkModeContext);

  const btnStyle = `flex items-center justify-center gap-2 border-2 border-solid p-1 text-base font-[500] transition-all duration-200 ease-in-out hover:bg-green-light hover:text-blue-main hover:shadow-none active:bg-green-dark active:text-white-main active:shadow-none ${darkMode ? " text-white-main shadow-box-shadow-dark" : "bg-gray-main border-black-main shadow-box-shadow"}`;

  return (
    <>
      <article>
        <div
          className={`m-[10px] h-[430px] w-[300px] rounded-xl border-0 border-solid border-black-main ${darkMode ? "shadow-box-shadow-dark bg-gray-dark" : "bg-gray-main shadow-box-shadow"}`}
        >
          <a href={imageUrl} target="_blank">
            <img
              src={image}
              alt={altTitle}
              className="mb-2 h-[200px] w-[300px] rounded-t-xl object-cover object-center transition-all duration-200 ease-in-out hover:contrast-50"
            />
            <h3 className="pb-1 text-center text-lg font-[700] uppercase decoration-2 transition-all duration-200 ease-in-out hover:underline">
              {title}
            </h3>
          </a>
          <p className="mx-2 h-28 p-1 text-center">{description}</p>

          <div className="flex justify-between px-12 py-4">
            <div className="w-fit">
              <a href={codeUrl} target="_blank" className={btnStyle}>
                Code <BsGithub />
              </a>
            </div>

            {demoUrl && (
              <div className="w-fit">
                <a href={demoUrl} target="_blank" className={btnStyle}>
                  Live Demo <IoPlaySharp />
                </a>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
