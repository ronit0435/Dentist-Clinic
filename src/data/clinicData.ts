import { DoctorProfile, GalleryItem, ReviewItem, ServiceItem } from '../types';

// Signature Generated Assets
import heroImage from '../assets/images/hero_dentist_consultation_1789815090713.jpg';
import loungeImage from '../assets/images/clinic_interior_lounge_1789815102838.jpg';
import drMaryamPhoto from '../assets/images/doctor_maryam_portrait_1789815115543.jpg';
import drAliPhoto from '../assets/images/doctor_ali_portrait_1789815126774.jpg';
import hollywoodSmileImage from '../assets/images/hollywood_smile_treatment_1789815140169.jpg';

export const CLINIC_INFO = {
  name: 'TruSmile Dental Clinic',
  tagline: 'Your Smile, Our Masterpiece.',
  location: 'Dubai Silicon Oasis, Dubai, United Arab Emirates',
  fullAddress: 'Donna Towers – Office 1805, 46 Street – Nadd Hessa, Dubai Silicon Oasis, Dubai, UAE',
  phone: '+971 50 481 7488',
  phoneClean: '+971504817488',
  whatsappUrl: 'https://wa.me/971504817488?text=Hello%20TruSmile%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20dental%20appointment.',
  googleMapsUrl: 'https://maps.google.com/?q=Donna+Towers+Dubai+Silicon+Oasis',
  googleReviewsUrl: 'https://www.google.com/search?q=TruSmile+Dental+Clinic+Dubai+Silicon+Oasis+reviews',
  hours: [
    { days: 'Saturday – Thursday', time: '9:00 AM – 9:00 PM' },
    { days: 'Friday', time: '1:00 PM – 9:00 PM' },
  ],
  stats: {
    rating: '5.0',
    reviewsCount: '20+',
    locationArea: 'Dubai Silicon Oasis',
    satisfaction: '100% Patient Focus',
  }
};

