import React, { useState, useEffect } from "react";
import {
  BarChart2,
  Shield,
  Globe,
  Zap,
  ChevronRight,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import HowItWorks from "./HowItWorks";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRequestDemo = () => {
    navigate("/request-demo")
  }

  const handleLearnMore = () => {
    navigate("/learn-more")
  }
  const features = [
    {
      title: "Executive Dashboard",
      description:
        "Sophisticated analytics and insights for strategic decision-making",
      icon: <BarChart2 className="w-6 h-6 text-pink-600" />,
    },
    {
      title: "Global Collaboration",
      description: "Seamless coordination across teams and time zones",
      icon: <Globe className="w-6 h-6 text-pink-600" />,
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered workflow optimization and resource allocation",
      icon: <Zap className="w-6 h-6 text-pink-600" />,
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance measures",
      icon: <Shield className="w-6 h-6 text-pink-600" />,
    },
  ];

  const metrics = [
    { label: "Enterprise Clients", value: "500+" },
    { label: "Tasks Completed", value: "1M+" },
    { label: "Team Members", value: "50k+" },
    { label: "Countries", value: "120+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="penrose"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(3) rotate(15)"
              >
                <path d="M0,0 L100,0 L50,87 Z" fill="none" stroke="rgba(244, 114, 182, 0.5)" strokeWidth="0.5" />
                <path d="M0,0 L50,87 L0,174 Z" fill="none" stroke="rgba(244, 114, 182, 0.5)" strokeWidth="0.5" />
                <path d="M100,0 L150,87 L50,87 Z" fill="none" stroke="rgba(244, 114, 182, 0.5)" strokeWidth="0.5" />
                <path d="M0,174 L50,87 L100,174 Z" fill="none" stroke="rgba(244, 114, 182, 0.5)" strokeWidth="0.5" />
                <path d="M50,87 L150,87 L100,174 Z" fill="none" stroke="rgba(244, 114, 182, 0.5)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#penrose)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-pink-900/30 z-0"></div>
        <div className="container relative z-10 mx-auto px-4 py-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 mt-24 rounded-full bg-pink-500/20 text-pink-400 text-sm font-medium mb-6">
              Non-Periodic Tiling
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Launch Your Next
            Project in <span className="block mt-2 font-light text-pink-600">
              One Click!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            No manual setup, just select, click, and code! Get your development environment ready in seconds.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-none bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors">
                Explore Patterns
              </button>
              <button className="px-6 py-3 rounded-none border border-gray-700 text-white font-medium hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="py-24 relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-thin tracking-wider mb-4">
              REFINED CAPABILITIES
            </h2>
            <div className="w-20 h-px bg-pink-600 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div
                  className={`p-8 border border-gray-800 hover:border-pink-600/50 transition-all duration-500 relative ${
                    activeFeature === index ? "bg-black/50" : "bg-transparent"
                  }`}
                >
                  <div className="flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-light tracking-wider mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<HowItWorks/>
      {/* Metrics Section */}
      <div className="py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-light text-pink-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm tracking-wider text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-12 h-12 text-pink-600 mx-auto mb-8" />
            <p className="text-2xl font-light italic leading-relaxed mb-8">
              "ScaffoldX has revolutionized how we manage global projects. The level
              of sophistication and attention to detail is unmatched in the
              industry."
            </p>
            <div className="text-sm tracking-wider text-pink-600 mb-2">
              ALEXANDRA CHEN
            </div>
            <div className="text-sm tracking-wider text-gray-400">
              CHIEF TECHNOLOGY OFFICER, FORTUNE 500
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-thin tracking-wider mb-8">
              EXPERIENCE EXCELLENCE
            </h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Join the elite circle of organizations transforming their project
              management capabilities.
            </p>
            <button className="px-12 py-4 bg-pink-600 text-black text-sm tracking-wider hover:bg-pink-400 transition-colors duration-300 flex items-center justify-center mx-auto group">
              BEGIN YOUR JOURNEY
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default LandingPage;
