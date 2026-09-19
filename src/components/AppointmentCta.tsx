import React from 'react';
import { Calendar, Phone, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AppointmentCtaProps {
  onOpenBooking: () => void;
}

export const AppointmentCta: React.FC<AppointmentCtaProps> = ({ onOpenBooking }) => {
  return (
    <section id="appointment-cta" className="relative py-20 lg:py-28 bg-[#0C121C] text-[#FAF9F6] overflow-hidden">
      {/* Ambient Luxury Lighting & Geometric Dental Arcs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C5A880]/15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1C2738]/40 blur-3xl rounded-full"></div>
        
        {/* Subtle grid accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Decorative Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C2738]/80 border border-[#C5A880]/30 text-[#E7D7C1] text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Consultation & Treatment Planning</span>
        </div>

        {/* Requested Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF9F6] max-w-3xl mx-auto leading-tight">
          Ready to Love Your Smile?
        </h2>

        {/* Requested Text */}
        <p className="mt-5 text-base sm:text-lg text-[#C8D1DC] max-w-2xl mx-auto leading-relaxed font-normal">
          Book your dental consultation with TruSmile Dental Clinic in Dubai Silicon Oasis.
        </p>

        {/* 3 Requested CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* CTA 1: Book an Appointment */}
          <button
            id="cta-book-appointment-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#B8976C] text-[#0C121C] text-sm font-bold tracking-wide flex items-center justify-center space-x-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0C121C]" />
            <span>Book an Appointment</span>
          </button>

          {/* CTA 2: Call +971 50 481 7488 */}
          <a
            id="cta-call-phone-btn"
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#1C2738] hover:bg-[#29384E] text-[#FAF9F6] text-sm font-semibold tracking-wide flex items-center justify-center space-x-2.5 border border-[#C5A880]/40 transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>

          {/* CTA 3: WhatsApp Us */}
          <a
            id="cta-whatsapp-us-btn"
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold tracking-wide flex items-center justify-center space-x-2.5 shadow-md transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

        </div>

        {/* Small Trust Note */}
        <div className="mt-10 pt-8 border-t border-[#29384E]/60 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A8B3C2]">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Donna Towers, Office 1805, Dubai Silicon Oasis</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1.5">
            <span className="text-[#C5A880]">★ 5.0</span>
            <span>Google Verified Practice</span>
          </div>
          <span>•</span>
          <span>Open 7 Days a Week</span>
        </div>

      </div>
    </section>
  );
};
