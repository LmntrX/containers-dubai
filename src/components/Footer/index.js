import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./style.css";
import './desktop.css';
import './tablet.css';
import './mobile.css';
const Footer = () => (
  <footer className="Footer">
    <span> © Fast Track Containers & Shipping Services</span>
    <ul>
      <a href="/#Home">
        <li>HOME</li>
      </a>
      <a href="/#services">
        <li>SERVICES</li>
      </a>
      <Link to="gallery">
        <li>GALLERY</li>
      </Link>
      <a href="/#contact">
        <li>CONTACT</li>
      </a>
    </ul>
    <a href="#ticker"><img src={require('assets/images/To Top.svg')} className="img_totop"></img></a>
  </footer>
);

export default Footer;
