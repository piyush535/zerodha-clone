import React from "react";
import {
  AccountBalanceWallet,
  TrendingUp,
  CalendarToday,
  AccessTime,
} from "@mui/icons-material";

const Summary = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const marketStatus = (() => {
    const hours = today.getHours();
    if (hours >= 9 && hours < 15) return { text: "Market Open", color: "var(--green)" };
    return { text: "Market Closed", color: "var(--red)" };
  })();

  return (
    <>
      <div className="username">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h6>Hi, User! 👋</h6>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>
              Welcome back to your trading dashboard
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{
              color: 'var(--text-dim)',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              justifyContent: 'flex-end',
            }}>
              <CalendarToday style={{ fontSize: '13px' }} />
              {formattedDate}
            </p>
            <p style={{
              color: marketStatus.color,
              fontSize: '12px',
              fontWeight: '600',
              marginTop: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              justifyContent: 'flex-end',
            }}>
              <span className="live-dot" style={{
                background: marketStatus.color,
                boxShadow: `0 0 6px ${marketStatus.color}`,
              }}></span>
              {marketStatus.text}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <AccountBalanceWallet className="section-icon" />
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹3,740</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>₹0</span>
            </p>
            <p>
              Opening balance <span>₹3,740</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <TrendingUp className="section-icon" />
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              ₹1,550 <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>₹31,430</span>
            </p>
            <p>
              Investment <span>₹29,880</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;