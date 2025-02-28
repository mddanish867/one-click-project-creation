const stats = [
  { value: "5000+", label: "Projects Created" },
  { value: "2x", label: "Faster Development" },
  { value: "99%", label: "Setup Success Rate" }
];

const Stats = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase tracking-wider">
          Our <span className="text-green-400">Impact</span>
        </h2>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="relative p-8 group">
              {/* Background border effect */}
              <div className="absolute inset-0 border border-gray-800 group-hover:border-green-500 transition-colors duration-300"></div>
              
              {/* Stat value */}
              <div className="text-5xl md:text-6xl font-bold text-green-400">
                {stat.value}
              </div>
              
              {/* Stat label */}
              <p className="mt-4 text-lg uppercase tracking-wider">
                {stat.label}
              </p>
              
              {/* Decorative element */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-green-500 group-hover:w-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;