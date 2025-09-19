import React, { useState } from "react";

const AddMealForm = ({ handleFav }) => {
  const [showModal, setShowModal] = useState(false);
  const [customMeal, setCustomMeal] = useState({
    idMeal: Date.now().toString(),
    strMeal: "",
    strCategory: "",
    strArea: "",
    strInstructions: "",
    strMealThumb: "",
    strIngredient1: "",
  });

  const handleChange = (e) => {
    setCustomMeal({ ...customMeal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save custom meal in localStorage
    const storedMeals = JSON.parse(localStorage.getItem("customMeals")) || [];
    localStorage.setItem(
      "customMeals",
      JSON.stringify([...storedMeals, customMeal])
    );

    // Add to favourites in App
    handleFav(customMeal);

    // Reset form & close modal
    setCustomMeal({
      idMeal: Date.now().toString(),
      strMeal: "",
      strCategory: "",
      strArea: "",
      strInstructions: "",
      strMealThumb: "",
      strIngredient1: "",
    });
    setShowModal(false);
  };

  return (
    <div className="flex justify-center my-5">
      <button
        onClick={() => setShowModal(true)}
        className="bg-transparent border-2 border-green-500 text-green-500 sm:mt-10 ml-3 px-4 py-3 font-semibold rounded-xl hover:bg-green-700 hover:text-white"
      >
        Add Meal
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Add Custom Meal
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="strMeal"
                placeholder="Meal Name"
                value={customMeal.strMeal}
                onChange={handleChange}
                className="w-full p-2 mb-3 border rounded"
                required
              />
              <input
                type="text"
                name="strCategory"
                placeholder="Category"
                value={customMeal.strCategory}
                onChange={handleChange}
                className="w-full p-2 mb-3 border rounded"
                required
              />
              <input
                type="text"
                name="strArea"
                placeholder="Area"
                value={customMeal.strArea}
                onChange={handleChange}
                className="w-full p-2 mb-3 border rounded"
                required
              />
              <input
                type="text"
                name="strIngredient1"
                placeholder="Ingredients"
                value={customMeal.strIngredient1}
                onChange={handleChange}
                className="w-full p-2 mb-3 border rounded"
                required
              />
              <textarea
                name="strInstructions"
                placeholder="Instructions"
                value={customMeal.strInstructions}
                onChange={handleChange}
                className="w-full p-2 mb-3 border rounded"
                required
              />
              <input
                type="text"
                name="strMealThumb"
                placeholder="Image URL"
                value={customMeal.strMealThumb}
                onChange={handleChange}
                className="w-full p-2 mb-3 border rounded"
                required
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMealForm;
