import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { SwapVert } from "@mui/icons-material";

import { positions } from "../data/data";


const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <div style={{
          padding: '8px',
          background: 'var(--accent-glow)',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
        }}>
          <SwapVert style={{ fontSize: '22px', color: 'var(--accent-primary-light)' }} />
        </div>
        <div>
          <h3 className="title" style={{ margin: 0 }}>Positions</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: 0 }}>
            {allPositions.length} active position{allPositions.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>
                    <span style={{
                      background: 'var(--accent-glow)',
                      color: 'var(--accent-primary-light)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}>
                      {stock.product}
                    </span>
                  </td>
                  <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {isProfit ? '+' : ''}{(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
