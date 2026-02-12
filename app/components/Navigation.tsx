"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              DevStudio
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
