'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { prefersReducedMotion } from '@/hooks/useInViewRepeat';

const useScrollReveal = (threshold = 0.12) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  style = {},
  variant = 'default',
  stagger = 0,
  as: Tag = 'div',
  ...props
}) => {
  const [ref, isVisible] = useScrollReveal(0.1);
  const variantClass = variant !== 'default' ? `sr-${variant}` : '';
  const cls = `scroll-reveal ${variantClass} ${isVisible ? 'revealed' : ''} ${className}`.trim();

  return (
    <Tag
      ref={ref}
      className={cls}
      style={{ transitionDelay: `${delay + stagger}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
};

const RevealHeading = ({
  children,
  className = '',
  delay = 0,
  wordDelay = 28,
  as: Tag = 'h2',
  headingClassName = '',
  customStyles = {},
  style = {},
  ...props
}) => {
  const [ref, isVisible] = useScrollReveal(0.1);
  const text = typeof children === 'string' ? children : '';

  const words = useMemo(() => {
    if (!text) return [];
    return text.split(' ').filter(Boolean);
  }, [text]);

  if (typeof children !== 'string') {
    return (
      <div
        ref={ref}
        className={`scroll-reveal sr-heading ${isVisible ? 'revealed' : ''} ${className}`.trim()}
        style={{ transitionDelay: `${delay}ms`, ...style }}
        {...props}
      >
        <Tag className={headingClassName} style={customStyles}>{children}</Tag>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal sr-heading-wrap ${isVisible ? 'revealed' : ''} ${className}`.trim()}
      style={style}
      {...props}
    >
      <Tag className={headingClassName} style={{ margin: 0, ...customStyles }}>
        {words.map((word, idx) => (
          <span key={idx} className="sr-word-wrapper">
            <span
              className="sr-word"
              style={{ transitionDelay: `${delay + idx * wordDelay}ms` }}
            >
              {word}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
};

const RevealEyebrow = ({ children, className = '', delay = 0, customStyles = {}, style = {}, ...props }) => {
  const [ref, isVisible] = useScrollReveal(0.1);
  const cls = `scroll-reveal sr-eyebrow ${isVisible ? 'revealed' : ''} ${className}`.trim();
  return (
    <span ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style, ...customStyles }} {...props}>
      {children}
    </span>
  );
};

const RevealParagraph = ({ children, className = '', delay = 0, customStyles = {}, style = {}, ...props }) => {
  const [ref, isVisible] = useScrollReveal(0.1);
  const cls = `scroll-reveal sr-paragraph ${isVisible ? 'revealed' : ''} ${className}`.trim();
  return (
    <p ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style, ...customStyles }} {...props}>
      {children}
    </p>
  );
};

const RevealCard = ({ children, className = '', delay = 0, customStyles = {}, style = {}, ...props }) => {
  const [ref, isVisible] = useScrollReveal(0.08);
  const cls = `scroll-reveal sr-card ${isVisible ? 'revealed' : ''} ${className}`.trim();
  return (
    <div ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style, ...customStyles }} {...props}>
      {children}
    </div>
  );
};

const RevealImage = ({ children, className = '', delay = 0, customStyles = {}, style = {}, ...props }) => {
  const [ref, isVisible] = useScrollReveal(0.1);
  const cls = `scroll-reveal sr-image ${isVisible ? 'revealed' : ''} ${className}`.trim();
  return (
    <div ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style, ...customStyles }} {...props}>
      {children}
    </div>
  );
};

const RevealButton = ({ children, className = '', delay = 0, customStyles = {}, as: Tag = 'div', style = {}, ...props }) => {
  const [ref, isVisible] = useScrollReveal(0.1);
  const cls = `scroll-reveal sr-button ${isVisible ? 'revealed' : ''} ${className}`.trim();
  return (
    <Tag ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style, ...customStyles }} {...props}>
      {children}
    </Tag>
  );
};

export default ScrollReveal;
export { RevealHeading, RevealEyebrow, RevealParagraph, RevealCard, RevealImage, RevealButton };
