import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Demetrio Reyes',
  description: 'Created with nodejs',
  generator: 'demetrio.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
