'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-24">
      <div className="container mx-auto px-6 text-center space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Finde dein Traumboot, <br/> wo immer du willst
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Buche noch heute auf Boatly – die einfachste Art, Boote weltweit zu entdecken und zu mieten.
        </p>
        <div className="space-x-4">
          <Button size="lg" variant="secondary" as="a" href="/signup">
            Jetzt kostenlos registrieren
          </Button>
          <Button size="lg" as="a" href="#features">
            Mehr erfahren
          </Button>
        </div>
      </div>
    </section>
  )
}
