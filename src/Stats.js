import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
import StatsRow from "./StatsRow";
const TOKEN = "bvldmdf48v6qdeqd6470";
const BASE_URL = "https://finnhub.io/api/v1/quote";
function Stats() {
  const [stockData, setStockData] = useState([]);
  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };
  useEffect(() => {
    let tempStocksData = [];
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
    ];
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          console.log(res);
          tempStocksData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setStockData(tempStocksData);
      console.log(tempStocksData);
    });
  }, []);
  return (
    <div className="stats">
      <div className="stats_container">
        <div className="stats_header">
          <p>Stocks</p>
        </div>
        <div className="stats_content">
          <div className="stats_rows"></div>
        </div>
        <div className="stats_header">
          <p>Lists</p>
        </div>
        <div className="stats_content">
          <div className="stats_rows">
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
