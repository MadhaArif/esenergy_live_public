'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FAQAccordion = ({ items = [] }) => {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-accordion-container" aria-label="Frequently Asked Questions">
      {items.map((item, idx) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-btn-${item.id}`;
        return (
          <ScrollReveal 
            key={item.id} 
            delay={idx * 60}
            className={`faq-accordion-item ${isOpen ? 'is-expanded' : ''}`}
          >
            <button
              id={buttonId}
              type="button"
              className="faq-accordion-header"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="faq-item-serial">{item.serial}</span>
              <span className="faq-item-question">{item.question}</span>
              <span className="faq-item-toggle">
                {isOpen ? (
                  <Minus size={16} className="faq-toggle-icon" aria-hidden="true" />
                ) : (
                  <Plus size={16} className="faq-toggle-icon" aria-hidden="true" />
                )}
              </span>
            </button>
            
            <div 
              id={panelId}
              className="faq-accordion-content-panel"
              role="region"
              aria-labelledby={buttonId}
              style={{
                maxHeight: isOpen ? '240px' : '0',
                opacity: isOpen ? '1' : '0',
                visibility: isOpen ? 'visible' : 'hidden'
              }}
            >
              <div className="faq-accordion-content-inner">
                <p className="faq-item-answer">{item.answer}</p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
