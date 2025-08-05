// lib/supabase.ts

import {
  createBrowserClient,
  createServerClient,
  type CookieOptions
} from '@supabase/ssr'
import { cookies } from 'next/headers'

// 1) Browser-Client – nutze das in React-Components
export function createBrowserSupabaseClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// 2) Server-Client – nutze das in Server Components / Actions / API
export function createServerSupabaseClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Supabase möchte alle Cookies lesen
        getAll() {
          return cookieStore.getAll()
        },
        // …und neue Cookies setzen
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )
}
