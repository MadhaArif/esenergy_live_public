'use client';

import React, { useState } from 'react';
import { projectsData } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import Card from '../components/Card';
import { X, Check } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProjectDetail, setActiveProjectDetail] = useState(null);

  // Filter projects list
  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  const filterTabStyle = (isActive) => ({
    padding: '10px 20px',
    borderRadius: '4px',
    border: '1px solid var(--border-color)',
    backgroundColor: isActive ? 'var(--accent-color)' : 'var(--bg-primary)',
    color: isActive ? 'var(--bg-primary)' : 'var(--text-secondary)',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)',
  });

  return (
    <div className="projects-page">
      {/* 1. Page Hero */}
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs paths={[{ label: 'Projects', url: '/projects' }]} />
          <h1>Completed Solar Projects & References</h1>
          <p>
            Browse our project portfolio showing actual Net Metering approvals and energy infrastructure deployments.
          </p>
        </div>
      </div>

      {/* 2. Project Categories & Grid */}
      <section>
        <div className="container">
          {/* Categories Selector */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <button onClick={() => { setSelectedFilter('all'); setActiveProjectDetail(null); }} style={filterTabStyle(selectedFilter === 'all')}>All Projects</button>
            <button onClick={() => { setSelectedFilter('residential'); setActiveProjectDetail(null); }} style={filterTabStyle(selectedFilter === 'residential')}>Residential</button>
            <button onClick={() => { setSelectedFilter('commercial'); setActiveProjectDetail(null); }} style={filterTabStyle(selectedFilter === 'commercial')}>Commercial</button>
            <button onClick={() => { setSelectedFilter('industrial'); setActiveProjectDetail(null); }} style={filterTabStyle(selectedFilter === 'industrial')}>Industrial</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* 3. Project Detail / Case Study Structure */}
            {activeProjectDetail && (
              <ScrollReveal className="project-detail-container-reveal" style={{ padding: '30px', border: '2px solid var(--accent-light)', borderRadius: '8px', backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
                <button 
                  onClick={() => setActiveProjectDetail(null)}
                  style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
                >
                  <X size={24} />
                </button>

                <span className="wireframe-badge">DETAILED CASE STUDY STRUCTURE</span>

                <div className="grid grid-2" style={{ marginTop: '20px', gap: '30px' }}>
                  <div>
                    <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>{activeProjectDetail.title}</h2>
                    <p style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>
                      Location: {activeProjectDetail.location} • Year: {activeProjectDetail.year}
                    </p>

                    <div style={{ margin: '20px 0' }}>
                      <h4 style={{ fontSize: '15px', marginBottom: '6px' }}>Project Background / Client Requirement:</h4>
                      <p style={{ fontSize: '14px' }}>
                        This project was initiated to offset rising peak tariff consumption rates. The client requested a secure, grid-compliant rooftop structure capable of matching their daily operational cycles.
                      </p>
                    </div>

                    <div style={{ margin: '20px 0' }}>
                      <h4 style={{ fontSize: '15px', marginBottom: '6px' }}>Engineered Structural Approach:</h4>
                      <p style={{ fontSize: '14px' }}>
                        Our engineering team surveyed the roof space and configured a localized structure design. We incorporated high-yield tier-1 panels, smart string inverters, and full DC surge combiners for system safety.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '24px', borderRadius: '6px', border: '1px solid var(--border-color)', marginBottom: '20px' }}>
                      <h4 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                        Project Metadata Summary:
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <strong>Client Profile:</strong>
                          <span>{activeProjectDetail.client}</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <strong>System Capacity:</strong>
                          <span>{activeProjectDetail.capacity}</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <strong>Feeder Net-Metering Status:</strong>
                          <span>Approved & Active</span>
                        </li>
                      </ul>
                    </div>

                    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '24px', borderRadius: '6px', border: '1px dashed var(--accent-light)' }}>
                      <h4 style={{ fontSize: '14px', color: 'var(--text-primary)', marginBottom: '12px' }}>
                        Verified Results Metrics:
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                        {activeProjectDetail.results.map((res, i) => (
                          <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <Check size={16} style={{ color: 'var(--accent-light)', flexShrink: 0, marginTop: '2px' }} />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Project Listing Grid */}
            <div>
              <SectionHeader
                title={selectedFilter === 'all' ? 'All Installations' : `${selectedFilter.toUpperCase()} Deployments`}
                description="Click 'Case Study Structure' on any project card below to load the full architectural implementation flow above."
              />
              <ScrollReveal delay={100} className="grid grid-3">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={(p) => {
                      setActiveProjectDetail(p);
                      setTimeout(() => {
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }, 100);
                    }}
                  />
                ))}
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <span className="wireframe-badge">SOLAR FEASIBILITY</span>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Plan your installation with our engineers</h2>
          <p style={{ marginBottom: '24px' }}>Let us examine your electrical load profiles and structural drawings to compute a preliminary system layout.</p>
          <Button to="/contact#contact-form" variant="primary">Submit System Requirements</Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
