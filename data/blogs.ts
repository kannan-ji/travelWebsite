export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  heroImage: string;
  content: {
    heading: string;
    body: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'best-time-to-visit-kerala-month-by-month',
    title: 'Best Time to Visit Kerala: Complete Season-by-Season Guide',
    excerpt: 'Detailed weather analysis, rainfall patterns, peak seasons, and recommendations for Munnar hills, Alleppey backwaters, and beach holidays.',
    category: 'Travel Advice',
    readTime: '6 min read',
    publishDate: '2025-01-15',
    author: 'Suresh Nambiar',
    authorRole: 'Senior Tour Director & Kerala Native',
    heroImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: '1. Peak Winter Season (October to March): Ideal for All Travelers',
        body: 'October through March is the undisputed golden window for travelling across Kerala. Temperatures hover pleasantly between 22°C and 30°C in coastal and backwater regions, while highland areas like Munnar and Wayanad enjoy crisp mornings dropping to 10°C to 15°C. Humidity is at its yearly low, skies are clear blue, and water levels in Vembanad Lake and Periyar are calm and safe for houseboats and safaris.',
      },
      {
        heading: '2. The Magical Monsoon (June to August): Ayurvedic Rejuvenation Season',
        body: 'The Southwest Monsoon (Edavappathi) sweeps across Kerala starting early June. Rather than endless grey drizzle, rains often arrive in dramatic tropical downpours followed by sunny intervals. This is considered the traditional prime period for authentic Ayurvedic treatments (Panchakarma and Abhyanga) because the humid atmosphere opens body pores and cooler climate maximizes herbal absorption. It is also the most budget-friendly time with luxury resorts offering up to 40% lower tariffs.',
      },
      {
        heading: '3. Summer in the High Ranges (March to May): Escaping to the Hills',
        body: 'While coastal Kochi and Alleppey experience warm temperatures up to 34°C with higher humidity, the mountain hills of Munnar, Vagamon, and Wayanad remain pleasantly mild (19°C – 26°C). It is an excellent season for spotting wild elephant herds around water holes in Periyar and enjoying blooming jacarandas in tea gardens.',
      },
    ],
    faq: [
      {
        question: 'Which month has the best weather for both houseboats and Munnar?',
        answer: 'November, December, and January offer the perfect balance: pleasant, cool hill climate in Munnar and crisp, breezy days on Alleppey houseboats without rain disruptions.',
      },
      {
        question: 'Do houseboats operate during Kerala monsoon?',
        answer: 'Yes, houseboats operate safely on lakes and wide backwater canals during the monsoon, pausing only during rare severe weather warnings issued by the maritime board.',
      },
    ],
  },
  {
    slug: 'ultimate-alleppey-houseboat-guide',
    title: 'The Ultimate Alleppey Houseboat Guide: Day Cruise vs. Overnight Stay',
    excerpt: 'Everything you need to know about houseboat types, AC operation, food served on board, cruising routes, and booking etiquette.',
    category: 'Backwater Tips',
    readTime: '5 min read',
    publishDate: '2025-02-10',
    author: 'Anjali Kurian',
    authorRole: 'Backwater Operations Specialist',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Understanding the Kettuvallam',
        body: 'Traditional Kerala houseboats (Kettuvallams) were originally wooden cargo barges used to transport tons of rice and spices across the Vembanad wetlands. Built from Anjili wood logs tied together with coir ropes—without using a single iron nail—and covered with bamboo and palm leaf roofs, modern versions are luxury floating residences equipped with solar panels, biotoilets, and air conditioning.',
      },
      {
        heading: 'Day Cruise vs. Overnight Stay: Which Should You Choose?',
        body: 'A Day Cruise runs from roughly 11:30 AM to 5:00 PM and suits travellers on tight schedules. However, an Overnight Stay (12:30 PM to 09:00 AM next morning) is where the real magic happens. By 5:30 PM, government regulations require all houseboats to anchor to allow fishermen to cast their nets. You enjoy a secluded sunset, tranquil starlit dinner, and misty sunrise with village birds singing before waking up to piping hot Kerala appam and stew.',
      },
      {
        heading: 'Air-Conditioning Standards to Clarify Before Booking',
        body: 'Be aware that in standard deluxe houseboats, bedrooms are air-conditioned from 9:00 PM to 6:00 AM. If you are travelling in the warmer summer months (March–May) or desire uninterrupted daytime air conditioning, specify a Premium/Luxury houseboat with 24-hour generator-backed AC throughout the boat lounge.',
      },
    ],
  },
  {
    slug: 'kerala-cuisine-must-try-dishes',
    title: 'Authentic Kerala Cuisine: 8 Dishes You Cannot Miss',
    excerpt: 'From tender Appam with vegetable stew to Karimeen Pollichathu wrapped in banana leaf: an insider culinary tour of God’s Own Country.',
    category: 'Culture & Food',
    readTime: '4 min read',
    publishDate: '2025-03-01',
    author: 'Chef Jacob Thomas',
    authorRole: 'Heritage Culinary Consultant',
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: '1. Appam with Coconut Stew (Ishtu)',
        body: 'A staple Kerala breakfast featuring fermented rice and coconut milk pancakes with soft, spongy centers and crispy lace borders, paired with gently spiced coconut milk stew laden with potatoes, carrots, cardamom, and fresh curry leaves.',
      },
      {
        heading: '2. Karimeen Pollichathu (Pearl Spot in Banana Leaf)',
        body: 'The holy grail of backwater culinary heritage. Fresh Pearl Spot fish marinated in crushed shallots, ginger, garlic, red chilies, and kokum, then slow-steamed and shallow fried inside a charred banana leaf parcel.',
      },
      {
        heading: '3. Kerala Sadya (Traditional Vegetarian Feast)',
        body: 'Served on a fresh plantain leaf during festivals and weddings, a grand Sadya features 24 to 28 vegetarian delicacies including Parippu, Sambar, Avial (mixed vegetables in coconut and curd), Thoran, Olan, and topped with golden Palada Payasam.',
      },
    ],
  },
];
