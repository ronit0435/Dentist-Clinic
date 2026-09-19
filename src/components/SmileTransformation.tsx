import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Smile } from 'lucide-react';
import { IMAGES } from '../data/clinicData';

interface SmileTransformationProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectCosmeticService: (serviceId: string) => void;
}

export const SmileTransformation: React.FC<SmileTransformationProps> = ({ 
  onOpenBooking,
  onSelectCosmeticService 
}) => {
  const [activeTab, setActiveTab] = useState<'hollywood-smile' | 'dental-veneers' | 'teeth-whitening' | 'invisalign'>('hollywood-smile');

  const cosmeticTreatments = [
    {
      id: 'hollywood-smile',
      title: 'Hollywood Smile',
      subtitle: 'Complete Aesthetic Facial Harmony',
      description: 'Comprehensive smile design harmonizing tooth shape, shade, and alignment with your individual facial features and lip drape.',
      points: [
        'Customized digital smile simulation prior to bonding',
        'Handcrafted high-translucency ceramic porcelain',
        'Preserves maximum natural healthy tooth structure',
        'Designed specifically for natural aesthetic beauty'
      ]
    },
    {
      id: 'dental-veneers',
      title: 'Porcelain Veneers',
      subtitle: 'Micro-Thin Ceramic Artistry',
      description: 'Ultra-thin ceramic shells tailored to correct stubborn deep stains, minor chips, slight gaps, and asymmetrical edges.',
      points: [
        'Resistant to discoloration from tea and coffee',
        'Natural tooth light reflection and gradient',
        'Minimally invasive enamel surface preparation',
        'Long-term durability with routine dental hygiene'
      ]
    },
    {
      id: 'teeth-whitening',
      title: 'Teeth Whitening',
      subtitle: 'Safe, Clinical Brightening',
      description: 'In-clinic medical-grade whitening treatment that lifts years of intrinsic enamel staining comfortably and safely in one visit.',
      points: [
        'Up to 6–8 shades brighter in under an hour',
        'Formulated with protective anti-sensitivity agents',
        'Specialist-supervised application protecting gums',
        'Even, radiant results without enamel abrasion'
      ]
    },
    {
      id: 'invisalign',
      title: 'Invisalign Aligners',
      subtitle: 'Invisible Orthodontic Realignment',
      description: 'Discreet, removable clear aligners that gently guide teeth into balanced alignment with zero wires or dietary restrictions.',
      points: [
        'Virtually invisible medical-grade thermoplastic',
        'Remove easily for meals, meetings, and brushing',
        'Predictable 3D digital movement mapping',
        'Comfortable smooth edges without oral irritation'
      ]
    }
  ];

  const currentTreatment = cosmeticTreatments.find(t => t.id === activeTab) || cosmeticTreatments[0];

  return (
    <section id="cosmetic" className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Aesthetic Dentistry & Smile Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0C121C] font-semibold tracking-tight">
            Your Smile. <span className="italic font-normal text-[#9E7D52]">Reimagined.</span>
          </h2>
          <p className="mt-4 text-base text-[#4F5E71]">
            We approach cosmetic dentistry not with a one-size-fits-all formula, but as bespoke craftsmanship centered on your natural facial characteristics and individual aesthetic goals.
          </p>
        </div>

        {/* Interactive Cosmetic Spotlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: High-End Macro Smile Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E7D7C1] bg-white">
              <img
                src={IMAGES.hollywoodSmile}
                alt="Hollywood smile and cosmetic dentistry results at TruSmile Dental Clinic Dubai"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Luxury Overlay Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C121C]/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">
                  TruSmile Cosmetic Suite • Dubai Silicon Oasis
                </span>
                <p className="font-serif text-xl sm:text-2xl text-[#FAF9F6] font-semibold mt-1">
                  Bespoke Porcelain Architecture
                </p>
                <p className="text-xs text-[#E7D7C1]/90 mt-1 max-w-md">
                  Every cosmetic restoration is individually planned to maintain natural tooth anatomy, optical depth, and biocompatible bite comfort.
                </p>
              </div>
            </div>

            {/* Genuine Patient Care Guarantee Note (No Fake Claims) */}
            <div className="mt-4 flex items-center space-x-2 text-xs text-[#6B7A8C] px-2">
              <ShieldCheck className="w-4 h-4 text-[#9E7D52] shrink-0" />
              <span>Personalized consultations with digital simulation. Individual results vary based on oral anatomy.</span>
            </div>
          </div>

          {/* Right Column: 4 Cosmetic Treatment Tabs & Explanations */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Navigation Tabs for the 4 Cosmetic Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-[#E7D7C1]/70 pb-4">
              {cosmeticTreatments.map((t) => (
                <button
                  key={t.id}
                  id={`cosmetic-tab-${t.id}`}
                  onClick={() => setActiveTab(t.id as any)}
                  className={`py-2 px-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer text-center ${
                    activeTab === t.id
                      ? 'bg-[#0C121C] text-[#FAF9F6] shadow-xs'
                      : 'bg-[#FAF6EE] text-[#4F5E71] hover:bg-[#F3ECE0]'
                  }`}
                >
                  {t.title}
                </button>
              ))}
            </div>

            {/* Active Cosmetic Detail Content */}
            <motion.div
              key={currentTreatment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-left"
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-[#9E7D52] font-bold">
                  {currentTreatment.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C121C] tracking-tight mt-1">
                  {currentTreatment.title}
                </h3>
              </div>

              <p className="text-base text-[#3F4D63] leading-relaxed">
                {currentTreatment.description}
              </p>

              {/* Treatment Checklist Points */}
              <div className="space-y-2.5 pt-2">
                {currentTreatment.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-sm text-[#1C2738]">
                    <div className="w-5 h-5 rounded-full bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#9E7D52]" />
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-6 flex flex-wrap items-center gap-3.5">
                <button
                  id="cosmetic-explore-cta-btn"
                  onClick={() => onSelectCosmeticService(currentTreatment.id)}
                  className="px-7 py-3.5 rounded-full bg-[#0C121C] hover:bg-[#1C2738] text-[#FAF9F6] text-sm font-medium tracking-wide flex items-center space-x-2 border border-[#C5A880]/50 shadow-sm transition-all group cursor-pointer"
                >
                  <span>Explore Cosmetic Dentistry</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="cosmetic-book-cta-btn"
                  onClick={() => onOpenBooking(currentTreatment.id)}
                  className="px-6 py-3.5 rounded-full bg-[#FAF6EE] hover:bg-[#F3ECE0] text-[#0C121C] text-sm font-semibold border border-[#E7D7C1] transition-all cursor-pointer"
                >
                  <span>Schedule Consultation</span>
                </button>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
