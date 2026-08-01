import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-img" />
      <h3>{product.name}</h3>
      <p>Rs. {product.price.toLocaleString()}</p>
    </Link>
  );
}
