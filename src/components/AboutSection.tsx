import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { CLINIC_INFO, CLINIC_SPECIALTIES, IMAGES } from '../data/clinicData';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking, onExploreTreatments }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Subheader */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#E7D7C1]/60 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>About TruSmile Dental Clinic</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0C121C] font-semibold tracking-tight">
              Modern Dentistry. <span className="italic font-normal text-[#9E7D52]">Personal Care.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-[#4F5E71] max-w-md">
            Delivering advanced cosmetic, restorative, and general dental solutions in Dubai Silicon Oasis with an unwavering dedication to patient comfort.
          </p>
        </div>

        {/* Editorial 2-Column Content with Dual Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Overlapping Luxury Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Modern Dental Clinic Interior Lounge */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E7D7C1] bg-white">
                <img
                  src={IMAGES.lounge}
                  alt="Luxury modern reception lounge of TruSmile Dental Clinic Dubai"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C]/60 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs text-[#FAF9F6] font-medium tracking-wide">
                    Private Waiting Lounge • Donna Towers, DSO
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Image: Professional Dentist in Consultation */}
              <div className="absolute -bottom-10 -right-4 sm:-right-8 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF9F6] bg-white hidden sm:block">
                <img
                  src={IMAGES.drMaryam}
                  alt="Dr. Maryam consulting with patient at TruSmile Dental Clinic Dubai"
                  className="w-full h-52 object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-[#FAF6EE] border-t border-[#E7D7C1]/50 text-left">
                  <p className="text-xs font-bold text-[#0C121C]">Dr. Maryam</p>
                  <p className="text-[10px] text-[#6B7A8C]">Dental Surgeon & Patient Care</p>
                </div>
              </div>

              {/* Decorative Accent Card */}
              <div className="absolute -top-5 -left-5 bg-[#0C121C] text-[#FAF9F6] p-4 rounded-xl shadow-lg border border-[#C5A880]/30 hidden md:flex items-center space-x-3">
                <Shield className="w-5 h-5 text-[#C5A880]" />
                <div>
                  <p className="text-xs font-bold tracking-wide">100% Patient Focus</p>
                  <p className="text-[10px] text-[#A8B3C2]">Relaxed, comfortable visits</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Narrative & Specialized Categories */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-4 text-[#3F4D63] leading-relaxed text-base">
              <p>
                Located in <strong>Donna Towers, Dubai Silicon Oasis</strong>, TruSmile Dental Clinic was founded with a singular commitment: delivering world-class dentistry in a calming, welcoming environment that completely dispels dental anxiety.
              </p>
              <p>
                Whether you visit for routine dental wellness or a bespoke smile transformation, our clinicians take the time to listen, thoroughly diagnose, and craft customized treatment plans tailored specifically to your needs, lifestyle, and facial aesthetics.
              </p>
            </div>

            {/* Specialized Clinical Disciplines Grid */}
            <div className="pt-2">
              <h3 className="font-serif text-xl font-bold text-[#0C121C] mb-3">
                Our Dental Specialties:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {CLINIC_SPECIALTIES.map((spec) => (
                  <div
                    key={spec.name}
                    className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#E7D7C1]/70 hover:border-[#C5A880] transition-colors flex items-start space-x-2"
                  >
                    <Check className="w-4 h-4 text-[#9E7D52] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-[#0C121C] leading-snug">{spec.name}</div>
                      <div className="text-[10px] text-[#6B7A8C] line-clamp-1">{spec.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-book-btn"
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#0C121C] hover:bg-[#1C2738] text-[#FAF9F6] text-sm font-medium tracking-wide flex items-center space-x-2 transition-all border border-[#C5A880]/40"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E7D7C1]" />
              </button>

              <button
                id="about-explore-btn"
                onClick={onExploreTreatments}
                className="px-6 py-3 rounded-full bg-transparent hover:bg-[#FAF6EE] text-[#0C121C] text-sm font-medium border border-[#E7D7C1] transition-all"
              >
                <span>View All Treatments</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
