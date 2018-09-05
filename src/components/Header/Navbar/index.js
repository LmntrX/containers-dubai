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
      <Link to="/#services">
        <li>SERVICES</li>
      </Link>
      <Link to="/gallery">
        <li>GALLERY</li>
      </Link>
      <Link to="/#contact">
        <li>CONTACT</li>
      </Link>
    </ul>
  </nav>
);
export default Navbar;
