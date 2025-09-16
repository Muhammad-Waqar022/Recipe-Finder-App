import React from "react";

const RandomButton = ({ handleRandom }) => {
  return (
    <button
      onClick={handleRandom}
      className="ml-4 bg-transparent hover:bg-green-600 text-green-500 hover:text-white hover:border-white border-2  border-green-500 font-semibold px-2 py-3 rounded-xl transition-all duration-150"
    >
    Random Meal
    </button>
  );
};

export default RandomButton;
