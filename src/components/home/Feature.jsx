const features = [
  { title: "One-click Setup", icon: "⚡" },
  { title: "Fast Project Creation", icon: "🚀" },
  { title: "Supports React & Next.js", icon: "🛠" },
  { title: "Auto-installs Tailwind & ShadCN", icon: "🎨" },
];

const Features = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase tracking-wider">
          Key <span className="text-green-400">Features</span>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-800 hover:border-green-500 transition-all duration-300 group"
            >
              <div className="text-5xl text-green-400 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold uppercase tracking-wider">
                {feature.title}
              </h3>
              <div className="mt-4 h-1 w-12 bg-green-500 mx-auto group-hover:w-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;