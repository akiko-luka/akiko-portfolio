import React from "react";

const linksStyle =
  "text-white-main text-base md:text-2xl font-[700] p-[10px] transition duration-400 ease-in-out hover:rounded hover:outline outline-1 outline-[#ffffff1a] hover:shadow-box-shadow mr-1 active:bg-green-light active:text-blue-main";

const Navbar = () => {
  return (
    <div className="flex">
      <nav>
        <a href="#about" className={linksStyle}>
          About
        </a>
        <a href="#projects" className={linksStyle}>
          Projects
        </a>
        <a href="#contact" className={linksStyle}>
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
