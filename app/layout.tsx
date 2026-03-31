import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/lib/LangContext'
import SmoothScroll from '@/components/SmoothScroll'
import { SpotsProvider } from '@/context/SpotsContext'

export const metadata: Metadata = {
  title: 'Orbitle — White-Label Travel Business Platform for Agents',
  description: 'Launch your branded travel marketplace in 48 hours. Orbitle provides independent travel agents with their own website, admin panel, and enquiry management system. Best software for travel agency growth.',
  keywords: [
    'travel business platform',
    'travel agent software',
    'white-label travel website',
    'travel agency management',
    'travel marketplace builder',
    'best software for travel agents',
    'travel CRM',
    'travel website for agents',
    'Orbitle',
    'TrigrowTech'
  ],
  authors: [{ name: 'TrigrowTech' }],
  creator: 'TrigrowTech',
  publisher: 'TrigrowTech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/orbitle-logo.png',
  },
  openGraph: {
    title: 'Orbitle — Your Own Branded Travel Marketplace',
    description: 'Empower your travel agency with a professional white-label website and admin portal. Go live in 48 hours.',
    url: 'https://orbitle.trigrowtech.in',
    siteName: 'Orbitle',
    images: [
      {
        url: 'https://orbitle.trigrowtech.in/images/orbitle-og.png', // Note: User needs to ensure this exists or I should suggest generating it
        width: 1200,
        height: 630,
        alt: 'Orbitle Travel Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbitle — The Future of Travel Business',
    description: 'Launch your branded travel marketplace in 48 hours. No coding required.',
    images: ['https://orbitle.trigrowtech.in/images/orbitle-og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <SpotsProvider>
            <LangProvider>{children}</LangProvider>
          </SpotsProvider>
        </SmoothScroll>
      </body>
    </html>
  )
}