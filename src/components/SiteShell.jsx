'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSupport from '@/components/FloatingSupport';
import ScrollProgress from '@/components/ScrollProgress';

export default function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <ScrollProgress />
      <Navbar />
      <main className="site-main">{children}</main>
      <Footer />
      <FloatingSupport />
    </div>
  );
}
