import React from "react";
import MealCard from "../Components/MealCard";

const FavMeals = ({ favourite, handleFav }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Your Favorite Meals
      </h1>

      {favourite.length === 0 ? (
        <p className="text-center text-red-500 text-lg">
          You have no favorite meals yet!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favourite.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              handleFav={handleFav}
              favourite={favourite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavMeals;
