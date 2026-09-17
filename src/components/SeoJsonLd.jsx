import { siteConfig } from '@/lib/site';

/** JSON-LD for Google — Lahore local business + website */
export default function SeoJsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.jpg`,
    image: `${siteConfig.url}/logo.jpg`,
    description: siteConfig.description,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
      streetAddress: siteConfig.address,
    },
    areaServed: [
      { '@type': 'City', name: 'Lahore' },
      { '@type': 'Country', name: 'Pakistan' },
    ],
    sameAs: [],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.jpg`,
      },
    },
    inLanguage: 'en-PK',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
