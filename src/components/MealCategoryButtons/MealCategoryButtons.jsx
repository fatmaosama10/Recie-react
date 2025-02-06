import React, { useState } from "react";
import "./MealCategoryButtons.scss"; 

const MealCategoryButtons = ({ category, setCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const categories = [
    "All", "Beef", "Breakfast", "Chicken", "Dessert", "Goat", "Lamb", "Miscellaneous", 
    "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  return (
    <div className="meal-category-buttons">
     
      <h1 className="title">Learn, Cook, Eat Your Food</h1>

      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Categories
      </button>

      <div className={`categories-list ${isDropdownOpen ? "open" : ""}`}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setIsDropdownOpen(false); 
            }}
            className={`category-button ${category === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MealCategoryButtons;
