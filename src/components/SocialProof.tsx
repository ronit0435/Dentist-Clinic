import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, MapPin, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const SocialProof: React.FC = () => {
  // Animated Counter Effect
  const [ratingCount, setRatingCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1400;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth stop
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setRatingCount(Number((easeProgress * 5.0).toFixed(1)));
      setReviewCount(Math.floor(easeProgress * 20));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  return (
    <section id="social-proof" className="bg-[#FAF6EE] py-14 border-y border-[#E7D7C1]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7D52] font-semibold">
            Patient Satisfaction & Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0C121C] font-semibold tracking-tight mt-2">
            Trusted Dental Care in Dubai
          </h2>
        </div>

        {/* 3 Key Trust Metrics with Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: 5.0 Google Rating */}
          <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-[#E7D7C1] shadow-xs text-center relative group hover:border-[#C5A880] transition-colors duration-300">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-amber-500">
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
            </div>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-[#0C121C] tracking-tight">
              {ratingCount.toFixed(1)} <span className="text-amber-500 text-3xl">★</span>
            </div>
            <div className="text-sm font-semibold text-[#1C2738] mt-1">Google Rating</div>
            <p className="text-xs text-[#6B7A8C] mt-1">Consistently rated 5.0 by verified patients</p>
          </div>

          {/* Card 2: 20+ Reviews */}
          <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-[#E7D7C1] shadow-xs text-center relative group hover:border-[#C5A880] transition-colors duration-300">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52]">
              <CheckCircle2 className="w-6 h-6 text-[#9E7D52]" />
            </div>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-[#0C121C] tracking-tight">
              {reviewCount}+
            </div>
            <div className="text-sm font-semibold text-[#1C2738] mt-1">Patient Reviews</div>
            <p className="text-xs text-[#6B7A8C] mt-1">Authentic patient experiences on Google</p>
          </div>

          {/* Card 3: Dubai Silicon Oasis */}
          <div className="bg-[#FAF9F6] p-7 rounded-2xl border border-[#E7D7C1] shadow-xs text-center relative group hover:border-[#C5A880] transition-colors duration-300">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52]">
              <MapPin className="w-6 h-6 text-[#9E7D52]" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0C121C] tracking-tight">
              Dubai
            </div>
            <div className="text-sm font-semibold text-[#1C2738] mt-1">Silicon Oasis</div>
            <p className="text-xs text-[#6B7A8C] mt-1">Donna Towers, Office 1805</p>
          </div>

        </div>

        {/* Short Statement as explicitly requested */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="relative inline-block px-6 py-4 rounded-xl bg-white/70 border border-[#E7D7C1]/70 backdrop-blur-xs">
            <p className="font-serif italic text-lg sm:text-xl text-[#1C2738] leading-relaxed">
              “Patients choose TruSmile for professional care, comfort and personalized dental treatment.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
