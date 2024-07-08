import React, { useState } from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header-top">
        <div className="logo">
          <h1>Book Notes</h1>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setIsMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          About
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </a>
        <div className="search-box">
          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
