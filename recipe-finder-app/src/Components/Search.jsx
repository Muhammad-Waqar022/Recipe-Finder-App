import React from "react";

const Search = ({ query, handleInput, handleSearch }) => {
  return (
    <div className="flex w-full max-w-2xl shadow-md rounded-2xl overflow-hidden">
      <input
        type="text"
        value={query}
        onChange={handleInput}
        placeholder="Search recipes..."
        className="flex-1 px-4 py-3 bg-gray-200 text-lg sm:text-xl border-none focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 transition-all duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
