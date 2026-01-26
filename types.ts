
export interface Service {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
}

export interface Branding {
  name: string;
  tagline: string;
  location: string;
  phone: string;
  hours: string;
  reservationLink: string;
  socials: {
    instagram: string;
    whatsapp: string;
    facebook: string;
    gmail: string;
  };
}
