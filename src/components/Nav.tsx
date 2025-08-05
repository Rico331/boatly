'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Nav() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between p-6">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          🛥 Boatly
        </Link>
        <div className="space-x-4">
          {/* Login */}
          <Link href="/login" passHref>
            <Button variant="secondary" asChild>
              <a>Login</a>
            </Button>
          </Link>
          {/* Sign Up */}
          <Link href="/signup" passHref>
            <Button asChild>
              <a>Sign Up</a>
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
