import React, { useState, useEffect } from "react";
import "./BidInfo.css";
function BidInfo() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSec(new Date().getSeconds());
    }, 1000);
  },[sec]);

  return (
    <div className="bidInfo">
      <div className="current">
        <div className="current_name">Current bid</div>
        <div className="current_value">5.56ETH</div>
      </div>
      <div className="time">
        <div className="time_info">Remaining time:</div>
        <div className="countdown">
          {24 - new Date().getHours()}H: {59 - new Date().getMinutes()}M:{" "}
          {sec>49?`0${59-sec}`:59-sec}
        </div>
      </div>
      <div className="btn btn_fillpry">Bid Now</div>
    </div>
  );
}

export default BidInfo;
