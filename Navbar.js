// ==========================================================================
// Travel Buddy - Navigation Bar Component
// ==========================================================================

function Navbar({ activeTab, setActiveTab, setSelectedDestination }) {
    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <div 
                    className="flex items-center space-x-3 cursor-pointer" 
                    onClick={() => { setActiveTab('home'); setSelectedDestination(null); }}
                >
                    <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-white font-bold text-xl shadow-md">
                        TB
                    </div>
                    <div>
                        <span className="text-2xl font-extrabold tracking-tight text-brand">Travel Buddy</span>
                        <span className="block text-xs font-medium text-slate-500 tracking-wider uppercase">Smart Tourism Platform</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1 font-medium text-sm">
                    <button 
                        onClick={() => { setActiveTab('home'); setSelectedDestination(null); }} 
                        className={`px-4 py-2 rounded-lg transition ${activeTab === 'home' ? 'bg-brand text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => { setActiveTab('explore'); setSelectedDestination(null); }} 
                        className={`px-4 py-2 rounded-lg transition ${activeTab === 'explore' || activeTab === 'explore-detail' ? 'bg-brand text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        Destinations
                    </button>
                    <button 
                        onClick={() => { setActiveTab('planner'); setSelectedDestination(null); }} 
                        className={`px-4 py-2 rounded-lg transition ${activeTab === 'planner' ? 'bg-brand text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        Trip Planner
                    </button>
                    <button 
                        onClick={() => { setActiveTab('hotels'); setSelectedDestination(null); }} 
                        className={`px-4 py-2 rounded-lg transition ${activeTab === 'hotels' ? 'bg-brand text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        Hotels
                    </button>
                    <button 
                        onClick={() => { setActiveTab('business'); setSelectedDestination(null); }} 
                        className={`px-4 py-2 rounded-lg transition ${activeTab === 'business' ? 'bg-brand text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        Local Hub
                    </button>
                    <button 
                        onClick={() => { setActiveTab('reviews'); setSelectedDestination(null); }} 
                        className={`px-3.5 py-2 rounded-xl transition text-sm font-semibold ${activeTab === 'reviews' ? 'bg-brand text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        Reviews
                    </button>
                    <button 
                        onClick={() => { setActiveTab('animation'); setSelectedDestination(null); }} 
                        className={`relative px-4 py-2 rounded-xl transition text-sm font-bold flex items-center space-x-1.5 ${activeTab === 'animation' ? 'bg-gradient-to-r from-brand to-brand-dark text-white shadow-lg shadow-brand/30 ring-2 ring-brand-coral' : 'text-brand-coral hover:bg-orange-50 bg-orange-50/50'}`}
                    >
                        <span className="animate-spin text-base" style={{ animationDuration: '6s' }}>✨</span>
                        <span>Animation Tour</span>
                        <span className="ml-1 px-1.5 py-0.5 text-[10px] uppercase font-extrabold bg-brand-coral text-white rounded-full animate-pulse">Live</span>
                    </button>
                </nav>

                <div className="flex items-center space-x-3">
                    <button 
                        onClick={() => { setActiveTab('planner'); setSelectedDestination(null); }} 
                        className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-brand-coral hover:bg-brand-coralHover text-white font-semibold text-sm shadow-md transition transform active:scale-95"
                    >
                        Plan My Trip
                    </button>
                    <button 
                        onClick={() => setActiveTab('business')} 
                        className="inline-flex md:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Bar */}
            <div className="flex md:hidden overflow-x-auto px-4 py-2 bg-slate-50 border-t border-slate-200 space-x-2 hide-scrollbar">
                <button onClick={() => { setActiveTab('home'); setSelectedDestination(null); }} className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${activeTab === 'home' ? 'bg-brand text-white' : 'bg-white text-slate-600'}`}>Home</button>
                <button onClick={() => { setActiveTab('explore'); setSelectedDestination(null); }} className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${activeTab === 'explore' || activeTab === 'explore-detail' ? 'bg-brand text-white' : 'bg-white text-slate-600'}`}>Destinations</button>
                <button onClick={() => { setActiveTab('planner'); setSelectedDestination(null); }} className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${activeTab === 'planner' ? 'bg-brand text-white' : 'bg-white text-slate-600'}`}>Trip Planner</button>
                <button onClick={() => { setActiveTab('hotels'); setSelectedDestination(null); }} className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${activeTab === 'hotels' ? 'bg-brand text-white' : 'bg-white text-slate-600'}`}>Hotels</button>
                <button onClick={() => { setActiveTab('business'); setSelectedDestination(null); }} className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${activeTab === 'business' ? 'bg-brand text-white' : 'bg-white text-slate-600'}`}>Local Hub</button>
                <button onClick={() => { setActiveTab('reviews'); setSelectedDestination(null); }} className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${activeTab === 'reviews' ? 'bg-brand text-white' : 'bg-white text-slate-600'}`}>Reviews</button>
                <button onClick={() => { setActiveTab('animation'); setSelectedDestination(null); }} className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex items-center space-x-1 ${activeTab === 'animation' ? 'bg-brand-coral text-white shadow-md' : 'bg-orange-100 text-brand-coral'}`}>
                    <span>✨</span>
                    <span>Animation Tab</span>
                </button>
            </div>
        </header>
    );
}

window.Navbar = Navbar;
