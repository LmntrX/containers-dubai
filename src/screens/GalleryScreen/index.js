import React from "react";
import "./style.css";
import Gallery from "components/UI/Gallery";
const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

const GalleryScreen = () => (
  <div className="GalleryScreen">
    <h1>Gallery</h1>
    <span>A sneak peak into our yard!!</span>
    <Gallery images={images} />
  </div>
);

export default GalleryScreen;