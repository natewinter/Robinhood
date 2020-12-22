import React from "react";
import "./Newsfeed.css";
import LineGraph from "./LineGraph.js";
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
