// src/ScrollProgressBar.jsx
import React, { useState, useEffect } from 'react';

function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercentage(progress);
      setShowBackToTop(scrollTop > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── TOP READING PROGRESS BAR ── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3.5px',
          zIndex: 9999,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollPercentage}%`,
            background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
            boxShadow: '0 0 12px rgba(99, 102, 241, 0.8)',
            transition: 'width 0.1s ease-out',
          }}
        />
      </div>

      {/* ── FLOATING BACK TO TOP BUTTON ── */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          title="Kembali ke Atas"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 900,
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(99, 102, 241, 0.45)',
            animation: 'fadeInUp 0.3s ease both',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(99, 102, 241, 0.7)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.45)';
          }}
        >
          ▲
        </button>
      )}
    </>
  );
}

export default ScrollProgressBar;
