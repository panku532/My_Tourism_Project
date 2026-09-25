// ==========================================================================
// Travel Buddy - Live 3D Weather & Time Telemetry Strip
// ==========================================================================

function WeatherBar({ 
    getEffectiveDate, 
    timeOverride, 
    setTimeOverride, 
    liveWeatherHero, 
    destinations, 
    setSelectedDestination, 
    setActiveTab 
}) {
    const effectiveDate = getEffectiveDate();

    return (
        <div className="bg-slate-900 text-white border-b border-white/10 px-4 py-2.5 shadow-inner">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
                {/* Live Clock & Atmosphere Phase */}
                <div className="flex flex-wrap items-center gap-2.5">
                    <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-xl backdrop-blur-md border border-white/10 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-extrabold tracking-wide font-mono text-white text-sm">
                            {effectiveDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-slate-400">
                            {timeOverride ? 'Simulator' : 'Live Clock'}
                        </span>
                    </div>

                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-brand-coral/20 text-brand-coral border border-brand-coral/30 font-bold">
                        <span className="text-sm">{liveWeatherHero.icon}</span>
                        <span>{liveWeatherHero.phaseLabel}</span>
                    </div>

                    {/* Interactive Time Machine */}
                    <div className="hidden lg:flex items-center space-x-1 bg-black/40 px-2 py-0.5 rounded-lg border border-white/5">
                        <span className="text-[10px] text-slate-400 font-semibold mr-1">3D Sky Mood:</span>
                        {[
                            { id: null, label: '⚡ Live' },
                            { id: 'morning', label: '🌅 Morning' },
                            { id: 'day', label: '☀️ Noon' },
                            { id: 'sunset', label: '🌇 Sunset' },
                            { id: 'night', label: '🌙 Night' }
                        ].map(t => (
                            <button
                                key={t.label}
                                onClick={() => setTimeOverride(t.id)}
                                className={'px-2 py-0.5 rounded text-[10px] font-bold transition ' + (
                                    timeOverride === t.id
                                        ? 'bg-brand-coral text-white shadow-sm'
                                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                                )}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Destination Live Weather Ticker */}
                <div className="flex items-center overflow-x-auto max-w-full space-x-2 hide-scrollbar py-0.5">
                    {destinations.map(d => {
                        const w = computeLiveWeather(d.name, effectiveDate);
                        return (
                            <button
                                key={d.id}
                                onClick={() => { setSelectedDestination(d); setActiveTab('explore-detail'); }}
                                className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-lg backdrop-blur-md transition whitespace-nowrap border border-white/5 group"
                                title={w.condition + ' • Wind ' + w.wind}
                            >
                                <span className="text-sm group-hover:scale-125 transition-transform">{w.icon}</span>
                                <span className="font-bold text-slate-200">{d.name}</span>
                                <span className="font-extrabold text-amber-300">{w.temp}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

window.WeatherBar = WeatherBar;
