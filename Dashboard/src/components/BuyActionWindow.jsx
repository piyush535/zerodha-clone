import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, actionType = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  // Common function for BUY & SELL
  const handleOrder = async (mode) => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: mode,
      });

      console.log(`${mode} order successful`);
      closeBuyWindow();

    } catch (err) {
      console.error(`${mode} order failed:`, err);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          {/* BUY BUTTON */}
          {actionType === "BUY" && (
            <Link
              className="btn btn-green"
              onClick={() => handleOrder("BUY")}
            >
              Buy
            </Link>
          )}

          {/* SELL BUTTON */}
          {actionType === "SELL" && (
            <Link
              className="btn btn-red"
              onClick={() => handleOrder("SELL")}
            >
              Sell
            </Link>
          )}

          {/* Cancel */}
          <Link
            to=""
            className="btn btn-blue"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
