import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ChevronRight, Gift, Tag, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const SpecialOffersPage: React.FC = () => {
  const offers = [
    {
      title: "The Golden Journey at Enigma",
      category: "Culinary Haute Cuisine",
      price: "AED 1,500 for 2 People",
      timing: "Daily for Lunch (12-4 PM) & Dinner (6-11 PM)",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      description: "Midas has made his mark on this striking 4-course sharing menu incorporating touches of edible 24-karat gold into Enigma's signature Persian delicacies.",
      link: "/golden-journey",
      btnText: "Explore Golden Journey"
    },
    {
      title: "Exclusive Moroccan Pop-Up Menu",
      category: "Seasonal Pop-Up",
      price: "À La Carte from AED 60",
      timing: "Available Daily for Dinner at Enigma",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1200&auto=format&fit=crop",
      description: "At Enigma, Moroccan cuisine unfolds as an art of storytelling. Slow-cooked tagines, royal pastilla, and seafood chermoula infused with 10g Oscietra caviar.",
      link: "/moroccan-pop-up",
      btnText: "Explore Moroccan Menu"
    },
    {
      title: "Creek Terrace Sunset Shisha",
      category: "Outdoor Lounge",
      price: "From AED 150",
      timing: "Tuesday to Sunday from 1:00 PM onwards",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
      description: "Relax on the 36-seat waterfront terrace overlooking the Central Mosaic Pool and Dubai Creek with artisanal shisha blends and Persian cold starters.",
      link: "/terrace",
      btnText: "Discover Terrace"
    },
    {
      title: "Artisanal Persian Kebabs Repertoire",
      category: "Enigma Signature",
      price: "From AED 185",
      timing: "Daily from 6:00 PM to 11:00 PM",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
      description: "Wagyu, tender lamb loin, and baby chicken char-grilled over citrus hardwood coals with Super Negin saffron butter and crispy golden Tahdig rice.",
      link: "/kebabs",
      btnText: "Explore Kebab Menu"
    },
    {
      title: "24-Karat Gold Spa Facial Ritual",
      category: "The Spa Sanctuary",
      price: "AED 1,200 (90 Minutes)",
      timing: "Daily from 10:00 AM to 9:00 PM",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
      description: "Pure gold leaf micro-infusion paired with collagen-stimulating peptides for instant youthful luminosity in the palatial marble suites of The Spa.",
      link: "/spa-and-gym",
      btnText: "Explore The Spa"
    },
    {
      title: "Versace Afternoon High Tea at Mosaico",
      category: "Lounge Experience",
      price: "AED 360 for 2 Guests",
      timing: "Daily from 10:30 AM to 7:00 PM",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
      description: "Enjoy delicate pastries, warm scones, caviar sandwiches, and signature 24k Golden Cappuccinos in the central court of Gianni Versace's palace.",
      link: "/restaurants-and-bars",
      btnText: "Explore Mosaico"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#09090b]">
      {/* Hero Header */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-[#c8aa76]/20">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1800&auto=format&fit=crop"
            alt="Palazzo Versace Special Offers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#c8aa76]/10 border border-[#c8aa76]/30 text-[#c8aa76] text-xs uppercase tracking-[0.2em] font-medium mb-6">
            <Gift className="w-3.5 h-3.5" />
            <span>Curated Luxury Experiences</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#ede8df] tracking-tight leading-[1.1] mb-6">
            Special <span className="text-[#c8aa76] italic font-normal">Offers</span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#9b9890] leading-relaxed mb-8">
            Step into a celebration of golden experiences and extraordinary rewards across Enigma Persian restaurant, Palazzo Versace dining venues, and luxury wellness retreats.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-[#121216] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c8aa76]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#c8aa76] text-[#09090b] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                    {offer.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors">
                      {offer.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#c8aa76] font-medium tracking-wider mb-2">
                    {offer.price}
                  </p>

                  <div className="flex items-center space-x-1.5 text-xs text-[#9b9890] mb-4">
                    <Clock className="w-3.5 h-3.5 text-[#c8aa76]" />
                    <span>{offer.timing}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between gap-3">
                <Link
                  to={offer.link}
                  className="flex-1 text-center py-2.5 px-4 rounded-full bg-[#1c1c22] hover:bg-[#c8aa76] text-[#ede8df] hover:text-[#09090b] font-medium text-xs tracking-wider uppercase transition-all"
                >
                  {offer.btnText}
                </Link>
                <Link
                  to="/reservation"
                  className="px-4 py-2.5 rounded-full bg-[#c8aa76] text-[#09090b] text-xs uppercase tracking-wider font-medium hover:bg-[#dfcaa2] transition-colors"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
