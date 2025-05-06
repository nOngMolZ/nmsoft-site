import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle flex items-center justify-center p-2 rounded-lg transition-colors duration-300" aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
      {isDarkMode ? <FaSun className="text-white text-xl hover:text-yellow-300 transition-colors" /> : <FaMoon className="text-black text-xl hover:text-blue-700 transition-colors" />}
    </button>
  );
};

export default ThemeToggle;
