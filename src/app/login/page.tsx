// import { createServerClient } from '@supabase/ssr'
// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'

import { AuthButtonServer } from '@/app/components/auth-botton-server'

export default function Login() {
    return (
        <section className='grid place-content-center min-h-screen'>
            <h1 className='text-xl font-bold ml-2 mb-4'>Login to DevClon</h1>
            <AuthButtonServer />
        </section>
    )
}