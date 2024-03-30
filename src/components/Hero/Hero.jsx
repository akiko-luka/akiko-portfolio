import "./Hero.css";
import avatar from "../../assets/avatar.png";

const Hero = () => {

  return (
    <>
      <section className="hero__container">
        <div className="hero-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div>
        <h1 className="hero__title">Akiko Luka</h1>
        <h3 className="hero-sub">
          Full-Stack Web Developer
        </h3>
        </div>
      </section>
    </>
  );
};

export default Hero;
