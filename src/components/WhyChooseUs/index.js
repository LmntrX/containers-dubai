import React from "react";
import "./style.css";
import WhyItem from "./WhyItem";

const WhyChooseUs = () => (
  <section className="WhyChooseUs">
    <h2 style={style.header}>Why Choose Us</h2>
    <div>
      <WhyItem src="20.svg">20 Years in business</WhyItem>
      <WhyItem src="support.svg">Superior Customer Service</WhyItem>
      <WhyItem src="rates.svg">Competitive Rates</WhyItem>
      <WhyItem src="staffs.svg">Experienced and Specialized Staffs</WhyItem>
      <WhyItem src="quick.svg">Quick Services</WhyItem>
      <WhyItem src="roof.svg">All services in one roof</WhyItem>
    </div>
  </section>
);

export default WhyChooseUs;
const style={
  header:{
    color:'#000',
    fontWeight:'bold',
    marginBottom:'50px'
  }
}
