import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext.jsx";

// image
import bg from "../assets/jp-drawing.webp";

const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <section
        className={`font-jp-font relative flex h-[60vh] items-center justify-center border-b-[3px] md:gap-16 ${darkMode ? "border-gray-dark bg-black-main" : "border-gray-main"}`}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-white-main opacity-60"
          aria-hidden="true"
        ></div>
        <div className="relative text-black-main bg-white-main/70"
          style={{
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.75)",
          }}
        >
          <h1 className="mb-4 p-[5px] text-center text-4xl font-[900] md:text-8xl">
            Akiko Luka
          </h1>
          <h3 className="ml-2 text-center text-2xl font-[900] md:text-3xl">
            Full-Stack Web Developer
          </h3>
        </div>
      </section>
    </>
  );
};

export default Hero;
