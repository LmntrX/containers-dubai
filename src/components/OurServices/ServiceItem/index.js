import React from "react";

const ServiceItem = props => (
  <figure>
    <img
      src={require(`assets/images/services/${props.src ? props.src : "1.jpg"}`)}
      alt="Our Service"
      width="300px"
      height="200px"
      style={{ objectFit: "cover", borderRadius: "5px" }}
    />
    <h3 style={style.label}>{props.title}</h3>
    <figcaption style={{ color: "var(--secondary-lighter)" ,...style.caption}}>
      {props.children}
    </figcaption>
  </figure>
);

export default ServiceItem;

const style={
  label:{
    padding:'0px 50px'
  },
  caption:{
    padding:'0px 50px'
  }
}