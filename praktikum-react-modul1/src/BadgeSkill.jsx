// src/BadgeSkill.jsx
import React from 'react';

const levelConfig = {
  pemula: {
    color: '#06b6d4',
    bg: 'rgba(6, 182, 212, 0.12)',
    border: 'rgba(6, 182, 212, 0.35)',
    label: 'Pemula',
    percentage: 45,
    bars: 1,
  },
  menengah: {
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.35)',
    label: 'Menengah',
    percentage: 75,
    bars: 2,
  },
  mahir: {
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.35)',
    label: 'Mahir',
    percentage: 95,
    bars: 3,
  },
};

function BadgeSkill({ namaSkill, level }) {
  const cfg = levelConfig[level?.toLowerCase()] || levelConfig.pemula;

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '8px 14px',
        borderRadius: '12px',
        fontSize: '13px',
        fontWeight: '500',
        backgroundColor: cfg.bg,
        color: cfg.color,
        border: `1px solid ${cfg.border}`,
        cursor: 'default',
        transition: 'all 0.25s ease',
        userSelect: 'none',
        minWidth: '150px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
        e.currentTarget.style.boxShadow = `0 8px 24px ${cfg.bg}`;
        e.currentTarget.style.borderColor = cfg.color;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.borderColor = cfg.border;
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        {/* Signal bars */}
        <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '14px' }}>
          {[1, 2, 3].map(bar => (
            <div
              key={bar}
              style={{
                width: '3.5px',
                height: `${4 + bar * 3.5}px`,
                borderRadius: '2px',
                backgroundColor: bar <= cfg.bars ? cfg.color : 'rgba(255, 255, 255, 0.12)',
                transition: 'background-color 0.2s',
              }}
            />
          ))}
        </div>

        <span style={{ fontWeight: '600', color: '#F1F5F9', flex: 1, textAlign: 'left', fontSize: '13px' }}>
          {namaSkill}
        </span>

        {/* Level pill */}
        <span
          style={{
            fontSize: '10px',
            fontWeight: '700',
            letterSpacing: '0.6px',
            textTransform: 'uppercase',
            padding: '2px 7px',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: cfg.color,
          }}
        >
          {cfg.label}
        </span>
      </div>

      {/* Mini Progress Bar Line */}
      <div
        style={{
          width: '100%',
          height: '4px',
          borderRadius: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
          marginTop: '2px',
        }}
      >
        <div
          style={{
            width: `${cfg.percentage}%`,
            height: '100%',
            backgroundColor: cfg.color,
            borderRadius: '2px',
            boxShadow: `0 0 6px ${cfg.color}`,
          }}
        />
      </div>
    </div>
  );
}

export default BadgeSkill;
