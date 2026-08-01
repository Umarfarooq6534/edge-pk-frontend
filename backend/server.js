import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.js";
import ordersRouter from "./routes/orders.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ---- Middleware ----
// cors() lets your React app (running on a different port, e.g. 5173)
// make requests to this server (on port 5000). Without this, the browser blocks it.
app.use(cors());

// express.json() lets Express read JSON sent in a request body (req.body)
app.use(express.json());

// ---- Routes ----
// Every request starting with /api/products goes to productsRouter
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

// A simple health check — visit this in your browser to confirm the server is alive
app.get("/", (req, res) => {
  res.send("Edge.pk API is running.");
});

app.listen(PORT, () => {
  console.log(`Edge.pk backend running at http://localhost:${PORT}`);
});
