import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Nav.css";

function Nav() {
  const navRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: "-100", opacity: "0.5" },
      { y: "0", opacity: "1", duration: "1", ease: "bounce" }
    );
  }, [navRef]);
  const [navBg, setNavBg] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 40) {
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
    <header className="nav" ref={navRef}>
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
