import React, { useEffect, useState } from "react";
import MealCard from "../Components/MealCard";
import Search from "../Components/Search";

const Home = () => {
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
      setMeals(data.meals);
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
        setCategories(data.categories);
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

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    fetchMeals(query);
  };
  return (
    <>
      <Search
        query={query}
        handleInput={handleInput}
        handleSearch={handleSearch}
      />

      {loading && (
        <h1 className="text-3xl font-bold text-center mt-9">Loading...</h1>
      )}
      {error && (
        <h1 className="text-3xl font-bold text-red-700 text-center mt-9">
          {error}
        </h1>
      )}

      <div>
        <h1 className="text-3xl font-bold text-center mt-9">Categories</h1>
        <div className="flex gap-6 overflow-x-auto p-5">
          {categories.map((category) => (
            <button
              onClick={() => handleCategory(category.strCategory)}
              key={category.idCategory}
              className="min-w-[150px] text-center"
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="rounded-md"
              />
              <h2 className="font-semibold mt-2">{category.strCategory}</h2>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-9 p-5">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
};

export default Home;
