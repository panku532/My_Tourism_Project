// ==========================================================================
// Travel Buddy - Initial Mock Data Store
// ==========================================================================

const initialDestinations = [
    {
        id: 'pune',
        name: 'Pune',
        tagline: 'The Oxford of the East & Cultural Capital of Maharashtra',
        description: 'A vibrant blend of Maratha heritage, lush green hills, bustling IT hubs, and legendary culinary spots like Shaniwar Wada and Aga Khan Palace.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
        budget: '₹2,500 / day',
        rating: 4.8,
        activities: ['Heritage Walks', 'Hill Fort Trekking', 'Café Hopping', 'Temple Tours'],
        about: 'Pune offers a captivating mix of ancient history and youthful energy. Surrounded by the Sahyadri mountains, it is the ideal gateway for weekend trekkers and history enthusiasts alike.',
        bestTime: 'July to February (Monsoon & Winter)',
        attractions: ['Shaniwar Wada', 'Sinhagad Fort', 'Aga Khan Palace', 'Osho Garden'],
        hotels: [
            {name: 'JW Marriott Pune', price: '₹9,500/night', rating: 4.9, location: 'SB Road'},
            {name: 'The Corinthians Resort', price: '₹6,800/night', rating: 4.7, location: 'NIBM Annex'},
            {name: 'Hotel Shreyas', price: '₹2,500/night', rating: 4.5, location: 'Deccan Gymkhana'}
        ],
        restaurants: [
            {name: 'Vaishali', specialty: 'South Indian & Misal Pav', rating: 4.8},
            {name: 'Goodluck Cafe', specialty: 'Bun Maska & Irani Chai', rating: 4.6},
            {name: 'Malwani Aswad', specialty: 'Coastal Seafood', rating: 4.7}
        ]
    },
    {
        id: 'mumbai',
        name: 'Mumbai',
        tagline: 'The City of Dreams & Bollywood Capital',
        description: 'An unstoppable metropolis where colonial architecture meets modern skyscrapers, famous street food, and the sparkling Arabian Sea.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
        budget: '₹4,000 / day',
        rating: 4.9,
        activities: ['Marine Drive Sunset', 'Elephanta Caves Ferry', 'Street Food Tour', 'Colaba Heritage Walk'],
        about: 'Mumbai never sleeps. From iconic landmarks like the Gateway of India to seaside promenades and bustling bazaars, every corner tells a vibrant story.',
        bestTime: 'November to February',
        attractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Chhatrapati Shivaji Terminus'],
        hotels: [
            {name: 'The Taj Mahal Palace', price: '₹18,000/night', rating: 4.9, location: 'Colaba'},
            {name: 'Trident Nariman Point', price: '₹12,000/night', rating: 4.8, location: 'Nariman Point'},
            {name: 'Abode Bombay', price: '₹6,500/night', rating: 4.7, location: 'Colaba Causeway'}
        ],
        restaurants: [
            {name: 'Bademiya', specialty: 'Mughlai Kebabs', rating: 4.6},
            {name: 'Kyani & Co.', specialty: 'Bun Maska & Berry Pulao', rating: 4.5},
            {name: 'Trishna', specialty: 'Butter Garlic Crab', rating: 4.8}
        ]
    },
    {
        id: 'goa',
        name: 'Goa',
        tagline: 'Sun, Sand, Portuguese Heritage & Vibrant Nightlife',
        description: 'Tropical paradise known for golden beaches, spice plantations, 400-year-old whitewashed churches, and world-class seafood.',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        budget: '₹3,500 / day',
        rating: 4.9,
        activities: ['Scuba Diving', 'Beach Hopping', 'Fort Exploration', 'Sunset Cruises'],
        about: 'Goa is India\'s favorite coastal haven, offering a unique blend of Indian and Portuguese cultures, laid-back beach shacks, and tropical serenity.',
        bestTime: 'October to March',
        attractions: ['Baga Beach', 'Aguada Fort', 'Basilica of Bom Jesus', 'Dudhsagar Falls'],
        hotels: [
            {name: 'W Goa', price: '₹16,000/night', rating: 4.9, location: 'Vagator Beach'},
            {name: 'Alila Diwa Goa', price: '₹11,000/night', rating: 4.8, location: 'Majorda'},
            {name: 'Zuri White Sands', price: '₹8,500/night', rating: 4.7, location: 'Varca'}
        ],
        restaurants: [
            {name: 'Curlies', specialty: 'Beach Shack Seafood', rating: 4.6},
            {name: 'Mum\'s Kitchen', specialty: 'Authentic Goan Cuisine', rating: 4.8},
            {name: 'Gunpowder', specialty: 'South Indian Coastal', rating: 4.7}
        ]
    },
    {
        id: 'mahabaleshwar',
        name: 'Mahabaleshwar',
        tagline: 'Strawberry Country & Mist-Covered Hills',
        description: 'A serene hill station in the Western Ghats renowned for cascading waterfalls, evergreen forests, and mouth-watering fresh strawberries.',
        image: 'https://images.unsplash.com/photo-1609137144813-75c2524a5f47?auto=format&fit=crop&w=1200&q=80',
        budget: '₹2,800 / day',
        rating: 4.7,
        activities: ['Strawberry Farm Tours', 'Viewpoint Trekking', 'Boating at Venna Lake', 'Horse Riding'],
        about: 'Perched high in the Sahyadri mountain range, Mahabaleshwar charms visitors with panoramic valley views, pleasant weather year-round, and strawberry fields.',
        bestTime: 'December to May',
        attractions: ['Arthur\'s Seat', 'Venna Lake', 'Elephant\'s Head Point', 'Mapro Garden'],
        hotels: [
            {name: 'Le Méridien Mahabaleshwar', price: '₹14,000/night', rating: 4.8, location: 'Mahabaleshwar'},
            {name: 'Evershine Resort', price: '₹7,500/night', rating: 4.6, location: 'Laxmi Narayan Temple Road'},
            {name: 'Hotel Panorama', price: '₹3,200/night', rating: 4.4, location: 'Near Main Market'}
        ],
        restaurants: [
            {name: 'Mapro Garden', specialty: 'Strawberry Cream & Pizza', rating: 4.8},
            {name: 'Bagicha Corner', specialty: 'Corn Patties & Milkshakes', rating: 4.5},
            {name: 'The Dining Room', specialty: 'Multi-cuisine Buffet', rating: 4.6}
        ]
    },
    {
        id: 'lonavala',
        name: 'Lonavala',
        tagline: 'Cascading Waterfalls & Famous Chikki Town',
        description: 'The quintessential weekend getaway near Mumbai and Pune featuring ancient rock-cut caves, misty valleys, and sweet fudge treats.',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
        budget: '₹2,200 / day',
        rating: 4.6,
        activities: ['Tiger\'s Leap View', 'Bhaja Caves Exploration', 'Water Camping', 'Chikki Tasting'],
        about: 'Lonavala comes alive during the monsoon with mist-shrouded green hills, roaring waterfalls, and serene lakes, making it a favorite escape for nature lovers.',
        bestTime: 'June to September (Monsoon)',
        attractions: ['Tiger\'s Leap', 'Karla Caves', 'Bhushi Dam', 'Lohagad Fort'],
        hotels: [
            {name: 'The Dukes Retreat', price: '₹9,000/night', rating: 4.7, location: 'Old Pune-Mumbai Highway'},
            {name: 'Della Resorts', price: '₹15,000/night', rating: 4.8, location: 'Kune Village'},
            {name: 'Fariyas Resort', price: '₹7,000/night', rating: 4.5, location: 'Frichley Hills'}
        ],
        restaurants: [
            {name: 'German Bakery', specialty: 'Wood-fired Pizza & Coffee', rating: 4.6},
            {name: 'Chandralok', specialty: 'Gujarati Thali', rating: 4.5},
            {name: 'Ramakrishna', specialty: 'South Indian & Punjabi', rating: 4.7}
        ]
    },
    {
        id: 'jaipur',
        name: 'Jaipur',
        tagline: 'The Pink City of Royal Palaces & Forts',
        description: 'Rajasthan\'s iconic capital brimming with majestic hilltop fortresses, pink-hued bazaars, intricate palaces, and regal heritage.',
        image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80',
        budget: '₹3,000 / day',
        rating: 4.9,
        activities: ['Amber Fort Elephant Ride', 'Hawa Mahal Photography', 'Bazaar Shopping', 'Royal Dining'],
        about: 'Jaipur invites travelers into the opulent world of Rajput maharajas. With its pink sandstone architecture and vibrant bazaars, it is a treasure trove of art and history.',
        bestTime: 'October to March',
        attractions: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar'],
        hotels: [
            {name: 'Rambagh Palace', price: '₹35,000/night', rating: 5.0, location: 'Bhawani Singh Road'},
            {name: 'Samode Haveli', price: '₹12,500/night', rating: 4.8, location: 'Gangapol'},
            {name: 'Pearl Palace', price: '₹3,500/night', rating: 4.6, location: 'Hari Kishan Somani Marg'}
        ],
        restaurants: [
            {name: 'Chokhi Dhani', specialty: 'Traditional Rajasthani Thali', rating: 4.8},
            {name: 'LMB (Laxmi Mishthan Bhandar)', specialty: 'Pyaz Kachori & Ghevar', rating: 4.7},
            {name: 'Suvarna Mahal', specialty: 'Royal Indian Dining', rating: 4.9}
        ]
    }
];

