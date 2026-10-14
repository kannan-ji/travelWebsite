import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, User, Calendar, ArrowRight, MessageSquare, HelpCircle, Share2, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';
import { AGENCY_DATA } from '@/data/agency';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  generateArticleSchema, 
  generateFAQSchema, 
  generateBreadcrumbSchema, 
  getBaseUrl 
} from '@/lib/schema';

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const baseUrl = getBaseUrl();

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const title = `${post.title} | Kerala Vistas`;
  const description = post.excerpt;
  const canonicalUrl = `${baseUrl}/travel-guides/${post.slug}`;

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
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Travel Guides', url: '/travel-guides' },
    { name: post.title, url: `/travel-guides/${post.slug}` },
  ]);
  const faqSchema = post.faq ? generateFAQSchema(post.faq) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Header Banner */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[
              { name: 'Travel Guides', url: '/travel-guides' },
              { name: post.title, url: `/travel-guides/${post.slug}` },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-200 text-xs font-semibold">
            {post.category}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 pt-2 border-t border-stone-800">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              {post.author} ({post.authorRole})
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              Published {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-stone-200">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Main Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        <div className="text-base sm:text-lg text-stone-700 italic border-l-4 border-emerald-700 pl-4 py-1">
          {post.excerpt}
        </div>

        <div className="space-y-8">
          {post.content.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                {section.heading}
              </h2>
              <p className="text-base text-stone-700 leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        {/* FAQs if present */}
        {post.faq && post.faq.length > 0 && (
          <section className="pt-8 border-t border-stone-200 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-800" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {post.faq.map((f, i) => (
                <div key={i} className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1.5">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900">
                    {f.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Author Bio Card */}
        <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-800 text-white font-serif font-bold flex items-center justify-center shrink-0 text-lg">
            {post.author.charAt(0)}
          </div>
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-stone-900">
              Written by {post.author}
            </h3>
            <p className="text-xs text-emerald-800 font-medium">
              {post.authorRole} at Kerala Vistas
            </p>
            <p className="text-xs text-stone-600 leading-relaxed pt-1">
              Based in Fort Kochi, our team travels the backwater canals, tea gardens, and mountain routes across Kerala every month to verify ground conditions for our travelers.
            </p>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="bg-stone-900 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg text-white">
              Ready to Turn This Advice Into Reality?
            </h3>
            <p className="text-xs text-stone-300">
              Let us build a customized private tour including all these sights.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 rounded-xl font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 text-xs transition-colors"
          >
            Plan Your Journey
          </Link>
        </div>
      </article>
    </>
  );
}
