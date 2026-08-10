import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero">
        <p className="eyebrow">Drop 001</p>
        <h1>OWN<br />THE EDGE</h1>
        <p className="sub">
          Apparel engineered like tech, worn like a statement.
        </p>
        <Link to="/shop" className="cta">Shop the collection →</Link>
      </div>

      <section className="statement">
        <img src="/images/logo.png" alt="Edge mark" className="statement-mark" />
        <p>Built like a system.<br />Worn like an <span>edge</span>.</p>
      </section>
    </>
  );
}