import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp
} from "@mui/icons-material";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from "chart.js";
import { watchlist } from "../data/data";

ChartJS.register(ArcElement, ChartTooltip, Legend);

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(99, 102, 241, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(139, 92, 246, 0.7)",
          "rgba(236, 72, 153, 0.7)",
          "rgba(6, 182, 212, 0.7)",
          "rgba(251, 146, 60, 0.7)",
          "rgba(34, 197, 94, 0.7)",
          "rgba(168, 85, 247, 0.7)",
        ],
        borderColor: [
          "rgba(99, 102, 241, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(236, 72, 153, 1)",
          "rgba(6, 182, 212, 1)",
          "rgba(251, 146, 60, 1)",
          "rgba(34, 197, 94, 1)",
          "rgba(168, 85, 247, 1)",
        ],
        borderWidth: 2,
        hoverBorderWidth: 3,
        spacing: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: '65%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#f1f5f9',
        bodyColor: '#94a3b8',
        borderColor: 'rgba(55, 65, 81, 0.5)',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        titleFont: { weight: '600', size: 13 },
        bodyFont: { size: 12 },
        callbacks: {
          label: function (context) {
            return ` ₹${context.parsed.toLocaleString('en-IN')}`;
          },
        },
      },
    },
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: INFY, TCS, RELIANCE..."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="counts">{filteredWatchlist.length} / 50</span>
      </div>

      <ul className="list">
        {filteredWatchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <div className="chart-container">
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <h3 style={{
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '0',
            letterSpacing: '0.3px',
          }}>
            Portfolio Distribution
          </h3>
          <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '4px 0 0 0' }}>
            watchlist market positions
          </p>
        </div>
        <div style={{ width: '180px', height: '180px' }}>
          <Doughnut data={data} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent" style={{ color: stock.isDown ? 'var(--red)' : 'var(--green)' }}>
            {stock.percent}
          </span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" style={{ fontSize: '18px' }} />
          ) : (
            <KeyboardArrowUp className="up" style={{ fontSize: '18px' }} />
          )}
          <span className="price">₹{stock.price.toLocaleString('en-IN')}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B) / Sell (S)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="buy" onClick={handleBuyClick}>Buy</button>
            <button className="sell" onClick={handleSellClick}>Sell</button>
          </div>
        </Tooltip>
      </span>
    </span>
  );
};
