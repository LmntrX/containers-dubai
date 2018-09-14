import React from "react";
import "./style.css";
import "./desktop.css";
import "./tablet.css";
import './mobile.css';
const Ticker = (props) => (
  <nav id="ticker" className="Ticker" style={{...props.style}}>
    <h3>+971506817932 / +971565418329</h3>
    <span className="span_Ticker_hiddenOnMobile"><h3>info@containersdubai.com</h3></span> 
    <h3><span className="span_Ticker_text">Need Shipping containers ? </span>Call now!</h3>
  </nav>
);

export default Ticker;
