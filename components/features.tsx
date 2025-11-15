'use client'

const featuresList = [
  {
    icon: '✨',
    title: 'Elegant Design',
    description: 'Stunning visual design that captivates users and elevates your brand presence.',
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized performance ensures your platform runs smoothly at scale.',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.99% uptime guarantee.',
  },
  {
    icon: '🚀',
    title: 'Built to Scale',
    description: 'Handle millions of requests without breaking a sweat.',
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6"
            style={{ color: 'var(--color-fg)' }}
          >
            Powerful Features
          </h2>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto font-light opacity-0 animate-fade-in-delay-1"
            style={{ color: 'var(--color-muted)' }}
          >
            Everything you need to build exceptional digital experiences at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in"
              style={{
                backgroundColor: 'var(--color-bg)',
                borderColor: 'var(--color-border)',
                animationDelay: `${index * 0.1 + 0.2}s`,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(194, 157, 118, 0.05), transparent)',
                }}
              />

              <div className="relative z-10 space-y-4">
                <div className="text-4xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold" style={{ color: 'var(--color-fg)' }}>
                  {feature.title}
                </h3>
                <p className="font-light leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {feature.description}
                </p>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2" style={{ color: 'var(--color-accent)' }}>
                  <span className="text-sm font-semibold">Learn more</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl -z-10"
        style={{
          background: 'rgba(194, 157, 118, 0.05)',
        }}
      />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl -z-10"
        style={{
          background: 'rgba(194, 157, 118, 0.1)',
        }}
      />
    </section>
  )
}
