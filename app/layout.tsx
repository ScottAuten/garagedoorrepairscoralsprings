import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LOCAL_BUSINESS_SCHEMA } from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    template: '%s | Garage Door Repair Coral Springs FL',
    default: 'Garage Door Repair of Coral Springs | Fast, Local & Licensed',
  },
  description:
    'Expert garage door repair, spring replacement, opener repair, and new installation in Coral Springs, FL. Licensed & insured. Same-day service. Call (754) 318-5005.',
  metadataBase: new URL('https://garagedoorrepairscoralsprings.us'),
  alternates: { canonical: 'https://garagedoorrepairscoralsprings.us' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Garage Door Repair of Coral Springs',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </head>
      <body className="bg-white font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
