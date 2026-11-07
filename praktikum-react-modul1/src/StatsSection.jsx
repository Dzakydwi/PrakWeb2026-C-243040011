// src/StatsSection.jsx
import React from 'react';

function StatsSection({ daftarPraktikum, daftarSkill, daftarProyek }) {
  const totalSKS = daftarPraktikum.reduce((acc, curr) => acc + curr.sks, 0);
  const totalSkill = daftarSkill.length;
  const totalProyek = daftarProyek.length;

  const stats = [
    {
      label: 'Beban SKS',
      value: `${totalSKS} SKS`,
      sub: `${daftarPraktikum.length} Praktikum`,
    },
    {
      label: 'Keahlian',
      value: `${totalSkill} Skill`,
      sub: 'Frontend & Backend',
    },
    {
      label: 'Portofolio',
      value: `${totalProyek} Proyek`,
      sub: 'Repository Publik',
    },
    {
      label: 'Status Kuliah',
      value: 'Semester 5',
      sub: 'Informatika Aktif',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
        gap: '12px',
        marginBottom: '36px',
      }}
    >
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="minimal-card"
          style={{
            padding: '16px 18px',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: '500',
              color: '#71717a',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            {item.label}
          </div>
          <div
            style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#fafafa',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              marginBottom: '4px',
            }}
          >
            {item.value}
          </div>
          <div
            style={{
              fontSize: '12px',
              color: '#a1a1aa',
            }}
          >
            {item.sub}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsSection;
