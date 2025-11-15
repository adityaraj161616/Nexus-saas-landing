'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsapModule = await import('gsap')
        const gsap = gsapModule.default
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)

        if (imageRef.current) {
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: imageRef.current,
                start: 'top center+=100px',
                toggleActions: 'play none none none',
              },
            }
          )
        }

        return () => {
          ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
        }
      } catch (error) {
        console.log('[v0] Using CSS animation fallback for hero image')
      }
    }

    loadGSAP()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text with fade-in animations */}
          <div className="space-y-8">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight opacity-0 animate-fade-in-delay-1"
              style={{ color: 'var(--color-fg)' }}
            >
              <span
                style={{
                  background: `linear-gradient(to right, var(--color-fg), rgba(45, 41, 38, 0.7))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Build the Future
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl font-light leading-relaxed max-w-lg opacity-0 animate-fade-in-delay-2"
              style={{ color: 'var(--color-muted)' }}
            >
              Create stunning digital experiences with elegance and precision. Our platform empowers teams to innovate faster and ship better products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
              <button className="btn-primary">Get Started Free</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>

            <div
              className="flex items-center space-x-4 pt-8 opacity-0 animate-fade-in-delay-4"
              style={{
                borderTopColor: 'var(--color-border)',
                borderTopWidth: '1px',
                borderTopStyle: 'solid',
                opacity: 0.4,
              }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-semibold"
                    style={{
                      background: `linear-gradient(to bottom right, rgba(194, 157, 118, 0.8), rgba(194, 157, 118, 0.4))`,
                      borderColor: 'var(--color-bg)',
                      color: 'var(--color-muted)',
                    }}
                  >
                    {i}K
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--color-muted)' }}>
                Trusted by 10K+ teams worldwide
              </p>
            </div>
          </div>

          {/* Right Column - Image with slide animation */}
          <div ref={imageRef} className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl opacity-0 animate-slide-in">
            <div
              className="absolute inset-0 z-10"
              style={{
                background: 'linear-gradient(to bottom right, rgba(194, 157, 118, 0.2), rgba(194, 157, 118, 0.05))',
              }}
            />
            <Image
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80"
              alt="Modern SaaS dashboard"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none z-20"
              style={{
                border: '1px solid var(--color-border)',
                opacity: 0.4,
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl -z-10"
        style={{
          background: 'rgba(194, 157, 118, 0.1)',
        }}
      />
      <div
        className="absolute bottom-0 right-20 w-96 h-96 rounded-full blur-3xl -z-10"
        style={{
          background: 'rgba(194, 157, 118, 0.05)',
        }}
      />
    </section>
  )
}
