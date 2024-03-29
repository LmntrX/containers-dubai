import React from "react";
import "./style.css";
import './desktop.css';
import "./tablet.css";
import "./mobile.css";
import ServiceItem from "./ServiceItem";

const OurServices = () => (
  <section className="OurServices" id="services">
    <h2 className="h2_OurServices_header">Our Services</h2>
    <span className="span_OurServices_serviceDescription">Here is a list of services we offer</span>
    <div>
      <ServiceItem title="Container Sales" src="1.jpg">
        New or used ie dry, special and reefers
      </ServiceItem>
      <ServiceItem title="Container Modifications" src="2.jpg">
        As per customer specifications
      </ServiceItem>
      <ServiceItem title="Container Rentals" src="3.jpg">
        Container rentals or leasing for long term or short term
      </ServiceItem>
      <ServiceItem title="Air - land - sea freights" src="4.jpg">
        We have all over the world agency network
      </ServiceItem>
      <ServiceItem title="Freight Forwarding & Custom Clearance" src="5.jpg">
        Air and sea
      </ServiceItem>
      <ServiceItem title="RORO/Break cargo services" src="6.jpg">
        We handle this for all over the world
      </ServiceItem>

      <ServiceItem title="Land transportation in GCC Countries" src="7.jpg" />
      <ServiceItem
        title="Car/Container lashing, bracing & Survey"
        src="8.jpg"
      />
      <ServiceItem title="Issuing lashing/CSC certificates" src="9.jpg" />
    </div>
  </section>
);

export default OurServices;