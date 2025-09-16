import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="max-w-7xl mx-auto px-4 flex justify-between items-center   p-4 shadow-md bg-green-500  dark:text-white">
      <h1 className="text-2xl font-bold">🍴 Recipe Finder</h1>
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg px-3 py-1 rounded transition-colors ${
              isActive
                ? "font-bold text-white bg-green-700"
                : "text-green-300 hover:text-white hover:bg-green-600"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/favmeals"
          className={({ isActive }) =>
            `text-lg px-3 py-1 rounded transition-colors ${
              isActive
                ? "font-bold text-white bg-green-700"
                : "text-green-300 hover:text-white hover:bg-green-600"
            }`
          }
        >
          Favourite Meals
        </NavLink>

        <button
          onClick={toggleTheme}
          className="px-2 py-2 rounded bg-gray-300 dark:bg-green-700"
        >
          {theme === "light" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
