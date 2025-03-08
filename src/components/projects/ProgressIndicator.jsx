import React from 'react';

const ProgressIndicator = ({ step }) => {
  const steps = [
    "Initializing Project",
    "Installing Dependencies",
    "Setting Up Configuration",
    "Finalizing",
    "Done",
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="p-6 bg-black/30 border border-gray-800 backdrop-blur-lg text-white rounded-md w-full max-w-lg">
        <h2 className="text-2xl font-thin tracking-wider mb-6 text-center">Setup Progress</h2>
        
        <div className="flex flex-col space-y-4">
          {steps.map((label, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full mr-3 ${
                  index < step ? "bg-pink-600" : "bg-gray-800"
                }`}
              />
              <span className={index < step 
                ? "text-pink-600 font-medium tracking-wider" 
                : "text-gray-400 tracking-wider"}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;