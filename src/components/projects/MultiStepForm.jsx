import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import ProjectSetupForm from './ProjectSetupForm';
import TechStackSelector from './TechStackSelector';
import TemplateSelector from './TemplateSelector';
import SetupSummary from './SetupSummary';
import ProgressIndicator from './ProgressIndicator';
import SuccessMessage from './SuccessMessage';

const MultiStepForm = () => {
  // Current step state
  const [currentStep, setCurrentStep] = useState(1);
  
  // Progress state for the loading screen
  const [progressStep, setProgressStep] = useState(0);
  
  // All form data combined
  const [formData, setFormData] = useState({
    projectName: '',
    directory: '',
    techStack: '',
    template: '',
    dependencies: ['react-router-dom', 'tailwindcss']
  });
  
  // Handle back button
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Update form data from each step
  const updateFormData = (data) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
  };
  
  // Handle project creation
  const handleCreateProject = () => {
    setCurrentStep(5); // Show progress indicator
    
    // Simulate the progress steps with timeouts
    const simulateProgress = () => {
      let step = 0;
      const interval = setInterval(() => {
        step += 1;
        setProgressStep(step);
        
        if (step >= 5) {
          clearInterval(interval);
          // Show success message after progress completes
          setTimeout(() => {
            setCurrentStep(6);
          }, 500);
        }
      }, 1000);
    };
    
    simulateProgress();
  };
  
  // Close the success message and reset form
  const handleClose = () => {
    setCurrentStep(1);
    setFormData({
      projectName: '',
      directory: '',
      techStack: '',
      template: '',
      dependencies: ['react-router-dom', 'tailwindcss']
    });
  };
  
  // Render the specific step component
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProjectSetupForm 
          initialData={formData}
          onNext={(data) => {
            updateFormData(data);
            setCurrentStep(2);
          }} 
        />;
        
      case 2:
        return <TechStackSelector 
          initialData={formData}
          onNext={(data) => {
            updateFormData(data);
            setCurrentStep(3);
          }} 
        />;
        
      case 3:
        return <TemplateSelector 
          initialData={formData}
          onNext={(data) => {
            updateFormData(data);
            setCurrentStep(4);
          }} 
        />;
        
      case 4:
        return <SetupSummary 
          setupData={formData} 
          onConfirm={handleCreateProject} 
        />;
        
      case 5:
        return <ProgressIndicator step={progressStep} />;
        
      case 6:
        return <SuccessMessage 
          projectPath={`${formData.directory}/${formData.projectName}`} 
          onClose={handleClose} 
        />;
        
      default:
        return <ProjectSetupForm 
          initialData={formData}
          onNext={(data) => {
            updateFormData(data);
            setCurrentStep(2);
          }} 
        />;
    }
  };
  
  // Create wrapper with consistent header
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white flex flex-col">
      {/* Only show back button if not on progress or success screens */}
      {currentStep < 5 && currentStep > 1 && (
        <div className="p-6">
          <button 
            onClick={handleBack}
            className="inline-flex items-center text-sm text-gray-400 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
        </div>
      )}
      
      
      
      {/* Step indicator with check signs */}
      {currentStep < 5 && (
        <div className="mx-auto mt-8 mb-4">
          <div className="flex items-center justify-center space-x-3">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step === currentStep 
                    ? "bg-pink-600" 
                    : step < currentStep 
                    ? "bg-green-500" 
                    : "bg-gray-700"
                }`}
              >
                {step < currentStep ? (
                  <Check className="w-4 h-4 text-white" />
                ) : step === currentStep ? (
                  <span className="text-xs text-white">{step}</span>
                ) : (
                  <span className="text-xs text-white">{step}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Render the current step */}
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;