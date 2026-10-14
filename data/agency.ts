export interface AgencyInfo {
  name: string;
  legalName: string;
  tagline: string;
  foundingYear: number;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  whatsappNumber: string;
  email: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    countryCode: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  officeHours: string;
  emergencySupport: string;
  accreditations: string[];
  stats: {
    happyGuests: string;
    verifiedTrips: string;
    destinationsCovered: string;
    googleRating: number;
    reviewsCount: number;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const AGENCY_DATA: AgencyInfo = {
  name: 'Kerala Vistas Journeys',
  legalName: 'Kerala Vistas Holidays & Destination Management Pvt. Ltd.',
  tagline: "Authentic, Handcrafted Kerala Holidays by Local Travel Specialists",
  foundingYear: 2012,
  phone: '+91 98470 12345',
  displayPhone: '+91 (0) 98470 12345',
  whatsapp: 'https://wa.me/919847012345?text=Hello%20Kerala%20Vistas%2C%20I%20am%20planning%20a%20trip%20to%20Kerala.%20Please%20assist%20me.',
  whatsappNumber: '+91 98470 12345',
  email: 'enquiries@keralavistas.com',
  address: {
    street: '14/320 KB Jacob Road, Near St. Francis Church',
    locality: 'Fort Kochi',
    city: 'Kochi',
    state: 'Kerala',
    postalCode: '682001',
    country: 'India',
    countryCode: 'IN',
  },
  geo: {
    latitude: 9.9674,
    longitude: 76.2427,
  },
  officeHours: 'Monday - Saturday: 09:00 AM - 07:30 PM IST',
  emergencySupport: '24/7 dedicated on-tour guest helpline across Kerala',
  accreditations: [
    'Approved by Kerala Tourism Department (Govt. of Kerala)',
    'Member of Tour Operators Association of Kerala (TOAK)',
    'Certified Green Palm Eco-Tourism Partner',
    'Member of IATO (Indian Association of Tour Operators)',
  ],
  stats: {
    happyGuests: '18,500+',
    verifiedTrips: '4,200+',
    destinationsCovered: '14 Districts',
    googleRating: 4.9,
    reviewsCount: 680,
  },
  features: [
    {
      title: '100% Native Kerala Experts',
      description: 'Born and raised in God’s Own Country, our travel designers know secret tea trails, secluded backwater canals, and authentic village eateries.',
      icon: 'Compass',
    },
    {
      title: 'Private Chauffeur & Sanitized Fleet',
      description: 'Dedicated air-conditioned vehicles (Sedans, Innova Crysta, Urbania) with courteous, vetted English and Hindi-speaking driver-guides.',
      icon: 'Car',
    },
    {
      title: 'Verified Heritage & Houseboat Stays',
      description: 'Direct partnerships with green-certified Kettuvallam houseboats, spice estate colonial bungalows, and treehouse retreats.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Zero Hidden Charges & Flexible Bookings',
      description: 'Transparent pricing with tax and toll inclusions. Free itinerary customization and flexible rescheduling policies.',
      icon: 'BadgePercent',
    },
  ],
};
