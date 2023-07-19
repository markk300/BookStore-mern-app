import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <MenuBookIcon />
        </Link>
      </div>
      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <div className="hamburger"></div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/add-book">Add Book</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
