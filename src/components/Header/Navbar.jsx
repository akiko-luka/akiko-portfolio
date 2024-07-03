import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";

// icons
import { LuMoonStar, LuSun } from "react-icons/lu";

const linksStyle =
  "text-white-main text-base md:text-2xl font-[700] px-1 md:p-[10px] transition duration-400 ease-in-out hover:rounded hover:outline outline-1 outline-[#ffffff1a] hover:shadow-box-shadow mr-1 active:bg-green-light active:text-blue-main";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex">
      <nav>
        <button
          onClick={toggleDarkMode}
          className="duration-400 mr-1 p-[10px] pr-2 text-xl text-white-main outline-1 outline-[#ffffff1a] transition ease-in-out hover:rounded hover:shadow-box-shadow hover:outline active:bg-green-light active:text-blue-main"
        >
          {darkMode ? (
            <LuSun title="light mode" />
          ) : (
            <LuMoonStar title="dark mode" />
          )}
        </button>
        <a href="#projects" className={linksStyle}>
          Projects
        </a>
        <a href="#contact" className={linksStyle}>
          Contact
        </a>
        <a href="#about" className={linksStyle}>
          About
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
