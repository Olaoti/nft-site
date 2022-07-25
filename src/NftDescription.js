import React, { useEffect, useRef } from "react";
import "./NftDescription.css";
import { gsap } from "gsap";
import Stats from "./Stats";

function NftDescription() {
  const descriptionRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      descriptionRef.current.children,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, stagger: 1, delay: 1 }
    );
  });
  return (
    <div className="nftDescription" ref={descriptionRef}>
      <div className="description__head">
        Discover, Collect, and sell extraordinary NFTs
      </div>
      <div className="description__text">
        A marketplace that has populer artists from all around the world
      </div>
      <div className="description__nav_buttons">
        <div className="btn btn_fillpry">Explore Now</div>
        <div className="btn btn_fillwhite">Connect wallet</div>
      </div>
      <Stats />
    </div>
  );
}

export default NftDescription;
