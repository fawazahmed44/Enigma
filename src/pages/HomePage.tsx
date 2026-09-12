import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Users,
  Compass,
  UtensilsCrossed,
  Wine,
  Waves,
  Flame,
  BedDouble,
  Droplets,
  Gift
} from 'lucide-react';
import { RESTAURANT_INFO, GOLDEN_JOURNEY_DATA, MOROCCAN_POPUP_DATA } from '../data/restaurantData';
import { SectionHeading } from '../components/SectionHeading';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#09090b] text-[#ede8df] overflow-hidden">
      {/* 1. CINEMATIC LUXURY HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      >
        {/* Background Cinematic Image with Subtle Slow Zoom and Luxury Vignette */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.62 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
            alt="Enigma at Palazzo Versace Dubai Dining Salon"
            className="w-full h-full object-cover object-center"
          />
          {/* Radial & Gradient Overlays for Apple-level contrast and legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/85 via-[#09090b]/60 to-[#09090b]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_85%)]" />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Subtle Tagline / Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-[#c8aa76]/40 bg-[#09090b]/70 backdrop-blur-md mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8aa76] animate-pulse" />
            <span className="text-[11px] sm:text-xs tracking-[0.28em] text-[#c8aa76] uppercase font-medium">
              Palazzo Versace Dubai • West Wing
            </span>
          </motion.div>

          {/* Large Elegant Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.03em] leading-[1.08] text-[#ede8df] max-w-4xl"
          >
            Taste of Persia in <span className="italic text-[#c8aa76]">Dubai</span>
          </motion.h1>

          {/* Short Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#b5b1a8] max-w-2xl font-light leading-relaxed"
          >
            {RESTAURANT_INFO.story} Reinterpreting ancient Iranian royal recipes with modern haute cuisine on the tranquil waters of Dubai Creek.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              to="/reservation"
              id="hero-reserve-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-[#dfcaa2] transition-all duration-300 shadow-lg shadow-[#c8aa76]/15 hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </Link>

            <Link
              to="/experience"
              id="hero-explore-experience-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-[#ede8df]/25 hover:border-[#c8aa76] bg-black/40 hover:bg-black/60 text-[#ede8df] hover:text-[#c8aa76] text-xs sm:text-sm tracking-[0.18em] uppercase font-medium backdrop-blur-sm transition-all duration-300"
            >
              <span>Explore the Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Live Quick Info Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full max-w-4xl"
          >
            <div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase block">Cuisine</span>
              <span className="text-xs sm:text-sm text-[#ede8df] font-medium mt-0.5 block">Persian Fine Dining</span>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase block">Dinner Hours</span>
              <span className="text-xs sm:text-sm text-[#ede8df] font-medium mt-0.5 block">6:00 PM – 11:00 PM</span>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase block">Location</span>
              <span className="text-xs sm:text-sm text-[#ede8df] font-medium mt-0.5 block">West Wing, Ground Floor</span>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase block">Vistas</span>
              <span className="text-xs sm:text-sm text-[#ede8df] font-medium mt-0.5 block">Central Pool & Dubai Creek</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION — THE STORY */}
      <section id="story-section" className="py-24 md:py-32 bg-[#0e0e12] relative border-t border-[#c8aa76]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="h-[1px] w-6 bg-[#c8aa76]" />
                <span className="text-xs tracking-[0.24em] uppercase text-[#c8aa76] font-medium">
                  The Story
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl tracking-wide leading-tight text-[#ede8df]">
                An Evolving Persian Culinary Narrative
              </h2>
              <blockquote className="border-l-2 border-[#c8aa76] pl-6 text-lg sm:text-xl text-[#ede8df] font-editorial italic my-4 leading-relaxed">
                "{RESTAURANT_INFO.story}"
              </blockquote>
              <p className="text-sm sm:text-base text-[#9b9890] leading-relaxed font-light">
                {RESTAURANT_INFO.description}
              </p>
              <p className="text-sm sm:text-base text-[#9b9890] leading-relaxed font-light">
                Enigma offers distinctive indoor and outdoor seating with mesmerizing vistas overlooking the main mosaic pool and the glistening waters of Dubai Creek.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/story"
                  id="story-learn-more-btn"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#c8aa76]/15 hover:bg-[#c8aa76] text-[#c8aa76] hover:text-[#09090b] border border-[#c8aa76]/50 text-xs tracking-[0.2em] uppercase font-medium transition-all"
                >
                  <span>Explore The Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/experience"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-white/15 text-[#ede8df] hover:border-[#c8aa76] text-xs tracking-[0.2em] uppercase font-medium transition-all"
                >
                  <span>Culinary Experience</span>
                </Link>
              </div>
            </div>

            {/* Right Curated Visual Display */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-xl border border-white/5 group aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
                    alt="Persian Kabab craftsmanship"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-[#14141a] rounded-lg border border-[#c8aa76]/15">
                  <div className="flex items-center space-x-2 text-[#c8aa76] mb-1">
                    <Waves className="w-4 h-4" />
                    <span className="text-[11px] uppercase tracking-wider font-medium">Dubai Creek</span>
                  </div>
                  <p className="text-xs text-[#9b9890]">
                    Al fresco terrace offering cooling waterfront breezes under evening stars.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 bg-[#14141a] rounded-lg border border-[#c8aa76]/15">
                  <div className="flex items-center space-x-2 text-[#c8aa76] mb-1">
                    <UtensilsCrossed className="w-4 h-4" />
                    <span className="text-[11px] uppercase tracking-wider font-medium">Indoor Salon</span>
                  </div>
                  <p className="text-xs text-[#9b9890]">
                    Imperial neoclassical dining room designed with Versace Italian opulence.
                  </p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-xl border border-white/5 group aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
                    alt="Persian starters with gold"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION — GOLDEN JOURNEY */}
      <section id="golden-journey-preview" className="py-24 md:py-32 bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="relative rounded-2xl bg-gradient-to-r from-[#171512] via-[#1a1711] to-[#12110e] border border-[#c8aa76]/30 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Ambient Gold Halo */}
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#c8aa76]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#c8aa76]/15 border border-[#c8aa76]/40 text-[#c8aa76]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Signature 24k Gold Experience</span>
                </div>

                <h2 className="font-editorial text-3xl sm:text-5xl text-[#ede8df] tracking-wide leading-tight">
                  The Golden Journey
                </h2>

                <p className="text-sm sm:text-base text-[#b5b1a8] leading-relaxed font-light">
                  {GOLDEN_JOURNEY_DATA.description} An unforgettable multi-sensory feast highlighted by 24-karat gold wrapped Kabab Sultani, quail egg caviar Nargesi, and golden dessert clouds.
                </p>

                {/* Key Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3.5 rounded-lg bg-black/40 border border-[#c8aa76]/20">
                    <span className="text-[10px] tracking-widest uppercase text-[#c8aa76] block">Structure</span>
                    <span className="text-sm font-medium text-[#ede8df] mt-1 block">4-Course Sharing</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-black/40 border border-[#c8aa76]/20">
                    <span className="text-[10px] tracking-widest uppercase text-[#c8aa76] block">Signature</span>
                    <span className="text-sm font-medium text-[#ede8df] mt-1 block">24-Karat Gold</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-black/40 border border-[#c8aa76]/20">
                    <span className="text-[10px] tracking-widest uppercase text-[#c8aa76] block">Price</span>
                    <span className="text-sm font-medium text-[#ede8df] mt-1 block">AED 1,500 <span className="text-xs text-[#9b9890]">for 2</span></span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/golden-journey"
                    id="home-explore-golden-journey-btn"
                    className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.18em] uppercase hover:bg-[#dfcaa2] transition-colors shadow-lg shadow-[#c8aa76]/10"
                  >
                    <span>Explore Golden Journey</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <span className="text-xs text-[#9b9890] pl-2">
                    Available for Daily Lunch & Dinner
                  </span>
                </div>
              </div>

              {/* Visual Showcase */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#c8aa76]/30 aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=900&auto=format&fit=crop"
                    alt="24-karat gold signature Persian dish"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-[#ede8df] flex justify-between items-end">
                    <div>
                      <span className="text-[10px] tracking-widest text-[#c8aa76] uppercase block">Main Course</span>
                      <span className="font-editorial text-lg text-[#ede8df]">Kabab Sultani in 24k Gold</span>
                    </div>
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-[#c8aa76]/40 rounded text-[11px] text-[#c8aa76]">
                      24-Karat
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. SECTION — MOROCCAN POP-UP */}
      <section id="moroccan-popup-preview" className="py-24 md:py-32 bg-[#0e0e12] border-t border-b border-[#c8aa76]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=900&auto=format&fit=crop"
                  alt="Moroccan Tagine cuisine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-widest text-[#c8aa76] uppercase block mb-1">
                    Featured Masterpiece
                  </span>
                  <h3 className="font-editorial text-2xl text-[#ede8df]">
                    Moroccan Chicken Tagine
                  </h3>
                  <p className="text-xs text-[#9b9890] mt-1">
                    Baby chicken, garlic, olives, spices and herbs slowly braised in earthenware.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center space-x-3">
                <span className="h-[1px] w-6 bg-[#c8aa76]" />
                <span className="text-xs tracking-[0.24em] uppercase text-[#c8aa76] font-medium">
                  Pop-Up Gastronomy
                </span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl text-[#ede8df] tracking-wide leading-tight">
                Moroccan À La Carte Pop-Up Menu
              </h2>

              <p className="text-sm sm:text-base text-[#b5b1a8] leading-relaxed font-light">
                "{MOROCCAN_POPUP_DATA.description}"
              </p>

              {/* Preview Dishes */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-sm">
                  <div>
                    <span className="font-medium text-[#ede8df]">Zaalouk</span>
                    <span className="text-xs text-[#9b9890] ml-3 hidden sm:inline">Smoky eggplant dip with tomatoes & olive oil</span>
                  </div>
                  <span className="text-xs text-[#c8aa76] font-mono">AED 80</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-sm">
                  <div>
                    <span className="font-medium text-[#ede8df]">Harira Soup</span>
                    <span className="text-xs text-[#9b9890] ml-3 hidden sm:inline">Traditional soup with lentils, chickpeas & beef</span>
                  </div>
                  <span className="text-xs text-[#c8aa76] font-mono">AED 60</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-sm">
                  <div>
                    <span className="font-medium text-[#ede8df]">Seafood Chermoula with Caviar</span>
                    <span className="text-xs text-[#9b9890] ml-3 hidden sm:inline">Prawns, calamari & 10g Oscietratra caviar</span>
                  </div>
                  <span className="text-xs text-[#c8aa76] font-mono">AED 195</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/moroccan-pop-up"
                  id="home-explore-moroccan-btn"
                  className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full border border-[#c8aa76]/70 text-[#c8aa76] hover:bg-[#c8aa76] hover:text-[#09090b] font-medium text-xs tracking-[0.18em] uppercase transition-all duration-300"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SECTION — THE EXPERIENCE HIGHLIGHTS */}
      <section id="experience-highlights" className="py-24 md:py-32 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <SectionHeading
            eyebrow="Atmosphere & Vistas"
            title="Where Dubai Creek Meets Persian Elegance"
            description="Enigma offers an atmosphere of distinction, seamlessly blending indoor European palace architecture with a serene alfresco terrace overlooking the central pool and Dubai Creek."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <Link
              to="/taste-of-persia"
              id="home-card-taste-of-persia"
              className="bg-[#121216] p-8 rounded-xl border border-white/5 hover:border-[#c8aa76]/40 hover:bg-[#15151c] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76] mb-6 group-hover:scale-110 transition-transform">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors mb-3">
                  Persian Fine Dining
                </h3>
                <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed">
                  From aromatic saffron-infused rice to succulent charcoal kebabs, our culinary team combines authentic Iranian ingredients with modern culinary craft.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] tracking-widest text-[#c8aa76] uppercase">
                <span>Taste of Persia Menu</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              to="/private-dining"
              id="home-card-private-dining"
              className="bg-[#121216] p-8 rounded-xl border border-white/5 hover:border-[#c8aa76]/40 hover:bg-[#15151c] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76] mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors mb-3">
                  Indoor Dining Salon
                </h3>
                <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed">
                  Accommodating up to 60 esteemed guests in an atmosphere of Italian neoclassical magnificence, marble details, and Versace luxury.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] tracking-widest text-[#c8aa76] uppercase">
                <span>Private Dining & Salon</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3 */}
            <Link
              to="/terrace"
              id="home-card-terrace"
              className="bg-[#121216] p-8 rounded-xl border border-white/5 hover:border-[#c8aa76]/40 hover:bg-[#15151c] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76] mb-6 group-hover:scale-110 transition-transform">
                  <Waves className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors mb-3">
                  Outdoor Creek Terrace
                </h3>
                <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed">
                  Seating 36 guests with unobstructed perspectives over the Central Mosaic Pool and the iconic Dubai Creek. Shisha served Tuesday through Sunday from 1:00 PM.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] tracking-widest text-[#c8aa76] uppercase">
                <span>Terrace & Shisha Details</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* PALAZZO VERSACE REPERTOIRE & SECTOR DIRECTORY */}
      <section className="py-24 bg-[#0a0a0d] border-t border-[#c8aa76]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#c8aa76]/10 border border-[#c8aa76]/30 text-[#c8aa76] text-xs uppercase tracking-[0.2em] font-medium mb-4">
              <span>Palazzo Versace Dubai Destinations</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#ede8df]">
              Explore Beyond Enigma
            </h2>
            <p className="text-xs sm:text-sm text-[#9b9890] mt-3 leading-relaxed">
              Step into the full spectrum of Italian high fashion hospitality, from charcoal-grilled Persian skewers and 9 designer dining concepts to palatial suites and roman hydrothermal wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kebab Repertoire */}
            <Link
              to="/kebabs"
              className="bg-[#121216] p-7 rounded-2xl border border-[#c8aa76]/40 hover:border-[#c8aa76] transition-all flex flex-col justify-between group shadow-lg shadow-[#c8aa76]/5"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Flame className="w-5 h-5" />
                </div>
                <div className="text-[10px] tracking-widest uppercase text-orange-400 font-mono mb-1">
                  Wood Charcoal Manghal
                </div>
                <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors mb-2">
                  Artisanal Persian Kebabs
                </h3>
                <p className="text-xs text-[#9b9890] leading-relaxed">
                  Kabab Sultani, Koobideh, Barg, and Chenjeh glazed with Super Negin Khorasan saffron butter over citrus coals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#c8aa76] uppercase tracking-wider font-medium">
                <span>Explore Kebab Menu</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* All 9 Restaurants & Bars */}
            <Link
              to="/restaurants-and-bars"
              className="bg-[#121216] p-7 rounded-2xl border border-white/10 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#c8aa76]/10 text-[#c8aa76] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div className="text-[10px] tracking-widest uppercase text-[#c8aa76] font-mono mb-1">
                  9 Hotel Venues
                </div>
                <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors mb-2">
                  Restaurants & Bars
                </h3>
                <p className="text-xs text-[#9b9890] leading-relaxed">
                  Discover Vanitas, Giardino, Mosaico, Q’s Bar and Lounge, La Vita, Amalfi poolside, and Gazebo shisha lounge.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#c8aa76] uppercase tracking-wider font-medium">
                <span>View All 9 Venues</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Rooms, Suites & Residences */}
            <Link
              to="/rooms-and-suites"
              className="bg-[#121216] p-7 rounded-2xl border border-white/10 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#c8aa76]/10 text-[#c8aa76] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BedDouble className="w-5 h-5" />
                </div>
                <div className="text-[10px] tracking-widest uppercase text-[#c8aa76] font-mono mb-1">
                  215 Rooms & 169 Residences
                </div>
                <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors mb-2">
                  Rooms & Suites
                </h3>
                <p className="text-xs text-[#9b9890] leading-relaxed">
                  Bespoke Italian furnishings by Versace, Carrara marble bathrooms, private terraces, and Creek views.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#c8aa76] uppercase tracking-wider font-medium">
                <span>Explore Accommodations</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* The Spa & Gym */}
            <Link
              to="/spa-and-gym"
              className="bg-[#121216] p-7 rounded-2xl border border-white/10 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#c8aa76]/10 text-[#c8aa76] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Droplets className="w-5 h-5" />
                </div>
                <div className="text-[10px] tracking-widest uppercase text-[#c8aa76] font-mono mb-1">
                  1,000 sqm Sanctuary
                </div>
                <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors mb-2">
                  The Spa & Gym
                </h3>
                <p className="text-xs text-[#9b9890] leading-relaxed">
                  Traditional Moroccan Hammams, 24k Gold Facial, thermal vitality pools, and Technogym waterfront fitness.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#c8aa76] uppercase tracking-wider font-medium">
                <span>Discover The Spa</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Meetings & Gala Events */}
            <Link
              to="/meetings-and-events"
              className="bg-[#121216] p-7 rounded-2xl border border-white/10 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#c8aa76]/10 text-[#c8aa76] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-[10px] tracking-widest uppercase text-[#c8aa76] font-mono mb-1">
                  Up to 900 Guests
                </div>
                <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors mb-2">
                  Meetings & Galas
                </h3>
                <p className="text-xs text-[#9b9890] leading-relaxed">
                  The grand pillarless Gala Ballroom, pre-function salon, and bespoke Versace wedding design.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#c8aa76] uppercase tracking-wider font-medium">
                <span>View Event Spaces</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Curated Special Offers */}
            <Link
              to="/special-offers"
              className="bg-[#121216] p-7 rounded-2xl border border-white/10 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#c8aa76]/10 text-[#c8aa76] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Gift className="w-5 h-5" />
                </div>
                <div className="text-[10px] tracking-widest uppercase text-[#c8aa76] font-mono mb-1">
                  Exclusive Packages
                </div>
                <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors mb-2">
                  Special Offers
                </h3>
                <p className="text-xs text-[#9b9890] leading-relaxed">
                  Golden Journey at Enigma, high tea at Mosaico, weekend dining escapes, and seasonal wellness rituals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#c8aa76] uppercase tracking-wider font-medium">
                <span>Explore Special Offers</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SECTION — VISIT / ESSENTIAL INFORMATION */}
      <section id="visit-section" className="py-24 md:py-32 bg-[#0e0e12] border-t border-[#c8aa76]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="h-[1px] w-6 bg-[#c8aa76]" />
                <span className="text-xs tracking-[0.24em] uppercase text-[#c8aa76] font-medium">
                  Visitor Information
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#ede8df] tracking-wide leading-tight">
                Plan Your Visit
              </h2>
              <p className="text-sm text-[#9b9890] leading-relaxed font-light">
                Located on the Ground Floor in the West Wing of Palazzo Versace Dubai. Please review our seating arrangements and dress requirements prior to arrival.
              </p>

              <div className="pt-2 space-y-4">
                <div className="p-4 rounded-lg bg-[#14141a] border border-[#c8aa76]/20 flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#c8aa76] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#ede8df] font-medium">Location</h4>
                    <p className="text-xs text-[#9b9890] mt-0.5">
                      Ground floor, West Wing<br />
                      Palazzo Versace Dubai, Jaddaf Waterfront - Al Jaddaf, Dubai
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#14141a] border border-[#c8aa76]/20 flex items-start space-x-4">
                  <Users className="w-5 h-5 text-[#c8aa76] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#ede8df] font-medium">Seating Capacity</h4>
                    <p className="text-xs text-[#9b9890] mt-0.5">
                      Indoor — 60 guests<br />
                      Outdoor — 36 guests
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#14141a] border border-[#c8aa76]/20 flex items-start space-x-4">
                  <Compass className="w-5 h-5 text-[#c8aa76] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#ede8df] font-medium">Dress Code</h4>
                    <p className="text-xs text-[#9b9890] mt-0.5">
                      {RESTAURANT_INFO.dressCode.standard}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/information"
                  id="home-more-info-link"
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.18em] uppercase text-[#c8aa76] hover:text-[#dfcaa2] font-medium"
                >
                  <span>View Detailed Hours & Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Hours & Direct Contact Card */}
            <div className="lg:col-span-7 bg-[#14141a] border border-[#c8aa76]/25 rounded-2xl p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase">Operating Hours</span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] mt-1">
                      Dinner & Shisha Timings
                    </h3>
                  </div>
                  <Clock className="w-6 h-6 text-[#c8aa76]" />
                </div>

                <div className="space-y-5 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-white/5">
                    <span className="text-[#ede8df] font-medium">Dinner Service</span>
                    <span className="text-[#9b9890] text-xs sm:text-sm">Open daily: 6:00 PM – 11:00 PM (Last order: 10:30 PM)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-white/5">
                    <span className="text-[#ede8df] font-medium">Lunch Service</span>
                    <span className="text-[#9b9890] text-xs sm:text-sm">Closed for lunch (Golden Journey booked in advance)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-white/5">
                    <span className="text-[#ede8df] font-medium">Outdoor Shisha Service</span>
                    <span className="text-[#9b9890] text-xs sm:text-sm">Tuesday to Sunday on terrace from 1:00 PM onwards</span>
                  </div>
                </div>

                {/* Direct contact line */}
                <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-[#9b9890] space-y-1">
                  <p><strong className="text-[#ede8df]">Phone:</strong> {RESTAURANT_INFO.contact.phone}</p>
                  <p><strong className="text-[#ede8df]">Reservations:</strong> {RESTAURANT_INFO.contact.reservationEmail}</p>
                  <p><strong className="text-[#ede8df]">Hotel Inquiries:</strong> {RESTAURANT_INFO.contact.email}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#9b9890]">
                  Advance booking recommended for weekend dining.
                </span>
                <Link
                  to="/reservation"
                  id="home-info-reserve-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.16em] uppercase hover:bg-[#dfcaa2] transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve a Table</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. SECTION — RESERVATION FINAL CTA */}
      <section id="reservation-final-cta" className="relative py-28 md:py-36 bg-[#09090b] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop"
            alt="Candlelit Persian Fine Dining table at Enigma"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs tracking-[0.3em] uppercase text-[#c8aa76] font-medium block">
            Palazzo Versace Dubai
          </span>

          <h2 className="font-editorial text-4xl sm:text-6xl text-[#ede8df] tracking-wide">
            Reserve Your Table
          </h2>

          <p className="text-sm sm:text-base text-[#b5b1a8] max-w-xl mx-auto font-light leading-relaxed">
            Experience Persian fine dining at Enigma. Choose between our opulent indoor salon or our serene Creek-side terrace.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservation"
              id="cta-reserve-table-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-9 py-4 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#dfcaa2] transition-all duration-300 shadow-xl shadow-[#c8aa76]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </Link>

            <a
              href={`tel:${RESTAURANT_INFO.contact.phone}`}
              id="cta-call-restaurant-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-white/20 hover:border-[#c8aa76] bg-black/40 text-[#ede8df] hover:text-[#c8aa76] text-xs sm:text-sm tracking-[0.16em] uppercase transition-colors"
            >
              <span>Call +971 4 556 8888</span>
            </a>
          </div>

          <p className="text-[11px] text-[#9b9890] pt-4 tracking-wider">
            All prices are inclusive of 7% Municipality Fee, 10% Service Charge and 5% VAT.
          </p>
        </div>
      </section>
    </div>
  );
};
