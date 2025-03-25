export interface Service {
  id: number;
  title: string;
  time: string;
  value: string;
  rating: number;
  review: string;
}

export interface GalleryItem {
  id: number;
  image: string;
}

export interface Business {
  id: number;
  image: string;
  name: string;
  description: string;
  location: string;
  rating_score: number;
  facebook: string;
  instagram: string;
  x: string;
  tiktok: string;
  google: string;
  website: string;
  phone_number: string;
  featured: GalleryItem[];
  items: GalleryItem[];
  story: string;
  services: Service[];
  gallery: GalleryItem[];
}
