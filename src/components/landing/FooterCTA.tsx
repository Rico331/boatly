// src/components/landing/FooterCTA.tsx
'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function FooterCTA() {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 text-center space-y-6">
        <h2 className="text-2xl font-bold">Bereit für dein erstes Bootserlebnis?</h2>
        <Link href="/signup" passHref>
          <Button size="lg" variant="default">
            Jetzt starten
          </Button>
        </Link>
      </div>
      <footer className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Boatly. Alle Rechte vorbehalten.
      </footer>
    </section>
  )
}
