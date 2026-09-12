import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Sparkles, Waves, Users, Utensils, Eye } from 'lucide-react';
import { RESTAURANT_INFO, TASTE_OF_PERSIA_HIGHLIGHTS } from '../data/restaurantData';
import { SectionHeading } from '../components/SectionHeading';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="bg-[#09090b] text-[#ede8df] pt-28 pb-24">
      {/* Editorial Header */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#c8aa76]/40 bg-[#c8aa76]/10 text-[#c8aa76] text-xs tracking-[0.24em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Culinary Philosophy</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#ede8df]">
            The Experience
          </h1>

          <p className="mt-6 text-xl sm:text-2xl font-editorial italic text-[#c8aa76] max-w-3xl mx-auto leading-relaxed">
            "{RESTAURANT_INFO.story}"
          </p>

          <p className="mt-6 text-sm sm:text-base text-[#9b9890] font-light leading-relaxed max-w-2xl mx-auto">
            {RESTAURANT_INFO.description}
          </p>
        </motion.div>
      </section>

      {/* Hero Experience Panorama Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#c8aa76]/20 aspect-[16/9] sm:aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop"
            alt="Palazzo Versace Dubai Enigma Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6 sm:right-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-[#c8aa76] block mb-1">
                West Wing • Palazzo Versace Dubai
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-[#ede8df]">
                Neoclassical Versace Elegance
              </h3>
            </div>
            <Link
              to="/reservation"
              id="experience-banner-reserve-btn"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.16em] uppercase hover:bg-[#dfcaa2] transition-colors self-start sm:self-auto"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Deep Dive Section 1: Taste of Persia & Culinary Craftsmanship */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="h-[1px] w-6 bg-[#c8aa76]" />
              <span className="text-xs tracking-[0.24em] uppercase text-[#c8aa76] font-medium">
                Taste of Persia
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl text-[#ede8df] leading-tight">
              Culinary Craftsmanship & Ancient Royal Flavors
            </h2>

            <p className="text-sm sm:text-base text-[#9b9890] leading-relaxed font-light">
              Step into Enigma Persian Restaurant Dubai and embark on a culinary adventure that will tantalize your taste buds and transport you to the rich Flavors of Iran.
            </p>

            <p className="text-sm sm:text-base text-[#9b9890] leading-relaxed font-light">
              From aromatic saffron-infused rice to succulent kebabs, our menu reflects the essence of Persian cuisine. The kitchen combines centuries of authentic ingredients—prized Persian saffron, barberries (zereshk), sun-dried black limes, fresh tarragon, walnuts, and pomegranates—with contemporary culinary techniques.
            </p>

            <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#c8aa76] block font-medium">Ingredients</span>
                <p className="text-xs text-[#9b9890] mt-1 leading-relaxed">
                  Directly sourced Persian saffron, pistachios, barberries, sumac, and artisanal rosewater.
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#c8aa76] block font-medium">Charcoal Embers</span>
                <p className="text-xs text-[#9b9890] mt-1 leading-relaxed">
                  Traditional open flame charcoal grilling infusing tender lamb loin and saffron skewers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl group aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
                alt="Persian char-grilled Kabab Sultani"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl group aspect-[3/4] mt-8">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
                alt="Masto Laboo with beetroot foam and gold"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Deep Dive Section 2: Dual Dining Perspectives (Indoor vs Outdoor) */}
      <section className="py-24 bg-[#0e0e12] border-t border-b border-[#c8aa76]/15 mb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <SectionHeading
            eyebrow="Dual Spatial Elegance"
            title="Indoor Grandeur & Waterfront Terrace"
            description="Designed to accommodate every occasion with utmost discretion, Enigma provides two distinct spatial settings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Indoor Salon */}
            <div className="bg-[#14141a] rounded-2xl border border-white/5 overflow-hidden flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                  alt="Enigma Indoor Salon Seating 60 guests"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-[11px] text-[#c8aa76] tracking-wider uppercase font-medium">
                  Capacity: 60 Guests
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-2 text-[#c8aa76] text-xs uppercase tracking-widest font-medium mb-1">
                    <Utensils className="w-4 h-4" />
                    <span>Indoor Dining Salon</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df]">
                    Neoclassical Versace Palace
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9b9890] mt-3 leading-relaxed font-light">
                    {RESTAURANT_INFO.seating.indoorDescription} The interior dining salon captures the dramatic opulence of Gianni Versace's design heritage, featuring custom dining chairs, intricate ceiling cornices, and mood lighting engineered for intimate conversation.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#ede8df]">
                  <span>Dress code: Smart elegant</span>
                  <span className="text-[#c8aa76]">Ground floor, West Wing</span>
                </div>
              </div>
            </div>

            {/* Outdoor Terrace */}
            <div className="bg-[#14141a] rounded-2xl border border-white/5 overflow-hidden flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                  alt="Outdoor terrace seating 36 guests with Dubai Creek views"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-[11px] text-[#c8aa76] tracking-wider uppercase font-medium">
                  Capacity: 36 Guests
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-2 text-[#c8aa76] text-xs uppercase tracking-widest font-medium mb-1">
                    <Waves className="w-4 h-4" />
                    <span>Outdoor Terrace</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df]">
                    Dubai Creek & Pool Panoramas
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9b9890] mt-3 leading-relaxed font-light">
                    {RESTAURANT_INFO.seating.outdoorDescription} Overlooking the illuminated mosaic tiles of Palazzo Versace's Central Pool and the tranquil waters of historic Dubai Creek. Shisha service is curated on the terrace Tuesday through Sunday from 1:00 PM.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#ede8df]">
                  <span>Shisha: Tue–Sun from 1:00 PM</span>
                  <span className="text-[#c8aa76]">Al Fresco Waterfront</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Signature Taste of Persia Highlights Showcase */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <SectionHeading
          eyebrow="Signature Selection"
          title="Essence of Iranian Gastronomy"
          description="A curated preview of timeless dishes crafted with authentic Persian ingredients and modern finesse."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TASTE_OF_PERSIA_HIGHLIGHTS.map((dish) => (
            <div
              key={dish.name}
              className="p-6 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#c8aa76] mb-2">
                  <span className="uppercase tracking-widest">{dish.course}</span>
                  <span className="font-mono text-sm">{dish.price}</span>
                </div>
                <h4 className="font-editorial text-2xl text-[#ede8df] mb-2">
                  {dish.name}
                </h4>
                <p className="text-xs text-[#9b9890] leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {dish.highlight && (
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center space-x-1.5 text-[11px] text-[#c8aa76]">
                  <Sparkles className="w-3 h-3" />
                  <span>Guest Signature Favorite</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/menu"
            id="experience-full-menu-link"
            className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase text-[#c8aa76] hover:text-[#dfcaa2] font-medium border-b border-[#c8aa76]/40 pb-1"
          >
            <span>Explore All Menus & Experiences</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Reservation CTA Strip */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#14141a] border border-[#c8aa76]/25 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#c8aa76]">
            Join Us Tonight
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
            Embark on the Taste of Persia
          </h3>
          <p className="text-xs sm:text-sm text-[#9b9890] max-w-lg mx-auto">
            Dinner is served daily from 6:00 PM to 11:00 PM (Last order: 10:30 PM). Choose your preferred indoor or terrace setting.
          </p>
          <div className="pt-4">
            <Link
              to="/reservation"
              id="experience-bottom-reserve-btn"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.18em] uppercase hover:bg-[#dfcaa2] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
