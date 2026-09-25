// ==========================================================================
// Travel Buddy - Home Tab Component
// ==========================================================================

function HomeTab({ 
    liveWeatherHero, 
    destinations, 
    filterBudget, 
    setFilterBudget, 
    filterType, 
    setFilterType, 
    getEffectiveDate, 
    setSelectedDestination, 
    setActiveTab, 
    initialHotels, 
    setBookingHotel 
}) {
    const effectiveDate = getEffectiveDate();

    return (
        <div key="home" className="animate-tab-content">
            {/* Hero Section */}
            <div className={'relative text-white py-24 lg:py-32 overflow-hidden transition-all duration-1000 ' + liveWeatherHero.skyTheme}>
                {/* Star particles for night / evening atmosphere */}
                {(liveWeatherHero.phase === 'late-night' || liveWeatherHero.phase === 'night' || liveWeatherHero.phase === 'evening') && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[12, 28, 48, 68, 88, 20, 60, 80, 35, 95].map((pos, idx) => (
                            <div
                                key={idx}
                                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                                style={{
                                    top: ((idx * 9 + 4)) + '%',
                                    left: pos + '%',
                                    animation: 'starTwinkle ' + (1.5 + (idx % 3)) + 's ease-in-out infinite ' + (idx * 0.25) + 's'
                                }}
                            />
                        ))}
                        <div className="absolute top-10 right-16 w-20 h-20 rounded-full bg-amber-100/90 shadow-[0_0_50px_rgba(255,255,200,0.8)] animate-pulse" />
                    </div>
                )}

                {/* Background ambient texture */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80" alt="Travel background" className="w-full h-full object-cover" />
                </div>

                {/* 3D Floating Left Pill */}
                <div className="hidden xl:block absolute left-8 top-32 perspective-container animate-float-3d-1 pointer-events-auto">
                    <div className="glass-3d-dark p-4 rounded-3xl border border-white/20 shadow-2xl max-w-xs card-3d">
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 rounded-2xl bg-brand-coral flex items-center justify-center text-xl font-bold animate-compass">
                                🧭
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-brand-coral uppercase tracking-wider block">Live 3D Telemetry</span>
                                <strong className="text-xs text-white">Atmosphere Engine</strong>
                            </div>
                        </div>
                        <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                            Real-time weather synced with local clock: <strong className="text-amber-300">{liveWeatherHero.timeStr}</strong> ({liveWeatherHero.phaseLabel}).
                        </p>
                    </div>
                </div>

                {/* 3D Floating Right Weather Radar Widget */}
                <div className="hidden xl:block absolute right-8 top-32 perspective-container animate-float-3d-2 pointer-events-auto">
                    <div className="glass-3d-dark p-4 rounded-3xl border border-white/20 shadow-2xl max-w-xs card-3d">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">{liveWeatherHero.icon}</span>
                                <div>
                                    <strong className="text-sm font-extrabold text-white block">Pune & Sahyadris</strong>
                                    <span className="text-[10px] text-emerald-400 font-semibold">● AQI {liveWeatherHero.aqi}</span>
                                </div>
                            </div>
                            <span className="text-2xl font-black text-amber-300">{liveWeatherHero.temp}</span>
                        </div>
                        <div className="text-[11px] text-slate-300 pt-2 border-t border-white/10 space-y-1">
                            <div>Condition: <strong className="text-white font-medium">{liveWeatherHero.condition}</strong></div>
                            <div>Right Now: <strong className="text-brand-coral font-medium">{liveWeatherHero.idealNow}</strong></div>
                        </div>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center perspective-container">
                    <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-brand-accent text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 pop-3d-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-coral animate-ping" />
                        <span>3D Animated Tourism & Live Weather Platform</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight pop-3d-lg">
                        Discover. Plan. <span className="text-brand-coral">Experience.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-200 mb-12 font-light pop-3d-sm">
                        Live atmospheric tourism with 3D perspective depth, real-time weather forecasts, and smart AI itineraries tailored to the current hour.
                    </p>

                    {/* Search Widget */}
                    <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 rounded-3xl shadow-2xl text-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center border border-slate-100 card-3d pop-3d-sm">
                        <div className="text-left px-3 py-2 sm:border-r border-slate-200">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Destination</label>
                            <select value={filterBudget} onChange={(e) => setFilterBudget(e.target.value)} className="w-full bg-transparent font-semibold text-slate-700 focus:outline-none">
                                <option value="All">All Destinations</option>
                                {destinations.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                            </select>
                        </div>
                        <div className="text-left px-3 py-2 sm:border-r border-slate-200">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Max Budget</label>
                            <select value={filterBudget} onChange={(e) => setFilterBudget(e.target.value)} className="w-full bg-transparent font-semibold text-slate-700 focus:outline-none">
                                <option value="All">Any Budget</option>
                                <option value="low">Under ₹3,000 / day</option>
                                <option value="mid">₹3,000 - ₹5,000 / day</option>
                                <option value="high">Luxury (₹5,000+)</option>
                            </select>
                        </div>
                        <div className="text-left px-3 py-2 sm:border-r border-slate-200">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Travel Type</label>
                            <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="w-full bg-transparent font-semibold text-slate-700 focus:outline-none">
                                <option value="All">All Types</option>
                                <option value="Nature">Nature & Hills</option>
                                <option value="Heritage">Heritage & Culture</option>
                                <option value="Beach">Beaches & Coastal</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={() => setActiveTab('explore')} className="w-full py-4 rounded-2xl bg-brand-coral hover:bg-brand-coralHover text-white font-bold text-base shadow-lg transition flex items-center justify-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                <span>Explore Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Destinations */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span className="text-brand-coral font-bold text-sm tracking-wider uppercase">Top Choices</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Popular Destinations</h2>
                    </div>
                    <button onClick={() => setActiveTab('explore')} className="mt-4 md:mt-0 text-brand font-bold hover:text-brand-coral flex items-center space-x-1 group">
                        <span>View all destinations</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.slice(0, 6).map((dest) => {
                        const dw = computeLiveWeather(dest.name, effectiveDate);
                        return (
                            <div key={dest.id} className="card-3d bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col group cursor-pointer" onClick={() => { setSelectedDestination(dest); setActiveTab('explore-detail'); }}>
                                <div className="relative h-64 overflow-hidden">
                                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                    {/* Live Weather Badge Based on Current Time */}
                                    <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center space-x-1.5 border border-white/20 pop-3d-sm">
                                        <span>{dw.icon}</span>
                                        <span className="text-amber-300 font-extrabold">{dw.temp}</span>
                                        <span className="text-[10px] text-slate-300 font-medium hidden sm:inline">• {dw.phaseLabel}</span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center space-x-1 pop-3d-sm">
                                        <svg className="w-3.5 h-3.5 text-amber-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                        <span>{dest.rating}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-brand/90 backdrop-blur-md px-3 py-1 rounded-xl text-white text-xs font-semibold pop-3d-sm border border-white/10">
                                        Starting {dest.budget}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand transition">{dest.name}</h3>
                                        <p className="text-slate-600 text-sm line-clamp-2 mb-4 font-light">{dest.description}</p>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-xs font-semibold text-brand-coral uppercase tracking-wider">{dest.activities.length} Key Activities</span>
                                        <span className="text-sm font-bold text-brand group-hover:translate-x-1 transition flex items-center space-x-1">
                                            <span>Explore</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Recommended Hotels Preview */}
            <section className="bg-white py-20 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <span className="text-brand-coral font-bold text-sm tracking-wider uppercase">Luxury & Comfort</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Recommended Hotels</h2>
                        </div>
                        <button onClick={() => setActiveTab('hotels')} className="mt-4 md:mt-0 text-brand font-bold hover:text-brand-coral flex items-center space-x-1 group">
                            <span>Browse all hotels</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {initialHotels.slice(0, 3).map((hotel) => (
                            <div key={hotel.id} className="card-3d bg-brand-sand rounded-3xl overflow-hidden border border-slate-200 flex flex-col group">
                                <div className="relative h-56 overflow-hidden">
                                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center space-x-1">
                                        <svg className="w-3.5 h-3.5 text-amber-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                        <span>{hotel.rating}</span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{hotel.location}</span>
                                        <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">{hotel.name}</h3>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {hotel.facilities.map((fac, idx) => (
                                                <span key={idx} className="bg-white px-2.5 py-1 rounded-lg text-xs font-medium text-slate-600 border border-slate-200">{fac}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-slate-500 block">Per night</span>
                                            <span className="text-lg font-extrabold text-brand">{hotel.price}</span>
                                        </div>
                                        <button onClick={() => setBookingHotel(hotel)} className="px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold text-sm transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Travel Buddy */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-coral font-bold text-sm tracking-wider uppercase">Seamless Journey</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Why Choose Travel Buddy</h2>
                    <p className="text-slate-600 mt-3 font-light">Designed to solve scattered travel planning and empower local tourism businesses with digital visibility.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
                        <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold">01</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Trip Planner</h3>
                        <p className="text-slate-600 font-light text-sm">Generate complete day-by-day itineraries tailored to your exact budget, interests, and duration in seconds.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
                        <div className="w-16 h-16 bg-brand-coral/10 text-brand-coral rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold">02</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Local Business Hub</h3>
                        <p className="text-slate-600 font-light text-sm">Discover hidden gems, local tour guides, authentic restaurants, and support small tourism enterprises directly.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
                        <div className="w-16 h-16 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold">03</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Verified Reviews</h3>
                        <p className="text-slate-600 font-light text-sm">Make confident decisions backed by authentic traveler ratings and comprehensive destination guides.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

window.HomeTab = HomeTab;
