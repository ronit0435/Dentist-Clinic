import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Star, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTreatments }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[86vh] flex items-center bg-[#FAF9F6] overflow-hidden pt-8 pb-16 lg:py-16">
      {/* Subtle Architectural & Dental Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#E7D7C1]/25 blur-3xl"></div>
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full bg-[#F3ECE0]/40 blur-3xl"></div>
        
        {/* Subtle geometric & dental arch curve paths */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-[0.035] text-[#0C121C]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q50,50 100,0 V100 H0 Z" fill="currentColor" />
          <path d="M20,100 C40,40 60,60 100,20" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0,80 Q70,40 100,70" stroke="currentColor" strokeWidth="0.3" fill="none" />
        </svg>

        {/* Floating subtle aesthetic particles */}
        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-[15%] w-2 h-2 rounded-full bg-[#C5A880]"
        />
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 left-[48%] w-1.5 h-1.5 rounded-full bg-[#9E7D52]"
        />
        <motion.div
          animate={{ y: [0, -16, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-32 left-[8%] w-2.5 h-2.5 rounded-full bg-[#E7D7C1]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left z-10">
            
            {/* Location & Excellence Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EE] border border-[#E7D7C1] text-[#9E7D52] text-xs font-semibold tracking-wider uppercase shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8976C]" />
              <span>Dubai Silicon Oasis • Private Dental Practice</span>
            </motion.div>

            {/* Headline & Supporting Text */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0C121C] font-semibold tracking-tight leading-[1.12]"
              >
                Your Smile, <br className="hidden sm:inline" />
                <span className="italic font-normal font-serif text-[#9E7D52]">Our Masterpiece.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl font-medium text-[#29384E] tracking-tight"
              >
                Advanced Dental Care & Cosmetic Dentistry in Dubai
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base text-[#4F5E71] leading-relaxed max-w-2xl"
              >
                From routine dental care to complete smile transformations, TruSmile Dental Clinic combines modern dentistry, experienced professionals and a comfortable patient experience.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <button
                id="hero-book-appointment-btn"
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-[#0C121C] hover:bg-[#1C2738] text-[#FAF9F6] text-sm font-medium tracking-wide flex items-center justify-center space-x-2.5 shadow-md hover:shadow-lg transition-all duration-300 border border-[#C5A880]/50 group"
              >
                <Calendar className="w-4 h-4 text-[#C5A880] group-hover:scale-110 transition-transform" />
                <span>Book Your Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E7D7C1] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-treatments-btn"
                onClick={onExploreTreatments}
                className="px-7 py-4 rounded-full bg-[#FAF6EE] hover:bg-[#F3ECE0] text-[#0C121C] text-sm font-medium tracking-wide flex items-center justify-center space-x-2 border border-[#E7D7C1] transition-all duration-300"
              >
                <span>Explore Our Treatments</span>
              </button>
            </motion.div>

            {/* Small Trust Bar Underneath */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-6 border-t border-[#E7D7C1]/70"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
                
                {/* 5.0 Google Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0C121C] leading-none">5.0 Rating</div>
                    <div className="text-[11px] text-[#6B7A8C] mt-0.5">Google Verified</div>
                  </div>
                </div>

                {/* 20+ Reviews */}
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52]">
                    <CheckCircle2 className="w-4 h-4 text-[#9E7D52]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0C121C] leading-none">20+ Reviews</div>
                    <div className="text-[11px] text-[#6B7A8C] mt-0.5">Patient Feedback</div>
                  </div>
                </div>

                {/* Dubai Silicon Oasis */}
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52]">
                    <MapPin className="w-4 h-4 text-[#9E7D52]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0C121C] leading-none">Silicon Oasis</div>
                    <div className="text-[11px] text-[#6B7A8C] mt-0.5">Donna Towers, DSO</div>
                  </div>
                </div>

                {/* Modern Dental Care */}
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52]">
                    <ShieldCheck className="w-4 h-4 text-[#9E7D52]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0C121C] leading-none">Modern Care</div>
                    <div className="text-[11px] text-[#6B7A8C] mt-0.5">Advanced Dentistry</div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Dental Clinic Photography with subtle framing */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Decorative Gold Border Frame */}
              <div className="absolute -inset-2.5 rounded-3xl border border-[#C5A880]/30 -rotate-1 pointer-events-none"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E7D7C1] bg-white">
                <img
                  src={IMAGES.hero}
                  alt="Professional dentist consulting with patient at TruSmile Dental Clinic Dubai"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Patient Comfort Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F6]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E7D7C1] shadow-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-[#0C121C] text-[#C5A880] flex items-center justify-center font-serif text-sm font-bold">
                      TS
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0C121C]">Personalized Patient Care</p>
                      <p className="text-[11px] text-[#6B7A8C]">Relaxed, pain-free environment</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-amber-500 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>5.0</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
