import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext.jsx";

import SkillsCard from "./SkillsCard";

// icons
import bootstrap from "../../assets/icons/icon-bootstrap.webp";
import css from "../../assets/icons/icon-css.webp";
import express from "../../assets/icons/icon-express.webp";
import git from "../../assets/icons/icon-git.webp";
import github from "../../assets/icons/icon-github.webp";
import html from "../../assets/icons/icon-html.webp";
import js from "../../assets/icons/icon-js.webp";
import mongodb from "../../assets/icons/icon-mongodb.webp";
import node from "../../assets/icons/icon-node.webp";
import react from "../../assets/icons/icon-react.webp";
import sass from "../../assets/icons/icon-sass.webp";
import tailwind from "../../assets/icons/icon-tailwind.webp";
// import ts from "../../assets/icons/icon-ts.png";
import vscode from "../../assets/icons/icon-vscode.webp";

const SkillsContainer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      className={`flex flex-wrap items-center justify-center border-b-[3px] p-8 pb-20 md:flex-col ${darkMode ? "border-gray-dark bg-black-main text-white-main" : "border-gray-main text-black-main"}`}
    >
      <h2 className="mb-16 mt-4 font-jp-font text-3xl font-[700]">
        Tech Stack
      </h2>
      <article className="m-auto flex h-full flex-wrap justify-center">
        <div className="flex w-auto items-center justify-center md:w-11/12">
          <SkillsCard
            icon={mongodb}
            altTitle={"mongodb"}
            iconName={"mongodb"}
          />
          <SkillsCard
            icon={express}
            altTitle={"express.js"}
            iconName={"express.js"}
          />
          <SkillsCard icon={react} altTitle={"react"} iconName={"react"} />
          <SkillsCard icon={node} altTitle={"node.js"} iconName={"node.js"} />
        </div>

        <div className="flex w-full flex-wrap items-center justify-center md:w-11/12">
          <SkillsCard
            icon={js}
            altTitle={"javaScript"}
            iconName={"javaScript"}
          />
          <SkillsCard
            icon={tailwind}
            altTitle={"tailwind"}
            iconName={"tailwind"}
          />
          <SkillsCard icon={html} altTitle={"html"} iconName={"html"} />
          <SkillsCard icon={css} altTitle={"css"} iconName={"css"} />
          <SkillsCard icon={git} altTitle={"git"} iconName={"git"} />
          <SkillsCard icon={github} altTitle={"github"} iconName={"github"} />
          <SkillsCard icon={vscode} altTitle={"vscode"} iconName={"vscode"} />
          <SkillsCard
            icon={bootstrap}
            altTitle={"bootstrap"}
            iconName={"bootstrap"}
          />
          <SkillsCard icon={sass} altTitle={"sass"} iconName={"sass"} />
          {/* <SkillsCard icon={ts} altTitle={"typescript"} iconName={"typescript"} /> */}
        </div>
      </article>
    </section>
  );
};

export default SkillsContainer;
