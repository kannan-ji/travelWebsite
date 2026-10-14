import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBaseUrl, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kerala Destinations: Munnar, Alleppey, Wayanad & Beyond | Kerala Vistas',
  description: 'Explore comprehensive travel guides for Kerala’s premier destinations. From misty Munnar tea hills to tranquil Alleppey backwaters and Fort Kochi heritage.',
  alternates: {
    canonical: `${getBaseUrl()}/destinations`,
  },
  openGraph: {
    title: 'Kerala Destinations: Munnar, Alleppey, Wayanad & Beyond | Kerala Vistas',
    description: 'Explore comprehensive travel guides for Kerala’s premier destinations. From misty Munnar tea hills to tranquil Alleppey backwaters and Fort Kochi heritage.',
    url: `${getBaseUrl()}/destinations`,
  },
};

export default function DestinationsIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Destinations', url: '/destinations' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header Banner */}
      <div className="bg-emerald-950 text-white py-16 sm:py-20 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Breadcrumbs items={[{ name: 'Destinations', url: '/destinations' }]} />
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              <MapPin className="w-4 h-4" />
              God’s Own Country Guide
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Kerala Destination Guides
            </h1>
            <p className="text-base sm:text-lg text-emerald-100 font-light leading-relaxed">
              Plan your travel across Kerala with verified local advice. Discover tea plantations in Munnar, backwater canals in Alleppey, wildlife sanctuaries in Thekkady, and colonial lanes in Fort Kochi.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Destinations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>

        {/* Informative Guidance Banner */}
        <div className="mt-16 bg-stone-100 rounded-2xl p-8 sm:p-10 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Need Help Deciding Your Kerala Route?
            </h2>
            <p className="text-sm text-stone-600 max-w-xl">
              Tell our Fort Kochi travel team how many days you have and your interests (nature, relaxation, culture, honeymoon). We will design a custom route avoiding backtracking.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl font-semibold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors shadow-sm"
          >
            Request Route Recommendation
          </Link>
        </div>
      </div>
    </>
  );
}
