import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../data/restaurantData';

interface LightboxModalProps {
  isOpen: boolean;
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, hasPrev, hasNext, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="gallery-lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c8aa76] border border-[#c8aa76]/40 px-3 py-1 rounded-full font-medium">
              {item.category}
            </span>
            <span className="text-xs text-[#9b9890] hidden sm:inline">
              Palazzo Versace Dubai
            </span>
          </div>

          <button
            id="lightbox-close-btn"
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#ede8df] transition-colors focus:outline-none focus:ring-1 focus:ring-[#c8aa76]"
            aria-label="Close fullscreen gallery viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Center Image Container with Prev/Next buttons */}
        <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-4">
          {hasPrev && (
            <button
              id="lightbox-prev-btn"
              onClick={onPrev}
              className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-[#c8aa76] text-[#ede8df] hover:text-[#09090b] transition-all duration-200 border border-white/10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-lg shadow-2xl"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>

          {hasNext && (
            <button
              id="lightbox-next-btn"
              onClick={onNext}
              className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-[#c8aa76] text-[#ede8df] hover:text-[#09090b] transition-all duration-200 border border-white/10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Caption Bar */}
        <div className="w-full max-w-4xl mx-auto text-center z-10">
          <h4 className="font-editorial text-xl sm:text-2xl text-[#ede8df] tracking-wide">
            {item.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#9b9890] mt-1 font-light max-w-xl mx-auto">
            {item.caption}
          </p>
          <p className="text-[11px] text-[#c8aa76]/70 mt-2 font-mono">
            Press ESC to exit • Use Left/Right keys to navigate
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
