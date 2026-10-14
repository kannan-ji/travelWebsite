import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Award, 
  Compass, 
  Car, 
  Heart, 
  Users, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { AGENCY_DATA } from '@/data/agency';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBaseUrl, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Kerala Vistas: Registered Kerala Tour Operator in Fort Kochi',
  description: 'Learn about Kerala Vistas Journeys, an authorized Kerala travel agency founded in 2012 in Fort Kochi. Meet our local team, our fleet, and our commitment to responsible tourism.',
  alternates: {
    canonical: `${getBaseUrl()}/about`,
  },
  openGraph: {
    title: 'About Kerala Vistas: Registered Kerala Tour Operator in Fort Kochi',
    description: 'Learn about Kerala Vistas Journeys, an authorized Kerala travel agency founded in 2012 in Fort Kochi. Meet our local team, our fleet, and our commitment to responsible tourism.',
    url: `${getBaseUrl()}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'About Us', url: '/about' },
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
            <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              <ShieldCheck className="w-4 h-4" />
              Accredited Kerala Travel Specialist
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Rooted in Kerala, Dedicated to Seamless Travel
            </h1>
            <p className="text-base sm:text-lg text-emerald-100 font-light leading-relaxed">
              Founded in 2012 in the historic maritime quarter of Fort Kochi, {AGENCY_DATA.name} was established with a singular mission: to share the authentic spirit of God’s Own Country with genuine local warmth and zero commercial compromises.
            </p>
          </div>
        </div>
      </div>

      {/* Key Numbers Strip */}
      <div className="bg-white border-b border-stone-200 py-10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-emerald-900">{AGENCY_DATA.stats.happyGuests}</p>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">Guests Hosted Since 2012</p>
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-emerald-900">{AGENCY_DATA.stats.verifiedTrips}</p>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">Custom Private Tours Completed</p>
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-emerald-900">4.9 / 5</p>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">Google & Independent Rating</p>
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-emerald-900">100%</p>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">Direct Local Ownership</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story & Agency Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Our Journey: From Fort Kochi to Across Kerala
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              Travel aggregators often view Kerala through generic algorithms, booking guests into crowded commercial boats and hurried circuits. At <strong>Kerala Vistas</strong>, our team of travel designers was born and raised along the palm-fringed lagoons of Alleppey and the mist-laden ridges of Idukki.
            </p>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              We operate our own private fleet of air-conditioned tourist vehicles, vetted and maintained under rigorous safety standards. Our chauffeur-guides are not simply drivers—they are courteous local ambassadors trained in defensive driving, mountain routes, and spoken English and Hindi.
            </p>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                Official Agency Credentials & Licenses
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {AGENCY_DATA.accreditations.map((acc, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{acc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-96 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80"
              alt="Traditional Kerala Fishing Boats & Culture in Kochi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-8 pt-8 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Our Core Operating Principles
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              How we protect your vacation time, safety, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Responsible & Fair Tourism
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We partner directly with family-run spice farms, local canoe navigators in Kuttanad, and traditional homestays, ensuring tourism revenues directly empower local Kerala communities.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Verified Fleet & Mountain Drivers
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Kerala’s hairpin turns (churam) demand skilled, calm chauffeurs. Our vehicles are all commercial tourist vehicles (yellow board) equipped with GPS, sanitizers, and speed governors.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Complete Price Transparency
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Every quote clearly enumerates vehicle fuel, interstate and state highway tolls, driver allowances, boat tariffs, and hotel taxes. No surprise surcharges during check-out.
              </p>
            </div>
          </div>
        </div>

        {/* Office Location & Direct Connect Banner */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Visit Our Fort Kochi Desk
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Let’s Plan Your Kerala Getaway
            </h2>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Drop by our office near St. Francis Church for a fresh cup of plantation tea and a map session, or reach our concierge team 24/7 on WhatsApp.
            </p>
            <div className="pt-2 text-xs text-stone-300 flex flex-wrap gap-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                KB Jacob Road, Fort Kochi
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {AGENCY_DATA.displayPhone}
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 text-sm transition-colors text-center"
            >
              Contact Travel Team
            </Link>
            <a
              href={AGENCY_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-600 text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
