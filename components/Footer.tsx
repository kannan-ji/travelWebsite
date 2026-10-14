import Link from 'next/link';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, Clock, Award, Compass } from 'lucide-react';
import { AGENCY_DATA } from '@/data/agency';
import { DESTINATIONS } from '@/data/destinations';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-stone-800 text-stone-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white">Govt. Accredited</p>
              <p className="text-xs text-stone-400">Kerala Tourism Approved</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white">24/7 On-Trip Support</p>
              <p className="text-xs text-stone-400">Dedicated local concierge</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white">4.9 / 5 Guest Rating</p>
              <p className="text-xs text-stone-400">From 680+ verified reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white">100% Private Custom Tours</p>
              <p className="text-xs text-stone-400">No forced group itineraries</p>
            </div>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Column 1: Agency Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-serif font-bold text-lg text-amber-300">
                KV
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Kerala Vistas
              </span>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              {AGENCY_DATA.legalName} is an authorized Kerala-based destination management company. 
              We craft tailor-made journeys through misty tea hills, tranquil backwater houseboats, wildlife sanctuaries, and pristine coastal retreats with dedicated local chauffeurs and verified stays.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <p className="font-semibold text-stone-300">Affiliations & Accreditations:</p>
              {AGENCY_DATA.accreditations.map((acc, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{acc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Popular Tour Packages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Kerala Tour Packages
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link href="/packages/kerala-highlights-6-day" className="hover:text-emerald-400 transition-colors">
                  Kochi, Munnar & Alleppey (6D/5N)
                </Link>
              </li>
              <li>
                <Link href="/packages/munnar-misty-hills-3-day" className="hover:text-emerald-400 transition-colors">
                  Munnar Tea Highlands (3D/2N)
                </Link>
              </li>
              <li>
                <Link href="/packages/alleppey-houseboat-luxury-cruise" className="hover:text-emerald-400 transition-colors">
                  Alleppey Houseboat Cruise (2D/1N)
                </Link>
              </li>
              <li>
                <Link href="/packages/romantic-kerala-honeymoon-special" className="hover:text-emerald-400 transition-colors">
                  Romantic Kerala Honeymoon (7D/6N)
                </Link>
              </li>
              <li>
                <Link href="/packages/wayanad-nature-wildlife-escape" className="hover:text-emerald-400 transition-colors">
                  Wayanad Nature & Rainforest (4D/3N)
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-emerald-400 font-medium hover:underline inline-block pt-1">
                  View All Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Destination Guides */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Destination Guides
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              {DESTINATIONS.map((dest) => (
                <li key={dest.slug}>
                  <Link href={`/destinations/${dest.slug}`} className="hover:text-emerald-400 transition-colors">
                    {dest.name} Travel Guide
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/travel-guides" className="text-emerald-400 font-medium hover:underline inline-block pt-1">
                  Season-by-Season Tips →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Registered Office
            </h3>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {AGENCY_DATA.address.street}, {AGENCY_DATA.address.locality}, {AGENCY_DATA.address.city}, {AGENCY_DATA.address.state} {AGENCY_DATA.address.postalCode}, {AGENCY_DATA.address.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${AGENCY_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {AGENCY_DATA.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${AGENCY_DATA.email}`} className="hover:text-white transition-colors">
                  {AGENCY_DATA.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={AGENCY_DATA.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Instant WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Semantic SEO links */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} {AGENCY_DATA.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="hover:text-stone-200">About Us</Link>
            <Link href="/contact" className="hover:text-stone-200">Contact & Enquiries</Link>
            <Link href="/sitemap.xml" className="hover:text-stone-200">XML Sitemap</Link>
            <Link href="/robots.txt" className="hover:text-stone-200">Robots.txt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
