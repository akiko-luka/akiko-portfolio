import "./Hero.css";
import avatar from "../../assets/avatar.png";

// icon
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="hero__container">
        
          <div className="hero-avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <h1 className="hero__title">Hi, I'm Akiko!</h1>
          <h3 className="hero-sub">Full-Stack Web Developer</h3>

          {/* <div className="hero-btn">
            <a href="#about">
              <FaAngleDoubleDown />
            </a>
          </div> */}
        
      </section>
    </>
  );
};

export default Hero;
