'use client';

import Link from 'next/link';
import { Phone, Calculator, Mail, Sun } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function TopUtilityBar() {
  const phone = siteConfig.phone;

  return (
    <div className="es-utility-bar">
      <div className="es-utility-accent" aria-hidden="true" />
      <div className="container es-utility-inner">
        <div className="es-utility-left">
          <span className="es-utility-badge">
            <Sun size={12} aria-hidden="true" />
            ES Energy
          </span>
          {phone ? (
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="es-utility-link">
              <Phone size={13} aria-hidden="true" />
              <span>{phone}</span>
            </a>
          ) : (
            <span className="es-utility-muted">Engineering-led solar · Pakistan</span>
          )}
        </div>
        <div className="es-utility-right">
          <Link href="/calculator" className="es-utility-link">
            <Calculator size={13} aria-hidden="true" />
            <span>Solar Calculator</span>
          </Link>
          <span className="es-utility-sep" aria-hidden="true" />
          <Link href="/contact#contact-form" className="es-utility-link es-utility-link-accent">
            <Mail size={13} aria-hidden="true" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
