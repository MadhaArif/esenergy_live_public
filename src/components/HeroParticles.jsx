export default function HeroParticles() {
  return (
    <div className="es-hero-particles" aria-hidden="true">
      <div className="es-sun-rays" />
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="es-particle"
          style={{
            '--i': i,
            '--x': `${8 + (i * 5.2) % 88}%`,
            '--delay': `${(i * 0.35) % 5}s`,
            '--size': `${3 + (i % 4)}px`,
          }}
        />
      ))}
    </div>
  );
}
