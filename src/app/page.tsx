// src/app/(public)/page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import FooterCTA from '@/components/landing/FooterCTA'

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <Features />
        <FooterCTA />
      </main>
    </>
  )
}
