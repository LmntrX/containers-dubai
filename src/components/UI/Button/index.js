import React from "react";
import "./style.css";
const Button = props => (
  <a href={props.to}>
    <button className="Button">{props.children}</button>
  </a>
);
export default Button;
