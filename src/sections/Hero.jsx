import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useTheme();

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* left hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 ">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                ทำให้ทุก
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img src={word.imgPath} alt={word.text} className={`xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full ${isDarkMode ? "bg-white-50" : "bg-gray-200"}`} />
                        <span className={isDarkMode ? "" : "text-gray-900"}>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1 className={isDarkMode ? "" : "text-gray-900"}>จากคุณ ให้เป็นจริง</h1>
              {/* <h1 className={isDarkMode ? "" : "text-gray-900"}>that Deliver Results</h1> */}
            </div>
            <p className={`${isDarkMode ? "text-white-50" : "text-gray-700"} md:text-xl relative z-10 pointer-events-none`}>NMSoft.co | ที่ที่ไอเดียของคุณเริ่มต้น… และไปได้ไกลกว่าที่คิด</p>
            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="ดูงานของเรา" />
          </div>
        </header>
        {/* right hero content */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
