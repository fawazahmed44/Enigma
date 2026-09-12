import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Sparkles, Award, Utensils, Calendar, ChevronRight, ShieldCheck, Clock, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { ENIGMA_KEBABS_DATA, KebabItem, RESTAURANT_INFO } from '../data/restaurantData';

export const KebabsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'signature' | 'sharing'>('all');
  const [selectedKebab, setSelectedKebab] = useState<KebabItem | null>(null);

  const filteredKebabs = ENIGMA_KEBABS_DATA.kebabs.filter((kebab) => {
    if (activeFilter === 'signature') return kebab.isSignature;
    if (activeFilter === 'sharing') return kebab.isSharing;
    return true;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#09090b]">
      {/* Hero Header */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-[#c8aa76]/20 bg-radial-gradient">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1800&auto=format&fit=crop"
            alt="Persian Charcoal Grill background"
            className="w-full h-full object-cover filter saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#c8aa76]/10 border border-[#c8aa76]/30 text-[#c8aa76] text-xs uppercase tracking-[0.2em] font-medium mb-6">
            <Flame className="w-3.5 h-3.5 text-[#c8aa76]" />
            <span>Master Charcoal Repertoire</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#ede8df] tracking-tight leading-[1.1] mb-6">
            Artisanal Persian <span className="text-[#c8aa76] italic font-normal">Kebabs</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#9b9890] leading-relaxed mb-8">
            {ENIGMA_KEBABS_DATA.philosophy}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs tracking-widest uppercase text-[#ede8df]/80">
            <div className="flex items-center space-x-2 bg-[#121216] px-4 py-2 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#c8aa76]" />
              <span>Super Negin Khorasan Saffron</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#121216] px-4 py-2 rounded-full border border-white/10">
              <Flame className="w-3.5 h-3.5 text-[#c8aa76]" />
              <span>Citrus & White Oak Hardwood Coals</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#121216] px-4 py-2 rounded-full border border-white/10">
              <Award className="w-3.5 h-3.5 text-[#c8aa76]" />
              <span>Surgical Stainless Steel Flat Skewers</span>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Pillar Charcoal Craft Section */}
      <section className="py-16 border-b border-white/5 bg-[#0d0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] mb-3">
              The Alchemy of the Persian Manghal
            </h2>
            <p className="text-xs sm:text-sm text-[#9b9890]">
              The secret behind Enigma's melt-in-the-mouth tenderness lies in precise ancestral thermodynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENIGMA_KEBABS_DATA.charcoalProcess.map((step, idx) => (
              <div
                key={step.title}
                className="bg-[#121216] p-6 rounded-xl border border-white/5 hover:border-[#c8aa76]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] tracking-[0.2em] text-[#c8aa76] uppercase font-mono mb-2">
                    Phase 0{idx + 1}
                  </div>
                  <h3 className="font-editorial text-lg text-[#ede8df] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#9b9890] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kebab Selection Menu */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#c8aa76] font-medium mb-1">
              Curated À La Carte Selection
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
              The Royal Persian Kebab Repertoire
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                  : 'bg-[#121216] text-[#9b9890] hover:text-[#ede8df] border border-white/10'
              }`}
            >
              All Kebabs ({ENIGMA_KEBABS_DATA.kebabs.length})
            </button>
            <button
              onClick={() => setActiveFilter('signature')}
              className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all ${
                activeFilter === 'signature'
                  ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                  : 'bg-[#121216] text-[#9b9890] hover:text-[#ede8df] border border-white/10'
              }`}
            >
              Chef Signatures
            </button>
            <button
              onClick={() => setActiveFilter('sharing')}
              className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all ${
                activeFilter === 'sharing'
                  ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                  : 'bg-[#121216] text-[#9b9890] hover:text-[#ede8df] border border-white/10'
              }`}
            >
              Grand Feast Platter
            </button>
          </div>
        </div>

        {/* Kebabs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredKebabs.map((kebab) => (
            <motion.div
              layout
              key={kebab.name}
              className={`bg-[#121216] p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                kebab.isSignature
                  ? 'border-[#c8aa76]/40 shadow-lg shadow-[#c8aa76]/5'
                  : 'border-white/10 hover:border-[#c8aa76]/30'
              }`}
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-editorial text-2xl text-[#ede8df]">{kebab.name}</h3>
                    <span className="font-editorial text-sm text-[#c8aa76] tracking-wider">
                      {kebab.persianName}
                    </span>
                  </div>
                  <span className="font-editorial text-lg text-[#c8aa76] font-medium shrink-0 ml-4">
                    {kebab.price}
                  </span>
                </div>

                {kebab.isSignature && (
                  <div className="inline-block bg-[#c8aa76]/15 border border-[#c8aa76]/30 text-[#c8aa76] text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-3">
                    Signature Masterpiece
                  </div>
                )}
                {kebab.isSharing && (
                  <div className="inline-block bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-3">
                    Imperial Sharing (2–4 Guests)
                  </div>
                )}

                <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed mb-6">
                  {kebab.description}
                </p>

                <div className="space-y-2 text-xs border-t border-white/5 pt-4">
                  <div className="flex justify-between">
                    <span className="text-[#9b9890]">Prime Cut:</span>
                    <span className="text-[#ede8df] font-medium text-right">{kebab.cut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9b9890]">Saffron Grade:</span>
                    <span className="text-[#c8aa76] font-medium text-right">{kebab.saffronGrade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9b9890]">Grill Technique:</span>
                    <span className="text-[#ede8df] text-[11px] text-right max-w-[60%]">
                      {kebab.charcoalMethod}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-[#9b9890] italic">{kebab.pairingNote}</span>
                <Link
                  to="/reservation"
                  className="text-xs uppercase tracking-wider text-[#c8aa76] hover:text-[#dfcaa2] font-medium inline-flex items-center space-x-1"
                >
                  <span>Book</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accompaniment Note */}
        <div className="mt-12 bg-gradient-to-r from-[#121216] via-[#16161c] to-[#121216] p-8 rounded-2xl border border-[#c8aa76]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-editorial text-xl text-[#ede8df]">
              All Kebabs Served with Royal Persian Accompaniments
            </h3>
            <p className="text-xs text-[#9b9890] max-w-3xl leading-relaxed">
              Every kebab skewer is accompanied by aromatic steamed Iranian saffron basmati rice topped with crispy golden Tahdig, charred vine-ripened tomatoes, sweet roasted Persian banana peppers, wild dried sumac, and fresh herb-infused clarified butter.
            </p>
          </div>

          <Link
            to="/reservation"
            className="shrink-0 px-6 py-3 rounded-full bg-[#c8aa76] hover:bg-[#dfcaa2] text-[#09090b] font-medium tracking-[0.16em] uppercase text-xs transition-all shadow-md"
          >
            Reserve Table For Dinner
          </Link>
        </div>
      </section>

      {/* Cross Links to Other Menus */}
      <section className="py-12 border-t border-white/5 bg-[#0c0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h3 className="text-xs tracking-[0.2em] uppercase text-[#c8aa76] font-medium mb-6">
            Explore More Culinary Journeys at Enigma
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/golden-journey"
              className="px-6 py-3 rounded-full bg-[#121216] border border-[#c8aa76]/30 text-[#ede8df] hover:border-[#c8aa76] text-xs tracking-wider uppercase transition-colors"
            >
              The 24-Karat Golden Journey (AED 1,500)
            </Link>
            <Link
              to="/moroccan-pop-up"
              className="px-6 py-3 rounded-full bg-[#121216] border border-white/10 text-[#ede8df] hover:border-[#c8aa76] text-xs tracking-wider uppercase transition-colors"
            >
              Exclusive Moroccan Pop-Up Menu
            </Link>
            <Link
              to="/taste-of-persia"
              className="px-6 py-3 rounded-full bg-[#121216] border border-white/10 text-[#ede8df] hover:border-[#c8aa76] text-xs tracking-wider uppercase transition-colors"
            >
              Taste of Persia Full Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
