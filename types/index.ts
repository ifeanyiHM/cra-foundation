export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  image?: string;
  details?: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  images?: string[];
  author?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
}

// export interface GalleryItem {
//   id: string;
//   src: string;
//   alt: string;
//   category: string;
//   caption?: string;
// }

export interface DonationTier {
  amount: number;
  label: string;
  description: string;
  impact: string;
}

export interface ImpactStat {
  number: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface Award {
  year: string;
  title: string;
  issuer: string;
  image?: string;
  color?: { from: string; to: string };
  label?: string;
}

export interface SponsorChild {
  id: string;
  name: string;
  age: number;
  school: string;
  story: string;
  image?: string;
  sponsored: boolean;
}

export type DonationFrequency = "once" | "monthly" | "annually";

export interface DonationFormData {
  amount: number | string;
  customAmount?: number;
  frequency: DonationFrequency;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message?: string;
  anonymous: boolean;
  coverFees: boolean;
}

export interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occupation: string;
  skills: string[];
  availability: string;
  motivation: string;
  location: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface SponsorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  sponsorshipType: "child" | "meal" | "education" | "health" | "general";
  amount: number;
  frequency: DonationFrequency;
  message?: string;
}

export interface GalleryItem {
  id: string;
  cat: string;
  caption: string;
  src: string;
}
