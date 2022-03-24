import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar container">
        <div className="logo">K🍝D</div>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">Order</a>
          </li>
          <li className="nav-item">
            <a href="/">Cart</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
