'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service if needed
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-stone-200 text-center space-y-5 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="font-serif text-2xl font-bold text-stone-900">
          Something Went Wrong
        </h1>

        <p className="text-sm text-stone-600 leading-relaxed">
          We encountered an unexpected issue while loading this page. Please try refreshing or return to the homepage.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-emerald-800 hover:bg-emerald-900 text-xs transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 text-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
