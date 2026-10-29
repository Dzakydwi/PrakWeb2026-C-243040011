// src/KartuProfil.jsx
import React, { useState, useEffect } from 'react';

function KartuProfil({ nama, npm, kelas, deskripsi, status, fotoUrl }) {
  // 'Aktif' saat tab terbuka, 'Non Aktif' saat tab tersembunyi
  const [statusAktif, setStatusAktif] = useState(status);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    let timer;
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Tab disembunyikan → langsung Non Aktif
        clearTimeout(timer);
        setIsPageVisible(false);
        setStatusAktif('Non Aktif');
      } else {
        // Tab kembali aktif → tunggu 2 detik dulu supaya perubahan terlihat
        timer = setTimeout(() => {
          setIsPageVisible(true);
          setStatusAktif(status);
        }, 6000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(timer);
    };
  }, [status]);

  return (
    <div
      className="glass shine-border fade-in-up"
      style={{
        padding: '28px',
        marginBottom: '24px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(99,102,241,0.2)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
        {/* Avatar */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
              padding: '3px',
              animation: 'pulse-glow 3s ease-in-out infinite',
            }}
          >
            <img
              src={fotoUrl || 'https://ui-avatars.com/api/?name=' + nama + '&background=6366f1&color=fff&size=88'}
              alt={`Foto ${nama}`}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #0f0f1a',
              }}
            />
          </div>
          {/* Online dot — ikut status otomatis */}
          <div style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            width: '16px',
            height: '16px',
            backgroundColor: isPageVisible ? '#10b981' : '#f59e0b',
            borderRadius: '50%',
            border: '2px solid #0f0f1a',
            transition: 'background-color 0.9s ease',
          }} />
        </div>

        {/* Info */}
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#f1f5f9',
            marginBottom: '6px',
            letterSpacing: '-0.3px',
          }}>
            {nama}
          </h3>

          {/* Deskripsi / Bio */}
          {deskripsi && (
            <p style={{
              fontSize: '13px',
              color: '#64748b',
              lineHeight: '1.6',
              marginBottom: '10px',
            }}>
              {deskripsi}
            </p>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '12px' }}>
            {[
              { icon: '🎓', label: 'NPM', value: npm },
              { icon: '🏫', label: 'Kelas', value: kelas },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '14px' }}>{item.icon}</span>
                <span style={{ fontSize: '13px', color: '#64748b' }}>{item.label}:</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#94a3b8' }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Status Badge */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 14px',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.5px',
            backgroundColor: statusAktif === 'Aktif' ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)',
            color: statusAktif === 'Aktif' ? '#10b981' : '#f59e0b',
            border: `1px solid ${statusAktif === 'Aktif' ? 'rgba(16,185,129,0.3)' : 'rgba(245,158,11,0.3)'}`,
            transition: 'all 0.4s ease',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: statusAktif === 'Aktif' ? '#10b981' : '#f59e0b',
            }} />
            Mahasiswa {statusAktif}
          </span>
        </div>
      </div>
    </div>
  );
}

export default KartuProfil;
