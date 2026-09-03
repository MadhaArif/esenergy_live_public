'use client';

import Link from 'next/link';
import { projectsData } from '@/data';
import { getSectorImage } from '@/lib/images';
import AnimateIn from './AnimateIn';
import TiltCard from './TiltCard';

const SIZE_MAP = {
  residential: '15 kW',
  commercial: '120 kW',
  industrial: '500 kW',
};

export default function FeaturedProjectsStrip() {
  const featured = projectsData.slice(0, 4);

  return (
    <section className="es-featured-projects">
      <div className="container">
        <AnimateIn className="es-section-head" variant="right">
          <p className="es-eyebrow">Featured projects</p>
          <h2 className="es-section-title">Real installations across Pakistan</h2>
          <p className="es-section-desc">
            Selected residential, commercial, and industrial deployments — engineered for local conditions.
          </p>
        </AnimateIn>

        <div className="es-project-grid">
          {featured.map((project, i) => (
            <AnimateIn key={project.id} delay={i * 80} className="es-project-animate" variant="up">
              <TiltCard as="article" className="es-project-card" intensity={8}>
                <div className="es-project-img-wrap">
                  <img
                    src={getSectorImage(project.category)}
                    alt={project.title}
                    className="es-project-img"
                    loading="lazy"
                  />
                  <span className="es-project-size">
                    {SIZE_MAP[project.category] || project.capacity}
                  </span>
                </div>
                <div className="es-project-body">
                  <span className="es-project-meta">{project.location}</span>
                  <h3 className="es-project-title">{project.title}</h3>
                  <p className="es-project-brief">{project.brief}</p>
                  <Link href="/projects" className="es-project-link">
                    View details →
                  </Link>
                </div>
              </TiltCard>
            </AnimateIn>
          ))}
        </div>

        <div className="es-section-footer">
          <Link href="/projects" className="es-btn-outline">
            Browse all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
