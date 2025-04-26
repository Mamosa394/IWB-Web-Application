import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="logo">IWB Technologies</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Log in
        </button>
      </nav>
    </header>
  );
};

export default Header;
