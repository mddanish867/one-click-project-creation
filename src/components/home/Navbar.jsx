import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Shield, Crown, Diamond } from 'lucide-react';

const Temp52 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Exceptional Analytics",
      description: "Discover insights with unparalleled precision and elegance",
      icon: Sparkles,
      gradient: "from-rose-400 to-purple-500"
    },
    {
      title: "Elite Security",
      description: "Protection crafted for the most discerning clients",
      icon: Shield,
      gradient: "from-amber-400 to-rose-500"
    },
    {
      title: "Premium Experience",
      description: "Curated interfaces designed for excellence",
      icon: Crown,
      gradient: "from-purple-400 to-blue-500"
    },
    {
      title: "Bespoke Solutions",
      description: "Tailored perfection for your unique needs",
      icon: Diamond,
      gradient: "from-blue-400 to-emerald-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Luxe Essential",
      price: "$199",
      features: ["Premium Analytics", "Dedicated Support", "Custom Dashboard", "Priority Access"],
      gradient: "from-rose-100 to-teal-100",
      popular: false
    },
    {
      name: "Luxe Prestige",
      price: "$499",
      features: ["Advanced Intelligence", "24/7 Concierge", "Bespoke Solutions", "VIP Benefits"],
      gradient: "from-purple-100 to-rose-100",
      popular: true
    },
    {
      name: "Luxe Elite",
      price: "Custom",
      features: ["White-glove Service", "Personal Account Director", "Custom Development", "Enterprise Scale"],
      gradient: "from-amber-100 to-violet-100",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div
  className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"
></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/80 backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-extralight tracking-[0.2em] text-white">
                ScaffoldX<span className="text-rose-400 text-5xl">.</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#features" className="text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-500">Experience</a>
              <a href="#pricing" className="text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-500">Investment</a>
              <a href="#contact" className="text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-500">Connect</a>
              <button className="group relative px-8 py-3 overflow-hidden rounded-none bg-gradient-to-r from-rose-400 to-purple-500 transition-all duration-500">
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-500 to-rose-400 transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative text-sm tracking-wider">Begin Journey</span>
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-gray-900/95 backdrop-blur-xl">
            <div className="px-6 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-4 text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-300">Experience</a>
              <a href="#pricing" className="block px-3 py-4 text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-300">Investment</a>
              <a href="#contact" className="block px-3 py-4 text-gray-300 hover:text-white tracking-wider text-sm transition-colors duration-300">Connect</a>
              <div className="px-3 py-4">
                <button className="w-full bg-gradient-to-r from-rose-400 to-purple-500 text-white px-8 py-3 rounded-none text-sm tracking-wider">
                  Begin Journey
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight leading-none">
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">Vision</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              Experience digital excellence reimagined for the modern connoisseur.
              Where luxury meets innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="group relative px-12 py-4 overflow-hidden rounded-none bg-gradient-to-r from-rose-400 to-purple-500 transition-all duration-500">
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-500 to-rose-400 transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative flex items-center justify-center tracking-wider">
                  Begin Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="px-12 py-4 rounded-none border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-all duration-500 tracking-wider">
                Watch Experience
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-500/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-4xl font-extralight mb-6 tracking-tight">The Opulent Difference</h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto font-light tracking-wide mb-12">
            Explore the features that set us apart, delivering an exclusive experience for discerning clients.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-lg shadow-lg bg-gradient-to-br ${feature.gradient} transition-transform transform ${
                  activeFeature === idx ? "scale-105" : "scale-100"
                }`}
              >
                <feature.icon className="w-10 h-10 text-white mb-4" />
                <h3 className="text-2xl font-extralight mb-4">{feature.title}</h3>
                <p className="text-gray-300 font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-4xl font-extralight mb-6 tracking-tight">Our Investment Plans</h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto font-light tracking-wide mb-12">
            Choose the plan that best aligns with your luxury aspirations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-lg shadow-lg bg-gradient-to-br ${plan.gradient} relative ${
                  plan.popular ? "border-4 border-rose-500" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 mt-4 mr-4 bg-rose-400 text-white py-1 px-4 rounded-full text-xs font-semibold">
                    Most Exclusive
                  </span>
                )}
                <h3 className="text-2xl font-extralight mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold mb-8">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-sm">/mo</span>}
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 tracking-wide">
                      <span className="w-4 h-4 mr-3 text-rose-400">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-8 py-3 rounded-full text-white bg-gradient-to-r from-rose-400 to-purple-500 transition-all duration-500 hover:from-purple-500 hover:to-rose-400">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extralight mb-6 tracking-tight">
            Connect With Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-light tracking-wide mb-12">
            Ready to elevate your experience? Contact us today and let’s start crafting your journey.
          </p>
          <button className="group relative px-12 py-4 overflow-hidden rounded-full bg-gradient-to-r from-rose-400 to-purple-500 transition-all duration-500">
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-500 to-rose-400 transition-all duration-500 ease-out group-hover:w-full"></div>
            <span className="relative text-white tracking-wider">Get In Touch</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-gray-900">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Opulent. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Temp52;
