import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Compass,
  Crown,
  Flame,
  Award,
  Calendar,
  Clock,
  MapPin,
  Waves
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { SectionHeading } from '../components/SectionHeading';

export const StoryPage: React.FC = () => {
  return (
    <div className="bg-[#09090b] text-[#ede8df] pt-28 pb-24">
      {/* 1. Header Banner */}
      <section className="relative px-6 md:px-12 max-w-5xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#c8aa76]/40 bg-[#c8aa76]/10 text-[#c8aa76] text-xs tracking-[0.24em] uppercase mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Heritage & Origin</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#ede8df]">
            The Story of Enigma
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#9b9890] font-light leading-relaxed max-w-2xl mx-auto">
            Born from an enigmatic culinary vision at Palazzo Versace Dubai, where centuries-old Persian royal banquets meet high Italian Renaissance artistry on the shores of Dubai Creek.
          </p>
        </motion.div>
      </section>

      {/* 2. Hero Image Showcase */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="relative rounded-2xl overflow-hidden border border-[#c8aa76]/25 aspect-[21/9] sm:aspect-[16/7]">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
            alt="Enigma dining hall at Palazzo Versace Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/40" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-lg">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#c8aa76] block mb-1">
              Ground Floor, West Wing
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df]">
              Palazzo Versace Dubai
            </h3>
            <p className="text-xs sm:text-sm text-[#b5b1a8] mt-1 font-light">
              Overlooking the central mosaic pool and Dubai Creek waterfront
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Concept of "Enigma" */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="h-[1px] w-6 bg-[#c8aa76]" />
              <span className="text-xs tracking-[0.24em] uppercase text-[#c8aa76] font-medium">
                The Mystery of Enigma
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#ede8df] leading-tight">
              An Ever-Evolving Culinary Journey
            </h2>

            <blockquote className="border-l-2 border-[#c8aa76] pl-6 text-lg text-[#ede8df] font-editorial italic my-4 leading-relaxed">
              "{RESTAURANT_INFO.story}"
            </blockquote>

            <p className="text-sm text-[#9b9890] leading-relaxed font-light">
              The name <em>Enigma</em> was conceived around the thrill of the unexpected. Designed as a dining sanctuary that evolves like an episodic story, Enigma captures the soul of authentic Persian cuisine — a gastronomic tradition revered for over two millennia for its poetic harmony of sweet, sour, herbal, and floral notes.
            </p>

            <p className="text-sm text-[#9b9890] leading-relaxed font-light">
              Here, the culinary team interprets ancient imperial recipes from the royal courts of Persia, pairing the world’s most precious ingredients — saffron from Khorasan, barberries, dried black Persian limes, and 24-karat edible gold — with the flawless service expected at a Versace palace.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-white/5 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
                  alt="Charcoal grilling kababs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#14141a] rounded-xl border border-[#c8aa76]/15">
                <span className="text-[10px] tracking-widest text-[#c8aa76] uppercase block">Purity of Fire</span>
                <p className="text-xs text-[#9b9890] mt-1">
                  Charcoal-fired embers sear skewers to lock in tenderness and smoky aroma.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 bg-[#14141a] rounded-xl border border-[#c8aa76]/15">
                <span className="text-[10px] tracking-widest text-[#c8aa76] uppercase block">Royal Spices</span>
                <p className="text-xs text-[#9b9890] mt-1">
                  Grade A saffron threads hand-harvested and brewed with ice for radiant amber hue.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/5 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
                  alt="Persian appetizers and herbs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Pillars of Enigma */}
      <section className="bg-[#0e0e12] py-24 border-t border-b border-[#c8aa76]/10 mb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="The Philosophy"
            title="Three Pillars of Our Craft"
            description="Every evening at Enigma is orchestrated around timeless principles of Iranian hospitality, Italian neoclassical design, and gastronomic discovery."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#14141a] p-8 rounded-2xl border border-white/5 hover:border-[#c8aa76]/30 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76]">
                <Crown className="w-6 h-6" />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase block font-medium">Pillar I</span>
              <h3 className="font-editorial text-2xl text-[#ede8df]">Royal Iranian Lineage</h3>
              <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed font-light">
                Drawing inspiration from historical banquets of the Safavid and Qajar eras. Recipes passed down through generations are revived with precision, from slow-simmered Khoresht stews to delicate polo saffron rice crowned with tahdig.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#14141a] p-8 rounded-2xl border border-white/5 hover:border-[#c8aa76]/30 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76]">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase block font-medium">Pillar II</span>
              <h3 className="font-editorial text-2xl text-[#ede8df]">Palazzo Versace Grandeur</h3>
              <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed font-light">
                Surrounded by bespoke Versace tableware, hand-cut crystal, and neoclassical architectural ceilings. An ambiance designed to host heads of state, international tastemakers, and discerning connoisseurs.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#14141a] p-8 rounded-2xl border border-white/5 hover:border-[#c8aa76]/30 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76]">
                <Waves className="w-6 h-6" />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase block font-medium">Pillar III</span>
              <h3 className="font-editorial text-2xl text-[#ede8df]">Waterfront Serenity</h3>
              <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed font-light">
                Perched gracefully at the water's edge of Dubai Creek. Guests transition effortlessly between our climate-controlled 60-seat salon and our 36-seat starlit creekfront terrace with afternoon & evening shisha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Navigation Links to other sections */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#ede8df] mb-6">
          Continue Exploring Enigma
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/taste-of-persia"
            id="story-to-persia-btn"
            className="p-6 rounded-xl bg-[#14141a] border border-white/5 hover:border-[#c8aa76]/40 transition-all text-left group"
          >
            <span className="text-[10px] tracking-widest text-[#c8aa76] uppercase block mb-1">Cuisine</span>
            <h4 className="font-editorial text-xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors">
              Taste of Persia
            </h4>
            <p className="text-xs text-[#9b9890] mt-2 font-light">
              Explore our core Persian culinary menu and charcoal specialties.
            </p>
          </Link>

          <Link
            to="/terrace"
            id="story-to-terrace-btn"
            className="p-6 rounded-xl bg-[#14141a] border border-white/5 hover:border-[#c8aa76]/40 transition-all text-left group"
          >
            <span className="text-[10px] tracking-widest text-[#c8aa76] uppercase block mb-1">Atmosphere</span>
            <h4 className="font-editorial text-xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors">
              Creek Terrace & Shisha
            </h4>
            <p className="text-xs text-[#9b9890] mt-2 font-light">
              Discover our 36-seat al fresco terrace and waterfront shisha lounge.
            </p>
          </Link>

          <Link
            to="/golden-journey"
            id="story-to-golden-btn"
            className="p-6 rounded-xl bg-[#14141a] border border-white/5 hover:border-[#c8aa76]/40 transition-all text-left group"
          >
            <span className="text-[10px] tracking-widest text-[#c8aa76] uppercase block mb-1">Imperial</span>
            <h4 className="font-editorial text-xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors">
              The Golden Journey
            </h4>
            <p className="text-xs text-[#9b9890] mt-2 font-light">
              Our four-course tasting menu dressed in genuine 24k gold leaf.
            </p>
          </Link>
        </div>

        <div className="mt-12">
          <Link
            to="/reservation"
            id="story-book-table-btn"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.2em] uppercase hover:bg-[#dfcaa2] transition-all duration-300 shadow-xl shadow-[#c8aa76]/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Your Table</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
