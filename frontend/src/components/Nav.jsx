import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Nav() {
  const { count } = useCart();
  return (
    <nav className="nav">
      <Link to="/" className="logo">EDGE.PK</Link>
      <div className="nav-links">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({count})</Link>
      </div>
    </nav>
  );
}
