import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Clock, User, ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogs';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBaseUrl, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kerala Travel Guides & Blog: Weather, Houseboats & Packing | Kerala Vistas',
  description: 'Practical, expert Kerala travel articles. Find out the best time to visit Kerala, day vs overnight houseboat comparisons, and must-try authentic cuisine.',
  alternates: {
    canonical: `${getBaseUrl()}/travel-guides`,
  },
  openGraph: {
    title: 'Kerala Travel Guides & Blog: Weather, Houseboats & Packing | Kerala Vistas',
    description: 'Practical, expert Kerala travel articles. Find out the best time to visit Kerala, day vs overnight houseboat comparisons, and must-try authentic cuisine.',
    url: `${getBaseUrl()}/travel-guides`,
  },
};

export default function TravelGuidesIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Travel Guides', url: '/travel-guides' },
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
            <Breadcrumbs items={[{ name: 'Travel Guides', url: '/travel-guides' }]} />
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              <BookOpen className="w-4 h-4" />
              Kerala Travel Knowledge Base
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Kerala Travel Guides & Insider Advice
            </h1>
            <p className="text-base sm:text-lg text-emerald-100 font-light leading-relaxed">
              Researched and written by our Fort Kochi travel team to help you make informed decisions about seasons, houseboat selections, mountain roads, and culinary adventures.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-200 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors line-clamp-2">
                    <Link href={`/travel-guides/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <Link
                    href={`/travel-guides/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 group-hover:text-emerald-950"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
