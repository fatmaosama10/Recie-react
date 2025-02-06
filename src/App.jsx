import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./output.css";
import MealCategoryButtons from "./components/MealCategoryButtons/MealCategoryButtons";
import MealCard from "./components/MealCard/MealCard";
import Sidebar from "./components/Sidebar";
import MealDetails from "./components/MealDetails/MealDetails";
import { useMealData } from "./components/useMealData"; // استيراد الـ Hook

function App() {
  const [category, setCategory] = useState("All");
  const { mealData } = useMealData(category); // استخدام الـ Hook

  return (
    <Router>
      <div className="flex">
        {/* الشريط الجانبي في اليسار */}
        <Sidebar />

        {/* المحتوى الرئيسي في اليمين */}
        <div className="flex-1 p-4 ml-64 overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-black p-4">
                  <MealCategoryButtons
                    category={category}
                    setCategory={setCategory}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {mealData.map((meal) => (
                      <MealCard key={meal.idMeal} meal={meal} />
                    ))}
                  </div>
                </div>
              }
            />
            <Route path="/meal/:mealId" element={<MealDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
