import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [navBg, setNavBg] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [menuClick, setClick] = useState(false);
  const checkClick = () => {
    if (menuClick === true) {
      setClick(false);
    } else if (menuClick === false) {
      setClick(true);
    }
  };
  return (
    <header className="nav">
      <div className={`mobile-nav ${navBg && "navBg"}`}>
        <div className="logo">
          <span>GAND</span>isbr
        </div>
        <div
          className={`menu ${menuClick ? "close" : "show"}`}
          onClick={checkClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navLinks ${menuClick ? "visible" : "hide"}`}>
        <ul>
          <div className="mobile-header-bg"></div>
          <li className="navLinks__link">Top artists</li>
          <li className="navLinks__link">Marketplace</li>
          <li className="navLinks__link">Collections</li>
          <li className="navLinks__link">About us</li>
        </ul>
        <div className="btn btn_fillpry">Get Started</div>
      </div>
    </header>
  );
}

export default Nav;
