import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle2, 
  XCircle, 
  Car, 
  Bed, 
  Utensils, 
  ShieldCheck, 
  MessageSquare, 
  PhoneCall, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { TOUR_PACKAGES, TourPackage } from '@/data/packages';
import { AGENCY_DATA } from '@/data/agency';
import Breadcrumbs from '@/components/Breadcrumbs';
import EnquiryForm from '@/components/EnquiryForm';
import { 
  generateTourPackageSchema, 
  generateBreadcrumbSchema, 
  getBaseUrl 
} from '@/lib/schema';

interface PackagePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return TOUR_PACKAGES.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = TOUR_PACKAGES.find((p) => p.slug === slug);
  const baseUrl = getBaseUrl();

  if (!pkg) {
    return {
      title: 'Tour Package Not Found',
    };
  }

  const title = `${pkg.title} (${pkg.durationDays}D/${pkg.durationNights}N) | Kerala Vistas`;
  const description = `${pkg.overview} Includes private AC car, chauffeur, verified stays & breakfast. Starting from ₹${pkg.priceINR.toLocaleString('en-IN')}.`;
  const canonicalUrl = `${baseUrl}/packages/${pkg.slug}`;

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
          url: pkg.heroImage,
          width: 1200,
          height: 630,
          alt: `${pkg.title} - Kerala Vistas Tour`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [pkg.heroImage],
    },
  };
}

