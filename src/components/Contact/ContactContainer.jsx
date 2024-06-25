import ContactCard from "./ContactCard";

// icons
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";


const ContactContainer = () => {
  return (
    <>
      <section
        id="contact"
        className="scroll flex flex-col flex-wrap items-center border-b-[3px] border-gray-main p-8"
      >
        <h2 className="mb-4 mt-4 text-[2rem] font-[700]">Contact me</h2>

        <div className="flex gap-8 p-8">
          <ContactCard
            link={"mailto:ak.luka051@gmail.com"}
            title={"email"}
            icon={<FaEnvelope />}
          />
          <ContactCard
            link={"https://github.com/akiko-luka"}
            title={"github"}
            icon={<BsGithub />}
          />
          <ContactCard
            link={"https://www.linkedin.com/in/akiko-luka/"}
            title={"linkedin"}
            icon={<FaLinkedin />}
          />
          <ContactCard
            link={"https://twitter.com/iamAkiii_"}
            title={"x"}
            icon={<FaSquareXTwitter />}
          />
        </div>
      </section>
    </>
  );
};

export default ContactContainer;
