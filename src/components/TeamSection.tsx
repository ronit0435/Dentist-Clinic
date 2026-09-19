import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Check, X, ShieldCheck } from 'lucide-react';
import { DOCTORS } from '../data/clinicData';
import { DoctorProfile } from '../types';

interface TeamSectionProps {
  onOpenBookingWithDoctor: (doctorName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBookingWithDoctor }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorProfile | null>(null);

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#FAF6EE] relative overflow-hidden border-t border-[#E7D7C1]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Clinical Excellence & Compassion</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0C121C] font-semibold tracking-tight">
            Meet Your Dental Team
          </h2>
          <p className="mt-4 text-base text-[#4F5E71]">
            Our clinicians bring extensive clinical experience, gentle bedside care, and a meticulous eye for detail to every treatment.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E7D7C1] shadow-xs hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Portrait Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#121A26]">
                  <img
                    src={doctor.photo}
                    alt={`Portrait of ${doctor.name}, ${doctor.specialty} at TruSmile Dental Clinic Dubai`}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C]/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold">
                      {doctor.specialty}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#FAF9F6] mt-0.5">
                      {doctor.name}
                    </h3>
                    <p className="text-xs text-[#E7D7C1] mt-0.5">
                      {doctor.role}
                    </p>
                  </div>
                </div>

                {/* Card Body with Verified Information */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-sm text-[#4F5E71] leading-relaxed">
                    {doctor.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-[#0C121C] uppercase tracking-wider block mb-2">
                      Clinical Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-1 rounded-md bg-[#FAF6EE] text-[11px] font-medium text-[#29384E] border border-[#E7D7C1]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#E7D7C1]/50 flex items-center justify-between mt-2">
                <button
                  id={`view-profile-${doctor.id}`}
                  onClick={() => setSelectedDoctor(doctor)}
                  className="text-xs font-bold text-[#0C121C] hover:text-[#9E7D52] underline transition-colors cursor-pointer"
                >
                  View Profile
                </button>

                <button
                  id={`book-doctor-${doctor.id}`}
                  onClick={() => onOpenBookingWithDoctor(doctor.name)}
                  className="px-4 py-2 rounded-full bg-[#0C121C] hover:bg-[#1C2738] text-[#FAF9F6] text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-[#C5A880]/40 shadow-xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Book with {doctor.name}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C121C]/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FAF9F6] rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#E7D7C1] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF6EE] hover:bg-[#F3ECE0] text-[#0C121C]"
              aria-label="Close Profile"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4 mb-6">
              <img
                src={selectedDoctor.photo}
                alt={selectedDoctor.name}
                className="w-20 h-20 rounded-xl object-cover object-top border border-[#E7D7C1]"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-xs text-[#9E7D52] uppercase tracking-wider font-semibold">
                  {selectedDoctor.specialty}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0C121C]">
                  {selectedDoctor.name}
                </h3>
                <p className="text-xs text-[#6B7A8C]">{selectedDoctor.role}</p>
              </div>
            </div>

            <p className="text-sm text-[#3F4D63] leading-relaxed mb-6">
              {selectedDoctor.description}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#0C121C] flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#9E7D52]" />
                <span>Verified Credentials & Experience:</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#3F4D63]">
                {selectedDoctor.verifiedQualifications.map((q, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#9E7D52] shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const doc = selectedDoctor.name;
                  setSelectedDoctor(null);
                  onOpenBookingWithDoctor(doc);
                }}
                className="w-full py-3 rounded-xl bg-[#0C121C] text-[#FAF9F6] text-sm font-semibold flex items-center justify-center space-x-2 shadow-sm border border-[#C5A880]/50"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Book Appointment with {selectedDoctor.name}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
