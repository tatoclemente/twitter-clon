import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
const cookieStore = cookies()

// Create a single supabase client for interacting with your databas
export const supabase = createServerClient(

    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
        cookies: {
        get(name: string) {
            return cookieStore.get(name)?.value
        },
        },
    }
    )