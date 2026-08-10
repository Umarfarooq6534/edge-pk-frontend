import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <img src="/images/logo.png" alt="Edge logo" className="logo-icon" />
        EDGE
      </div>
      <ul className="footer-links">
       <li><a href="https://www.instagram.com/edge.pk_/" target="_blank" rel="noreferrer">Instagram</a></li>
       <li><a href="https://wa.me/923218698927" target="_blank" rel="noreferrer">WhatsApp</a></li>
       <li><a href="mailto:edgeee456@gmail.com">Email</a></li>
      </ul>
      <div className="footer-meta">© 2026 EDGE — OWN_THE_EDGE.SYS</div>
    </footer>
  );
}