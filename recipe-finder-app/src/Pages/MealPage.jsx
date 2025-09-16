import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Youtube } from "lucide-react";

const MealPage = ({ favourite, handleFav }) => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setMeal(data.meals);
      } catch (error) {
        console.error("Error fetching meal:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMeal();
  }, [id]);

  const ingredients = [];
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[0][`strIngredient${i}`];
      const measure = meal[0][`strMeasure${i}`];
      if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-700 dark:text-gray-300">Loading...</p>
    );
  if (!meal)
    return (
      <p className="text-center mt-10 text-red-500 dark:text-red-400">
        Meal not found!
      </p>
    );

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {meal.map((m) => (
        <div key={m.idMeal} className="max-w-4xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-green-500 text-4xl mb-10 underline">
              Meal details
            </h1>
            <div>
              <button
                className={`mb-5 px-4 py-2 rounded-lg transition-all duration-200 ${
                  favourite.some((meal) => meal.idMeal === m.idMeal)
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-transparent border border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
                }`}
                onClick={() => handleFav(m)}
              >
                <Heart />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-6">
            <div>
              <img
                className="w-full h-86 rounded-2xl"
                src={m.strMealThumb}
                alt={m.strMeal}
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold my-4">{m.strMeal}</h1>
                <div className="flex gap-6 text-gray-700 dark:text-gray-300">
                  <p>
                    <span className="font-bold">Category: </span>
                    {m.strCategory}
                  </p>
                  <p>
                    <span className="font-bold">Area: </span>
                    {m.strArea}
                  </p>
                </div>
              </div>
              <div>
                <Link
                  to={m.strYoutube}
                  target="_blank"
                  className="text-red-500 underline flex gap-3 items-center dark:text-red-400"
                >
                  <Youtube />
                  <span>Watch Recipe Now</span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold my-4 mt-10">Instructions</h2>
            <p className="text-justify">{m.strInstructions}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold my-4">Ingredients</h2>
            <ul className="list-disc list-inside">
              {ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealPage;
