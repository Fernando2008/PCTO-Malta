import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos";
import "../css/page.css";
import "../css/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, [isOpen]);

  const toggleHamburger = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <NavLink to={"/"} className="logo">
          Logo
        </NavLink>

        <nav className="navbar">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/images"}>Avventura</NavLink>
          <NavLink to={"/images"}>Immagini</NavLink>
          <NavLink to={"/images"}>About</NavLink>
          <NavLink to={"/images"}>Contact Us</NavLink>
        </nav>

        <nav className={isOpen ? "hamburger open" : "hamburger"}>
          <div className="lines-wrapper" onClick={toggleHamburger}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          <div
            data-aos="fade-zoom-in"
            data-offset="500"
            data-aos-easing="linear"
            data-aos-duration="300"
            className={isOpen ? "hamburger-links open" : "hamburger-links"}
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/images"}>Avventura</NavLink>
            <NavLink to={"/images"}>Immagini</NavLink>
            <NavLink to={"/images"}>About</NavLink>
            <NavLink to={"/images"}>Contact Us</NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
