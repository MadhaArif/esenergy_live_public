import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const Terms = () => {
  return (
    <div className="terms-page" style={{ paddingBottom: '80px' }}>
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs paths={[{ label: 'Terms of Service', url: '/terms' }]} />
          <h1>Terms of Service</h1>
          <p>Last updated: August 2026</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            <h3 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '12px' }}>1. Terms of Use</h3>
            <p>
              By accessing this website, you agree to comply with these terms of service and all applicable laws. If you do not agree, you are prohibited from using this site.
            </p>

            <h3 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '12px' }}>2. Technical Estimations & Feasibility</h3>
            <p>
              Any energy offset estimations, system layouts, or calculations provided by our online tools (including the Solar Feasibility Calculator) are preliminary simulations and estimates only. They do not constitute official binding engineering guarantees or formal contracts.
            </p>

            <h3 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '12px' }}>3. Proprietary Rights</h3>
            <p>
              The visual layouts, custom SVG blueprints, single-line schematics, content copy, and logos on this website are the proprietary property of EN Energy and are protected under copyright and trademark laws.
            </p>

            <h3 style={{ color: 'var(--text-primary)', marginTop: '30px', marginBottom: '12px' }}>4. Disclaimer</h3>
            <p>
              The materials on this website are provided on an 'as is' basis. EN Energy makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties of merchantability or fitness for a particular purpose.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
