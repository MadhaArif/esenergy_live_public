import Link from 'next/link';
import { siteImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';

export default function BrandLogo({ variant = 'nav', className = '' }) {
  const isNav = variant === 'nav';
  const isFooter = variant === 'footer';

  return (
    <Link
      href="/"
      className={`brand-lockup brand-lockup-${variant} ${className}`.trim()}
      aria-label={`${siteConfig.name} home`}
    >
      <span className={`brand-logo-frame ${isNav ? 'es-logo-frame' : ''}`.trim()}>
        <img
          src={siteImages.logo}
          alt=""
          className="brand-logo-img"
          width={isFooter ? 180 : 132}
          height={isFooter ? 64 : 44}
        />
      </span>
      {isNav ? (
        <span className="es-brand-text">
          <span className="es-brand-name">{siteConfig.name}</span>
          <span className="es-brand-tag">Engineered Solar</span>
        </span>
      ) : null}
    </Link>
  );
}
