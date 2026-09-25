// ==========================================================================
// Travel Buddy - Destination Explorer & Detail View Component
// ==========================================================================

function ExploreTab({ 
    destinations, 
    selectedDestination, 
    setSelectedDestination, 
    setActiveTab, 
    getEffectiveDate, 
    setBookingHotel, 
    setPlannerDest 
}) {
    const effectiveDate = getEffectiveDate();

    // 1. Grid of All Destinations
    if (!selectedDestination) {
        return (
            <div key="explore" className="animate-tab-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-brand-coral font-bold text-sm tracking-wider uppercase">Explore the World</span>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Destination Explorer</h1>
                    <p className="text-slate-600 mt-3 font-light">Browse breathtaking destinations, check best seasons, explore top activities, and plan your next getaway.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest) => (
                        <div key={dest.id} className="card-3d bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col group cursor-pointer" onClick={() => setSelectedDestination(dest)}>
                            <div className="relative h-64 overflow-hidden">
                                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center space-x-1">
                                    <svg className="w-3.5 h-3.5 text-amber-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                    <span>{dest.rating}</span>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-brand/80 backdrop-blur-md px-3 py-1 rounded-xl text-white text-xs font-semibold">
                                    Starting {dest.budget}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-brand transition">{dest.name}</h3>
                                    <p className="text-xs font-medium text-brand-coral mb-3">{dest.tagline}</p>
                                    <p className="text-slate-600 text-sm line-clamp-2 mb-4 font-light">{dest.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {dest.activities.slice(0, 3).map((act, i) => (
                                            <span key={i} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium">{act}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-slate-500">{dest.bestTime}</span>
                                    <span className="px-4 py-2 rounded-xl bg-brand text-white font-semibold text-sm group-hover:bg-brand-coral transition">
                                        Explore
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 2. Individual Destination Detail View
    const cw = computeLiveWeather(selectedDestination.name, effectiveDate);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-tab-content">
            <button onClick={() => { setSelectedDestination(null); setActiveTab('explore'); }} className="inline-flex items-center space-x-2 text-brand font-semibold mb-8 hover:text-brand-coral transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                <span>Back to Destinations</span>
            </button>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-12">
                <div className="relative h-96">
                    <img src={selectedDestination.image} alt={selectedDestination.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 sm:p-12 text-white">
                        <div className="flex items-center space-x-3 mb-2">
                            <span className="bg-brand-coral px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">Featured Destination</span>
                            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                                <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <span>{selectedDestination.rating}</span>
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">{selectedDestination.name}</h1>
                        <p className="text-slate-200 text-lg max-w-3xl font-light">{selectedDestination.tagline}</p>
                    </div>
                </div>

                <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            {/* LIVE 3D TIME & WEATHER TELEMETRY STATION */}
                            <div className="card-3d bg-gradient-to-br from-brand to-brand-dark rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10 mb-8">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                                    <div>
                                        <span className="text-brand-coral font-bold text-xs uppercase tracking-wider block">Live Satellite Telemetry</span>
                                        <h3 className="text-2xl font-extrabold flex items-center gap-2 mt-0.5">
                                            <span>{cw.icon}</span>
                                            <span>Current Weather in {selectedDestination.name}</span>
                                        </h3>
                                        <p className="text-slate-300 text-xs mt-1">
                                            Local Station Clock: <strong className="text-white font-mono">{cw.timeStr}</strong> • {cw.phaseLabel}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-4xl sm:text-5xl font-black text-amber-300 block">{cw.temp}</span>
                                        <span className="text-xs text-slate-300">Feels like {cw.feelsLike}</span>
                                    </div>
                                </div>

                                {/* Weather Metric Cards */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                                    <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Condition</span>
                                        <strong className="text-xs font-bold text-white block truncate">{cw.condition}</strong>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Wind Velocity</span>
                                        <strong className="text-xs font-bold text-white block">{cw.wind}</strong>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Humidity</span>
                                        <strong className="text-xs font-bold text-white block">{cw.humidity}</strong>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Air Quality</span>
                                        <strong className="text-xs font-bold text-emerald-400 block">{cw.aqi}</strong>
                                    </div>
                                </div>

                                {/* Activity & Dress Advisory */}
                                <div className="bg-black/30 rounded-2xl p-4 border border-white/5 space-y-2 text-xs">
                                    <div className="flex items-start gap-2">
                                        <span className="text-brand-coral font-bold">🎯 Right Now:</span>
                                        <span className="text-slate-200">{cw.idealNow}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-sky-400 font-bold">👔 Suggested Attire:</span>
                                        <span className="text-slate-200">{cw.clothing}</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">About {selectedDestination.name}</h3>
                            <p className="text-slate-600 leading-relaxed font-light text-base">{selectedDestination.about}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Top Tourist Attractions</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {selectedDestination.attractions.map((attr, idx) => (
                                    <div key={idx} className="bg-brand-sand p-4 rounded-2xl border border-slate-200 flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center font-bold text-sm">0{idx + 1}</div>
                                        <span className="font-semibold text-slate-800">{attr}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Curated Hotels</h3>
                            <div className="space-y-4">
                                {selectedDestination.hotels.map((h, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm">
                                        <div>
                                            <h4 className="font-bold text-slate-900">{h.name}</h4>
                                            <span className="text-xs text-slate-500">{h.location} • ⭐ {h.rating}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-sm font-extrabold text-brand block">{h.price}</span>
                                            <button onClick={() => setBookingHotel({ id: idx, name: h.name, location: h.location, rating: h.rating, price: h.price, image: selectedDestination.image, facilities: ['Free WiFi', 'AC', 'Room Service'] })} className="mt-1 px-3 py-1.5 rounded-lg bg-brand hover:bg-brand-coral text-white text-xs font-semibold transition">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar info */}
                    <div className="space-y-6">
                        <div className="bg-brand-sand p-6 rounded-3xl border border-slate-200 space-y-4">
                            <h3 className="text-lg font-bold text-slate-900">Trip Summary</h3>
                            <div className="flex justify-between py-2 border-b border-slate-200 text-sm">
                                <span className="text-slate-500">Starting Budget</span>
                                <span className="font-bold text-slate-900">{selectedDestination.budget}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-200 text-sm">
                                <span className="text-slate-500">Best Time</span>
                                <span className="font-bold text-slate-900 text-right">{selectedDestination.bestTime}</span>
                            </div>
                            <button onClick={() => { setPlannerDest(selectedDestination.name); setActiveTab('planner'); }} className="w-full py-3.5 rounded-xl bg-brand-coral hover:bg-brand-coralHover text-white font-bold text-sm shadow-md transition text-center block">
                                Plan My Trip to {selectedDestination.name}
                            </button>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-slate-900 text-white p-6 rounded-3xl relative overflow-hidden h-64 flex flex-col justify-end">
                            <div className="absolute inset-0 opacity-40">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Map placeholder" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative z-10">
                                <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">Interactive Map</span>
                                <h4 className="text-xl font-bold">{selectedDestination.name} Tourist Zone</h4>
                                <p className="text-xs text-slate-300 mt-1">Explore attractions, dining spots & transit points.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

window.ExploreTab = ExploreTab;
