import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CategoryList.css"; // Import your CSS file
import "./CategorySearch.css";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch categories from your API or backend endpoint
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6004"
      }/categories`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching categories: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        // Modify the image_path for each category to remove "public"
        const modifiedData = data.map((category) => ({
          ...category,
          image_path: category.image_path.replace("/public", ""),
        }));
        setCategories(modifiedData);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  useEffect(() => {
    // Debugging: Log the search query
    console.log("Search Query:", searchQuery);

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

  const getCategoryImage = (imagePath) => {
    // Construct the full URL for the category image without "public"
    const fullImageUrl = `${
      import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6004"
    }${imagePath}`;
    console.log("Full Image URL:", fullImageUrl); // Add this line for debugging
    return fullImageUrl;
  };

  const renderCategoryCards = () => {
    return searchQuery.trim() === ""
      ? categories.map((category) => (
          <div key={category.id} className="category-card">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            {/* Display the category image */}
            <img
              src={getCategoryImage(category.image_path)}
              alt={`${category.name} Cloud`}
              className="category-image" // Add a class for styling
            />
          </div>
        ))
      : searchResults.map((category) => (
          <div key={category.id} className="category-card">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            {/* Display the category image */}
            <img
              src={category.image_path}
              alt={`${category.name} Cloud`}
              className="category-image" // Add a class for styling
            />
          </div>
        ));
  };

  return (
    <div>
      <div className="category-search">
        <h2>Category Search</h2>
        <input
          className="search"
          type="text"
          placeholder="Search categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="results-container">{renderCategoryCards()}</div>
      </div>
    </div>
  );
}

export default CategoryList;
