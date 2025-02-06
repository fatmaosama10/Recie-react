import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MealDetails.scss"; 

const MealDetails = () => {
  const [meal, setMeal] = useState(null);
  const { mealId } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => {
        setMeal(response.data.meals[0]);
      })
      .catch((error) => {
        console.error("Error fetching meal details:", error);
      });
  }, [mealId]);

  if (!meal) {
    return <p className="text-center text-lg font-semibold text-gray-600">Loading...</p>;
  }

  return (
    <div className="meal-detail-container">
      <div className="meal-detail-content">
        <div className="meal-title">{meal.strMeal}</div>

        <div className="meal-image">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="meal-img"
          />
        </div>

        <div className="meal-details">
          <div className="meal-steps">
            <h3>Steps</h3>
            <div className="steps-list">
              {meal.strInstructions.split("\n").map((step, index) => (
                <p key={index} className="step">{step}</p>
              ))}
            </div>
          </div>

          <div className="meal-ingredients">
            <h3>Ingredients</h3>
            <div className="ingredients-table">
              <table>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 20 }).map((_, index) => {
                    const ingredient = meal[`strIngredient${index + 1}`];
                    const measure = meal[`strMeasure${index + 1}`];
                    if (ingredient && measure) {
                      return (
                        <tr key={index}>
                          <td>{ingredient}</td>
                          <td>{measure}</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-youtube"
            >
              🎥 Watch on YouTube
            </a>
          )}

          {meal.strSource && (
            <a
              href={meal.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-source"
            >
              View Full Recipe
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
