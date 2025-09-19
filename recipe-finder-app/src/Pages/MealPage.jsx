import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Youtube } from "lucide-react";
import api from "../API/api";

const MealPage = ({ favourite, handleFav }) => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        // 1. Try API first
        const res = await api.get(`/lookup.php?i=${id}`);
        if (res.data.meals) {
          setMeal(res.data.meals[0]); // single object
        } else {
          // 2. If not found in API → check localStorage
          const storedMeals = JSON.parse(localStorage.getItem("customMeals")) || [];
          const foundMeal = storedMeals.find((m) => m.idMeal === id);
          setMeal(foundMeal || null);
        }
      } catch (error) {
        console.error("Error fetching meal:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMeal();
  }, [id]);

  // Collect ingredients
  const ingredients = [];
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient} - ${measure || ""}`);
      }
    }
  }

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-700 dark:text-gray-300 ">
        Loading...
      </p>
    );

  if (!meal)
    return (
      <p className="text-center mt-10 text-red-500 dark:text-red-400">
        Meal not found!
      </p>
    );

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div key={meal.idMeal} className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-green-500 text-4xl mb-10 underline">
            Meal details
          </h1>
          <div>
            <button
              className={`mb-5 px-4 py-2 rounded-lg transition-all duration-200 ${
                favourite.some((fav) => fav.idMeal === meal.idMeal)
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-transparent border border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
              }`}
              onClick={() => handleFav(meal)}
            >
              <Heart />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-6">
          <div>
            <img
              className="w-full h-86 rounded-2xl"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold my-4">{meal.strMeal}</h1>
              <div className="flex gap-6 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-bold">Category: </span>
                  {meal.strCategory}
                </p>
                <p>
                  <span className="font-bold">Area: </span>
                  {meal.strArea}
                </p>
              </div>
            </div>
            {meal.strYoutube && (
              <div>
                <Link
                  to={meal.strYoutube}
                  target="_blank"
                  className="text-red-500 underline flex gap-3 items-center dark:text-red-400"
                >
                  <Youtube />
                  <span>Watch Recipe Now</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold my-4 mt-10">Instructions</h2>
          <p className="text-justify">{meal.strInstructions}</p>
        </div>

        {ingredients.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold my-4">Ingredients</h2>
            <ul className="list-disc list-inside">
              {ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealPage;
