import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/lib/LangContext'

export const metadata: Metadata = {
  title: 'Orbitle — Travel Business Platform by TrigrowTech',
  description: 'Complete white-label travel business platform. Marketplace, agent portal, admin panel and lead selling system on your own branded domain in 48 hours.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}
