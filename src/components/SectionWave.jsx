export default function SectionWave({ variant = 'light' }) {
  return (
    <div className={`es-section-wave es-section-wave--${variant}`} aria-hidden="true">
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none">
        <path
          className="es-wave-path"
          d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z"
        />
      </svg>
    </div>
  );
}
