import React from "react";
import "./style.css";

const OurClients = () => (
  <section className="OurClients">
    <div>
      <img src={require(`assets/images/arrow.svg`)} alt="Left Arrow" />
    </div>
    <div> </div>
    <div>
      <img
        src={require(`assets/images/arrow.svg`)}
        alt="Right Arrow"
        style={{ transform: "rotate(180deg)" }}
      />
    </div>
  </section>
);

export default OurClients;
