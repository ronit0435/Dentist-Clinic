import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryItem } from '../types';

export const ClinicGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Spaces' },
    { id: 'lounge', label: 'VIP Lounge & Reception' },
    { id: 'treatment', label: 'Treatment Suites' },
    { id: 'technology', label: 'Dental Diagnostics' },
    { id: 'equipment', label: 'Sterilization & Tech' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Clinic Experience & Facilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0C121C] font-semibold tracking-tight">
            Inside TruSmile
          </h2>
          <p className="mt-4 text-base text-[#4F5E71]">
            Step inside our purpose-built private dental clinic in Dubai Silicon Oasis, where tranquil luxury meets cutting-edge dental technology.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filters.map((f) => (
              <button
                key={f.id}
                id={`gallery-filter-${f.id}`}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#0C121C] text-[#FAF9F6] shadow-xs'
                    : 'bg-[#FAF6EE] text-[#4F5E71] hover:bg-[#F3ECE0] border border-[#E7D7C1]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Responsive Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => setSelectedPhoto(item)}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#E7D7C1] shadow-xs cursor-pointer group bg-[#121A26]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C]/90 via-[#0C121C]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold">
                    {item.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#FAF9F6] leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-[#E7D7C1] mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C121C]/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#FAF9F6] rounded-2xl overflow-hidden shadow-2xl border border-[#E7D7C1]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-lightbox-btn"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#0C121C]/80 text-[#FAF9F6] hover:bg-[#0C121C] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain max-h-[70vh]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-[#FAF9F6]">
              <span className="text-xs uppercase tracking-wider text-[#9E7D52] font-semibold">
                TruSmile Clinic Gallery • {selectedPhoto.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0C121C] mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-[#4F5E71] mt-2">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
