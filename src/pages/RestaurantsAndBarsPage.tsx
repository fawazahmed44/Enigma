import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, MapPin, Clock, Sparkles, ChevronRight, Phone, Calendar, Wine, Compass, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PALAZZO_DINING_VENUES, PalazzoVenue, RESTAURANT_INFO } from '../data/restaurantData';

export const RestaurantsAndBarsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fine' | 'lounge' | 'poolside'>('all');

  const filteredVenues = PALAZZO_DINING_VENUES.filter((venue) => {
    if (filter === 'fine') return ['enigma', 'vanitas', 'giardino'].includes(venue.id);
    if (filter === 'lounge') return ['mosaico', 'q-s-bar', 'la-vita', 'gazebo'].includes(venue.id);
    if (filter === 'poolside') return ['amalfi', 'la-piscina', 'gazebo'].includes(venue.id);
    return true;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#09090b]">
      {/* Hero Header */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-[#c8aa76]/20">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop"
            alt="Palazzo Versace Restaurants and Bars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#c8aa76]/10 border border-[#c8aa76]/30 text-[#c8aa76] text-xs uppercase tracking-[0.2em] font-medium mb-6">
            <Utensils className="w-3.5 h-3.5" />
            <span>Palazzo Versace Dubai Collection</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#ede8df] tracking-tight leading-[1.1] mb-6">
            Restaurants <span className="text-[#c8aa76] italic font-normal">& Bars</span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#9b9890] leading-relaxed mb-8">
            Each of our dining venues is designed to provide a curated experience with eight delightfully contrasting yet Versace-themed restaurants and bars that grace the hotel, each featuring an al fresco terrace reflecting the heritage of Italian Palazzos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all ${
                filter === 'all'
                  ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                  : 'bg-[#121216] text-[#9b9890] hover:text-[#ede8df] border border-white/10'
              }`}
            >
              All 9 Venues
            </button>
            <button
              onClick={() => setFilter('fine')}
              className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all ${
                filter === 'fine'
                  ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                  : 'bg-[#121216] text-[#9b9890] hover:text-[#ede8df] border border-white/10'
              }`}
            >
              Haute Cuisine
            </button>
            <button
              onClick={() => setFilter('lounge')}
              className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all ${
                filter === 'lounge'
                  ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                  : 'bg-[#121216] text-[#9b9890] hover:text-[#ede8df] border border-white/10'
              }`}
            >
              Lounges & Nightlife
            </button>
            <button
              onClick={() => setFilter('poolside')}
              className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all ${
                filter === 'poolside'
                  ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                  : 'bg-[#121216] text-[#9b9890] hover:text-[#ede8df] border border-white/10'
              }`}
            >
              Al Fresco & Poolside
            </button>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVenues.map((venue) => {
            const isEnigma = venue.id === 'enigma';

            return (
              <motion.div
                layout
                key={venue.id}
                className={`group bg-[#121216] rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isEnigma
                    ? 'border-[#c8aa76] shadow-xl shadow-[#c8aa76]/10 ring-1 ring-[#c8aa76]/50'
                    : 'border-white/10 hover:border-[#c8aa76]/40 hover:bg-[#15151c]'
                }`}
              >
                <div>
                  {/* Venue Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={venue.imageUrl}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-black/20 to-transparent" />

                    {isEnigma && (
                      <div className="absolute top-4 left-4 bg-[#c8aa76] text-[#09090b] text-[10px] tracking-[0.2em] font-semibold uppercase px-3 py-1 rounded-full shadow-lg">
                        Featured Signature Venue
                      </div>
                    )}

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] tracking-wider uppercase text-[#c8aa76] bg-[#09090b]/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                        {venue.cuisine}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-1">
                      <h2 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors">
                        {venue.name}
                      </h2>
                    </div>

                    <p className="text-xs text-[#c8aa76] tracking-wider uppercase mb-3">
                      {venue.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed mb-6">
                      {venue.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-6 border-t border-white/5 pt-4">
                      {venue.features.map((f) => (
                        <div key={f} className="flex items-center space-x-2 text-xs text-[#ede8df]/80">
                          <CheckCircle className="w-3 h-3 text-[#c8aa76] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Practical Info */}
                    <div className="bg-[#0a0a0d] p-3.5 rounded-xl border border-white/5 space-y-2 text-xs text-[#9b9890]">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-[#c8aa76] shrink-0 mt-0.5" />
                        <span>{venue.location}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Clock className="w-3.5 h-3.5 text-[#c8aa76] shrink-0 mt-0.5" />
                        <span>{venue.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                  {isEnigma ? (
                    <Link
                      to="/taste-of-persia"
                      className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-wider uppercase hover:bg-[#dfcaa2] transition-colors"
                    >
                      <span>Explore Enigma Menus</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <Link
                      to="/reservation"
                      className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-[#1e1e24] text-[#ede8df] hover:text-[#09090b] hover:bg-[#c8aa76] font-medium text-xs tracking-wider uppercase transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Reserve Experience</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Palazzo Versace Dining Highlights Banner */}
      <section className="border-t border-white/10 bg-[#0d0d12] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-editorial text-3xl text-[#ede8df]">
              Palazzo Versace Dining Concierge
            </h2>
            <p className="text-sm text-[#9b9890] leading-relaxed">
              For dining reservations across all Palazzo Versace restaurants and bars, private salon bookings, and bespoke celebratory arrangements:
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-sm text-[#ede8df]">
              <a
                href={`tel:${RESTAURANT_INFO.contact.phone}`}
                className="inline-flex items-center space-x-2 text-[#c8aa76] hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>{RESTAURANT_INFO.contact.phone}</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={`mailto:${RESTAURANT_INFO.contact.email}`}
                className="inline-flex items-center space-x-2 text-[#c8aa76] hover:underline"
              >
                <span>{RESTAURANT_INFO.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
