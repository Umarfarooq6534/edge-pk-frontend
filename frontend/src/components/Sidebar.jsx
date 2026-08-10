import { Link } from "react-router-dom";
import { X } from "lucide-react";

// A slide-out menu from the left. "open" controls whether it's visible,
// "onClose" is called when the user clicks outside it or hits the X.
export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Dark overlay behind the sidebar - clicking it closes the menu */}
      <div
        className={open ? "sidebar-overlay open" : "sidebar-overlay"}
        onClick={onClose}
      />
      <aside className={open ? "sidebar open" : "sidebar"}>
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
          <X size={22} />
        </button>
        <nav className="sidebar-links">
          <Link to="/shop" onClick={onClose}>Collection</Link>
          <Link to="/shop" onClick={onClose}>New Arrival</Link>
          <Link to="/shop" onClick={onClose}>T-Shirts</Link>
          <Link to="/about" onClick={onClose}>About</Link>
        </nav>
      </aside>
    </>
  );
}
