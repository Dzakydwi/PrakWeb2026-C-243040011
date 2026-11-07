// src/SectionHeading.jsx
import React from 'react';

function SectionHeading({ icon, title, subtitle }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
        {icon && (
          <span
            style={{
              fontSize: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '26px',
              height: '26px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {icon}
          </span>
        )}
        <h2
          style={{
            fontSize: '17px',
            fontWeight: '600',
            color: '#fafafa',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h2>
      </div>

      {subtitle && (
        <p style={{ fontSize: '13px', color: '#71717a', lineHeight: '1.5', marginTop: '2px' }}>
          {subtitle}
        </p>
      )}

      <div
        style={{
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          marginTop: '14px',
        }}
      />
    </div>
  );
}

export default SectionHeading;
