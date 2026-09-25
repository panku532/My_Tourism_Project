// ==========================================================================
// Travel Buddy - Hotel Discovery Component
// ==========================================================================

function HotelsTab({ hotels, setBookingHotel }) {
    const hotelList = hotels || window.initialHotels || [];

    return (
        <div key="hotels" className="animate-tab-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-brand-coral font-bold text-sm tracking-wider uppercase">Stays & Resorts</span>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Hotel Discovery</h1>
                <p className="text-slate-600 mt-3 font-light">Find handpicked hotels, luxury resorts, and cozy boutique stays with top-tier amenities.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {hotelList.map((hotel) => (
                    <div key={hotel.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-slate-200 flex flex-col group">
                        <div className="relative h-60 overflow-hidden">
                            <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center space-x-1">
                                <svg className="w-3.5 h-3.5 text-amber-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <span>{hotel.rating}</span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{hotel.location}</span>
                                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">{hotel.name}</h3>
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {hotel.facilities.map((fac, idx) => (
                                        <span key={idx} className="bg-brand-sand px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">{fac}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <div>
                                    <span className="text-xs text-slate-500 block">Per night</span>
                                    <span className="text-xl font-extrabold text-brand">{hotel.price}</span>
                                </div>
                                <button onClick={() => setBookingHotel(hotel)} className="px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-coral text-white font-semibold text-sm transition shadow-sm">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

window.HotelsTab = HotelsTab;
