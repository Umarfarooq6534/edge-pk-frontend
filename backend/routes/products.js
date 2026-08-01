import express from "express";
import { products } from "../data/products.js";

// A "router" is a mini Express app just for one group of related URLs.
// Everything here will live under /api/products (we set that prefix in server.js)
const router = express.Router();

// GET /api/products  -> return the full list
router.get("/", (req, res) => {
  res.json(products);
});

// GET /api/products/:id -> return one product by its id
// ":id" is a "route parameter" — Express fills it in from the actual URL,
// e.g. /api/products/edg-ts-001 makes req.params.id === "edg-ts-001"
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

export default router;
