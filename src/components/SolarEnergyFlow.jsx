import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const nodeData = {
  sun: {
    title: "SUN",
    subtitle: "PV-00 / SOLAR RADIATION SOURCE",
    desc: "Primary source of solar radiation used for photovoltaic generation."
  },
  array: {
    title: "SOLAR ARRAY",
    subtitle: "PV-01 / PHOTOVOLTAIC GENERATION",
    desc: "Converts available sunlight into DC electrical generation."
  },
  inverter: {
    title: "INVERTER",
    subtitle: "PV-02 / POWER CONVERSION",
    desc: "Converts DC generation into usable AC power."
  },
  battery: {
    title: "BATTERY",
    subtitle: "PV-03 / ENERGY STORAGE",
    desc: "Stores electrical energy for later use in compatible system configurations."
  },
  load: {
    title: "BUILDING LOAD",
    subtitle: "PV-04 / PROPERTY CONSUMPTION",
    desc: "Represents the property's active electrical demand."
  },
  grid: {
    title: "UTILITY GRID",
    subtitle: "PV-05 / GRID CONNECTION",
    desc: "Represents the connected utility network."
  }
};

const defaultData = {
  title: "SYSTEM OVERVIEW",
  subtitle: "PV-EFLOW / TECHNICAL DIAGRAM",
  desc: "Solar generation moves from the photovoltaic array through power conversion and toward the property's electrical load and connected utility network."
};

