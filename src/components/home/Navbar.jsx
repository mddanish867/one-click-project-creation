import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 md:px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-green-400 text-2xl font-bold">OneClick</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-10">
        <a href="#" className="text-white hover:text-green-400 transition duration-300 text-sm uppercase tracking-wider">Home</a>
        <a href="#" className="text-white hover:text-green-400 transition duration-300 text-sm uppercase tracking-wider">Features</a>
        <a href="#" className="text-white hover:text-green-400 transition duration-300 text-sm uppercase tracking-wider">Pricing</a>
        <a href="#" className="text-white hover:text-green-400 transition duration-300 text-sm uppercase tracking-wider">Docs</a>
      </div>

      {/* Authentication Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-white border-b border-transparent hover:border-green-400 transition duration-300 text-sm">Sign Up</a>
        <a href="#" className="bg-green-500 text-black font-bold px-6 py-2 rounded-none hover:bg-white hover:text-black transition duration-300">LOGIN</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black md:hidden flex flex-col py-6 px-4 z-50">
          <a href="#" className="text-white hover:text-green-400 transition duration-300 py-3 text-sm uppercase tracking-wider">Home</a>
          <a href="#" className="text-white hover:text-green-400 transition duration-300 py-3 text-sm uppercase tracking-wider">Features</a>
          <a href="#" className="text-white hover:text-green-400 transition duration-300 py-3 text-sm uppercase tracking-wider">Pricing</a>
          <a href="#" className="text-white hover:text-green-400 transition duration-300 py-3 text-sm uppercase tracking-wider">Docs</a>
          <div className="mt-4 flex flex-col space-y-3 pt-3 border-t border-gray-800">
            <a href="#" className="text-white hover:text-green-400 transition duration-300 py-2 text-sm uppercase">Sign Up</a>
            <a href="#" className="bg-green-500 text-black font-bold px-6 py-3 text-center hover:bg-white hover:text-black transition duration-300">LOGIN</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;