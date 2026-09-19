import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES, DOCTORS } from '../data/clinicData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialDoctorName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialDoctorName
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialServiceId || CLINIC_SERVICES[0].id,
    doctor: initialDoctorName || 'Any Available Specialist',
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, service: initialServiceId }));
    }
    if (initialDoctorName) {
      setFormData(prev => ({ ...prev, doctor: initialDoctorName }));
    }
  }, [initialServiceId, initialDoctorName]);

  if (!isOpen) return null;

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '01:00 PM',
    '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const selectedServiceObj = CLINIC_SERVICES.find(s => s.id === formData.service);
    const serviceTitle = selectedServiceObj ? selectedServiceObj.title : formData.service;
    
    const message = `Hello TruSmile Dental Clinic,\nI would like to book a dental appointment:\n\n*Patient Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Treatment:* ${serviceTitle}\n*Doctor Preference:* ${formData.doctor}\n*Preferred Date:* ${formData.preferredDate || 'Earliest available'}\n*Preferred Time:* ${formData.preferredTime}\n*Notes:* ${formData.notes || 'None'}\n\nThank you!`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/971504817488?text=${encoded}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C121C]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF9F6] rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-[#E7D7C1] shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-booking-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF6EE] hover:bg-[#F3ECE0] text-[#0C121C] transition-colors"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#9E7D52] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>TruSmile Dental Clinic • Dubai Silicon Oasis</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C121C]">
                Book Your Appointment
              </h3>
              <p className="text-xs sm:text-sm text-[#4F5E71] mt-1">
                Experience comfortable, bespoke dentistry with our experienced team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Patient Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#1C2738] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#9E7D52] absolute left-3.5 top-3.5" />
                  <input
                    id="booking-name-input"
                    type="text"
                    required
                    placeholder="e.g. Michael Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E7D7C1] text-sm text-[#0C121C] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1C2738] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9E7D52] absolute left-3.5 top-3.5" />
                    <input
                      id="booking-phone-input"
                      type="tel"
                      required
                      placeholder="+971 50 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E7D7C1] text-sm text-[#0C121C] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C2738] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#9E7D52] absolute left-3.5 top-3.5" />
                    <input
                      id="booking-email-input"
                      type="email"
                      placeholder="patient@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E7D7C1] text-sm text-[#0C121C] focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Doctor Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1C2738] uppercase tracking-wider mb-1.5">
                    Treatment Required *
                  </label>
                  <select
                    id="booking-service-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E7D7C1] text-sm text-[#0C121C] focus:outline-none focus:border-[#C5A880]"
                  >
                    {CLINIC_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C2738] uppercase tracking-wider mb-1.5">
                    Preferred Doctor
                  </label>
                  <select
                    id="booking-doctor-select"
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E7D7C1] text-sm text-[#0C121C] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Any Available Specialist">Any Available Specialist</option>
                    {DOCTORS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.specialty})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1C2738] uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#9E7D52] absolute left-3.5 top-3.5" />
                    <input
                      id="booking-date-input"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white border border-[#E7D7C1] text-sm text-[#0C121C] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C2738] uppercase tracking-wider mb-1.5">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#9E7D52] absolute left-3.5 top-3.5" />
                    <select
                      id="booking-time-select"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white border border-[#E7D7C1] text-sm text-[#0C121C] focus:outline-none focus:border-[#C5A880]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Patient Notes */}
              <div>
                <label className="block text-xs font-bold text-[#1C2738] uppercase tracking-wider mb-1.5">
                  Symptoms or Special Requests (Optional)
                </label>
                <textarea
                  id="booking-notes-input"
                  rows={2}
                  placeholder="e.g. Tooth sensitivity, seeking aesthetic consultation, or routine check-up..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E7D7C1] text-sm text-[#0C121C] focus:outline-none focus:border-[#C5A880]"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 space-y-2.5">
                <button
                  id="booking-submit-btn"
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0C121C] hover:bg-[#1C2738] text-[#FAF9F6] text-sm font-semibold flex items-center justify-center space-x-2 border border-[#C5A880]/50 shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Confirm Appointment Request</span>
                </button>

                <div className="flex items-center justify-center space-x-2 text-xs text-[#6B7A8C]">
                  <span>Or book instantly via direct reception line:</span>
                  <a href={`tel:${CLINIC_INFO.phoneClean}`} className="font-bold text-[#0C121C] hover:underline">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C121C]">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm text-[#4F5E71] mt-2 max-w-md mx-auto">
                Your consultation request has been received by the TruSmile reception team. We will call you back shortly on <strong>{formData.phone}</strong> to confirm your exact slot.
              </p>
            </div>

            {/* Appointment Summary Box */}
            <div className="bg-[#FAF6EE] p-4 rounded-xl border border-[#E7D7C1] text-xs text-left space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-[#6B7A8C]">Treatment:</span>
                <span className="font-bold text-[#0C121C]">
                  {CLINIC_SERVICES.find(s => s.id === formData.service)?.title || formData.service}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7A8C]">Doctor:</span>
                <span className="font-bold text-[#0C121C]">{formData.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7A8C]">Location:</span>
                <span className="font-bold text-[#0C121C]">Donna Towers, Office 1805, DSO</span>
              </div>
            </div>

            {/* Quick Action: Send to WhatsApp */}
            <div className="pt-2 space-y-3">
              <button
                id="booking-whatsapp-confirm-btn"
                onClick={handleWhatsAppSend}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Booking Details to WhatsApp Reception</span>
              </button>

              <button
                id="booking-done-btn"
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E7D7C1] text-xs font-semibold text-[#0C121C] hover:bg-[#FAF6EE] transition-all"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
