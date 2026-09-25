// ==========================================================================
// Travel Buddy - Smart Trip Planner Component
// ==========================================================================

function TripPlannerTab({
    plannerDest,
    setPlannerDest,
    plannerDays,
    setPlannerDays,
    plannerTravelers,
    setPlannerTravelers,
    plannerBudget,
    setPlannerBudget,
    plannerInterests,
    setPlannerInterests,
    itineraryResult,
    destinations,
    handleGenerateItinerary
}) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-tab-content">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-brand-coral font-bold text-sm tracking-wider uppercase">AI-Powered Itinerary</span>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Smart Trip Planner</h1>
                <p className="text-slate-600 mt-3 font-light">Tell us your preferences and generate a customized day-by-day itinerary with accurate budget estimates.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Planner Form */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 h-fit">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Customize Your Trip</h3>
                    <form onSubmit={handleGenerateItinerary} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select Destination</label>
                            <select value={plannerDest} onChange={(e) => setPlannerDest(e.target.value)} className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none">
                                {destinations.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Number of Days</label>
                                <input type="number" min="1" max="10" value={plannerDays} onChange={(e) => setPlannerDays(Number(e.target.value))} className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Travelers</label>
                                <input type="number" min="1" max="10" value={plannerTravelers} onChange={(e) => setPlannerTravelers(Number(e.target.value))} className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Budget Level</label>
                            <select value={plannerBudget} onChange={(e) => setPlannerBudget(e.target.value)} className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none">
                                <option>Budget (₹2,000 - ₹5,000)</option>
                                <option>Medium (₹5,000 - ₹15,000)</option>
                                <option>Luxury (₹15,000+)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Interests</label>
                            <div className="flex flex-wrap gap-2">
                                {['Nature', 'Adventure', 'History', 'Food', 'Shopping', 'Relaxation'].map((interest) => {
                                    const active = plannerInterests.includes(interest);
                                    return (
                                        <button 
                                            type="button" 
                                            key={interest} 
                                            onClick={() => {
                                                if (active) setPlannerInterests(plannerInterests.filter(i => i !== interest));
                                                else setPlannerInterests([...plannerInterests, interest]);
                                            }} 
                                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${active ? 'bg-brand text-white' : 'bg-brand-sand text-slate-700 border border-slate-200'}`}
                                        >
                                            {interest}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <button type="submit" className="w-full py-4 rounded-2xl bg-brand-coral hover:bg-brand-coralHover text-white font-bold text-base shadow-lg transition">
                            Generate My Trip
                        </button>
                    </form>
                </div>

                {/* Itinerary Output */}
                <div className="lg:col-span-2 space-y-6">
                    {!itineraryResult ? (
                        <div className="bg-white p-16 rounded-3xl border border-slate-200 text-center flex flex-col items-center justify-center h-full">
                            <div className="w-20 h-20 rounded-full bg-brand/10 text-brand flex items-center justify-center text-3xl mb-4 font-bold">🗺️</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Your Itinerary Awaits</h3>
                            <p className="text-slate-500 max-w-md font-light">Fill out your travel preferences on the left and click "Generate My Trip" to view your custom schedule and budget breakdown.</p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                                    <div>
                                        <span className="text-xs font-bold text-brand-coral uppercase tracking-wider">Custom Itinerary</span>
                                        <h2 className="text-3xl font-extrabold text-slate-900 mt-1">{plannerDays} Days in {plannerDest}</h2>
                                        <p className="text-sm text-slate-500">{plannerTravelers} Traveler(s) • {plannerBudget}</p>
                                    </div>
                                    <button onClick={() => alert('Itinerary saved successfully!')} className="px-5 py-2.5 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition">
                                        Save Itinerary
                                    </button>
                                </div>

                                <div className="mt-8 space-y-6">
                                    {itineraryResult.days.map((d) => (
                                        <div key={d.day} className="card-3d bg-brand-sand p-6 rounded-2xl border border-slate-200">
                                            <h4 className="text-lg font-extrabold text-brand mb-4 flex items-center space-x-2">
                                                <span className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center text-sm">{d.day}</span>
                                                <span>Day {d.day} Schedule</span>
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                                <div className="bg-white p-4 rounded-xl border border-slate-200">
                                                    <span className="text-xs font-bold text-brand-coral uppercase tracking-wider block mb-1">Morning</span>
                                                    <span className="font-semibold text-slate-800">🏛️ {d.morning}</span>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-slate-200">
                                                    <span className="text-xs font-bold text-brand-coral uppercase tracking-wider block mb-1">Afternoon</span>
                                                    <span className="font-semibold text-slate-800">🍽️ {d.afternoon}</span>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-slate-200">
                                                    <span className="text-xs font-bold text-brand-coral uppercase tracking-wider block mb-1">Evening</span>
                                                    <span className="font-semibold text-slate-800">📸 {d.evening}</span>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-slate-200">
                                                    <span className="text-xs font-bold text-brand-coral uppercase tracking-wider block mb-1">Night Stay</span>
                                                    <span className="font-semibold text-slate-800">🏨 {d.night}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Budget Breakdown */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Estimated Budget Breakdown</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-brand-sand p-4 rounded-2xl border border-slate-200 text-center">
                                        <span className="text-xs text-slate-500 block mb-1 font-semibold">Hotels</span>
                                        <span className="text-lg font-bold text-slate-900">{itineraryResult.costs.hotel}</span>
                                    </div>
                                    <div className="bg-brand-sand p-4 rounded-2xl border border-slate-200 text-center">
                                        <span className="text-xs text-slate-500 block mb-1 font-semibold">Food & Dining</span>
                                        <span className="text-lg font-bold text-slate-900">{itineraryResult.costs.food}</span>
                                    </div>
                                    <div className="bg-brand-sand p-4 rounded-2xl border border-slate-200 text-center">
                                        <span className="text-xs text-slate-500 block mb-1 font-semibold">Travel & Transit</span>
                                        <span className="text-lg font-bold text-slate-900">{itineraryResult.costs.travel}</span>
                                    </div>
                                    <div className="bg-brand-sand p-4 rounded-2xl border border-slate-200 text-center">
                                        <span className="text-xs text-slate-500 block mb-1 font-semibold">Activities</span>
                                        <span className="text-lg font-bold text-slate-900">{itineraryResult.costs.activities}</span>
                                    </div>
                                </div>
                                <div className="bg-brand text-white p-6 rounded-2xl flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold block">Total Estimated Budget</span>
                                        <span className="text-sm text-slate-200">Includes all taxes & estimated fees</span>
                                    </div>
                                    <span className="text-3xl font-extrabold text-brand-coral">{itineraryResult.costs.total}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

window.TripPlannerTab = TripPlannerTab;
