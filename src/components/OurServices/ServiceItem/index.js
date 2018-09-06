import React from "react";
import './style.css';
import './desktop.css';

const ServiceItem = props => (
  <figure>
    <img className="img_ServiceItem_image"
      src={require(`assets/images/services/${props.src ? props.src : "1.jpg"}`)}
      alt="Our Service"
      style={{ objectFit: "cover", borderRadius: "5px" }}
    />
    <h3 className="h3_ServiceItem_label">{props.title}</h3>
    <figcaption className="figcaption_ServiceItem_caption">
      {props.children}
    </figcaption>
  </figure>
);

export default ServiceItem;