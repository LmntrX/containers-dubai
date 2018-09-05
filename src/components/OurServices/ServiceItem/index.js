import React from "react";

const ServiceItem = props => (
  <figure>
    <img
      src={require(`assets/images/services/${props.src ? props.src : "1.jpg"}`)}
      alt="Our Service"
      width="346vw"
      height="230vw"
      style={{ objectFit: "cover", borderRadius: "5px" }}
    />
    <h3>{props.title}</h3>
    <figcaption style={{ color: "var(--secondary-lighter)" }}>
      {props.children}
    </figcaption>
  </figure>
);

export default ServiceItem;
