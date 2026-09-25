// ==========================================================================
// Travel Buddy - Interactive Animated Virtual Journey Tour Component
// ==========================================================================

function AnimationTourTab({
    animationMood,
    setAnimationMood,
    destinations,
    tourIndex,
    setTourIndex,
    autoTourPlay,
    setAutoTourPlay,
    soundPlaying,
    setSoundPlaying,
    setSelectedDestination,
    setActiveTab,
    setPlannerDest
}) {
    const destList = destinations || window.initialDestinations || [];
    const currentDest = destList[tourIndex] || destList[0];

    return (
        <div key="animation" className="animate-tab-content py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
            {/* Header Banner */}
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center space-x-2 bg-brand-coral/10 border border-brand-coral/20 px-4 py-1.5 rounded-full text-brand-coral text-xs font-extrabold uppercase tracking-widest mb-3 animate-pulse">
                    <span>✨ Interactive Motion Experience</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    Live Animated <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-orange-500">Virtual Journey</span>
                </h1>
                <p className="text-slate-600 mt-3 text-base sm:text-lg font-normal">
                    Explore India with dynamic route flight simulators, interactive 3D perspective cards, real-time atmosphere weather shifts, and ambient soundscapes.
                </p>
            </div>

            {/* Atmosphere & Lighting Animator Controller */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                        <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                            <span>🌤️</span> Real-Time Atmosphere & Lighting
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">Switch time-of-day and weather to see animated atmospheric particles</p>
                    </div>

                    {/* Atmosphere Toggles */}
                    <div className="flex flex-wrap gap-2">
                        {[
                            { id: 'sunset', label: 'Sunset Glow', icon: '🌅' },
                            { id: 'night', label: 'Starry Midnight', icon: '🌌' },
                            { id: 'monsoon', label: 'Monsoon Mist', icon: '🌧️' },
                            { id: 'sunny', label: 'Azure Sunshine', icon: '☀️' }
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => setAnimationMood(item.id)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center space-x-1.5 shadow-sm ${
                                    animationMood === item.id
                                        ? 'bg-brand text-white scale-105 shadow-md shadow-brand/20 ring-2 ring-brand-coral'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* The Dynamic Atmospheric Stage */}
                <div className={`relative overflow-hidden rounded-2xl p-8 sm:p-12 text-white transition-all duration-700 theme-${animationMood} min-h-[320px] flex flex-col justify-between shadow-inner`}>
                    
                    {/* Night Stars Animation */}
                    {animationMood === 'night' && (
                        <div className="absolute inset-0 pointer-events-none">
                            {[15, 35, 55, 75, 20, 80, 45, 90, 10, 65].map((pos, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-white rounded-full"
                                    style={{
                                        top: `${(i * 9 + 5)}%`,
                                        left: `${pos}%`,
                                        animation: `starTwinkle ${1.5 + (i % 3)}s ease-in-out infinite ${i * 0.2}s`
                                    }}
                                />
                            ))}
                            <div className="absolute top-6 right-10 w-16 h-16 rounded-full bg-amber-100/90 shadow-[0_0_40px_rgba(255,255,200,0.8)] animate-pulse" />
                        </div>
                    )}

                    {/* Monsoon Rain Animation */}
                    {animationMood === 'monsoon' && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {Array.from({ length: 24 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-[2px] h-6 bg-cyan-200/60 rounded-full"
                                    style={{
                                        left: `${(i * 4.2)}%`,
                                        top: `${(i % 5) * 10}px`,
                                        animation: `rainDropAnim ${0.6 + (i % 4) * 0.15}s linear infinite ${(i * 0.08)}s`
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Sunny Clouds Animation */}
                    {animationMood === 'sunny' && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div className="absolute -top-10 left-10 w-28 h-28 rounded-full bg-amber-300 shadow-[0_0_80px_rgba(251,191,36,0.9)] animate-pulse" />
                            <div
                                className="absolute top-12 w-44 h-12 bg-white/40 backdrop-blur-sm rounded-full filter blur-[1px]"
                                style={{ animation: 'cloudDriftSlow 18s linear infinite' }}
                            />
                            <div
                                className="absolute top-24 w-32 h-10 bg-white/30 backdrop-blur-sm rounded-full filter blur-[1px]"
                                style={{ animation: 'cloudDriftSlow 24s linear infinite 5s' }}
                            />
                        </div>
                    )}

                    {/* Sunset Glowing Embers */}
                    {animationMood === 'sunset' && (
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute bottom-[-40px] right-20 w-48 h-48 rounded-full bg-gradient-to-t from-amber-500 to-rose-500 opacity-60 filter blur-2xl" />
                        </div>
                    )}

                    {/* Stage Content */}
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
                                <span className="w-2 h-2 rounded-full bg-brand-coral animate-ping" />
                                <span>Active Flight Route</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                                Flying to {currentDest.name}
                            </h2>
                            <p className="text-white/80 text-sm mt-1 max-w-md font-light">
                                {currentDest.tagline}
                            </p>
                        </div>

                        {/* Flight Status Badge */}
                        <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center space-x-4 min-w-[240px]">
                            <div className="w-12 h-12 rounded-xl bg-brand-coral/90 flex items-center justify-center text-2xl animate-bounce">
                                ✈️
                            </div>
                            <div>
                                <span className="block text-[11px] uppercase tracking-wider text-white/70 font-semibold">Cruise Status</span>
                                <span className="font-extrabold text-base text-white">820 km/h • 29,000 ft</span>
                                <span className="block text-[11px] text-brand-coral font-bold mt-0.5">Smooth Tailwind</span>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Flight Map SVG */}
                    <div className="relative z-10 my-8 py-4 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 px-4">
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white/70 mb-2 px-2">
                            <span>Route Telemetry</span>
                            <span className="flex items-center gap-1.5 text-brand-coral">
                                <span className="w-2 h-2 rounded-full bg-brand-coral animate-ping" />
                                Active GPS Tracking
                            </span>
                        </div>

                        {/* SVG Path Route */}
                        <div className="relative h-20 w-full overflow-hidden flex items-center">
                            <svg className="w-full h-full" viewBox="0 0 800 80" preserveAspectRatio="none">
                                {/* Background track line */}
                                <path d="M 40 40 Q 200 10, 400 40 T 760 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                                {/* Active animated dashed line */}
                                <path d="M 40 40 Q 200 10, 400 40 T 760 40" fill="none" stroke="#FF6B4A" strokeWidth="3" className="flight-dash-path" />
                            </svg>

                            {/* Waypoint Destination Pins */}
                            {destList.map((d, i) => {
                                const percent = (i / (destList.length - 1)) * 90 + 5;
                                const isCurrent = i === tourIndex;
                                return (
                                    <button
                                        key={d.id}
                                        onClick={() => setTourIndex(i)}
                                        className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                                        style={{ left: `${percent}%`, top: '50%' }}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                                            isCurrent
                                                ? 'bg-brand-coral text-white scale-125 shadow-lg shadow-brand-coral/50 ring-4 ring-white/50 animate-pulse'
                                                : 'bg-white/40 text-white hover:bg-white hover:text-brand scale-90'
                                        }`}>
                                            {i + 1}
                                        </div>
                                        <span className={`absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-bold px-2 py-0.5 rounded-md transition-all ${
                                            isCurrent ? 'bg-white text-brand shadow-md scale-105' : 'text-white/80 group-hover:text-white'
                                        }`}>
                                            {d.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Controls Bar */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => setAutoTourPlay(!autoTourPlay)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
                                    autoTourPlay ? 'bg-white text-brand shadow-md hover:bg-slate-100' : 'bg-brand-coral text-white shadow-md hover:bg-brand-coralHover'
                                }`}
                            >
                                <span>{autoTourPlay ? '⏸ Pause Auto-Tour' : '▶ Play Auto-Tour'}</span>
                            </button>

                            <button
                                onClick={() => setTourIndex(prev => (prev + 1) % destList.length)}
                                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition flex items-center space-x-1"
                            >
                                <span>Next Destination</span>
                                <span>→</span>
                            </button>
                        </div>

                        {/* Soundscape Visualizer */}
                        <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                            <button
                                onClick={() => setSoundPlaying(!soundPlaying)}
                                className="text-xs font-bold text-white hover:text-brand-coral transition flex items-center gap-1.5"
                            >
                                <span>{soundPlaying ? '🔊' : '🔇'}</span>
                                <span>Ambience Audio</span>
                            </button>
                            {/* Equalizer Bars */}
                            <div className="flex items-end space-x-1 h-5 w-16">
                                {[1, 2, 3, 4, 5].map(b => (
                                    <div
                                        key={b}
                                        className={`w-1 bg-brand-coral rounded-full transition-all ${
                                            soundPlaying ? 'animate-bounce' : 'h-1.5 bg-white/30'
                                        }`}
                                        style={{
                                            height: soundPlaying ? `${(b * 5) + 6}px` : '4px',
                                            animationDuration: `${0.4 + b * 0.15}s`
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3D Perspective Interactive Showcase Cards */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <span className="text-xs font-bold text-brand-coral uppercase tracking-wider">Interactive 3D Cards</span>
                        <h3 className="text-2xl font-black text-slate-900">Hover for 3D Perspective Tilt</h3>
                    </div>
                    <button
                        onClick={() => { setSelectedDestination(currentDest); setActiveTab('explore-detail'); }}
                        className="px-4 py-2 rounded-xl bg-brand text-white font-bold text-xs hover:bg-brand-dark transition shadow-md"
                    >
                        Open Full {currentDest.name} Guide →
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Destination Spotlight */}
                    <div className="interactive-3d-card bg-white rounded-3xl overflow-hidden border border-slate-200/80 p-6 flex flex-col justify-between">
                        <div>
                            <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-md group">
                                <img src={currentDest.image} alt={currentDest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-3 left-3 bg-brand/90 backdrop-blur-md text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Spotlight City
                                </div>
                                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-brand text-xs font-bold px-2.5 py-1 rounded-lg">
                                    ⭐ {currentDest.rating}
                                </div>
                            </div>
                            <h4 className="text-xl font-extrabold text-slate-900">{currentDest.name}</h4>
                            <p className="text-xs text-brand-coral font-bold mt-0.5">{currentDest.bestTime}</p>
                            <p className="text-slate-600 text-xs mt-2 line-clamp-3 font-light leading-relaxed">
                                {currentDest.description}
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold">
                            <span className="text-slate-500">Avg Daily Budget</span>
                            <span className="text-brand text-sm">{currentDest.budget}</span>
                        </div>
                    </div>

                    {/* Card 2: Top Attractions Radar */}
                    <div className="interactive-3d-card bg-white rounded-3xl overflow-hidden border border-slate-200/80 p-6 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-brand-coral flex items-center justify-center text-2xl font-bold mb-4 animate-float">
                                🏛️
                            </div>
                            <h4 className="text-xl font-extrabold text-slate-900">Must-Visit Sights</h4>
                            <p className="text-slate-500 text-xs mb-4">Curated top attractions with live visitor footfall radar</p>
                            <div className="space-y-2.5">
                                {currentDest.attractions.map((spot, sIdx) => (
                                    <div key={sIdx} className="flex items-center justify-between p-2.5 rounded-xl bg-brand-sand hover:bg-orange-50 transition border border-slate-100">
                                        <div className="flex items-center space-x-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                            <span className="text-xs font-bold text-slate-800">{spot}</span>
                                        </div>
                                        <span className="text-[11px] font-semibold text-slate-500">Popular</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                            <span>✓ Verified Tourism Board Partner</span>
                        </div>
                    </div>

                    {/* Card 3: Live Food & Stay Telemetry */}
                    <div className="interactive-3d-card bg-white rounded-3xl overflow-hidden border border-slate-200/80 p-6 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-2xl font-bold mb-4 animate-float">
                                🏨
                            </div>
                            <h4 className="text-xl font-extrabold text-slate-900">Hotels & Dining</h4>
                            <p className="text-slate-500 text-xs mb-4">Top recommended stays & legendary food spots</p>
                            <div className="space-y-3">
                                <div className="p-3 rounded-xl bg-brand-sand border border-slate-100">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Top Stay</span>
                                    <div className="flex justify-between items-center mt-1">
                                        <strong className="text-xs text-slate-800 font-extrabold">{currentDest.hotels[0].name}</strong>
                                        <span className="text-xs text-brand-coral font-bold">{currentDest.hotels[0].price}</span>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-brand-sand border border-slate-100">
                                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Iconic Food</span>
                                    <div className="flex justify-between items-center mt-1">
                                        <strong className="text-xs text-slate-800 font-extrabold">{currentDest.restaurants[0].name}</strong>
                                        <span className="text-xs text-slate-500">{currentDest.restaurants[0].specialty}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-slate-100 mt-4">
                            <button
                                onClick={() => { setActiveTab('planner'); setPlannerDest(currentDest.name); }}
                                className="w-full py-2.5 rounded-xl bg-brand-sand hover:bg-brand hover:text-white text-slate-800 font-bold text-xs transition text-center block"
                            >
                                Build {currentDest.name} Itinerary ✈️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

window.AnimationTourTab = AnimationTourTab;
