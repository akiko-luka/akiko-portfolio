import { useEffect } from "react";
import "./SmallProj.css";

// icon
import { BsGithub } from "react-icons/bs";

// AOS - animation
import AOS from "aos";
import "aos/dist/aos.css";

// images
import stopwatch from "../../assets/small-proj/ss-stopwatch.png";
import todo from "../../assets/small-proj/ss-todo.png"

const SmallProj = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });
  }, []);
  return (
    <>
      <div className="small-proj__container">
        <h3 className="sp__header">Small Projects</h3>

        <div className="sp__content" data-aos="fade-up">
          <article className="sp-card">
            <a
              href="https://akiko-luka.github.io/stopwatch/"
              target="_blank"
              rel="noreferrer" >
              <img src={stopwatch} alt="stopwatch" />
              <p>stopwatch</p>
            </a>
          </article>
          
          <article className="sp-card">
            <a href="https://akiko-luka.github.io/todo-list/" target="_blank" rel="noreferrer">
              <img src={todo} alt="todo" />
              <p>todo-list</p>
            </a>
          </article>
        </div>
        <div className="seemore">
          <a href="https://github.com/akiko-luka" target="_blank" rel="noreferrer">
             See more on my Github <BsGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default SmallProj;
