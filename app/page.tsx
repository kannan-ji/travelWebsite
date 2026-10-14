import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Star, 
  MapPin, 
  Calendar, 
  Compass, 
  Car, 
  MessageSquare, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  Users
} from 'lucide-react';
import { AGENCY_DATA } from '@/data/agency';
import { DESTINATIONS } from '@/data/destinations';
import { TOUR_PACKAGES } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import DestinationCard from '@/components/DestinationCard';
import EnquiryForm from '@/components/EnquiryForm';
import { generateFAQSchema } from '@/lib/schema';

const HOME_FAQS = [
  {
    question: 'Why book with a local Kerala travel agency rather than an online aggregator?',
    answer: 'Kerala Vistas is physically based in Fort Kochi with dedicated on-ground chauffeurs, direct contracts with verified green-certified houseboats, and firsthand knowledge of mountain roads. We eliminate intermediary commissions, offer 24/7 real-time on-tour support, and customize every itinerary to your pace.',
  },
  {
    question: 'What is the best time of the year to visit Kerala?',
    answer: 'October to March offers ideal weather (20°C to 30°C) with clear blue skies across both hills (Munnar, Wayanad) and backwaters (Alleppey). June to August is the monsoon season, world-renowned for traditional Ayurvedic rejuvenation retreats and dramatic lush landscapes.',
  },
  {
    question: 'How do houseboat bookings work in Alleppey?',
    answer: 'All our houseboats are private Kettuvallams (exclusive to your party with no strangers). They include an onboard captain, navigator, and private chef who cooks traditional Kerala meals fresh on board. Bedrooms are equipped with air conditioning and private attached bathrooms.',
  },
  {
    question: 'Which airport should I fly into for a Kerala holiday?',
    answer: 'Cochin International Airport (COK) is the premier central hub, situated only 3.5 hours from Munnar and 2 hours from Alleppey. For North Kerala itineraries (Wayanad), Calicut International Airport (CCJ) is closest. We provide seamless pickup and drop-off at all airports.',
  },
  {
    question: 'Can dietary preferences (Jain, vegetarian, gluten-free, halal) be accommodated?',
    answer: 'Absolutely. Both our partner resorts and private onboard houseboat chefs prepare customized meals according to your explicit dietary preferences upon notice.',
  },
];

