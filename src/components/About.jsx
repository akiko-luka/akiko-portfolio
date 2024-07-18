import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext.jsx";

import avatar from "../assets/avatar.png";

const pStyle = "leading-8 mb-4";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      id="about"
      className={`scroll flex flex-col items-center border-b-[3px] p-8 pb-20 ${darkMode ? "border-gray-dark bg-black-main text-white-main" : "border-gray-main"}`}
    >
      <h2 className="mb-16 mt-4 font-jp-font text-4xl font-[700]">About</h2>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="flex max-w-[700px] flex-col">
          <p className="text-xl">
            Hey there! I'm <strong>Akiko Luka</strong>.
          </p>
          <p className={pStyle}>
            A <strong>Full-Stack Web Developer</strong>
          </p>
          <p className={pStyle}>
            Originally from <strong>Japan</strong> and now living in{" "}
            <strong>Berlin</strong>, I'm all about ramen, sushi, anime, and
            photography – which are common among many Japanese individuals.
          </p>
          <p className={pStyle}>
            In 2012, I earned a Bachelor's degree in{" "}
            <strong>Computer Science</strong>, but life took me in a different
            direction, leading me to gain experience in{" "}
            <strong>Customer Service</strong> through various customer-oriented
            roles. This experience has honed my ability to provide innovative,
            customized solutions for customers and taught me the importance of
            prioritizing customer interests, a value deeply cherished in Japan.
          </p>
          <p className={pStyle}>
            Now embarking on a new chapter in Germany, I have recently completed
            an epic journey through the{" "}
            <strong>Full-Stack Web Developement</strong> program at DCI Digital
            Career Institute. I am eager to join a dynamic team where I can
            leverage my unique combination of customer service expertise and
            coding skills to create exceptional web solutions. My goal is to
            thrive in an inspiring environment where I can grow, learn, and
            contribute to creating digital magic.
          </p>
          <p className={pStyle}>
            I specialize in the MERN stack, utilizing React.js for dynamic
            frontends, Node.js and Express.js for robust backends, and MongoDB
            for flexible data storage solutions.
          </p>
        </div>
        <div className="w-48 md:w-64">
          <img src={avatar} alt="avatar" className="" />
        </div>
      </div>
    </section>
  );
};

export default About;
