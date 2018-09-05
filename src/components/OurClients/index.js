import React from "react";
import "./style.css";

const OurClients = () => (
  <section className="OurClients">
    <div>
      <img src={require(`assets/images/arrow.svg`)} alt="Left Arrow" />
    </div>
    <div>
      <div>
        <h2 style={style.header}>OUR CLIENTS</h2>
        <p style={style.description}>View our most frequent clients</p>
      </div>
    </div>
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

const style={
  header:{
    color:'#fff'
  },
  description:{
    fontSize:'18px',
    color:'#fff'
  }
}