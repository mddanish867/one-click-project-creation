// src/components/FeaturesSection.js
import { useState, useEffect } from 'react';
import { Sparkles, Shield, Crown, Diamond } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const FeaturesSection = () => {
  const theme = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);

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

  // Auto-rotate active feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="features" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className={`text-center text-4xl mb-6 ${theme.typography.heading}`}>
          The ScaffoldX Difference
        </h2>
        <p className={`text-center ${theme.colors.text.secondary} max-w-2xl mx-auto ${theme.typography.body} mb-12`}>
          Explore the features that set us apart, delivering an exclusive experience for discerning clients.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-lg shadow-lg bg-gradient-to-br ${feature.gradient} transition-transform transform ${activeFeature === idx ? "scale-105" : "scale-100"}`}
            >
              <feature.icon className="w-10 h-10 text-white mb-4" />
              <h3 className={`text-2xl mb-4 ${theme.typography.heading}`}>{feature.title}</h3>
              <p className={`${theme.colors.text.secondary} ${theme.typography.body}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;