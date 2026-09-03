import { contactHref } from './contact';

/**
 * Build a contact page URL for product or service inquiries (lands on the form).
 */
export function getContactInquiryUrl({ product, brand, sector, system, bill, message } = {}) {
  return contactHref({ product, brand, sector, system, bill, message });
}
