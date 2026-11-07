// src/KartuProyek.jsx
import React from 'react';

function KartuProyek({ judul, deskripsi, teknologi, repoUrl }) {
  return (
    <div
      className="minimal-card"
      style={{
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '16px',
        cursor: 'default',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
          <h3
            style={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#fafafa',
              letterSpacing: '-0.01em',
              lineHeight: '1.4',
            }}
          >
            {judul}
          </h3>
        </div>

        <p
          style={{
            fontSize: '13px',
            color: '#a1a1aa',
            lineHeight: '1.6',
            marginBottom: '16px',
          }}
        >
          {deskripsi}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {teknologi.map((tech, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '11px',
                fontWeight: '500',
                padding: '2px 8px',
                borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                color: '#d4d4d8',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '8px 14px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          color: '#e4e4e7',
          textDecoration: 'none',
          fontSize: '12px',
          fontWeight: '500',
          transition: 'all 0.18s ease',
          alignSelf: 'flex-start',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#fafafa';
          e.currentTarget.style.color = '#09090b';
          e.currentTarget.style.borderColor = '#fafafa';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
          e.currentTarget.style.color = '#e4e4e7';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        }}
      >
        <svg height="13" width="13" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9 1.05 1.29.36.43.83.69 1.48.69.4 0 .74-.04 1.01-.1.01.69.01 1.25.01 1.46 0 .21-.15.46-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8z" />
        </svg>
        Repository
      </a>
    </div>
  );
}

export default KartuProyek;
