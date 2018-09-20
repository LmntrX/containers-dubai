import React from "react";
import { NavLink as Link } from "react-router-dom";

import "./style.css";
import './desktop.css';
import './tablet.css'; 
import './mobile.css';
import Ticker from '../Ticker';
import { HashLink as HLink } from 'react-router-hash-link';

class Navbar extends React.Component{
  state={
    expanded:false
  }
  navbarFullWidth=(
    <nav className="Navbar" id="Home">
        <div className="div_LogoWrapper_Navbar">
          <Link to="/">
            <img className="img_logoNav" src="logo.png" alt="fasttrack logo" width="69px" />
          </Link>
        </div>
        <ul>
          <a href="/">
            <li>HOME</li>
          </a>
          {/* <a href="##services">
            <li>SERVICES</li>
          </a> */}
          <HLink to="/#services"><li>SERVICES</li></HLink>
          <Link to="/gallery">
            <li>GALLERY</li>
          </Link>
          {/* <a href="/#contact">
            <li>CONTACT</li>
          </a> */}
          <HLink to="/#contact"><li>CONTACT</li></HLink>
        </ul>
      </nav>
  );
  menuToggle=()=>{
    this.setState({
      ...this.state,
      expanded:!this.state.expanded
    });
  }
  navbarCollapsed=()=>{
    return(
      <div className="NavbarCollapsed">
      <div className="div_MenuTopbar">
        <Link to="/">
          <img className="img_logoNav" src="logo.png" alt="fasttrack logo" width="69px" />
        </Link>
        <img onClick={this.menuToggle} className="img_Navbarcollapsed_HamburgerMenu" src={require('assets/images/hamburger.svg')}/>
      </div>
      {(this.state.expanded?
      <div className="NavbarCollapseInner">
        <img src={require('assets/images/Close.svg')} id="CollapseMenuCloseSVG" onClick={()=>{
          this.menuToggle();
          window.scrollTo(0,0);
        }}/>
        <ul>
          <a href="/">
            <li onClick={()=>{this.menuToggle()}}>HOME</li>
          </a>
          {/* <HLink to="/#Home"><li onClick={()=>{this.menuToggle()}}>HOME</li></HLink> */}
          {/* <a href="/#services">
            <li onClick={()=>{this.menuToggle()}}>SERVICES</li>
          </a> */}
          <HLink to="/#services"><li onClick={()=>{this.menuToggle()}}>SERVICES</li></HLink>
          <Link to="/gallery">
            <li onClick={()=>{this.menuToggle()}}>GALLERY</li>
          </Link>
          {/* <a href="/#contact">
            <li onClick={()=>{this.menuToggle()}}>CONTACT</li>
          </a> */}
          <HLink to="/#contact"><li onClick={()=>{this.menuToggle()}}>CONTACT</li></HLink>
        </ul>
        {(window.innerWidth<578?<Ticker style={{backgroundImage:'none',position:'fixed', bottom:'27px'}}/>:"")}
      </div>
      :"")
      }
    </div>
    );
  }
  render(){
    if(window.innerWidth<768){
      this.componentTobeRendered=this.navbarCollapsed();
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
