import { useLocation, Link } from "react-router-dom";

export default function OrderConfirmation() {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return (
      <div className="status">
        No order found. <Link to="/shop">Go shop →</Link>
      </div>
    );
  }

  return (
    <div className="confirmation">
      <h2>Thank you.</h2>
      <p>Your order has been placed.</p>
      <p className="order-id">Order #{order.id}</p>
      <p>Total: Rs. {order.total.toLocaleString()} — Cash on Delivery</p>
      <Link to="/shop" className="cta">Continue Shopping →</Link>
    </div>
  );
}
