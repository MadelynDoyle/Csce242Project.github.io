import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';



const NavBar = () => {
  return (
    <header className="main-header">
      <div className="header-top">
        <section className="header-logo">
          <img src="/images/logo.jpg" alt="Logo" />
        </section>
        <section className="header-name">
          <h1>Palmetto Fresh Meats</h1>
        </section>
        <button className="nav-toggle" onClick={() => {
          const nav = document.getElementById("nav-menu");
          nav.style.display = nav.style.display === "block" ? "none" : "block";
        }}>☰</button>
      </div>
      <nav className="main-nav" id="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/faq">FAQ's</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;