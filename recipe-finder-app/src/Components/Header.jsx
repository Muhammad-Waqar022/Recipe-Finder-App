import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="w-full px-8 bg-green-600 dark:bg-green-800 dark:text-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-3 gap-4">
        <NavLink to="/">
          <h1 className="text-xl sm:text-2xl font-bold">🍴 Mealify</h1>
        </NavLink>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base sm:text-lg px-3 py-1 rounded transition-colors ${
                isActive
                  ? "font-bold text-white bg-green-800 dark:bg-green-600"
                  : "text-green-100 hover:text-white hover:bg-green-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favmeals"
            className={({ isActive }) =>
              `text-base sm:text-lg px-3 py-1 rounded transition-colors ${
                isActive
                  ? "font-bold text-white bg-green-800 dark:bg-green-600"
                  : "text-green-100 hover:text-white hover:bg-green-600"
              }`
            }
          >
            Favourite Meals
          </NavLink>

          <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg border border-black dark:border-white transition-all"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
