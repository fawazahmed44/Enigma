import React from 'react';
import { Sparkles, Heart, Clock, Phone, ShieldCheck, Dumbbell, Droplets, Scissors } from 'lucide-react';
import { PALAZZO_SPA_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export const SpaAndGymPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#09090b]">
      {/* Hero Header */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-[#c8aa76]/20">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1800&auto=format&fit=crop"
            alt="Palazzo Versace Spa and Wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#c8aa76]/10 border border-[#c8aa76]/30 text-[#c8aa76] text-xs uppercase tracking-[0.2em] font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>1,000 sqm Wellness Sanctuary</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#ede8df] tracking-tight leading-[1.1] mb-6">
            The Spa <span className="text-[#c8aa76] italic font-normal">& Gym</span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#9b9890] leading-relaxed mb-8">
            {PALAZZO_SPA_DATA.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs tracking-widest uppercase text-[#ede8df]/80">
            <div className="bg-[#121216] px-4 py-2 rounded-full border border-white/10 flex items-center space-x-2">
              <Droplets className="w-3.5 h-3.5 text-[#c8aa76]" />
              <span>Moroccan Hammam Sanctuaries</span>
            </div>
            <div className="bg-[#121216] px-4 py-2 rounded-full border border-white/10 flex items-center space-x-2">
              <Dumbbell className="w-3.5 h-3.5 text-[#c8aa76]" />
              <span>Technogym Waterfront Fitness</span>
            </div>
            <div className="bg-[#121216] px-4 py-2 rounded-full border border-white/10 flex items-center space-x-2">
              <Scissors className="w-3.5 h-3.5 text-[#c8aa76]" />
              <span>The Spa Nail Studio & Salon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Facilities */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs tracking-[0.2em] uppercase text-[#c8aa76] font-medium mb-1">
            Roman-Inspired Hydrothermal Sanctuaries
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
            Thermal Facilities & Holistic Spaces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PALAZZO_SPA_DATA.amenities.map((facility) => (
            <div
              key={facility.title}
              className="bg-[#121216] p-7 rounded-2xl border border-white/10 hover:border-[#c8aa76]/40 transition-all duration-300"
            >
              <h3 className="font-editorial text-xl text-[#ede8df] mb-2">{facility.title}</h3>
              <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Spa Treatments */}
      <section className="py-16 border-t border-white/10 bg-[#0d0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs tracking-[0.2em] uppercase text-[#c8aa76] font-medium mb-1">
              Curated Therapies
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#ede8df]">
              Signature Versace Spa Rituals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PALAZZO_SPA_DATA.signatureTreatments.map((treatment) => (
              <div
                key={treatment.name}
                className="bg-[#121216] p-8 rounded-2xl border border-[#c8aa76]/30 hover:border-[#c8aa76] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-editorial text-2xl text-[#ede8df]">{treatment.name}</h3>
                    <span className="font-editorial text-lg text-[#c8aa76] font-medium shrink-0 ml-4">
                      {treatment.price}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-[#c8aa76] uppercase tracking-wider mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{treatment.duration}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#9b9890] leading-relaxed mb-6">
                    {treatment.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <a
                    href={`tel:${RESTAURANT_INFO.contact.phone}`}
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-[#1c1c22] hover:bg-[#c8aa76] text-[#ede8df] hover:text-[#09090b] text-xs uppercase tracking-wider transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Reserve Spa Appointment</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Hours & Contact */}
      <section className="py-12 border-t border-white/5 bg-[#09090b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-4">
          <h3 className="font-editorial text-2xl text-[#ede8df]">Hours of Operation</h3>
          <p className="text-xs sm:text-sm text-[#9b9890]">
            The Spa: Open daily from 10:00 AM to 9:00 PM<br />
            The Gym: 24-Hour Access for In-House Guests | Day Guests: 6:00 AM – 10:00 PM
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${RESTAURANT_INFO.contact.email}`}
              className="inline-flex items-center space-x-2 text-[#c8aa76] text-xs uppercase tracking-widest hover:underline"
            >
              <span>Email: spa@palazzoversace.ae</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
