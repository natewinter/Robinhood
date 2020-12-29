import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
const TOKEN = "bvldmdf48v6qdeqd6470";

const BASE_URL = "https://finnhub.io/api/v1/quote";
function Stats() {
  const [stockSata, setstockSata] = useState([]);
  const getStockData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };
  useEffect(() => {}, []);
  return (
    <div className="stats">
      <div className="stats_container">
        <div className="stats_header">
          <p>Stocks</p>
        </div>
        <div className="stats_content">
          <div className="stats_rows">{/* for our current stocks */}</div>
        </div>
        <div className="stats_header">
          <p>Lists</p>
        </div>
        <div className="stats_content">
          <div className="stats_rows">{/* stocks to buy */}</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
