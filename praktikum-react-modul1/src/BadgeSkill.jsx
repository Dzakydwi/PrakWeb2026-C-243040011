// src/BadgeSkill.jsx
import React from 'react';

const levelConfig = {
  pemula: {
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    border: 'rgba(6,182,212,0.3)',
    dot: '#06b6d4',
    label: 'Pemula',
    bars: 1,
  },
  menengah: {
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.3)',
    dot: '#f59e0b',
    label: 'Menengah',
    bars: 2,
  },
  mahir: {
    color: '#10b981',
    bg: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.3)',
    dot: '#10b981',
    label: 'Mahir',
    bars: 3,
  },
};

function BadgeSkill({ namaSkill, level }) {
  const cfg = levelConfig[level?.toLowerCase()] || levelConfig.pemula;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '7px 14px',
        borderRadius: '10px',
        fontSize: '13px',
        fontWeight: '500',
        backgroundColor: cfg.bg,
        color: cfg.color,
        border: `1px solid ${cfg.border}`,
        cursor: 'default',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        userSelect: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
        e.currentTarget.style.boxShadow = `0 6px 20px ${cfg.bg}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Level bars */}
      <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end' }}>
        {[1, 2, 3].map(bar => (
          <div
            key={bar}
            style={{
              width: '3px',
              height: `${2 + bar * 3}px`,
              borderRadius: '2px',
              backgroundColor: bar <= cfg.bars ? cfg.color : 'rgba(255,255,255,0.15)',
              transition: 'background-color 0.2s',
            }}
          />
        ))}
      </div>

      <span>{namaSkill}</span>

      {/* Level pill */}
      <span style={{
        fontSize: '10px',
        fontWeight: '700',
        letterSpacing: '0.8px',
        textTransform: 'uppercase',
        padding: '2px 7px',
        borderRadius: '6px',
        backgroundColor: 'rgba(255,255,255,0.06)',
        color: cfg.color,
      }}>
        {cfg.label}
      </span>
    </div>
  );
}

export default BadgeSkill;
