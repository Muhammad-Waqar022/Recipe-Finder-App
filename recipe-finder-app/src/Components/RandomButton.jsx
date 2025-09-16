import React from "react";

const RandomButton = ({ handleRandom }) => {
  return (
    <button
      onClick={handleRandom}
      className="mt-3 sm:mt-0 sm:ml-4 bg-transparent hover:bg-green-600 text-green-500 hover:text-white hover:border-white border-2 border-green-500 font-semibold px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-150"
    >
      Random Meal
    </button>
  );
};

export default RandomButton;
