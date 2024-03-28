import { useEffect } from "react";
import "./About.css";

// AOS - animation
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" });
  }, []);
  return (
    <section className="about__container scroll" id="about">
      <div className="about__header">
        <h2>About</h2>
      </div>
      <div className="about__content" data-aos="fade-up">
        <p>Hi there! My name is Akiko.</p>
        <p>I'm currently studying to become a full-stack Web Developer at DCI.</p>
        <p>I am from Japan and now living in Berlin, love ramen, sushi and am also into anime and taking pictures such as most Japanese, I guess.</p>
        <p>Being a hard working individual with great attention and focus to details are attributes that I identify myself with, which is probably part of my culture such as animes, taking pictures and smiling.</p>
        <p>In 2012, I finished my Bachelor's degree in Computer Science but didn't end up in my profession. Now, after moving to Germany, I am giving it a new shot and my goal is to join or work in a fantastic group that will help me to keep growing in this exciting industry.</p>
      </div>
    </section>
  );
};

export default About;
