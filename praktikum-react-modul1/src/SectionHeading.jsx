// src/SectionHeading.jsx
import React from 'react';

function SectionHeading({ icon, title, subtitle }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
        <span
          style={{
            width: '38px',
            height: '38px',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.25))',
            border: '1px solid rgba(99,102,241,0.35)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(99,102,241,0.15)',
          }}
        >
          {icon}
        </span>
        <h2
          style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#f1f5f9',
            letterSpacing: '-0.3px',
          }}
        >
          {title}
        </h2>
      </div>

      {subtitle && (
        <p style={{ fontSize: '13px', color: '#64748b', paddingLeft: '48px', lineHeight: '1.5' }}>
          {subtitle}
        </p>
      )}

      <div
        style={{
          height: '1px',
          background: 'linear-gradient(to right, rgba(99,102,241,0.5), rgba(139,92,246,0.2), transparent)',
          marginTop: '12px',
        }}
      />
    </div>
  );
}

export default SectionHeading;
