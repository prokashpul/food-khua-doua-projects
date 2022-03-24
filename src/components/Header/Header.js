import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav-bar container">
        <div className="logo">K🍝D</div>
        <ul className={!mobileMenu ? "open-menu nav-items" : "nav-items"}>
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
      <div className="menu-bar" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <FontAwesomeIcon icon={faBarsStaggered} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </div>
    </header>
  );
};

export default Header;