export const IMAGES = {
  hero: heroImage,
  lounge: loungeImage,
  drMaryam: drMaryamPhoto,
  drAli: drAliPhoto,
  hollywoodSmile: hollywoodSmileImage,
};

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'hollywood-smile',
    title: 'Hollywood Smile',
    subtitle: 'Bespoke Aesthetic Smile Design',
    category: 'Cosmetic Dentistry',
    description: "Smile enhancement designed around a patient's individual facial contours, lip architecture, and natural tooth proportions.",
    fullDetails: "Our Hollywood Smile design blends advanced digital facial mapping with custom-crafted porcelain restorations. Each smile is individually sculpted to harmonize with your facial symmetry, ensuring natural translucency, optimal tooth length, and comfortable bite mechanics.",
    benefits: [
      'Tailored smile harmony aligned to facial symmetry',
      'High-grade stain-resistant porcelain',
      'Digitally planned aesthetic mock-up prior to fabrication',
      'Long-lasting luminous natural appearance'
    ],
    image: hollywoodSmileImage,
    iconName: 'Sparkles',
    duration: '2 – 3 Visits',
    idealFor: 'Patients seeking comprehensive aesthetic transformation with durable, natural-looking teeth.'
  },
  {
    id: 'invisalign',
    title: 'Invisalign Clear Aligners',
    subtitle: 'Discreet Orthodontic Realignment',
    category: 'Orthodontics',
    description: 'A modern clear-aligner solution for improving smile alignment without visible brackets or wires.',
    fullDetails: 'Invisalign utilizes a sequence of custom-molded, medical-grade thermoplastic aligners. Each set applies gentle, calibrated forces to systematically shift teeth into optimal alignment. Removable for effortless dining and routine oral hygiene.',
    benefits: [
      'Virtually invisible clear polyurethane aligners',
      'Comfortable without sharp metallic wires',
      'Fully removable for daily meals and hygiene',
      'Predictable 3D digital simulation of results'
    ],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    iconName: 'Smile',
    duration: '6 – 18 Months',
    idealFor: 'Adults & professionals desiring discreet tooth alignment with zero disruption to daily life.'
  },
  {
    id: 'dental-veneers',
    title: 'Dental Veneers',
    subtitle: 'Ultra-Thin Porcelain Precision',
    category: 'Cosmetic Dentistry',
    description: 'Cosmetic dental treatment designed to improve the appearance, shape, and shade of teeth.',
    fullDetails: 'Custom ceramic or porcelain shells bonded to the front surface of teeth. Ideal for masking discoloration, chips, minor gaps, or irregular contours with minimal tooth preparation and maximum preservation of healthy enamel.',
    benefits: [
      'Resistant to coffee, tea, and everyday staining',
      'Custom color grading for true dental translucency',
      'Minimal tooth structure modification',
      'Reinforces minor dental wear and edge chips'
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    iconName: 'Layers',
    duration: '2 Appointments',
    idealFor: 'Addressing stubborn discoloration, uneven tooth edges, minor crowding, or enamel wear.'
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    subtitle: 'Safe, Clinical Brightening',
    category: 'Cosmetic Dentistry',
    description: 'Professional teeth-whitening treatment for a brighter, radiant smile under specialist supervision.',
    fullDetails: 'Conducted using clinical-grade whitening gels activated by gentle LED wavelength technology. Carefully calibrated to protect sensitive gum tissues while lifting deep intrinsic and extrinsic stains safely in a single session.',
    benefits: [
      'Up to 6–8 shades visibly brighter in one clinical visit',
      'Enamel-safe formula formulated with desensitizers',
      'Controlled application preventing gum contact',
      'Includes personalized maintenance recommendations'
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sun',
    duration: '45 – 60 Minutes',
    idealFor: 'Quick, non-invasive rejuvenation for coffee, tea, smoking stains, or special occasions.'
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    subtitle: 'Gentle Endodontic Therapy',
    category: 'Endodontics',
    description: 'Treatment focused on addressing problems affecting the inside of the tooth, relieving pain and preserving natural dentition.',
    fullDetails: 'Performed with advanced microscopic endodontic tools and precision rotary instruments. The infected or inflamed pulp is delicately removed, the root canal system is thoroughly disinfected, sealed biocompatibly, and restored with a protective crown.',
    benefits: [
      'Immediate relief from severe toothache and sensitivity',
      'Saves your natural tooth from requiring extraction',
      'High-precision rotary endodontics with minimal discomfort',
      'Protects surrounding bone and adjacent teeth'
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldAlert',
    duration: '1 – 2 Sessions',
    idealFor: 'Deep dental decay, cracked teeth, or trauma causing inner pulp inflammation or pain.'
  },
  {
    id: 'dental-filling',
    title: 'Dental Filling',
    subtitle: 'Biomimetic Composite Restoration',
    category: 'Restorative Dentistry',
    description: 'Treatment for restoring teeth affected by decay or damage using tooth-colored composite materials.',
    fullDetails: 'We use high-grade nano-hybrid composite resins that blend seamlessly with your natural enamel. The decayed area is gently excavated and bonded layer by layer, curing with specialized light to re-establish anatomical tooth structure.',
    benefits: [
      'Seamless shade matching invisible to the naked eye',
      'Mercury-free, biocompatible resin formulation',
      'Direct bonding that reinforces remaining tooth walls',
      'Completed comfortably in a single dental visit'
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    iconName: 'Crosshair',
    duration: '30 – 45 Minutes',
    idealFor: 'Treating cavities, restoring chipped enamel, or replacing aged dark silver fillings.'
  },
  {
    id: 'scaling-and-polishing',
    title: 'Scaling & Polishing',
    subtitle: 'Preventive Dental Hygiene & Prophylaxis',
    category: 'General Dentistry',
    description: 'Professional cleaning to help maintain oral hygiene, remove stubborn calculus, and freshen breath.',
    fullDetails: 'Using gentle ultrasonic scalers followed by air-flow polishing, our dental hygienists remove calcified tartar and plaque deposits from areas unreachable with home brushing. Completed with fluoridation and personalized home care guidance.',
    benefits: [
      'Eliminates harmful bacteria and hard calculus deposits',
      'Prevents gum bleeding and early-stage gingivitis',
      'Polishes away surface stains from tea, coffee, and tobacco',
      'Promotes lasting oral freshness and tissue wellness'
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkle',
    duration: '45 Minutes',
    idealFor: 'Routine preventive maintenance every 6 months for every family member.'
  },
  {
    id: 'periodontal-care',
    title: 'Periodontal Care',
    subtitle: 'Specialized Gum Health & Tissue Therapy',
    category: 'Periodontics',
    description: 'Care focused on gum health, deep pocket decontamination, and managing periodontal conditions.',
    fullDetails: 'Comprehensive periodontal therapy targeting chronic inflammation of the supporting gum and bone tissues. Includes deep root planing, subgingival antimicrobial irrigation, and localized therapeutic protocols to halt bone loss.',
    benefits: [
      'Stops persistent bleeding, tenderness, and swelling',
      'Eliminates bacterial reservoirs below the gum line',
      'Prevents progressive tooth mobility and bone loss',
      'Personalized periodontal monitoring and maintenance plan'
    ],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    iconName: 'HeartPulse',
    duration: '1 – 2 Clinical Visits',
    idealFor: 'Patients experiencing gum bleeding, sensitivity, receding gums, or chronic halitosis.'
  },
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction',
    subtitle: 'Gentle, Atraumatic Dental Removal',
    category: 'Oral Surgery',
    description: 'Professional extraction when a tooth requires removal due to severe damage, impaction, or crowding.',
    fullDetails: 'Performed with gentle local anesthesia and atraumatic surgical techniques designed to preserve the surrounding alveolar bone. If replacement is desired, socket preservation protocols can be performed concurrently for future implant placement.',
    benefits: [
      'Minimally invasive, atraumatic surgical protocol',
      'Complete local anesthesia ensuring comfortable care',
      'Effective relief from severely fractured or impacted teeth',
      'Post-operative care pack with comprehensive instructions'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    iconName: 'Activity',
    duration: '30 – 60 Minutes',
    idealFor: 'Impacted wisdom teeth, non-restorable dental decay, or strategic orthodontic extractions.'
  }
];

export const CLINIC_SPECIALTIES = [
  { name: 'Cosmetic Dentistry', desc: 'Hollywood smiles, ceramic veneers, whitening, and aesthetic smile architecture.' },
  { name: 'General Dentistry', desc: 'Comprehensive exams, digital diagnostics, cleanings, and preventive oral wellness.' },
  { name: 'Endodontics', desc: 'Precision microscopic root canal therapy and preservation of natural teeth.' },
  { name: 'Restorative Dentistry', desc: 'Biomimetic fillings, inlays, onlays, and crown restorations.' },
  { name: 'Periodontics', desc: 'Specialized gum disease treatment, deep scaling, and soft tissue maintenance.' },
  { name: 'Prosthodontics', desc: 'Full-mouth rehabilitation, precision bridges, and aesthetic dentures.' },
  { name: 'Pediatric Dentistry', desc: 'Gentle, supportive dental care tailored for children and teenagers.' },
  { name: 'Oral Surgery', desc: 'Minimally invasive extractions, wisdom tooth care, and pre-prosthetic surgery.' }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Personalized Care',
    desc: "Treatment focused on each patient's individual dental needs, personal aesthetic goals, and medical history.",
    icon: 'UserCheck'
  },
  {
    title: 'Comfortable Experience',
    desc: 'A calm and welcoming environment in Dubai Silicon Oasis designed to make every dental visit serene and anxiety-free.',
    icon: 'Sparkles'
  },
  {
    title: 'Modern Dentistry',
    desc: 'Contemporary dental treatments and advanced diagnostic technology for precision care and predictable outcomes.',
    icon: 'Cpu'
  },
  {
    title: 'Experienced Dental Team',
    desc: 'Professional, compassionate dental practitioners across cosmetic, restorative, and general dentistry.',
    icon: 'Award'
  },
  {
    title: 'Transparent Communication',
    desc: 'We explain treatment options, steps, timelines, and care recommendations clearly before proceeding.',
    icon: 'MessageSquareText'
  },
  {
    title: 'Comprehensive Care',
    desc: 'Multiple specialized dental services available under one roof for complete family and cosmetic oral healthcare.',
    icon: 'Building2'
  }
];

export const PATIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Sarah M.',
    rating: 5,
    date: 'Recent Google Review',
    service: 'Root Canal Treatment',
    doctorMention: 'Dr. Maryam',
    comment: 'I was extremely nervous about getting a root canal, but Dr. Maryam made the entire procedure completely painless. She explained every single step calmly. The clinic in Donna Towers is immaculate, modern, and the team is so welcoming. Highly recommend!',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Omar A.',
    rating: 5,
    date: 'Recent Google Review',
    service: 'Cosmetic Veneers',
    doctorMention: 'Dr. Ali',
    comment: 'Dr. Ali is a true artist with dental veneers. My new smile looks completely natural and harmonious. From the digital mock-up to the final placement, everything was handled with perfection. TruSmile is easily the best dental clinic in DSO.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Elena K.',
    rating: 5,
    date: 'Recent Google Review',
    service: 'Scaling & Polishing',
    doctorMention: 'TruSmile Team',
    comment: 'The cleanest and most well-maintained clinic I have visited in Dubai. Gentle dental cleaning with zero discomfort. The staff is polite, professional, and on-time. Truly a five-star patient experience.',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Tariq H.',
    rating: 5,
    date: 'Recent Google Review',
    service: 'Invisalign & Routine Care',
    doctorMention: 'Dr. Maryam',
    comment: 'Dr. Maryam took the time to answer all my questions about clear aligners and showed me the 3D plan. Very transparent communication without any pressure. Proud to have found my family dentist here in Dubai Silicon Oasis.',
    verified: true
  }
];

export const DOCTORS: DoctorProfile[] = [
  {
    id: 'dr-maryam',
    name: 'Dr. Maryam',
    role: 'Dental Surgeon & Restorative Practitioner',
    specialty: 'Restorative Care & General Dentistry',
    description: 'Dr. Maryam provides gentle, patient-centered dental care with a special focus on pain-free restorative dentistry, root canal treatments, and preventative wellness. Known for her calming demeanor and detailed clinical explanations.',
    photo: drMaryamPhoto,
    verifiedQualifications: [
      'Licensed Dental Surgeon in Dubai (DHA)',
      'Extensive experience in Endodontic & Restorative Dentistry',
      'Advanced training in Patient Comfort & Minimally Invasive Techniques'
    ],
    focusAreas: ['Root Canal Treatment', 'Biomimetic Fillings', 'Preventive Prophylaxis', 'Pediatric Care']
  },
  {
    id: 'dr-ali',
    name: 'Dr. Ali',
    role: 'Cosmetic & Aesthetic Dental Specialist',
    specialty: 'Cosmetic Dentistry & Smile Transformations',
    description: 'Dr. Ali combines clinical precision with an artistic eye for smile aesthetics. Specializing in Hollywood smiles, ultra-thin porcelain veneers, and clear aligner therapy, he tailors each treatment to enhance the natural facial harmony of his patients.',
    photo: drAliPhoto,
    verifiedQualifications: [
      'Licensed Dental Practitioner in Dubai (DHA)',
      'Specialized in Digital Smile Design & Ceramic Veneers',
      'Certified Provider in Clear Aligner Orthodontics'
    ],
    focusAreas: ['Hollywood Smile', 'Porcelain Veneers', 'Invisalign Clear Aligners', 'Teeth Whitening']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Private Reception & VIP Waiting Lounge',
    category: 'lounge',
    image: loungeImage,
    description: 'Designed with warm ivory marble, acoustic calmness, and plush seating for relaxed pre-treatment comfort.'
  },
  {
    id: 'gal-2',
    title: 'Advanced Treatment Operatory',
    category: 'treatment',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    description: 'State-of-the-art dental suite equipped with ergonomic patient chairs and overhead surgical LED lighting.'
  },
  {
    id: 'gal-3',
    title: 'Digital Consultation Suite',
    category: 'technology',
    image: heroImage,
    description: 'Private consultation setting where treatment plans, digital models, and smile mock-ups are discussed in detail.'
  },
  {
    id: 'gal-4',
    title: 'Cosmetic Smile Finishing Studio',
    category: 'treatment',
    image: hollywoodSmileImage,
    description: 'Specialized suite dedicated to cosmetic veneer cementation, teeth whitening, and smile design checks.'
  },
  {
    id: 'gal-5',
    title: 'Intraoral Diagnostics & Digital Radiology',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    description: 'Low-radiation digital radiography and high-resolution intraoral imaging for accurate, transparent diagnoses.'
  },
  {
    id: 'gal-6',
    title: 'Sterilization & Clinical Hygiene Hub',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    description: 'Hospital-grade autoclaving and strict multi-tier sterilization protocols ensuring total patient safety.'
  }
];
