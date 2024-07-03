import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext.jsx";

const pStyle = "leading-8 mb-4";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      id="about"
      className={`scroll flex flex-col items-center border-b-[3px] p-8 pb-20 ${darkMode ? "border-gray-dark bg-black-main text-white-main" : "border-gray-main"}`}
    >
      <h2 className="mb-16 mt-4 text-[2rem] font-[700]">About</h2>
      <div className="flex max-w-[700px] flex-col">
        <p className={pStyle}>
          Hey there! I'm <strong>Akiko Luka</strong>.
        </p>
        <p className={pStyle}>
          I'm currently studying to become a Full-Stack Web Developer at DCI
          Digital Career Institute.
        </p>
        <p className={pStyle}>
          Originally from <strong>Japan</strong> and now living in{" "}
          <strong>Berlin</strong>, I'm all about ramen, sushi, anime, and
          photography – which are common among many Japanese individuals..
        </p>
        <p className={pStyle}>
          Being a hard working individual with great attention and focus to
          details are attributes that I identify myself with, which is probably
          part of my culture such as animes, taking pictures and smiling.
        </p>
        <p className={pStyle}>
          Back in 2012, I earned my Bachelor's degree in Computer Science, but
          life had other plans, and I didn't end up in the tech world right
          away. Now, with a fresh start in Germany, I'm ready to dive back into
          the industry. My goal? To find an amazing team where I can grow,
          learn, and make some digital magic happen.
        </p>
      </div>
    </section>
  );
};

export default About;
