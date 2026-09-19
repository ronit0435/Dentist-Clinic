import React, { useState } from 'react';
import { MessageCircle, Phone, Calendar, ChevronUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface QuickContactFloatingProps {
  onOpenBooking: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({ onOpenBooking }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-2.5">
      
      {/* Expanded Quick Contact Actions */}
      {isExpanded && (
        <div className="flex flex-col items-end space-y-2 mb-1 animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Call Direct */}
          <a
            id="floating-call-btn"
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#FAF9F6] text-[#0C121C] text-xs font-semibold shadow-lg border border-[#E7D7C1] hover:bg-[#FAF6EE] transition-transform hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5 text-[#9E7D52]" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>

          {/* Book Direct */}
          <button
            id="floating-book-btn"
            onClick={() => {
              setIsExpanded(false);
              onOpenBooking();
            }}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#0C121C] text-[#FAF9F6] text-xs font-semibold shadow-lg border border-[#C5A880]/50 hover:bg-[#1C2738] transition-transform hover:scale-105 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Book Appointment</span>
          </button>
        </div>
      )}

      {/* Main WhatsApp Speed-Dial Trigger */}
      <div className="flex items-center space-x-2">
        
        {/* Toggle / Call mini button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2.5 rounded-full bg-[#FAF9F6] text-[#0C121C] border border-[#E7D7C1] shadow-md hover:bg-[#FAF6EE] transition-all"
          aria-label="Toggle Quick Contact Menu"
          title="Quick Contact Menu"
        >
          <ChevronUp className={`w-4 h-4 text-[#9E7D52] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {/* Primary WhatsApp floating button */}
        <a
          id="floating-whatsapp-direct-btn"
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center space-x-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          title="Chat with TruSmile on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-semibold tracking-wide hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>

    </div>
  );
};
