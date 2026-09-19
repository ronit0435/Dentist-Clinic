import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { CLINIC_INFO, PATIENT_REVIEWS } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#E7D7C1]/60 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Verified Google Patient Feedback</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0C121C] font-semibold tracking-tight">
              What Our Patients Say
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#0C121C]">5.0 Overall Google Rating</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PATIENT_REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-7 sm:p-8 rounded-2xl bg-[#FAF9F6] border border-[#E7D7C1] shadow-xs hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Review Header: Stars, Service Tag, and Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-[#FAF6EE] text-[11px] font-semibold text-[#9E7D52] border border-[#E7D7C1]">
                    {review.service}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#3F4D63] leading-relaxed italic">
                  “{review.comment}”
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 border-t border-[#E7D7C1]/60 flex items-center justify-between mt-6">
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-sm font-bold text-[#0C121C]">{review.name}</span>
                    {review.verified && (
                      <span title="Verified Patient Review" className="inline-flex">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#6B7A8C]">{review.date}</span>
                </div>

                {review.doctorMention && (
                  <div className="text-right">
                    <span className="text-[11px] text-[#6B7A8C]">Doctor Mentioned:</span>
                    <p className="text-xs font-semibold text-[#9E7D52]">{review.doctorMention}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Google Reviews CTA Button */}
        <div className="mt-12 text-center">
          <a
            id="view-all-google-reviews-btn"
            href={CLINIC_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#FAF6EE] hover:bg-[#F3ECE0] text-[#0C121C] text-sm font-semibold border border-[#E7D7C1] hover:border-[#C5A880] transition-all shadow-xs"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-[#9E7D52]" />
          </a>
          <p className="text-xs text-[#6B7A8C] mt-2.5">
            Real patient experiences from our Google Business Profile in Dubai Silicon Oasis.
          </p>
        </div>

      </div>
    </section>
  );
};
