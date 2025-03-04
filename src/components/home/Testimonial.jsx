const testimonials = [
  { name: "Dev A", review: "This tool saved me hours!", rating: "⭐⭐⭐⭐⭐" },
  { name: "Dev B", review: "Setup in seconds, love it!", rating: "⭐⭐⭐⭐⭐" }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-black text-white text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-12">
          What <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">Developers Say</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testi, index) => (
            <div key={index} className="relative p-6 border border-gray-800 rounded-lg shadow-xl transition-transform transform hover:scale-105">
              <p className="text-lg text-gray-300">“{testi.review}”</p>
              <span className="block mt-4 text-xl text-yellow-400">{testi.rating}</span>
              <p className="mt-2 text-sm text-gray-400">- {testi.name}</p>
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

export default Testimonials;