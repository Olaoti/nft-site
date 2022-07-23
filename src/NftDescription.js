import React from "react";
import "./NftDescription.css";
import Stats from "./Stats";

function NftDescription() {
  return (
    <div className="nftDescription">
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
