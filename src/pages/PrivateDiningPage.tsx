import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Users,
  Sparkles,
  Calendar,
  Clock,
  Mail,
  Phone,
  CheckCircle2,
  Send,
  ShieldCheck,
  Building,
  Wine,
  Crown
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { SectionHeading } from '../components/SectionHeading';

export const PrivateDiningPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'anniversary',
    guestCount: 20,
    preferredDate: '',
    seatingPreference: 'indoor',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#09090b] text-[#ede8df] pt-28 pb-24">
      {/* 1. Hero Header */}
      <section className="relative px-6 md:px-12 max-w-5xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#c8aa76]/40 bg-[#c8aa76]/10 text-[#c8aa76] text-xs tracking-[0.24em] uppercase mb-6">
            <Crown className="w-3.5 h-3.5" />
            <span>Exclusive Gatherings</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#ede8df]">
            Private Dining & Banquets
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#9b9890] font-light leading-relaxed max-w-2xl mx-auto">
            Host prestigious galas, intimate family milestones, and executive banquets surrounded by Italian palace grandeur and waterfront tranquility.
          </p>
        </motion.div>
      </section>

      {/* 2. Venue Spaces Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Indoor Grand Salon */}
          <div className="bg-[#121216] rounded-2xl overflow-hidden border border-white/5 hover:border-[#c8aa76]/30 transition-all group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                alt="Enigma Indoor Grand Salon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#c8aa76]/40 text-[10px] tracking-widest uppercase text-[#c8aa76]">
                  Indoor Grand Salon
                </span>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df]">
                  The Imperial Salon
                </h3>
                <span className="text-sm font-mono text-[#c8aa76]">Up to 60 Guests</span>
              </div>
              <p className="text-xs sm:text-sm text-[#9b9890] font-light leading-relaxed">
                Opulent Italian neoclassical architecture, Versace chinaware, crystal chandeliers, and discreet acoustics. Perfect for gala banquets, private corporate milestones, and luxury celebrations.
              </p>
              <ul className="space-y-2 text-xs text-[#b5b1a8] pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8aa76]" />
                  <span>Exclusive salon buyout availability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8aa76]" />
                  <span>Customized multi-course tasting menus & 24k gold leaf options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8aa76]" />
                  <span>Dedicated head sommelier and private service brigade</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Creekfront Terrace */}
          <div className="bg-[#121216] rounded-2xl overflow-hidden border border-white/5 hover:border-[#c8aa76]/30 transition-all group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
                alt="Enigma Creek Terrace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#c8aa76]/40 text-[10px] tracking-widest uppercase text-[#c8aa76]">
                  Waterfront Al Fresco
                </span>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df]">
                  The Creek Terrace
                </h3>
                <span className="text-sm font-mono text-[#c8aa76]">Up to 36 Guests</span>
              </div>
              <p className="text-xs sm:text-sm text-[#9b9890] font-light leading-relaxed">
                Starlit waterside terrace framed by the tranquil waters of Dubai Creek and the central mosaic swimming pool. Features afternoon & evening shisha lounge setups and ambient music.
              </p>
              <ul className="space-y-2 text-xs text-[#b5b1a8] pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8aa76]" />
                  <span>Panoramic waterfront cocktail receptions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8aa76]" />
                  <span>Artisanal shisha sommelier services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8aa76]" />
                  <span>Seated dinners or starlit canapé soirées</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Event Inquiry Form & Booking Details */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-[#14141a] rounded-2xl border border-[#c8aa76]/30 p-8 sm:p-12 shadow-2xl">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] tracking-[0.25em] text-[#c8aa76] uppercase block mb-1">
              Bespoke Event Concierge
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
              Inquire About Private Dining
            </h2>
            <p className="text-xs sm:text-sm text-[#9b9890] mt-2 font-light">
              Submit your gathering specifications. Our event director will tailor an itinerary within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-xl bg-black/50 border border-[#c8aa76]/40 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#c8aa76]/15 border border-[#c8aa76] flex items-center justify-center text-[#c8aa76] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-editorial text-2xl text-[#ede8df]">
                Inquiry Successfully Received
              </h3>
              <p className="text-xs sm:text-sm text-[#9b9890] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#ede8df]">{formData.name}</strong>. Our Private Dining Concierge has received your request for {formData.guestCount} guests. We will contact you at <strong className="text-[#c8aa76]">{formData.email}</strong> shortly.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider text-[#ede8df] hover:border-[#c8aa76] transition-colors"
              >
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lord Edward Sterling"
                    className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. concierge@client.com"
                    className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1.5 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1.5 font-medium">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                  >
                    <option value="anniversary">Anniversary Celebration</option>
                    <option value="corporate">Executive Corporate Dinner</option>
                    <option value="birthday">Private Birthday Gala</option>
                    <option value="reception">Cocktail & Canapé Reception</option>
                    <option value="buyout">Full Venue Buyout</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1.5 font-medium">
                    Estimated Guests
                  </label>
                  <input
                    type="number"
                    min="6"
                    max="96"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1.5 font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1.5 font-medium">
                    Preferred Space
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                    className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                  >
                    <option value="indoor">Indoor Grand Salon (60 Guests)</option>
                    <option value="terrace">Outdoor Creek Terrace (36 Guests)</option>
                    <option value="both">Both / Full Venue (96 Guests)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1.5 font-medium">
                  Special Requests & Dietary Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g., 24k Gold Tasting Menu, customized wine pairing, live traditional music, AV screen requirements..."
                  className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                id="private-dining-submit-btn"
                className="w-full flex items-center justify-center space-x-3 py-4 px-8 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.2em] uppercase hover:bg-[#dfcaa2] transition-all shadow-xl shadow-[#c8aa76]/20"
              >
                <Send className="w-4 h-4" />
                <span>Submit Private Dining Inquiry</span>
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9b9890]">
            <span>Direct Events Hotline: <a href="tel:+97145568888" className="text-[#ede8df] hover:text-[#c8aa76]">{RESTAURANT_INFO.contact.phone}</a></span>
            <span>Email: <a href={`mailto:${RESTAURANT_INFO.contact.reservationEmail}`} className="text-[#c8aa76]">{RESTAURANT_INFO.contact.reservationEmail}</a></span>
          </div>

        </div>
      </section>
    </div>
  );
};
