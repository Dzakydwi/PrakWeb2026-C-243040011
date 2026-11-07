// src/BadgeSkill.jsx
import React from 'react';

const levelConfig = {
  pemula: {
    label: 'Pemula',
    dotColor: '#38bdf8',
    percentage: 45,
  },
  menengah: {
    label: 'Menengah',
    dotColor: '#fbbf24',
    percentage: 75,
  },
  mahir: {
    label: 'Mahir',
    dotColor: '#34d399',
    percentage: 95,
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
        padding: '10px 14px',
        borderRadius: '10px',
        fontSize: '13px',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        transition: 'border-color 0.2s ease, background-color 0.2s ease',
        minWidth: '150px',
        flex: '1 1 150px',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        <span style={{ fontWeight: '500', color: '#f4f4f5', fontSize: '13px' }}>
          {namaSkill}
        </span>
        <span
          style={{
            fontSize: '11px',
            color: '#a1a1aa',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: cfg.dotColor,
            }}
          />
          {cfg.label}
        </span>
      </div>

      {/* Thin subtle progress bar */}
      <div
        style={{
          width: '100%',
          height: '2px',
          borderRadius: '999px',
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${cfg.percentage}%`,
            height: '100%',
            backgroundColor: cfg.dotColor,
            borderRadius: '999px',
            opacity: 0.8,
          }}
        />
      </div>
    </div>
  );
}

export default BadgeSkill;
