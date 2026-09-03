import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <p className="not-found-kicker">404</p>
        <h1>This page is off the grid.</h1>
        <p>
          The link may be outdated, or the page may have moved. Head back to {siteConfig.name} and
          continue planning your solar system.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="btn-hero-primary">
            Back to Home
          </Link>
          <Link href="/contact#contact-form" className="btn-hero-secondary">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
