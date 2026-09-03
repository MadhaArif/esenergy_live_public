'use client';

import React from 'react';
import Link from 'next/link';
import { getSectorImage } from '@/lib/images';

const ProjectCard = ({ project, onSelect }) => {
  const getProjectImage = (cat) => getSectorImage(cat);

  return (
    <div className="project-editorial-card">
      <div className="project-card-image-wrap">
        <img 
          src={getProjectImage(project.category)} 
          alt={project.title} 
          className="project-card-image"
          loading="lazy"
          decoding="async"
        />
        <span className="project-card-badge">
          {project.category.toUpperCase()} PROJECT
        </span>
      </div>

      <div className="project-card-content">
        <div className="project-card-header-block">
          <span className="project-card-location">{project.location}</span>
          <h3 className="project-card-title">{project.title}</h3>
        </div>
        
        <p className="project-card-brief">{project.brief}</p>
        
        <div className="project-card-focus-section">
          <span className="project-card-focus-title">Project Focus</span>
          <div className="project-card-divider-gold"></div>
          <ul className="project-card-focus-list">
            {(project.focus || project.results).map((item, idx) => (
              <li key={idx} className="project-card-focus-item">
                <span className="project-focus-bullet">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-card-footer">
          {onSelect ? (
            <button onClick={() => onSelect(project)} className="project-card-action-btn">
              <span>Case Study Structure</span>
              <span className="project-cta-arrow">→</span>
            </button>
          ) : (
            <Link href="/projects" className="project-card-link-cta">
              <span>View Project</span>
              <span className="project-cta-arrow">→</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
