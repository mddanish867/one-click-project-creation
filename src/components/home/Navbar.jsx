import React, { useState, useEffect } from "react";
import {
  AlignRight,
  X, 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const handleGetAccess = () => {
        navigate("/login")
      }
  return (
    <>

    <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-thin tracking-wider">
                <a href="/">
                ScaffoldX<span className="text-pink-600 text-5xl">.</span>
                </a>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <a
                href="/features"
                className="text-sm font-light tracking-wider hover:text-pink-400 transition-colors"
              >
                FEATURES
              </a>
              <a
                href="/solutions"
                className="text-sm font-light tracking-wider hover:text-pink-400 transition-colors"
              >
                SOLUTIONS
              </a>
              <a
                href="/enterprise"
                className="text-sm font-light tracking-wider hover:text-pink-400 transition-colors"
              >
                ENTERPRISE
              </a>
              <a
                href="/pricing"
                className="text-sm font-light tracking-wider hover:text-pink-400 transition-colors"
              >
                PRICING
              </a>
              <button
              onClick={handleGetAccess}
              className="border border-pink-600/60 bg-pink-600/20 text-pink-600 px-6 py-2 text-sm tracking-wider hover:bg-pink-600 hover:text-white transition-all duration-300">
                GET ACCESS
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <AlignRight className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden min-h-screen bg-gradient-to-b from-pink-900/30 via-pink-900/20 to-pink-900 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="/features" className="block text-sm tracking-wider">
                FEATURES
              </a>
              <a href="/solutions" className="block text-sm tracking-wider">
                SOLUTIONS
              </a>
              <a href="/enterprise" className="block text-sm tracking-wider">
                ENTERPRISE
              </a>
              <a
                href="/pricing"
                className="block text-sm tracking-wider"
              >
                PRICING
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar