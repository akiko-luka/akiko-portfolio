import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext.jsx";

// image
import avatar from "../assets/avatar.png";
import bg from "../assets/jp-drawing.webp"

const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <section
        className={`flex h-[60vh] items-center justify-center md:gap-16 border-b-[3px] ${darkMode ? "border-gray-dark bg-black-main text-white-main" : "border-gray-main"}`}
      >
        <div className="h-auto w-40 md:w-[250px]">
          <img
            src={avatar}
            alt="avatar"
            className="mx-4 h-full w-full md:mr-8"
          />
        </div>
        <div>
          <h1 className="mb-4 p-[5px] text-4xl font-[900] md:text-6xl">
            Akiko Luka
          </h1>
          <h3 className="ml-2 text-2xl">Full-Stack Web Developer</h3>
          {/* animation and responsiveness*/}
        </div>
      </section>
    </>
  );
};

export default Hero;
