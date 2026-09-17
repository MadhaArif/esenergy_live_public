export const siteConfig = {
  name: 'ES Energy',
  legalName: 'ES Energy',
  tagline: 'Reliable Solar Solutions in Lahore',
  description:
    'Premium engineering-led solar solutions for homes, businesses, and industrial facilities in Lahore and across Pakistan. System design, installation, and net metering support.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://esenergy.net',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@esenergy.net',
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '',
  address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || 'Lahore, Pakistan',
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || 'Monday – Saturday, 10:00 AM – 6:00 PM',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
};

export const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Industries', path: '/industries' },
  { name: 'Projects', path: '/projects' },
  { name: 'Calculator', path: '/calculator' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact#contact-form' },
];
