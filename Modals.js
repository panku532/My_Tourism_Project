// ==========================================================================
// Travel Buddy - Modal Components (Hotel Booking & Business Listing)
// ==========================================================================

function BookingModal({
    bookingHotel,
    setBookingHotel,
    bookingSuccess,
    setBookingSuccess,
    guestName,
    setGuestName,
    guestPhone,
    setGuestPhone
}) {
    if (!bookingHotel) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative">
                <button 
                    onClick={() => { setBookingHotel(null); setBookingSuccess(false); }} 
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {!bookingSuccess ? (
                    <div>
                        <span className="text-xs font-bold text-brand-coral uppercase tracking-wider">Instant Reservation</span>
                        <h3 className="text-2xl font-extrabold text-slate-900 mt-1 mb-2">Book {bookingHotel.name}</h3>
                        <p className="text-slate-500 text-sm mb-6">{bookingHotel.location} • <strong className="text-brand">{bookingHotel.price}</strong> / night</p>

                        <form onSubmit={(e) => { e.preventDefault(); setBookingSuccess(true); }} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter guest name" 
                                    value={guestName} 
                                    onChange={(e) => setGuestName(e.target.value)} 
                                    required 
                                    className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none" 
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                                <input 
                                    type="tel" 
                                    placeholder="+91 98765 43210" 
                                    value={guestPhone} 
                                    onChange={(e) => setGuestPhone(e.target.value)} 
                                    required 
                                    className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none" 
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Check-in</label>
                                    <input type="date" required className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Check-out</label>
                                    <input type="date" required className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none text-sm" />
                                </div>
                            </div>
                            <button type="submit" className="w-full py-4 rounded-2xl bg-brand hover:bg-brand-dark text-white font-bold text-base shadow-lg transition mt-4">
                                Confirm Booking (Prototype)
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Booking Confirmed!</h3>
                        <p className="text-slate-600 text-sm mb-6">
                            Thank you, {guestName}. Your reservation at <strong>{bookingHotel.name}</strong> is confirmed. A confirmation SMS has been sent to {guestPhone}.
                        </p>
                        <button 
                            onClick={() => { setBookingHotel(null); setBookingSuccess(false); }} 
                            className="w-full py-3.5 rounded-xl bg-brand text-white font-bold text-sm"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

function AddBusinessModal({
    showAddBusinessModal,
    setShowAddBusinessModal,
    newBiz,
    setNewBiz,
    handleAddBusiness
}) {
    if (!showAddBusinessModal) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                <button 
                    onClick={() => setShowAddBusinessModal(false)} 
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <span className="text-xs font-bold text-brand-coral uppercase tracking-wider">Tourism Business Hub</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1 mb-6">Promote Your Business</h3>

                <form onSubmit={handleAddBusiness} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Business Name</label>
                        <input 
                            type="text" 
                            placeholder="e.g. Sunset Beach Cafe" 
                            value={newBiz.name} 
                            onChange={(e) => setNewBiz({...newBiz, name: e.target.value})} 
                            required 
                            className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none" 
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category</label>
                            <select 
                                value={newBiz.category} 
                                onChange={(e) => setNewBiz({...newBiz, category: e.target.value})} 
                                className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none"
                            >
                                <option>Hotels</option>
                                <option>Restaurants</option>
                                <option>Travel agencies</option>
                                <option>Tour guides</option>
                                <option>Adventure activities</option>
                                <option>Local shops</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Price Range</label>
                            <select 
                                value={newBiz.priceRange} 
                                onChange={(e) => setNewBiz({...newBiz, priceRange: e.target.value})} 
                                className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none"
                            >
                                <option>₹</option>
                                <option>₹₹</option>
                                <option>₹₹₹</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Location</label>
                        <input 
                            type="text" 
                            placeholder="e.g. Colva Beach, Goa" 
                            value={newBiz.location} 
                            onChange={(e) => setNewBiz({...newBiz, location: e.target.value})} 
                            required 
                            className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contact Info</label>
                        <input 
                            type="text" 
                            placeholder="+91 98765 43210" 
                            value={newBiz.contact} 
                            onChange={(e) => setNewBiz({...newBiz, contact: e.target.value})} 
                            required 
                            className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Description</label>
                        <textarea 
                            rows="3" 
                            placeholder="Tell travelers about your services..." 
                            value={newBiz.description} 
                            onChange={(e) => setNewBiz({...newBiz, description: e.target.value})} 
                            required 
                            className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Image URL (optional)</label>
                        <input 
                            type="url" 
                            placeholder="https://images.unsplash.com/..." 
                            value={newBiz.image} 
                            onChange={(e) => setNewBiz({...newBiz, image: e.target.value})} 
                            className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none" 
                        />
                    </div>
                    <button type="submit" className="w-full py-4 rounded-2xl bg-brand-coral hover:bg-brand-coralHover text-white font-bold text-base shadow-lg transition mt-4">
                        Publish Business Listing
                    </button>
                </form>
            </div>
        </div>
    );
}

window.BookingModal = BookingModal;
window.AddBusinessModal = AddBusinessModal;
