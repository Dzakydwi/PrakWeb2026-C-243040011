// src/Modal.jsx
import React, { useEffect } from 'react';

function Modal({ isOpen, onClose }) {
  // Tutup modal saat tekan tombol Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Jika modal tidak terbuka, render null (tidak tampil)
  if (!isOpen) return null;

  return (
    /* ── OVERLAY ── */
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: 'fadeInOverlay 0.2s ease both',
      }}
    >
      {/* ── MODAL BOX ── */}
      <div
        onClick={(e) => e.stopPropagation()} // Cegah overlay klik menutup saat klik isi modal
        style={{
          /* Glassmorphism */
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 8px 64px rgba(99, 102, 241, 0.35), 0 0 0 1px rgba(99,102,241,0.15)',
          borderRadius: '20px',
          padding: '36px 40px',
          width: '100%',
          maxWidth: '420px',
          textAlign: 'center',
          position: 'relative',
          animation: 'popIn 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275) both',
        }}
      >
        {/* Icon */}
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))',
          border: '1px solid rgba(99,102,241,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          margin: '0 auto 20px',
          boxShadow: '0 0 30px rgba(99,102,241,0.3)',
        }}>
          🎉
        </div>

        {/* Judul */}
        <h3 style={{
          fontSize: '20px',
          fontWeight: '700',
          letterSpacing: '-0.3px',
          marginBottom: '12px',
          background: 'linear-gradient(135deg, #f1f5f9 30%, #a5b4fc 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Selamat, Modul 1 Berhasil!
        </h3>

        {/* Pesan */}
        <p style={{
          fontSize: '14px',
          color: '#94a3b8',
          lineHeight: '1.7',
          marginBottom: '28px',
        }}>
          Anda telah berhasil menguasai fondasi arsitektur{' '}
          <strong style={{ color: '#a5b4fc' }}>React JS</strong> — mulai dari
          komponen, props, list rendering, hingga event handling. 🚀
        </p>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(99,102,241,0.4), transparent)',
          marginBottom: '24px',
        }} />

        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '13px',
            border: 'none',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            letterSpacing: '0.3px',
            boxShadow: '0 0 24px rgba(99,102,241,0.5)',
            transition: 'transform 0.18s ease, box-shadow 0.18s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.03)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.75)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.5)';
          }}
        >
          Oke, Mengerti! ✨
        </button>

        {/* Hint: tekan Esc */}
        <p style={{ marginTop: '12px', fontSize: '11px', color: '#334155' }}>
          Tekan <kbd style={{
            padding: '1px 6px',
            borderRadius: '4px',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '11px',
            color: '#64748b',
          }}>Esc</kbd> untuk menutup
        </p>

        {/* Tombol X pojok kanan */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '30px',
            height: '30px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#64748b',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(239,68,68,0.15)';
            e.currentTarget.style.color = '#ef4444';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#64748b';
          }}
        >
          ✕
        </button>
      </div>

      {/* Animasi inline */}
      <style>{`
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Modal;
