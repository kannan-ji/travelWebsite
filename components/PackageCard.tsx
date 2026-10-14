import Image from 'next/image';
import Link from 'next/link';
import { Clock, Star, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { TourPackage } from '@/data/packages';

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Banner */}
      <div className="relative h-56 w-full overflow-hidden bg-stone-100">
        <Image
          src={pkg.heroImage}
          alt={`${pkg.title} - Kerala Tour Package`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-200 backdrop-blur-md border border-emerald-500/30">
            {pkg.theme}
          </span>
          {pkg.featured && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500 text-stone-950">
              Popular Choice
            </span>
          )}
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/65 text-white backdrop-blur-md text-xs font-medium">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
        </div>

        {/* Rating badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/95 text-stone-900 text-xs font-semibold shadow">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{pkg.rating}</span>
          <span className="text-stone-600 text-[10px]">({pkg.reviewCount})</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Route */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-800">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
            <span className="truncate">{pkg.destinationRoute}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors line-clamp-2">
            <Link href={`/packages/${pkg.slug}`}>
              {pkg.title}
            </Link>
          </h3>

          <p className="text-sm text-stone-600 line-clamp-2">
            {pkg.subtitle}
          </p>
        </div>

        {/* Key Inclusions preview */}
        <div className="pt-2 border-t border-stone-100 space-y-1.5 text-xs text-stone-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Dedicated private vehicle & local chauffeur</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Handpicked stays + verified private houseboat</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-stone-100 flex items-end justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-600 block">Starting from</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-stone-900">₹{pkg.priceINR.toLocaleString('en-IN')}</span>
              {pkg.originalPriceINR && (
                <span className="text-xs text-stone-600 line-through">₹{pkg.originalPriceINR.toLocaleString('en-IN')}</span>
              )}
            </div>
            <span className="text-[10px] text-stone-600 block">per person on twin share</span>
          </div>

          <Link
            href={`/packages/${pkg.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 transition-colors"
          >
            <span>View Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
