import React from "react";
import { useNavigate } from "react-router-dom";
import "./MealCard.scss";
const MealCard = ({ meal }) => {
  const navigate = useNavigate();
  const handleViewRecipe = () => {
    navigate(`/meal/${meal.idMeal}`);
  };

  return (
    <div className="card">
      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
         
        />
      </div>
      <h2 className="font-bold text-xl mt-4">{meal.strMeal}</h2>
      <button
        onClick={handleViewRecipe}
        className="mt-2 inline-block px-4 py-2 bg-[rgb(33,186,117)] text-white rounded-md"
      >
        View Recipe
      </button>
    </div>
  );
};

export default MealCard;
