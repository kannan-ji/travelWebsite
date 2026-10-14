import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-60 w-full overflow-hidden bg-stone-100">
        <Image
          src={destination.heroImage}
          alt={`${destination.name}, Kerala - ${destination.tagline}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* District badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md">
            {destination.district}
          </span>
        </div>

        {/* Title & Tagline overlay */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
            {destination.name}
          </h3>
          <p className="text-xs text-stone-200 line-clamp-1 mt-0.5">
            {destination.tagline}
          </p>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Key Facts bar */}
          <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Ideal: {destination.idealDurationDays}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">Best: {destination.bestTimeToVisit.split('(')[0]}</span>
            </div>
          </div>

          <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
            {destination.shortDescription}
          </p>

          {/* Top highlight bullets */}
          <ul className="text-xs text-stone-600 space-y-1">
            {destination.highlights.slice(0, 2).map((highlight, index) => (
              <li key={index} className="flex items-start gap-1.5">
                <span className="text-emerald-700 font-bold">•</span>
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-emerald-800">
            {destination.topAttractions.length} Key Attractions
          </span>
          <Link
            href={`/destinations/${destination.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 group-hover:text-emerald-700 hover:underline"
          >
            <span>Explore Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
