"use client"

import { useState } from "react"
import {Link} from "react-router-dom"
import { Menu, X, Bell, Search, User, Settings, ChevronDown } from "lucide-react"

export default function SaasDarkHeroes() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentHero, setCurrentHero] = useState(1)

  // Common navbar for all heroes
  const Navbar = () => (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-white">
              Saas<span className="text-primary">Geo</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Solutions <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                      Enterprise
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                      Startups
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                      Teams
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Documentation
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <Search size={18} />
              </button>
              <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <Bell size={18} />
              </button>
              <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <Settings size={18} />
              </button>
              <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <User size={18} />
              </button>
            </div>

            <div className="hidden md:block">
              <Link
                href="#"
                className="px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-800 mt-3">
            <div className="flex flex-col space-y-3">
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Solutions
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Documentation
              </Link>
              <div className="pt-4 flex items-center justify-between border-t border-gray-800">
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                    <Search size={18} />
                  </button>
                  <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                    <Bell size={18} />
                  </button>
                  <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                    <User size={18} />
                  </button>
                </div>
                <Link
                  href="#"
                  className="px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )

  // Hero selector
  const HeroSelector = () => (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-800/80 backdrop-blur-md rounded-full px-4 py-2 flex gap-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <button
          key={`selector-${i}`}
          className={`w-3 h-3 rounded-full transition-colors ${currentHero === i + 1 ? "bg-primary" : "bg-gray-600 hover:bg-gray-500"}`}
          onClick={() => setCurrentHero(i + 1)}
          aria-label={`View hero ${i + 1}`}
        />
      ))}
    </div>
  )

  // Render the current hero
  const renderHero = () => {
    switch (currentHero) {
      case 1:
        return <HeroOne />
      case 2:
        return <HeroTwo />
      case 3:
        return <HeroThree />
      case 4:
        return <HeroFour />
      case 5:
        return <HeroFive />
      case 6:
        return <HeroSix />
      case 7:
        return <HeroSeven />
      case 8:
        return <HeroEight />
      case 9:
        return <HeroNine />
      case 10:
        return <HeroTen />
      default:
        return <HeroOne />
    }
  }

  // Hero 1: Neural Network
  const HeroOne = () => (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`node-${i}`}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute bg-blue-500/10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: "1px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/90 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            AI-Powered Analytics
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Harness the power of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              neural networks
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Our advanced machine learning algorithms analyze your data in real-time, providing actionable insights and
            predictive analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-3 rounded-md border border-blue-700 bg-blue-600/20 text-white font-medium hover:bg-white/5 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )

  // Hero 2: Circuit Board
  const HeroTwo = () => (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0,50 L30,50 L30,30 L70,30 L70,70 L30,70 L30,50"
                stroke="rgba(16, 185, 129, 0.2)"
                strokeWidth="2"
                fill="none"
              />
              <path d="M70,0 L70,30" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" fill="none" />
              <path d="M70,70 L70,100" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" fill="none" />
              <circle cx="70" cy="30" r="4" fill="rgba(16, 185, 129, 0.3)" />
              <circle cx="70" cy="70" r="4" fill="rgba(16, 185, 129, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-gray-900/95 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              Seamless Integration
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Connect your <span className="text-emerald-400">entire stack</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Our platform integrates with your existing tools and workflows, providing a unified dashboard for all your
              data needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-md border border-emerald-700 bg-emerald-600/20 text-white font-medium hover:bg-white/5 transition-colors">
                View Integrations
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
            <div className="absolute inset-0 opacity-30">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="circuit-overlay" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path
                      d="M0,25 L15,25 L15,15 L35,15 L35,35 L15,35 L15,25"
                      stroke="rgba(16, 185, 129, 0.4)"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path d="M35,0 L35,15" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1" fill="none" />
                    <path d="M35,35 L35,50" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1" fill="none" />
                    <circle cx="35" cy="15" r="2" fill="rgba(16, 185, 129, 0.5)" />
                    <circle cx="35" cy="35" r="2" fill="rgba(16, 185, 129, 0.5)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-overlay)" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500/40 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Hero 3: Data Flow
  const HeroThree = () => (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`flow-${i}`}
            className="absolute bg-gradient-to-r from-purple-500/10 to-purple-500/0 animate-[flowRight_15s_linear_infinite]"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: "2px",
              left: "0",
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/90 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            Real-time Data Processing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transform your <span className="text-purple-400">data flow</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Process millions of events in real-time with our scalable architecture. Monitor, analyze, and act on your
            data instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors">
              Start Processing
            </button>
            <button className="px-6 py-3 rounded-md border border-purple-700/60 bg-purple-600/20 text-white font-medium hover:bg-white/5 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  )

  // Hero 4: Hexagonal Grid
  const HeroFour = () => (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagrid" width="56" height="100" patternUnits="userSpaceOnUse">
              <path d="M28 0L56 16V48L28 64L0 48V16L28 0Z" stroke="rgba(249, 115, 22, 0.4)" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagrid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/80 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              Modular Architecture
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Build with <span className="text-orange-400">flexible modules</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Our hexagonal architecture allows you to plug and play components, creating a custom solution tailored to
              your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-md bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors">
                Explore Modules
              </button>
              <button className="px-6 py-3 rounded-md border border-gray-700 text-white font-medium hover:bg-white/5 transition-colors">
                How It Works
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`hex-${i}`}
                className="aspect-square bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-xl border border-orange-500/20 flex items-center justify-center"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-md bg-orange-500/30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

  // Hero 5: Particle Wave
  const HeroFive = () => (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,500 Q250,400 500,500 Q750,600 1000,500 L1000,1000 L0,1000 Z" fill="url(#wave-grad)" />
          <path
            d="M0,600 Q250,500 500,600 Q750,700 1000,600 L1000,1000 L0,1000 Z"
            fill="url(#wave-grad)"
            opacity="0.7"
          />
          <path
            d="M0,700 Q250,600 500,700 Q750,800 1000,700 L1000,1000 L0,1000 Z"
            fill="url(#wave-grad)"
            opacity="0.5"
          />
          <path
            d="M0,800 Q250,700 500,800 Q750,900 1000,800 L1000,1000 L0,1000 Z"
            fill="url(#wave-grad)"
            opacity="0.3"
          />
        </svg>
      </div>
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-pink-500/30"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/90 to-transparent z-0"></div>
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm font-medium mb-6">
            Engagement Analytics
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Visualize user <span className="text-pink-400">engagement waves</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Track user behavior patterns and engagement metrics with our intuitive visualization tools and actionable
            insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-md bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors">
              Analyze Your Users
            </button>
            <button className="px-6 py-3 rounded-md border border-pink-700/60 bg-pink-700/20 text-white font-medium hover:bg-white/5 transition-colors">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )

  // Hero 6: Gradient Mesh
  const HeroSix = () => (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <pattern id="mesh" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="url(#grad1)" />
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="url(#grad2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-sky-400/20 to-indigo-400/20 text-sky-400 text-sm font-medium mb-6">
            Cloud Infrastructure
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
              Seamless scaling
            </span>{" "}
            for your applications
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Our cloud infrastructure automatically scales with your needs, ensuring optimal performance during traffic
            spikes and quiet periods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium hover:from-sky-700 hover:to-indigo-700 transition-colors">
              Deploy Now
            </button>
            <button className="px-6 py-3 rounded-md border border-gray-700 text-white font-medium hover:bg-white/5 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )

  // Hero 7: Cybersecurity Grid
  const HeroSeven = () => (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="securitygrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="none" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" />
              <circle cx="25" cy="25" r="8" fill="none" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1" />
              <circle cx="25" cy="25" r="3" fill="rgba(34, 197, 94, 0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#securitygrid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-slate-950/80 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6">
              Enterprise Security
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Protect your <span className="text-green-400">digital assets</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Our advanced security platform provides real-time threat detection, vulnerability scanning, and
              comprehensive protection for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition-colors">
                Secure Your Data
              </button>
              <button className="px-6 py-3 rounded-md border border-green-600/30 bg-green-600/20 text-white font-medium hover:bg-white/5 transition-colors">
                Security Features
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-green-900/30">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-green-500/30 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-green-500/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Hero 8: Data Dashboard
  const HeroEight = () => (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="rgba(99, 102, 241, 0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/80 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              Business Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Your data, <span className="text-indigo-400">visualized</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Transform complex data into clear, actionable insights with our customizable dashboards and reporting
              tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
                Create Dashboard
              </button>
              <button className="px-6 py-3 rounded-md border border-gray-700 text-white font-medium hover:bg-white/5 transition-colors">
                View Templates
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="h-2 w-16 bg-indigo-500/30 rounded-full mb-2"></div>
                <div className="h-24 bg-gradient-to-t from-indigo-500/20 to-indigo-500/5 rounded-md"></div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="h-2 w-20 bg-purple-500/30 rounded-full mb-2"></div>
                <div className="h-24 bg-gradient-to-t from-purple-500/20 to-purple-500/5 rounded-md"></div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="h-2 w-12 bg-blue-500/30 rounded-full mb-2"></div>
                <div className="h-24 bg-gradient-to-t from-blue-500/20 to-blue-500/5 rounded-md"></div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="h-2 w-24 bg-sky-500/30 rounded-full mb-2"></div>
                <div className="h-24 bg-gradient-to-t from-sky-500/20 to-sky-500/5 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Hero 9: 3D Cube Grid
  const HeroNine = () => (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cubes" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M0,0 l40,0 l0,40 l-40,0 Z M40,40 l40,0 l0,40 l-40,0 Z"
                fill="none"
                stroke="rgba(236, 72, 153, 0.3)"
              />
              <path d="M40,0 l0,40 l40,-40 M0,40 l40,40 l0,-40" fill="none" stroke="rgba(236, 72, 153, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cubes)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-gray-950/90 to-gray-950/80 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm font-medium mb-6">
            3D Data Modeling
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Explore data in <span className="text-pink-400">three dimensions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Our 3D visualization tools help you discover hidden patterns and relationships in complex datasets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors">
              Try 3D Modeling
            </button>
            <button className="px-6 py-3 rounded-md border border-pink-600/30 bg-pink-600/20 text-white font-medium hover:bg-white/5 transition-colors">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  )

  // Hero 10: Blockchain Network
  const HeroTen = () => (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`block-${i}`}
            className="absolute rounded-lg border border-amber-500/20 bg-amber-500/5"
            style={{
              width: "80px",
              height: "40px",
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`chain-${i}`}
            className="absolute bg-amber-500/20"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: "2px",
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6">
              Blockchain Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Secure, <span className="text-amber-400">immutable</span> data storage
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Our blockchain infrastructure provides transparent, tamper-proof record keeping for your most critical
              business data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-md bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors">
                Start Building
              </button>
              <button className="px-6 py-3 rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-600 font-medium hover:bg-amber-500/20 transition-colors">
                Explore Use Cases
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-amber-900/30">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`block-anim-${i}`}
                    className="absolute w-16 h-16 rounded-lg border border-amber-500/30 bg-500/10 flex items-center justify-center"
                    style={{
                      top: `${Math.sin(i * (Math.PI / 3)) * 80 + 80}px`,
                      left: `${Math.cos(i * (Math.PI / 3)) * 80 + 80}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-8 h-8 rounded-md bg-amber-500/20"></div>
                  </div>
                ))}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-amber-500/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-amber-500/40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      {renderHero()}
      <HeroSelector />
    </div>
  )
}

