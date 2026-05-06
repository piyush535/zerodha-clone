require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const HoldingsModel = require('./model/HoldingsModel');
const PositionsModel = require('./model/PositionsModel');
const OrdersModel = require('./model/OrdersModel');

const cookieParser = require('cookie-parser');
const authRoute = require('./Routes/AuthRoute');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', authRoute);

// app.get('/addHoldings', async (req, res) => {
//     let tempHoldings = [{
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   }];
//   try {
//     await HoldingsModel.insertMany(tempHoldings);
//     res.send("Holdings added successfully");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error adding holdings");
//   }
// });

// app.get('/addPositions', async (req, res) => {
//     let tempPositions = [{
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },];
//   try {
//     console.log("Inserting positions...");
//     const result = await PositionsModel.insertMany(tempPositions);
//     console.log("Inserted:", result);
//     res.send("Positions added successfully");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err.message);
//   }
// });

app.get('/allHoldings', async (req, res) => {
    try {
        let allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

app.get('/allPositions', async (req, res) => {
    try {
        let allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

app.post('/newOrder', async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    // 1. Save order (common for BUY & SELL)
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    // 2. SELL LOGIC
    if (mode === "SELL") {
      const existingHolding = await HoldingsModel.findOne({ name });

      if (!existingHolding) {
        return res.status(400).send("Stock not found in holdings");
      }

      // Not enough quantity
      if (existingHolding.qty < qty) {
        return res.status(400).send("Insufficient quantity to sell");
      }

      // Reduce quantity
      existingHolding.qty -= qty;

      // If qty becomes 0 → delete holding
      if (existingHolding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await existingHolding.save();
      }
    }

    res.send("Order processed successfully");

  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }

  if (mode === "BUY") {
  const existingHolding = await HoldingsModel.findOne({ name });

  if (existingHolding) {
    // Update avg price (weighted)
    const totalQty = existingHolding.qty + qty;

    existingHolding.avg =
      ((existingHolding.avg * existingHolding.qty) + (price * qty)) / totalQty;

    existingHolding.qty = totalQty;

    await existingHolding.save();

  } else {
    // Create new holding
    const newHolding = new HoldingsModel({
      name,
      qty,
      avg: price,
      price,
      net: "0%",
      day: "0%"
    });

    await newHolding.save();
  }
}
});

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });