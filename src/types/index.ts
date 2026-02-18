import type { Category } from '@/contexts/CategoryContext';

// Project types
export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
}

export type ProjectsByCategory = Record<Category, Project[]>;

// Qualification types
export interface Award {
  title: string;
  subtitle: string;
  description: string;
}

export interface Certification {
  title: string;
  org: string;
  desc: string;
}

export interface VolunteerItem {
  title: string;
  subtitle: string;
  description: string;
}

export interface QualificationData {
  awards: Award[];
  certifications: Certification[];
  volunteer: VolunteerItem[];
}

export type QualificationsByCategory = Record<Category, QualificationData>;

// Testimonial types
export interface Testimonial {
  quote: string;
  name: string;
  position: string;
}
