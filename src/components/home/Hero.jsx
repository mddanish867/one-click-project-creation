import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-48 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl mb-8 leading-none font-extralight tracking-wider">
            Launch Your Next <br /> Project in <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">One Click!</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            No manual setup, just select, click, and code! Get your development environment ready in seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="group relative px-12 py-4 overflow-hidden rounded-none bg-gradient-to-r from-rose-400 to-purple-500 transition-all duration-500">
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-500 to-rose-400 transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative flex items-center justify-center tracking-wider">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="px-12 py-4 rounded-none border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-colors duration-500 tracking-wider">
              Watch Experience
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default HeroSection;