import React from "react";
import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import NavBar from "../components/NavBar";
import LogoSection from "../sections/LogoSection";
import FeatureCards from "../sections/FeatureCards";
import TechStack from "../sections/TechStack";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
import ContactSection from "../sections/ContactSection";

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <TechStack />
            <Testimonials />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Home;
