import React from 'react';
import { X, Calendar, Check, Clock, Sparkles, Heart } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookTreatment: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookTreatment
}) => {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C121C]/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#FAF9F6] rounded-2xl max-w-2xl w-full border border-[#E7D7C1] shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-service-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#FAF9F6]/90 hover:bg-white text-[#0C121C] shadow-md transition-colors"
          aria-label="Close Treatment Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Visual with Dental Imagery */}
        <div className="relative h-60 sm:h-72 overflow-hidden bg-[#121A26]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C]/90 via-[#0C121C]/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.category}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF9F6]">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#E7D7C1] mt-0.5">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          
          {/* Quick Specifications */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#FAF6EE] border border-[#E7D7C1]">
            <div className="flex items-center space-x-2.5">
              <Clock className="w-4 h-4 text-[#9E7D52]" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#6B7A8C] block">Duration</span>
                <span className="text-xs font-bold text-[#0C121C]">{service.duration || 'Consultation based'}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <Heart className="w-4 h-4 text-[#9E7D52]" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#6B7A8C] block">Experience</span>
                <span className="text-xs font-bold text-[#0C121C]">Comfort-focused & Gentle</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-[#0C121C] uppercase tracking-wider mb-2">
              Clinical Overview
            </h4>
            <p className="text-sm text-[#3F4D63] leading-relaxed">
              {service.fullDetails}
            </p>
          </div>

          {/* Benefits Checklist */}
          <div>
            <h4 className="text-xs font-bold text-[#0C121C] uppercase tracking-wider mb-2.5">
              Key Benefits & Outcomes
            </h4>
            <ul className="space-y-2">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#29384E]">
                  <div className="w-4 h-4 rounded-full bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#9E7D52]" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Candidate */}
          <div className="p-4 rounded-xl bg-white border border-[#E7D7C1]">
            <span className="text-[11px] font-bold text-[#9E7D52] uppercase tracking-wider block mb-1">
              Ideal Candidate:
            </span>
            <p className="text-xs text-[#4F5E71]">
              {service.idealFor}
            </p>
          </div>

          {/* CTA Row */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              id="modal-book-this-treatment-btn"
              onClick={() => {
                onClose();
                onBookTreatment(service.id);
              }}
              className="w-full py-3.5 rounded-xl bg-[#0C121C] hover:bg-[#1C2738] text-[#FAF9F6] text-sm font-semibold flex items-center justify-center space-x-2 border border-[#C5A880]/50 shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>Book Appointment for {service.title}</span>
            </button>

            <button
              onClick={onClose}
              className="sm:w-32 py-3.5 rounded-xl bg-[#FAF6EE] text-[#0C121C] text-xs font-semibold hover:bg-[#F3ECE0] border border-[#E7D7C1]"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
