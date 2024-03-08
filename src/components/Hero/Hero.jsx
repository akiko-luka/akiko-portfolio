import "./Hero.css";

// icon
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="hero__container">
        <h1 className="hero__title">Hi, I'm Akiko!</h1>
        <div className="hero-btn">
          <a href="#about"><FaAngleDoubleDown /></a>
        </div>
      </section>
    </>
  );
};

export default Hero;
