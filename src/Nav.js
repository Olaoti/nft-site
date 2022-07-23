import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <header className="nav">
      <div className="logo">
        <span>GAND</span>isbr
      </div>
      <div className="navLinks">
        <ul>
          <li className="navLinks__link">Top artists</li>
          <li className="navLinks__link">Marketplace</li>
          <li className="navLinks__link">Collections</li>
          <li className="navLinks__link">About us</li>
        </ul>
      </div>
      <div className="btn btn_fillpry">Get Started</div>
    </header>
  );
}

export default Nav;
