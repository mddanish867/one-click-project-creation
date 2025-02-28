const Hero = () => {
  return (
    <section className="py-24 bg-black text-white">
      
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Launch Your Next Project in <span className="text-green-400">One Click!</span>
        </h1>
        
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          No manual setup, just select, click, and code! Get your development environment ready in seconds.
        </p>
        
        <div className="mt-10">
          <button className="bg-green-500 text-black font-bold px-8 py-4 text-lg uppercase tracking-wider hover:bg-white hover:text-black transition duration-300">
            Get Started
          </button>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        </div>
        
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-green-400 text-4xl font-bold">10k+</div>
            <div className="text-sm uppercase tracking-wider mt-2">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-green-400 text-4xl font-bold">50+</div>
            <div className="text-sm uppercase tracking-wider mt-2">Project Templates</div>
          </div>
          <div className="text-center">
            <div className="text-green-400 text-4xl font-bold">99.9%</div>
            <div className="text-sm uppercase tracking-wider mt-2">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;