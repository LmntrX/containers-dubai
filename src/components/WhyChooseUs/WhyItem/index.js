import React from "react";
import './style.css';
import './desktop.css';

const WhyItem = props => (
  <figure className="WhyItem">
    <img
      src={require(`assets/images/why/${props.src ? props.src : "20.svg"}`)}
      alt="Our Service"
    />
    <h3 className="h3_WhyItem_label">{props.children}</h3>
  </figure>
);

export default WhyItem;
