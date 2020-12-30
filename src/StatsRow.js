import React from "react";
import "./StatsRow.css";
function StatsRow() {
  return (
    <div className="row">
      <div className="row_intro">
        <h1>AAPL</h1>
        <p>200 shares </p>
      </div>
      <div className="row_chart">
        {/* <img src={StockChart} height={16} /> */}
      </div>
      <div className="row_numbers">
        <p className="row_price">$200</p>
        <p className="row_percentage"> +200%</p>
      </div>
    </div>
  );
}

export default StatsRow;
