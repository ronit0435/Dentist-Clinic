import React from 'react';
import { motion } from 'motion/react';
import { 
  UserCheck, 
  Sparkles, 
  Cpu, 
  Award, 
  MessageSquareText, 
  Building2 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'MessageSquareText': return <MessageSquareText className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#FAF6EE] relative overflow-hidden border-t border-[#E7D7C1]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>The TruSmile Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#0C121C] font-semibold tracking-tight">
            Dental Care <span className="italic font-normal text-[#9E7D52]">Designed Around You</span>
          </h2>
          <p className="mt-4 text-base text-[#4F5E71]">
            We build lasting patient relationships grounded in clinical mastery, transparent communication, and genuine personal comfort.
          </p>
        </div>

        {/* 6 Elegant Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-7 rounded-2xl bg-[#FAF9F6] border border-[#E7D7C1] shadow-xs hover:border-[#C5A880] transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Icon Container with Subtle Hover Animation */}
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] border border-[#E7D7C1] flex items-center justify-center text-[#9E7D52] mb-5 group-hover:bg-[#0C121C] group-hover:text-[#C5A880] group-hover:border-[#0C121C] transition-all duration-300">
                {getIcon(item.icon)}
              </div>

              <h3 className="font-serif text-xl font-bold text-[#0C121C] tracking-tight group-hover:text-[#9E7D52] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#4F5E71] leading-relaxed mt-2.5">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
