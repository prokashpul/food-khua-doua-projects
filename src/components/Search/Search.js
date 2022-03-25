import React from "react";
import "./Search.css";
const Search = ({ searchNow }) => {
  return (
    <div className="search">
      <input type="text" name="" id="search-input" placeholder="Search" />
      <button className="btn" onClick={searchNow}>
        Search
      </button>
    </div>
  );
};

export default Search;
