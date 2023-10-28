import type { Metadata } from 'next'

import './globals.css'


export const metadata: Metadata = {
  title: 'Twitter Clon',
  description: 'Generated by Tato Clemente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
