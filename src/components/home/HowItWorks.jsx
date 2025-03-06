const steps = [
    "Select Directory",
    "Choose Tech Stack",
    "Click Create",
    "Start Coding!"
  ];
  
  const HowItWorks = () => {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center tracking-wider font-extralight">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">Works</span>
          </h2>
          
          <div className="mt-16 max-w-3xl mx-auto relative">
            {/* Single continuous vertical line */}
            <div 
              className="absolute top-6 left-6 w-0.5 bg-gradient-to-b from-rose-400 to-purple-500 -z-10" 
              style={{ height: 'calc(100% - 60px)' }}
            ></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-16 last:mb-0">
                {/* Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 border-2 border-rose-400 rounded-full flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500 font-bold z-10">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="ml-6">
                  <h3 className="text-xl font-bold tracking-wider text-white">
                    {step}
                  </h3>
                  <p className="mt-2 text-gray-300">
                    {index === 0 && "Browse and select where you want your new project to be created."}
                    {index === 1 && "Choose from React, Next.js, or other popular frameworks and libraries."}
                    {index === 2 && "Hit the create button and watch as everything gets set up automatically."}
                    {index === 3 && "Your development environment is ready! Jump straight into coding."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;