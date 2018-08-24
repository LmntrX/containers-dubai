import React from "react";
import { NavLink as Link } from "react-router-dom";

import "./style.css";
const Navbar = () => (
  <nav className="Navbar">
    <div>
      <Link to="/">
        <img src="logo.png" alt="fasttrack logo" />
      </Link>
    </div>
    <ul>
      <Link to="/">
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
