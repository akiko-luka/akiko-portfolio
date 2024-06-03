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
        <p>Hey there! I'm Akiko Luka.</p>
        <p>
          I'm currently studying to become a Full-Stack Web Developer at DCI
          Digital Career Institute.
        </p>

        <p>
          Originally from Japan and now living in Berlin, I’m all about ramen,
          sushi, anime, and photography – pretty much the standard package for a
          Japanese geek like me.
        </p>

        <p>
          Being a hard working individual with great attention and focus to
          details are attributes that I identify myself with, which is probably
          part of my culture such as animes, taking pictures and smiling.
        </p>

        <p>
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
