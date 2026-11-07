// src/ItemMatkul.jsx
import React from 'react';

function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    <div
      className="minimal-card"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 18px',
        gap: '16px',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: '600',
            color: '#a1a1aa',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '3px 8px',
            borderRadius: '6px',
            letterSpacing: '0.04em',
            flexShrink: 0,
          }}
        >
          {kode}
        </span>

        <span
          style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#f4f4f5',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {nama}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
        <span
          style={{
            fontSize: '12px',
            color: '#71717a',
          }}
        >
          {hari}
        </span>

        <span
          style={{
            fontSize: '11px',
            fontWeight: '500',
            color: '#d4d4d8',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '3px 8px',
            borderRadius: '6px',
          }}
        >
          {sks} SKS
        </span>
      </div>
    </div>
  );
}

export default ItemMatkul;
