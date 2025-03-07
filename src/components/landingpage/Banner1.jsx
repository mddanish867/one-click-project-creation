

import { useState } from "react"
import {Link} from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function GeometricHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="relative z-10 bg-gradient-to-br from-violet-50 to-indigo-100 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            GeoDesign
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="#" className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium">
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white border-b">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Features
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
              <Link
                href="#"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium inline-block text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero 1 - Triangles */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-violet-50 to-indigo-100">
        <div className="absolute inset-0 z-0 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`triangle-${i}`}
              className="absolute border-purple-300"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderWidth: `${Math.random() * 5 + 1}px`,
                borderRadius: `${Math.random() * 30}%`,
              }}
            />
          ))}
        </div>
        <div className="container relative z-1 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Geometric Design</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Create beautiful interfaces with modern geometric patterns and shapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-black text-white font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-gray-400 bg-transparent text-black font-medium">Learn More</button>
          </div>
        </div>
      </section>

      {/* Hero 2 - Circles */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-sky-50 to-cyan-100">
        <div className="absolute inset-0 z-0 opacity-30">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`circle-${i}`}
              className="absolute rounded-full border-purple-200"
              style={{
                width: `${Math.random() * 200 + 20}px`,
                height: `${Math.random() * 200 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderWidth: `${Math.random() * 8 + 1}px`,
              }}
            />
          ))}
        </div>
        <div className="container relative z-1 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Circular Patterns</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Embrace the beauty of circular geometry in modern web design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-black text-white font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-gray-500 bg-transparent text-black font-medium">Learn More</button>
          </div>
        </div>
      </section>

 {/* Hero 1 - Gradient Mesh (Dark) */}
 <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4338ca" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
              </linearGradient>
              <pattern id="mesh" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="url(#grad1)" />
                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="url(#grad2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20 z-0"></div>
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
              Elegant Geometric Design
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Sophisticated interfaces with modern geometric patterns and elegant design elements
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-md border border-slate-700 text-white font-medium hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 2 - Isometric Grid */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-rose-50 to-indigo-50">
        <div className="absolute inset-0 z-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="isometric" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="rgba(79, 70, 229, 0.2)" />
                <path d="M28 0L28 34L0 50L0 16L28 0Z" fill="none" stroke="rgba(79, 70, 229, 0.2)" />
                <path d="M28 34L28 66L56 50L56 16L28 0" fill="none" stroke="rgba(79, 70, 229, 0.2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#isometric)" />
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Innovative Design
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Isometric <br />
                Perspectives
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Create depth and dimension with isometric geometric patterns for modern interfaces
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                  Get Started
                </button>
                <button className="px-6 py-3 rounded-md border border-input bg-background font-medium hover:bg-muted transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern
                      id="isometric-overlay"
                      width="56"
                      height="100"
                      patternUnits="userSpaceOnUse"
                      patternTransform="scale(2)"
                    >
                      <path
                        d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <path d="M28 0L28 34L0 50L0 16L28 0Z" fill="none" stroke="white" strokeWidth="0.5" />
                      <path d="M28 34L28 66L56 50L56 16L28 0" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#isometric-overlay)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 3 - Voronoi Pattern (Dark) */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-gray-900/90 z-0"></div>
        <div className="container relative z-10 mx-auto px-4 py-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              Organic Patterns
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Voronoi Tessellation</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Nature-inspired geometric patterns that create organic and elegant visual structures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors">
                Explore Patterns
              </button>
              <button className="px-6 py-3 rounded-md border border-gray-700 text-white font-medium hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 4 - Golden Ratio Spirals */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-amber-50">
        <div className="absolute inset-0 z-0 opacity-20">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`spiral-${i}`}
              className="absolute border border-amber-800/30 rounded-full"
              style={{
                width: `${(i + 1) * 150}px`,
                height: `${(i + 1) * 150}px`,
                left: `calc(50% - ${(i + 1) * 75}px)`,
                top: `calc(50% - ${(i + 1) * 75}px)`,
              }}
            />
          ))}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            width="600"
            height="600"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M300,300 Q450,150 550,300 Q450,450 300,300 Q150,450 50,300 Q150,150 300,300"
              stroke="rgba(146, 64, 14, 0.2)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M300,300 Q400,200 450,300 Q400,400 300,300 Q200,400 150,300 Q200,200 300,300"
              stroke="rgba(146, 64, 14, 0.2)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M300,300 Q350,250 375,300 Q350,350 300,300 Q250,350 225,300 Q250,250 300,300"
              stroke="rgba(146, 64, 14, 0.2)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
              Divine Proportions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Golden Ratio <br />
              Harmony
            </h1>
            <p className="text-lg text-amber-800/80 mb-8">
              Elegant geometric patterns based on the golden ratio, creating naturally balanced and harmonious designs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-md bg-amber-800 text-white font-medium hover:bg-amber-900 transition-colors">
                Discover More
              </button>
              <button className="px-6 py-3 rounded-md border border-amber-300 text-amber-800 font-medium hover:bg-amber-100 transition-colors">
                Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 5 - Crystalline Patterns (Dark) */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="crystal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
              </linearGradient>
              <pattern id="crystal" width="100" height="100" patternUnits="userSpaceOnUse">
                <polygon points="50,15 100,50 80,90 20,90 0,50" fill="none" stroke="url(#crystal-grad)" />
                <polygon points="50,15 80,90 20,90" fill="none" stroke="url(#crystal-grad)" />
                <line x1="50" y1="15" x2="50" y2="90" stroke="url(#crystal-grad)" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="url(#crystal-grad)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#crystal)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-blue-900/30 z-0"></div>
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                Crystalline Structures
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Faceted <br />
                Elegance
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Precision-cut geometric patterns inspired by crystal formations and gemstone facets
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Explore Designs
                </button>
                <button className="px-6 py-3 rounded-md border border-slate-700 text-white font-medium hover:bg-white/10 transition-colors">
                  Our Process
                </button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800"></div>
              <div className="absolute inset-0 opacity-30">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="crystal-overlay" width="50" height="50" patternUnits="userSpaceOnUse">
                      <polygon points="25,0 50,25 25,50 0,25" fill="none" stroke="white" strokeWidth="0.5" />
                      <line x1="25" y1="0" x2="25" y2="50" stroke="white" strokeWidth="0.5" />
                      <line x1="0" y1="25" x2="50" y2="25" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#crystal-overlay)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 6 - Topographic Map */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-stone-50">
        <div className="absolute inset-0 z-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo" width="200" height="200" patternUnits="userSpaceOnUse">
                {Array.from({ length: 8 }).map((_, i) => (
                  <path
                    key={`topo-${i}`}
                    d={`M0,${25 * i + 25} C50,${25 * i + 50} 150,${25 * i} 200,${25 * i + 25}`}
                    fill="none"
                    stroke="rgba(120, 53, 15, 0.3)"
                    strokeWidth="1"
                  />
                ))}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)" />
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="max-w-2xl ml-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-sm font-medium mb-6">
              Topographic Elegance
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6">
              Contour <br />
              Landscapes
            </h1>
            <p className="text-lg text-stone-700 mb-8">
              Elegant topographic patterns inspired by natural landscapes and elevation contours
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-md bg-stone-800 text-white font-medium hover:bg-stone-900 transition-colors">
                Explore Terrain
              </button>
              <button className="px-6 py-3 rounded-md border border-stone-300 text-stone-800 font-medium hover:bg-stone-200 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 7 - Mondrian Grid (Dark) */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100%" height="100%" fill="#1a1a1a" />
            <rect x="10%" y="10%" width="30%" height="40%" fill="#e11d48" fillOpacity="0.7" />
            <rect x="50%" y="10%" width="40%" height="20%" fill="#1d4ed8" fillOpacity="0.7" />
            <rect x="50%" y="40%" width="20%" height="50%" fill="#fbbf24" fillOpacity="0.7" />
            <rect x="80%" y="40%" width="10%" height="30%" fill="#16a34a" fillOpacity="0.7" />
            <rect x="10%" y="60%" width="30%" height="30%" fill="#1a1a1a" />
            <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" />
            <line x1="0" y1="10%" x2="100%" y2="10%" stroke="white" strokeWidth="2" />
            <line x1="0" y1="40%" x2="100%" y2="40%" stroke="white" strokeWidth="2" />
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="white" strokeWidth="2" />
            <line x1="0" y1="90%" x2="100%" y2="90%" stroke="white" strokeWidth="2" />
            <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" />
            <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" />
            <line x1="10%" y1="0" x2="10%" y2="100%" stroke="white" strokeWidth="2" />
            <line x1="40%" y1="0" x2="40%" y2="100%" stroke="white" strokeWidth="2" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="2" />
            <line x1="70%" y1="40%" x2="70%" y2="100%" stroke="white" strokeWidth="2" />
            <line x1="80%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="2" />
            <line x1="90%" y1="40%" x2="90%" y2="70%" stroke="white" strokeWidth="2" />
            <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              Modernist Design
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Mondrian <br />
              Composition
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Geometric elegance inspired by De Stijl movement and Piet Mondrian's iconic compositions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">
                Explore Designs
              </button>
              <button className="px-6 py-3 rounded-md border border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
                Our Process
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Hero 8 - Fibonacci Sequence */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="absolute inset-0 z-0 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="800" height="800" fill="none" />
            <rect x="0" y="0" width="500" height="500" fill="none" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1" />
            <rect x="0" y="500" width="300" height="300" fill="none" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1" />
            <rect x="500" y="0" width="300" height="300" fill="none" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1" />
            <rect
              x="500"
              y="300"
              width="200"
              height="200"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
            <rect
              x="300"
              y="500"
              width="200"
              height="200"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
            <rect
              x="700"
              y="300"
              width="100"
              height="100"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
            <rect
              x="700"
              y="400"
              width="100"
              height="100"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
            <rect
              x="500"
              y="500"
              width="100"
              height="100"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
            <rect
              x="600"
              y="500"
              width="100"
              height="100"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
            <rect
              x="500"
              y="600"
              width="100"
              height="100"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
            <rect
              x="600"
              y="600"
              width="100"
              height="100"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
            <rect
              x="700"
              y="500"
              width="100"
              height="100"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
            <rect
              x="700"
              y="600"
              width="100"
              height="100"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
            <path
              d="M0,0 Q500,0 800,500 Q800,800 500,800 Q0,800 0,0"
              fill="none"
              stroke="rgba(20, 184, 166, 0.3)"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
                Mathematical Beauty
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-teal-900 mb-6">
                Fibonacci <br />
                Sequence
              </h1>
              <p className="text-lg text-teal-700 mb-8">
                Elegant geometric patterns based on the Fibonacci sequence and golden spiral, creating naturally
                balanced designs
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors">
                  Explore Patterns
                </button>
                <button className="px-6 py-3 rounded-md border border-teal-200 text-teal-700 font-medium hover:bg-teal-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600"></div>
              <div className="absolute inset-0 opacity-30">
                <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M800,0 C800,440.8 440.8,800 0,800 L0,500 C274.4,500 500,274.4 500,0 L800,0 Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M500,0 C500,274.4 274.4,500 0,500 L0,300 C165.7,300 300,165.7 300,0 L500,0 Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M300,0 C300,165.7 165.7,300 0,300 L0,200 C110.5,200 200,110.5 200,0 L300,0 Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M200,0 C200,110.5 110.5,200 0,200 L0,100 C55.2,100 100,55.2 100,0 L200,0 Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <path d="M100,0 C100,55.2 55.2,100 0,100 L0,0 L100,0 Z" fill="white" fillOpacity="0.2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero 10 - Bauhaus Grid */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="bauhaus" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="50" height="50" fill="#f43f5e" />
                <rect x="50" y="0" width="50" height="50" fill="#ffffff" />
                <rect x="0" y="50" width="50" height="50" fill="#ffffff" />
                <rect x="50" y="50" width="50" height="50" fill="#0284c7" />
                <circle cx="25" cy="25" r="20" fill="#fbbf24" />
                <rect x="50" y="0" width="25" height="25" fill="#000000" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bauhaus)" opacity="0.1" />
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-black text-white text-sm font-medium mb-6">
                Bauhaus Inspired
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Geometric <br />
                Modernism
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Clean geometric patterns inspired by the Bauhaus movement, combining primary colors with bold shapes
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-md bg-black text-white font-medium hover:bg-gray-900 transition-colors">
                  Explore Designs
                </button>
                <button className="px-6 py-3 rounded-md border border-gray-300 text-gray-900 font-medium hover:bg-gray-100 transition-colors">
                  Our Process
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-red-500 rounded-lg"></div>
              <div className="aspect-square bg-blue-500 rounded-lg"></div>
              <div className="aspect-square bg-yellow-500 rounded-lg"></div>
              <div className="aspect-square bg-black rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero 3 - Grid */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-100">
        <div className="absolute inset-0 z-0 grid grid-cols-12 grid-rows-12 opacity-20">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={`grid-${i}`} className="border border-primary/30" />
          ))}
        </div>
        <div className="container relative z-1 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Grid Systems</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Structured layouts with geometric precision for modern applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-input bg-background font-medium">Learn More</button>
          </div>
        </div>
      </section>

      {/* Hero 4 - Hexagons */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-100">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon
                  points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        <div className="container relative z-1 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hexagonal Patterns</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Nature-inspired hexagonal structures for elegant interfaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-input bg-background font-medium">Learn More</button>
          </div>
        </div>
      </section>

      {/* Hero 5 - Waves */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute inset-0 z-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" width="100" height="20" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path
                  d="M0,10 C30,20 70,0 100,10 L100,0 L0,0 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>
        <div className="container relative z-1 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Wave Patterns</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Fluid wave geometries for dynamic and engaging user experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-input bg-background font-medium">Learn More</button>
          </div>
        </div>
      </section>

      {/* Hero 6 - Dots */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-rose-50 to-pink-100">
        <div className="absolute inset-0 z-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="container relative z-1 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Dot Patterns</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Minimalist dot geometries for clean and sophisticated designs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-input bg-background font-medium">Learn More</button>
          </div>
        </div>
      </section>

      {/* Hero 7 - Diagonal Lines */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 to-violet-100">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonals" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="scale(3)">
                <path
                  d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonals)" />
          </svg>
        </div>
        <div className="container relative z-1 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Diagonal Patterns</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Dynamic diagonal geometries for energetic and modern interfaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-input bg-background font-medium">Learn More</button>
          </div>
        </div>
      </section>

      {/* Hero 8 - Cubes */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cubes" width="80" height="80" patternUnits="userSpaceOnUse">
                <path
                  d="M0,0 l40,0 l0,40 l-40,0 Z M40,40 l40,0 l0,40 l-40,0 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
                <path
                  d="M40,0 l0,40 l40,-40 M0,40 l40,40 l0,-40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cubes)" />
          </svg>
        </div>
        <div className="container relative z-1 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cubic Patterns</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Three-dimensional cubic geometries for depth and visual interest
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-input bg-background font-medium">Learn More</button>
          </div>
        </div>
      </section>

      {/* Hero 9 - Zigzag */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="zigzag" width="40" height="20" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path
                  d="M0,10 l10,-10 l10,10 l10,-10 l10,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#zigzag)" />
          </svg>
        </div>
        <div className="container relative z-1 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Zigzag Patterns</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Energetic zigzag geometries for dynamic and playful interfaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-input bg-background font-medium">Learn More</button>
          </div>
        </div>
      </section>

      {/* Hero 10 - Concentric */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`concentric-${i}`}
              className="absolute rounded-full border border-gray-500"
              style={{
                width: `${(i + 1) * 10}%`,
                height: `${(i + 1) * 10}%`,
              }}
            />
          ))}
        </div>
        <div className="container relative z-1 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Concentric Patterns</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Harmonious concentric geometries for balanced and focused designs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium">Get Started</button>
            <button className="px-6 py-3 rounded-md border border-input bg-background font-medium">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  )
}

