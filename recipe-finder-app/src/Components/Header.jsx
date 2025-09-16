import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full bg-green-700 dark:bg-green-700 dark:text-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-3 gap-4">
        <NavLink to="/">
          <h1 className="text-xl sm:text-2xl font-bold">🍴 Mealify</h1>
        </NavLink>

        {/* Nav Links + Theme Toggle */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base sm:text-lg px-3 py-1 rounded transition-colors ${
                isActive
                  ? "font-bold text-white bg-green-800"
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
                  ? "font-bold text-white bg-green-800"
                  : "text-green-100 hover:text-white hover:bg-green-600"
              }`
            }
          >
            Favourite Meals
          </NavLink>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md border border-gray-400 dark:border-gray-200"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
