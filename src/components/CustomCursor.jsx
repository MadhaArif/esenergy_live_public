import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports hover/fine pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    const handleMatch = (e) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener('change', handleMatch);
    return () => mediaQuery.removeEventListener('change', handleMatch);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let mouseFrame;
    const handleMouseMove = (e) => {
      if (mouseFrame) cancelAnimationFrame(mouseFrame);
      mouseFrame = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setHidden(false);
      });
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Listen for hover states on links/buttons
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      if (mouseFrame) cancelAnimationFrame(mouseFrame);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile || hidden) return;

    let animationFrameId;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile, hidden]);

  if (isMobile || hidden) return null;

  return (
    <>
      <div
        className={`custom-cursor-dot ${hovered ? 'hovered' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-trail ${hovered ? 'hovered' : ''}`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
