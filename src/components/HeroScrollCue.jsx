export default function HeroScrollCue() {
  return (
    <a href="#home-content" className="es-hero-scroll-cue" aria-label="Scroll to explore">
      <span className="es-scroll-cue-text">Explore</span>
      <span className="es-scroll-cue-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </span>
    </a>
  );
}
