import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./style.css";
const Footer = () => (
  <footer className="Footer">
    <span> © Fast Track Containers & Shipping Services</span>
    <ul>
      <Link to="/#Home">
        <li>HOME</li>
      </Link>
      <Link to="/#services">
        <li>SERVICES</li>
      </Link>
      <Link to="gallery">
        <li>GALLERY</li>
      </Link>
      <Link to="/#contact">
        <li>CONTACT</li>
      </Link>
    </ul>
    <ul>
      <li>????</li>
    </ul>
  </footer>
);

export default Footer;
