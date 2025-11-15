'use client'

import { useState, useEffect } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-down ${
        isScrolled ? 'backdrop-blur-md shadow-sm' : ''
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 250, 248, 0.8)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom right, var(--color-accent), rgba(194, 157, 118, 0.6))',
              }}
            >
              <span className="font-bold text-lg" style={{ color: 'var(--color-bg)' }}>
                N
              </span>
            </div>
            <span className="text-sm font-semibold hidden sm:inline" style={{ color: 'var(--color-fg)' }}>
              Nexus
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
                style={{ 
                  color: 'var(--color-fg)', 
                  opacity: 0.7,
                  animation: `fadeIn 0.5s ease-out forwards ${index * 0.1 + 0.1}s`,
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="btn-primary"
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 0.3s',
              opacity: 0,
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
