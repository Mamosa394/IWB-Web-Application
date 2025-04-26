import express from "express";
import multer from "multer";
import Product from "../models/Product.js";
import path from "path";

const router = express.Router();

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store images
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname); // Get file extension
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + fileExt); // Generate unique file name
  },
});

const upload = multer({ storage });

// POST new product
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, type, cpu, ram, storage, gpu, price, status, tags } =
      req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Store the image path

    const newProduct = new Product({
      name,
      type,
      specs: { cpu, ram, storage, gpu },
      price,
      image,
      status,
      tags,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update product
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