const initialHotels = [
    {id: 1, name: 'JW Marriott Pune', location: 'Pune, Maharashtra', rating: 4.9, price: '₹9,500', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', facilities: ['Free WiFi', 'Swimming Pool', 'Spa & Wellness', 'Fine Dining']},
    {id: 2, name: 'The Taj Mahal Palace', location: 'Mumbai, Maharashtra', rating: 4.9, price: '₹18,000', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', facilities: ['Sea View', 'Valet Parking', 'Luxury Spa', '24/7 Butler']},
    {id: 3, name: 'W Goa', location: 'Vagator, Goa', rating: 4.9, price: '₹16,000', image: 'https://images.unsplash.com/photo-1540555700445-4be289fbecef?auto=format&fit=crop&w=800&q=80', facilities: ['Beach Access', 'Outdoor Pool', 'Nightclub', 'Pet Friendly']},
    {id: 4, name: 'Le Méridien Mahabaleshwar', location: 'Mahabaleshwar', rating: 4.8, price: '₹14,000', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80', facilities: ['Valley Views', 'Infinity Pool', 'Kids Club', 'Yoga Deck']},
    {id: 5, name: 'Della Resorts', location: 'Lonavala', rating: 4.8, price: '₹15,000', image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80', facilities: ['Adventure Park', 'Multiple Restaurants', 'Water Park', 'Gaming Zone']},
    {id: 6, name: 'Rambagh Palace', location: 'Jaipur, Rajasthan', rating: 5.0, price: '₹35,000', image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=800&q=80', facilities: ['Royal Heritage', 'Polo Bar', 'Heritage Walks', 'Private Gardens']}
];

const initialBusinesses = [
    {id: 1, name: 'Sahyadri Trek Adventures', category: 'Tour guides', location: 'Pune & Lonavala', contact: '+91 98220 12345', priceRange: '₹₹', description: 'Certified expert guides for historical fort treks, night camping, and valley rappelling across the Western Ghats.', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80'},
    {id: 2, name: 'Goa Coastal Watersports', category: 'Adventure activities', location: 'Baga Beach, Goa', contact: '+91 98501 98765', priceRange: '₹₹₹', description: 'Thrilling water sports including parasailing, jet skiing, scuba diving, and banana boat rides with certified safety instructors.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'},
    {id: 3, name: 'Royal Heritage Cabs & Tours', category: 'Travel agencies', location: 'Jaipur, Rajasthan', contact: '+91 94140 55555', priceRange: '₹₹', description: 'Premium AC sedan and SUV rentals with multi-lingual royal tour guides for effortless sightseeing in Jaipur and Udaipur.', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'},
    {id: 4, name: 'Konkan Spice Kitchen', category: 'Restaurants', location: 'Mumbai & Pune', contact: '+91 98211 44444', priceRange: '₹₹', description: 'Authentic coastal Maharashtrian thalis, solkadhi, and mouth-watering prawn and pomfret fish fry preparations.', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'}
];

const initialReviews = [
    {id: 1, name: 'Rohan Sharma', destination: 'Goa', rating: 5, comment: 'Travel Buddy made finding a secluded beach shack resort so simple. The itinerary builder was spot on!', date: '2 days ago'},
    {id: 2, name: 'Priya Deshmukh', destination: 'Mahabaleshwar', rating: 5, comment: 'Loved the strawberry farm recommendations! Saved us hours of research.', date: '1 week ago'},
    {id: 3, name: 'Vikram Malhotra', destination: 'Jaipur', rating: 4, comment: 'Great UI and very intuitive trip planner. Total budget estimate was very accurate.', date: '2 weeks ago'}
];

// Attach to window for global availability
window.initialDestinations = initialDestinations;
window.initialHotels = initialHotels;
window.initialBusinesses = initialBusinesses;
window.initialReviews = initialReviews;
