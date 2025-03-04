// src/components/Navbar.js
import { useState, useEffect } from 'react';
import { AlignCenter, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-extralight tracking-[0.2em] text-white">
              ScaffoldX<span className="text-rose-400 text-5xl">.</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <a href="#home" className="text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-500">Home</a>
            <a href="#features" className="text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-500">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-500">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-500">Docs</a>
            <button className="group relative px-8 py-3 overflow-hidden rounded-none bg-gradient-to-r from-rose-400 to-purple-500 transition-all duration-500">
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-500 to-rose-400 transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative text-sm tracking-wider">Begin Journey</span>
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <AlignCenter size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-gray-900/95 backdrop-blur-xl">
          <div className="px-6 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-4 text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-300">Experience</a>
            <a href="#features" className="block px-3 py-4 text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-300">Features</a>
            <a href="#pricing" className="block px-3 py-4 text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-300">Investment</a>
            <a href="#contact" className="block px-3 py-4 text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-300">Connect</a>
            <div className="px-3 py-4">
              <button className="w-full bg-gradient-to-r from-rose-400 to-purple-500 text-white px-8 py-3 rounded-none text-sm tracking-wider">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;