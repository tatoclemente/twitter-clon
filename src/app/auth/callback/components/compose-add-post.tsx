'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"

export async function addPost(formData: FormData) {
    
    const content = formData.get('content')
    if (content === null) return
    const supabase = createServerActionClient({ cookies })

    const { data: { user } } = await supabase.auth.getUser()
    if (user === null) return

    await supabase.from('posts').insert({ content, user_id: user.id })
    revalidatePath('/')

} 