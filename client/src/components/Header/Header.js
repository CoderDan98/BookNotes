import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>Book Notes</h1>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <SearchBar />
    </div>
  );
};

export default Header;
