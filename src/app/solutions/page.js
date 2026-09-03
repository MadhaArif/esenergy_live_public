import { Suspense } from 'react';
import Solutions from '@/views/Solutions';

export const metadata = {
  title: 'Solutions',
  description: 'Browse solar inverters, panels, lithium batteries, and VFD equipment engineered for Pakistani sites.',
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Solutions />
    </Suspense>
  );
}
