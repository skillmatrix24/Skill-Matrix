export interface EcosystemPlatform {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  keyFocus: string[];
  websiteUrl: string;
  status: 'Active Platform' | 'Expanding Platform' | 'Core Ecosystem';
  badgeColor: string;
  iconName: string;
}

export interface ApproachPillar {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechnologyCapability {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Differentiator {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}
