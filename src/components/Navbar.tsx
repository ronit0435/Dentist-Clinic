import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, MessageCircle, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, doctorName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Cosmetic Dentistry', href: '#cosmetic' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Our Team', href: '#team' },
    { label: 'Inside Clinic', href: '#gallery' },
    { label: 'Contact', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro bar with address and quick contacts */}
      <div id="top-bar" className="bg-[#0C121C] text-[#E7D7C1] text-xs py-2 px-4 border-b border-[#29384E]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-[#A8B3C2]">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Donna Towers, Office 1805, Dubai Silicon Oasis</span>
            </div>
            <span className="text-[#3F4D63]">|</span>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[#C8D1DC]">Open Today: 9:00 AM – 9:00 PM</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              id="topbar-phone-link"
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="flex items-center space-x-1.5 text-[#FAF9F6] hover:text-[#C5A880] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-medium tracking-wide">{CLINIC_INFO.phone}</span>
            </a>
            <span className="text-[#3F4D63]">|</span>
            <a
              id="topbar-whatsapp-link"
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[#25D366] hover:text-[#2fe673] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E7D7C1]/50 py-3'
            : 'bg-[#FAF9F6] border-b border-[#E7D7C1]/30 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            id="navbar-logo"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center space-x-3 cursor-pointer"
          >
            {/* Elegant Minimal Dental Crest */}
            <div className="w-10 h-10 rounded-lg bg-[#0C121C] flex items-center justify-center text-[#C5A880] shadow-sm group-hover:scale-105 transition-transform duration-300 border border-[#C5A880]/30">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4.5 6 7.5c0 2.8 1.4 5.3 2 8.5.5 2.8 1.8 4 4 4s3.5-1.2 4-4c.6-3.2 2-5.7 2-8.5C18 4.5 15.5 2 12 2zm0 2c2.4 0 4 1.7 4 3.5 0 2.2-1.2 4.4-1.8 7.3-.3 1.6-1.1 2.2-2.2 2.2s-1.9-.6-2.2-2.2C9.2 11.9 8 9.7 8 7.5 8 5.7 9.6 4 12 4z" opacity="0.9" />
                <circle cx="12" cy="7" r="1.5" fill="#C5A880" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-[#0C121C] group-hover:text-[#9E7D52] transition-colors leading-none">
                TRUSMILE
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B7A8C] font-medium mt-1">
                Dental Clinic • Dubai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-[#29384E] hover:text-[#9E7D52] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Group */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-call-btn"
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="p-2.5 rounded-full text-[#0C121C] bg-[#FAF6EE] hover:bg-[#F3ECE0] border border-[#E7D7C1] transition-colors"
              title="Call TruSmile Clinic"
            >
              <Phone className="w-4 h-4 text-[#9E7D52]" />
            </a>

            <a
              id="header-whatsapp-btn"
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              id="header-book-btn"
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full bg-[#0C121C] hover:bg-[#1C2738] text-[#FAF9F6] text-sm font-medium tracking-wide flex items-center space-x-2 border border-[#C5A880]/40 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#C5A880]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              id="mobile-book-icon-btn"
              onClick={() => onOpenBooking()}
              className="sm:hidden p-2 rounded-lg bg-[#0C121C] text-[#C5A880] text-xs font-medium"
              title="Book Appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0C121C] hover:bg-[#FAF6EE] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden bg-[#FAF9F6] border-b border-[#E7D7C1] px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-1 divide-y divide-[#E7D7C1]/50">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-3 text-base font-medium text-[#1C2738] hover:text-[#9E7D52] flex justify-between items-center"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#9E7D52]">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                id="mobile-menu-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-[#0C121C] text-[#FAF9F6] font-medium text-sm flex items-center justify-center space-x-2 shadow-sm border border-[#C5A880]/50"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Book Your Appointment</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  id="mobile-menu-call-btn"
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="py-2.5 px-3 rounded-xl bg-[#FAF6EE] border border-[#E7D7C1] text-xs font-semibold text-[#1C2738] flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9E7D52]" />
                  <span>Call Us</span>
                </a>
                <a
                  id="mobile-menu-whatsapp-btn"
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center justify-center space-x-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
