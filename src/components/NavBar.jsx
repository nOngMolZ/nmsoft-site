import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { MdContactPhone } from "react-icons/md";


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="flex items-center group relative cursor-pointer">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-blue-500/0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          <span className="text-3xl font-black text-white tracking-tight relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
            NM
          </span>
          <span className="text-3xl font-bold bg-clip-text text-transparent relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" style={{ backgroundImage: 'var(--gradient-accent)' }}>
            Soft
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 ml-1 mb-1 relative z-10 animate-pulse"></span>
        </Link>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={location.pathname === "/" ? link : `/${link}`}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <a href={location.pathname === "/" ? "#contact" : "/#contact"} className="group relative hidden md:inline-flex">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-md group-hover:bg-purple-500/40 transition-colors duration-500"></div>
            <div className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-black-200 border border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
              <MdContactPhone className="text-blue-50 group-hover:text-purple-400 transition-colors duration-300" />
              <span className="text-sm font-semibold tracking-wide text-white group-hover:text-blue-50 transition-colors">ติดต่อเรา</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
