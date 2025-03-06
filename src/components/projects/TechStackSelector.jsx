import React, { useState } from "react";
import { ArrowRight, Code } from "lucide-react";

const TechStackSelector = ({ onNext }) => {
  const [techStack, setTechStack] = useState("");

  const handleNext = () => {
    if (techStack) {
      onNext({ techStack });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-2xl font-thin tracking-wider text-white">
            <a href="/">
              ScaffoldX<span className="text-emerald-400 text-3xl">.</span>
            </a>
          </span>
        </div>

        {/* Form */}
        <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg text-white">
          <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
            Choose Tech Stack
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm tracking-wider text-gray-400">
                TECH STACK
              </label>
              <div className="relative">
                <Code className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                <select
                  className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white appearance-none focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                  value={techStack}
                  onChange={(e) => setTechStack(e.target.value)}
                >
                  <option value="" disabled className="bg-gray-900">Select an option</option>
                  <option value="vite" className="bg-gray-900">React Vite</option>
                  <option value="nextjs" className="bg-gray-900">Next.js</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              className={`w-full bg-emerald-400 text-black py-3 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center ${
                !techStack ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!techStack}
              onClick={handleNext}
            >
              NEXT
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSelector;