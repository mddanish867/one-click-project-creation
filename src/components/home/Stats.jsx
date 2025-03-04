import React from "react";

const stats = [
  { value: "5000+", label: "Projects Created" },
  { value: "2x", label: "Faster Development" },
  { value: "99%", label: "Setup Success Rate" },
];

const Stats = () => {
  return (
    <section className="relative py-24 bg-black text-white text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-12">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">Impact</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative p-6 border border-gray-800 rounded-lg shadow-xl transition-transform transform hover:scale-105">
              <h3 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-500">
                {stat.value}
              </h3>
              <p className="text-gray-300 mt-2 text-lg tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Stats;
