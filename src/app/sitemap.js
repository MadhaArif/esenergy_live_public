import { siteConfig } from '@/lib/site';

export default function sitemap() {
  const base = siteConfig.url;
  const routes = [
    '',
    '/calculator',
    '/about',
    '/solutions',
    '/industries',
    '/projects',
    '/why-us',
    '/insights',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
