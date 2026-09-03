import { Suspense } from 'react';
import Contact from '@/views/Contact';

export const metadata = {
  title: 'Contact',
  description: 'Request a solar feasibility review from ES Energy. Tell us about your site, bill, and project goals.',
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Contact />
    </Suspense>
  );
}
