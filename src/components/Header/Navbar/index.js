import React from "react";
import { NavLink as Link } from "react-router-dom";

import "./style.css";
import './desktop.css';
import './tablet.css'; 
import './mobile.css';
class Navbar extends React.Component{
  navbarFullWidth=(
    <nav className="Navbar" id="Home">
        <div className="div_LogoWrapper_Navbar">
          <Link to="/">
            <img className="img_logoNav" src="logo.png" alt="fasttrack logo" width="69px" />
          </Link>
        </div>
        <ul>
          <a href="/#Home">
            <li>HOME</li>
          </a>
          <a href="/#services">
            <li>SERVICES</li>
          </a>
          <Link to="/gallery">
            <li>GALLERY</li>
          </Link>
          <a href="/#contact">
            <li>CONTACT</li>
          </a>
        </ul>
      </nav>
  );

  navbarCollapsed=(
    <div className="NavbarCollapsed">
      <div>
        <Link to="/">
          <img className="img_logoNav" src="logo.png" alt="fasttrack logo" width="69px" />
        </Link>
        <img className="img_Navbarcollapsed_HamburgerMenu" src={require('assets/images/hamburger.svg')}/>
      </div>
      <ul>
        <a href="/#Home">
          <li>HOME</li>
        </a>
        <a href="/#services">
          <li>SERVICES</li>
        </a>
        <Link to="/gallery">
          <li>GALLERY</li>
        </Link>
        <a href="/#contact">
          <li>CONTACT</li>
        </a>
      </ul>
    </div>
  );
  render(){
    if(window.innerWidth<768){
      this.componentTobeRendered=this.navbarCollapsed;
    }
    else{
      this.componentTobeRendered=this.navbarFullWidth;
    }
    return(
      this.componentTobeRendered
    );
  }
}
export default Navbar;
