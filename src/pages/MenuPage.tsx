import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  FileText,
  ExternalLink,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import {
  RESTAURANT_INFO,
  GOLDEN_JOURNEY_DATA,
  MOROCCAN_POPUP_DATA,
  TASTE_OF_PERSIA_HIGHLIGHTS
} from '../data/restaurantData';
import { SectionHeading } from '../components/SectionHeading';

export const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'golden' | 'moroccan' | 'persian'>('golden');

  return (
    <div className="bg-[#09090b] text-[#ede8df] pt-28 pb-24">
      {/* Page Header */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#c8aa76]/40 bg-[#c8aa76]/10 text-[#c8aa76] text-xs tracking-[0.24em] uppercase mb-6">
            <span>Enigma Menus & Culinary Editions</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#ede8df]">
            Culinary Menus
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#9b9890] font-light leading-relaxed max-w-2xl mx-auto">
            Explore our curated culinary offerings: the imperial 24-karat Golden Journey set experience, the authentic Moroccan Pop-Up, and the timeless Taste of Persia repertoire.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/reservation"
              id="menu-page-reserve-cta"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.18em] uppercase hover:bg-[#dfcaa2] transition-colors shadow-lg shadow-[#c8aa76]/15"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </Link>

            <a
              href="https://www.palazzoversace.ae/restaurants-and-bars/enigma"
              target="_blank"
              rel="noopener noreferrer"
              id="menu-page-official-portal-btn"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full border border-white/20 hover:border-[#c8aa76] text-[#ede8df] hover:text-[#c8aa76] text-xs tracking-[0.18em] uppercase font-medium transition-colors"
            >
              <span>View Official Hotel Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Interactive Menu Experience Tabs */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        
        {/* Menu Navigation Switcher */}
        <div className="flex justify-center border-b border-white/10 mb-12">
          <div className="flex space-x-2 sm:space-x-8 overflow-x-auto pb-1 max-w-full">
            <button
              onClick={() => setActiveTab('golden')}
              id="tab-btn-golden"
              className={`py-3 px-4 text-xs sm:text-sm tracking-[0.16em] uppercase transition-all whitespace-nowrap border-b-2 font-medium ${
                activeTab === 'golden'
                  ? 'border-[#c8aa76] text-[#c8aa76]'
                  : 'border-transparent text-[#9b9890] hover:text-[#ede8df]'
              }`}
            >
              The Golden Journey (24k Gold)
            </button>

            <button
              onClick={() => setActiveTab('moroccan')}
              id="tab-btn-moroccan"
              className={`py-3 px-4 text-xs sm:text-sm tracking-[0.16em] uppercase transition-all whitespace-nowrap border-b-2 font-medium ${
                activeTab === 'moroccan'
                  ? 'border-[#c8aa76] text-[#c8aa76]'
                  : 'border-transparent text-[#9b9890] hover:text-[#ede8df]'
              }`}
            >
              Moroccan Pop-Up Menu
            </button>

            <button
              onClick={() => setActiveTab('persian')}
              id="tab-btn-persian"
              className={`py-3 px-4 text-xs sm:text-sm tracking-[0.16em] uppercase transition-all whitespace-nowrap border-b-2 font-medium ${
                activeTab === 'persian'
                  ? 'border-[#c8aa76] text-[#c8aa76]'
                  : 'border-transparent text-[#9b9890] hover:text-[#ede8df]'
              }`}
            >
              Taste of Persia Highlights
            </button>
          </div>
        </div>

        {/* Tab Content: The Golden Journey */}
        {activeTab === 'golden' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-[#14141a] border border-[#c8aa76]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#c8aa76] uppercase">4-Course Sharing Menu</span>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#ede8df] mt-1">
                  The Golden Journey
                </h3>
                <p className="text-xs sm:text-sm text-[#9b9890] max-w-xl mt-2 leading-relaxed">
                  {GOLDEN_JOURNEY_DATA.description}
                </p>
              </div>

              <div className="shrink-0 text-left md:text-right">
                <span className="font-editorial text-3xl text-[#c8aa76] block">
                  {GOLDEN_JOURNEY_DATA.price}
                </span>
                <span className="text-xs text-[#9b9890] block mt-0.5">
                  {GOLDEN_JOURNEY_DATA.serves}
                </span>
                <Link
                  to="/golden-journey"
                  id="tab-golden-full-page-btn"
                  className="mt-3 inline-flex items-center space-x-1.5 text-xs text-[#c8aa76] hover:text-[#dfcaa2] uppercase tracking-wider font-medium"
                >
                  <span>View Dedicated Page</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Structured 4 Courses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GOLDEN_JOURNEY_DATA.courses.map((c) => (
                <div key={c.number} className="p-6 rounded-xl bg-[#121216] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#c8aa76]">
                    <span className="font-mono tracking-widest">{c.number} — {c.category}</span>
                    <span className="uppercase text-[10px] tracking-wider text-[#9b9890]">{c.title}</span>
                  </div>

                  {c.name && (
                    <h4 className="font-editorial text-2xl text-[#ede8df]">
                      {c.name}
                    </h4>
                  )}
                  {c.description && (
                    <p className="text-xs text-[#9b9890] leading-relaxed">
                      {c.description}
                    </p>
                  )}

                  {c.items && (
                    <div className="space-y-3 pt-2">
                      {c.items.map((it) => (
                        <div key={it.name} className="border-t border-white/5 pt-2">
                          <h5 className="font-editorial text-xl text-[#ede8df]">{it.name}</h5>
                          <p className="text-xs text-[#9b9890] mt-0.5">{it.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab Content: Moroccan Pop-Up */}
        {activeTab === 'moroccan' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-[#14141a] border border-[#c8aa76]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#c8aa76] uppercase">Limited Edition Pop-Up</span>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#ede8df] mt-1">
                  Moroccan À La Carte Menu
                </h3>
                <p className="text-xs sm:text-sm text-[#9b9890] max-w-xl mt-2 leading-relaxed">
                  {MOROCCAN_POPUP_DATA.description}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/moroccan-pop-up"
                  id="tab-moroccan-full-page-btn"
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-wider uppercase hover:bg-[#dfcaa2] transition-colors"
                >
                  <span>View Full Pop-Up Page</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOROCCAN_POPUP_DATA.categories.map((category) => (
                <div key={category.category} className="p-6 rounded-xl bg-[#121216] border border-white/5 space-y-4">
                  <h4 className="font-editorial text-xl text-[#c8aa76] border-b border-white/10 pb-2 uppercase tracking-wider">
                    {category.category}
                  </h4>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-start gap-4">
                        <div>
                          <div className="text-base text-[#ede8df] font-medium font-editorial text-lg">{item.name}</div>
                          <div className="text-xs text-[#9b9890] leading-relaxed mt-0.5">{item.description}</div>
                        </div>
                        <span className="text-xs font-mono text-[#c8aa76] shrink-0 font-medium">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab Content: Persian Highlights */}
        {activeTab === 'persian' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-[#14141a] border border-[#c8aa76]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#c8aa76] uppercase">Persian Haute Cuisine</span>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#ede8df] mt-1">
                  Taste of Persia Classics
                </h3>
                <p className="text-xs sm:text-sm text-[#9b9890] max-w-xl mt-2 leading-relaxed">
                  From aromatic saffron-infused rice to charcoal-seared skewers, our regular Persian menu celebrates Iranian culinary artistry.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/experience"
                  id="tab-persian-experience-btn"
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-wider uppercase hover:bg-[#dfcaa2] transition-colors"
                >
                  <span>Explore Experience</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TASTE_OF_PERSIA_HIGHLIGHTS.map((dish) => (
                <div key={dish.name} className="p-6 rounded-xl bg-[#121216] border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#c8aa76] mb-2">
                      <span className="uppercase tracking-widest">{dish.course}</span>
                      <span className="font-mono text-sm">{dish.price}</span>
                    </div>
                    <h4 className="font-editorial text-2xl text-[#ede8df] mb-2">{dish.name}</h4>
                    <p className="text-xs text-[#9b9890] leading-relaxed">{dish.description}</p>
                  </div>
                  {dish.highlight && (
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center space-x-1 text-[11px] text-[#c8aa76]">
                      <Sparkles className="w-3 h-3" />
                      <span>Signature Selection</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </section>

      {/* Palazzo Versace Dining Universe & Kebab Links */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#121216] border border-[#c8aa76]/40 flex flex-col justify-between">
            <div>
              <div className="text-[10px] tracking-widest uppercase text-[#c8aa76] mb-1 font-mono">
                Hardwood Charcoal Craft
              </div>
              <h4 className="font-editorial text-xl text-[#ede8df] mb-2">
                Artisanal Persian Kebabs
              </h4>
              <p className="text-xs text-[#9b9890] leading-relaxed mb-4">
                Sultani, Koobideh, Barg, and Chenjeh with golden Tahdig rice and sumac butter.
              </p>
            </div>
            <Link
              to="/kebabs"
              className="inline-flex items-center space-x-1.5 text-xs text-[#c8aa76] hover:underline uppercase tracking-wider font-medium"
            >
              <span>Explore Kebab Repertoire</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-[#121216] border border-white/10 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="text-[10px] tracking-widest uppercase text-[#c8aa76] mb-1 font-mono">
                Palazzo Versace Collection
              </div>
              <h4 className="font-editorial text-xl text-[#ede8df] mb-2">
                All 9 Restaurants & Bars
              </h4>
              <p className="text-xs text-[#9b9890] leading-relaxed mb-4">
                From Vanitas Italian dining to Mosaico Lounge, Giardino buffet, and Q's Bar.
              </p>
            </div>
            <Link
              to="/restaurants-and-bars"
              className="inline-flex items-center space-x-1.5 text-xs text-[#c8aa76] hover:underline uppercase tracking-wider font-medium"
            >
              <span>Explore All 9 Venues</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-[#121216] border border-white/10 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="text-[10px] tracking-widest uppercase text-[#c8aa76] mb-1 font-mono">
                Exclusive Experiences
              </div>
              <h4 className="font-editorial text-xl text-[#ede8df] mb-2">
                Curated Special Offers
              </h4>
              <p className="text-xs text-[#9b9890] leading-relaxed mb-4">
                Golden Journey, High Tea at Mosaico, Spa retreats, and Creek sunset shisha.
              </p>
            </div>
            <Link
              to="/special-offers"
              className="inline-flex items-center space-x-1.5 text-xs text-[#c8aa76] hover:underline uppercase tracking-wider font-medium"
            >
              <span>View Special Offers</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Official Menu Link & Pricing Notice */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="p-8 rounded-2xl bg-[#14141a] border border-white/10 space-y-4">
          <h4 className="font-editorial text-2xl text-[#ede8df]">
            Seasonal Updates & Dietary Guidance
          </h4>
          <p className="text-xs sm:text-sm text-[#9b9890] max-w-xl mx-auto leading-relaxed">
            {RESTAURANT_INFO.pricingPolicy} For custom tasting arrangements or specific dietary considerations, please speak with our reservation team.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/reservation"
              id="menu-bottom-reserve-btn"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.18em] uppercase hover:bg-[#dfcaa2] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </Link>

            <a
              href={`mailto:${RESTAURANT_INFO.contact.reservationEmail}`}
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full border border-white/20 text-[#ede8df] hover:border-[#c8aa76] hover:text-[#c8aa76] text-xs tracking-[0.16em] uppercase transition-colors"
            >
              <span>Email Culinary Concierge</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
