import { socialImgs } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`footer ${!isDarkMode && "bg-gray-50"}`}>
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <div className={`flex gap-4 ${isDarkMode ? "text-white-50" : "text-gray-600"}`}>
            <p>Terms & Conditions</p>
            <Link to="/policy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a target="_blank" href={socialImg.url} key={index} className={`icon ${!isDarkMode && "light-icon"}`} rel="noreferrer">
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} className={!isDarkMode ? "icon-img-light" : ""} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className={`text-center md:text-end ${isDarkMode ? "text-white-50" : "text-gray-600"}`}>© {new Date().getFullYear()} NMSoft All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
