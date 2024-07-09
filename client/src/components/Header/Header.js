import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <h1>Book Notes</h1>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <div className="search-box">
          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
