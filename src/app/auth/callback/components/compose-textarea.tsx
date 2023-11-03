'use client'

import { useEffect, useRef } from "react"
import { useFormStatus } from 'react-dom'

export function ComposeTextArea() {
    let pending = true

    const alreadySent = useRef(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    
    useEffect(() => {
        if (textAreaRef.current === null) return

        if (alreadySent.current) {
            alreadySent.current = false
            textAreaRef.current.value = ''
        }

        alreadySent.current = !pending
    }, [alreadySent])

    return (
        <textarea 
        ref={textAreaRef}
        name="content" 
        rows={4}
        className='w-full text-2xl ml-2 pl-2 bg-white placeholder-gray-500'
        placeholder='¡¿Qué está pasando?!'
        ></textarea>
    )
}