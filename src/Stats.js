import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="stats">
      <div className="stats__contents">
        <div className="stats_value">1526K</div>
        <div className="stats_name">Songs</div>
      </div>
      <div className="line"></div>
      <div className="stats__contents">
        <div className="stats_value">356K</div>
        <div className="stats_name">Artworks</div>
      </div>
      <div className="line"></div>
      <div className="stats__contents">
        <div className="stats_value">150K</div>
        <div className="stats_name">Artists</div>
      </div>
    </div>
  );
}

export default Stats;
