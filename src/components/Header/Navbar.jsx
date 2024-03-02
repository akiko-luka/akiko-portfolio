import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar__container">
        <div class="logo">
          <a href="#">Akiko Luka</a>
        </div>
        <ul class="navbar__menu">
          <li><a href="#aboutme">About</a></li>
          <li><a href="#myprojects">Projects</a></li>
          <li><a href="#contactme">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
