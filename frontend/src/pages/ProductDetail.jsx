import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../api";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProduct(id).then(setProduct).catch((e) => setError(e.message));
  }, [id]);

  if (error) return <p className="status error">{error}</p>;
  if (!product) return <p className="status">Loading...</p>;

  function handleAddToCart() {
    if (!size) return alert("Please select a size");
    addItem(product, size, 1);
    navigate("/cart");
  }

  return (
    <div className="product-detail">
      <div className="product-detail-img" />
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p className="price">Rs. {product.price.toLocaleString()}</p>
        <p className="desc">{product.description}</p>

        <div className="sizes">
          {product.sizes.map((s) => (
            <button
              key={s}
              className={size === s ? "size-btn active" : "size-btn"}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <button className="cta" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
