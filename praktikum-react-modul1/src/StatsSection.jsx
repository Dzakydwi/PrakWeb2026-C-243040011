// src/StatsSection.jsx
import React from 'react';

function StatsSection({ daftarPraktikum, daftarSkill, daftarProyek }) {
  const totalSKS = daftarPraktikum.reduce((acc, curr) => acc + curr.sks, 0);
  const totalSkill = daftarSkill.length;
  const totalProyek = daftarProyek.length;

  const stats = [
    {
      label: 'Beban SKS Praktikum',
      value: `${totalSKS} SKS`,
      sub: `${daftarPraktikum.length} Mata Kuliah`,
      icon: '⚡',
      color: '#6366f1',
    },
    {
      label: 'Keahlian Dikuasai',
      value: `${totalSkill} Skill`,
      sub: 'Frontend & Backend',
      icon: '🎯',
      color: '#06b6d4',
    },
    {
      label: 'Showcase Proyek',
      value: `${totalProyek} Proyek`,
      sub: 'Repository Terbuka',
      icon: '🚀',
      color: '#8b5cf6',
    },
    {
      label: 'Status Akademik',
      value: 'Aktif',
      sub: 'Informatika Sem. 5',
      icon: '🎓',
      color: '#10b981',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '14px',
        marginBottom: '40px',
      }}
    >
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="glass shine-border"
          style={{
            padding: '18px 20px',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = `0 12px 30px ${item.color}25`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: `${item.color}15`,
              border: `1px solid ${item.color}35`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              flexShrink: 0,
            }}
          >
            {item.icon}
          </div>
          <div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: '800',
                color: '#F1F5F9',
                letterSpacing: '-0.3px',
                lineHeight: '1.2',
              }}
            >
              {item.value}
            </div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '600',
                color: item.color,
                marginTop: '2px',
              }}
            >
              {item.label}
            </div>
            <div style={{ fontSize: '11px', color: '#64748B', marginTop: '1px' }}>
              {item.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsSection;
