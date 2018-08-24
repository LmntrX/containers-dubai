import React from "react";
import Button from "components/UI/Button";
import "./style.css";
import Carousel from "../UI/Carousel";
const Hero = () => (
  <section className="Hero">
    <h2>Fast Track</h2>
    <h1>Container and Shipping Services </h1>
    <span>
      Our company is a container and shipping services company located in Dubai
      and having yard at Sharjah and Dubai, we have a strong and special network
      all over the world.
    </span>
    <Button to="#contact">Contact Us</Button>
    <Carousel />
  </section>
);

export default Hero;
