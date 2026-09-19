export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullDetails: string;
  benefits: string[];
  image: string;
  iconName: string;
  duration?: string;
  idealFor: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  description: string;
  photo: string;
  verifiedQualifications: string[];
  focusAreas: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  service: string;
  doctorMention?: string;
  comment: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'treatment' | 'lounge' | 'technology' | 'equipment';
  image: string;
  description: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
