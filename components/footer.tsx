'use client'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Documentation', 'API', 'Support', 'Community'],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative border-t px-4 sm:px-6 lg:px-8"
      style={{
        borderTopColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 sm:col-span-1 opacity-0 animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
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
              <span className="text-sm font-semibold" style={{ color: 'var(--color-fg)' }}>
                Nexus
              </span>
            </div>
            <p className="text-sm font-light" style={{ color: 'var(--color-muted)' }}>
              Build the future with elegance and precision.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <div
              key={category}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--color-fg)' }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light transition-all duration-200 hover:translate-x-1"
                      style={{ color: 'var(--color-muted)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 sm:pt-12"
          style={{
            borderTopColor: 'var(--color-border)',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm font-light" style={{ color: 'var(--color-muted)' }}>
              © {currentYear} Nexus. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm font-light transition-all duration-200 hover:-translate-y-0.5"
                  style={{ color: 'var(--color-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
