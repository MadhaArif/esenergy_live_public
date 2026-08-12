import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import './App.css';

// Lazy-load secondary pages to optimize initial bundle size
const About = React.lazy(() => import('./pages/About'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Industries = React.lazy(() => import('./pages/Industries'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Insights = React.lazy(() => import('./pages/Insights'));
const Contact = React.lazy(() => import('./pages/Contact'));
const WhyUs = React.lazy(() => import('./pages/WhyUs'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// Premium, visually identical loader fallback to prevent layout flashing
const PageLoader = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0a0f1d',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    gap: '24px'
  }}>
    <div style={{
      border: '2px solid rgba(194, 155, 56, 0.2)',
      borderTopColor: '#c29b38',
      borderLeftColor: '#c29b38',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      animation: 'spin 1s linear infinite'
    }}></div>
    <span style={{
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-main)'
    }}>EN Energy</span>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// ScrollToTop helper to reset scroll position on page transitions
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Global Navbar */}
          <Navbar />

          {/* Global Cart Drawer */}
          <CartDrawer />

          {/* Page Content Routes with dynamic Suspense fallback */}
          <main style={{ flexGrow: 1 }}>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                {/* Fallback route back to home page */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

