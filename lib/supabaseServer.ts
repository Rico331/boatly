// lib/supabaseServer.ts

import {
  createServerClient as createSupabaseClient,
  type CookieOptions
} from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createSupabaseServerClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookies()
            .getAll()
            .map(({ name, value }) => ({ name, value }))
        },
        setAll(cookiesToSet: { name: string; value: string; options?: CookieOptions }[]) {
          const store = cookies()
          cookiesToSet.forEach(({ name, value, options }) => {
            store.set({ name, value, ...options })
          })
        },
      },
    }
  )
}
