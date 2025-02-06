import React, { useState } from "react";
import "./MealCategoryButtons.scss"; // استيراد ملف SCSS

const MealCategoryButtons = ({ category, setCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // حالة فتح/إغلاق القائمة المنسدلة
  const categories = [
    "All", "Beef", "Breakfast", "Chicken", "Dessert", "Goat", "Lamb", "Miscellaneous", 
    "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // تبديل حالة القائمة المنسدلة
  };

  return (
    <div className="meal-category-buttons">
      {/* العنوان */}
      <h1 className="title">Learn, Cook, Eat Your Food</h1>

      {/* زر القائمة المنسدلة (يظهر فقط على الشاشات الصغيرة) */}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Categories
      </button>

      {/* القائمة الكاملة (تظهر على الشاشات الكبيرة أو عند فتح القائمة المنسدلة) */}
      <div className={`categories-list ${isDropdownOpen ? "open" : ""}`}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setIsDropdownOpen(false); // إغلاق القائمة بعد اختيار فئة
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