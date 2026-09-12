import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  Flame,
  Calendar,
  ArrowRight,
  UtensilsCrossed,
  Layers,
  HeartHandshake,
  Check
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const TasteOfPersiaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'kebabs' | 'stews' | 'starters' | 'rice'>('all');

  const categories = [
    { id: 'all', name: 'All Specialties' },
    { id: 'starters', name: 'Starters & Mezze' },
    { id: 'kebabs', name: 'Charcoal Kebabs' },
    { id: 'stews', name: 'Imperial Stews' },
    { id: 'rice', name: 'Rice & Tahdig' },
  ];

  const dishes = [
    {
      category: 'starters',
      name: 'Kashk-e Bademjan',
      description: 'Slow-charred baby eggplant dip with caramelized mint, crispy onions, walnuts, and fermented Kashk whey. Served with hot Barbari bread.',
      price: 'AED 85',
      tag: 'Heritage Recipe',
      spices: 'Charred Mint & Whey'
    },
    {
      category: 'starters',
      name: 'Mirza Ghasemi',
      description: 'Smoky Caspian Sea roasted eggplant purée folded with charred garlic cloves, heirloom tomatoes, and soft eggs.',
      price: 'AED 85',
      tag: 'Caspian Specialty',
      spices: 'Charred Garlic & Tomato'
    },
    {
      category: 'starters',
      name: 'Mast-o Khiar Royal',
      description: 'Silky Persian strained yogurt with diced crisp cucumbers, dried mountain mint, edible rose petals, golden raisins, and crushed walnuts.',
      price: 'AED 75',
      tag: 'Vegetarian',
      spices: 'Kashan Rose & Mint'
    },
    {
      category: 'kebabs',
      name: 'Kabab Sultani',
      description: 'The King’s skewer: a pairing of charcoal-seared tenderloin beef Barg and juicy hand-minced lamb Koobideh with grilled tomatoes and saffron sumac.',
      price: 'AED 260',
      tag: 'Signature Kebab',
      spices: 'Saffron & Wild Sumac'
    },
    {
      category: 'kebabs',
      name: 'Kabab Koobideh',
      description: 'Two skewers of prime Australian lamb and Angus beef minced with grated sweet onions, Persian spices, and glazed with melted saffron butter.',
      price: 'AED 195',
      tag: 'Charcoal Classic',
      spices: 'Onion & Saffron Glaze'
    },
    {
      category: 'kebabs',
      name: 'Chenjeh Moghadas',
      description: 'Tender cubes of milk-fed Australian lamb tenderloin steeped in strained yogurt, saffron, and sweet onion for 48 hours, grilled over white-hot embers.',
      price: 'AED 240',
      tag: 'Prime Cut',
      spices: 'Yogurt & Khorasan Saffron'
    },
    {
      category: 'kebabs',
      name: 'Jujeh Kabab Za’frani',
      description: 'Boneless free-range baby chicken breast marinated in fresh lemon juice, crushed saffron, onions, and extra virgin olive oil.',
      price: 'AED 185',
      tag: 'Poultry',
      spices: 'Lemon & Saffron Marinade'
    },
    {
      category: 'stews',
      name: 'Ghormeh Sabzi Imperial',
      description: 'The national masterpiece: Australian lamb shank braised for 8 hours with 7 wild fragrant mountain herbs, kidney beans, and sun-dried black Persian limes.',
      price: 'AED 210',
      tag: 'National Dish',
      spices: 'Dried Black Loomi Lime'
    },
    {
      category: 'stews',
      name: 'Fesenjan with Duck',
      description: 'Velvety sweet-and-sour imperial stew of roasted finely ground walnuts, slow-simmered pomegranate molasses, and tender braised duck leg.',
      price: 'AED 235',
      tag: 'Imperial Banquet',
      spices: 'Pomegranate Molasses & Walnuts'
    },
    {
      category: 'stews',
      name: 'Gheimeh Bademjan',
      description: 'Tender diced lamb simmered in a spiced tomato sauce with yellow split peas, sun-dried limes, and topped with golden fried eggplant & matchstick potatoes.',
      price: 'AED 195',
      tag: 'Traditional',
      spices: 'Cinnamon & Split Peas'
    },
    {
      category: 'rice',
      name: 'Zereshk Polo with Golden Tahdig',
      description: 'Fluffy aromatic long-grain Persian basmati rice layered with ruby barberries caramelized in raw sugar and saffron butter, accompanied by crunchy golden Tahdig.',
      price: 'AED 95',
      tag: 'Royal Rice',
      spices: 'Barberries & Tahdig'
    },
    {
      category: 'rice',
      name: 'Baghali Polo Rice',
      description: 'Fragrant basmati rice steamed with fresh green dill and baby fava beans, infused with pure ghee and saffron.',
      price: 'AED 95',
      tag: 'Herbal Rice',
      spices: 'Fresh Dill & Fava Beans'
    }
  ];

  const filteredDishes = activeTab === 'all'
    ? dishes
    : dishes.filter(d => d.category === activeTab);

  return (
    <div className="bg-[#09090b] text-[#ede8df] pt-28 pb-24">
      {/* 1. Header Banner */}
      <section className="relative px-6 md:px-12 max-w-5xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#c8aa76]/40 bg-[#c8aa76]/10 text-[#c8aa76] text-xs tracking-[0.24em] uppercase mb-6">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Persian Haute Cuisine</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#ede8df]">
            Taste of Persia
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#9b9890] font-light leading-relaxed max-w-2xl mx-auto">
            A celebration of two millennia of Persian gastronomy. Ancient royal recipes reimagined through artisanal charcoal embers, Grade-A saffron, sun-dried black limes, and crispy golden Tahdig.
          </p>
        </motion.div>
      </section>

      {/* 2. Visual Collage */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/5 aspect-[4/3] relative group">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop"
              alt="Charcoal Persian Kababs"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-[#c8aa76] block">Charcoal Embers</span>
                <h4 className="font-editorial text-xl text-[#ede8df]">Royal Kababs</h4>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/5 aspect-[4/3] relative group">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=900&auto=format&fit=crop"
              alt="Persian herbs and mezze"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-[#c8aa76] block">Fresh Herbs</span>
                <h4 className="font-editorial text-xl text-[#ede8df]">Sabzi & Mezze</h4>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/5 aspect-[4/3] relative group">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=900&auto=format&fit=crop"
              alt="Persian saffron rice"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-[#c8aa76] block">Crispy Tahdig</span>
                <h4 className="font-editorial text-xl text-[#ede8df]">Saffron Basmati</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Buttons */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-[0.16em] uppercase transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-[#c8aa76] text-[#09090b] font-medium shadow-md shadow-[#c8aa76]/20'
                  : 'bg-[#14141a] text-[#9b9890] hover:text-[#ede8df] hover:bg-[#1a1a22] border border-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Dishes Grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDishes.map((dish, i) => (
            <div
              key={i}
              className="bg-[#14141a] p-6 rounded-2xl border border-white/5 hover:border-[#c8aa76]/30 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#c8aa76] font-medium block">
                      {dish.tag}
                    </span>
                    <h3 className="font-editorial text-2xl text-[#ede8df] group-hover:text-[#c8aa76] transition-colors mt-1">
                      {dish.name}
                    </h3>
                  </div>
                  <span className="font-mono text-base text-[#c8aa76] font-medium shrink-0 pt-1">
                    {dish.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#9b9890] mt-3 font-light leading-relaxed">
                  {dish.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#9b9890]">
                <span>Aromatics: <strong className="text-[#ede8df]">{dish.spices}</strong></span>
                <span className="text-[#c8aa76]">À La Carte</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kebab Menu Spotlight Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#16161f] via-[#121218] to-[#16161f] border border-[#c8aa76]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase text-orange-400 font-medium">
              <Flame className="w-3.5 h-3.5" />
              <span>Dedicated Manghal Repertoire</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#ede8df]">
              Artisanal Persian Kebabs on Hardwood Charcoal
            </h3>
            <p className="text-xs sm:text-sm text-[#9b9890] max-w-2xl leading-relaxed">
              Explore our full kebab collection: Kabab Sultani, Koobideh, Barg, Chenjeh, Joojeh, and the Grand Imperial Mixed Grill with Super Negin Khorasan saffron basting.
            </p>
          </div>

          <Link
            to="/kebabs"
            className="shrink-0 inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#c8aa76] hover:bg-[#dfcaa2] text-[#09090b] font-medium text-xs tracking-widest uppercase transition-all shadow-md"
          >
            <span>Explore Kebab Repertoire</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. Booking CTA Section */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#171512] to-[#12110e] border border-[#c8aa76]/30 shadow-2xl space-y-6">
          <span className="text-xs tracking-[0.3em] uppercase text-[#c8aa76] font-medium block">
            Dinner Service Daily • 6:00 PM – 11:00 PM
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl text-[#ede8df]">
            Experience Taste of Persia at Enigma
          </h2>

          <p className="text-xs sm:text-sm text-[#9b9890] max-w-xl mx-auto font-light leading-relaxed">
            Reserve your evening dining table either inside our neoclassical Palazzo Versace grand salon or on the water-facing creek terrace.
          </p>

          <div className="pt-2">
            <Link
              to="/reservation"
              id="persia-book-table-btn"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#c8aa76] text-[#09090b] font-medium text-xs tracking-[0.2em] uppercase hover:bg-[#dfcaa2] transition-all duration-300 shadow-xl shadow-[#c8aa76]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
