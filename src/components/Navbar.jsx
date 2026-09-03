'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import TopUtilityBar from './TopUtilityBar';
import BrandLogo from './BrandLogo';
import { navItems } from '@/lib/site';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const isItemActive = (path) => {
    const itemPath = path.split('#')[0];
    return itemPath === '/' ? pathname === '/' : pathname.startsWith(itemPath);
  };

  return (
    <header className={`es-header ${scrolled ? 'is-scrolled' : ''} ${isOpen ? 'is-menu-open' : ''}`}>
      <TopUtilityBar />
      <nav className={`site-navbar es-navbar ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary">
        <div className="container site-navbar-inner es-nav-inner">
          <BrandLogo variant="nav" className="es-nav-brand" />

          <div className="desktop-menu site-navbar-desktop es-nav-desktop">
            <ul className="site-nav-list es-nav-list">
              {navItems.map((item) => {
                const active = isItemActive(item.path);
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`nav-link-item es-nav-link ${active ? 'active' : ''}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="es-nav-actions">
              <Link href="/contact#contact-form" className="es-btn-primary es-nav-cta">
                Get a quote
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={`mobile-toggle es-nav-toggle ${isOpen ? 'is-open' : ''}`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="es-mobile-nav"
          >
            <span className="es-nav-toggle-icon" aria-hidden="true">
              {isOpen ? <X size={22} strokeWidth={2.2} /> : <Menu size={22} strokeWidth={2.2} />}
            </span>
          </button>
        </div>

        <div
          id="es-mobile-nav"
          className={`mobile-drawer es-mobile-drawer ${isOpen ? 'open' : ''}`}
          hidden={!isOpen}
        >
          <div className="es-mobile-drawer-panel">
            <p className="es-mobile-drawer-label">Navigate</p>
            <ul>
              {navItems.map((item) => {
                const active = isItemActive(item.path);
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      onClick={closeMenu}
                      className={active ? 'active' : ''}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mobile-drawer-actions es-mobile-drawer-actions">
              <Link
                href="/contact#contact-form"
                className="es-btn-primary"
                onClick={closeMenu}
              >
                Get a quote
              </Link>
              <Link
                href="/calculator"
                className="es-nav-secondary es-nav-secondary-block"
                onClick={closeMenu}
              >
                Open calculator
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
