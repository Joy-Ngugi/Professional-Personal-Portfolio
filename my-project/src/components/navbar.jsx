// import React from "react";
import "../styles/styles.css"; // Import CSS
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h1 className="logo">Joy</h1> */}
      <div className="logo">
                <img src={logo} alt="Joy" className="logo" />
              </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

