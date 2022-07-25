import React, { useEffect, useRef } from "react";
import "./ImageBox.css";
import image from "./image.png";
import BidInfo from "./BidInfo";
import gsap from "gsap";

function ImageBox() {
  const outer_wrapperRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      outer_wrapperRef.current,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, delay: 1.5 }
    );
  });
  return (
    <div className="imageBox">
      <div className="imageSection">
        <div className="wrapper outer_wrapper" ref={outer_wrapperRef}>
          <div className="wrapper mid_wrapper">
            <div className="wrapper inner_wrapper">
              <img className="image" src={image} alt="" />
              <BidInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageBox;
