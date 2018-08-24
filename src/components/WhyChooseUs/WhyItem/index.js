import React from "react";

const WhyItem = props => (
  <figure>
    <img
      src={require(`assets/images/why/${props.src ? props.src : "20.svg"}`)}
      alt="Our Service"
      width="50vw"
      height="50vw"
    />
    <h3>{props.children}</h3>
  </figure>
);

export default WhyItem;
