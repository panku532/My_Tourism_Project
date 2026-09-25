// ==========================================================================
// Travel Buddy - Main Application Component & State Hub
// ==========================================================================

const { useState, useEffect } = React;

function App() {
    const [activeTab, setActiveTab] = useState('home');

    // Live Real-Time Clock & 3D Atmosphere Engine
    const [currentClock, setCurrentClock] = useState(new Date());
    const [timeOverride, setTimeOverride] = useState(null); // null = Live, 'morning', 'day', 'sunset', 'night'

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentClock(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const getEffectiveDate = () => {
        if (!timeOverride) return currentClock;
        const d = new Date(currentClock);
        if (timeOverride === 'morning') d.setHours(7, 30);
        else if (timeOverride === 'day') d.setHours(13, 0);
        else if (timeOverride === 'sunset') d.setHours(17, 45);
        else if (timeOverride === 'night') d.setHours(1, 45);
        return d;
    };

    const liveWeatherHero = computeLiveWeather('Pune', getEffectiveDate());

    // Destinations State
    const [destinations, setDestinations] = useState(window.initialDestinations || initialDestinations);
    const [selectedDestination, setSelectedDestination] = useState(null);

    // Trip Planner State
    const [plannerDest, setPlannerDest] = useState('Pune');
    const [plannerDays, setPlannerDays] = useState(3);
    const [plannerTravelers, setPlannerTravelers] = useState(2);
    const [plannerBudget, setPlannerBudget] = useState('Medium (₹5,000 - ₹15,000)');
    const [plannerInterests, setPlannerInterests] = useState(['Nature', 'Food']);
    const [itineraryResult, setItineraryResult] = useState(null);

    // Hotel Booking Modal State
    const [bookingHotel, setBookingHotel] = useState(null);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [guestName, setGuestName] = useState('');
    const [guestPhone, setGuestPhone] = useState('');

    // Business Hub State (Local Persistence)
    const [businesses, setBusinesses] = useState(() => {
        const saved = localStorage.getItem('travelbuddy_businesses') || localStorage.getItem('travelease_businesses');
        return saved ? JSON.parse(saved) : (window.initialBusinesses || initialBusinesses);
    });
    const [showAddBusinessModal, setShowAddBusinessModal] = useState(false);
    const [newBiz, setNewBiz] = useState({
        name: '', 
        category: 'Hotels', 
        location: '', 
        contact: '', 
        priceRange: '₹₹', 
        description: '', 
        image: ''
    });

    // Reviews State (Local Persistence)
    const [reviews, setReviews] = useState(() => {
        const saved = localStorage.getItem('travelbuddy_reviews') || localStorage.getItem('travelease_reviews');
        return saved ? JSON.parse(saved) : (window.initialReviews || initialReviews);
    });
    const [newReview, setNewReview] = useState({
        name: '', 
        destination: 'Pune', 
        rating: 5, 
        comment: ''
    });

    // Filter query from Home
    const [filterBudget, setFilterBudget] = useState('All');
    const [filterType, setFilterType] = useState('All');

    // Interactive Animation Tab State
    const [animationMood, setAnimationMood] = useState('sunset'); // 'sunset', 'night', 'monsoon', 'sunny'
    const [tourIndex, setTourIndex] = useState(0);
    const [autoTourPlay, setAutoTourPlay] = useState(true);
    const [soundPlaying, setSoundPlaying] = useState(true);

    // Auto-advance virtual flight tour
    useEffect(() => {
        if (!autoTourPlay || activeTab !== 'animation') return;
        const timer = setInterval(() => {
            setTourIndex(prev => (prev + 1) % destinations.length);
        }, 4500);
        return () => clearInterval(timer);
    }, [autoTourPlay, activeTab, destinations.length]);

    // Save businesses to localStorage
    useEffect(() => {
        localStorage.setItem('travelbuddy_businesses', JSON.stringify(businesses));
    }, [businesses]);

    // Save reviews to localStorage
    useEffect(() => {
        localStorage.setItem('travelbuddy_reviews', JSON.stringify(reviews));
    }, [reviews]);

    const handleGenerateItinerary = (e) => {
        e.preventDefault();
        const destData = destinations.find(d => d.name === plannerDest) || destinations[0];
        const days = [];
        for (let i = 1; i <= plannerDays; i++) {
            days.push({
                day: i,
                morning: destData.attractions[(i - 1) % destData.attractions.length],
                afternoon: destData.restaurants[(i - 1) % destData.restaurants.length].name + ' (' + destData.restaurants[(i - 1) % destData.restaurants.length].specialty + ')',
                evening: destData.activities[(i - 1) % destData.activities.length],
                night: destData.hotels[(i - 1) % destData.hotels.length].name
            });
        }
        const baseCost = plannerDays * plannerTravelers;
        setItineraryResult({
            days,
            costs: {
                hotel: `₹${(baseCost * 2500).toLocaleString()}`,
                food: `₹${(baseCost * 1200).toLocaleString()}`,
                travel: `₹${(baseCost * 800).toLocaleString()}`,
                activities: `₹${(baseCost * 1000).toLocaleString()}`,
                total: `₹${(baseCost * 5500).toLocaleString()}`
            }
        });
    };

    const handleAddBusiness = (e) => {
        e.preventDefault();
        const item = {
            id: Date.now(),
            ...newBiz,
            image: newBiz.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'
        };
        setBusinesses([item, ...businesses]);
        setShowAddBusinessModal(false);
        setNewBiz({ name: '', category: 'Hotels', location: '', contact: '', priceRange: '₹₹', description: '', image: '' });
    };

    const handleAddReview = (e) => {
        e.preventDefault();
        if (!newReview.name || !newReview.comment) return;
        const rev = {
            id: Date.now(),
            ...newReview,
            date: 'Just now'
        };
        setReviews([rev, ...reviews]);
        setNewReview({ name: '', destination: 'Pune', rating: 5, comment: '' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-brand-sand text-slate-800">
            {/* Header & Navigation */}
            <Navbar 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                setSelectedDestination={setSelectedDestination} 
            />

            {/* Live 3D Weather & Time Telemetry Strip */}
            <WeatherBar 
                getEffectiveDate={getEffectiveDate}
                timeOverride={timeOverride}
                setTimeOverride={setTimeOverride}
                liveWeatherHero={liveWeatherHero}
                destinations={destinations}
                setSelectedDestination={setSelectedDestination}
                setActiveTab={setActiveTab}
            />

            {/* Main Tab Content */}
            <main className="flex-1">
                {activeTab === 'home' && (
                    <HomeTab 
                        liveWeatherHero={liveWeatherHero}
                        destinations={destinations}
                        filterBudget={filterBudget}
                        setFilterBudget={setFilterBudget}
                        filterType={filterType}
                        setFilterType={setFilterType}
                        getEffectiveDate={getEffectiveDate}
                        setSelectedDestination={setSelectedDestination}
                        setActiveTab={setActiveTab}
                        initialHotels={window.initialHotels || initialHotels}
                        setBookingHotel={setBookingHotel}
                    />
                )}

                {(activeTab === 'explore' || activeTab === 'explore-detail' || selectedDestination) && (
                    <ExploreTab 
                        destinations={destinations}
                        selectedDestination={selectedDestination}
                        setSelectedDestination={setSelectedDestination}
                        setActiveTab={setActiveTab}
                        getEffectiveDate={getEffectiveDate}
                        setBookingHotel={setBookingHotel}
                        setPlannerDest={setPlannerDest}
                    />
                )}

                {activeTab === 'planner' && (
                    <TripPlannerTab 
                        plannerDest={plannerDest}
                        setPlannerDest={setPlannerDest}
                        plannerDays={plannerDays}
                        setPlannerDays={setPlannerDays}
                        plannerTravelers={plannerTravelers}
                        setPlannerTravelers={setPlannerTravelers}
                        plannerBudget={plannerBudget}
                        setPlannerBudget={setPlannerBudget}
                        plannerInterests={plannerInterests}
                        setPlannerInterests={setPlannerInterests}
                        itineraryResult={itineraryResult}
                        destinations={destinations}
                        handleGenerateItinerary={handleGenerateItinerary}
                    />
                )}

                {activeTab === 'hotels' && (
                    <HotelsTab 
                        hotels={window.initialHotels || initialHotels}
                        setBookingHotel={setBookingHotel}
                    />
                )}

                {activeTab === 'business' && (
                    <BusinessHubTab 
                        businesses={businesses}
                        setShowAddBusinessModal={setShowAddBusinessModal}
                    />
                )}

                {activeTab === 'reviews' && (
                    <ReviewsTab 
                        reviews={reviews}
                        newReview={newReview}
                        setNewReview={setNewReview}
                        handleAddReview={handleAddReview}
                        destinations={destinations}
                    />
                )}

                {activeTab === 'animation' && (
                    <AnimationTourTab 
                        animationMood={animationMood}
                        setAnimationMood={setAnimationMood}
                        destinations={destinations}
                        tourIndex={tourIndex}
                        setTourIndex={setTourIndex}
                        autoTourPlay={autoTourPlay}
                        setAutoTourPlay={setAutoTourPlay}
                        soundPlaying={soundPlaying}
                        setSoundPlaying={setSoundPlaying}
                        setSelectedDestination={setSelectedDestination}
                        setActiveTab={setActiveTab}
                        setPlannerDest={setPlannerDest}
                    />
                )}
            </main>

            {/* Booking Modal */}
            <BookingModal 
                bookingHotel={bookingHotel}
                setBookingHotel={setBookingHotel}
                bookingSuccess={bookingSuccess}
                setBookingSuccess={setBookingSuccess}
                guestName={guestName}
                setGuestName={setGuestName}
                guestPhone={guestPhone}
                setGuestPhone={setGuestPhone}
            />

            {/* Add Business Modal */}
            <AddBusinessModal 
                showAddBusinessModal={showAddBusinessModal}
                setShowAddBusinessModal={setShowAddBusinessModal}
                newBiz={newBiz}
                setNewBiz={setNewBiz}
                handleAddBusiness={handleAddBusiness}
            />

            {/* Global Footer */}
            <Footer setActiveTab={setActiveTab} />
        </div>
    );
}

// Render Application to DOM Root
ReactDOM.render(<App />, document.getElementById('root'));
