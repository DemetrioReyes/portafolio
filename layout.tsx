import { Analytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font/sans'
import { AnimatedBackground } from './components/animated-background'
import './globals.css'

export const metadata = {
  title: 'Demetrio Reyes - Full Stack Developer',
  description: 'Portfolio of Demetrio Reyes, a Full Stack Developer specialized in backend development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased">
        <AnimatedBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

