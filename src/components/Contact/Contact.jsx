import "./Contact.css";

// icons
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="contact__container" id="contact">
        <h2 className="contact__header">Contact me</h2>
        <div className="contact__content">

        <div className="icons">
            <a href="mailto:ak.luka051@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
            </a>
          </div>
          
          <div className="icons">
            <a href="https://github.com/akiko-luka" target="_blank" rel="noreferrer">
          <BsGithub />
            </a>
          </div>

          <div className="icons">
            <a href="https://www.linkedin.com/in/akiko-luka/" target="_blank" rel="noreferrer">
          <FaLinkedin />
            </a>
          </div>

          <div className="icons">
            <a href="https://twitter.com/iamAkiii_" target="_blank" rel="noreferrer">
          <FaSquareXTwitter />
            </a>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default Contact;
