'use client';

import { useEffect, useState } from 'react';
import { homeTestimonials } from '@/lib/home';
import AnimateIn from './AnimateIn';

export default function TestimonialsTicker() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const items = homeTestimonials;

  useEffect(() => {
    if (items.length < 2) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setFade(false);
      }, 400);
    }, 5500);

    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[index];

  return (
    <section className="es-testimonials" aria-label="Client feedback">
      <div className="container">
        <AnimateIn className="es-testimonials-inner">
          <p className="es-eyebrow es-testimonials-eyebrow">What clients say</p>
          <blockquote className={`es-testimonial-quote ${fade ? 'is-fading' : ''}`}>
            <p>&ldquo;{current.quote}&rdquo;</p>
            <footer>— {current.author}</footer>
          </blockquote>
          <div className="es-testimonial-dots" role="tablist" aria-label="Testimonials">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                className={`es-testimonial-dot ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
