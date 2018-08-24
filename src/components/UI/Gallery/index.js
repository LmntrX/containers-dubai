import React from "react";
import "./style.css";

const Gallery = props => (
  <ul className="Gallery">
    {props.images.map(image => (
      <li>
        <img src={require(`assets/images/gallery/${image}.jpg`)} alt={image} />
      </li>
    ))}
  </ul>
);

export default Gallery;
