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
        clearTimeout(timer);
        setIsPageVisible(false);
        setStatusAktif('Non Aktif');
      } else {
        timer = setTimeout(() => {
          setIsPageVisible(true);
          setStatusAktif(status);
        }, 3000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(timer);
    };
  }, [status]);

  const isOnline = isPageVisible && statusAktif === 'Aktif';

  return (
    <div
      className="minimal-card"
      style={{
        padding: '24px',
        marginBottom: '20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {/* Avatar */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img
            src={fotoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(nama)}&background=27272a&color=fafafa&size=80`}
            alt={`Foto ${nama}`}
            style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'block',
            }}
          />
          {/* Online dot */}
          <span
            title={isOnline ? 'Online / Tab Aktif' : 'Away / Tab Tersembunyi'}
            style={{
              position: 'absolute',
              bottom: '2px',
              right: '2px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: isOnline ? '#10b981' : '#f59e0b',
              border: '2px solid #09090b',
              transition: 'background-color 0.4s ease',
            }}
          />
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: '220px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#fafafa',
                letterSpacing: '-0.01em',
              }}
            >
              {nama}
            </h3>

            {/* Status Pill */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '2px 8px',
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: '500',
                backgroundColor: isOnline ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                color: isOnline ? '#34d399' : '#fbbf24',
                border: `1px solid ${isOnline ? 'rgba(16, 185, 129, 0.25)' : 'rgba(245, 158, 11, 0.25)'}`,
                transition: 'all 0.3s ease',
              }}
            >
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: isOnline ? '#34d399' : '#fbbf24',
                }}
              />
              {statusAktif}
            </span>
          </div>

          {/* Deskripsi / Bio */}
          {deskripsi && (
            <p
              style={{
                fontSize: '13px',
                color: '#a1a1aa',
                lineHeight: '1.6',
                marginBottom: '12px',
                maxWidth: '640px',
              }}
            >
              {deskripsi}
            </p>
          )}

          {/* Metadata Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                color: '#71717a',
              }}
            >
              <span>NPM</span>
              <span
                style={{
                  color: '#e4e4e7',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {npm}
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                color: '#71717a',
              }}
            >
              <span>Kelas</span>
              <span
                style={{
                  color: '#e4e4e7',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {kelas}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KartuProfil;
