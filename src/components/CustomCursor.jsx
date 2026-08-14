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

  // Check if device supports hover/fine pointer
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    const handleMatch = (e) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener('change', handleMatch);
    return () => mediaQuery.removeEventListener('change', handleMatch);
  }, []);

  // Manage active body class to selectively hide native browser cursor
  useEffect(() => {
    if (isMobile || hidden || isOverInput) {
      document.body.classList.remove('custom-cursor-active');
    } else {
      document.body.classList.add('custom-cursor-active');
    }
    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isMobile, hidden, isOverInput]);

  // Development-only transition logs
  useEffect(() => {
    if (import.meta.env.DEV) {
      let resolvedState = 'normal';
      if (dragging) resolvedState = 'dragging';
      else if (flowNode) resolvedState = 'flow-node';
      else if (hovered) resolvedState = 'hovered';
      else if (isOverInput) resolvedState = 'text-input';

      console.log(`[CustomCursor] State changed to: ${resolvedState}`);
    }
  }, [dragging, flowNode, hovered, isOverInput]);

  useEffect(() => {
    if (isMobile) return;

    let mouseFrame;
    let lastTarget = null;

    // The rAF loop should ONLY update cursor position
    const handleMouseMove = (e) => {
      if (mouseFrame) cancelAnimationFrame(mouseFrame);
      mouseFrame = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setHidden(false);
      });
    };

    const handleMouseLeave = () => {
      setHidden(true);
      lastTarget = null;
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Event delegation on document to catch element entries
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || target === lastTarget) return;
      lastTarget = target;

      // 1. Text selection inputs/textareas/editables
      const isTextInput =
        (target.tagName === 'INPUT' && !['button', 'submit', 'reset', 'checkbox', 'radio', 'range'].includes(target.type)) ||
        target.tagName === 'TEXTAREA' ||
        target.contentEditable === 'true' ||
        !!target.closest?.('[contenteditable="true"]');

      if (isTextInput) {
        setHovered(false);
        setFlowNode(false);
        setIsOverInput(true);
        return;
      }

      // 2. Flow-node interactive nodes
      const isFlowNode =
        (target.classList && target.classList.contains('flow-node')) ||
        !!target.closest?.('.flow-node');

      // 3. Explicit interactive elements
      const interactiveTarget = target.closest?.(
        'a, button, [role="button"], [tabindex]:not([tabindex="-1"]), ' +
        'input[type="button"], input[type="submit"], input[type="reset"], input[type="image"], input[type="range"], ' +
        '[role="link"], [role="slider"], .interactive, .clickable, .nav-link, .nav-link-item, .cta-btn, .btn, ' +
        '.whatsapp-float, .faq-trigger, .faq-item-header, .accordion-header, .slider-handle-button, ' +
        '.product-card, .product-card-premium, .project-card, .blog-card, .add-to-cart-btn, ' +
        '.view-details-link, .load-more-btn, .calculator-btn, .slider-btn'
      );

      let isInteractive = !!interactiveTarget;

      // 4. Computed cursor fallback: run only once per new DOM target
      if (!isInteractive) {
        try {
          const computedCursor = window.getComputedStyle(target).cursor;
          if (['pointer', 'ew-resize', 'grab', 'grabbing'].includes(computedCursor)) {
            isInteractive = true;
          }
        } catch (err) {
          // Ignore potential detached DOM node or cross-origin errors
        }
      }

      setHovered(isInteractive);
      setFlowNode(isFlowNode);
      setIsOverInput(false);
    };

    // Global signals from draggable components
    const handleDragStart = () => setDragging(true);
    const handleDragEnd = () => setDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('cursor-dragging-start', handleDragStart);
    window.addEventListener('cursor-dragging-end', handleDragEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('cursor-dragging-start', handleDragStart);
      window.removeEventListener('cursor-dragging-end', handleDragEnd);
      if (mouseFrame) cancelAnimationFrame(mouseFrame);
    };
  }, [isMobile]);

  // Interpolated smooth lag trail effect
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

  // Resolve state classes
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
