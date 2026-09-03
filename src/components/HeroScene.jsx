'use client';

export default function HeroScene() {
  return (
    <div className="hero-scene-3d" aria-hidden="true">
      <div className="hero-float-orb hero-float-orb-1" />
      <div className="hero-float-orb hero-float-orb-2" />
      <div className="hero-float-orb hero-float-orb-3" />
      <div className="hero-float-ring" />
      <div className="hero-particle-field">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="hero-particle" style={{ '--i': i }} />
        ))}
      </div>
    </div>
  );
}
