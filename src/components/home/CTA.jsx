import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-500 to-purple-600 text-white text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extralight tracking-wider mb-6">
          Ready to Elevate Your Workflow?
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          No setup hassle—just start building instantly. Experience seamless
development with our all-in-one platform.
        </p>
        <button className="group relative px-12 py-4 overflow-hidden rounded-none bg-white text-gray-900 font-semibold transition-all duration-500 shadow-md hover:bg-gray-100">
          <div className="absolute inset-0 w-0 bg-gray-900 transition-all duration-500 ease-out group-hover:w-full"></div>
          <span className="relative flex items-center justify-center group-hover:text-white tracking-wider">
            Start Building
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </div>

      {/* Animated background effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-400/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-rose-400/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-400/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default CTA;