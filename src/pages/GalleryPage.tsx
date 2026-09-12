import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { LightboxModal } from '../components/LightboxModal';
import { SectionHeading } from '../components/SectionHeading';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Restaurant', 'Dining', 'Food', 'Terrace', 'Atmosphere'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="bg-[#09090b] text-[#ede8df] pt-28 pb-24">
      {/* Header */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#c8aa76]/40 bg-[#c8aa76]/10 text-[#c8aa76] text-xs tracking-[0.24em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Archive</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight text-[#ede8df]">
            Gallery
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#9b9890] font-light leading-relaxed max-w-2xl mx-auto">
            A curated visual voyage capturing the neoclassical Italian luxury of Palazzo Versace, our Dubai Creek waterfront terrace, and the gastronomic artistry of the Taste of Persia.
          </p>
        </motion.div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              id={`filter-${cat.toLowerCase()}`}
              className={`px-5 py-2 rounded-full text-xs tracking-[0.16em] uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#c8aa76] text-[#09090b] font-medium shadow-md shadow-[#c8aa76]/20'
                  : 'bg-[#14141a] text-[#9b9890] hover:text-[#ede8df] hover:bg-[#1a1a22] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-xl overflow-hidden bg-[#14141a] border border-white/5 hover:border-[#c8aa76]/40 shadow-xl cursor-pointer aspect-[4/3]"
                onClick={() => handleOpenLightbox(index)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette & Caption Reveal on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#c8aa76] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#c8aa76]/30">
                      {item.category}
                    </span>
                    <div className="p-2 rounded-full bg-black/60 text-[#ede8df] group-hover:text-[#c8aa76] transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-editorial text-xl sm:text-2xl text-[#ede8df]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#9b9890] line-clamp-2 mt-1 font-light">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        item={currentItem}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={lightboxIndex !== null && lightboxIndex > 0}
        hasNext={lightboxIndex !== null && lightboxIndex < filteredItems.length - 1}
      />
    </div>
  );
};
