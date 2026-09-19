import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SmileTransformation } from './components/SmileTransformation';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { TeamSection } from './components/TeamSection';
import { ClinicGallery } from './components/ClinicGallery';
import { LocationSection } from './components/LocationSection';
import { AppointmentCta } from './components/AppointmentCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { QuickContactFloating } from './components/QuickContactFloating';
import { ServiceItem } from './types';
import { CLINIC_SERVICES } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingServiceId, setSelectedBookingServiceId] = useState<string | undefined>(undefined);
  const [selectedBookingDoctor, setSelectedBookingDoctor] = useState<string | undefined>(undefined);
  
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (serviceId?: string, doctorName?: string) => {
    setSelectedBookingServiceId(serviceId);
    setSelectedBookingDoctor(doctorName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedBookingServiceId(undefined);
    setSelectedBookingDoctor(undefined);
  };

  const handleExploreTreatments = () => {
    const treatmentsEl = document.getElementById('treatments');
    if (treatmentsEl) {
      treatmentsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCosmeticService = (serviceId: string) => {
    const service = CLINIC_SERVICES.find(s => s.id === serviceId);
    if (service) {
      setSelectedDetailService(service);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E252B] flex flex-col font-sans selection:bg-[#E8DFC9] selection:text-[#182026]">
      {/* 16. Sticky Premium Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onExploreTreatments={handleExploreTreatments} 
        />

        {/* 4. Trust / Social Proof Section */}
        <SocialProof />

        {/* 5. About TruSmile */}
        <AboutSection 
          onOpenBooking={() => handleOpenBooking()} 
          onExploreTreatments={handleExploreTreatments} 
        />

        {/* 6. Featured Services (9 Cards) */}
        <ServicesSection 
          onSelectService={(service) => setSelectedDetailService(service)}
          onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* 7. Smile Transformation (Cosmetic Dentistry Spotlight) */}
        <SmileTransformation 
          onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
          onSelectCosmeticService={handleSelectCosmeticService}
        />

        {/* 8. Why Patients Choose TruSmile */}
        <WhyChooseUs />

        {/* 9. Patient Reviews (Google Business Themes) */}
        <ReviewsSection />

        {/* 10. Dentist / Team Section */}
        <TeamSection 
          onOpenBookingWithDoctor={(doctorName) => handleOpenBooking(undefined, doctorName)}
        />

        {/* 11. Clinic Experience (Inside TruSmile Gallery) */}
        <ClinicGallery />

        {/* 12. Location Section */}
        <LocationSection />

        {/* 13. Appointment CTA Section */}
        <AppointmentCta 
          onOpenBooking={() => handleOpenBooking()} 
        />
      </main>

      {/* 14. Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedBookingServiceId}
        initialDoctorName={selectedBookingDoctor}
      />

      <ServiceDetailModal 
        service={selectedDetailService}
        onClose={() => setSelectedDetailService(null)}
        onBookTreatment={(serviceId) => {
          setSelectedDetailService(null);
          handleOpenBooking(serviceId);
        }}
      />

      {/* Floating Speed Dial (WhatsApp & Phone) */}
      <QuickContactFloating 
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
