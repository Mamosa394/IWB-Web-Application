import express from "express";
import Sales from "../models/Sales.js";

const router = express.Router();

// GET all sales
router.get("/", async (req, res) => {
  try {
    const sales = await Sales.find().sort({ date: -1 });
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new sale
router.post("/", async (req, res) => {
  try {
    const { date, product, amount, salesperson } = req.body;
    const newSale = new Sales({ date, product, amount, salesperson });

    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
