
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src="/images/logo.png" alt="IWB Logo" className="logo-image" />
        <h1 className="logo-text">IWB Technologies</h1>
      </div>

      <nav className="nav-center">

  return (
    <header className="header">
      <h1 className="logo">IWB Technologies</h1>
      <nav className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

      </nav>

      <div className="header-right">
        <button className="logout-btn" onClick={handleLogout}>
          Log out
        </button>
      </div>

        <button className="login-btn" onClick={() => navigate("/login")}>
          Log in
        </button>
      </nav>

    </header>
  );
};

export default Header;
