export interface Attraction {
  name: string;
  category: string;
  description: string;
  timings?: string;
  ticketPrice?: string;
  travelTip?: string;
}

export interface DestinationFAQ {
  question: string;
  answer: string;
}

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  district: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: string[];
  idealDurationDays: string;
  bestTimeToVisit: string;
  altitude: string;
  distanceFromCochinAirport: string;
  nearestRailwayStation: string;
  temperatureRange: {
    summer: string;
    winter: string;
    monsoon: string;
  };
  highlights: string[];
  topAttractions: Attraction[];
  howToReach: {
    byAir: string;
    byTrain: string;
    byRoad: string;
  };
  insiderTips: string[];
  faqs: DestinationFAQ[];
  popularPackageSlugs: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'munnar',
    name: 'Munnar',
    tagline: 'The Emerald Mist & Sprawling Tea Gardens of the Western Ghats',
    district: 'Idukki District',
    shortDescription: 'Perched at 1,600m above sea level, Munnar is south India’s premier hill station, renowned for rolling tea plantations, mist-covered valleys, endangered Nilgiri Tahr, and cool mountain air.',
    fullDescription: 'Nestled at the confluence of three mountain streams—Mudrapuzha, Nallathanni, and Kundala—Munnar was once the favored summer resort of the British administration in South India. Today, it offers emerald-carpeted rolling hills, colonial tea bungalows, spice scented mountain breezes, and trekking trails leading to South India’s highest peak, Anamudi (2,695m). Whether you are walking through the historic Tata Tea Museum, watching wild elephants near Mattupetty Lake, or catching the sunrise above the cloud carpet at Kolukkumalai, Munnar promises an unforgettable highlands retreat.',
    heroImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    ],
    idealDurationDays: '2 to 3 Days',
    bestTimeToVisit: 'September to March (Pleasant weather, 10°C to 25°C)',
    altitude: '1,600 m (5,200 ft) above sea level',
    distanceFromCochinAirport: '110 km (approx. 3.5 to 4 hours scenic ghat drive via NH 85)',
    nearestRailwayStation: 'Aluva (AWY) - 110 km or Ernakulam Junction (ERS) - 130 km',
    temperatureRange: {
      summer: '19°C – 32°C (March to May)',
      winter: '10°C – 22°C (December to February; can drop to 5°C in high ridges)',
      monsoon: '16°C – 24°C (June to August; heavy picturesque downpours)',
    },
    highlights: [
      'Vast emerald tea plantations that stretch to the horizon',
      'Eravikulam National Park, home to the endangered Nilgiri Tahr mountain goat',
      'Kolukkumalai Tea Estate – the world’s highest organic tea garden (2,160m)',
      'Scenic boat rides on Mattupetty Dam surrounded by dense shola forests',
      'En-route cascading waterfalls: Cheeyappara and Valara falls',
    ],
    topAttractions: [
      {
        name: 'Eravikulam National Park (Rajamalai)',
        category: 'Wildlife & Nature Reserve',
        description: 'Spanning 97 sq km of rolling high-altitude grassland and shola forest. Visitors take eco-buses up to Rajamalai to observe the rare Nilgiri Tahr walking right along the designated visitor path.',
        timings: '07:30 AM – 04:00 PM (Closed Feb–March during Nilgiri Tahr calving season)',
        ticketPrice: '₹200 for Indian adults, ₹500 for foreign nationals (Online advance booking recommended)',
        travelTip: 'Book entry slots via the Kerala Forest Department portal in advance to avoid long weekend queues.',
      },
      {
        name: 'KDHP Tea Museum (Nullatanni)',
        category: 'Cultural & Heritage',
        description: 'Housed inside the Nullatanni Estate, this museum showcases the century-old evolution of Munnar from an uninhabited jungle into South India’s tea capital, complete with vintage roller machines and live tasting.',
        timings: '09:00 AM – 04:00 PM (Closed on Mondays)',
        ticketPrice: '₹125 per person (includes tasting demonstration)',
        travelTip: 'Catch the 30-minute documentary on the pioneers who carved roads into the high ranges.',
      },
      {
        name: 'Mattupetty Dam & Lake',
        category: 'Sightseeing & Boating',
        description: 'A gravity dam built in the 1950s that holds an expansive reservoir. Speedboats and slow pontoon boats cruise the calm waters where wild herds of Asian elephants frequently drink near the forest edge.',
        timings: '09:00 AM – 05:00 PM',
        ticketPrice: '₹500 for 5-person speedboat (15 mins)',
        travelTip: 'Combine this with a stop at Echo Point, located just 5 km ahead along the Kundala road.',
      },
      {
        name: 'Kolukkumalai Sunrise Point',
        category: 'Adventure & Sunrise',
        description: 'Accessible via a rugged 4x4 Jeep ride from Suryanelli, Kolukkumalai perches on the border of Kerala and Tamil Nadu. The sunrise over an ocean of mist with craggy peaks piercing through is world-famous.',
        timings: 'Jeep departures start around 04:30 AM from Suryanelli',
        ticketPrice: 'Jeep hire approx. ₹2,500 – ₹3,000 for up to 6 passengers',
        travelTip: 'Wear windbreakers and warm layers; ridge temperatures often drop below 8°C before dawn.',
      },
      {
        name: 'Top Station',
        category: 'Panoramic Viewpoint',
        description: 'The historic transshipment station for tea leaf ropeways, Top Station sits at 1,700m and provides an awe-inspiring 360-degree panoramic view over the plains of Tamil Nadu and Kerala valleys.',
        timings: '06:00 AM – 06:00 PM',
        ticketPrice: '₹50 entry fee',
        travelTip: 'Visit before 11:00 AM before afternoon clouds roll in and obscure the valley vista.',
      },
    ],
    howToReach: {
      byAir: 'Cochin International Airport (COK) is the nearest airport, located 110 km away. Private AC taxis arranged by Kerala Vistas take approximately 3.5 to 4 hours via the newly widened Kochi-Dhanushkodi Highway (NH 85).',
      byTrain: 'Nearest major railheads are Aluva (110 km) and Ernakulam Junction (130 km). From the station, comfortable chauffeured transfer takes you straight through Kothamangalam and Neriamangalam forest checkpoints.',
      byRoad: 'Well-connected by scenic state and national highways from Kochi, Madurai (150 km), and Coimbatore (160 km). The drive through Neriamangalam bridge and Cheeyappara waterfall is one of the most photographed road journeys in India.',
    },
    insiderTips: [
      'Stop at Valara and Cheeyappara waterfalls along NH 85 for fresh tender coconut and spiced hot banana fritters (pazham pori).',
      'The blooming of Neelakurinji (Strobilanthes kunthiana) occurs once every 12 years, carpeting the hills in purple-blue (next cycle expected 2030).',
      'Always purchase genuine GI-tagged Munnar spices (green cardamom, Malabar black pepper, wild clove) directly from certified estate counters rather than highway gift stalls.',
    ],
    faqs: [
      {
        question: 'How many days are recommended for a visit to Munnar?',
        answer: 'We recommend at least 2 full nights (3 days) to comfortably experience the prime sights (Eravikulam, Mattupetty, Tea Museum) without rushing the 4-hour mountain drive from Kochi.',
      },
      {
        question: 'When is the Eravikulam National Park closed?',
        answer: 'The park is typically closed for about 6 to 8 weeks annually between late January and early April for the breeding and calving season of the endangered Nilgiri Tahr. All other Munnar attractions remain open.',
      },
      {
        question: 'Is Munnar safe to visit during the monsoon season (June–August)?',
        answer: 'Monsoon in Munnar is breathtakingly lush with full waterfalls and dramatic mist. Our chauffeurs monitor mountain road advisories daily. Light rainfall is common, making it ideal for Ayurvedic wellness stays and tea estate relaxation.',
      },
    ],
    popularPackageSlugs: ['munnar-misty-hills-3-day', 'kerala-highlights-6-day', 'romantic-kerala-honeymoon-special'],
  },
  {
    slug: 'alleppey',
    name: 'Alleppey (Alappuzha)',
    tagline: 'The Venice of the East & World-Famous Backwaters of Vembanad Lake',
    district: 'Alappuzha District',
    shortDescription: 'Famed for labyrinthine canals, lush paddy fields below sea level, and iconic thatched Kettuvallam houseboats drifting along palm-fringed lagoons.',
    fullDescription: 'Alappuzha (popularly known as Alleppey) is the backwater capital of India. Interconnected by emerald canals, calm lagoons, and the vast expanse of Vembanad Lake, Alleppey is an aquatic wonderland. Here, traditional wooden rice barges (Kettuvallams) have been repurposed into luxurious floating suites staffed with a personal captain, navigator, and private chef who cooks fresh Karimeen fish and authentic Kerala curries right on board.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80',
    ],
    idealDurationDays: '1 to 2 Days',
    bestTimeToVisit: 'October to March (Gentle breeze, sunny skies, comfortable humidity)',
    altitude: 'Sea level (0 – 1 m)',
    distanceFromCochinAirport: '85 km (approx. 2 to 2.5 hours via NH 66)',
    nearestRailwayStation: 'Alappuzha Railway Station (ALLP) - 4 km from boat jetty',
    temperatureRange: {
      summer: '26°C – 35°C (March to May)',
      winter: '22°C – 32°C (November to February)',
      monsoon: '24°C – 29°C (June to September)',
    },
    highlights: [
      'Overnight stay on a certified private Kettuvallam houseboat',
      'Cruising the narrow Kuttanad canals where farming takes place below sea level',
      'Traditional Kerala meals cooked on board featuring pearl spot fish (Karimeen)',
      'Watching the Nehru Trophy Snake Boat Race trials (August/September)',
      'Sunset strolls along the historic 150-year-old Alleppey sea pier',
    ],
    topAttractions: [
      {
        name: 'Vembanad Lake Backwater Network',
        category: 'Backwaters & Cruises',
        description: 'India’s longest lake and the heart of Kerala backwater life. Houseboats navigate through tranquil waters bordered by coconut groves, quaint duck farms, and rural fishing hamlets.',
        timings: 'Day cruises run 11:30 AM to 05:00 PM; overnight stays check in 12:30 PM and check out 09:00 AM next day.',
      },
      {
        name: 'Kuttanad Farming Region',
        category: 'Rural Heritage',
        description: 'One of the few places on Earth where farming is carried out 1.2 to 3 meters below sea level through an intricate system of bio-bunds and dykes, recognized by UNESCO.',
      },
      {
        name: 'Alleppey Beach & Lighthouse',
        category: 'Beach & Coastal History',
        description: 'Historic beach featuring the remnants of a 150-year-old pier extending into the Arabian Sea, flanked by a 19th-century maritime lighthouse offering panoramic ocean views.',
      },
    ],
    howToReach: {
      byAir: 'Cochin International Airport (85 km) is 2.5 hours away. Trivandrum Airport (TRV) is 150 km south.',
      byTrain: 'Alappuzha Station has direct express trains from Chennai, Bengaluru, Mumbai, and Delhi.',
      byRoad: 'Smooth coastal highway NH 66 connects Alleppey directly with Kochi (53 km) and Marari Beach (16 km).',
    },
    insiderTips: [
      'Overnight houseboats anchor by 5:30 PM as per Kerala Fisheries Department regulations to allow local fishermen to lay out nocturnal fishing nets.',
      'For exploring village canals too narrow for large houseboats, Kerala Vistas arranges complimentary 1-hour country canoe (shikara) rides.',
    ],
    faqs: [
      {
        question: 'What is included in an overnight houseboat booking?',
        answer: 'Our private houseboat bookings include exclusive boat use, welcome tender coconut, lunch, evening tea with Kerala snacks (pazham pori), traditional dinner, and breakfast prepared fresh by your onboard chef.',
      },
      {
        question: 'Are houseboats air-conditioned?',
        answer: 'Yes! All our deluxe and luxury houseboats feature modern air-conditioned bedrooms with ensuite bathrooms. Standard AC operates from 9:00 PM to 6:00 AM, while our Premium/Luxury category offers 24-hour full-boat AC.',
      },
    ],
    popularPackageSlugs: ['alleppey-houseboat-luxury-cruise', 'kerala-highlights-6-day', 'romantic-kerala-honeymoon-special'],
  },
  {
    slug: 'wayanad',
    name: 'Wayanad',
    tagline: 'Highland Rainforests, Ancient Edakkal Petroglyphs & Verdant Peaks',
    district: 'Wayanad District',
    shortDescription: 'Perched in the northern Western Ghats, Wayanad is renowned for prehistoric rock shelters, cascading Meenmutty waterfalls, sprawling coffee plantations, and mist-laden trekking trails.',
    fullDescription: 'Located at altitudes between 700 and 2,100 meters, Wayanad is Kerala’s green paradise of plantations, wilderness sanctuaries, and ancient tribes. From exploring Neolithic petroglyphs at Edakkal Caves to trekking to the heart-shaped lake on Chembra Peak, Wayanad offers a peaceful, bio-diverse mountain sanctuary away from typical tourist crowds.',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
    ],
    idealDurationDays: '3 to 4 Days',
    bestTimeToVisit: 'October to May',
    altitude: '700 m to 2,100 m',
    distanceFromCochinAirport: '220 km (approx. 6 hours) or 85 km from Calicut Airport (CCJ)',
    nearestRailwayStation: 'Kozhikode / Calicut (CLT) - 80 km',
    temperatureRange: {
      summer: '20°C – 32°C',
      winter: '12°C – 25°C',
      monsoon: '18°C – 24°C',
    },
    highlights: [
      'Neolithic engravings at the 1,200m high Edakkal Caves',
      'Chembra Peak trek with the naturally shaped heart lake (Hridaya Saras)',
      'Banasura Sagar Dam – the largest earthen dam in India',
      'Wayanad Wildlife Sanctuary (Tholpetty and Muthanga)',
      'Bamboo rafting in Kuruva Island (Kuruvadweep)',
    ],
    topAttractions: [
      {
        name: 'Edakkal Caves',
        category: 'Archaeology & Heritage',
        description: 'Two natural rock shelters containing prehistoric petroglyphic engravings dating back over 6,000 years to the Neolithic era, situated atop Ambukuthi Mala.',
      },
      {
        name: 'Banasura Sagar Dam',
        category: 'Engineering & Nature',
        description: 'Constructed across the Karamanathodu tributary of Kabini, the dam creates a scenic reservoir dotted with tiny submerged islands.',
      },
    ],
    howToReach: {
      byAir: 'Calicut International Airport (CCJ) is closest at 85 km (2.5 hrs). Kannur Airport (CNN) is 90 km away.',
      byTrain: 'Kozhikode Railway Station (CLT) is the primary gateway, well-connected across India.',
      byRoad: 'Accessible via the famed Thamarassery Churam mountain pass with 9 picturesque hairpin bends.',
    },
    insiderTips: [
      'Try the local Wayanadan Gandhakasala aromatic rice and pure forest honey harvested by indigenous communities.',
    ],
    faqs: [
      {
        question: 'Is Wayanad better reached from Kochi or Calicut/Bangalore?',
        answer: 'For guests arriving from North/Western India or Bangalore, flying into Calicut (CCJ) or driving directly from Bengaluru (6 hrs) is the fastest route. For full-Kerala circuits, our Kochi-Wayanad-Calicut itinerary is ideal.',
      },
    ],
    popularPackageSlugs: ['wayanad-nature-wildlife-escape'],
  },
  {
    slug: 'thekkady',
    name: 'Thekkady (Periyar)',
    tagline: 'Cardamom Hills & Wildlife Safari of Periyar Tiger Reserve',
    district: 'Idukki District',
    shortDescription: 'The natural habitat of wild elephants, bison, and tigers, Thekkady combines thrilling jungle safaris on Periyar Lake with aromatic spice plantation walks.',
    fullDescription: 'Thekkady is synonymous with the Periyar National Park, one of India’s most celebrated wildlife reserves. Centered around an artificial lake created by the 1895 Mullaperiyar dam, the sanctuary allows visitors to spot herds of wild elephants, sambar deer, gaur, and exotic birds from the safe vantage point of motorized boats.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    ],
    idealDurationDays: '1 to 2 Days',
    bestTimeToVisit: 'September to April',
    altitude: '900 m to 1,200 m',
    distanceFromCochinAirport: '145 km (approx. 4 hours)',
    nearestRailwayStation: 'Kottayam (KTYM) - 105 km or Madurai (MDU) - 140 km',
    temperatureRange: {
      summer: '20°C – 32°C',
      winter: '15°C – 26°C',
      monsoon: '18°C – 25°C',
    },
    highlights: [
      'Periyar Lake boat cruise for wild elephant and wildlife sightings',
      'Guided spice plantation walks smelling fresh cardamom, cinnamon, and nutmeg',
      'Traditional Kalaripayattu martial arts and Kathakali cultural shows',
      'Bamboo rafting and border hiking through pristine reserve forests',
    ],
    topAttractions: [
      {
        name: 'Periyar Tiger Reserve Boat Cruise',
        category: 'Wildlife Sanctuary',
        description: 'Cruising the calm lake with submerged tree stumps while watching wildlife gather at the water’s edge.',
      },
      {
        name: 'Organic Spice Plantations',
        category: 'Agriculture & Nature',
        description: 'Walk through lush gardens seeing real plants of black pepper vines, vanilla pods, cocoa, and allspice.',
      },
    ],
    howToReach: {
      byAir: 'Cochin International Airport (145 km) or Madurai Airport (140 km).',
      byTrain: 'Kottayam railway station (105 km) has frequent connections.',
      byRoad: 'Scenic mountain road connecting Munnar to Thekkady (85 km, 3 hours) via the Cardamom hills.',
    },
    insiderTips: [
      'Attend the evening Kadathanadan Kalari Centre show to witness Kalaripayattu, the world’s oldest martial art form.',
    ],
    faqs: [
      {
        question: 'Are tiger sightings guaranteed on the Periyar boat cruise?',
        answer: 'While wild elephants, bison, otters, wild boars, and birds are spotted daily, tigers are elusive nocturnal predators and sightings in the daytime lake zone are rare.',
      },
    ],
    popularPackageSlugs: ['kerala-highlights-6-day', 'kerala-complete-grand-tour'],
  },
  {
    slug: 'kochi',
    name: 'Kochi (Cochin & Fort Kochi)',
    tagline: 'Queen of the Arabian Sea – Where Ancient Trade Meets Art & Culture',
    district: 'Ernakulam District',
    shortDescription: 'A historic port city where Chinese fishing nets, Portuguese churches, Jewish synagogues, Dutch palaces, and contemporary art galleries blend along Arabian Sea shores.',
    fullDescription: 'For over six centuries, Kochi was the trading nexus for the global spice route, welcoming Arab, Chinese, Portuguese, Dutch, and British merchants. Today, Fort Kochi and Mattancherry retain this evocative colonial heritage with cobblestone lanes, fragrant spice godowns, 450-year-old synagogues, and the iconic cantilevered Chinese fishing nets.',
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80',
    ],
    idealDurationDays: '1 to 2 Days',
    bestTimeToVisit: 'October to March',
    altitude: 'Sea level',
    distanceFromCochinAirport: '38 km (approx. 1 hour drive)',
    nearestRailwayStation: 'Ernakulam Junction (South) - 12 km, Ernakulam Town (North) - 14 km',
    temperatureRange: {
      summer: '24°C – 34°C',
      winter: '22°C – 31°C',
      monsoon: '23°C – 28°C',
    },
    highlights: [
      'Iconic Chinese Fishing Nets (Cheena Vala) along Fort Kochi beach',
      'St. Francis Church – India’s oldest European church (Vasco da Gama burial site)',
      'Paradesi Synagogue and the antique shops of Jew Town in Mattancherry',
      'Mattancherry Dutch Palace with 16th-century Ramayana murals',
      'Sunset harbour cruise along Willingdon Island and the shipping channels',
    ],
    topAttractions: [
      {
        name: 'Fort Kochi Chinese Fishing Nets',
        category: 'Heritage Maritime',
        description: 'Massive teak wood cantilevered nets introduced by Chinese traders in the 14th century, still operated manually by local fishermen at high tide.',
      },
      {
        name: 'Jew Town & Paradesi Synagogue',
        category: 'History & Culture',
        description: 'Constructed in 1568, famous for hand-painted blue Cantonese willow porcelain tiles, antique Belgian glass chandeliers, and ancient copper plates.',
      },
    ],
    howToReach: {
      byAir: 'Cochin International Airport (COK) at Nedumbassery is 38 km from Fort Kochi.',
      byTrain: 'Ernakulam South and North stations offer round-the-clock trains from all Indian metros.',
      byRoad: 'Fast expressway access and regular ro-ro ferry boats connecting Vypeen to Fort Kochi.',
    },
    insiderTips: [
      'Rent a bicycle in Fort Kochi to leisurely explore Princess Street, Rose Street, and colonial cafes.',
    ],
    faqs: [
      {
        question: 'Is Kochi the best arrival city for a Kerala tour?',
        answer: 'Yes! Cochin International Airport (COK) is the central gateway to Kerala, making it the ideal starting and ending point for itineraries covering Munnar, Thekkady, and Alleppey.',
      },
    ],
    popularPackageSlugs: ['kerala-highlights-6-day', 'kerala-complete-grand-tour'],
  },
];
