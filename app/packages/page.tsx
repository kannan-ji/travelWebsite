import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ShieldCheck, PhoneCall, MessageSquare } from 'lucide-react';
import { TOUR_PACKAGES } from '@/data/packages';
import { AGENCY_DATA } from '@/data/agency';
import PackageCard from '@/components/PackageCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBaseUrl, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kerala Tour Packages 2025/2026: Houseboats, Munnar & Honeymoon | Kerala Vistas',
  description: 'Book customizable Kerala tour packages with transparent pricing in INR. Includes private dedicated AC vehicles, verified luxury houseboats, and 24/7 local support.',
  alternates: {
    canonical: `${getBaseUrl()}/packages`,
  },
  openGraph: {
    title: 'Kerala Tour Packages 2025/2026: Houseboats, Munnar & Honeymoon | Kerala Vistas',
    description: 'Book customizable Kerala tour packages with transparent pricing in INR. Includes private dedicated AC vehicles, verified luxury houseboats, and 24/7 local support.',
    url: `${getBaseUrl()}/packages`,
  },
};

export default function PackagesIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Tour Packages', url: '/packages' },
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
            <Breadcrumbs items={[{ name: 'Tour Packages', url: '/packages' }]} />
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              <Sparkles className="w-4 h-4" />
              Tailor-Made Kerala Holidays
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Kerala Tour Packages
            </h1>
            <p className="text-base sm:text-lg text-emerald-100 font-light leading-relaxed">
              Transparent, all-inclusive private tours. Explore our most popular itineraries covering Munnar tea gardens, Vembanad backwater houseboats, Periyar wildlife safaris, and secluded beaches.
            </p>
          </div>
        </div>
      </div>

      {/* Inclusions Guarantee Bar */}
      <div className="bg-emerald-900 text-emerald-100 py-3.5 border-b border-emerald-800 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Every package includes private sanitized AC car & dedicated chauffeur-guide
          </span>
          <span className="text-emerald-300 hidden md:inline">
            Free custom date adjustments & personalized hotel upgrades available
          </span>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>

        {/* Custom Itinerary Banner */}
        <div className="mt-16 bg-white rounded-2xl p-8 sm:p-10 border border-stone-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Want a 100% Customized Itinerary?
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Looking for a specific combination like Munnar + Wayanad + Bekal, or interested in an authentic 14-day Ayurvedic Panchakarma retreat? We create tailor-made quotes matching your exact dates and budget.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-emerald-800 hover:bg-emerald-900 text-sm transition-colors text-center"
            >
              Request Custom Quote
            </Link>
            <a
              href={AGENCY_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Specialist
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
