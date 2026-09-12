import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Sparkles, UtensilsCrossed } from 'lucide-react';
import { MOROCCAN_POPUP_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export const MoroccanPopUpPage: React.FC = () => {
  return (
    <div className="bg-[#09090b] text-[#ede8df] pt-28 pb-24">
      {/* Editorial Header */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#c8aa76]/40 bg-[#c8aa76]/10 text-[#c8aa76] text-xs tracking-[0.24em] uppercase mb-6">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Limited Culinary Pop-Up</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#ede8df]">
            Moroccan À La Carte Pop-Up Menu
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#ede8df] font-editorial italic max-w-3xl mx-auto leading-relaxed">
            "{MOROCCAN_POPUP_DATA.description}"
          </p>

          <p className="mt-4 text-xs tracking-wider text-[#c8aa76] uppercase">
            {MOROCCAN_POPUP_DATA.pricingNote}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/reservation"
              id="moroccan-popup-reserve-btn"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.18em] uppercase hover:bg-[#dfcaa2] transition-colors shadow-lg shadow-[#c8aa76]/15"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </Link>

            <Link
              to="/menu"
              id="moroccan-popup-back-menu-btn"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full border border-white/20 hover:border-[#c8aa76] text-[#ede8df] hover:text-[#c8aa76] text-xs tracking-[0.18em] uppercase font-medium transition-colors"
            >
              <span>View All Menus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Moroccan Hero Visual Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#c8aa76]/25 aspect-[16/9] sm:aspect-[24/9]">
          <img
            src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1800&auto=format&fit=crop"
            alt="Moroccan Tagine cuisine at Enigma"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-12 right-6 sm:right-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#c8aa76] block">
                Haute Cuisine Pop-Up
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df]">
                The Heritage of North African Aromas
              </h3>
            </div>
            <div className="text-xs text-[#9b9890]">
              Available during regular dinner hours: 6:00 PM – 11:00 PM
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Dish Cards Grid */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 space-y-16 mb-24">
        {MOROCCAN_POPUP_DATA.categories.map((cat, idx) => (
          <div key={cat.category} className="space-y-6">
            
            {/* Category Header */}
            <div className="flex items-center space-x-4 border-b border-[#c8aa76]/20 pb-4">
              <span className="text-xs tracking-[0.25em] text-[#c8aa76] uppercase font-medium">
                {`0${idx + 1}`}
              </span>
              <span className="h-4 w-[1px] bg-[#c8aa76]/40" />
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] tracking-wide uppercase">
                {cat.category}
              </h2>
            </div>

            {/* Category Dish Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.items.map((dish) => (
                <div
                  key={dish.name}
                  id={`dish-card-${dish.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="p-6 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors">
                        {dish.name}
                      </h3>
                      <span className="font-mono text-base text-[#c8aa76] shrink-0 font-medium">
                        {dish.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#9b9890] mt-3 leading-relaxed font-light">
                      {dish.description}
                    </p>
                  </div>

                  {dish.dietary && dish.dietary.length > 0 && (
                    <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap gap-2">
                      {dish.dietary.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-wider uppercase text-[#c8aa76]/80 bg-[#c8aa76]/10 px-2.5 py-0.5 rounded-full border border-[#c8aa76]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </section>

      {/* Pricing Policy Disclaimer */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="p-8 rounded-2xl bg-[#14141a] border border-white/10 space-y-3">
          <p className="text-xs text-[#9b9890]">
            {MOROCCAN_POPUP_DATA.pricingNote}
          </p>
          <p className="text-xs text-[#9b9890]">
            For dietary preferences, food allergies, or private group dining, please inform our culinary associates prior to booking.
          </p>
          <div className="pt-4">
            <Link
              to="/reservation"
              className="inline-flex items-center space-x-2 px-8 py-3 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.16em] uppercase hover:bg-[#dfcaa2] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A Table for Moroccan Pop-Up</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
