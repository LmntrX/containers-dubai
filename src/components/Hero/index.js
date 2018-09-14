import React from "react";
import Button from "components/UI/Button";
import "./style.css";
import './desktop.css';
import './tablet.css';
import './mobile.css';
import Carousel from "../UI/Carousel";
const Hero = () => (
  <section className="Hero">
    <div className="div_HeroInner Hero">
      <h2 className="h2_Hero_companyName">Fast Track</h2>
      <h1 className="h1_Hero_tagLine">Container and Shipping Services </h1>
      <span className="span_Hero_heroDescription">
        Our company is a container and shipping services company located in Dubai
        and having yard at Sharjah and Dubai, we have a strong and special network
        all over the world.
      </span>
      <Button to="#contact" className="Button_Hero_contactButton">Contact Us</Button>
    </div>
    <Carousel />
  </section>
);

export default Hero;

