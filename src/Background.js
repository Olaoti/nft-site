import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Background.css";

function Background() {
  const backgroundRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      backgroundRef.current.children,
      { opacity: 0, scale: 1.4 },
      {
        opacity: 1,
        scale: 1,
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.7, from: "center" },
        duration: 5,
      }
    );
  });

  return (
    <div className="background" ref={backgroundRef}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Background;
