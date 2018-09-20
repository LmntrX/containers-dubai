import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./style.css";
import "./desktop.css";
import "./tablet.css";
import "./mobile.css";
import { HashLink as HLink } from 'react-router-hash-link';
const Footer = () => (
  <footer className="Footer">
    <span> © Fast Track Container & Shipping Services</span>
    <ul>
      <a href="/">
        <li>HOME</li>
      </a>
      {/* <a href="/#services">
        <li>SERVICES</li>
      </a> */}
      <HLink to="/#services"><li>SERVICES</li></HLink>
      <Link to="gallery">
        <li>GALLERY</li>
      </Link>
      {/* <a href="/#contact">
        <li>CONTACT</li>
      </a> */}
      <HLink to="/#contact"><li>CONTACT</li></HLink>
    </ul>
    <img
      src={require("assets/images/To Top.svg")}
      className="img_totop"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    />
  </footer>
);

export default Footer;
