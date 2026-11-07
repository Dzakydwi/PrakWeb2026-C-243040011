// src/Modal.jsx
import React, { useEffect } from 'react';

function Modal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        padding: '20px',
        animation: 'fadeIn 0.2s ease forwards',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#121215',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '14px',
          padding: '32px',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'left',
          position: 'relative',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            background: 'none',
            border: 'none',
            color: '#71717a',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#fafafa'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#71717a'; }}
        >
          ✕
        </button>

        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#34d399',
              backgroundColor: 'rgba(52, 211, 153, 0.1)',
              border: '1px solid rgba(52, 211, 153, 0.2)',
              padding: '3px 8px',
              borderRadius: '4px',
            }}
          >
            Modul 1 &bull; Status Selesai
          </span>
        </div>

        <h3
          style={{
            fontSize: '18px',
            fontWeight: '600',
            letterSpacing: '-0.01em',
            marginBottom: '10px',
            color: '#fafafa',
          }}
        >
          Praktikum Pemrograman Web
        </h3>

        <p
          style={{
            fontSize: '13px',
            color: '#a1a1aa',
            lineHeight: '1.6',
            marginBottom: '24px',
          }}
        >
          Fondasi arsitektur React JS berhasil diimplementasikan: komponen modular, props, list rendering, conditional styling, dan event handling stateful.
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{
              width: '100%',
              padding: '10px 16px',
              borderRadius: '8px',
              backgroundColor: '#fafafa',
              color: '#09090b',
              border: '1px solid #fafafa',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'opacity 0.15s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            Tutup Dialog
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
