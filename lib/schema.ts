import { AGENCY_DATA } from '@/data/agency';
import { Destination } from '@/data/destinations';
import { TourPackage } from '@/data/packages';
import { BlogPost } from '@/data/blogs';

export function getBaseUrl(): string {
  if (process.env.APP_URL) {
    return process.env.APP_URL.replace(/\/+$/, '');
  }
  return 'https://keralavistas.com';
}

export function generateTravelAgencySchema() {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${baseUrl}/#travelagency`,
    name: AGENCY_DATA.name,
    legalName: AGENCY_DATA.legalName,
    description: AGENCY_DATA.tagline,
    url: baseUrl,
    telephone: AGENCY_DATA.phone,
    email: AGENCY_DATA.email,
    priceRange: '₹₹ - ₹₹₹',
    foundingDate: `${AGENCY_DATA.foundingYear}-01-01`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: AGENCY_DATA.address.street,
      addressLocality: AGENCY_DATA.address.locality,
      addressRegion: AGENCY_DATA.address.state,
      postalCode: AGENCY_DATA.address.postalCode,
      addressCountry: AGENCY_DATA.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: AGENCY_DATA.geo.latitude,
      longitude: AGENCY_DATA.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:30',
      },
    ],
    areaServed: {
      '@type': 'State',
      name: 'Kerala, India',
    },
    knowsAbout: [
      'Kerala Tour Packages',
      'Alleppey Houseboat Bookings',
      'Munnar Tea Garden Treks',
      'Wayanad Rainforest Holidays',
      'Thekkady Periyar Wildlife Safaris',
      'Kerala Honeymoon Packages',
      'Ayurvedic Wellness Retreats',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: AGENCY_DATA.stats.googleRating.toString(),
      reviewCount: AGENCY_DATA.stats.reviewsCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function generateTouristDestinationSchema(dest: Destination) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    '@id': `${baseUrl}/destinations/${dest.slug}#destination`,
    name: `${dest.name}, Kerala`,
    description: dest.shortDescription,
    touristType: ['Eco Tourism', 'Heritage', 'Honeymoon', 'Nature Lovers', 'Family'],
    image: dest.heroImage,
    url: `${baseUrl}/destinations/${dest.slug}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: dest.slug === 'munnar' ? 10.0889 : dest.slug === 'alleppey' ? 9.4981 : 10.0,
      longitude: dest.slug === 'munnar' ? 77.0595 : dest.slug === 'alleppey' ? 76.3388 : 76.5,
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: dest.district,
      containedInPlace: {
        '@type': 'State',
        name: 'Kerala, India',
      },
    },
    includesAttraction: dest.topAttractions.map((att) => ({
      '@type': 'TouristAttraction',
      name: att.name,
      description: att.description,
    })),
  };
}

export function generateTourPackageSchema(pkg: TourPackage) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${baseUrl}/packages/${pkg.slug}#trip`,
    name: pkg.title,
    description: pkg.overview,
    touristType: pkg.theme,
    offers: {
      '@type': 'Offer',
      price: pkg.priceINR,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
      url: `${baseUrl}/packages/${pkg.slug}`,
    },
    provider: {
      '@type': 'TravelAgency',
      name: AGENCY_DATA.name,
      url: baseUrl,
    },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: pkg.itinerary.length,
      itemListElement: pkg.itinerary.map((day, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: `Day ${day.day}: ${day.title}`,
        description: day.description,
      })),
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: BlogPost) {
  const baseUrl = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.heroImage,
    datePublished: article.publishDate,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: AGENCY_DATA.name,
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/travel-guides/${article.slug}`,
    },
  };
}
