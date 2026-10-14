export interface DayPlan {
  day: number;
  title: string;
  description: string;
  mealsIncluded: string;
  stayLocation: string;
  activities: string[];
}

export interface TourPackage {
  slug: string;
  title: string;
  subtitle: string;
  durationDays: number;
  durationNights: number;
  destinationRoute: string;
  destinationSlugs: string[];
  theme: 'Backwaters' | 'Hill Station' | 'Honeymoon' | 'Family' | 'Cultural' | 'Wildlife';
  priceINR: number;
  originalPriceINR?: number;
  priceNote: string;
  heroImage: string;
  featured: boolean;
  rating: number;
  reviewCount: number;
  overview: string;
  itinerary: DayPlan[];
  inclusions: string[];
  exclusions: string[];
  vehicleDetails: string;
  accommodationType: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    slug: 'kerala-highlights-6-day',
    title: 'Essence of Kerala: Kochi, Munnar, Thekkady & Alleppey',
    subtitle: 'The quintessential 6-day classical circuit connecting misty tea gardens, wildlife sanctuaries, and private backwater houseboats.',
    durationDays: 6,
    durationNights: 5,
    destinationRoute: 'Kochi → Munnar (2N) → Thekkady (1N) → Alleppey (1N) → Kochi',
    destinationSlugs: ['kochi', 'munnar', 'thekkady', 'alleppey'],
    theme: 'Family',
    priceINR: 24500,
    originalPriceINR: 28000,
    priceNote: 'per person on twin sharing basis (inclusive of private AC car, stays, houseboat & breakfast)',
    heroImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    rating: 4.9,
    reviewCount: 312,
    overview: 'Our most sought-after signature itinerary crafted for first-time visitors to Kerala. From colonial Fort Kochi’s Chinese fishing nets to the crisp tea estates of Munnar, wildlife viewing in Periyar, and an exclusive overnight cruise on a deluxe Kettuvallam houseboat in Alleppey.',
    vehicleDetails: 'Private air-conditioned Sedan (Etios/Dzire) for up to 3 persons or Innova Crysta for 4-6 persons with verified local English/Hindi chauffeur.',
    accommodationType: 'Handpicked 3-Star & 4-Star Boutique Resorts + Private Deluxe Houseboat with all meals',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kochi & Scenic Highlands Transfer to Munnar',
        description: 'Meet and greet by your dedicated chauffeur at Cochin International Airport (COK) or Ernakulam Railway Station. Depart for Munnar (110 km / 4 hrs). En route, pause at Cheeyappara and Valara waterfalls amidst verdant forests. Check into your tea valley resort.',
        mealsIncluded: 'Dinner at Resort',
        stayLocation: 'Munnar Valley Resort',
        activities: ['Airport pickup', 'Cheeyappara Waterfall photo stop', 'Spice garden introductory walk', 'Resort check-in & leisure'],
      },
      {
        day: 2,
        title: 'Munnar Tea Estates & Nilgiri Tahr Safari',
        description: 'Early breakfast before visiting Eravikulam National Park to witness the endangered Nilgiri Tahr roaming wild grasslands. Afterwards, tour the historic Tata Tea Museum to watch live tea processing. Afternoon boating at Mattupetty Dam and shouting across Echo Point.',
        mealsIncluded: 'Breakfast & Dinner',
        stayLocation: 'Munnar Valley Resort',
        activities: ['Eravikulam National Park morning safari', 'Tea Museum and tea tasting', 'Mattupetty Dam boat ride', 'Echo Point', 'Munnar local market shopping'],
      },
      {
        day: 3,
        title: 'Munnar to Thekkady (Periyar Wildlife & Spice Hills)',
        description: 'Post breakfast, drive through the aromatic Cardamom Hills to Thekkady (85 km / 3 hrs). Afternoon boat cruise on Periyar Lake inside the Periyar Tiger Reserve to spot wild elephants and sambar deer. Evening Kalaripayattu martial arts performance.',
        mealsIncluded: 'Breakfast & Dinner',
        stayLocation: 'Thekkady Jungle Lodge',
        activities: ['Cardamom plantation mountain drive', 'Periyar Lake wildlife boat cruise', 'Spice garden guided walk', 'Evening Kalaripayattu show'],
      },
      {
        day: 4,
        title: 'Thekkady to Alleppey Backwaters & Houseboat Check-in',
        description: 'Descend the Western Ghats towards the tranquil backwaters of Alleppey (135 km / 3.5 hrs). Board your private, thatched Kettuvallam houseboat by 12:30 PM with a welcoming fresh tender coconut. Glide across Vembanad Lake while the onboard chef cooks authentic Kerala pearl spot fish (Karimeen) and delicacies.',
        mealsIncluded: 'Breakfast, Traditional Onboard Lunch, Evening Tea & Dinner',
        stayLocation: 'Private Deluxe Kettuvallam Houseboat',
        activities: ['Houseboat boarding ceremony', 'Vembanad Lake cruise', 'Kuttanad below-sea-level canals', 'Onboard fresh culinary tasting', 'Night stay on anchored boat'],
      },
      {
        day: 5,
        title: 'Alleppey to Fort Kochi Heritage Exploration',
        description: 'Enjoy breakfast as the boat cruises past morning village life. Check out at 09:00 AM and drive to Fort Kochi (55 km / 1.5 hrs). Explore the cantilevered Chinese fishing nets, India’s oldest European church (St. Francis), the 1568 Paradesi Synagogue, and the antique alleys of Jew Town.',
        mealsIncluded: 'Breakfast & Dinner',
        stayLocation: 'Fort Kochi Heritage Hotel',
        activities: ['Morning backwater disembarkation', 'Chinese Fishing Nets observation', 'St. Francis Church', 'Jew Town antique bazaar', 'Mattancherry Dutch Palace'],
      },
      {
        day: 6,
        title: 'Kochi Departure & Sweet Memories',
        description: 'Leisurely breakfast at your hotel. Depending on your flight or train schedule, enjoy last-minute souvenir shopping for pure spices, banana chips, and Kerala handloom sarees. Seamless transfer to Cochin International Airport for your onward journey.',
        mealsIncluded: 'Breakfast',
        stayLocation: 'Departure',
        activities: ['Souvenir & organic spice shopping', 'Airport/station drop-off with departure assistance'],
      },
    ],
    inclusions: [
      '5 Nights accommodation (4 nights resort + 1 night private Kettuvallam houseboat)',
      'All meals on the houseboat (Lunch, High Tea, Dinner, Breakfast prepared fresh by private chef)',
      'Daily lavish buffet breakfast at all mountain & heritage resorts',
      'Exclusive air-conditioned private vehicle throughout the entire tour (Airport to Airport)',
      'Driver allowances, state road permits, toll charges, fuel, and parking fees',
      'Eravikulam National Park and Periyar Lake boat safari assistance',
      '24/7 dedicated Kerala Vistas concierge support during your stay',
    ],
    exclusions: [
      'Airfare or train tickets to/from Kochi',
      'Monument entrance fees and optional adventure activities',
      'Personal expenses (laundry, telephone calls, alcoholic beverages)',
      'Anything not explicitly mentioned in the inclusions',
    ],
  },
  {
    slug: 'munnar-misty-hills-3-day',
    title: 'Munnar Tea Highlands & Cloud Trails',
    subtitle: 'A revitalizing 3-day mountain retreat designed for nature lovers, fresh mountain air, and breathtaking high-altitude viewpoints.',
    durationDays: 3,
    durationNights: 2,
    destinationRoute: 'Kochi → Munnar (2N) → Kochi',
    destinationSlugs: ['munnar', 'kochi'],
    theme: 'Hill Station',
    priceINR: 13900,
    originalPriceINR: 16500,
    priceNote: 'per person on twin sharing basis (inclusive of private AC cab, 4-star view resort & daily breakfast)',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    rating: 4.8,
    reviewCount: 184,
    overview: 'Escape into the cool, eucalyptus-scented high ranges of Munnar. This compact 3-day itinerary takes you to the finest viewpoints, private tea plantations, cascading waterfalls, and the world’s highest organic tea estate at Kolukkumalai.',
    vehicleDetails: 'Private air-conditioned Sedan / SUV with mountain-certified chauffeur.',
    accommodationType: '4-Star Mountain View Resort with private balcony facing tea gardens',
    itinerary: [
      {
        day: 1,
        title: 'Kochi to Munnar – The Ascent into Clouds',
        description: 'Morning pickup from Kochi. Ascend the scenic ghat road with stops at Cheeyappara Falls and Valara Falls. Check into your tea plantation resort. Evening walk through private tea trails.',
        mealsIncluded: 'Welcome Drink & Dinner',
        stayLocation: 'Munnar Tea Valley Resort',
        activities: ['Highland scenic transfer', 'Cheeyappara waterfalls', 'Tea garden sunset stroll'],
      },
      {
        day: 2,
        title: 'Eravikulam Wildlife, Top Station & Mattupetty',
        description: 'Morning excursion to Eravikulam National Park to spot the Nilgiri Tahr. Drive up to Top Station for jaw-dropping vistas over the Western Ghats ridge. Afternoon boating at Mattupetty Dam and visit to Echo Point.',
        mealsIncluded: 'Breakfast & Dinner',
        stayLocation: 'Munnar Tea Valley Resort',
        activities: ['Eravikulam National Park', 'Top Station valley views', 'Mattupetty lake cruise', 'Echo Point'],
      },
      {
        day: 3,
        title: 'Tea Factory Experience & Return to Kochi',
        description: 'Tour the KDHP Tea Museum to discover the legacy of Ceylon and Scottish tea planters. Taste fresh orthodox and CTC teas. Return drive to Kochi for your onward flight or train.',
        mealsIncluded: 'Breakfast',
        stayLocation: 'Departure',
        activities: ['Tea Museum guided tour', 'Estate spice shopping', 'Return transfer to Kochi'],
      },
    ],
    inclusions: [
      '2 Nights in a premium balcony room overlooking tea terraces',
      'Daily breakfast and dinner at the resort restaurant',
      'Private dedicated AC vehicle from Kochi pickup to Kochi drop-off',
      'All toll taxes, state permits, and driver charges',
      'Complimentary guided plantation walk with resort naturalist',
    ],
    exclusions: [
      'Jeep safari charges to Kolukkumalai (optional)',
      'Personal expenditures and tips',
    ],
  },
  {
    slug: 'alleppey-houseboat-luxury-cruise',
    title: 'Vembanad Lake Private Houseboat & Backwaters',
    subtitle: 'An intimate 2-day slow travel experience aboard a traditional thatched Kettuvallam rice barge with a dedicated private crew.',
    durationDays: 2,
    durationNights: 1,
    destinationRoute: 'Kochi / Alleppey → Vembanad Backwaters (1N) → Kochi',
    destinationSlugs: ['alleppey', 'kochi'],
    theme: 'Backwaters',
    priceINR: 11500,
    originalPriceINR: 13500,
    priceNote: 'per person (includes exclusive private 1-bedroom AC houseboat, private chef & all meals)',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    rating: 5.0,
    reviewCount: 245,
    overview: 'Nothing encapsulates the magic of Kerala quite like drifting along tranquil backwaters aboard your own private houseboat. Savor freshly caught Pearl Spot fish cooked in banana leaf, watch village life unfold on palm-shaded banks, and fall asleep under star-studded skies.',
    vehicleDetails: 'Private AC transfer from Kochi to Alleppey jetty and return.',
    accommodationType: 'Private Certified Kettuvallam Houseboat with AC bedroom and ensuite bathroom',
    itinerary: [
      {
        day: 1,
        title: 'Boarding & Serene Backwater Cruise',
        description: 'Pickup from Kochi and transfer to Alleppey jetty. Board your private houseboat at 12:30 PM with tender coconut welcome. Cruise through Vembanad Lake and narrow palm-canopied canals. Savor hot Kerala lunch with local fish and vegetables. Anchor by 5:30 PM for sunset.',
        mealsIncluded: 'Lunch, High Tea & Snacks, Dinner',
        stayLocation: 'Private Houseboat on Vembanad Lake',
        activities: ['Private houseboat boarding', 'Backwater canal cruise', 'Village life photography', 'Gourmet Kerala cuisine prepared on board'],
      },
      {
        day: 2,
        title: 'Morning Canal Breeze & Village Life',
        description: 'Wake up to the gentle chirping of kingfishers and cormorants. Morning cruise through narrow paddy canals while enjoying piping hot Appam and vegetable stew. Check out at 09:00 AM and transfer back to Kochi or Marari Beach.',
        mealsIncluded: 'Traditional Kerala Breakfast',
        stayLocation: 'Departure',
        activities: ['Sunrise over Vembanad Lake', 'Morning village canoe excursion', 'Return transfer to Kochi'],
      },
    ],
    inclusions: [
      'Exclusive private houseboat stay (no sharing with strangers)',
      'Dedicated 3-person crew: Captain, Navigator, and Private Chef',
      'All meals: Lunch, Evening Snacks with Kerala banana fritters, 4-course Dinner, Breakfast',
      'Air conditioning in bedroom with attached private modern bathroom',
      'Private round-trip transfers from Kochi',
    ],
    exclusions: [
      'Alcoholic drinks (guests are welcome to bring their own)',
      'Personal expenses and gratuities for the crew',
    ],
  },
  {
    slug: 'romantic-kerala-honeymoon-special',
    title: 'Romantic Kerala: Mist, Treehouse & Backwaters',
    subtitle: 'A bespoke 7-day romantic journey featuring a private treehouse in Munnar, candlelit dinners, flower bed decorations, and private houseboat cruise.',
    durationDays: 7,
    durationNights: 6,
    destinationRoute: 'Kochi → Munnar (3N, incl. 1N Treehouse) → Thekkady (1N) → Alleppey (1N Houseboat) → Marari Beach (1N) → Kochi',
    destinationSlugs: ['kochi', 'munnar', 'thekkady', 'alleppey'],
    theme: 'Honeymoon',
    priceINR: 32000,
    originalPriceINR: 38000,
    priceNote: 'per person on twin sharing (inclusive of treehouse, private houseboat, honeymoon specials & AC cab)',
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    rating: 4.9,
    reviewCount: 167,
    overview: 'Crafted especially for couples celebrating weddings and anniversaries. Blend secluded misty hill stations, an authentic treetop bungalow experience in the Western Ghats, spice plantation tranquility, and a private backwater sunset dinner on Vembanad Lake.',
    vehicleDetails: 'Private luxury air-conditioned sedan with courteous, discreet driver-guide.',
    accommodationType: 'Luxury Boutique Resorts + 1 Night Rainforest Treehouse + Private Honeymoon Houseboat',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kochi & Journey to Munnar Highlands',
        description: 'Warm welcome at Kochi airport with fresh jasmine garlands. Scenic drive to Munnar with photo stops at Cheeyappara and Valara waterfalls. Check into your luxury valley resort. Honeymoon welcome cake on arrival.',
        mealsIncluded: 'Dinner & Welcome Honeymoon Cake',
        stayLocation: 'Munnar Luxury Resort',
        activities: ['Jasmine flower welcome', 'Scenic mountain drive', 'Candlelit welcome dinner'],
      },
      {
        day: 2,
        title: 'Munnar Sightseeing & Romantic Viewpoints',
        description: 'Visit Eravikulam National Park and the aromatic spice hills. Afternoon picnic and leisurely boating at Mattupetty Dam. Evening couples tea-tasting experience.',
        mealsIncluded: 'Breakfast & Dinner',
        stayLocation: 'Munnar Luxury Resort',
        activities: ['Eravikulam National Park', 'Mattupetty Lake boat ride', 'Tea tasting'],
      },
      {
        day: 3,
        title: 'Experience an Authentic Rainforest Treehouse',
        description: 'Check into an eco-luxury treehouse perched 40 feet high above the rainforest canopy. Enjoy the sounds of rustling leaves, birds, and an exclusive candlelit dinner served under the stars.',
        mealsIncluded: 'Breakfast & Candlelit Dinner',
        stayLocation: 'Rainforest Treehouse Retreat',
        activities: ['Treehouse check-in', 'Private jungle trail walk', 'Romantic candlelit dinner'],
      },
      {
        day: 4,
        title: 'Spice Valley of Thekkady',
        description: 'Drive along the Cardamom hills to Thekkady. Private guided stroll through an organic spice garden. Evening boat cruise on Periyar Lake.',
        mealsIncluded: 'Breakfast & Dinner',
        stayLocation: 'Thekkady Heritage Resort',
        activities: ['Spice plantation tour', 'Periyar Lake boat cruise', 'Traditional cultural show'],
      },
      {
        day: 5,
        title: 'Private Alleppey Houseboat with Candlelight Dinner',
        description: 'Board your private honeymoon houseboat. Decorated bedroom with fragrant fresh flowers. Romantic sunset cruise followed by a four-course candlelit dinner on the open deck.',
        mealsIncluded: 'Breakfast, Lunch, High Tea & Romantic Candlelit Dinner',
        stayLocation: 'Private Honeymoon Houseboat',
        activities: ['Honeymoon floral bed setup', 'Private sunset backwater cruise', 'Deck candlelight dinner'],
      },
      {
        day: 6,
        title: 'Serene Marari Beach Coastal Relaxation',
        description: 'Disembark at Alleppey and drive 30 minutes to Marari Beach. Check into a beachfront cottage with private hammock. Spend the afternoon walking along quiet golden sands.',
        mealsIncluded: 'Breakfast & Dinner',
        stayLocation: 'Marari Beachfront Resort',
        activities: ['Secluded beach walk', 'Sunset over the Arabian Sea', 'Ayurvedic couples rejuvenation massage (optional)'],
      },
      {
        day: 7,
        title: 'Departure via Kochi',
        description: 'Breakfast by the sea. Transfer to Cochin International Airport (1.5 hours) with memories to last a lifetime.',
        mealsIncluded: 'Breakfast',
        stayLocation: 'Departure',
        activities: ['Beachside breakfast', 'Airport drop-off'],
      },
    ],
    inclusions: [
      '6 Nights accommodation including 1 Night Rainforest Treehouse & 1 Night Private Houseboat',
      'Honeymoon inclusions: Flower bed decoration, Honeymoon cake, and 2 Candlelit dinners',
      'Daily breakfast and dinner throughout',
      'All meals on the private houseboat',
      'Private dedicated AC vehicle throughout the tour',
      'Complimentary spice basket and Kerala souvenir pack',
    ],
    exclusions: [
      'Optional Ayurvedic spa therapies at Marari',
      'Air tickets and personal items',
    ],
  },
  {
    slug: 'wayanad-nature-wildlife-escape',
    title: 'Wayanad Rainforest, Bamboo Groves & Wildlife',
    subtitle: 'A 4-day immersive nature journey across ancient caves, heart-shaped mountain lakes, and coffee plantations.',
    durationDays: 4,
    durationNights: 3,
    destinationRoute: 'Calicut / Kochi → Wayanad (3N) → Calicut',
    destinationSlugs: ['wayanad'],
    theme: 'Wildlife',
    priceINR: 16800,
    priceNote: 'per person on twin sharing (inclusive of private AC vehicle, plantation villa & breakfast)',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    rating: 4.8,
    reviewCount: 98,
    overview: 'Discover Wayanad’s untouched biodiversity. Climb to prehistoric petroglyphs inside Edakkal Caves, marvel at Banasura Sagar Dam’s island-strewn reservoir, and embark on a thrilling jeep safari inside the Wayanad Wildlife Sanctuary.',
    vehicleDetails: 'Private AC vehicle with expert hill driver.',
    accommodationType: 'Eco-Luxury Plantation Resort with infinity pool facing rainforest',
    itinerary: [
      {
        day: 1,
        title: 'Arrival via Calicut & Ascent to Wayanad',
        description: 'Pickup from Calicut Airport or Railway Station. Climb the legendary 9 hairpin bends of Thamarassery Churam. Check into your coffee plantation resort.',
        mealsIncluded: 'Dinner',
        stayLocation: 'Wayanad Plantation Estate',
        activities: ['Churam viewpoint stop', 'Resort check-in', 'Coffee plantation stroll'],
      },
      {
        day: 2,
        title: 'Edakkal Caves & Soochipara Waterfalls',
        description: 'Trek up to Edakkal Caves to observe 6,000-year-old rock art. Afternoon visit to the three-tiered Soochipara (Sentinel Rock) waterfalls cascading into natural rock pools.',
        mealsIncluded: 'Breakfast & Dinner',
        stayLocation: 'Wayanad Plantation Estate',
        activities: ['Edakkal Caves prehistoric walk', 'Soochipara waterfall hike'],
      },
      {
        day: 3,
        title: 'Banasura Sagar Dam & Muthanga Wildlife Safari',
        description: 'Visit India’s largest earthen dam at Banasura Sagar. Afternoon wildlife jeep safari in Muthanga Sanctuary to spot wild elephants, deer, and peafowl.',
        mealsIncluded: 'Breakfast & Dinner',
        stayLocation: 'Wayanad Plantation Estate',
        activities: ['Banasura Sagar speedboating', 'Muthanga wildlife safari'],
      },
      {
        day: 4,
        title: 'Pookode Lake & Return to Calicut',
        description: 'Rowboat on serene freshwater Pookode Lake surrounded by evergreen forests. Depart down the ghat pass for Calicut airport/station.',
        mealsIncluded: 'Breakfast',
        stayLocation: 'Departure',
        activities: ['Pookode lake visit', 'Handmade bamboo crafts shopping', 'Calicut transfer'],
      },
    ],
    inclusions: [
      '3 Nights accommodation in an eco-plantation resort',
      'Daily breakfast and dinner',
      'Private AC vehicle for all transfers and sightseeing',
      'Plantation tour with estate manager',
    ],
    exclusions: [
      'Jeep safari tickets and boating charges',
      'Personal expenses',
    ],
  },
];
