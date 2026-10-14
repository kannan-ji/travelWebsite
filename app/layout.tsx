import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { generateTravelAgencySchema, getBaseUrl } from '@/lib/schema';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Kerala Vistas | Authentic Kerala Tour Packages & Houseboats Specialist',
    template: '%s | Kerala Vistas Journeys',
  },
  description: 'Authorized Kerala travel agency crafting tailor-made holidays: Munnar tea hills, Alleppey backwater houseboats, Wayanad rainforests, and private chauffeured tours.',
  keywords: [
    'Kerala tour packages',
    'Kerala travel agency',
    'Alleppey houseboat booking',
    'Munnar tour package',
    'Wayanad tour package',
    'Kerala honeymoon packages',
    'Gods own country tour operator',
    'Fort Kochi travel agency',
  ],
  authors: [{ name: 'Kerala Vistas Journeys' }],
  creator: 'Kerala Vistas Holidays & Destination Management',
  publisher: 'Kerala Vistas',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: 'Kerala Vistas Journeys',
    title: 'Kerala Vistas | Authentic Kerala Tour Packages & Houseboats Specialist',
    description: 'Experience God’s Own Country with authorized local Kerala specialists. Custom tea estate stays, private backwater cruises, and dedicated local chauffeurs.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Kerala Backwaters Houseboat in Alleppey - Kerala Vistas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerala Vistas | Authentic Kerala Tour Packages & Houseboats Specialist',
    description: 'Bespoke Kerala tour packages, Alleppey houseboats & Munnar tea hills with verified local chauffeurs.',
    images: ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const travelAgencySchema = generateTravelAgencySchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
        />
      </head>
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased flex flex-col font-sans" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
