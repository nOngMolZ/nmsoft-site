import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {

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
    <section id="hero" className="relative overflow-hidden bg-black-100 min-h-screen">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[150px]"></div>
      </div>
      <div className="hero-layout">
        {/* left hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 relative z-20">
          <div className="flex flex-col gap-8">
            <div className="hero-badge border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-blue-50 text-sm md:text-base inline-block uppercase tracking-widest font-semibold mb-4 w-fit">
              Premium Software Engineering
            </div>
            <div className="hero-text leading-tight">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
                Build the Future.
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-accent)' }}>
                Without limits.
              </h1>
            </div>
            <p className="text-text-muted md:text-xl text-lg max-w-2xl mt-4 leading-relaxed font-light">
              We engineer scalable, enterprise-grade software solutions with stunning precision. At NMSoft, your visionary ideas become reality through cutting-edge technology and world-class design.
            </p>
            <div className="mt-8">
              <Button className="md:w-80 md:h-16 w-60 h-12 text-lg font-semibold tracking-wide" id="button" text="Start a Project" />
            </div>
          </div>
        </header>
        {/* right hero content */}
        <figure>
          <div className="hero-3d-layout ">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
