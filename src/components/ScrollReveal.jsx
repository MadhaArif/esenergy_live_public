import React, { useEffect, useRef, useState, useMemo } from 'react';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const useIntersectOnce = (threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIsIntersecting(true);
      return;
    }
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isIntersecting];
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
  const [ref, isIntersecting] = useIntersectOnce(0.1);

  const variantClass = variant !== 'default' ? `sr-${variant}` : '';
  const cls = `scroll-reveal ${variantClass} ${isIntersecting ? 'revealed' : ''} ${className}`.trim();

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
  wordDelay = 60,
  as: Tag = 'h2',
  headingClassName = '',
  customStyles = {},
  style = {},
  ...props
}) => {
  const [ref, isIntersecting] = useIntersectOnce(0.12);
  const text = typeof children === 'string' ? children : '';

  const words = useMemo(() => {
    if (!text) return [];
    return text.split(' ').filter(Boolean);
  }, [text]);

  if (typeof children !== 'string') {
    return (
      <div ref={ref} className={`scroll-reveal sr-heading ${isIntersecting ? 'revealed' : ''} ${className}`.trim()}
        style={{ transitionDelay: `${delay}ms`, ...style }}
        {...props}
      >
        <Tag className={headingClassName} style={customStyles}>{children}</Tag>
      </div>
    );
  }

  return (
    <div ref={ref} className={`scroll-reveal sr-heading-wrap ${isIntersecting ? 'revealed' : ''} ${className}`.trim()} style={style} {...props}>
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
  const [ref, isIntersecting] = useIntersectOnce(0.1);
  const cls = `scroll-reveal sr-eyebrow ${isIntersecting ? 'revealed' : ''} ${className}`.trim();
  return (
    <span ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style, ...customStyles }} {...props}>
      {children}
    </span>
  );
};

const RevealParagraph = ({ children, className = '', delay = 0, customStyles = {}, style = {}, ...props }) => {
  const [ref, isIntersecting] = useIntersectOnce(0.1);
  const cls = `scroll-reveal sr-paragraph ${isIntersecting ? 'revealed' : ''} ${className}`.trim();
  return (
    <p ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style, ...customStyles }} {...props}>
      {children}
    </p>
  );
};

const RevealCard = ({ children, className = '', delay = 0, customStyles = {}, style = {}, ...props }) => {
  const [ref, isIntersecting] = useIntersectOnce(0.08);
  const cls = `scroll-reveal sr-card ${isIntersecting ? 'revealed' : ''} ${className}`.trim();
  return (
    <div ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style, ...customStyles }} {...props}>
      {children}
    </div>
  );
};

const RevealImage = ({ children, className = '', delay = 0, customStyles = {}, style = {}, ...props }) => {
  const [ref, isIntersecting] = useIntersectOnce(0.1);
  const cls = `scroll-reveal sr-image ${isIntersecting ? 'revealed' : ''} ${className}`.trim();
  return (
    <div ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style, ...customStyles }} {...props}>
      {children}
    </div>
  );
};

const RevealButton = ({ children, className = '', delay = 0, customStyles = {}, as: Tag = 'div', style = {}, ...props }) => {
  const [ref, isIntersecting] = useIntersectOnce(0.1);
  const cls = `scroll-reveal sr-button ${isIntersecting ? 'revealed' : ''} ${className}`.trim();
  return (
    <Tag ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style, ...customStyles }} {...props}>
      {children}
    </Tag>
  );
};

export default ScrollReveal;
export { RevealHeading, RevealEyebrow, RevealParagraph, RevealCard, RevealImage, RevealButton };
