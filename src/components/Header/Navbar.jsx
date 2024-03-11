import "./Navbar.css";
import logo from "../../assets/logo.jpg"

const Navbar = () => {
  return (
    <>
      <nav className="navbar__container">
        <div className="logo">
          <a href="#"><img src={logo} alt="" /></a>
        </div>
        <ul className="navbar__menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
