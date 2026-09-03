'use client';

import Link from 'next/link';
import { siteConfig, navItems } from '@/lib/site';
import { isWhatsAppConfigured, getWhatsAppUrl } from '@/lib/contact';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-accent" aria-hidden="true" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <BrandLogo variant="footer" />
            <p>
              Engineering-led solar solutions designed around real energy needs for homes,
              businesses, and industrial sites across Pakistan.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>{item.name === 'Home' ? 'Home' : item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Sectors</h4>
            <ul>
              <li><Link href="/industries#residential">Residential Solar</Link></li>
              <li><Link href="/industries#commercial">Commercial Solar</Link></li>
              <li><Link href="/industries#industrial">Industrial Solar</Link></li>
              <li><Link href="/solutions">Net Metering Systems</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              {siteConfig.phone ? (
                <li>
                  <strong>Phone</strong>
                  <span>{siteConfig.phone}</span>
                </li>
              ) : null}
              <li>
                <strong>Email</strong>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              {siteConfig.address ? (
                <li>
                  <strong>Office</strong>
                  <span>{siteConfig.address}</span>
                </li>
              ) : (
                <li>
                  <strong>Coverage</strong>
                  <span>Residential, commercial & industrial projects across Pakistan</span>
                </li>
              )}
              <li>
                <strong>Hours</strong>
                <span>{siteConfig.hours}</span>
              </li>
              {isWhatsAppConfigured() ? (
                <li>
                  <strong>WhatsApp</strong>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    Chat with our team
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="sub-footer">
          <div>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</div>
          <div className="sub-footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
