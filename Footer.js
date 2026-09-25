// ==========================================================================
// Travel Buddy - Footer Component
// ==========================================================================

function Footer({ setActiveTab }) {
    return (
        <footer className="bg-brand text-white py-16 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-brand-coral flex items-center justify-center font-bold text-white text-sm">
                            TB
                        </div>
                        <span className="text-xl font-extrabold tracking-tight">Travel Buddy</span>
                    </div>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                        Smart Tourism & Travel Platform connecting travelers with unforgettable destinations and local businesses.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-coral">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li><button onClick={() => setActiveTab('explore')} className="hover:text-white transition">Destination Explorer</button></li>
                        <li><button onClick={() => setActiveTab('animation')} className="hover:text-brand-coral text-brand-coral font-bold transition flex items-center gap-1"><span>✨</span> Animation Tour</button></li>
                        <li><button onClick={() => setActiveTab('planner')} className="hover:text-white transition">Smart Trip Planner</button></li>
                        <li><button onClick={() => setActiveTab('hotels')} className="hover:text-white transition">Hotel Discovery</button></li>
                        <li><button onClick={() => setActiveTab('business')} className="hover:text-white transition">Local Business Hub</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-coral">Top Destinations</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li>Pune & Sahyadris</li>
                        <li>Mumbai City</li>
                        <li>Goa Beaches</li>
                        <li>Mahabaleshwar & Lonavala</li>
                        <li>Jaipur Pink City</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-coral">College Project Prototype</h4>
                    <p className="text-slate-400 text-sm font-light mb-4">
                        Built with React, Tailwind CSS, and local persistence. Fully responsive and ready for demonstration.
                    </p>
                    <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-brand-accent">
                        v1.0 Production Ready
                    </span>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10 text-center text-xs text-slate-400">
                © 2026 Travel Buddy Platform. All rights reserved. Built with passion for smarter journeys.
            </div>
        </footer>
    );
}

window.Footer = Footer;
