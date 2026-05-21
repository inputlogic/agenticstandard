import 'styles/index.scss'
import { Cormorant_Garamond, Instrument_Sans } from 'next/font/google'
import { ReactNode } from 'react'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Agentic Standard',
    template: '%s — Agentic Standard',
  },
  description:
    'A specialized consulting firm that closes the gap between AI technology and the operating model that has to meet it.',
  metadataBase: new URL('https://agenticstandard.ca'),
  openGraph: {
    type: 'website',
    siteName: 'Agentic Standard',
  },
  twitter: {
    card: 'summary',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>◆</text></svg>",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  )
}
