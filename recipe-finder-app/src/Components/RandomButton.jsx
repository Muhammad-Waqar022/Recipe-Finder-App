import React from "react";

const RandomButton = ({ handleRandom }) => {
  return (
    <div className="mt-10">
    <button
      onClick={handleRandom}
      className="mt-3 sm:mt-0 sm:ml-4 
                 bg-transparent 
                 dark:bg-transparent 
                 hover:bg-green-600 dark:hover:bg-green-700 
                 text-green-500 dark:text-green-500 
                 hover:text-white 
                 border-2 border-green-500 dark:border-green-500 
                 font-semibold px-3 sm:px-4 py-2 sm:py-3 
                 rounded-xl transition-all duration-150"
    >
      Random Meal
    </button>
    </div>
  );
};

export default RandomButton;
