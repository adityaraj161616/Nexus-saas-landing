'use client'

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 border animate-fade-in"
          style={{
            background: 'linear-gradient(to bottom right, rgba(194, 157, 118, 0.2), rgba(194, 157, 118, 0.05))',
            borderColor: 'var(--color-border)',
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -z-10"
            style={{
              background: 'rgba(194, 157, 118, 0.1)',
            }}
          />

          <div className="relative z-10 text-center space-y-6">
            <h2
              className="text-4xl sm:text-5xl font-serif font-bold opacity-0 animate-fade-in-delay-1"
              style={{ color: 'var(--color-fg)' }}
            >
              Ready to Build Something Amazing?
            </h2>

            <p
              className="text-lg font-light max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2"
              style={{ color: 'var(--color-muted)' }}
            >
              Join thousands of teams using Nexus to create exceptional digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-in-delay-3">
              <button
                className="btn-primary hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                Start Free Trial
              </button>
              <button
                className="px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: 'rgba(45, 41, 38, 0.1)',
                  color: 'var(--color-fg)',
                }}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
