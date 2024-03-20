import { useEffect } from "react";
import "./Skills.css";
import SkillsCard from "./SkillsCard.jsx";

// AOS - animation
import AOS from "aos";
import "aos/dist/aos.css";

// logos
import bootstrap from "../../assets/icons/icon-bootstrap.png";
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
import vscode from "../../assets/icons/icon-vscode.png";

const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 1500, easing:"ease-in-out" });
  }, []);

  return (
    <>
      <section className="skills__container">
        <h2 className="skills__header">Tech Stack</h2>
        <div className="skills__content" data-aos="fade-up">
          <SkillsCard
            logo={js}
            altTitle={"javaScript"}
            logoName={"javaScript"}
          />
          <SkillsCard
            logo={mongodb}
            altTitle={"mongodb"}
            logoName={"mongodb"}
          />
          <SkillsCard
            logo={express}
            altTitle={"express.js"}
            logoName={"express.js"}
          />
          <SkillsCard logo={react} altTitle={"react"} logoName={"react"} />
          <SkillsCard logo={node} altTitle={"node.js"} logoName={"node.js"} />
          <SkillsCard logo={html} altTitle={"html"} logoName={"html"} />
          <SkillsCard logo={css} altTitle={"css"} logoName={"css"} />
          <SkillsCard logo={git} altTitle={"git"} logoName={"git"} />
          <SkillsCard logo={github} altTitle={"github"} logoName={"github"} />
          <SkillsCard logo={vscode} altTitle={"vscode"} logoName={"vscode"} />
          <SkillsCard
            logo={markdown}
            altTitle={"markdown"}
            logoName={"markdown"}
          />
          <SkillsCard logo={ps} altTitle={"photoshop"} logoName={"photoshop"} />
          <SkillsCard
            logo={bootstrap}
            altTitle={"bootstrap"}
            logoName={"bootstrap"}
          />
          <SkillsCard logo={sass} altTitle={"sass"} logoName={"sass"} />
        </div>
      </section>
    </>
  );
};

export default Skills;