const SolarEnergyFlow = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const activeInfo = hoveredNode ? nodeData[hoveredNode] : defaultData;

  return (
    <section className="solar-flow-section">
      <ScrollReveal className="container">
        <div className="section-grid">
          {/* Left Column: Typography and Tech Info Panel */}
          <div className="flow-text-col">
            <span className="flow-eyebrow">01 / ENERGY FLOW</span>
            <h2 className="flow-heading">From Sunlight to Usable Energy.</h2>
            <p className="flow-description">
              A simplified view of how a solar installation converts sunlight into usable electrical energy and connects with the building and utility grid.
            </p>

            {/* Premium Technical Info Dashboard */}
            <div className="tech-info-dashboard">
              <div className="dashboard-header">
                <span className="dashboard-dot"></span>
                <span className="dashboard-status-label">{activeInfo.subtitle}</span>
              </div>
              <h3 className="dashboard-node-title">{activeInfo.title}</h3>
              <p className="dashboard-node-desc">{activeInfo.desc}</p>
              <div className="dashboard-decor-lines">
                <span className="decor-line"></span>
                <span className="decor-value">SYS.STAT // OK</span>
              </div>
            </div>

            <span className="flow-disclaimer">
              Illustrative system flow — not a live monitoring system.
            </span>
          </div>

          {/* Right Column: Engineering Flow Diagram (Desktop) */}
          <div className="flow-diagram-col desktop-only-diagram">
            <svg 
              viewBox="0 0 1000 400" 
              className="flow-svg"
              aria-label="Solar Energy Flow Schematic Diagram"
            >
              {/* Pattern Definitions */}
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(194, 155, 56, 0.04)" strokeWidth="1" />
                </pattern>
                <marker 
                  id="arrow-head" 
                  viewBox="0 0 10 10" 
                  refX="6" 
                  refY="5" 
                  markerWidth="5" 
                  markerHeight="5" 
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="var(--accent-gold)" opacity="0.75" />
                </marker>
              </defs>

              {/* Grid Background */}
              <rect width="1000" height="400" fill="url(#grid-pattern)" className="svg-grid-bg" />

              {/* Decorative Engineering Borders */}
              <rect x="10" y="10" width="980" height="380" fill="none" stroke="rgba(194, 155, 56, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
              <text x="25" y="32" className="mono-decor">[SYS.REF: PV-EFLOW-01]</text>
              <text x="975" y="32" className="mono-decor" textAnchor="end">LAT: 33.6844° N // LON: 73.0479° E</text>
              <line x1="10" y1="360" x2="990" y2="360" stroke="rgba(194, 155, 56, 0.1)" strokeWidth="1" />
              <text x="25" y="375" className="mono-decor">EN ENERGY ENGINEERING SCHEMATIC</text>
              <text x="975" y="375" className="mono-decor" textAnchor="end">SCALE: NOT TO SCALE</text>

              {/* Connection Paths */}
              {/* SUN -> ARRAY */}
              <path 
                id="path-sun-array" 
                d="M 100 100 L 300 100" 
                className={`connection-path ${hoveredNode === 'sun' || hoveredNode === 'array' ? 'active' : ''}`}
                markerEnd="url(#arrow-head)"
              />
              {/* ARRAY -> INVERTER */}
              <path 
                id="path-array-inverter" 
                d="M 300 100 L 420 100 L 420 200 L 500 200" 
                className={`connection-path ${hoveredNode === 'array' || hoveredNode === 'inverter' ? 'active' : ''}`}
                markerEnd="url(#arrow-head)"
              />
              {/* INVERTER -> BATTERY */}
              <path 
                id="path-inverter-battery" 
                d="M 500 200 L 500 320" 
                className={`connection-path ${hoveredNode === 'inverter' || hoveredNode === 'battery' ? 'active' : ''}`}
                markerEnd="url(#arrow-head)"
              />
              {/* INVERTER -> BUILDING LOAD */}
              <path 
                id="path-inverter-load" 
                d="M 500 200 L 580 200 L 580 100 L 700 100" 
                className={`connection-path ${hoveredNode === 'inverter' || hoveredNode === 'load' ? 'active' : ''}`}
                markerEnd="url(#arrow-head)"
              />
              {/* INVERTER -> GRID */}
              <path 
                id="path-inverter-grid" 
                d="M 500 200 L 900 200" 
                className={`connection-path ${hoveredNode === 'inverter' || hoveredNode === 'grid' ? 'active' : ''}`}
                markerEnd="url(#arrow-head)"
              />

              {/* Energy Flow Particles */}
              <circle r="3.5" className="flow-particle particle-sun-array">
                <animateMotion dur="3.5s" repeatCount="indefinite">
                  <mpath href="#path-sun-array" />
                </animateMotion>
              </circle>
              <circle r="3.5" className="flow-particle particle-array-inverter">
                <animateMotion dur="4.5s" repeatCount="indefinite">
                  <mpath href="#path-array-inverter" />
                </animateMotion>
              </circle>
              <circle r="3.5" className="flow-particle particle-inverter-battery">
                <animateMotion dur="3s" repeatCount="indefinite">
                  <mpath href="#path-inverter-battery" />
                </animateMotion>
              </circle>
              <circle r="3.5" className="flow-particle particle-inverter-load">
                <animateMotion dur="4.5s" repeatCount="indefinite">
                  <mpath href="#path-inverter-load" />
                </animateMotion>
              </circle>
              <circle r="3.5" className="flow-particle particle-inverter-grid">
                <animateMotion dur="5s" repeatCount="indefinite">
                  <mpath href="#path-inverter-grid" />
                </animateMotion>
              </circle>

              {/* Technical Labels along paths */}
              <text x="200" y="88" className="path-label">SOLAR RADIATION</text>
              <text x="360" y="88" className="path-label">DC GENERATION</text>
              <text x="445" y="270" className="path-label">DC CHARGE</text>
              <text x="640" y="88" className="path-label">AC CONSUMPTION</text>
              <text x="700" y="188" className="path-label">AC EXPORT / BACKFEED</text>

              {/* NODES */}
              {/* 1. SUN */}
              <g 
                className={`flow-node flow-node-sun ${hoveredNode === 'sun' ? 'active' : ''}`}
                transform="translate(100, 100)"
                onMouseEnter={() => setHoveredNode('sun')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('sun')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Sun node. Press enter for details."
              >
                <circle r="35" fill="transparent" className="node-hover-trigger" />
                <circle r="26" className="node-bg" />
                {/* Sun Icon */}
                <circle cx="0" cy="0" r="9" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" />
                <path d="M 0 -14 L 0 -11 M 0 11 L 0 14 M -14 0 L -11 0 M 11 0 L 14 0 M -10 -10 L -8 -8 M 8 8 L 10 10 M -10 10 L -8 8 M 8 -8 L 10 -10" stroke="var(--accent-gold)" strokeWidth="1.5" />
                <text y="48" className="node-label">SUN [PV-00]</text>
              </g>

              {/* 2. SOLAR ARRAY */}
              <g 
                className={`flow-node flow-node-array ${hoveredNode === 'array' ? 'active' : ''}`}
                transform="translate(300, 100)"
                onMouseEnter={() => setHoveredNode('array')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('array')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Solar Array node. Press enter for details."
              >
                <circle r="35" fill="transparent" className="node-hover-trigger" />
                <circle r="26" className="node-bg" />
                {/* Solar Panel Cells Icon */}
                <rect x="-11" y="-11" width="22" height="22" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-11" y1="0" x2="11" y2="0" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="-11" x2="0" y2="11" stroke="currentColor" strokeWidth="1" />
                <line x1="-5.5" y1="-11" x2="-5.5" y2="11" stroke="currentColor" strokeWidth="1" />
                <line x1="5.5" y1="-11" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1" />
                <text y="48" className="node-label">SOLAR ARRAY [PV-01]</text>
              </g>

              {/* 3. INVERTER */}
              <g 
                className={`flow-node flow-node-inverter ${hoveredNode === 'inverter' ? 'active' : ''}`}
                transform="translate(500, 200)"
                onMouseEnter={() => setHoveredNode('inverter')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('inverter')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Inverter node. Press enter for details."
              >
                <circle r="35" fill="transparent" className="node-hover-trigger" />
                <circle r="26" className="node-bg" />
                {/* Inverter Symbol (DC/AC diagonal split) */}
                <rect x="-12" y="-12" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-12" y1="12" x2="12" y2="-12" stroke="currentColor" strokeWidth="1.2" />
                {/* DC terminal line */}
                <line x1="-8" y1="5" x2="-2" y2="5" stroke="currentColor" strokeWidth="1.2" />
                <line x1="-8" y1="7" x2="-2" y2="7" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" />
                {/* AC wave */}
                <path d="M 2,-6 Q 4.5,-9 6,-6 Q 7.5,-3 10,-6" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <text y="48" className="node-label">INVERTER [PV-02]</text>
              </g>

              {/* 4. BATTERY */}
              <g 
                className={`flow-node flow-node-battery ${hoveredNode === 'battery' ? 'active' : ''}`}
                transform="translate(500, 320)"
                onMouseEnter={() => setHoveredNode('battery')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('battery')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Battery Storage node. Press enter for details."
              >
                <circle r="35" fill="transparent" className="node-hover-trigger" />
                <circle r="26" className="node-bg" />
                {/* Battery cells icon */}
                <rect x="-9" y="-11" width="18" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-5" y1="-3" x2="5" y2="-3" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-5" y1="3" x2="5" y2="3" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-2.5" y1="-11" x2="2.5" y2="-11" stroke="currentColor" strokeWidth="2" />
                <text y="48" className="node-label">BATTERY [PV-03]</text>
              </g>

              {/* 5. BUILDING LOAD */}
              <g 
                className={`flow-node flow-node-load ${hoveredNode === 'load' ? 'active' : ''}`}
                transform="translate(700, 100)"
                onMouseEnter={() => setHoveredNode('load')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('load')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Building Load node. Press enter for details."
              >
                <circle r="35" fill="transparent" className="node-hover-trigger" />
                <circle r="26" className="node-bg" />
                {/* Building / Home Icon */}
                <path d="M -12,6 L -12,-3 L 0,-12 L 12,-3 L 12,6 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="-3" y="1" width="6" height="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <text y="48" className="node-label">BUILDING LOAD [PV-04]</text>
              </g>

              {/* 6. UTILITY GRID */}
              <g 
                className={`flow-node flow-node-grid ${hoveredNode === 'grid' ? 'active' : ''}`}
                transform="translate(900, 200)"
                onMouseEnter={() => setHoveredNode('grid')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('grid')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Utility Grid node. Press enter for details."
              >
                <circle r="35" fill="transparent" className="node-hover-trigger" />
                <circle r="26" className="node-bg" />
                {/* Transmission Tower/Grid Icon */}
                <path d="M -12,11 L -5,-11 L 5,-11 L 12,11" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-8" y1="0" x2="8" y2="0" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-10" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-3" y1="-11" x2="0" y2="11" stroke="currentColor" strokeWidth="1.2" />
                <line x1="3" y1="-11" x2="0" y2="11" stroke="currentColor" strokeWidth="1.2" />
                <text y="48" className="node-label">UTILITY GRID [PV-05]</text>
              </g>
            </svg>
          </div>

          {/* Dedicated Mobile Vertical SVG Composition */}
          <div className="flow-diagram-col mobile-only-diagram">
            <svg 
              viewBox="0 0 300 750" 
              className="flow-svg"
              aria-label="Solar Energy Flow Schematic Diagram (Mobile)"
            >
              <defs>
                <pattern id="grid-pattern-m" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(194, 155, 56, 0.04)" strokeWidth="1" />
                </pattern>
                <marker 
                  id="arrow-head-m" 
                  viewBox="0 0 10 10" 
                  refX="6" 
                  refY="5" 
                  markerWidth="5" 
                  markerHeight="5" 
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="var(--accent-gold)" opacity="0.75" />
                </marker>
              </defs>

              <rect width="300" height="750" fill="url(#grid-pattern-m)" className="svg-grid-bg" />
              <rect x="8" y="8" width="284" height="734" fill="none" stroke="rgba(194, 155, 56, 0.1)" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Connection Paths (Mobile Vertical Stack) */}
              <path 
                id="path-m-sun-array" 
                d="M 150 60 L 150 190" 
                className={`connection-path ${hoveredNode === 'sun' || hoveredNode === 'array' ? 'active' : ''}`}
                markerEnd="url(#arrow-head-m)"
              />
              <path 
                id="path-m-array-inverter" 
                d="M 150 190 L 150 320" 
                className={`connection-path ${hoveredNode === 'array' || hoveredNode === 'inverter' ? 'active' : ''}`}
                markerEnd="url(#arrow-head-m)"
              />
              <path 
                id="path-m-inverter-battery" 
                d="M 150 320 L 150 450" 
                className={`connection-path ${hoveredNode === 'inverter' || hoveredNode === 'battery' ? 'active' : ''}`}
                markerEnd="url(#arrow-head-m)"
              />
              <path 
                id="path-m-battery-load" 
                d="M 150 450 L 150 580" 
                className={`connection-path ${hoveredNode === 'battery' || hoveredNode === 'load' ? 'active' : ''}`}
                markerEnd="url(#arrow-head-m)"
              />
              <path 
                id="path-m-load-grid" 
                d="M 150 580 L 150 710" 
                className={`connection-path ${hoveredNode === 'load' || hoveredNode === 'grid' ? 'active' : ''}`}
                markerEnd="url(#arrow-head-m)"
              />

              {/* Particles along vertical paths */}
              <circle r="3.5" className="flow-particle particle-sun-array">
                <animateMotion dur="3.5s" repeatCount="indefinite">
                  <mpath href="#path-m-sun-array" />
                </animateMotion>
              </circle>
              <circle r="3.5" className="flow-particle particle-array-inverter">
                <animateMotion dur="4.5s" repeatCount="indefinite">
                  <mpath href="#path-m-array-inverter" />
                </animateMotion>
              </circle>
              <circle r="3.5" className="flow-particle particle-inverter-battery">
                <animateMotion dur="3s" repeatCount="indefinite">
                  <mpath href="#path-m-inverter-battery" />
                </animateMotion>
              </circle>
              <circle r="3.5" className="flow-particle particle-battery-load">
                <animateMotion dur="4.5s" repeatCount="indefinite">
                  <mpath href="#path-m-battery-load" />
                </animateMotion>
              </circle>
              <circle r="3.5" className="flow-particle particle-load-grid">
                <animateMotion dur="5s" repeatCount="indefinite">
                  <mpath href="#path-m-load-grid" />
                </animateMotion>
              </circle>

              {/* MOBILE NODES */}
              {/* 1. SUN */}
              <g 
                className={`flow-node flow-node-sun ${hoveredNode === 'sun' ? 'active' : ''}`}
                transform="translate(150, 60)"
                onClick={() => setHoveredNode(hoveredNode === 'sun' ? null : 'sun')}
                onMouseEnter={() => setHoveredNode('sun')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('sun')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Sun node."
              >
                <circle r="32" fill="transparent" className="node-hover-trigger" />
                <circle r="24" className="node-bg" />
                <circle cx="0" cy="0" r="8" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" />
                <path d="M 0 -12 L 0 -9 M 0 9 L 0 12 M -12 0 L -9 0 M 9 0 L 12 0 M -8 -8 L -6 -6 M 6 6 L 8 8 M -8 8 L -6 6 M 6 -8 L 8 -6" stroke="var(--accent-gold)" strokeWidth="1.5" />
                <text x="36" y="5" className="node-label-m">SUN [PV-00]</text>
              </g>

              {/* 2. SOLAR ARRAY */}
              <g 
                className={`flow-node flow-node-array ${hoveredNode === 'array' ? 'active' : ''}`}
                transform="translate(150, 190)"
                onClick={() => setHoveredNode(hoveredNode === 'array' ? null : 'array')}
                onMouseEnter={() => setHoveredNode('array')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('array')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Solar Array node."
              >
                <circle r="32" fill="transparent" className="node-hover-trigger" />
                <circle r="24" className="node-bg" />
                <rect x="-10" y="-10" width="20" height="20" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-10" y1="0" x2="10" y2="0" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
                <text x="36" y="5" className="node-label-m">SOLAR ARRAY [PV-01]</text>
              </g>

              {/* 3. INVERTER */}
              <g 
                className={`flow-node flow-node-inverter ${hoveredNode === 'inverter' ? 'active' : ''}`}
                transform="translate(150, 320)"
                onClick={() => setHoveredNode(hoveredNode === 'inverter' ? null : 'inverter')}
                onMouseEnter={() => setHoveredNode('inverter')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('inverter')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Inverter node."
              >
                <circle r="32" fill="transparent" className="node-hover-trigger" />
                <circle r="24" className="node-bg" />
                <rect x="-10" y="-10" width="20" height="20" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-10" y1="10" x2="10" y2="-10" stroke="currentColor" strokeWidth="1" />
                <line x1="-6" y1="4" x2="-2" y2="4" stroke="currentColor" strokeWidth="1" />
                <path d="M 2,-5 Q 4,-7 5,-5 Q 6,-3 8,-5" fill="none" stroke="currentColor" strokeWidth="1" />
                <text x="-36" y="5" className="node-label-m" textAnchor="end">INVERTER [PV-02]</text>
              </g>

              {/* 4. BATTERY */}
              <g 
                className={`flow-node flow-node-battery ${hoveredNode === 'battery' ? 'active' : ''}`}
                transform="translate(150, 450)"
                onClick={() => setHoveredNode(hoveredNode === 'battery' ? null : 'battery')}
                onMouseEnter={() => setHoveredNode('battery')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('battery')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Battery node."
              >
                <circle r="32" fill="transparent" className="node-hover-trigger" />
                <circle r="24" className="node-bg" />
                <rect x="-8" y="-10" width="16" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-4" y1="-3" x2="4" y2="-3" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-4" y1="3" x2="4" y2="3" stroke="currentColor" strokeWidth="1.5" />
                <text x="36" y="5" className="node-label-m">BATTERY [PV-03]</text>
              </g>

              {/* 5. BUILDING LOAD */}
              <g 
                className={`flow-node flow-node-load ${hoveredNode === 'load' ? 'active' : ''}`}
                transform="translate(150, 580)"
                onClick={() => setHoveredNode(hoveredNode === 'load' ? null : 'load')}
                onMouseEnter={() => setHoveredNode('load')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('load')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Building Load node."
              >
                <circle r="32" fill="transparent" className="node-hover-trigger" />
                <circle r="24" className="node-bg" />
                <path d="M -10,5 L -10,-3 L 0,-11 L 10,-3 L 10,5 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <text x="-36" y="5" className="node-label-m" textAnchor="end">BUILDING [PV-04]</text>
              </g>

              {/* 6. UTILITY GRID */}
              <g 
                className={`flow-node flow-node-grid ${hoveredNode === 'grid' ? 'active' : ''}`}
                transform="translate(150, 710)"
                onClick={() => setHoveredNode(hoveredNode === 'grid' ? null : 'grid')}
                onMouseEnter={() => setHoveredNode('grid')}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode('grid')}
                onBlur={() => setHoveredNode(null)}
                tabIndex="0"
                role="button"
                aria-label="Utility Grid node."
              >
                <circle r="32" fill="transparent" className="node-hover-trigger" />
                <circle r="24" className="node-bg" />
                <path d="M -10,10 L -4,-10 L 4,-10 L 10,10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="-7" y1="0" x2="7" y2="0" stroke="currentColor" strokeWidth="1.2" />
                <line x1="-9" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.2" />
                <text x="36" y="5" className="node-label-m">GRID [PV-05]</text>
              </g>
            </svg>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default SolarEnergyFlow;
