import React from "react";
import { Link } from "react-router-dom";
import { AssignmentOutlined, TrendingUp } from "@mui/icons-material";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}>
          <AssignmentOutlined style={{ fontSize: '36px', color: 'var(--text-dim)' }} />
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '8px',
        }}>
          No Orders Yet
        </h3>
        <p style={{
          fontSize: '14px',
          color: 'var(--text-muted)',
          marginBottom: '24px',
          textAlign: 'center',
          maxWidth: '320px',
          lineHeight: '1.6',
        }}>
          You haven't placed any orders today. Head to the watchlist and start building your portfolio!
        </p>

        <Link to={"/"} className="btn btn-blue">
          <TrendingUp style={{ fontSize: '16px', marginRight: '6px' }} />
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;