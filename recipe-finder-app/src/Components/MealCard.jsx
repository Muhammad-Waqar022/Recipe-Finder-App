import React from "react";
import { Link } from "react-router-dom";
import { Heart } from 'lucide-react';

const MealCard = ({ meal,handleFav,favourite }) => {
  const isFav = favourite.some(m => m.idMeal === meal.idMeal);
  return (
    <div className="bg-white p-1 m-0.5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-70 rounded-2xl  object-cover"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />

      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="font-semibold text-lg md:text-xl truncate">
          {meal.strMeal}
        </h2>
        <div className="flex justify-center gap-2">
        <Link to={`/meal/${meal.idMeal}`}>
        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-200">
          View More
        </button>
        </Link>
        <button className={`mt-4 px-4 py-2 rounded-lg transition-all duration-200 ${
              isFav
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-transparent border-1 border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
            }`} onClick={() => handleFav(meal)}><Heart /></button>
      </div>
        </div>
    </div>
  );
};

export default MealCard;
