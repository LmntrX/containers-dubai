import React from "react";
import "./style.css";
import "./desktop.css";
import "./tablet.css";
import "./mobile.css";
const Contact = () => (
  <section className="Contact" id="contact">
    <div className="div_Contact_contactData">
      <h2>Fast Track</h2>
      <h1>Container & Shipping Services</h1>
      <p>
        <span className="span_Contact_addressline1">
          {" "}
          Al Mabrooka Building, Bank Street, Bur Dubai, Dubai UAE
        </span>
        <span className="span_Contact_addressline2">
          <br />
          {window.innerWidth < 578 ? <br /> : ""}
          info@containersdubai.com <br />
        </span>
        <span className="span_Contact_addressline3">
          {window.innerWidth < 578 ? <br /> : ""}
          +971506817932 / +971505089731
        </span>
      </p>
    </div>
  </section>
);

export default Contact;
