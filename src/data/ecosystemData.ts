import { EcosystemPlatform, ApproachPillar, TechnologyCapability, Differentiator } from '../types';

export const ECOSYSTEM_PLATFORMS: EcosystemPlatform[] = [
  {
    id: 'biztrix',
    name: 'Biztrix',
    tagline: 'Business-focused digital platform',
    category: 'Business Platform',
    description: 'A Skill Matrix business-focused digital platform designed to help businesses manage and grow their digital operations, commercial workflows, and enterprise efficiency.',
    keyFocus: ['Commercial Workflows', 'Enterprise Efficiency', 'Digital Operations', 'Business Intelligence'],
    websiteUrl: 'https://biztrix.in',
    status: 'Active Platform',
    badgeColor: 'from-blue-600 to-cyan-500',
    iconName: 'Briefcase'
  },
  {
    id: 'rojgarmatrix',
    name: 'RojgarMatrix',
    tagline: 'AI-powered employment & career marketplace',
    category: 'Jobs & Career',
    description: 'An AI-powered employment and career platform connecting job seekers and employers through intelligent matching, WhatsApp communication, career tools, and AI-powered guidance.',
    keyFocus: ['Job Marketplace', 'AI Job Matching', 'WhatsApp Alerts', 'AI Resume & Interview Coach', 'Employer Leads'],
    websiteUrl: 'https://rojgarmatrix.com',
    status: 'Active Platform',
    badgeColor: 'from-emerald-600 to-teal-500',
    iconName: 'Users'
  },
  {
    id: 'linkqr',
    name: 'LinkQR',
    tagline: 'AI-powered dynamic QR & smart link platform',
    category: 'QR & Digital Growth',
    description: 'An AI-powered dynamic QR and smart-link platform helping businesses create branded, trackable QR experiences, landing pages, analytics, automation, and conversion-focused digital touchpoints.',
    keyFocus: ['Dynamic & Branded QR', 'Smart Landing Pages', 'Scan Analytics', 'AI QR Design & Agents'],
    websiteUrl: 'https://linkqr.in',
    status: 'Active Platform',
    badgeColor: 'from-violet-600 to-indigo-500',
    iconName: 'QrCode'
  },
  {
    id: 'appmatrix',
    name: 'AppMatrix',
    tagline: 'Website-to-app cloud generation platform',
    category: 'App Generation',
    description: 'A cloud-powered platform that transforms websites into Android and iOS apps without requiring traditional app development workflows, generating App Store & Play Store ready builds.',
    keyFocus: ['Website to Android/iOS', 'No-Code Generation', 'APK & AAB Builds', 'Cloud Build Pipeline'],
    websiteUrl: 'https://appmatrix.in',
    status: 'Core Ecosystem',
    badgeColor: 'from-cyan-600 to-blue-700',
    iconName: 'LayoutGrid'
  },
  {
    id: 'chatmatrix',
    name: 'ChatMatrix',
    tagline: 'WhatsApp business automation platform',
    category: 'WhatsApp Automation',
    description: "A WhatsApp automation platform powered by Meta's Cloud API for bulk messaging, automated conversations, AI bot replies, and business communication management.",
    keyFocus: ['Meta WhatsApp Cloud API', 'Bulk & Mass Messaging', 'AI Bot Replies', 'Automated Workflows'],
    websiteUrl: 'https://chatmatrix.in',
    status: 'Active Platform',
    badgeColor: 'from-amber-600 to-orange-500',
    iconName: 'MessageSquareCode'
  },
  {
    id: 'jyotrix',
    name: 'Jyotrix',
    tagline: 'Astrology & numerology digital platform',
    category: 'Astrology & Numerology',
    description: 'A digital astrology and numerology platform combining traditional practices with AI-powered experiences, personalized insights, Kundli matching, and spiritual guidance.',
    keyFocus: ['Kundli & Horoscope', 'AI Astrologer', 'Numerology', 'Personalized Panchang'],
    websiteUrl: 'https://jyotrix.in',
    status: 'Active Platform',
    badgeColor: 'from-purple-600 to-pink-600',
    iconName: 'Sparkles'
  }
];

