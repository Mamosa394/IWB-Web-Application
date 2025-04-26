import "../styles/home.css";
import Header from "../components/Header";
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="home-container">
      <Header />

      <section className="first-section">
        <div className="open-text">
          <h2>Laptop Refurbishment</h2>
          <p>High-quality refurbished laptops for your needs</p>
          <button className="shop-btn">Shop Now</button>
        </div>

        <div className="first-img">
          <img
            src={"/images/MacBookPro.png"}
            alt="laptop"
            style={{
              maxWidth: "480px",
              maxHeight: "380px",
              borderRadius: "12px",
            }}
          />
        </div>
      </section>

      <section className="grid-section">
        <div className="grid-card">
          <div className="image-placeholder2">
            <img
              src={"/images/INVENTORY.png"}
              alt="inventory"
              style={{
                maxWidth: "200px",
                maxHeight: "180px",
                borderRadius: "12px",
              }}
            />
          </div>
          <h4>Available Inventory</h4>
          <nav className="nav-center">
          <div className="inventory-link">
          <Link to="/inventory">Inventory</Link>
          </div>
          </nav>
          <p>Browse our selection of refurbished laptops</p>
        </div>

        <div className="grid-card">
          <div className="image-placeholder">[Articles Image]</div>
          <h4>Recent Articles</h4>
          <p>Read our latest articles and news</p>
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
    </div>
  );
};

export default HomePage;
