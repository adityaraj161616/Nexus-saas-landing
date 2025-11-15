'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Suspense fallback={<div />}>
        <Features />
      </Suspense>
      <Suspense fallback={<div />}>
        <CTASection />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
