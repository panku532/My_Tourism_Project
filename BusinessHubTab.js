// ==========================================================================
// Travel Buddy - Local Business Hub Component
// ==========================================================================

function BusinessHubTab({ businesses, setShowAddBusinessModal }) {
    const bizList = businesses || window.initialBusinesses || [];

    return (
        <div key="business" className="animate-tab-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                <div>
                    <span className="text-brand-coral font-bold text-sm tracking-wider uppercase">Empowering Local Enterprises</span>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Local Business Hub</h1>
                    <p className="text-slate-600 mt-3 font-light max-w-2xl">Promote your hotel, restaurant, travel agency, or tour guide service and reach thousands of enthusiastic tourists.</p>
                </div>
                <button onClick={() => setShowAddBusinessModal(true)} className="mt-6 md:mt-0 px-6 py-3.5 rounded-2xl bg-brand-coral hover:bg-brand-coralHover text-white font-bold text-sm shadow-lg transition flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                    <span>Add Your Business</span>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {bizList.map((biz) => (
                    <div key={biz.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-slate-200 flex flex-col group">
                        <div className="relative h-48 overflow-hidden">
                            <img src={biz.image} alt={biz.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            <span className="absolute top-4 left-4 bg-brand/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                                {biz.category}
                            </span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{biz.location}</span>
                                    <span className="text-xs font-bold text-brand-coral">{biz.priceRange}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{biz.name}</h3>
                                <p className="text-slate-600 text-xs line-clamp-3 mb-4 font-light leading-relaxed">{biz.description}</p>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-xs font-semibold text-slate-500">{biz.contact}</span>
                                <button onClick={() => alert(`Contacting ${biz.name} at ${biz.contact}`)} className="px-3 py-1.5 rounded-xl bg-brand-sand hover:bg-brand hover:text-white text-slate-700 text-xs font-bold transition border border-slate-200">
                                    Connect
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

window.BusinessHubTab = BusinessHubTab;