export default async function PackageDetailPage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = TOUR_PACKAGES.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const tripSchema = generateTourPackageSchema(pkg);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Tour Packages', url: '/packages' },
    { name: pkg.title, url: `/packages/${pkg.slug}` },
  ]);

  const whatsAppPackageUrl = `https://wa.me/919847012345?text=Hello%20Kerala%20Vistas%2C%20I%20am%20interested%20in%20the%20%22${encodeURIComponent(pkg.title)}%22%20package.%20Please%20share%20availability%20and%20rates.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <div className="relative h-[55vh] min-h-[440px] bg-stone-900 text-white flex items-end">
        <Image
          src={pkg.heroImage}
          alt={pkg.title}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-65"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <div className="max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/80 border border-emerald-500/40 text-emerald-200 backdrop-blur-md">
                {pkg.theme} Package
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 text-amber-300 backdrop-blur-md">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                {pkg.rating} ({pkg.reviewCount} verified reviews)
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {pkg.title}
            </h1>

            <p className="text-sm sm:text-base text-stone-200 font-light max-w-2xl">
              {pkg.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs Bar */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { name: 'Tour Packages', url: '/packages' },
              { name: pkg.title, url: `/packages/${pkg.slug}` },
            ]}
          />
        </div>
      </div>

      {/* Key Trip Parameters Ribbon */}
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <span className="text-stone-500 block text-xs">Duration</span>
              <strong className="text-stone-900 text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-emerald-700" />
                {pkg.durationDays} Days / {pkg.durationNights} Nights
              </strong>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <span className="text-stone-500 block text-xs">Route Covered</span>
              <strong className="text-stone-900 text-sm sm:text-base flex items-center gap-1.5 mt-0.5 truncate">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="truncate">{pkg.destinationRoute}</span>
              </strong>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <span className="text-stone-500 block text-xs">Transport</span>
              <strong className="text-stone-900 text-sm sm:text-base flex items-center gap-1.5 mt-0.5 truncate">
                <Car className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Dedicated AC Car</span>
              </strong>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <span className="text-stone-500 block text-xs">Starting Price</span>
              <strong className="text-emerald-900 text-base sm:text-lg flex items-center gap-1 mt-0.5">
                ₹{pkg.priceINR.toLocaleString('en-IN')}
                <span className="text-xs font-normal text-stone-500">/ person</span>
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Tour Overview
              </h2>
              <p className="text-base text-stone-700 leading-relaxed">
                {pkg.overview}
              </p>

              <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-5 space-y-2 text-xs sm:text-sm text-stone-800">
                <div className="flex items-center gap-2 font-semibold text-emerald-950">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>The Kerala Vistas Direct Guarantee</span>
                </div>
                <p className="text-stone-600">
                  This tour is 100% private for you and your travelling companions. No joining with unfamiliar tour bus groups. You have full freedom to stop for tea, photos, or scenic detours.
                </p>
              </div>
            </section>

            {/* Day-by-Day Itinerary */}
            <section className="space-y-6 pt-6 border-t border-stone-200">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Detailed Day-by-Day Itinerary
                </h2>
                <p className="text-sm text-stone-600 mt-1">
                  Crafted by our local travel designers. Can be tailored to your flight timings.
                </p>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-5 before:w-0.5 before:bg-stone-200">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="relative pl-10 sm:pl-12 space-y-3">
                    {/* Number Badge */}
                    <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-800 text-white font-serif font-bold text-xs sm:text-sm flex items-center justify-center shadow-md border-2 border-white">
                      D{day.day}
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                          Day {day.day}: {day.title}
                        </h3>
                        <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                          Stay: {day.stayLocation}
                        </span>
                      </div>

                      <p className="text-sm text-stone-700 leading-relaxed">
                        {day.description}
                      </p>

                      {/* Meals & Activities */}
                      <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
                        <div className="flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span><strong>Meals:</strong> {day.mealsIncluded}</span>
                        </div>
                      </div>

                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {day.activities.map((act, actIdx) => (
                          <span
                            key={actIdx}
                            className="inline-flex items-center gap-1 text-[11px] bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md"
                          >
                            <Sparkles className="w-3 h-3 text-emerald-600" />
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Vehicle & Accommodation Specifications */}
            <section className="space-y-6 pt-6 border-t border-stone-200">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Transport & Accommodation Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                    <Car className="w-5 h-5 text-emerald-700" />
                    <span>Dedicated Chauffeured Vehicle</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {pkg.vehicleDetails}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                    <Bed className="w-5 h-5 text-emerald-700" />
                    <span>Resorts & Houseboat Tier</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {pkg.accommodationType}
                  </p>
                </div>
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="space-y-6 pt-6 border-t border-stone-200">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Inclusions & Exclusions
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-emerald-50/60 rounded-2xl p-6 border border-emerald-100 space-y-3">
                  <h3 className="font-serif font-bold text-base text-emerald-950 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    Package Inclusions
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200 space-y-3">
                  <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-stone-500" />
                    Exclusions
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Booking & Enquiry Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              {/* Pricing & Booking Card */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xl space-y-5">
                <div className="pb-4 border-b border-stone-100">
                  <span className="text-xs uppercase tracking-wider text-stone-500 block">Package Price</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-bold text-stone-900">
                      ₹{pkg.priceINR.toLocaleString('en-IN')}
                    </span>
                    {pkg.originalPriceINR && (
                      <span className="text-sm text-stone-400 line-through">
                        ₹{pkg.originalPriceINR.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-stone-500 block mt-0.5">
                    {pkg.priceNote}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>No booking fees or card surcharges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Private sanitized vehicle with chauffeur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free date changes up to 7 days before travel</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={whatsAppPackageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-colors text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Enquire on WhatsApp
                  </a>

                  <a
                    href="#package-enquiry"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-stone-800 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 transition-colors text-xs"
                  >
                    Customize This Package
                  </a>
                </div>

                <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 text-center">
                  Need immediate phone assistance? Call{' '}
                  <a href={`tel:${AGENCY_DATA.phone.replace(/\s+/g, '')}`} className="font-semibold text-emerald-800 hover:underline">
                    {AGENCY_DATA.displayPhone}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Embedded Enquiry Section */}
      <section className="py-16 bg-stone-100 border-t border-stone-200" id="package-enquiry">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm initialPackage={pkg.title} />
        </div>
      </section>
    </>
  );
}
