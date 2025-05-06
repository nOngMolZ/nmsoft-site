import React from "react";
import { abilities } from "../constants";
import { useTheme } from "../context/ThemeContext";

const FeatureCards = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className={`${isDarkMode ? "card-border" : "card-border-light"} rounded-xl p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg`}
            style={{
              transform: "translateZ(0)",
            }}
          >
            <div className="size-14 flex item-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className={`${isDarkMode ? "text-white" : "text-gray-900"} text-2xl font-semibold mt-2`}>{title}</h3>
            <p className={`${isDarkMode ? "text-white-50" : "text-gray-700"} text-lg`}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
