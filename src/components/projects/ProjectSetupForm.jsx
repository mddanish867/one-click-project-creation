import React, { useState } from "react";
import { ArrowRight, Folder, Code } from "lucide-react";

const ProjectSetupForm = ({ onNext }) => {
  const [projectName, setProjectName] = useState("");
  const [directory, setDirectory] = useState("");

  const handleNext = () => {
    if (projectName.trim() !== "" && directory.trim() !== "") {
      onNext({ projectName, directory });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
       
        {/* Form */}
        <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg text-white">
          <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
            Project Setup
          </h2>

          <div className="space-y-6">
            {/* Project Name Input */}
            <div className="space-y-2">
              <label className="block text-sm tracking-wider text-gray-400">
                PROJECT NAME
              </label>
              <div className="relative">
                <Code className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="Enter project name"
                />
              </div>
            </div>

            {/* Directory Selection */}
            <div className="space-y-2">
              <label className="block text-sm tracking-wider text-gray-400">
                DIRECTORY
              </label>
              <div className="relative">
                <Folder className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={directory}
                  onChange={(e) => setDirectory(e.target.value)}
                  className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="Select directory"
                />
              </div>
            </div>

            {/* Next Button */}
            <button
              className={`w-full bg-emerald-400 text-black py-3 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center ${
                !projectName || !directory ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!projectName || !directory}
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

export default ProjectSetupForm;