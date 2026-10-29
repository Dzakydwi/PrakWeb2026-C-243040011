// src/KartuProyek.jsx
import React from 'react';

const techColors = {
  React: '#61dafb',
  Vite: '#646cff',
  JavaScript: '#f7df1e',
  PHP: '#4F5D95',
  Laravel: '#FF2D20',
  Docker: '#2496ED',
  CSS3: '#264de4',
  'Context API': '#8b5cf6',
  'Fetch API': '#06b6d4',
  'ES6+': '#f59e0b',
  'Modular CSS': '#ec4899',
  'Node.js': '#68a063',
  PostgreSQL: '#336791',
};

function KartuProyek({ judul, deskripsi, teknologi, repoUrl }) {
  return (
    <div
      className="glass shine-border"
      style={{
        padding: '24px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '16px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 24px 64px rgba(99,102,241,0.2)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Header */}
      <div>
        {/* Folder icon */}
        <div style={{
          width: '42px',
          height: '46px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))',
          border: '1px solid rgba(99,102,241,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          marginBottom: '14px',
        }}>
          🗂️
        </div>

        <h3 style={{
          fontSize: '16px',
          fontWeight: '700',
          color: '#f1f5f9',
          marginBottom: '10px',
          lineHeight: '1.3',
          letterSpacing: '-0.2px',
        }}>
          {judul}
        </h3>

        <p style={{
          fontSize: '13px',
          color: '#64748b',
          lineHeight: '1.65',
          marginBottom: '16px',
        }}>
          {deskripsi}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
          {teknologi.map((tech, idx) => {
            const color = techColors[tech] || '#94a3b8';
            return (
              <span key={idx} style={{
                fontSize: '11px',
                fontWeight: '600',
                padding: '3px 9px',
                borderRadius: '6px',
                backgroundColor: `${color}18`,
                color: color,
                border: `1px solid ${color}30`,
                letterSpacing: '0.3px',
              }}>
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      {/* CTA Button */}
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '11px 16px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))',
          border: '1px solid rgba(99,102,241,0.35)',
          color: '#a5b4fc',
          textDecoration: 'none',
          fontSize: '13px',
          fontWeight: '600',
          transition: 'background 0.25s ease, color 0.25s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.border = '1px solid #6366f1';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))';
          e.currentTarget.style.color = '#a5b4fc';
          e.currentTarget.style.border = '1px solid rgba(99,102,241,0.35)';
        }}
      >
        <svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9 1.05 1.29.36.43.83.69 1.48.69.4 0 .74-.04 1.01-.1.01.69.01 1.25.01 1.46 0 .21-.15.46-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8z" />
        </svg>
        Lihat Repository
      </a>
    </div>
  );
}

export default KartuProyek;
