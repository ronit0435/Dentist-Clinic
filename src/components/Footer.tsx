import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Calendar, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Cosmetic Dentistry', href: '#cosmetic' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#location' },
  ];

  return (
    <footer id="footer" className="bg-[#080C14] text-[#C8D1DC] border-t border-[#1C2738]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1C2738]/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] text-[#0C121C] flex items-center justify-center font-serif text-lg font-bold shadow-xs">
                TS
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF9F6]">
                TruSmile Dental Clinic
              </span>
            </div>

            <p className="font-serif italic text-[#C5A880] text-lg">
              “Your Smile, Our Masterpiece.”
            </p>

            <p className="text-sm text-[#A8B3C2] leading-relaxed max-w-sm">
              Providing modern, compassionate cosmetic, restorative, and general dentistry in Dubai Silicon Oasis. Committed to personalized care and aesthetic perfection.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <button
                id="footer-book-btn"
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-full bg-[#FAF9F6] text-[#0C121C] text-xs font-semibold hover:bg-[#E7D7C1] transition-colors flex items-center space-x-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>

              <a
                id="footer-whatsapp-link"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-700/80 text-white text-xs font-semibold hover:bg-emerald-600 transition-colors flex items-center space-x-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#FAF9F6]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#A8B3C2] hover:text-[#C5A880] transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-xs text-[#C5A880]">•</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Treatments */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#FAF9F6]">
              Key Treatments
            </h4>
            <ul className="space-y-2 text-sm text-[#A8B3C2]">
              {CLINIC_SERVICES.slice(0, 5).map((s) => (
                <li key={s.id} className="hover:text-[#FAF9F6] transition-colors">
                  <a href="#treatments" className="flex items-center space-x-1.5">
                    <span className="text-xs text-[#C5A880]">›</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#FAF9F6]">
              Contact Clinic
            </h4>
            
            <div className="space-y-3 text-sm text-[#A8B3C2]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#FAF9F6] font-medium">Dubai Silicon Oasis, Dubai, UAE</p>
                  <p className="text-xs text-[#8A99AC] mt-0.5">Donna Towers – Office 1805</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="hover:text-[#C5A880] transition-colors font-medium text-[#FAF9F6]"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="text-xs text-[#8A99AC]">
                  <p>Sat – Thu: 9:00 AM – 9:00 PM</p>
                  <p>Friday: 1:00 PM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright and Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A99AC]">
          <p>
            © {new Date().getFullYear()} TruSmile Dental Clinic. All rights reserved. Dubai Silicon Oasis, UAE.
          </p>

          <div className="flex items-center space-x-4">
            <span>Licensed by Dubai Health Authority (DHA)</span>
            <span>•</span>
            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-[#FAF9F6] transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
