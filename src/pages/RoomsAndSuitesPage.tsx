import React from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Sparkles, CheckCircle2, ChevronRight, Phone, Calendar, Compass, Shield } from 'lucide-react';
import { PALAZZO_ROOMS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export const RoomsAndSuitesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#09090b]">
      {/* Hero Header */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-[#c8aa76]/20">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop"
            alt="Palazzo Versace Luxury Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#c8aa76]/10 border border-[#c8aa76]/30 text-[#c8aa76] text-xs uppercase tracking-[0.2em] font-medium mb-6">
            <BedDouble className="w-3.5 h-3.5" />
            <span>215 Hotel Rooms & 169 Private Residences</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#ede8df] tracking-tight leading-[1.1] mb-6">
            Rooms & <span className="text-[#c8aa76] italic font-normal">Suites</span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#9b9890] leading-relaxed mb-8">
            {PALAZZO_ROOMS_DATA.overview}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs tracking-widest uppercase text-[#ede8df]/80">
            <div className="bg-[#121216] px-4 py-2 rounded-full border border-white/10">
              <span>Bespoke Versace Silk & Damask Fabrics</span>
            </div>
            <div className="bg-[#121216] px-4 py-2 rounded-full border border-white/10">
              <span>Carrara Marble Bathrooms</span>
            </div>
            <div className="bg-[#121216] px-4 py-2 rounded-full border border-white/10">
              <span>Unobstructed Creek & Skyline Vistas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PALAZZO_ROOMS_DATA.categories.map((room) => (
            <div
              key={room.name}
              className="bg-[#121216] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c8aa76]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={room.imageUrl}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#09090b]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] text-[#c8aa76] uppercase tracking-wider font-mono">
                    {room.size}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-editorial text-2xl text-[#ede8df] mb-1 group-hover:text-[#c8aa76] transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-[#c8aa76] tracking-wider uppercase mb-4">
                    {room.view}
                  </p>

                  <div className="space-y-2 border-t border-white/5 pt-4">
                    {room.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-xs text-[#9b9890]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c8aa76] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 mt-4">
                <a
                  href={`tel:${RESTAURANT_INFO.contact.phone}`}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-[#1c1c22] hover:bg-[#c8aa76] text-[#ede8df] hover:text-[#09090b] font-medium text-xs tracking-wider uppercase transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Inquire with Reservations</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guest Perks Banner */}
      <section className="border-t border-white/10 bg-[#0e0e14] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-[#121216] border border-white/5">
              <h4 className="font-editorial text-xl text-[#ede8df] mb-2">Dining Privileges</h4>
              <p className="text-xs text-[#9b9890]">
                Resident guests receive priority reservations at Enigma Persian Fine Dining and Vanitas Italian Restaurant.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#121216] border border-white/5">
              <h4 className="font-editorial text-xl text-[#ede8df] mb-2">Three Mosaic Pools</h4>
              <p className="text-xs text-[#9b9890]">
                Access to the Central Lagoon Pool, Portofino Pool, and adults-only La Piscina waterfront lounge.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#121216] border border-white/5">
              <h4 className="font-editorial text-xl text-[#ede8df] mb-2">Bespoke Concierge</h4>
              <p className="text-xs text-[#9b9890]">
                Airport luxury limousine transfers and 24/7 dedicated butler service for signature suites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
