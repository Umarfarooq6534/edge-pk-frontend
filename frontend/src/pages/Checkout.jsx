import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { createOrder } from "../api";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    address: "",
    city: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const order = await createOrder({
        ...form,
        items: items.map((i) => ({
          productId: i.productId,
          size: i.size,
          quantity: i.quantity
        }))
      });
      clearCart();
      navigate("/order-confirmation", { state: { order } });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }
   function whatsappLink() {
    const itemsText = items.map((i) => `${i.name} (${i.size}) x${i.quantity}`).join(", ");
    const message = `Hi EDGE! I have a question about my order: ${itemsText}`;
    return `https://wa.me/923218698927?text=${encodeURIComponent(message)}`;
  }
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p className="cod-note">Payment: Cash on Delivery</p>
	  <a href={whatsappLink()} target="_blank" rel="noreferrer" className="whatsapp-chat-link">
        Have a question? Chat with us on WhatsApp
      </a>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input name="customerName" value={form.customerName} onChange={handleChange} required />
        </label>
        <label>
          Phone
          <input name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <label>
          Address
          <input name="address" value={form.address} onChange={handleChange} required />
        </label>
        <label>
          City
          <input name="city" value={form.city} onChange={handleChange} required />
        </label>

        <div className="checkout-total">Total: Rs. {total.toLocaleString()}</div>
        <p className="free-shipping-note">Free shipping on all orders</p>
        {error && <p className="status error">{error}</p>}

        <button type="submit" className="cta" disabled={submitting}>
          {submitting ? "Placing order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}
