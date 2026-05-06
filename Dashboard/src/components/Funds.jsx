import React from "react";
import { Link } from "react-router-dom";
import {
  AccountBalanceWallet,
  AddCircleOutline,
  RemoveCircleOutline,
  StorefrontOutlined,
} from "@mui/icons-material";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <Link className="btn btn-green" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <AddCircleOutline style={{ fontSize: '15px' }} />
          Add funds
        </Link>
        <Link className="btn btn-blue" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <RemoveCircleOutline style={{ fontSize: '15px' }} />
          Withdraw
        </Link>
      </div>

      <div className="row">
        <div className="col" style={{ flex: '2' }}>
          <span>
            <div style={{
              padding: '7px',
              background: 'var(--accent-glow)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              marginRight: '10px',
            }}>
              <AccountBalanceWallet style={{ fontSize: '18px', color: 'var(--accent-primary-light)' }} />
            </div>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">₹4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">₹4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>₹4,043.10</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>₹4,064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>₹0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>

        <div className="col" style={{ flex: '1' }}>
          <div className="commodity">
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <StorefrontOutlined style={{ fontSize: '26px', color: 'var(--text-dim)' }} />
            </div>
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
