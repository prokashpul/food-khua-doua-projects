import React from "react";
import "./Search.css";
const Search = ({ searchNow, enterKey }) => {
  return (
    <div className="search">
      <input
        type="text"
        name=""
        id="search-input"
        placeholder="Search"
        onKeyPress={enterKey}
      />
      <button className="btn" onClick={searchNow}>
        Search
      </button>
    </div>
  );
};

export default Search;
