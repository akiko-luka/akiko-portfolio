import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav className="navbar-container">
      <Link className="logo" to={"/"}>Akiko Luka</Link>

    </nav>
    </>
  )
}

export default Navbar