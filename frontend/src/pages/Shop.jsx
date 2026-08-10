import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../api";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status">Loading products...</p>;
  if (error) return <p className="status error">Error: {error} (is the backend running?)</p>;

  // If the person searched for something, only show matching products
  const visible = search
    ? products.filter((p) => p.name.toLowerCase().includes(search))
    : products;

  return (
    <div className="shop">
      <h2>Collection</h2>
      {search && <p className="search-note">Showing results for "{search}"</p>}
      {visible.length === 0 ? (
        <p className="status">No products match "{search}".</p>
      ) : (
        <div className="product-grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
