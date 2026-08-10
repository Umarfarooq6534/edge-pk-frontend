import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, updateQuantity, removeItem, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="status">
        Your cart is empty. <Link to="/shop">Go shop →</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {items.map((item) => (
        <div key={item.productId + item.size} className="cart-row">
          <div>
            <strong>{item.name}</strong>
            <span> — Size {item.size}</span>
          </div>
          <div className="cart-row-controls">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.productId, item.size, Number(e.target.value))
              }
            />
            <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
            <button onClick={() => removeItem(item.productId, item.size)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-total">Total: Rs. {total.toLocaleString()}</div>
<p className="free-shipping-note">Free shipping on all orders</p>
<Link to="/checkout" className="cta">Proceed to Checkout →</Link>
    </div>
  );
}
