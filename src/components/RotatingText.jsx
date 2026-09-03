'use client';

import { useEffect, useState } from 'react';

export default function RotatingText({ words, interval = 2800, className = '' }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!words?.length || words.length < 2) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setAnimating(false);
      }, 320);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const word = words[index] ?? words[0];

  return (
    <span className={`es-rotating-text ${className}`.trim()} aria-live="polite">
      <span className={`es-rotating-word ${animating ? 'is-out' : 'is-in'}`}>{word}</span>
    </span>
  );
}
