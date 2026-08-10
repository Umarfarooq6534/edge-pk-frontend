import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import Sidebar from "./Sidebar";

export default function Nav() {
  const { count } = useCart();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false);
      setSearchTerm("");
    }
  }

  return (
    <>
      <nav className="nav">
        {/* LEFT: hamburger menu */}
        <button
          className="nav-icon-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        {/* CENTER: brand name */}
        <Link to="/" className="logo">
  <img src="/images/logo.png" alt="Edge logo" className="logo-icon" />
  EDGE
</Link>

        {/* RIGHT: search + cart */}
        <div className="nav-right">
          {searchOpen ? (
            <form className="nav-search-form" onSubmit={handleSearchSubmit}>
              <input
                autoFocus
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="button" className="nav-icon-btn" onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={18} />
              </button>
            </form>
          ) : (
            <button className="nav-icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
              <Search size={20} />
            </button>
          )}

          <Link to="/cart" className="nav-icon-btn cart-link" aria-label="Cart">
            <ShoppingCart size={20} />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
        </div>
      </nav>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
