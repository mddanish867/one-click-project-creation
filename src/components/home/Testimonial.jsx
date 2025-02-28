const testimonials = [
    { name: "Dev A", review: "This tool saved me hours!", rating: "⭐⭐⭐⭐⭐" },
    { name: "Dev B", review: "Setup in seconds, love it!", rating: "⭐⭐⭐⭐⭐" }
  ];
  
  const Testimonials = () => {
    return (
      <section className="py-12 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold">What Developers Say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testi, index) => (
            <div key={index} className="p-4 bg-gray-900 rounded-md">
              <p>{testi.review}</p>
              <span className="block mt-2 text-yellow-400">{testi.rating}</span>
              <p className="mt-2 text-sm">- {testi.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  