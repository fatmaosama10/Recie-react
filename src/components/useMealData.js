
import { useState, useEffect } from "react";
import axios from "axios";

export const useMealData = (category) => {
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealData = (category) => {
      const url =
        category === "All"
          ? "https://www.themealdb.com/api/json/v1/1/search.php?s="
          : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

      return axios
        .get(url)
        .then((response) => response.data.meals)
        .catch((error) => {
          console.error("Error fetching data:", error);
          return [];
        });
    };

    setLoading(true);
    fetchMealData(category)
      .then((data) => {
        setMealData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meal data:", error);
        setLoading(false);
      });
  }, [category]);

  return { mealData, loading };
};
