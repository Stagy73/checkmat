import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CategorySearch.css";

function CategorySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Perform the search when the search query changes
    if (searchQuery.trim() !== "") {
      axios
        .get(`http://localhost:6004/categories/search?query=${searchQuery}`)
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      // Clear the search results when the query is empty
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="category-search">
      <h2>Category Search</h2>
      <input
        className="search"
        type="text"
        placeholder="Search categories..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="results-container">
        {searchResults.map((category) => (
          <div key={category.id} className="category-result">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <img src={category.image_path} alt={`${category.name} Cloud`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySearch;
