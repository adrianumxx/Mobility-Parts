import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'
import { siteMeta } from '@/lib/site-content'

export const metadata: Metadata = {
  title: `${siteMeta.name} | ${siteMeta.tagline}`,
  description:
    'Distributeur B2B de pièces auto en Belgique : VIN, 5M+ références, stock réel, livraison J+1 pour ateliers professionnels.',
  keywords:
    'pièces auto B2B, distributeur garage Belgique, VIN pièces, TRW, Bosch, Valeo, livraison J+1, Mobility Parts',
  openGraph: {
    title: `${siteMeta.name} — ${siteMeta.tagline}`,
    description:
      'La référence pour les pros : catalogue multi-marques, identification VIN, logistique optimisée pour ateliers.',
    type: 'website',
    locale: 'fr_BE',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
