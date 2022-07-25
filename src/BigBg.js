import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Bigbg.css";

function BigBg() {
  const bigBgRef = useRef(null);
  useEffect(() => {
    //console.log(bigBgRef.current.children);
    gsap.fromTo(
      bigBgRef.current.children,
      { x: "-100", opacity: "0" },
      { x: "0", opacity: "1", duration: "4", stagger: 0.8, ease: "linear" }
    );
  }, [bigBgRef]);
  return (
    <div className="bigBg" ref={bigBgRef}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BigBg;
