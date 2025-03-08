import React, { useState } from "react";
import { ArrowRight, Layout } from "lucide-react";

const TemplateSelector = ({ onNext }) => {
  const [template, setTemplate] = useState("");

  const handleNext = () => {
    if (template) {
      onNext({ template });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-2xl font-thin tracking-wider text-white">
            <a href="/">
              ScaffoldX<span className="text-pink-600 text-3xl">.</span>
            </a>
          </span>
        </div>

        {/* Form */}
        <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg text-white">
          <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
            Choose a Template
          </h2>

          <div className="space-y-3 mb-6">
            <label className="block text-sm tracking-wider text-gray-400 mb-2">
              TEMPLATE
            </label>
            
            {["Basic", "Admin Dashboard", "Full-Stack Starter"].map((tpl) => (
              <div
                key={tpl}
                className={`relative block p-4 border cursor-pointer transition-colors ${
                  template === tpl 
                    ? "border-pink-600 bg-pink-600/10" 
                    : "border-gray-800 hover:border-gray-700 hover:bg-black/50"
                }`}
                onClick={() => setTemplate(tpl)}
              >
                <div className="flex items-center">
                  <Layout className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="tracking-wide">{tpl}</span>
                  
                  {template === tpl && (
                    <div className="absolute right-4 w-4 h-4 rounded-full bg-pink-600 flex items-center justify-center">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            className={`w-full bg-pink-600 text-black py-3 text-sm tracking-wider hover:bg-pink-400 transition-colors duration-300 flex items-center justify-center ${
              !template ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!template}
            onClick={handleNext}
          >
            NEXT
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Adding the missing import
import { Check } from "lucide-react";

export default TemplateSelector;