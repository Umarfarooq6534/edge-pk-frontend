import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <img src="/images/logo.png" alt="Edge logo" className="logo-icon" />
        EDGE
      </div>
      <ul className="footer-links">
        <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a></li>
        <li><Link to="/about">Contact</Link></li>
      </ul>
      <div className="footer-meta">© 2026 EDGE — OWN_THE_EDGE.SYS</div>
    </footer>
  );
}