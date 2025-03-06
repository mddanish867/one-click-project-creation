import React from "react";
import { Rocket, Check } from "lucide-react";

const SetupSummary = ({ setupData, onConfirm }) => {
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

        {/* Summary Card */}
        <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg text-white">
          <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
            Setup Summary
          </h2>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center justify-between border-b border-gray-800 pb-2">
              <span className="text-sm tracking-wider text-gray-400">PROJECT NAME</span>
              {/* <span className="font-medium">{setupData.projectName}</span> */}
              <span className="font-medium">Projec Name</span>
            </div>
            
            <div className="flex items-center justify-between border-b border-gray-800 pb-2">
              <span className="text-sm tracking-wider text-gray-400">DIRECTORY</span>
              {/* <span className="font-medium">{setupData.directory}</span> */}
              <span className="font-medium">Directory</span>

            </div>
            
            <div className="flex items-center justify-between border-b border-gray-800 pb-2">
              <span className="text-sm tracking-wider text-gray-400">TECH STACK</span>
              {/* <span className="font-medium">{setupData.techStack}</span> */}
              <span className="font-medium">Tech Stack</span>

            </div>
            
            <div className="flex items-center justify-between border-b border-gray-800 pb-2">
              <span className="text-sm tracking-wider text-gray-400">DEPENDENCIES</span>
              {/* <span className="font-medium">{setupData.dependencies.join(", ") || "None"}</span> */}
              <span className="font-medium">Dependencies</span>
            </div>
            
            <div className="flex items-center justify-between border-b border-gray-800 pb-2">
              <span className="text-sm tracking-wider text-gray-400">TEMPLATE</span>
              {/* <span className="font-medium">{setupData.template}</span> */}
              <span className="font-medium">Template</span>
            </div>
          </div>

          {/* Create Project Button */}
          <button
            className="mt-8 w-full bg-emerald-400 text-black py-3 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center justify-center"
            onClick={onConfirm}
          >
            CREATE PROJECT
            <Rocket className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupSummary;