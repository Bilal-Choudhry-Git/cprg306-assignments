"use client";

import { useEffect, useState } from "react";

// Fetch meals by ingredient
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (!ingredient) return;
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white text-black p-4 rounded-lg shadow w-72">
      <h2 className="text-lg font-bold mb-2">
        Meal Ideas for: {ingredient || "____"}
      </h2>

      {meals.length === 0 && (
        <p className="text-sm text-gray-600">No meal ideas yet...</p>
      )}

      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="border rounded p-2">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
