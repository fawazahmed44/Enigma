import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MapPin,
  Clock,
  Users,
  ShieldAlert,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  ExternalLink,
  Compass,
  Car
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { SectionHeading } from '../components/SectionHeading';

export const InformationPage: React.FC = () => {
  return (
    <div className="bg-[#09090b] text-[#ede8df] pt-28 pb-24">
      {/* Header */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#c8aa76]/40 bg-[#c8aa76]/10 text-[#c8aa76] text-xs tracking-[0.24em] uppercase mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Visitor Guide</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#ede8df]">
            Information & Visit
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#9b9890] font-light leading-relaxed max-w-2xl mx-auto">
            Essential dining details, operating hours, seating configurations, dress regulations, and location directions for Enigma at Palazzo Versace Dubai.
          </p>
        </motion.div>
      </section>

      {/* Main Information Cards Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Location Card */}
          <div className="bg-[#121216] rounded-2xl p-8 border border-white/5 hover:border-[#c8aa76]/30 transition-all space-y-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76] mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase">Location</span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] mt-1">
                {RESTAURANT_INFO.location.venue}
              </h3>
              <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#9b9890] leading-relaxed">
                <p className="text-[#ede8df] font-medium">{RESTAURANT_INFO.location.hotel}</p>
                <p>{RESTAURANT_INFO.location.address}</p>
                <p>{RESTAURANT_INFO.location.city}, {RESTAURANT_INFO.location.country}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <a
                href="https://maps.google.com/?q=Enigma+Palazzo+Versace+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs text-[#c8aa76] hover:text-[#dfcaa2] uppercase tracking-wider font-medium"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. Opening Hours Card */}
          <div className="bg-[#121216] rounded-2xl p-8 border border-white/5 hover:border-[#c8aa76]/30 transition-all space-y-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76] mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase">Dining Hours</span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] mt-1">
                Operating Schedule
              </h3>
              
              <div className="mt-4 space-y-3 text-xs sm:text-sm">
                <div className="border-b border-white/5 pb-2">
                  <span className="text-[#ede8df] font-medium block">Lunch Service</span>
                  <span className="text-[#9b9890] text-xs">Closed for lunch (Golden Journey private bookings 12:00 PM – 4:00 PM)</span>
                </div>
                <div className="border-b border-white/5 pb-2">
                  <span className="text-[#ede8df] font-medium block">Daily Dinner Service</span>
                  <span className="text-[#c8aa76] text-xs font-mono font-medium">6:00 PM – 11:00 PM</span>
                  <span className="text-[#9b9890] text-[11px] block mt-0.5">Last order: 10:30 PM</span>
                </div>
                <div>
                  <span className="text-[#ede8df] font-medium block">Shisha Service</span>
                  <span className="text-[#9b9890] text-xs">Tuesday to Sunday on the terrace from 1:00 PM onwards</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[11px] text-[#9b9890]">
              Advance table booking strongly recommended.
            </div>
          </div>

          {/* 3. Seating Capacity Card */}
          <div className="bg-[#121216] rounded-2xl p-8 border border-white/5 hover:border-[#c8aa76]/30 transition-all space-y-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76] mb-6">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase">Atmosphere</span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] mt-1">
                Seating Capacity
              </h3>

              <div className="mt-4 space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex justify-between items-center text-[#ede8df] font-medium">
                    <span>Indoor Dining Salon</span>
                    <span className="text-[#c8aa76] font-mono text-sm">60 Guests</span>
                  </div>
                  <p className="text-xs text-[#9b9890] mt-1">
                    Air-conditioned neoclassical Versace grand salon.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex justify-between items-center text-[#ede8df] font-medium">
                    <span>Outdoor Creek Terrace</span>
                    <span className="text-[#c8aa76] font-mono text-sm">36 Guests</span>
                  </div>
                  <p className="text-xs text-[#9b9890] mt-1">
                    Al fresco terrace overlooking the pool and Dubai Creek.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[11px] text-[#9b9890]">
              Total Capacity: 96 Guests across all salons.
            </div>
          </div>

          {/* 4. Dress Code Card */}
          <div className="bg-[#121216] rounded-2xl p-8 border border-white/5 hover:border-[#c8aa76]/30 transition-all space-y-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76] mb-6">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase">Etiquette</span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] mt-1">
                Dress Code
              </h3>

              <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#9b9890]">
                <p className="text-[#ede8df] font-medium text-base font-editorial">
                  {RESTAURANT_INFO.dressCode.standard}
                </p>
                <p className="leading-relaxed">
                  {RESTAURANT_INFO.dressCode.note}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[11px] text-[#c8aa76]">
              Smart elegant policy strictly enforced at dinner.
            </div>
          </div>

          {/* 5. Contact Information Card */}
          <div className="bg-[#121216] rounded-2xl p-8 border border-white/5 hover:border-[#c8aa76]/30 transition-all space-y-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76] mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase">Direct Concierge</span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] mt-1">
                Contact Details
              </h3>

              <div className="mt-4 space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[#9b9890] text-xs block">Phone</span>
                  <a href={`tel:${RESTAURANT_INFO.contact.phone}`} className="text-[#ede8df] hover:text-[#c8aa76] transition-colors font-medium">
                    {RESTAURANT_INFO.contact.phone}
                  </a>
                </div>

                <div>
                  <span className="text-[#9b9890] text-xs block">Restaurant Reservations</span>
                  <a href={`mailto:${RESTAURANT_INFO.contact.reservationEmail}`} className="text-[#ede8df] hover:text-[#c8aa76] transition-colors font-medium">
                    {RESTAURANT_INFO.contact.reservationEmail}
                  </a>
                </div>

                <div>
                  <span className="text-[#9b9890] text-xs block">Hotel General Information</span>
                  <a href={`mailto:${RESTAURANT_INFO.contact.email}`} className="text-[#ede8df] hover:text-[#c8aa76] transition-colors font-medium">
                    {RESTAURANT_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center space-x-2 text-xs text-[#c8aa76]">
              <span>Instagram:</span>
              <a
                href={RESTAURANT_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {RESTAURANT_INFO.contact.instagram}
              </a>
            </div>
          </div>

          {/* 6. Arrival & Valet Parking Card */}
          <div className="bg-[#121216] rounded-2xl p-8 border border-white/5 hover:border-[#c8aa76]/30 transition-all space-y-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76] mb-6">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase">Guest Services</span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] mt-1">
                Valet & Arrival
              </h3>

              <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#9b9890] leading-relaxed">
                <p>
                  Complimentary valet parking is provided at the main Palazzo Versace Dubai port-cochère for all Enigma dining guests.
                </p>
                <p>
                  From the main lobby, our concierge will direct you toward the West Wing on the ground level.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <Link
                to="/reservation"
                className="inline-flex items-center space-x-2 text-xs text-[#c8aa76] hover:text-[#dfcaa2] uppercase tracking-wider font-medium"
              >
                <span>Book Your Table Now</span>
                <Calendar className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Map Interactive / Styled Representation */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="rounded-2xl overflow-hidden border border-[#c8aa76]/25 bg-[#14141a] p-8 sm:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8aa76]">
                Interactive Map & Directions
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
                Palazzo Versace Dubai Waterfront
              </h3>
              <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed font-light">
                Situated along the pristine shores of Dubai Creek in Culture Village, Al Jaddaf. Less than 15 minutes from Dubai International Airport (DXB) and Downtown Dubai.
              </p>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs text-[#ede8df] space-y-1">
                <p><strong className="text-[#c8aa76]">Full Address:</strong> {RESTAURANT_INFO.location.fullAddress}</p>
                <p><strong className="text-[#c8aa76]">GPS Coordinates:</strong> 25.2269° N, 55.3377° E</p>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Enigma+Palazzo+Versace+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-wider uppercase hover:bg-[#dfcaa2] transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-white/10 aspect-[16/10] relative group">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                alt="Palazzo Versace Dubai architectural exterior on Dubai Creek"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <div className="p-4 rounded-xl bg-black/75 backdrop-blur-md border border-[#c8aa76]/40 max-w-sm">
                  <MapPin className="w-6 h-6 text-[#c8aa76] mx-auto mb-2" />
                  <p className="text-xs uppercase tracking-wider text-[#ede8df] font-medium">Palazzo Versace Dubai</p>
                  <p className="text-[11px] text-[#9b9890] mt-1">West Wing • Enigma Restaurant</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Policy Disclaimer */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs text-[#9b9890]">
          {RESTAURANT_INFO.pricingPolicy}
        </p>
      </section>
    </div>
  );
};
