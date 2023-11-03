import { AuthButtonServer } from '@/app/auth/callback/auth-botton-server'
import { redirect } from 'next/navigation'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { PostCard } from './auth/callback/components/post-card'
import { PostList } from './auth/callback/components/post-list'
import { type Database } from './types/database'
import { ComposePost } from './auth/callback/components/compose-posts'



export default async function Home () {
  const cookieStore = cookies()


  const supabase = createServerClient<Database>(
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
  const { data: { session } } = await supabase.auth.getSession()

  
  if (session === null) {
    redirect('/login')
  }
  const { data: posts } = await supabase
  .from('posts')
  .select('*, users(name, user_name, avatar_url)')
  .order('created_at', { ascending: false })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='min-w-[600px] pt-2 mx-auto border-r border-l border-black/20 min-h-screen'>
        <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url}/>
        <PostList posts={posts}/>
      </section> 
      <AuthButtonServer />
    </main>
  )
}
