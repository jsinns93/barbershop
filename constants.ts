
import { Service, GalleryImage, Branding } from './types';

export const BRANDING: Branding = {
  name: "Premiere Cut",
  tagline: "The Ultimate Grooming Experience",
  location: "Pondok Indah Mall 1 (G Floor)",
  phone: "021-7507021",
  hours: "Mon-Sun 09.00 AM - 20.00 PM",
  reservationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd5TNG818b8Y18n_ZjrrcKpB6lqIOW1VV6uE-PsXh3315RlNg/viewform",
  socials: {
    instagram: "https://www.instagram.com/premiere.cut/",
    whatsapp: "https://api.whatsapp.com/message/PYTGMMDTKB5YF1?autoload=1&app_absent=0",
    facebook: "https://www.facebook.com/premierecut/",
    gmail: "mailto:premierecut.barber@gmail.com"
  }
};

export const SERVICES: Service[] = [
  { id: '1', name: 'Premiere Haircut', price: 'IDR 200.000', description: 'Complete signature cut, wash, hot towel, and styling.' },
  { id: '2', name: 'Beard Grooming', price: 'IDR 120.000', description: 'Professional beard trim, shaping, and conditioning.' },
  { id: '3', name: 'Classic Shave', price: 'IDR 150.000', description: 'Traditional straight razor shave with premium oils.' },
  { id: '4', name: 'Hair Coloring', price: 'IDR 450.000', description: 'Expert grey coverage or creative color services.' },
  { id: '5', name: 'Head Massage & Creambath', price: 'IDR 180.000', description: 'Relaxing therapy for scalp health and stress relief.' },
  { id: '6', name: 'Junior Cut', price: 'IDR 150.000', description: 'Specialized grooming for the young gentlemen.' }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1621605815841-2cd6060f19a6?q=80&w=2070&auto=format&fit=crop', alt: 'Classic Side Part Fade', category: 'Haircut' },
  { id: '2', url: 'https://images.unsplash.com/photo-1599351431247-f577f5d4818a?q=80&w=1974&auto=format&fit=crop', alt: 'Beard Shaping', category: 'Grooming' },
  { id: '3', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop', alt: 'Modern Textured Quiff', category: 'Haircut' },
  { id: '4', url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop', alt: 'Traditional Shave Experience', category: 'Service' },
  { id: '5', url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop', alt: 'Sharp Taper Fade', category: 'Haircut' },
  { id: '6', url: 'https://images.unsplash.com/photo-1512690196252-715d087968bc?q=80&w=2070&auto=format&fit=crop', alt: 'Interior Atmosphere', category: 'Shop' }
];
