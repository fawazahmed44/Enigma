import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Calendar,
  ChevronRight,
  Sparkles,
  Flame,
  MoreVertical,
  Utensils,
  BedDouble,
  Droplets,
  Users,
  Gift,
  MapPin,
  ExternalLink,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESTAURANT_INFO, PALAZZO_DINING_VENUES } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDrawerTab, setActiveDrawerTab] = useState<'enigma' | 'dining' | 'hotel' | 'offers'>('enigma');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  const mainNavLinks = [
    { name: 'The Story', path: '/story' },
    { name: 'Taste of Persia', path: '/taste-of-persia' },
    { name: 'Kebabs', path: '/kebabs', badge: 'Charcoal' },
    { name: 'Golden Journey', path: '/golden-journey', isGold: true },
    { name: 'Moroccan Pop-Up', path: '/moroccan-pop-up' },
    { name: 'Terrace', path: '/terrace' },
    { name: 'Menu', path: '/menu' },
    { name: 'Restaurants', path: '/restaurants-and-bars' },
  ];

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-[#c8aa76]/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            to="/"
            id="nav-brand-link"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c8aa76] shrink-0 mr-4"
          >
            <span className="font-editorial text-xl sm:text-2xl md:text-3xl font-medium tracking-[0.22em] text-[#ede8df] group-hover:text-[#c8aa76] transition-colors uppercase">
              ENIGMA
            </span>
            <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.28em] text-[#c8aa76] uppercase -mt-0.5">
              PALAZZO VERSACE DUBAI
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-3 xl:space-x-5">
            {mainNavLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`relative text-[11px] xl:text-xs tracking-[0.14em] uppercase transition-colors duration-200 py-1 flex items-center space-x-1 whitespace-nowrap ${
                    isActive
                      ? 'text-[#c8aa76] font-medium'
                      : 'text-[#ede8df]/80 hover:text-[#ede8df]'
                  }`}
                >
                  {link.isGold && <Sparkles className="w-3 h-3 text-[#c8aa76] shrink-0 inline mr-0.5" />}
                  {link.badge === 'Charcoal' && <Flame className="w-3 h-3 text-orange-400 shrink-0 inline mr-0.5" />}
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c8aa76]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Directory/Kebab Drawer, Book a Table & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Kebab Menu / Palazzo Directory Button */}
            <button
              id="kebab-menu-drawer-trigger"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-full bg-[#16161c] hover:bg-[#202028] text-[#ede8df] hover:text-[#c8aa76] border border-white/10 hover:border-[#c8aa76]/40 text-xs tracking-wider uppercase transition-all"
              title="Open Palazzo Versace Directory (Kebab Menu)"
              aria-label="Open Palazzo Versace Navigation Directory"
            >
              <MoreVertical className="w-4 h-4 text-[#c8aa76]" />
              <span className="hidden sm:inline text-[11px] tracking-widest font-medium">Directory</span>
            </button>

            {/* Book a Table CTA */}
            <Link
              to="/reservation"
              id="nav-reserve-btn"
              className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#c8aa76] hover:bg-[#dfcaa2] text-[#09090b] transition-all duration-300 text-[11px] sm:text-xs tracking-[0.16em] uppercase font-medium shadow-md shadow-[#c8aa76]/15 hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </Link>

            {/* Mobile Hamburger / Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="lg:hidden p-2 text-[#ede8df] hover:text-[#c8aa76] transition-colors focus:outline-none"
              aria-label={drawerOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {drawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Palazzo Versace Fullscreen / Slide-over Mega Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
            />

            {/* Drawer Content */}
            <motion.div
              id="palazzo-versace-directory-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-2xl bg-[#0b0b0e] border-l border-[#c8aa76]/30 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-6 pb-4 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0b0b0e]/95 backdrop-blur-md z-10">
                <div className="flex flex-col">
                  <span className="font-editorial text-2xl tracking-widest text-[#ede8df] uppercase">
                    PALAZZO VERSACE
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-[#c8aa76] uppercase">
                    Dubai • Navigation Directory
                  </span>
                </div>

                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#ede8df] hover:text-[#c8aa76] transition-colors"
                  aria-label="Close directory menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Tabs */}
              <div className="p-6 pt-4 flex-grow space-y-6">
                <div className="flex items-center space-x-2 border-b border-white/10 pb-3 overflow-x-auto">
                  <button
                    onClick={() => setActiveDrawerTab('enigma')}
                    className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors shrink-0 ${
                      activeDrawerTab === 'enigma'
                        ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                        : 'bg-[#15151c] text-[#9b9890] hover:text-[#ede8df]'
                    }`}
                  >
                    Enigma Dining
                  </button>
                  <button
                    onClick={() => setActiveDrawerTab('dining')}
                    className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors shrink-0 ${
                      activeDrawerTab === 'dining'
                        ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                        : 'bg-[#15151c] text-[#9b9890] hover:text-[#ede8df]'
                    }`}
                  >
                    All 9 Restaurants
                  </button>
                  <button
                    onClick={() => setActiveDrawerTab('hotel')}
                    className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors shrink-0 ${
                      activeDrawerTab === 'hotel'
                        ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                        : 'bg-[#15151c] text-[#9b9890] hover:text-[#ede8df]'
                    }`}
                  >
                    Suites & Spa
                  </button>
                  <button
                    onClick={() => setActiveDrawerTab('offers')}
                    className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors shrink-0 ${
                      activeDrawerTab === 'offers'
                        ? 'bg-[#c8aa76] text-[#09090b] font-medium'
                        : 'bg-[#15151c] text-[#9b9890] hover:text-[#ede8df]'
                    }`}
                  >
                    Special Offers
                  </button>
                </div>

                {/* Tab 1: Enigma Culinary Repertoire */}
                {activeDrawerTab === 'enigma' && (
                  <div className="space-y-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#c8aa76] font-medium">
                      Enigma Persian Fine Dining Repertoire
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Link
                        to="/story"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
                      >
                        <span className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                          The Story of Enigma
                        </span>
                        <span className="text-[11px] text-[#9b9890] mt-1">Origins & Iranian heritage</span>
                      </Link>

                      <Link
                        to="/taste-of-persia"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
                      >
                        <span className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                          Taste of Persia
                        </span>
                        <span className="text-[11px] text-[#9b9890] mt-1">Core Iranian delicacies & stews</span>
                      </Link>

                      <Link
                        to="/kebabs"
                        className="p-4 rounded-xl bg-[#16161f] border border-[#c8aa76]/40 hover:border-[#c8aa76] transition-all flex flex-col justify-between group shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                            Artisanal Persian Kebabs
                          </span>
                          <Flame className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-[11px] text-[#c8aa76] mt-1">Sultani, Koobideh, Barg & Shishlik</span>
                      </Link>

                      <Link
                        to="/golden-journey"
                        className="p-4 rounded-xl bg-[#16161f] border border-[#c8aa76]/40 hover:border-[#c8aa76] transition-all flex flex-col justify-between group shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                            The Golden Journey
                          </span>
                          <Sparkles className="w-4 h-4 text-[#c8aa76]" />
                        </div>
                        <span className="text-[11px] text-[#c8aa76] mt-1">4-course 24k gold sharing menu</span>
                      </Link>

                      <Link
                        to="/moroccan-pop-up"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
                      >
                        <span className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                          Moroccan Pop-Up Menu
                        </span>
                        <span className="text-[11px] text-[#9b9890] mt-1">Tagines, pastilla & caviar</span>
                      </Link>

                      <Link
                        to="/terrace"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
                      >
                        <span className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                          Creek Terrace & Shisha
                        </span>
                        <span className="text-[11px] text-[#9b9890] mt-1">36 seats al fresco pool view</span>
                      </Link>

                      <Link
                        to="/private-dining"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
                      >
                        <span className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                          Private Dining Salon
                        </span>
                        <span className="text-[11px] text-[#9b9890] mt-1">Exclusive 60-guest buyouts</span>
                      </Link>

                      <Link
                        to="/menu"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
                      >
                        <span className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                          Comprehensive Menu
                        </span>
                        <span className="text-[11px] text-[#9b9890] mt-1">Full prices & dietary guide</span>
                      </Link>

                      <Link
                        to="/gallery"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
                      >
                        <span className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                          Visual Gallery
                        </span>
                        <span className="text-[11px] text-[#9b9890] mt-1">Architectural & dish photography</span>
                      </Link>

                      <Link
                        to="/information"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
                      >
                        <span className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                          Location & Hours
                        </span>
                        <span className="text-[11px] text-[#9b9890] mt-1">West Wing, dress code & maps</span>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Tab 2: All 9 Palazzo Versace Restaurants */}
                {activeDrawerTab === 'dining' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#c8aa76] font-medium">
                        9 Versace-Themed Restaurants & Bars
                      </span>
                      <Link
                        to="/restaurants-and-bars"
                        className="text-xs text-[#c8aa76] hover:underline inline-flex items-center space-x-1"
                      >
                        <span>View All Venues</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="space-y-2.5">
                      {PALAZZO_DINING_VENUES.map((venue) => (
                        <div
                          key={venue.id}
                          className="p-3.5 rounded-xl bg-[#121216] border border-white/5 flex items-center justify-between hover:border-[#c8aa76]/30 transition-all"
                        >
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-editorial text-lg text-[#ede8df]">{venue.name}</span>
                              {venue.id === 'enigma' && (
                                <span className="bg-[#c8aa76] text-[#09090b] text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase">
                                  Current Venue
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-[#9b9890]">{venue.cuisine} • {venue.location}</span>
                          </div>

                          <Link
                            to={venue.id === 'enigma' ? '/taste-of-persia' : '/restaurants-and-bars'}
                            className="text-xs uppercase tracking-wider text-[#c8aa76] hover:text-[#dfcaa2] font-medium shrink-0 ml-2"
                          >
                            Explore
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Suites, Residences, Spa & Events */}
                {activeDrawerTab === 'hotel' && (
                  <div className="space-y-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#c8aa76] font-medium">
                      Accommodations & Palatial Services
                    </div>

                    <div className="space-y-3">
                      <Link
                        to="/rooms-and-suites"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex items-start space-x-4 group"
                      >
                        <BedDouble className="w-6 h-6 text-[#c8aa76] shrink-0 mt-1" />
                        <div>
                          <h4 className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                            Rooms & Suites (215 Rooms & 169 Residences)
                          </h4>
                          <p className="text-xs text-[#9b9890] mt-1">
                            Tailor-made fabrics and furnishings by Versace, Carrara marble bathrooms, and Creek views.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/spa-and-gym"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex items-start space-x-4 group"
                      >
                        <Droplets className="w-6 h-6 text-[#c8aa76] shrink-0 mt-1" />
                        <div>
                          <h4 className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                            The Spa & Gym (1,000 sqm Sanctuary)
                          </h4>
                          <p className="text-xs text-[#9b9890] mt-1">
                            Moroccan Hammams, 24k Gold Facial, hydrothermal vitality pools, and Technogym fitness.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/meetings-and-events"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 hover:border-[#c8aa76]/40 transition-all flex items-start space-x-4 group"
                      >
                        <Users className="w-6 h-6 text-[#c8aa76] shrink-0 mt-1" />
                        <div>
                          <h4 className="font-editorial text-lg text-[#ede8df] group-hover:text-[#c8aa76]">
                            Meetings, Galas & Weddings
                          </h4>
                          <p className="text-xs text-[#9b9890] mt-1">
                            Pillarless Gala Ballroom for 900 guests, pre-function salon, and Versace wedding styling.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Tab 4: Special Offers */}
                {activeDrawerTab === 'offers' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#c8aa76] font-medium">
                        Curated Dining & Stay Offers
                      </span>
                      <Link
                        to="/special-offers"
                        className="text-xs text-[#c8aa76] hover:underline inline-flex items-center space-x-1"
                      >
                        <span>All Offers</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <Link
                        to="/golden-journey"
                        className="p-4 rounded-xl bg-[#16161f] border border-[#c8aa76]/40 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-editorial text-lg text-[#ede8df]">The Golden Journey</span>
                          <span className="text-xs text-[#c8aa76] font-mono font-medium">AED 1,500</span>
                        </div>
                        <p className="text-xs text-[#9b9890] mt-1">
                          4-course sharing feast adorned with edible 24-karat gold leaf at Enigma.
                        </p>
                      </Link>

                      <Link
                        to="/moroccan-pop-up"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-editorial text-lg text-[#ede8df]">Moroccan Pop-Up Menu</span>
                          <span className="text-xs text-[#c8aa76] font-mono">From AED 60</span>
                        </div>
                        <p className="text-xs text-[#9b9890] mt-1">
                          Slow-simmered chicken tagines, beef harira, and seafood chermoula with caviar.
                        </p>
                      </Link>

                      <Link
                        to="/special-offers"
                        className="p-4 rounded-xl bg-[#121216] border border-white/5 flex flex-col justify-between"
                      >
                        <span className="font-editorial text-lg text-[#ede8df]">
                          Explore All Special Offers & Packages
                        </span>
                        <p className="text-xs text-[#9b9890] mt-1">
                          Spa retreats, high tea, weekend brunches, and al fresco shisha promotions.
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-white/10 bg-[#09090b] space-y-4">
                <Link
                  to="/reservation"
                  onClick={() => setDrawerOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full bg-[#c8aa76] text-[#09090b] font-medium tracking-[0.16em] uppercase text-xs hover:bg-[#dfcaa2] transition-colors shadow-lg shadow-[#c8aa76]/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Table at Enigma</span>
                </Link>

                <div className="flex items-center justify-between text-xs text-[#9b9890] pt-1">
                  <a
                    href={`tel:${RESTAURANT_INFO.contact.phone}`}
                    className="flex items-center space-x-1.5 hover:text-[#c8aa76] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#c8aa76]" />
                    <span>{RESTAURANT_INFO.contact.phone}</span>
                  </a>
                  <span className="text-[#c8aa76] text-[11px] tracking-wider">
                    Jaddaf Waterfront, Dubai
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
