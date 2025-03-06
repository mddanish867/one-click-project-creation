import React from "react";
import { Check, X, Folder } from "lucide-react";

const SuccessMessage = ({ projectPath, onClose }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
       

        {/* Success Card */}
        <div className="bg-black/30 border-l-4 border-l-emerald-400 border-r border-t border-b border-gray-800 p-8 backdrop-blur-lg text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-emerald-400" />
            </div>
          </div>

          <h2 className="text-2xl font-thin tracking-wider text-center mb-4">
            Project Created Successfully!
          </h2>
          
          <p className="text-gray-400 text-center mb-4">Your new project is ready at:</p>
          
          <div className="relative bg-black/50 border border-gray-800 p-3 rounded-md mb-6">
            <Folder className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <code className="block pl-8 text-emerald-300 font-mono text-sm">{projectPath}</code>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-emerald-400 text-black py-2 px-6 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center"
              onClick={onClose}
            >
              CLOSE
              <X className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;