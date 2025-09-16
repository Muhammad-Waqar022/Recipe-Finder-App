import React from "react";

const Search = ({ query, handleInput, handleSearch }) => {
  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="flex w-full max-w-xl shadow-md rounded-xl overflow-hidden mt-10">
      <input
        type="text"
        value={query}
        onKeyDown={handleKey}
        onChange={handleInput}
        placeholder="Search recipes..."
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-none focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 transition-all duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
