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
        <h2 className="about__header">About</h2>
      <div className="about__content" data-aos="fade-up">
        <p>Hi there! I'm Akiko Luka.</p>
        <p>I'm currently studying to become a Full-Stack Web Developer at DCI Digital Career Institute.</p>
        <p>Originally from Japan and now living in Berlin, love ramen, sushi, along with interests in anime and photography, which are common among many Japanese individuals.</p>
        <p>Being a hard working individual with great attention and focus to details are attributes that I identify myself with, which is probably part of my culture such as animes, taking pictures and smiling.</p>
        <p>In 2012, I finished my Bachelor's degree in Computer Science but didn't end up in my profession. Now, after moving to Germany, I am giving it a new shot and my goal is to join or work in a fantastic group that will help me to keep growing in this exciting industry.</p>
      </div>
    </section>
  );
};

export default About;
