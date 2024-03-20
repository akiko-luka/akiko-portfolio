import "./Hero.css";
import avatar from "../../assets/avatar.png";

const Hero = () => {

  return (
    <>
      <section className="hero__container">
        <div className="hero-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <h1 className="hero__title">Hi, I'm Akiko!</h1>
        <h3 className="hero-sub">
          Full-Stack Web Developer
        </h3>
      </section>
    </>
  );
};

export default Hero;
