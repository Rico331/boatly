import { createServerSupabaseClient } from '@/lib/supabase'
import BoatCard from '@/components/BoatCard' // oder dein Card-Component

export default async function Home() {
  const supabase = createServerSupabaseClient()
  const { data: boats } = await supabase
    .from('boats')
    .select('*')
    .limit(12)

  return (
    <main className="container mx-auto py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {boats?.map((b) => (
        <BoatCard key={b.id} boat={b} />
      ))}
    </main>
  )
}
