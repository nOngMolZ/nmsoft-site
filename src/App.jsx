import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import ContactSection from "./sections/ContactSection";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />

      {/* <ExperienceSection /> */}
      <TechStack />
      <Testimonials />
      {/* <Contact />i */}
      <ContactSection />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
