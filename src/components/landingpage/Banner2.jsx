
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function ElegantGeometricHeroes() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Check system preference on mount
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Geo<span className="text-primary">Elegance</span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link
              href="#"
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-background border-b">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
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

     

      

      {/* Hero 9 - Penrose Tiling (Dark) */}
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
            <div className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm font-medium mb-6">
              Non-Periodic Tiling
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Penrose Patterns
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Elegant aperiodic tiling patterns with five-fold rotational symmetry, creating infinite non-repeating
              designs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-md bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors">
                Explore Patterns
              </button>
              <button className="px-6 py-3 rounded-md border border-gray-700 text-white font-medium hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

