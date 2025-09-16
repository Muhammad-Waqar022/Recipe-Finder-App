import React, { useEffect, useState } from "react";
import MealCard from "../Components/MealCard";
import Search from "../Components/Search";
import RandomButton from "../Components/RandomButton";

const Home = ({ favourite, handleFav }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchMeals = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setMeals(data.meals ? data.meals : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals("chicken");
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/categories.php`
        );
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data.categories ? data.categories : []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  const handleCategory = async (categoryName) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setMeals(data.meals);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRandom = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setMeals(data.meals);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    fetchMeals(query);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-center items-center mt-10 px-4">
        <Search
          query={query}
          handleInput={handleInput}
          handleSearch={handleSearch}
        />
        <RandomButton handleRandom={handleRandom} />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center mt-10  mb-5">
          Browse Categories
        </h1>
        <div className="flex gap-4 overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {categories.map((category) => (
            <button
              onClick={() => handleCategory(category.strCategory)}
              key={category.idCategory}
              className={`flex-shrink-0 w-[140px] p-3 rounded-xl border transition hover:shadow-md hover:scale-101`}
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="rounded-md w-full h-24 object-cover"
              />
              <h2 className="font-medium mt-2 text-center">
                {category.strCategory}
              </h2>
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <h1 className="text-2xl font-semibold text-center mt-9 text-gray-600 animate-pulse">
          Loading meals...
        </h1>
      )}
      {error && (
        <h1 className="text-2xl font-semibold text-red-600 text-center mt-9">
          {error}
        </h1>
      )}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {meals.length > 0
          ? meals.map((meal) => (
              <MealCard
                key={meal.idMeal}
                meal={meal}
                handleFav={handleFav}
                favourite={favourite}
              />
            ))
          : !loading && (
              <p className="text-center col-span-full text-red-500 text-lg">
                No meals found !!
              </p>
            )}
      </div>
    </div>
  );
};

export default Home;
