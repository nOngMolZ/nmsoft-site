import { socialImgs } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-[#030305] py-12 md:py-16 border-t border-white/5 relative z-10 w-full overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-50/20 to-transparent"></div>
      
      <div className="footer-container max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
        <div className="flex flex-col justify-center items-center md:items-start order-2 md:order-1">
          <div className="flex gap-6 text-sm text-text-muted font-medium">
            <Link to="#" className="hover:text-blue-50 transition-colors">Terms & Conditions</Link>
            <Link to="/policy" className="hover:text-blue-50 transition-colors">Privacy Policy</Link>
          </div>
        </div>
        
        <div className="socials flex justify-center order-1 md:order-2">
          {socialImgs.map((socialImg, index) => (
            <a target="_blank" href={socialImg.url} key={index} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group" rel="noreferrer">
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} className="w-5 h-5 object-contain filter invert opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
        
        <div className="flex flex-col justify-center items-center md:items-end order-3">
          <p className="text-sm text-text-muted">© {new Date().getFullYear()} NMSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
