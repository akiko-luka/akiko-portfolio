import "./Skills.css";
import SkillsCard from "./SkillsCard.jsx";

// logos
import bootstrap from "../../assets/icons/icon-bootstrap.png"
import css from "../../assets/icons/icon-css.png"
import git from "../../assets/icons/icon-git.png"
import github from "../../assets/icons/icon-github.png"
import html from "../../assets/icons/icon-html.png"
import js from "../../assets/icons/icon-js.png"
import markdown from "../../assets/icons/icon-markdown.png"
import node from "../../assets/icons/icon-node.webp"
import ps from "../../assets/icons/icon-photoshop.png"
import react from "../../assets/icons/icon-react.png"
import sass from "../../assets/icons/icon-sass.png"
import vscode from "../../assets/icons/icon-vscode.png"

const Skills = () => {
  return (
    <>
      <section className="skills__container">
        <h2 className="skills__header">Tech Stack</h2>
        <div className="skills__content">

         <SkillsCard logo={html} altTitle={"html"} logoName={"html"}/>
         <SkillsCard logo={css} altTitle={"css"} logoName={"css"}/>
         <SkillsCard logo={js} altTitle={"javaScript"} logoName={"javaScript"}/>
         <SkillsCard logo={node} altTitle={"node"} logoName={"nodeJS"}/>
         <SkillsCard logo={react} altTitle={"react"} logoName={"reactJS"}/>
         <SkillsCard logo={git} altTitle={"git"} logoName={"git"}/>
         <SkillsCard logo={github} altTitle={"github"} logoName={"github"}/>
         <SkillsCard logo={vscode} altTitle={"vscode"} logoName={"vscode"}/>
         <SkillsCard logo={markdown} altTitle={"markdown"} logoName={"markdown"}/>
         <SkillsCard logo={ps} altTitle={"photoshop"} logoName={"photoshop"}/>
         <SkillsCard logo={sass} altTitle={"sass"} logoName={"sass"}/>
         <SkillsCard logo={bootstrap} altTitle={"bootstrap"} logoName={"bootstrap"}/>
        </div>
      </section>
    </>
  );
};

export default Skills;
