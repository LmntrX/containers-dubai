import React from "react";
import Hero from "components/Hero";
import OurServices from "../../components/OurServices";
import WhyChooseUs from "../../components/WhyChooseUs";
import OurClients from "../../components/OurClients";
const HomeScreen = () => (
  <React.Fragment>
    <Hero />
    <OurServices />
    <WhyChooseUs />
    <OurClients />
  </React.Fragment>
);

export default HomeScreen;
