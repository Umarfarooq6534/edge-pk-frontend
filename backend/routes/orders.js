import express from "express";
import { orders } from "../data/orders.js";
import { products } from "../data/products.js";

const router = express.Router();

// GET /api/orders -> list all orders (this is what an "admin dashboard" would call)
router.get("/", (req, res) => {
  res.json(orders);
});

// POST /api/orders -> create a new order (this is what "Place Order" on checkout will call)
// The frontend sends order details in the request BODY (not the URL), as JSON.
router.post("/", (req, res) => {
  const { customerName, phone, address, city, items } = req.body;

  // Basic validation — never trust data coming from the frontend blindly
  if (!customerName || !phone || !address || !city || !items || items.length === 0) {
    return res.status(400).json({ error: "Missing required order fields" });
  }

  // Calculate the total on the SERVER, not the frontend —
  // otherwise someone could edit the page and send a fake price.
  let total = 0;
  for (const item of items) {
    const product = products.find((p) => p.id === item.productId);
    if (!product) {
      return res.status(400).json({ error: `Unknown product: ${item.productId}` });
    }
    total += product.price * item.quantity;
  }

  const newOrder = {
    id: "EDGE-" + Date.now(),        // simple unique-ish id for now
    customerName,
    phone,
    address,
    city,
    items,
    total,
    status: "pending",               // pending -> packed -> shipped -> delivered
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

export default router;
