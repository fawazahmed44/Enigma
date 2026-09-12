import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Clock, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { GOLDEN_JOURNEY_DATA, RESTAURANT_INFO } from '../data/restaurantData';
import { SectionHeading } from '../components/SectionHeading';

export const GoldenJourneyPage: React.FC = () => {
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
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#c8aa76]/40 bg-[#c8aa76]/10 text-[#c8aa76] text-xs tracking-[0.24em] uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24-Karat Edible Gold Set Menu</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide leading-tight text-[#ede8df]">
            The Golden Journey
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#b5b1a8] font-light leading-relaxed max-w-3xl mx-auto">
            {GOLDEN_JOURNEY_DATA.description}
          </p>

          {/* Pricing & Key Meta Badges */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-4 rounded-2xl bg-[#14141a] border border-[#c8aa76]/30">
            <div className="px-4 py-1 border-r border-white/10 last:border-none">
              <span className="text-[10px] uppercase tracking-widest text-[#c8aa76] block">Experience Price</span>
              <span className="font-editorial text-2xl text-[#ede8df]">
                {GOLDEN_JOURNEY_DATA.price} <span className="text-xs font-sans text-[#9b9890]">{GOLDEN_JOURNEY_DATA.serves}</span>
              </span>
            </div>

            <div className="px-4 py-1 border-r border-white/10 last:border-none text-left">
              <span className="text-[10px] uppercase tracking-widest text-[#c8aa76] block">Daily Lunch</span>
              <span className="text-xs text-[#ede8df] font-medium block">
                12:00 PM – 4:00 PM <span className="text-[#9b9890]">(Last order: 3:30 PM)</span>
              </span>
            </div>

            <div className="px-4 py-1 text-left">
              <span className="text-[10px] uppercase tracking-widest text-[#c8aa76] block">Daily Dinner</span>
              <span className="text-xs text-[#ede8df] font-medium block">
                6:00 PM – 11:00 PM <span className="text-[#9b9890]">(Last order: 10:30 PM)</span>
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservation"
              id="golden-journey-top-reserve-btn"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.18em] uppercase hover:bg-[#dfcaa2] transition-colors shadow-lg shadow-[#c8aa76]/15"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve The Golden Journey</span>
            </Link>

            <Link
              to="/menu"
              id="golden-journey-top-view-menu-btn"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full border border-white/20 hover:border-[#c8aa76] text-[#ede8df] hover:text-[#c8aa76] text-xs tracking-[0.18em] uppercase font-medium transition-colors"
            >
              <span>View All Menus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Courses Presentation Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 space-y-24 mb-28">
        
        {/* Course 01 — START */}
        <div id="course-01" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-editorial text-3xl text-[#c8aa76]">01</span>
              <span className="h-[1px] w-8 bg-[#c8aa76]/40" />
              <span className="text-xs tracking-[0.25em] uppercase text-[#c8aa76] font-medium">START</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
              Sabzi Khordan
            </h2>
            <p className="text-xs tracking-wider uppercase text-[#c8aa76]">
              Traditional Persian Appetizer
            </p>
            <p className="text-sm text-[#9b9890] leading-relaxed font-light">
              A ceremonial garden platter of fresh fragrant herbs, walnuts, radishes, feta and warm traditional oven-baked flatbread, accented with delicate edible gold.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#c8aa76]/25 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop"
                alt="Sabzi Khordan Persian starter"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Course 02 — COLD STARTERS */}
        <div id="course-02" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#c8aa76]/25 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop"
                alt="Cold starters Masto Laboo with gold leaves"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="flex items-center space-x-3">
              <span className="font-editorial text-3xl text-[#c8aa76]">02</span>
              <span className="h-[1px] w-8 bg-[#c8aa76]/40" />
              <span className="text-xs tracking-[0.25em] uppercase text-[#c8aa76] font-medium">COLD STARTERS</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
              Royal Cold Starters
            </h2>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#14141a] border border-white/5">
                <h4 className="font-editorial text-xl text-[#ede8df] text-[#c8aa76]">Masto Laboo</h4>
                <p className="text-xs text-[#9b9890] mt-1 leading-relaxed">
                  Fresh yogurt with red beetroot foam feathered with gold leaves.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14141a] border border-white/5">
                <h4 className="font-editorial text-xl text-[#ede8df] text-[#c8aa76]">Salad Chupan</h4>
                <p className="text-xs text-[#9b9890] mt-1 leading-relaxed">
                  Watermelon, cress, candied olives, walnuts and homemade cheese with gold leaves.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Course 03 — WARM STARTERS */}
        <div id="course-03" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="font-editorial text-3xl text-[#c8aa76]">03</span>
              <span className="h-[1px] w-8 bg-[#c8aa76]/40" />
              <span className="text-xs tracking-[0.25em] uppercase text-[#c8aa76] font-medium">WARM STARTERS</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
              Imperial Warm Entrées & Caviar
            </h2>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#14141a] border border-[#c8aa76]/20">
                <div className="flex items-center justify-between">
                  <h4 className="font-editorial text-xl text-[#ede8df]">Nargesi</h4>
                  <span className="text-[10px] tracking-wider uppercase text-[#c8aa76] border border-[#c8aa76]/40 px-2 py-0.5 rounded">
                    10gr Persian Caviar
                  </span>
                </div>
                <p className="text-xs text-[#9b9890] mt-2 leading-relaxed">
                  Melted baby spinach, confit potatoes and poached golden quail eggs topped with 10gr of Persian caviar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14141a] border border-white/5">
                <h4 className="font-editorial text-xl text-[#ede8df]">Tachin Rice & Chicken Lollipops</h4>
                <p className="text-xs text-[#9b9890] mt-1 leading-relaxed">
                  Tachin Rice and Chicken Lollipops with Zereshk Chutney and sautéed spinach.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#c8aa76]/25 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop"
                alt="Imperial warm starter Nargesi with caviar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Course 04 — MAIN COURSE */}
        <div id="course-04" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#c8aa76]/40 aspect-[4/3] group relative">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop"
                alt="Kabab Sultani wrapped with 24k gold leaves"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-[#c8aa76] text-xs text-[#c8aa76] font-medium tracking-widest uppercase">
                24-Karat Gold Leaf
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <div className="flex items-center space-x-3">
              <span className="font-editorial text-3xl text-[#c8aa76]">04</span>
              <span className="h-[1px] w-8 bg-[#c8aa76]/40" />
              <span className="text-xs tracking-[0.25em] uppercase text-[#c8aa76] font-medium">MAIN COURSE</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#ede8df]">
              Kabab Sultani
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#c8aa76]">
              Enigma Signature Masterpiece
            </p>
            <p className="text-sm sm:text-base text-[#9b9890] leading-relaxed font-light">
              Lamb loin skewer on charcoal wrapped with 24-karat gold leaves. Prepared over embers of natural hardwood charcoal to lock in pure succulent tenderness, wrapped at tableside with gleaming pure edible 24k gold.
            </p>
          </div>
        </div>

        {/* Course 05 — DESSERT */}
        <div id="course-05" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-editorial text-3xl text-[#c8aa76]">05</span>
              <span className="h-[1px] w-8 bg-[#c8aa76]/40" />
              <span className="text-xs tracking-[0.25em] uppercase text-[#c8aa76] font-medium">DESSERT</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
              Orange Blossom Tart
            </h2>
            <p className="text-xs tracking-wider uppercase text-[#c8aa76]">
              The Persian Sweet Finale
            </p>
            <p className="text-sm text-[#9b9890] leading-relaxed font-light">
              Served with golden clouds and berries. A delicate Persian citrus confection bathed in orange blossom infusion, encircled by ethereal spun gold confection clouds and seasonal berries.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#c8aa76]/25 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop"
                alt="Orange blossom dessert with golden clouds"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </section>

      {/* Experience Reservation Panel */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-b from-[#181613] to-[#12110e] border border-[#c8aa76]/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center space-x-2 text-[#c8aa76] text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Palazzo Versace Dubai Reservation</span>
          </div>

          <h3 className="font-editorial text-3xl sm:text-5xl text-[#ede8df]">
            Reserve The Golden Journey
          </h3>

          <p className="text-sm text-[#9b9890] max-w-lg mx-auto font-light">
            Set menu for 2 people, sharing style • {GOLDEN_JOURNEY_DATA.price} for 2 people.<br />
            Served daily during Lunch (12:00 PM – 4:00 PM) and Dinner (6:00 PM – 11:00 PM).
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservation"
              id="golden-journey-bottom-reserve-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-[#dfcaa2] transition-colors shadow-lg shadow-[#c8aa76]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </Link>

            <Link
              to="/menu"
              id="golden-journey-bottom-menu-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full border border-white/20 text-[#ede8df] hover:border-[#c8aa76] hover:text-[#c8aa76] text-xs sm:text-sm tracking-[0.18em] uppercase transition-colors"
            >
              <span>View Menu</span>
            </Link>
          </div>

          <div className="pt-2 text-[11px] text-[#9b9890]">
            {RESTAURANT_INFO.pricingPolicy}
          </div>
        </div>
      </section>
    </div>
  );
};
