import React from "react";
import Button from "components/UI/Button";
import "./style.css";
import Carousel from "../UI/Carousel";
const Hero = () => (
  <section className="Hero">
    <h2 style={style.companyName}>Fast Track</h2>
    <h1 style={style.tagLine}>Container and Shipping Services </h1>
    <span style={style.heroDescription}>
      Our company is a container and shipping services company located in Dubai
      and having yard at Sharjah and Dubai, we have a strong and special network
      all over the world.
    </span>
    <Button to="#contact" style={style.contactButton}>Contact Us</Button>
    <Carousel />
  </section>
);

export default Hero;

const style={
  companyName:{
    color:'#FF6A00',
    margin:'40px 0px 0px 0px'
  },
  tagLine:{
    margin:'30px 0px'
  },
  contactButton:{
    width:'271px',
    height:'50px',
    marginTop:'25px'
  },
  heroDescription:{
    margin:'20px 0px',
    maxWidth:'70%'
  }
}
