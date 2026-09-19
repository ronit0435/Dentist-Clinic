import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Smile, 
  Layers, 
  Sun, 
  ShieldAlert, 
  Crosshair, 
  Sparkle, 
  HeartPulse, 
  Activity, 
  ArrowRight,
  Clock,
  Calendar
} from 'lucide-react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cosmetic Dentistry', 'Orthodontics', 'Restorative Dentistry', 'General Dentistry', 'Endodontics'];

  const filteredServices = selectedCategory === 'All'
    ? CLINIC_SERVICES
    : CLINIC_SERVICES.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  // Icon selector helper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Smile': return <Smile className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Sun': return <Sun className="w-4 h-4" />;
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4" />;
      case 'Crosshair': return <Crosshair className="w-4 h-4" />;
      case 'Sparkle': return <Sparkle className="w-4 h-4" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4" />;
      case 'Activity': return <Activity className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Comprehensive Dental Treatments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0C121C] font-semibold tracking-tight">
            Complete Dental Care, <span className="italic font-normal text-[#9E7D52]">Under One Roof</span>
          </h2>
          <p className="mt-4 text-base text-[#4F5E71]">
            From delicate cosmetic enhancements to advanced restorative procedures, our Dubai Silicon Oasis clinic provides comprehensive, comfortable dental care.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0C121C] text-[#FAF9F6] shadow-sm'
                    : 'bg-[#FAF9F6] text-[#4F5E71] hover:bg-[#F3ECE0] border border-[#E7D7C1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Animated Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E7D7C1] shadow-xs hover:border-[#C5A880] transition-all duration-400 group flex flex-col justify-between"
            >
              <div>
                {/* Dental-Specific Image Container */}
                <div className="relative h-52 overflow-hidden bg-[#121A26]">
                  <img
                    src={service.image}
                    alt={`${service.title} treatment at TruSmile Dental Clinic Dubai`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C]/80 via-transparent to-transparent"></div>

                  {/* Category Pill on Image */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6]/90 backdrop-blur-md text-[11px] font-semibold text-[#0C121C] border border-[#E7D7C1]">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#0C121C]/90 text-[#C5A880] flex items-center justify-center border border-[#C5A880]/30 shadow-md">
                    {renderIcon(service.iconName)}
                  </div>

                  {/* Title on Image bottom */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <h3 className="font-serif text-xl font-bold text-[#FAF9F6] tracking-tight drop-shadow-xs">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#E7D7C1] font-medium mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-sm text-[#4F5E71] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Quick Highlight List */}
                  <div className="pt-1 space-y-1.5 border-t border-[#E7D7C1]/50">
                    <div className="flex items-center space-x-2 text-xs text-[#29384E]">
                      <Clock className="w-3.5 h-3.5 text-[#9E7D52] shrink-0" />
                      <span>Duration: {service.duration || 'Custom Consultation'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-[#E7D7C1]/40 mt-2">
                <button
                  id={`service-learn-more-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-[#0C121C] hover:text-[#9E7D52] flex items-center space-x-1.5 transition-colors group-hover:underline cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E7D52] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id={`service-book-${service.id}`}
                  onClick={() => onOpenBooking(service.id)}
                  className="px-3.5 py-1.5 rounded-full bg-[#FAF6EE] hover:bg-[#F3ECE0] text-[#0C121C] text-xs font-semibold border border-[#E7D7C1] hover:border-[#C5A880] transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <Calendar className="w-3 h-3 text-[#9E7D52]" />
                  <span>Book</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
