import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, ExternalLink, Sparkles, Building } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FAF6EE] relative overflow-hidden border-t border-[#E7D7C1]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Visit Us in Dubai</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0C121C] font-semibold tracking-tight">
            Find TruSmile Dental Clinic
          </h2>
          <p className="mt-4 text-base text-[#4F5E71]">
            Conveniently located in the heart of Dubai Silicon Oasis at Donna Towers, with visitor parking and elevator access to the 18th floor.
          </p>
        </div>

        {/* Location Grid: Details Card & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address, Phone, Hours & CTAs */}
          <div className="lg:col-span-5 bg-[#FAF9F6] p-7 sm:p-9 rounded-2xl border border-[#E7D7C1] shadow-xs flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52] shrink-0">
                  <MapPin className="w-5 h-5 text-[#9E7D52]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0C121C]">
                    Clinic Address
                  </h3>
                  <p className="text-sm font-semibold text-[#1C2738] mt-1">
                    Donna Towers – Office 1805
                  </p>
                  <p className="text-sm text-[#4F5E71]">
                    46 Street – Nadd Hessa
                  </p>
                  <p className="text-sm text-[#4F5E71]">
                    Dubai Silicon Oasis
                  </p>
                  <p className="text-sm font-medium text-[#0C121C]">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52] shrink-0">
                  <Phone className="w-5 h-5 text-[#9E7D52]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0C121C]">
                    Direct Telephone
                  </h3>
                  <a
                    id="location-phone-number"
                    href={`tel:${CLINIC_INFO.phoneClean}`}
                    className="text-base font-bold text-[#0C121C] hover:text-[#9E7D52] transition-colors block mt-1"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <p className="text-xs text-[#6B7A8C] mt-0.5">
                    Appointments & Inquiries
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52] shrink-0">
                  <Clock className="w-5 h-5 text-[#9E7D52]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0C121C]">
                    Working Hours
                  </h3>
                  <div className="text-sm text-[#4F5E71] space-y-1 mt-1">
                    <p><strong className="text-[#1C2738]">Sat – Thu:</strong> 9:00 AM – 9:00 PM</p>
                    <p><strong className="text-[#1C2738]">Friday:</strong> 1:00 PM – 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Building & Parking Note */}
              <div className="p-3.5 rounded-xl bg-[#FAF6EE] border border-[#E7D7C1]/80 text-xs text-[#4F5E71] flex items-center space-x-2.5">
                <Building className="w-4 h-4 text-[#9E7D52] shrink-0" />
                <span>Donna Towers features dedicated visitor parking and convenient elevator access to Office 1805.</span>
              </div>

            </div>

            {/* Action Buttons as requested: Get Directions and Call Now */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E7D7C1]">
              <a
                id="location-get-directions-btn"
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#0C121C] hover:bg-[#1C2738] text-[#FAF9F6] text-xs font-semibold flex items-center justify-center space-x-2 border border-[#C5A880]/50 shadow-xs transition-all"
              >
                <Navigation className="w-4 h-4 text-[#C5A880]" />
                <span>Get Directions</span>
              </a>

              <a
                id="location-call-now-btn"
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="py-3 px-4 rounded-xl bg-[#FAF6EE] hover:bg-[#F3ECE0] text-[#0C121C] text-xs font-semibold flex items-center justify-center space-x-2 border border-[#E7D7C1] transition-all"
              >
                <Phone className="w-4 h-4 text-[#9E7D52]" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Visual Landmark */}
          <div className="lg:col-span-7 bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E7D7C1] shadow-xs flex flex-col">
            
            {/* Map Header Banner */}
            <div className="p-4 bg-[#0C121C] text-[#FAF9F6] flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-xs font-medium tracking-wide">
                  Donna Towers, Dubai Silicon Oasis, Dubai, UAE
                </span>
              </div>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C5A880] hover:underline flex items-center space-x-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map iframe centered accurately on Dubai Silicon Oasis Donna Towers */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-[#E5E3DF]">
              <iframe
                title="TruSmile Dental Clinic Location Map"
                src="https://maps.google.com/maps?q=Donna%20Towers%20Dubai%20Silicon%20Oasis&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Custom Map Pin Floating Card */}
              <div className="absolute top-4 left-4 bg-[#FAF9F6]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E7D7C1] shadow-md max-w-xs pointer-events-none hidden sm:block">
                <p className="text-xs font-bold text-[#0C121C]">TruSmile Dental Clinic</p>
                <p className="text-[11px] text-[#4F5E71]">Donna Towers, Office 1805</p>
                <div className="flex items-center space-x-1 text-amber-500 text-[10px] font-semibold mt-1">
                  <span>★ 5.0 Google Rated</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA quick banner */}
            <div className="p-4 bg-[#FAF6EE] border-t border-[#E7D7C1] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#4F5E71]">
                Need assistance with directions or parking on arrival?
              </span>
              <a
                id="location-whatsapp-btn"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-800 hover:text-emerald-900 flex items-center space-x-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Message our Reception on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
