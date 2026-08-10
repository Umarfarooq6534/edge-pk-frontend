// This is the ONE place that knows the backend's URL.
// When we deploy, we'll change API_BASE from localhost to the live Render URL —
// every other file just imports from here, so we only change it in one spot.

const API_BASE = "https://edge-pk.vercel.app/api";

export async function getProducts() {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${API_BASE}/products/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return res.json();
}

export async function createOrder(orderData) {
  const res = await fetch(`${API_BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData)
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Failed to place order");
  }
  return res.json();
}
