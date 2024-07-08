import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;
