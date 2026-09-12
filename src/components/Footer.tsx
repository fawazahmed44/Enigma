import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Clock, ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-restaurant-footer" className="bg-[#0c0c0f] border-t border-[#c8aa76]/15 text-[#ede8df] relative overflow-hidden">
      {/* Subtle architectural ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#c8aa76]/5 to-transparent pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-editorial text-3xl md:text-4xl tracking-[0.22em] text-[#ede8df] block uppercase">
                ENIGMA
              </span>
              <span className="font-sans text-[11px] tracking-[0.3em] text-[#c8aa76] uppercase block mt-1">
                PALAZZO VERSACE DUBAI
              </span>
            </div>
            
            <p className="text-sm text-[#9b9890] leading-relaxed max-w-sm font-light">
              {RESTAURANT_INFO.story} Reinterpreting imperial Persian recipes with modern haute cuisine on the banks of Dubai Creek.
            </p>

            {/* Social handles */}
            <div className="pt-2 flex items-center space-x-5">
              <a
                href={RESTAURANT_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                className="inline-flex items-center space-x-2 text-xs tracking-widest text-[#c8aa76] hover:text-[#dfcaa2] transition-colors uppercase border border-[#c8aa76]/30 px-3.5 py-1.5 rounded-full hover:border-[#c8aa76]"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{RESTAURANT_INFO.contact.instagram}</span>
              </a>
              <span className="text-xs text-[#9b9890]">
                {RESTAURANT_INFO.contact.palazzoInstagram}
              </span>
            </div>
          </div>

          {/* Experiences & Menus (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#c8aa76] font-medium">
              Enigma Dining
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  to="/taste-of-persia"
                  id="footer-link-taste-of-persia"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  Taste of Persia
                </Link>
              </li>
              <li>
                <Link
                  to="/kebabs"
                  id="footer-link-kebabs"
                  className="text-[#ede8df] hover:text-[#c8aa76] transition-colors flex items-center justify-between font-medium"
                >
                  <span>Artisanal Kebabs Repertoire</span>
                  <span className="text-[10px] text-orange-400">Charcoal</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/golden-journey"
                  id="footer-link-golden-journey"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors flex items-center justify-between group"
                >
                  <span>Golden Journey (24k Gold)</span>
                  <span className="text-[10px] text-[#c8aa76]">AED 1,500</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/moroccan-pop-up"
                  id="footer-link-moroccan-popup"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  Moroccan Pop-Up Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/terrace"
                  id="footer-link-terrace"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  Outdoor Terrace & Shisha
                </Link>
              </li>
              <li>
                <Link
                  to="/private-dining"
                  id="footer-link-private-dining"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  Private Dining Salon
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  id="footer-link-menu"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  Comprehensive Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Palazzo Versace Directory (3 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#c8aa76] font-medium">
              Palazzo Versace
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  to="/restaurants-and-bars"
                  id="footer-link-restaurants"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  All 9 Restaurants & Bars
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms-and-suites"
                  id="footer-link-rooms"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  Rooms, Suites & Residences
                </Link>
              </li>
              <li>
                <Link
                  to="/spa-and-gym"
                  id="footer-link-spa"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  The Spa & Moroccan Hammam
                </Link>
              </li>
              <li>
                <Link
                  to="/meetings-and-events"
                  id="footer-link-events"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  Meetings & Gala Ballroom
                </Link>
              </li>
              <li>
                <Link
                  to="/special-offers"
                  id="footer-link-offers"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  Curated Special Offers
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  id="footer-link-gallery"
                  className="text-[#9b9890] hover:text-[#ede8df] transition-colors"
                >
                  Visual Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#c8aa76] font-medium">
              Visit & Reservations
            </h3>
            <div className="space-y-3 text-sm text-[#9b9890]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#c8aa76] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {RESTAURANT_INFO.location.venue}<br />
                  {RESTAURANT_INFO.location.hotel}<br />
                  {RESTAURANT_INFO.location.address}, Dubai
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#c8aa76] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.contact.phone}`} className="hover:text-[#ede8df] transition-colors">
                  {RESTAURANT_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#c8aa76] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.contact.reservationEmail}`} className="hover:text-[#ede8df] transition-colors">
                  {RESTAURANT_INFO.contact.reservationEmail}
                </a>
              </div>
              <div className="flex items-start space-x-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#c8aa76] shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p className="text-[#ede8df]">Dinner: Daily 6:00 PM – 11:00 PM</p>
                  <p className="text-[#9b9890]">Last order: 10:30 PM</p>
                  <p className="text-[#9b9890] mt-0.5">Shisha: Tue–Sun from 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Reserve Action (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#c8aa76] font-medium">
              Reservations
            </h3>
            <p className="text-xs text-[#9b9890] leading-relaxed">
              Indoor salon (60 seats) or outdoor terrace (36 seats) by Dubai Creek.
            </p>
            <Link
              to="/reservation"
              id="footer-reserve-button"
              className="inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.16em] uppercase hover:bg-[#dfcaa2] transition-colors"
            >
              <span>Reserve Table</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <div className="text-[11px] text-[#9b9890] pt-1">
              Dress code: Smart elegant or traditional local attire.
            </div>
          </div>

        </div>

        {/* Legal and Policies Divider */}
        <div className="border-t border-[#c8aa76]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#9b9890] space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/information" className="hover:text-[#ede8df] transition-colors">
              About Enigma
            </Link>
            <Link to="/information" className="hover:text-[#ede8df] transition-colors">
              Seating & Dress Code
            </Link>
            <a 
              href="https://www.palazzoversace.ae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#ede8df] transition-colors"
            >
              Palazzo Versace Dubai Official
            </a>
            <span className="hover:text-[#ede8df] cursor-pointer">
              Hotel Policies
            </span>
            <span className="hover:text-[#ede8df] cursor-pointer">
              Privacy & Cookies
            </span>
          </div>
          
          <div className="text-center md:text-right text-[11px] tracking-wider text-[#9b9890]/80">
            © {new Date().getFullYear()} Enigma at Palazzo Versace Dubai. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