export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    step: '01',
    title: 'Identify',
    description: 'We deeply understand real-world friction points, market dynamics, and technological opportunities across industries.',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Build',
    description: 'We engineer practical, highly scalable, and secure technology solutions designed for elite performance.',
    icon: 'Hammer'
  },
  {
    step: '03',
    title: 'Connect',
    description: 'We integrate platforms into a unified ecosystem where data, identity, and capabilities flow securely between products.',
    icon: 'Network'
  },
  {
    step: '04',
    title: 'Scale',
    description: 'We continuously refine architecture, expand product reach, and evolve offerings to meet tomorrow’s digital demands.',
    icon: 'TrendingUp'
  }
];

export const TECHNOLOGY_CAPABILITIES: TechnologyCapability[] = [
  {
    title: 'SaaS Architecture',
    description: 'Multi-tenant software-as-a-service ecosystems built with modular tenancy, role-based access, and subscription engines.',
    icon: 'Server',
    tags: ['Cloud Native', 'Microservices', 'Multi-Tenant']
  },
  {
    title: 'Artificial Intelligence',
    description: 'Intelligent automation, natural language processing, and predictive analytics embedded seamlessly into product workflows.',
    icon: 'Cpu',
    tags: ['Machine Learning', 'Neural Models', 'Smart Automation']
  },
  {
    title: 'WhatsApp / Meta Cloud API',
    description: 'Robust integrations with Meta Cloud APIs for high-throughput messaging, automated bots, and seamless comms.',
    icon: 'Workflow',
    tags: ['Meta API', 'Event-Driven', 'Automated Comms']
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Resilient cloud infrastructure optimized for elastic scalability, security compliance, and low latency.',
    icon: 'Cloud',
    tags: ['Kubernetes', 'Serverless', 'Distributed DB']
  },
  {
    title: 'APIs & Integrations',
    description: 'Secure, well-documented RESTful and GraphQL APIs facilitating seamless third-party and cross-platform synergy.',
    icon: 'Boxes',
    tags: ['REST APIs', 'GraphQL', 'Webhooks', 'OAuth']
  },
  {
    title: 'Mobile App Technology',
    description: 'Advanced mobile build pipelines converting web architectures into native Android and iOS application packages.',
    icon: 'Globe',
    tags: ['Android AAB/APK', 'iOS IPA', 'Cloud Build']
  },
  {
    title: 'Product Engineering',
    description: 'Rigorous software engineering lifecycle management from initial architecture design to continuous deployment.',
    icon: 'Code2',
    tags: ['CI/CD', 'Code Quality', 'Agile Architecture']
  },
  {
    title: 'Security & Analytics',
    description: 'Enterprise-grade encryption, threat prevention, and real-time usage analytics across all ecosystem products.',
    icon: 'ShieldCheck',
    tags: ['Enterprise Grade', 'SSL & Auth', 'Telemetry']
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Product Ownership',
    description: 'We build, own, and operate our own software products, maintaining complete commitment to their quality and long-term success.',
    icon: 'Sparkles'
  },
  {
    title: 'Venture Group Model',
    description: 'An agile technology group incubating and scaling diverse digital platforms across multiple high-impact categories.',
    icon: 'Zap'
  },
  {
    title: 'Ecosystem Synergy',
    description: 'Our products benefit from shared technological foundations, security standards, and unified digital vision.',
    icon: 'Share2'
  },
  {
    title: 'Scalable Architecture',
    description: 'Engineered from the ground up to handle exponential user growth without compromising speed or reliability.',
    icon: 'Layers'
  },
  {
    title: 'Continuous Innovation',
    description: 'We actively invest in emerging technologies and AI integration to stay ahead of industry shifts.',
    icon: 'Compass'
  },
  {
    title: 'Long-Term Vision',
    description: 'We build enduring digital platforms rather than short-term projects, ensuring sustainable growth.',
    icon: 'Eye'
  }
];

export const OFFICIAL_CONTACT = {
  companyName: 'Skill Matrix',
  tagline: 'SaaS Product Company & Technology Venture Group',
  address: 'Skill Matrix, Near The Ginger Leaf Restaurant, Rudri, Dhamtari – 493776, Chhattisgarh, INDIA.',
  email: 'skillmatrix24@gmail.com',
  supportEmail: 'skillmatrix24@gmail.com',
  phone: '+91 9300911588'
};
