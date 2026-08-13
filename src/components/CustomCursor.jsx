import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [flowNode, setFlowNode] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [isOverInput, setIsOverInput] = useState(false);

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

    // Listen for hover states on links/buttons and inputs
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isLink =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest?.('a') ||
        target.closest?.('button') ||
        (target.classList && target.classList.contains('interactive'));

      const isFlowNode =
        (target.classList && target.classList.contains('flow-node')) ||
        target.closest?.('.flow-node');

      const isTextInput =
        (target.tagName === 'INPUT' && !['button', 'submit', 'reset', 'checkbox', 'radio'].includes(target.type)) ||
        target.tagName === 'TEXTAREA' ||
        target.contentEditable === 'true' ||
        target.closest?.('[contenteditable="true"]');

      setHovered(!!isLink);
      setFlowNode(!!isFlowNode);
      setIsOverInput(!!isTextInput);
    };

    // Global signals from draggable components
    const handleDragStart = () => setDragging(true);
    const handleDragEnd = () => setDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('cursor-dragging-start', handleDragStart);
    window.addEventListener('cursor-dragging-end', handleDragEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('cursor-dragging-start', handleDragStart);
      window.removeEventListener('cursor-dragging-end', handleDragEnd);
      if (mouseFrame) cancelAnimationFrame(mouseFrame);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile || hidden || isOverInput) return;

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
  }, [position, isMobile, hidden, isOverInput]);

  if (isMobile || hidden || isOverInput) return null;

  const dotClasses = [
    'custom-cursor-dot',
    dragging ? 'dragging' : '',
    (!dragging && flowNode) ? 'flow-node' : '',
    (!dragging && !flowNode && hovered) ? 'hovered' : '',
  ].filter(Boolean).join(' ');

  const pointerClasses = [
    'custom-cursor-pointer-svg',
    dragging ? 'dragging' : '',
    (!dragging && flowNode) ? 'flow-node' : '',
    (!dragging && !flowNode && hovered) ? 'hovered' : '',
  ].filter(Boolean).join(' ');

  const trailClasses = [
    'custom-cursor-trail',
    dragging ? 'dragging' : '',
    (!dragging && flowNode) ? 'flow-node' : '',
    (!dragging && !flowNode && hovered) ? 'hovered' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <div
        className={dotClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <svg
        className={pointerClasses}
        width="11"
        height="16"
        viewBox="0 0 11 16"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <path d="M0,0 L0,11 L2.8,8.2 L6.3,13.7 L7.7,12.7 L4.2,7.2 L8,7.2 Z" />
      </svg>
      <div
        className={trailClasses}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
