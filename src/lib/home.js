import { siteImages } from './images';

export const heroContent = {
  kicker: 'ES Energy · Lahore',
  titlePrefix: 'Powering',
  rotatingWords: ['homes', 'businesses', 'factories', 'Lahore'],
  titleSuffix: 'with clean solar energy',
  lead:
    'From site survey and system design to installation and net metering — reliable solar solutions in Lahore, built to perform for decades.',
  trustBullets: ['Tier-1 components', 'Net metering support', 'Based in Lahore'],
  panelLabel: 'Why customers choose us',
  panelItems: [
    { title: 'Engineering-first', text: 'Systems sized from real load data' },
    { title: 'End-to-end delivery', text: 'Survey → install → net metering' },
    { title: 'Long-term support', text: 'After-sales & performance care' },
  ],
};

export const trustStripItems = [
  'Engineering-led design',
  'Net metering ready',
  'Residential · Commercial · Industrial',
  'Pakistan-wide projects',
  'Tier-1 solar components',
  'Free site feasibility review',
];

export const homeStats = [
  { id: 'systems', value: 500, suffix: '+', label: 'Systems delivered', icon: '☀️' },
  { id: 'capacity', value: 25, suffix: ' MW+', label: 'Capacity installed', icon: '⚡' },
  { id: 'experience', value: 15, suffix: '+', label: 'Years experience', icon: '🏆' },
  { id: 'sectors', value: 3, suffix: '', label: 'Sectors served', icon: '🏭' },
];

export const quickActions = [
  {
    id: 'calculator',
    icon: 'calculator',
    title: 'Solar Calculator',
    desc: 'Estimate system size and monthly savings from your bill.',
    href: '/calculator',
    cta: 'Calculate now',
  },
  {
    id: 'enquiry',
    icon: 'file',
    title: 'Quick Enquiry',
    desc: 'Share your site details and get a feasibility review.',
    href: '/contact#contact-form',
    cta: 'Send enquiry',
  },
  {
    id: 'talk',
    icon: 'message',
    title: 'Talk to our team',
    desc: 'Questions about net metering, products, or installation.',
    href: '/contact#contact-form',
    cta: 'Get in touch',
  },
];

export const homeSectors = [
  {
    id: 'residential',
    title: 'Residential',
    desc: 'Home solar based on your bill, roof space, and backup needs.',
    link: '/industries#residential',
    image: siteImages.residential,
    stat: '5–30 kW',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    desc: 'Lower running costs for offices, shops, schools, and buildings.',
    link: '/industries#commercial',
    image: siteImages.commercial,
    stat: '50–500 kW',
  },
  {
    id: 'industrial',
    title: 'Industrial',
    desc: 'High-capacity systems for factories and heavy continuous loads.',
    link: '/industries#industrial',
    image: siteImages.industrial,
    stat: '1 MW+',
  },
];

export const homePillars = [
  {
    number: '01',
    title: 'Quality equipment',
    text: 'Tier-one panels and inverters with proper warranty coverage.',
  },
  {
    number: '02',
    title: 'Proper engineering',
    text: 'Systems sized from your actual load, roof, and future needs.',
  },
  {
    number: '03',
    title: 'Full project support',
    text: 'Survey, design, installation, net metering, and after-sales.',
  },
  {
    number: '04',
    title: 'Long-term savings',
    text: 'Built for reliable performance and predictable bill reduction.',
  },
];

export const homeTestimonials = [
  {
    id: 't1',
    quote: 'Our office bill dropped significantly within the first billing cycle after commissioning.',
    author: 'Commercial client, Lahore',
  },
  {
    id: 't2',
    quote: 'The team handled net metering paperwork and kept us updated at every stage.',
    author: 'Residential homeowner, Islamabad',
  },
  {
    id: 't3',
    quote: 'Industrial load profiling was thorough — the system matches our daytime demand.',
    author: 'Factory operations lead, Punjab',
  },
];

export const brandIntro = {
  image: siteImages.commercial,
  eyebrow: 'Our approach',
  title: 'Every system starts with your site and your bill',
  description:
    'Solar is a long-term investment. We look at your property, electricity usage, and goals before recommending equipment — so you get a system that actually fits.',
  cta: { label: 'Learn about us →', href: '/about' },
};
