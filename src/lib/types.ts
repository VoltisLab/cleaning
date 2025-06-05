export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  color: string;
  iconBg: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  color: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface PricingPlan {
  type: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface TestimonialData {
  name: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface NewsArticle {
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
}
