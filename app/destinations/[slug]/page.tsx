import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Thermometer, 
  Car, 
  Plane, 
  Train, 
  CheckCircle2, 
  Sparkles, 
  Lightbulb, 
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { DESTINATIONS, Destination } from '@/data/destinations';
import { TOUR_PACKAGES } from '@/data/packages';
import Breadcrumbs from '@/components/Breadcrumbs';
import PackageCard from '@/components/PackageCard';
import EnquiryForm from '@/components/EnquiryForm';
import { 
  generateTouristDestinationSchema, 
  generateFAQSchema, 
  generateBreadcrumbSchema, 
  getBaseUrl 
} from '@/lib/schema';

interface DestinationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DESTINATIONS.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = DESTINATIONS.find((d) => d.slug === slug);
  const baseUrl = getBaseUrl();

  if (!destination) {
    return {
      title: 'Destination Not Found',
    };
  }

  const title = `${destination.name} Travel Guide: Attractions, Best Time & Packages | Kerala Vistas`;
  const description = `${destination.shortDescription} Discover things to do, weather, how to reach from Kochi, and handcrafted tour packages.`;
  const canonicalUrl = `${baseUrl}/destinations/${destination.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: destination.heroImage,
          width: 1200,
          height: 630,
          alt: `${destination.name}, Kerala`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [destination.heroImage],
    },
  };
}

export default async function DestinationDetailPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = DESTINATIONS.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const relatedPackages = TOUR_PACKAGES.filter((p) =>
    destination.popularPackageSlugs.includes(p.slug)
  );

  const destinationSchema = generateTouristDestinationSchema(destination);
  const faqSchema = generateFAQSchema(destination.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Destinations', url: '/destinations' },
    { name: destination.name, url: `/destinations/${destination.slug}` },
  ]);

  return (
    <>
      {/* Structured Data (JSON-LD) for TouristDestination, FAQs & Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[460px] bg-stone-900 text-white flex items-end">
        <Image
          src={destination.heroImage}
          alt={`${destination.name}, Kerala - ${destination.tagline}`}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-65"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-200 text-xs font-semibold backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.district}, Kerala, India</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {destination.name} Travel Guide
            </h1>

            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              {destination.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs & Quick Facts Bar */}
      <div className="bg-white border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { name: 'Destinations', url: '/destinations' },
              { name: destination.name, url: `/destinations/${destination.slug}` },
            ]}
          />
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold mb-1">
                <Clock className="w-4 h-4" />
                <span>Ideal Duration</span>
              </div>
              <p className="text-stone-900 font-bold">{destination.idealDurationDays}</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold mb-1">
                <Calendar className="w-4 h-4" />
                <span>Best Season</span>
              </div>
              <p className="text-stone-900 font-bold truncate">{destination.bestTimeToVisit.split('(')[0]}</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold mb-1">
                <Plane className="w-4 h-4" />
                <span>Nearest Airport</span>
              </div>
              <p className="text-stone-900 font-bold truncate">Cochin (COK) - {destination.distanceFromCochinAirport.split('(')[0]}</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold mb-1">
                <Thermometer className="w-4 h-4" />
                <span>Altitude / Elevation</span>
              </div>
              <p className="text-stone-900 font-bold truncate">{destination.altitude}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Section */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                About {destination.name}
              </h2>
              <p className="text-base text-stone-700 leading-relaxed">
                {destination.fullDescription}
              </p>

              {/* Highlights Checkmarks */}
              <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 mt-6">
                <h3 className="font-serif text-lg font-bold text-emerald-950 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-700" />
                  Key Highlights of {destination.name}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-stone-800">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Weather & Climate Breakdown */}
            <section className="space-y-6 pt-6 border-t border-stone-200">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 flex items-center gap-2">
                <Thermometer className="w-6 h-6 text-emerald-800" />
                Climate & When to Visit {destination.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-stone-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                    Winter (Oct – Feb)
                  </span>
                  <p className="text-sm font-semibold text-stone-900 mb-1">{destination.temperatureRange.winter}</p>
                  <p className="text-xs text-stone-600">
                    Crisp, refreshing mornings, clear mountain views, and peak travel comfort.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                    Summer (Mar – May)
                  </span>
                  <p className="text-sm font-semibold text-stone-900 mb-1">{destination.temperatureRange.summer}</p>
                  <p className="text-xs text-stone-600">
                    Cool highland sanctuary away from Indian plains; great for wildlife spotting.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block mb-1">
                    Monsoon (Jun – Sep)
                  </span>
                  <p className="text-sm font-semibold text-stone-900 mb-1">{destination.temperatureRange.monsoon}</p>
                  <p className="text-xs text-stone-600">
                    Vibrant green terraces, gushing waterfalls, romantic mist, and Ayurvedic season.
                  </p>
                </div>
              </div>
            </section>

            {/* Top Attractions & Things To Do */}
            <section className="space-y-6 pt-6 border-t border-stone-200">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Top Attractions in {destination.name}
                </h2>
                <p className="text-sm text-stone-600 mt-1">
                  Handpicked points of interest verified by Kerala Vistas local guides.
                </p>
              </div>

              <div className="space-y-6">
                {destination.topAttractions.map((attraction, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-serif text-xl font-bold text-stone-900">
                        {attraction.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {attraction.category}
                      </span>
                    </div>

                    <p className="text-sm text-stone-700 leading-relaxed">
                      {attraction.description}
                    </p>

                    {(attraction.timings || attraction.ticketPrice) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-stone-600 bg-stone-50 p-3 rounded-lg border border-stone-100">
                        {attraction.timings && (
                          <div>
                            <strong className="text-stone-900">Timings:</strong> {attraction.timings}
                          </div>
                        )}
                        {attraction.ticketPrice && (
                          <div>
                            <strong className="text-stone-900">Tariff:</strong> {attraction.ticketPrice}
                          </div>
                        )}
                      </div>
                    )}

                    {attraction.travelTip && (
                      <div className="flex items-start gap-2 text-xs text-emerald-900 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-100">
                        <Lightbulb className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span><strong>Local Tip:</strong> {attraction.travelTip}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* How to Reach Section */}
            <section className="space-y-6 pt-6 border-t border-stone-200">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 flex items-center gap-2">
                <Car className="w-6 h-6 text-emerald-800" />
                How to Reach {destination.name}
              </h2>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="bg-white p-5 rounded-xl border border-stone-200 flex items-start gap-3">
                  <Plane className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
                  <div>
                    <strong className="text-stone-900 block font-serif text-base mb-1">By Air</strong>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{destination.howToReach.byAir}</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200 flex items-start gap-3">
                  <Train className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
                  <div>
                    <strong className="text-stone-900 block font-serif text-base mb-1">By Train</strong>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{destination.howToReach.byTrain}</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200 flex items-start gap-3">
                  <Car className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
                  <div>
                    <strong className="text-stone-900 block font-serif text-base mb-1">By Road & Private Chauffeur</strong>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{destination.howToReach.byRoad}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Practical Local Insider Tips */}
            <section className="space-y-4 pt-6 border-t border-stone-200">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-amber-500" />
                Local Specialist Tips
              </h2>
              <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6 space-y-3">
                {destination.insiderTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Destination Specific FAQs */}
            <section className="space-y-4 pt-6 border-t border-stone-200">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-emerald-800" />
                Frequently Asked Questions About {destination.name}
              </h2>
              <div className="space-y-3">
                {destination.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white rounded-xl border border-stone-200 p-4 shadow-xs open:ring-1 open:ring-emerald-700"
                  >
                    <summary className="font-serif font-bold text-sm sm:text-base text-stone-900 cursor-pointer list-none flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="text-emerald-700 group-open:rotate-45 transition-transform duration-200 text-lg">
                        +
                      </span>
                    </summary>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-2">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Curated Tour Packages Featuring this destination */}
            {relatedPackages.length > 0 && (
              <section className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    Packages Featuring {destination.name}
                  </h2>
                  <Link
                    href="/packages"
                    className="text-xs sm:text-sm font-semibold text-emerald-800 hover:underline flex items-center gap-1"
                  >
                    View All Packages <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPackages.map((pkg) => (
                    <PackageCard key={pkg.slug} pkg={pkg} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column: Sticky Enquiry & Quick Actions */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              {/* Quick Contact & WhatsApp Box */}
              <div className="bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-800/60 shadow-xl space-y-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-800 text-emerald-200 uppercase tracking-wider">
                  Direct Assistance
                </span>
                <h3 className="font-serif text-xl font-bold">
                  Planning a Visit to {destination.name}?
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Our tour coordinators can customize a private chauffeured itinerary matching your flight timings, hotel tier, and group size.
                </p>

                <div className="space-y-2 pt-2">
                  <a
                    href={`https://wa.me/919847012345?text=Hello%20Kerala%20Vistas%2C%20I%20am%20interested%20in%20visiting%20${encodeURIComponent(destination.name)}.%20Please%20share%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 text-sm transition-colors shadow-md"
                  >
                    WhatsApp Trip Designer
                  </a>
                  <a
                    href="#destination-enquiry"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-stone-200 hover:text-white bg-white/10 hover:bg-white/15 text-xs transition-colors"
                  >
                    Fill Enquiry Form
                  </a>
                </div>
              </div>

              {/* Other Destinations Navigation */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
                <h3 className="font-serif text-base font-bold text-stone-900">
                  Explore Other Kerala Destinations
                </h3>
                <ul className="space-y-2 text-xs">
                  {DESTINATIONS.filter((d) => d.slug !== destination.slug).map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={`/destinations/${d.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-stone-50 text-stone-700 hover:text-emerald-800 transition-colors"
                      >
                        <span className="font-medium">{d.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Embedded Enquiry Form at bottom */}
      <section className="py-16 bg-stone-100 border-t border-stone-200" id="destination-enquiry">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm initialDestination={destination.name} />
        </div>
      </section>
    </>
  );
}
