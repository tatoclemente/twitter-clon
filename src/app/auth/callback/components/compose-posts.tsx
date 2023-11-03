import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { Avatar } from '@nextui-org/react'

export function ComposePost ({
    userAvatarUrl
}: {
    userAvatarUrl: string
}) {
    
    const addPost = async (formData: FormData) => {
        'use server'
        
        const content = formData.get('content')
        if (content === null) return
        const supabase = createServerActionClient({ cookies })

        const { data: { user } } = await supabase.auth.getUser()
        if (user === null) return

        await supabase.from('posts').insert({ content, user_id: user.id })
        revalidatePath('/')
      }
    return (
        <form action={addPost} className='flex flex-1 flex-col gap-y-4 p-3 border-b border-black/20'>
            <div className='flex flex-row'>
                <Avatar radius="full" size="md" src={userAvatarUrl} className='w-11 h-10' />
                <textarea 
                name="content" 
                rows={4}
                className='w-full text-2xl ml-2 pl-2 bg-white placeholder-gray-500'
                placeholder='¡¿Qué está pasando?!'
                ></textarea>
            </div>
                <button className='bg-sky-500 text-white font-bold rounded-full w-24 px5 py-2 self-end'>Postear</button>
        </form>
    )
}