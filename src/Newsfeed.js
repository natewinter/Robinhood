import React from "react";
import "./Newsfeed.css";
import LineGraph from "./LineGraph.js";
import TimeLine from "./TimeLine.js";
function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed_container">
        <div className="newsfeed_chartSection">
          <div className="newsfeed_portfolioValue">
            <h1>$140,000</h1>
            <p>$142,000</p>
          </div>
          <div className="newsfeed_chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed_buying_section">
          <h2>Buying Power</h2>
          <h2>$4.11</h2>
        </div>
        <div className="newsfeed_market_section">
          <div className="newsfeed_market_box">
            <p>Markets Closed</p>
            <h1>Happy Thanksgiving!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
