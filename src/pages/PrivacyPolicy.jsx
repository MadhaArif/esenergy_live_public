import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page" style={{ paddingBottom: '80px' }}>
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs paths={[{ label: 'Privacy Policy', url: '/privacy-policy' }]} />
          <h1>Privacy Policy</h1>
          <p>Last updated: August 2026</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            <h3 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '12px' }}>1. Information We Collect</h3>
            <p>
              We collect information that you submit directly to us through our feasibility review forms or email contact channels, including your contact name, phone number, email address, utility bill values, and property specifications.
            </p>

            <h3 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '12px' }}>2. How We Use Information</h3>
            <p>
              We use the collected information solely to assess solar site suitability, prepare structural estimations, and communicate feasibility study results. We do not sell or lease your personal information to third parties.
            </p>

            <h3 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '12px' }}>3. Data Integrity & Security</h3>
            <p>
              We store and process technical parameters inside secure environments. Our team coordinates safety safeguards to protect your transmission information.
            </p>

            <h3 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '12px' }}>4. Changes to This Policy</h3>
            <p>
              We may revise this privacy policy from time to time. The latest version will always be posted here on our website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
