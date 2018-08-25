import React from "react";
import Hero from "components/Hero";
import OurServices from "components/OurServices";
import WhyChooseUs from "components/WhyChooseUs";
import OurClients from "components/OurClients";
import Contact from "components/Contact";
const HomeScreen = () => (
  <React.Fragment>
    <Hero />
    <OurServices />
    <WhyChooseUs />
    <OurClients />
    <Contact />
  </React.Fragment>
);

export default HomeScreen;
