import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
        Admin Panel
      </h1>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded text-sm text-gray-800 dark:text-white"
      >
        {darkMode ? "🌞 Gündüz" : "🌙 Gece"}
      </button>
    </div>
  );
};

export default Header;
