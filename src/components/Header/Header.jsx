import Navbar from "./Navbar";

// logo
import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <header className="bg-green-dark sticky top-0 z-10 flex h-[100px] flex-wrap items-center justify-between px-2 md:px-24">
      <a href="#">
        <img
          src={logo}
          alt="logo"
          className="shadow-box-shadow mb-2 ml-4 w-[70px] active:scale-95 transition duration-400 ease-in-out"
        />
      </a>

      <Navbar />
    </header>
  );
};

export default Header;
