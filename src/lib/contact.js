import { siteConfig } from './site';

/** Anchor for the inquiry form on /contact */
export const CONTACT_FORM_ID = 'contact-form';

/**
 * Build a /contact URL that lands on the inquiry form.
 * @param {Record<string, string | number | undefined | null>} [params]
 */
export function contactHref(params = {}) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      search.set(key, String(value));
    }
  });
  const query = search.toString();
  return query
    ? `/contact?${query}#${CONTACT_FORM_ID}`
    : `/contact#${CONTACT_FORM_ID}`;
}

/** Digits-only WhatsApp number (e.g. 923001234567) */
export function getWhatsAppNumber() {
  const raw = siteConfig.whatsapp || '';
  return raw.replace(/\D/g, '');
}

export function isWhatsAppConfigured() {
  return getWhatsAppNumber().length >= 10;
}

export function getWhatsAppUrl(message = '') {
  const num = getWhatsAppNumber();
  if (!num) return null;
  const base = `https://wa.me/${num}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const contactConfig = {
  phoneNumber: siteConfig.phone || siteConfig.whatsapp || '',
  officeAddress: siteConfig.address || '',
  approvedEmail: siteConfig.email,
  operatingHours: siteConfig.hours,
};
