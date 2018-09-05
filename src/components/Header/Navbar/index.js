import React from "react";
import { NavLink as Link } from "react-router-dom";

import "./style.css";
const Navbar = () => (
  <nav className="Navbar" id="Home">
    <div className="div_LogoWrapper_Navbar">
      <Link to="/">
        <img src="logo.png" alt="fasttrack logo" width="69px" />
      </Link>
    </div>
    <ul>
      <Link to="/#Home">
        <li>HOME</li>
      </Link>
      <a href="/#services">
        <li>SERVICES</li>
      </a>
      <Link to="/gallery">
        <li>GALLERY</li>
      </Link>
      <a href="#contact">
        <li>CONTACT</li>
      </a>
    </ul>
  </nav>
);
export default Navbar;
