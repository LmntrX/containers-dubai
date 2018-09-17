import React from "react";
import Ticker from "./Ticker";
import Navbar from "./Navbar";
const Header = () => (
  <header>
    <Ticker className="TickerOnNavbar" />
    <Navbar />
  </header>
);

export default Header;
