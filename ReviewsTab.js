// ==========================================================================
// Travel Buddy - Reviews & Ratings Component
// ==========================================================================

function ReviewsTab({ 
    reviews, 
    newReview, 
    setNewReview, 
    handleAddReview, 
    destinations 
}) {
    const reviewList = reviews || window.initialReviews || [];
    const destList = destinations || window.initialDestinations || [];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-tab-content">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-brand-coral font-bold text-sm tracking-wider uppercase">Traveler Experiences</span>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Reviews & Ratings</h1>
                <p className="text-slate-600 mt-3 font-light">Read authentic reviews from happy travelers or share your own journey with the Travel Buddy community.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Submit Review Form */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 h-fit">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Leave a Review</h3>
                    <form onSubmit={handleAddReview} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Rahul Verma" 
                                value={newReview.name} 
                                onChange={(e) => setNewReview({...newReview, name: e.target.value})} 
                                required 
                                className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none" 
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Destination Visited</label>
                            <select 
                                value={newReview.destination} 
                                onChange={(e) => setNewReview({...newReview, destination: e.target.value})} 
                                className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none"
                            >
                                {destList.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Rating</label>
                            <select 
                                value={newReview.rating} 
                                onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})} 
                                className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none"
                            >
                                <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                                <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                                <option value={3}>⭐⭐⭐ (3/5 Good)</option>
                                <option value={2}>⭐⭐ (2/5 Average)</option>
                                <option value={1}>⭐ (1/5 Poor)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Review Comment</label>
                            <textarea 
                                rows="3" 
                                placeholder="Share your experience..." 
                                value={newReview.comment} 
                                onChange={(e) => setNewReview({...newReview, comment: e.target.value})} 
                                required 
                                className="w-full bg-brand-sand border border-slate-200 rounded-xl p-3 font-semibold text-slate-800 focus:outline-none"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 rounded-2xl bg-brand-coral hover:bg-brand-coralHover text-white font-bold text-base shadow-lg transition">
                            Submit Review
                        </button>
                    </form>
                </div>

                {/* Reviews List */}
                <div className="lg:col-span-2 space-y-6">
                    {reviewList.map((rev) => (
                        <div key={rev.id} className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">{rev.name}</h4>
                                    <span className="text-xs font-semibold text-brand-coral">Visited {rev.destination}</span>
                                </div>
                                <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                            </div>
                            <div className="flex items-center space-x-1 mb-3 text-amber-500">
                                {Array.from({length: rev.rating}).map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                ))}
                            </div>
                            <p className="text-slate-600 font-light text-sm sm:text-base">{rev.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

window.ReviewsTab = ReviewsTab;
