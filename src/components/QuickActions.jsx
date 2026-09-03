'use client';

import Link from 'next/link';
import { Calculator, MessageSquare, FileText } from 'lucide-react';
import { quickActions } from '@/lib/home';
import AnimateIn from './AnimateIn';

const ICONS = {
  calculator: Calculator,
  file: FileText,
  message: MessageSquare,
};

export default function QuickActions() {
  return (
    <section className="es-quick-actions" aria-label="Quick actions">
      <div className="container">
        <div className="es-quick-grid">
          {quickActions.map((action, i) => {
            const Icon = ICONS[action.icon] || FileText;
            return (
              <AnimateIn key={action.id} delay={i * 100}>
                <Link href={action.href} className="es-quick-card es-card-shine">
                  <span className="es-quick-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="es-quick-title">{action.title}</h3>
                  <p className="es-quick-desc">{action.desc}</p>
                  <span className="es-quick-cta">{action.cta} →</span>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
