import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import {
  AccountBalance,
  TrendingUp,
  TrendingDown,
  ShowChart,
} from "@mui/icons-material";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(99, 102, 241, 0.6)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: "rgba(99, 102, 241, 0.85)",
      },
    ],
  };

  const totalInvestment = allHoldings.reduce((sum, stock) => sum + (stock.avg * stock.qty), 0);
  const totalCurrentValue = allHoldings.reduce((sum, stock) => sum + (stock.price * stock.qty), 0);
  const totalPnL = totalCurrentValue - totalInvestment;
  const totalPnLPercentage = totalInvestment > 0 ? ((totalPnL / totalInvestment) * 100).toFixed(2) : 0;

  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            padding: '8px',
            background: 'var(--accent-glow)',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
          }}>
            <ShowChart style={{ fontSize: '22px', color: 'var(--accent-primary-light)' }} />
          </div>
          <div>
            <h3 className="title" style={{ margin: 0 }}>Holdings</h3>
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: 0 }}>
              {allHoldings.length} instruments
            </p>
          </div>
        </div>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {isProfit ? '+' : ''}{(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <AccountBalance style={{ fontSize: '18px', color: 'var(--text-dim)' }} />
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '0', fontWeight: '500' }}>
              Total investment
            </p>
          </div>
          <h5 style={{ color: 'var(--text-primary)', fontSize: '22px', fontWeight: '700', margin: '0' }}>
            ₹{totalInvestment.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
        </div>
        <div className="col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <TrendingUp style={{ fontSize: '18px', color: 'var(--text-dim)' }} />
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '0', fontWeight: '500' }}>
              Current value
            </p>
          </div>
          <h5 style={{ color: 'var(--text-primary)', fontSize: '22px', fontWeight: '700', margin: '0' }}>
            ₹{totalCurrentValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
        </div>
        <div className="col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            {totalPnL >= 0 ? (
              <TrendingUp style={{ fontSize: '18px', color: 'var(--green)' }} />
            ) : (
              <TrendingDown style={{ fontSize: '18px', color: 'var(--red)' }} />
            )}
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', margin: '0', fontWeight: '500' }}>P&L</p>
          </div>
          <h5 style={{
            color: totalPnL >= 0 ? 'var(--green)' : 'var(--red)',
            fontSize: '22px',
            fontWeight: '700',
            margin: '0'
          }}>
            {totalPnL >= 0 ? '+' : '-'}₹{Math.abs(totalPnL).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            <span style={{ fontSize: '13px', fontWeight: '500', marginLeft: '6px' }}>
              ({totalPnL >= 0 ? '+' : '-'}{totalPnLPercentage}%)
            </span>
          </h5>
        </div>
      </div>

      <div style={{
        marginTop: '24px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px',
      }}>
        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;
