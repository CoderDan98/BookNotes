import React from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search for books..."
        onChange={handleInputChange}
        aria-label="Search for books"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
