import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { MdContactPhone } from "react-icons/md";

import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          <img src="/public/images/logos/company-logo-4.png" className="h-[64px] w-auto" alt="" />
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="contact-btn group">
            <div className="inner gap-2">
              <MdContactPhone />
              <span>ติดต่อเรา</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
