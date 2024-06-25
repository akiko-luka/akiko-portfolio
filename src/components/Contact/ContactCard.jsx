import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

const ContactCard = ({ link, title, icon }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div
        className={`flex h-[50px] w-[50px] items-center justify-center border-2 border-solid text-[2rem] transition-all duration-100 ease-in-out hover:bg-green-light hover:text-blue-main hover:shadow-none ${darkMode ? "shadow-box-shadow-dark bg-gray-dark" : "border-black-main bg-gray-main shadow-box-shadow"}`}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          title={title}
          className=""
        >
          {icon}
        </a>
      </div>
    </>
  );
};

export default ContactCard;
