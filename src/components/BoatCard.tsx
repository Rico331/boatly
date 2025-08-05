// src/components/BoatCard.tsx

import React from 'react'

export interface Boat {
  id: string
  title: string
  description?: string
  location?: string
  price_per_day?: number
  images?: string[]
}

export default function BoatCard({ boat }: { boat: Boat }) {
  return (
    <article className="border rounded-xl p-4 shadow hover:shadow-md transition">
      {boat.images?.[0] && (
        <img
          src={boat.images[0]}
          alt={boat.title}
          className="w-full h-40 object-cover rounded"
        />
      )}
      <h2 className="text-lg font-bold mt-3">{boat.title}</h2>
      {boat.location && (
        <p className="text-sm text-gray-500">{boat.location}</p>
      )}
      {boat.description && (
        <p className="mt-2 text-gray-700">
          {boat.description.length > 80
            ? boat.description.slice(0, 80) + '…'
            : boat.description}
        </p>
      )}
      {boat.price_per_day != null && (
        <p className="mt-3 font-semibold">
          {boat.price_per_day.toFixed(2)} € / Tag
        </p>
      )}
    </article>
  )
}
