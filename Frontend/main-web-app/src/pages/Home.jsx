import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import "/images/MacBookPro.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">IWB Technologies</h1>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Inventory</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Log in
          </button>
        </nav>
      </header>

      <section className="hero-section">
        {/* Placeholder for hero image */}
        <div className="hero-text">
          <h2>Laptop Refurbishment</h2>
          <p>High-quality refurbished laptops for your needs</p>
          <button className="shop-btn">Shop Now</button>
        </div>

        <div className="hero-img">
          <img
            src={"/images/MacBookPro.png"}
            alt={"laptop"}
            style={{
              maxWidth: " 480px;",
              maxHeight: "380px",
              borderRadius: "12px",
            }}
          />
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-box">
          <h3>250+</h3>
          <p>Laptops in Stock</p>
        </div>
        <div className="stat-box">
          <h3>30-Day</h3>
          <p>Warranty</p>
        </div>
        <div className="stat-box">
          <h3>1000+</h3>
          <p>Satisfied Customers</p>
        </div>
      </section>

      <section className="grid-section">
        <div className="grid-card">
          {/* Placeholder for Available Inventory Image */}
          <div className="image-placeholder">[Inventory Image]</div>
          <h4>Available Inventory</h4>
          <p>Browse our selection of refurbished laptops</p>
        </div>

        <div className="grid-card">
          {/* Placeholder for Recent Articles Image */}
          <div className="image-placeholder">[Articles Image]</div>
          <h4>Recent Articles</h4>
          <p>Read our latest articles and news</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
