export const siteImages = {
  logo: '/logo.jpg',
  hero: '/hero_solar_architecture.webp',
  residential: '/images/residential-solar.jpg',
  commercial: '/images/commercial-solar.jpg',
  industrial: '/images/industrial-solar.jpg',
};

export const getSectorImage = (category) => {
  if (category === 'residential') return siteImages.residential;
  if (category === 'commercial') return siteImages.commercial;
  if (category === 'industrial') return siteImages.industrial;
  return siteImages.commercial;
};
