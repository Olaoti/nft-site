import React from "react";
import "./ImageBox.css";
import image from "./image.png";
import BidInfo from "./BidInfo";

function ImageBox() {
  return (
    <div className="imageBox">
      <div className="imageSection">
        <div className="wrapper outer_wrapper">
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
