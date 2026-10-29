// src/ItemMatkul.jsx
import React from 'react';

const hariColor = {
  Senin: '#6366f1',
  Selasa: '#8b5cf6',
  Rabu: '#06b6d4',
  Kamis: '#10b981',
  Jumat: '#f59e0b',
  Sabtu: '#ef4444',
};

function ItemMatkul({ kode, nama, sks, hari }) {
  const color = hariColor[hari] || '#6366f1';

  return (
    <div
      className="glass shine-border"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 20px',
        borderRadius: '14px',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateX(6px)';
        e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Color indicator */}
      <div style={{
        width: '4px',
        height: '48px',
        borderRadius: '4px',
        background: color,
        flexShrink: 0,
        boxShadow: `0 0 12px ${color}60`,
      }} />

      {/* Icon */}
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        backgroundColor: `${color}18`,
        border: `1px solid ${color}30`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        flexShrink: 0,
      }}>
        📚
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '1px',
            color: color,
            backgroundColor: `${color}15`,
            padding: '2px 8px',
            borderRadius: '6px',
          }}>
            {kode}
          </span>
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#e2e8f0',
          lineHeight: '1.4',
        }}>
          {nama}
        </div>
      </div>

      {/* Right: Day & SKS */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', flexShrink: 0 }}>
        <span style={{
          fontSize: '12px',
          color: '#64748b',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          📅 {hari}
        </span>
        <span style={{
          fontSize: '13px',
          fontWeight: '700',
          color: '#f1f5f9',
          backgroundColor: 'rgba(255,255,255,0.06)',
          padding: '3px 10px',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          {sks} SKS
        </span>
      </div>
    </div>
  );
}

export default ItemMatkul;
