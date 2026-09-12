import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Waves,
  Sparkles,
  Wind,
  Sun,
  Moon,
  Clock,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { SectionHeading } from '../components/SectionHeading';

export const TerracePage: React.FC = () => {
  const shishaMenu = [
    {
      name: 'Royal Persian Rose',
      category: 'Signature Blend',
      description: 'Delicate Ispahan rose petals steeped with fresh garden mint and citrus blossom.',
      price: 'AED 175',
      tag: 'Guest Favorite'
    },
    {
      name: 'Saffron Silk',
      category: 'Luxury Craft',
      description: 'Khorasan saffron essence, sweet golden amber, and cooling mountain sage.',
      price: 'AED 195',
      tag: 'Exclusive'
    },
    {
      name: 'Classic Double Apple Imperial',
      category: 'Traditional',
      description: 'Authentic Bahraini green and red apple molasses with sweet anise undertones.',
      price: 'AED 150',
      tag: 'Classic'
    },
    {
      name: 'Grape & Mountain Mint',
      category: 'Refreshing',
      description: 'Chilled white grape mist paired with crisp frozen peppermint.',
      price: 'AED 150',
      tag: 'Refreshing'
    },
    {
      name: 'Versace Golden Medusa Shisha',
      category: 'Haute Luxury',
      description: 'Served in an exclusive hand-carved Medusa crystal pipe crowned with 24-karat edible gold leaves and exotic passion fruit tobacco.',
      price: 'AED 350',
      tag: '24k Gold Experience'
    },
  ];

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
            <Waves className="w-3.5 h-3.5" />
            <span>Al Fresco Waterfront</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#ede8df]">
            Outdoor Creek Terrace & Shisha
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#9b9890] font-light leading-relaxed max-w-2xl mx-auto">
            A serene outdoor sanctuary perched along Dubai Creek, offering gentle waterside breezes, central mosaic pool perspectives, and refined afternoon and evening shisha ritual.
          </p>
        </motion.div>
      </section>

      {/* 2. Hero Visual Showcase */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="relative rounded-2xl overflow-hidden border border-[#c8aa76]/25 aspect-[21/9] sm:aspect-[16/7] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop"
            alt="Enigma Dubai Creek Terrace setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#c8aa76] block mb-1">
                Waterfront Vistas
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df]">
                Dubai Creek & Central Mosaic Pool
              </h3>
              <p className="text-xs sm:text-sm text-[#b5b1a8] mt-1 font-light max-w-md">
                Accommodating 36 guests under ambient starlit lighting with panoramic water reflections.
              </p>
            </div>

            <Link
              to="/reservation"
              id="terrace-hero-book-btn"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#c8aa76] text-[#09090b] text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#dfcaa2] transition-colors self-start sm:self-auto shrink-0 shadow-lg"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Terrace Table</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Essential Terrace Highlights */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#14141a] p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76]">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#c8aa76] block">Seating Configuration</span>
            <h3 className="font-editorial text-2xl text-[#ede8df]">36 Al Fresco Seats</h3>
            <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed font-light">
              Designed with plush, sheltered outdoor banquettes and low dining tables, optimizing creekfront views while maintaining romantic privacy.
            </p>
          </div>

          <div className="bg-[#14141a] p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76]">
              <Wind className="w-5 h-5" />
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#c8aa76] block">Shisha Service</span>
            <h3 className="font-editorial text-2xl text-[#ede8df]">Tuesday to Sunday</h3>
            <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed font-light">
              Available from 1:00 PM onwards through the late evening. Master shisha artisans curate artisanal tobacco blends in hand-blown vessels.
            </p>
          </div>

          <div className="bg-[#14141a] p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#c8aa76]/10 border border-[#c8aa76]/30 flex items-center justify-center text-[#c8aa76]">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#c8aa76] block">Dining Hours</span>
            <h3 className="font-editorial text-2xl text-[#ede8df]">6:00 PM – 11:00 PM</h3>
            <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed font-light">
              Full Persian à la carte dinner and Golden Journey menu served al fresco under Dubai's evening sky. Last food orders taken at 10:30 PM.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Artisanal Shisha Collection */}
      <section className="bg-[#0e0e12] py-24 border-t border-b border-[#c8aa76]/10 mb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="The Shisha Ritual"
            title="Artisanal Shisha Collection"
            description="Handcrafted with organic botanical essences, chilled water purification bases, and bespoke crystal glassware. Available on the terrace Tuesday to Sunday from 1:00 PM."
          />

          <div className="space-y-4">
            {shishaMenu.map((shisha) => (
              <div
                key={shisha.name}
                className="bg-[#14141a] p-6 rounded-xl border border-white/5 hover:border-[#c8aa76]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-editorial text-xl sm:text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors">
                      {shisha.name}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#c8aa76]/15 border border-[#c8aa76]/30 text-[#c8aa76] text-[10px] tracking-wider uppercase font-medium">
                      {shisha.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#9b9890] font-light leading-relaxed">
                    {shisha.description}
                  </p>
                  <span className="text-[11px] text-[#c8aa76]/70 uppercase tracking-widest block pt-1">
                    {shisha.category}
                  </span>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-mono text-base sm:text-lg text-[#c8aa76] font-medium block">
                    {shisha.price}
                  </span>
                  <span className="text-[10px] text-[#9b9890] block">Incl. Municipality & VAT</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-[#9b9890] text-center max-w-2xl mx-auto">
            Guests must be 21 years or older for shisha service. Terrace seating is subject to seasonal weather conditions.
          </div>
        </div>
      </section>

      {/* 5. Direct Reservation CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#ede8df]">
          Book Your Terrace Experience
        </h2>
        <p className="text-sm text-[#9b9890] max-w-xl mx-auto font-light leading-relaxed">
          Ensure your preferred outdoor table overlooking Dubai Creek. Select "Outdoor Creek Terrace" in our reservation form below.
        </p>
        <div>
          <Link
            to="/reservation"
            id="terrace-book-table-btn"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.2em] uppercase hover:bg-[#dfcaa2] transition-all duration-300 shadow-xl shadow-[#c8aa76]/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Terrace Table</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
