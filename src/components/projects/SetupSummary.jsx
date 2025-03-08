import React from 'react';
import { Code, Folder, Package, Layout } from 'lucide-react';

const SetupSummary = ({ setupData, onConfirm }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Project Summary</h2>
        
        <div className="space-y-4">
          {/* Project Name */}
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-start">
              <Code className="w-5 h-5 mr-3 text-pink-500 mt-1" />
              <div>
                <div className="text-sm text-gray-400">Project Name</div>
                <div className="text-white font-medium">{setupData.projectName || "Not specified"}</div>
              </div>
            </div>
          </div>
          
          {/* Directory */}
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-start">
              <Folder className="w-5 h-5 mr-3 text-pink-500 mt-1" />
              <div>
                <div className="text-sm text-gray-400">Installation Directory</div>
                <div className="text-white font-medium">{setupData.directory || "Not specified"}</div>
              </div>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-start">
              <Package className="w-5 h-5 mr-3 text-pink-500 mt-1" />
              <div>
                <div className="text-sm text-gray-400">Tech Stack</div>
                <div className="text-white font-medium">{setupData.techStack || "Not specified"}</div>
              </div>
            </div>
          </div>
          
          {/* Template */}
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-start">
              <Layout className="w-5 h-5 mr-3 text-pink-500 mt-1" />
              <div>
                <div className="text-sm text-gray-400">Template</div>
                <div className="text-white font-medium">{setupData.template || "Not specified"}</div>
              </div>
            </div>
          </div>
          
          {/* Dependencies */}
          {setupData.dependencies && setupData.dependencies.length > 0 && (
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Dependencies</div>
              <div className="flex flex-wrap gap-2">
                {setupData.dependencies.map((dep, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-gray-600 rounded-md text-xs text-white"
                  >
                    {dep}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-gray-400 mb-4 text-center">
            Please review your project configuration before continuing.
          </p>
          <button
            onClick={onConfirm}
            className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupSummary;