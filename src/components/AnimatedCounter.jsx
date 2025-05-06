import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { useTheme } from "../context/ThemeContext";

const AnimatedCounter = () => {
  const { isDarkMode } = useTheme();

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32 ">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div key={item.label} className={`${isDarkMode ? "bg-zinc-900" : "bg-white shadow-md"} rounded-lg p-10 flex flex-col justify-center transition-all duration-300 hover:shadow-lg`}>
            <div className={`counter-number ${isDarkMode ? "text-white" : "text-gray-900"} text-5xl font-bold mb-2`}>
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className={`${isDarkMode ? "text-white-50" : "text-gray-600"} text-lg`}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
