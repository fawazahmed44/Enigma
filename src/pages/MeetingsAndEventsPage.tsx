import React, { useState } from 'react';
import { Users, Calendar, Sparkles, CheckCircle2, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { PALAZZO_EVENTS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export const MeetingsAndEventsPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Gala Wedding',
    guestCount: '150-300',
    preferredDate: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#09090b]">
      {/* Hero Header */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-[#c8aa76]/20">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1800&auto=format&fit=crop"
            alt="Palazzo Versace Gala Ballroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#c8aa76]/10 border border-[#c8aa76]/30 text-[#c8aa76] text-xs uppercase tracking-[0.2em] font-medium mb-6">
            <Users className="w-3.5 h-3.5" />
            <span>Grand Galas & Corporate Summits</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#ede8df] tracking-tight leading-[1.1] mb-6">
            Meetings & <span className="text-[#c8aa76] italic font-normal">Gala Events</span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#9b9890] leading-relaxed mb-8">
            {PALAZZO_EVENTS_DATA.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs tracking-widest uppercase text-[#ede8df]/80">
            <div className="bg-[#121216] px-4 py-2 rounded-full border border-white/10">
              <span>Gala Ballroom Capacity: 900 Guests</span>
            </div>
            <div className="bg-[#121216] px-4 py-2 rounded-full border border-white/10">
              <span>Custom Versace Banquet Tableware</span>
            </div>
            <div className="bg-[#121216] px-4 py-2 rounded-full border border-white/10">
              <span>Dedicated Event Planning Concierge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs tracking-[0.2em] uppercase text-[#c8aa76] font-medium mb-1">
            Palatial Spaces
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
            Ballrooms & Meeting Suites
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PALAZZO_EVENTS_DATA.venues.map((venue) => (
            <div
              key={venue.name}
              className="bg-[#121216] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={venue.imageUrl}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#09090b]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs text-[#c8aa76] uppercase tracking-wider font-mono">
                    {venue.capacity}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-editorial text-2xl text-[#ede8df] mb-1">{venue.name}</h3>
                  <p className="text-xs text-[#c8aa76] tracking-wider uppercase mb-3">
                    Ideal for: {venue.idealFor}
                  </p>
                  <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed">
                    {venue.features}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 mt-4">
                <a
                  href={`mailto:${RESTAURANT_INFO.contact.email}?subject=Event Inquiry: ${encodeURIComponent(venue.name)}`}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-[#1c1c22] hover:bg-[#c8aa76] text-[#ede8df] hover:text-[#09090b] text-xs uppercase tracking-wider transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Request Proposal</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 border-t border-white/10 bg-[#0d0d12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-editorial text-3xl text-[#ede8df] mb-2">
              Plan Your Extraordinary Occasion
            </h2>
            <p className="text-xs sm:text-sm text-[#9b9890]">
              Our specialized catering and events team will contact you within 24 hours with floor plans, culinary tasting options, and customized proposals.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-[#121216] border border-[#c8aa76]/40 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#c8aa76]/20 text-[#c8aa76] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl text-[#ede8df]">Inquiry Received</h3>
              <p className="text-xs text-[#9b9890] max-w-md mx-auto">
                Thank you, {formData.name}. The Palazzo Versace Events Concierge has received your request for {formData.eventType} and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#121216] p-8 rounded-2xl border border-white/10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#ede8df] mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                    placeholder="Lord / Lady / Mr. / Ms."
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#ede8df] mb-2">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                    placeholder="name@domain.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#ede8df] mb-2">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                    placeholder="+971 50 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#ede8df] mb-2">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                  >
                    <option value="Gala Wedding">Palazzo Versace Wedding</option>
                    <option value="Corporate Gala">Corporate Summit / Gala</option>
                    <option value="Product Launch">Fashion / Product Launch</option>
                    <option value="Private Dinner Banquet">Private Dinner Banquet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#ede8df] mb-2">
                  Event Details & Desired Date
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                  placeholder="Estimated guest count, preferred dates, catering needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#c8aa76] hover:bg-[#dfcaa2] text-[#09090b] font-medium uppercase tracking-[0.16em] text-xs transition-all shadow-md"
              >
                Submit Event Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