export default function HomePage() {
  const featuredPackages = TOUR_PACKAGES.filter((p) => p.featured);
  const featuredDestinations = DESTINATIONS.slice(0, 4);
  const faqSchema = generateFAQSchema(HOME_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center bg-stone-900 text-white overflow-hidden">
        {/* Background Image with optimized Next.js Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=85"
            alt="Misty Backwaters of Alleppey, Kerala with traditional Houseboat - Kerala Vistas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Kerala Tourism Accredited Destination Specialist</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Authentic Kerala Holidays, <br className="hidden sm:inline" />
                <span className="text-emerald-300">Crafted by Local Hands</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-stone-200 font-light max-w-2xl leading-relaxed">
                From misty tea plantations in <strong className="font-semibold text-white">Munnar</strong> to private overnight houseboats on <strong className="font-semibold text-white">Vembanad Lake</strong>. Enjoy dedicated chauffeurs, zero middleman markups, and tailor-made itineraries.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/packages"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-950/30 transition-all hover:scale-102"
                >
                  <Compass className="w-5 h-5" />
                  <span>Explore Tour Packages</span>
                </Link>

                <a
                  href={AGENCY_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-emerald-700/90 hover:bg-emerald-600 border border-emerald-400/30 backdrop-blur-md transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-300" />
                  <span>WhatsApp a Trip Planner</span>
                </a>
              </div>

              {/* Trust Micro-Stats */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/15 text-left">
                <div>
                  <p className="text-2xl font-bold text-white">18,500+</p>
                  <p className="text-xs text-stone-300">Happy Travelers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-300 flex items-center gap-1">
                    4.9 <Star className="w-4 h-4 fill-amber-300" />
                  </p>
                  <p className="text-xs text-stone-300">Google Reviews</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-xs text-stone-300">Custom Itineraries</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">24/7</p>
                  <p className="text-xs text-stone-300">Local Concierge</p>
                </div>
              </div>
            </div>

            {/* Right Mini-Card: Quick Quote Snapshot */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="bg-white/95 backdrop-blur-xl p-7 rounded-2xl border border-stone-200 text-stone-900 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                    Direct Agency Advantage
                  </span>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                    Fort Kochi Office
                  </span>
                </div>

                <div className="space-y-3 text-xs text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Private AC Chauffeur throughout (Sedan / Innova Crysta)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Government certified private houseboats with chef</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Zero hidden cancellation penalties before final confirmation</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Complimentary spice market & tea tasting tour</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white bg-emerald-800 hover:bg-emerald-900 text-sm transition-colors"
                  >
                    Request Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search & Seasonal Planner Strip */}
      <section className="bg-emerald-900 text-emerald-100 py-6 border-y border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-amber-300 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Planning for November 2025 – March 2026?
                </p>
                <p className="text-xs text-emerald-200">
                  Peak winter backwater & tea harvest season. Advance booking recommended for luxury houseboats.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/destinations/munnar"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white transition-colors"
              >
                Munnar Weather & Guide
              </Link>
              <Link
                href="/travel-guides/best-time-to-visit-kerala-month-by-month"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors"
              >
                Season Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tour Packages Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Handcrafted Itineraries
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                Curated Kerala Tour Packages
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-xl">
                Every tour package includes private chauffeured transfers, handpicked boutique stays, and dedicated Kerala Vistas concierge support.
              </p>
            </div>

            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
            >
              <span>Browse All Packages ({TOUR_PACKAGES.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Destination Guides Showcase */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                <MapPin className="w-3.5 h-3.5" />
                Iconic Destinations
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                Explore God’s Own Country
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-xl">
                In-depth travel guides written by our local Kerala team, featuring verified attraction timings, road conditions, and insider secrets.
              </p>
            </div>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
            >
              <span>All Destination Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>

          {/* Featured Highlight Banner: Munnar Destination Guide Spotlight */}
          <div className="mt-12 bg-gradient-to-r from-emerald-950 to-stone-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-emerald-800/40">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800 text-emerald-200">
                Spotlight Destination
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Munnar High Range Travel Guide (1,600m)
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Discover the rolling tea gardens, Eravikulam Nilgiri Tahr sanctuary, Kolukkumalai sunrise jeep trails, and how to comfortably reach Munnar from Kochi airport via the scenic NH 85 highway.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/destinations/munnar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 text-sm transition-colors"
              >
                Read Munnar Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/packages/munnar-misty-hills-3-day"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 text-sm transition-colors"
              >
                View 3-Day Munnar Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kerala Vistas Section */}
      <section className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              We are not an anonymous booking portal. We are a registered Kerala travel team based in Fort Kochi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AGENCY_DATA.features.map((feature, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100">
                  {idx === 0 && <Compass className="w-6 h-6" />}
                  {idx === 1 && <Car className="w-6 h-6" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 3 && <Sparkles className="w-6 h-6" />}
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {feature.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Traveler Testimonials */}
      <section className="py-20 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Verified Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Memories From Our Guests
            </h2>
            <p className="text-sm text-stone-300 mt-2">
              Over 18,500 travelers have explored Kerala with our dedicated chauffeur-guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-900/60 p-7 rounded-2xl border border-emerald-800/60 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-1 text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-300" />
                ))}
              </div>
              <p className="text-sm text-stone-200 italic leading-relaxed">
                “Our 6-day Kerala highlights tour was flawless. Our chauffeur Shiju was punctual, knowledgeable, and guided us to the best tea factory in Munnar and delicious local food in Alleppey. The private houseboat with fresh Karimeen fish was unforgettable!”
              </p>
              <div className="pt-2 border-t border-emerald-800/80">
                <p className="font-semibold text-sm text-white">Dr. Vikram & Sunita Rao</p>
                <p className="text-xs text-emerald-300">Bangalore (Travelled Nov 2024)</p>
              </div>
            </div>

            <div className="bg-emerald-900/60 p-7 rounded-2xl border border-emerald-800/60 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-1 text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-300" />
                ))}
              </div>
              <p className="text-sm text-stone-200 italic leading-relaxed">
                “We booked our Kerala honeymoon through Kerala Vistas. The treehouse in Munnar was pure romance, and the candlelight dinner on the Alleppey houseboat exceeded all expectations. Exceptional responsiveness on WhatsApp!”
              </p>
              <div className="pt-2 border-t border-emerald-800/80">
                <p className="font-semibold text-sm text-white">Kavita & Amit Mehra</p>
                <p className="text-xs text-emerald-300">New Delhi (Travelled Jan 2025)</p>
              </div>
            </div>

            <div className="bg-emerald-900/60 p-7 rounded-2xl border border-emerald-800/60 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-1 text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-300" />
                ))}
              </div>
              <p className="text-sm text-stone-200 italic leading-relaxed">
                “Traveling with elderly parents can be challenging, but Kerala Vistas arranged a spacious Innova Crysta with a very patient driver who catered to our pace. No forced shopping stops, transparent billing, and 5-star hospitality.”
              </p>
              <div className="pt-2 border-t border-emerald-800/80">
                <p className="font-semibold text-sm text-white">Rajesh Kulkarni & Family</p>
                <p className="text-xs text-emerald-300">Mumbai (Travelled Dec 2024)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (SEO + LLM Discoverability) */}
      <section className="py-20 bg-stone-50 border-t border-stone-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Everything You Need to Know About Kerala Travel
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Clear, factual answers to help you prepare for your trip to God’s Own Country.
            </p>
          </div>

          <div className="space-y-4">
            {HOME_FAQS.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-stone-200 p-5 shadow-sm transition-all open:ring-1 open:ring-emerald-700"
              >
                <summary className="flex items-center justify-between font-serif text-base sm:text-lg font-bold text-stone-900 cursor-pointer list-none select-none">
                  <span>{faq.question}</span>
                  <span className="ml-4 text-emerald-700 font-sans text-xl group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Enquiry & Contact Form Section */}
      <section className="py-20 bg-white border-t border-stone-200" id="enquiry-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Personalized Trip Planning
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
              Start Planning Your Kerala Journey
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Tell us your preferred dates and interests. We will respond within 2 hours with a comprehensive customized itinerary.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
