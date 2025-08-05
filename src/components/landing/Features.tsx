import { Check } from 'lucide-react'

const items = [
  {
    title: 'Einfache Suche',
    desc: 'Filter nach Standort, Preis & Ausstattung – finde dein Boot in Sekunden.',
  },
  {
    title: 'Sichere Buchung',
    desc: 'SSL-verschlüsselte Zahlungen & geprüfte Boots-Anbieter.',
  },
  {
    title: 'Rund-um-die-Uhr Support',
    desc: 'Unser Support-Team hilft dir jederzeit bei Fragen oder Problemen.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 space-y-12 text-center">
        <h2 className="text-3xl font-bold">Warum Boatly?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="p-6 bg-white rounded-lg shadow">
              <Check className="mx-auto mb-4 h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
