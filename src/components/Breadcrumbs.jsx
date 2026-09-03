'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = ({ paths = [], variant = 'default' }) => {
  const isLight = variant === 'light';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`es-breadcrumbs ${isLight ? 'es-breadcrumbs-light' : ''}`}
    >
      <Link href="/">Home</Link>

      {paths.map((path, index) => {
        const isLast = index === paths.length - 1;
        return (
          <React.Fragment key={path.url || path.label}>
            <ChevronRight size={14} aria-hidden="true" className="es-breadcrumbs-sep" />
            {isLast ? (
              <span aria-current="page">{path.label}</span>
            ) : (
              <Link href={path.url}>{path.label}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
