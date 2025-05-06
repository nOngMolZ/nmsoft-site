import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "../context/ThemeContext";

const TechStack = () => {
  const { isDarkMode } = useTheme();

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 100%",
        },
      }
    );
  });
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Tech Stack ที่เราใช้" sub="🤝 The Skills I Bring to the Table" />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className={`${isDarkMode ? "card-border" : "card-border-light"} tech-card overflow-hidden group xl:rounded-full rounded-lg hover:shadow-lg transition-all duration-300`}
              style={{
                background: !isDarkMode ? "linear-gradient(to bottom, #ffffff, #f8f9fa)" : "",
                boxShadow: !isDarkMode ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "",
              }}
            >
              <div className={`${isDarkMode ? "tech-card-animated-bg" : "tech-card-animated-bg-light"}`} />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full relative z-20">
                  <p className={`${isDarkMode ? "text-white-50" : "text-gray-800"} font-medium group-hover:text-white`}>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
