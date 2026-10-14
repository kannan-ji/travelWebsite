import Link from 'next/link';
import { Compass, Home, Phone } from 'lucide-react';
import { AGENCY_DATA } from '@/data/agency';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-stone-200 text-center space-y-5 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <h1 className="font-serif text-3xl font-bold text-stone-900">
          Page Not Found
        </h1>

        <p className="text-sm text-stone-600 leading-relaxed">
          The Kerala destination or package you were searching for might have moved or been updated.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-emerald-800 hover:bg-emerald-900 text-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            href="/packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 text-xs transition-colors"
          >
            Browse Packages
          </Link>
        </div>

        <div className="pt-4 border-t border-stone-100 text-xs text-stone-500">
          Need quick help?{' '}
          <a
            href={AGENCY_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-800 hover:underline"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
