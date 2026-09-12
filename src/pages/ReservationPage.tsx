import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info,
  Download,
  Printer,
  ChevronRight,
  ArrowRight,
  Share2,
  Car,
  UserCheck
} from 'lucide-react';
import { RESTAURANT_INFO, GOLDEN_JOURNEY_DATA } from '../data/restaurantData';

interface ConfirmedBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  date: string;
  time: string;
  partySize: number;
  experience: string;
  seatingArea: 'indoor' | 'outdoor';
  occasion: string;
  dietary: string;
  specialRequests: string;
  createdAt: string;
}

export const ReservationPage: React.FC = () => {
  // Tomorrow's date as default
  const defaultDate = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  // Form states
  const [partySize, setPartySize] = useState<number>(2);
  const [seatingArea, setSeatingArea] = useState<'indoor' | 'outdoor'>('indoor');
  const [experience, setExperience] = useState<string>('dinner');
  const [date, setDate] = useState<string>(defaultDate);
  const [time, setTime] = useState<string>('19:30');
  
  // Guest info
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+971');
  const [occasion, setOccasion] = useState<string>('Dinner');
  const [dietary, setDietary] = useState<string>('None');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [agreedToDressCode, setAgreedToDressCode] = useState<boolean>(true);

  // Errors & submission state
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);

  // Load latest reservation from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('enigma_confirmed_booking');
      if (saved) {
        setConfirmedBooking(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const experiences = [
    {
      id: 'dinner',
      title: 'Dinner À La Carte',
      subtitle: 'Taste of Persia / Charcoal specialties',
      note: 'Available 6:00 PM – 11:00 PM daily'
    },
    {
      id: 'golden',
      title: 'The Golden Journey',
      subtitle: '4-Course Tasting in 24k Gold Leaf',
      note: 'AED 1,500 for 2 guests'
    },
    {
      id: 'moroccan',
      title: 'Moroccan Pop-Up Menu',
      subtitle: 'Tagines, Couscous & Seafood Chermoula',
      note: 'À la carte selection'
    },
    {
      id: 'terrace',
      title: 'Terrace Shisha & Dining',
      subtitle: 'Waterfront dining and shisha lounge',
      note: 'Tue–Sun from 1:00 PM on terrace'
    }
  ];

  const handleValidation = () => {
    const errors: { [key: string]: string } = {};
    if (!fullName.trim()) {
      errors.fullName = 'Please provide your full name.';
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!phone.trim() || phone.length < 6) {
      errors.phone = 'Please provide a valid contact telephone number.';
    }
    if (!date) {
      errors.date = 'Please select a reservation date.';
    }
    if (!agreedToDressCode) {
      errors.dressCode = 'Please acknowledge the smart elegant dress code policy.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const referenceId = `ENG-${Math.floor(10000 + Math.random() * 90000)}`;
      const expTitle = experiences.find(exp => exp.id === experience)?.title || 'Dinner';

      const newBooking: ConfirmedBooking = {
        id: referenceId,
        name: fullName,
        email,
        phone,
        countryCode,
        date,
        time,
        partySize,
        experience: expTitle,
        seatingArea,
        occasion,
        dietary,
        specialRequests,
        createdAt: new Date().toISOString()
      };

      try {
        localStorage.setItem('enigma_confirmed_booking', JSON.stringify(newBooking));
      } catch (err) {
        console.error(err);
      }

      setConfirmedBooking(newBooking);
      setIsSubmitting(false);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 600);
  };

  const handleResetOrNewBooking = () => {
    localStorage.removeItem('enigma_confirmed_booking');
    setConfirmedBooking(null);
  };

  // Generate .ics calendar download
  const handleDownloadICS = () => {
    if (!confirmedBooking) return;
    const startIso = `${confirmedBooking.date.replace(/-/g, '')}T${confirmedBooking.time.replace(':', '')}00`;
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Enigma Palazzo Versace Dubai//Table Reservation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Dinner at Enigma - Palazzo Versace Dubai (${confirmedBooking.id})`,
      `DESCRIPTION:Reservation for ${confirmedBooking.name} (${confirmedBooking.partySize} Guests) at Enigma, Palazzo Versace Dubai. Experience: ${confirmedBooking.experience}. Dress code: Smart Elegant.`,
      `LOCATION:Enigma, Ground Floor West Wing, Palazzo Versace Dubai, Al Jaddaf, Dubai`,
      `DTSTART:${startIso}`,
      `DTEND:${confirmedBooking.date.replace(/-/g, '')}T230000`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Enigma_Reservation_${confirmedBooking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#09090b] text-[#ede8df] pt-28 pb-24">
      {/* Header Banner */}
      <section className="relative px-6 md:px-12 max-w-5xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#c8aa76]/40 bg-[#c8aa76]/10 text-[#c8aa76] text-xs tracking-[0.24em] uppercase mb-6">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Reservations</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#ede8df]">
            {confirmedBooking ? 'Reservation Confirmed' : 'Reserve Your Table'}
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#9b9890] font-light leading-relaxed max-w-2xl mx-auto">
            {confirmedBooking
              ? `Your table reservation at Enigma has been secured. We look forward to welcoming you to Palazzo Versace Dubai.`
              : `Experience authentic Persian fine dining and the 24k Golden Journey. Complete your details below to receive instant table confirmation.`}
          </p>
        </motion.div>
      </section>

      {/* Main Container */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <AnimatePresence mode="wait">
          
          {/* CONFIRMATION SCREEN */}
          {confirmedBooking ? (
            <motion.div
              key="confirmation-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Confirmed Summary Card */}
              <div className="bg-[#14141a] rounded-2xl border border-[#c8aa76]/50 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                {/* Ambient Gold Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#c8aa76]/20 border border-[#c8aa76] flex items-center justify-center text-[#c8aa76]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-[0.25em] text-[#c8aa76] uppercase font-medium">
                        Booking Reference
                      </span>
                      <h2 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] tracking-wider">
                        {confirmedBooking.id}
                      </h2>
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs tracking-wider uppercase font-medium self-start sm:self-auto">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Confirmed & Guaranteed</span>
                  </div>
                </div>

                {/* Details Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-b border-white/10">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#c8aa76] block">Guest Name</span>
                    <p className="font-editorial text-lg text-[#ede8df]">{confirmedBooking.name}</p>
                    <span className="text-[11px] text-[#9b9890] block">{confirmedBooking.countryCode} {confirmedBooking.phone}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#c8aa76] block">Date & Time</span>
                    <p className="font-editorial text-lg text-[#ede8df]">{confirmedBooking.date}</p>
                    <span className="text-[11px] text-[#c8aa76] font-mono block">{confirmedBooking.time}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#c8aa76] block">Party & Seating</span>
                    <p className="font-editorial text-lg text-[#ede8df]">{confirmedBooking.partySize} {confirmedBooking.partySize === 1 ? 'Guest' : 'Guests'}</p>
                    <span className="text-[11px] text-[#9b9890] block capitalize">
                      {confirmedBooking.seatingArea === 'indoor' ? 'Indoor Versace Salon (60 seats)' : 'Outdoor Creek Terrace (36 seats)'}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#c8aa76] block">Experience</span>
                    <p className="font-editorial text-lg text-[#ede8df] truncate">{confirmedBooking.experience}</p>
                    <span className="text-[11px] text-[#9b9890] block">Occasion: {confirmedBooking.occasion}</span>
                  </div>
                </div>

                {/* Notes & Dietary info if present */}
                {(confirmedBooking.dietary !== 'None' || confirmedBooking.specialRequests) && (
                  <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#9b9890]">
                    {confirmedBooking.dietary !== 'None' && (
                      <p><strong className="text-[#ede8df]">Dietary Requirements:</strong> {confirmedBooking.dietary}</p>
                    )}
                    {confirmedBooking.specialRequests && (
                      <p><strong className="text-[#ede8df]">Special Notes:</strong> {confirmedBooking.specialRequests}</p>
                    )}
                  </div>
                )}

                {/* Essential Arrival Reminders */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-xs text-[#9b9890]">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-[#c8aa76] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#ede8df] block">Arrival Location</strong>
                      <span>Ground Floor, West Wing, Palazzo Versace Dubai.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Car className="w-4 h-4 text-[#c8aa76] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#ede8df] block">Complimentary Valet</strong>
                      <span>Available at the main hotel port-cochère.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 text-[#c8aa76] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#ede8df] block">Need Assistance?</strong>
                      <span>Call Concierge: <a href="tel:+97145568888" className="text-[#c8aa76]">{RESTAURANT_INFO.contact.phone}</a></span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleDownloadICS}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#c8aa76] text-[#09090b] text-xs font-medium uppercase tracking-wider hover:bg-[#dfcaa2] transition-colors shadow-md"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Add to Calendar</span>
                    </button>

                    <button
                      type="button"
                      onClick={handlePrint}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/20 text-[#ede8df] hover:border-[#c8aa76] text-xs uppercase tracking-wider transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Summary</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetOrNewBooking}
                    className="text-xs tracking-wider uppercase text-[#c8aa76] hover:text-[#dfcaa2] underline underline-offset-4 font-medium"
                  >
                    Modify or Book Another Table
                  </button>
                </div>
              </div>

              {/* Confirmation Email Notice Banner */}
              <div className="p-4 rounded-xl bg-[#121216] border border-white/10 flex items-center justify-between text-xs text-[#9b9890]">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#c8aa76]" />
                  <span>
                    A confirmation email has been dispatched to <strong className="text-[#ede8df]">{confirmedBooking.email}</strong>.
                  </span>
                </div>
                <span className="text-[11px] text-[#c8aa76]">Dress Code: Smart Elegant</span>
              </div>
            </motion.div>
          ) : (
            
            /* RESERVATION FORM SCREEN */
            <motion.div
              key="form-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              {/* Form Column (7 cols) */}
              <div className="lg:col-span-7 bg-[#14141a] rounded-2xl border border-[#c8aa76]/30 p-8 sm:p-10 shadow-2xl">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] text-[#c8aa76] uppercase font-medium">
                      Table Booking Request
                    </span>
                    <h2 className="font-editorial text-2xl sm:text-3xl text-[#ede8df] mt-1">
                      Guest Reservation Details
                    </h2>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-[#c8aa76]" />
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  
                  {/* Step 1: Experience Selection */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-2 font-medium">
                      1. Select Dining Experience
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {experiences.map((exp) => (
                        <button
                          key={exp.id}
                          type="button"
                          onClick={() => setExperience(exp.id)}
                          className={`p-3.5 rounded-xl text-left border text-xs transition-all ${
                            experience === exp.id
                              ? 'border-[#c8aa76] bg-[#c8aa76]/15 text-[#ede8df] shadow-md shadow-[#c8aa76]/10'
                              : 'border-white/10 bg-black/30 text-[#9b9890] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-editorial text-base block text-[#ede8df]">{exp.title}</span>
                            {exp.id === 'golden' && <Sparkles className="w-3.5 h-3.5 text-[#c8aa76]" />}
                          </div>
                          <span className="text-[11px] text-[#9b9890] block mt-0.5">{exp.subtitle}</span>
                          <span className="text-[10px] text-[#c8aa76] block mt-1">{exp.note}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Seating Area */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-2 font-medium">
                      2. Seating Preference
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSeatingArea('indoor')}
                        className={`p-3.5 rounded-xl text-left border text-xs transition-all ${
                          seatingArea === 'indoor'
                            ? 'border-[#c8aa76] bg-[#c8aa76]/15 text-[#ede8df]'
                            : 'border-white/10 bg-black/30 text-[#9b9890] hover:border-white/20'
                        }`}
                      >
                        <span className="font-medium text-[#ede8df] block">Indoor Dining Salon</span>
                        <span className="text-[11px] text-[#9b9890]">60 Guests • Neoclassical AC</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSeatingArea('outdoor')}
                        className={`p-3.5 rounded-xl text-left border text-xs transition-all ${
                          seatingArea === 'outdoor'
                            ? 'border-[#c8aa76] bg-[#c8aa76]/15 text-[#ede8df]'
                            : 'border-white/10 bg-black/30 text-[#9b9890] hover:border-white/20'
                        }`}
                      >
                        <span className="font-medium text-[#ede8df] block">Outdoor Creek Terrace</span>
                        <span className="text-[11px] text-[#9b9890]">36 Guests • Creek & Pool Vistas</span>
                      </button>
                    </div>
                  </div>

                  {/* Step 3: Party Size, Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1 font-medium">
                        Guests *
                      </label>
                      <select
                        value={partySize}
                        onChange={(e) => setPartySize(Number(e.target.value))}
                        className="w-full p-2.5 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((num) => (
                          <option key={num} value={num} className="bg-[#14141a]">
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1 font-medium">
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                      />
                      {formErrors.date && <p className="text-[10px] text-red-400 mt-1">{formErrors.date}</p>}
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#ede8df] block mb-1 font-medium">
                        Time Slot *
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                      >
                        {/* Lunch options for Golden Journey */}
                        {experience === 'golden' && (
                          <>
                            <option value="12:30" className="bg-[#14141a]">12:30 PM (Lunch)</option>
                            <option value="13:00" className="bg-[#14141a]">1:00 PM (Lunch)</option>
                            <option value="13:30" className="bg-[#14141a]">1:30 PM (Lunch)</option>
                          </>
                        )}
                        <option value="18:00" className="bg-[#14141a]">6:00 PM</option>
                        <option value="18:30" className="bg-[#14141a]">6:30 PM</option>
                        <option value="19:00" className="bg-[#14141a]">7:00 PM</option>
                        <option value="19:30" className="bg-[#14141a]">7:30 PM</option>
                        <option value="20:00" className="bg-[#14141a]">8:00 PM</option>
                        <option value="20:30" className="bg-[#14141a]">8:30 PM</option>
                        <option value="21:00" className="bg-[#14141a]">9:00 PM</option>
                        <option value="21:30" className="bg-[#14141a]">9:30 PM</option>
                        <option value="22:00" className="bg-[#14141a]">10:00 PM</option>
                        <option value="22:30" className="bg-[#14141a]">10:30 PM (Last Order)</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 4: Guest Contact Details */}
                  <div className="pt-2 border-t border-white/10 space-y-3">
                    <label className="text-xs uppercase tracking-wider text-[#ede8df] block font-medium">
                      3. Guest Contact Information
                    </label>

                    <div>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name (as per reservation) *"
                        className={`w-full p-3 rounded-lg bg-black/60 border text-xs text-[#ede8df] focus:outline-none ${
                          formErrors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#c8aa76]'
                        }`}
                      />
                      {formErrors.fullName && <p className="text-[10px] text-red-400 mt-1">{formErrors.fullName}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address (for confirmation) *"
                          className={`w-full p-3 rounded-lg bg-black/60 border text-xs text-[#ede8df] focus:outline-none ${
                            formErrors.email ? 'border-red-500' : 'border-white/10 focus:border-[#c8aa76]'
                          }`}
                        />
                        {formErrors.email && <p className="text-[10px] text-red-400 mt-1">{formErrors.email}</p>}
                      </div>

                      <div className="flex space-x-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="w-24 p-3 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none shrink-0"
                        >
                          <option value="+971">+971 (UAE)</option>
                          <option value="+966">+966 (KSA)</option>
                          <option value="+974">+974 (Qatar)</option>
                          <option value="+965">+965 (Kuwait)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+1">+1 (US)</option>
                          <option value="+33">+33 (FR)</option>
                          <option value="+49">+49 (DE)</option>
                          <option value="+7">+7 (RU)</option>
                        </select>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone Number *"
                          className={`w-full p-3 rounded-lg bg-black/60 border text-xs text-[#ede8df] focus:outline-none ${
                            formErrors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#c8aa76]'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Occasion & Preferences */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#9b9890] block mb-1">
                        Dining Occasion
                      </label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                      >
                        <option value="Dinner">Casual Dining</option>
                        <option value="Romantic Date">Romantic Dinner</option>
                        <option value="Anniversary">Anniversary Celebration</option>
                        <option value="Birthday">Birthday Gathering</option>
                        <option value="Business">Business Meeting</option>
                        <option value="Celebration">Special Celebration</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#9b9890] block mb-1">
                        Dietary Preferences
                      </label>
                      <select
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                      >
                        <option value="None">No Dietary Restrictions</option>
                        <option value="Halal">Halal</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Gluten-Free">Gluten-Free</option>
                        <option value="Dairy-Free">Dairy-Free</option>
                        <option value="Nut Allergy">Nut Allergy</option>
                        <option value="Shellfish Allergy">Shellfish Allergy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#9b9890] block mb-1">
                      Special Seating Requests (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Waterfront view preferred, quiet table, anniversary dessert arrangement..."
                      className="w-full p-2.5 rounded-lg bg-black/60 border border-white/10 text-xs text-[#ede8df] focus:border-[#c8aa76] focus:outline-none"
                    />
                  </div>

                  {/* Dress Code agreement */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToDressCode}
                        onChange={(e) => setAgreedToDressCode(e.target.checked)}
                        className="mt-0.5 rounded text-[#c8aa76] focus:ring-[#c8aa76]"
                      />
                      <span className="text-xs text-[#9b9890]">
                        I confirm and acknowledge the restaurant's <strong className="text-[#ede8df]">Smart Elegant</strong> dress code (or traditional local attire). Sportswear, beachwear, and flip-flops are strictly prohibited.
                      </span>
                    </label>
                    {formErrors.dressCode && <p className="text-[10px] text-red-400">{formErrors.dressCode}</p>}
                  </div>

                  {/* Primary Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="confirm-reservation-submit-btn"
                      className="w-full flex items-center justify-center space-x-3 py-4 px-8 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#dfcaa2] transition-all duration-300 shadow-xl shadow-[#c8aa76]/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Confirming Reservation...</span>
                      ) : (
                        <>
                          <span>Confirm & Book Table</span>
                          <CheckCircle2 className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-[#9b9890] mt-3">
                      Instant verification • Direct table reservation with Enigma Concierge
                    </p>
                  </div>
                </form>

              </div>

              {/* Info Column (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Dining Summary Box */}
                <div className="p-6 rounded-2xl bg-[#121216] border border-white/5 space-y-4">
                  <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase font-medium block">
                    Dining Information
                  </span>
                  <h3 className="font-editorial text-2xl text-[#ede8df]">
                    Enigma at Palazzo Versace
                  </h3>

                  <div className="space-y-3 text-xs text-[#9b9890] border-t border-white/5 pt-3">
                    <div className="flex items-start space-x-2.5">
                      <MapPin className="w-4 h-4 text-[#c8aa76] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#ede8df] block">Location:</strong>
                        {RESTAURANT_INFO.location.venue}, {RESTAURANT_INFO.location.hotel}, {RESTAURANT_INFO.location.address}, Dubai
                      </span>
                    </div>

                    <div className="flex items-start space-x-2.5">
                      <Clock className="w-4 h-4 text-[#c8aa76] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#ede8df] block">Opening Hours:</strong>
                        Dinner: Daily 6:00 PM – 11:00 PM (Last order: 10:30 PM)<br />
                        Lunch: Golden Journey private bookings (12:00 PM – 4:00 PM)<br />
                        Shisha: Tue–Sun from 1:00 PM on the terrace
                      </span>
                    </div>

                    <div className="flex items-start space-x-2.5">
                      <Users className="w-4 h-4 text-[#c8aa76] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#ede8df] block">Seating Capacity:</strong>
                        Indoor — 60 guests • Outdoor Terrace — 36 guests
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dress Code Policy Box */}
                <div className="p-6 rounded-2xl bg-[#121216] border border-white/5 space-y-3">
                  <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase font-medium block">
                    Dress Code Policy
                  </span>
                  <h4 className="font-editorial text-xl text-[#ede8df]">
                    {RESTAURANT_INFO.dressCode.standard}
                  </h4>
                  <p className="text-xs text-[#9b9890] leading-relaxed">
                    {RESTAURANT_INFO.dressCode.note}
                  </p>
                </div>

                {/* Direct Telephone / Concierge Assistance */}
                <div className="p-6 rounded-2xl bg-[#121216] border border-[#c8aa76]/20 space-y-4">
                  <span className="text-[10px] tracking-[0.2em] text-[#c8aa76] uppercase font-medium block">
                    Immediate Assistance
                  </span>
                  <div className="space-y-2 text-xs">
                    <a
                      href={`tel:${RESTAURANT_INFO.contact.phone}`}
                      className="flex items-center space-x-2.5 text-[#ede8df] hover:text-[#c8aa76] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#c8aa76]" />
                      <span className="font-medium text-sm">{RESTAURANT_INFO.contact.phone}</span>
                    </a>
                    <a
                      href={`mailto:${RESTAURANT_INFO.contact.reservationEmail}`}
                      className="flex items-center space-x-2.5 text-[#ede8df] hover:text-[#c8aa76] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#c8aa76]" />
                      <span>{RESTAURANT_INFO.contact.reservationEmail}</span>
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </section>

      {/* Pricing Policy Disclaimer */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs text-[#9b9890]">
          {RESTAURANT_INFO.pricingPolicy}
        </p>
      </section>
    </div>
  );
};
