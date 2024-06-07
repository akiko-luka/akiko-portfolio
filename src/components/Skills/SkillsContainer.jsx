import SkillsCard from "./SkillsCard";

// icons
import bootstrap from "../../assets/icons/icon-bootstrap.png"
import css from "../../assets/icons/icon-css.png";
import express from "../../assets/icons/icon-express.png";
import git from "../../assets/icons/icon-git.png";
import github from "../../assets/icons/icon-github.png";
import html from "../../assets/icons/icon-html.png";
import js from "../../assets/icons/icon-js.png";
import markdown from "../../assets/icons/icon-markdown.png";
import mongodb from "../../assets/icons/icon-mongodb.png";
import node from "../../assets/icons/icon-node.webp";
import ps from "../../assets/icons/icon-photoshop.png";
import react from "../../assets/icons/icon-react.png";
import sass from "../../assets/icons/icon-sass.png";
import tailwind from "../../assets/icons/icon-tailwind.png";
// import ts from "../../assets/icons/icon-ts.png";
import vscode from "../../assets/icons/icon-vscode.png";

const SkillsContainer = () => {
  return (
    <section className="border-gray-main flex md:flex-col flex-wrap items-center justify-center border-b-[3px] p-8 pb-20">
      <h2 className="mb-16 mt-4 text-2xl font-[700]">Tech Stack</h2>
      <div className="m-auto flex w-[700px] flex-wrap items-start justify-center">

        <SkillsCard icon={js} altTitle={"javaScript"} iconName={"javaScript"} />
        <SkillsCard icon={mongodb} altTitle={"mongodb"} iconName={"mongodb"} />
        <SkillsCard
          icon={express}
          altTitle={"express.js"}
          iconName={"express.js"}
        />
        <SkillsCard icon={react} altTitle={"react"} iconName={"react"} />
        <SkillsCard icon={node} altTitle={"node.js"} iconName={"node.js"} />
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
          icon={markdown}
          altTitle={"markdown"}
          iconName={"markdown"}
        />
        <SkillsCard icon={ps} altTitle={"photoshop"} iconName={"photoshop"} />
        <SkillsCard
          icon={bootstrap}
          altTitle={"bootstrap"}
          iconName={"bootstrap"}
        />
        <SkillsCard icon={sass} altTitle={"sass"} iconName={"sass"} />
        {/* <SkillsCard icon={ts} altTitle={"typescript"} iconName={"typescript"} /> */}
      </div>
    </section>
  );
};

export default SkillsContainer;
