// src/App.jsx
import React, { useState } from 'react';
import KartuProfil from './KartuProfil';
import BadgeSkill from './BadgeSkill';
import ItemMatkul from './ItemMatkul';
import KartuProyek from './KartuProyek';
import Modal from './Modal';
import SectionHeading from './SectionHeading';
import StatsSection from './StatsSection';
import ScrollProgressBar from './ScrollProgressBar';
import fotoSaya from './assets/IMG_20260422_081710.jpg';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState('Semua');
  const [proyekFilter, setProyekFilter] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const daftarPraktikum = [
    {
      id: 101,
      kode: 'IF211',
      nama: 'Pemrograman Web (React & Laravel)',
      sks: 2,
      hari: 'Selasa',
    },
    {
      id: 102,
      kode: 'IF212',
      nama: 'Praktikum Pemrograman',
      sks: 2,
      hari: 'Senin',
    },
    {
      id: 103,
      kode: 'IF213',
      nama: 'Praktikum Sistem Berorientasi Objek',
      sks: 1,
      hari: 'Selasa',
    },
  ];

  const daftarSkill = [
    { id: 1, namaSkill: 'JavaScript (ES6+)', level: 'Mahir' },
    { id: 2, namaSkill: 'React JS & JSX', level: 'Menengah' },
    { id: 3, namaSkill: 'HTML5 & CSS3', level: 'Mahir' },
    { id: 4, namaSkill: 'Node.js Runtime', level: 'Menengah' },
    { id: 5, namaSkill: 'Git & GitHub', level: 'Mahir' },
    { id: 6, namaSkill: 'PostgreSQL Database', level: 'Pemula' },
  ];

  const daftarProyek = [
    {
      id: 1,
      judul: 'Sistem Informasi Praktikum Mahasiswa',
      deskripsi:
        'Aplikasi portal akademik interaktif berbasis SPA untuk memantau jadwal modul, progres praktikum, dan nilai tugas.',
      teknologi: ['React', 'Vite', 'JavaScript', 'CSS3'],
      repoUrl: 'https://github.com/example/praktikum-mahasiswa',
    },
    {
      id: 2,
      judul: 'E-Commerce Apoteker',
      deskripsi:
        'Antarmuka toko daring dengan fitur keranjang belanja dinamis, filter kategori produk, dan kalkulasi total harga otomatis.',
      teknologi: ['PHP', 'Laravel', 'JavaScript', 'Docker'],
      repoUrl: 'https://github.com/Dzakydwi/Apoteker',
    },
    {
      id: 3,
      judul: 'TaskFlow: Manajemen Aktivitas & Tugas',
      deskripsi:
        'Aplikasi To-Do List modular dengan persistensi data LocalStorage, filter status aktivitas, dan badge prioritas.',
      teknologi: ['React', 'Modular CSS', 'ES6+'],
      repoUrl: 'https://github.com/example/taskflow-app',
    },
    {
      id: 4,
      judul: 'Katalog Cuaca & Prakiraan Terkini',
      deskripsi:
        'Dashboard prakiraan cuaca real-time mengonsumsi OpenWeatherMap REST API dengan visualisasi kondisi atmosfer per kota.',
      teknologi: ['React', 'Fetch API', 'Vite'],
      repoUrl: 'https://github.com/example/weather-dashboard',
    },
  ];

  // Filter Skill
  const filteredSkills = daftarSkill.filter(skill => {
    if (skillFilter === 'Semua') return true;
    return skill.level.toLowerCase() === skillFilter.toLowerCase();
  });

  // Filter Proyek
  const allCategories = ['Semua', 'React', 'Laravel', 'Vite', 'JavaScript', 'Docker'];

  const filteredProyek = daftarProyek.filter(proyek => {
    const matchCategory =
      proyekFilter === 'Semua' || proyek.teknologi.includes(proyekFilter);
    const matchSearch =
      proyek.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proyek.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proyek.teknologi.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 20px 60px' }}>
      {/* Scroll indicator & Back-to-Top */}
      <ScrollProgressBar />

      {/* Modal Dialog */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Header Minimalis */}
      <header
        style={{
          padding: '52px 0 36px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#a1a1aa',
            marginBottom: '14px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
            }}
          />
          Universitas Pasundan &bull; Teknik Informatika
        </div>

        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            lineHeight: '1.25',
            color: '#fafafa',
            marginBottom: '8px',
          }}
        >
          Praktikum Pemrograman Web
        </h1>

        <p
          style={{
            fontSize: '14px',
            color: '#71717a',
            lineHeight: '1.6',
          }}
        >
          Modul 1 &mdash; Fondasi Pengembangan Frontend Modern dengan React JS & Vite
        </p>
      </header>

      {/* KPI Stats */}
      <StatsSection
        daftarPraktikum={daftarPraktikum}
        daftarSkill={daftarSkill}
        daftarProyek={daftarProyek}
      />

      {/* Bagian 1: Profil Mahasiswa */}
      <section style={{ marginBottom: '40px' }}>
        <SectionHeading title="Profil Mahasiswa" subtitle="Data praktikan dan status perkuliahan aktif" />
        <KartuProfil
          nama="Dwi Dzaky Wibowo"
          npm="243040011"
          kelas="IF — Praktikum"
          deskripsi="Mahasiswa Informatika Semester 5 angkatan 2024 di Universitas Pasundan, Fakultas Teknik, Program Studi Teknik Informatika."
          status="Aktif"
          fotoUrl={fotoSaya}
        />

        {/* Keahlian & Keterampilan (Tugas 1) */}
        <div
          className="minimal-card"
          style={{
            padding: '18px 20px',
            marginTop: '14px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '14px',
            }}
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#fafafa' }}>
                Keahlian & Keterampilan
              </div>
              <div style={{ fontSize: '12px', color: '#71717a' }}>
                Tugas 1 &mdash; List rendering level kompetensi
              </div>
            </div>

            <div style={{ display: 'flex', gap: '6px' }}>
              {['Semua', 'Mahir', 'Menengah', 'Pemula'].map(lvl => {
                const isActive = skillFilter === lvl;
                return (
                  <button
                    key={lvl}
                    onClick={() => setSkillFilter(lvl)}
                    className={`btn-minimal ${isActive ? 'btn-minimal-active' : ''}`}
                    style={{ padding: '3px 9px', fontSize: '11px' }}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {filteredSkills.map(skill => (
              <BadgeSkill
                key={skill.id}
                namaSkill={skill.namaSkill}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bagian 2: Rencana Praktikum (Tugas 2) */}
      <section style={{ marginBottom: '40px' }}>
        <SectionHeading
          title="Rencana Praktikum Semester"
          subtitle="Tugas 2 — List Rendering komponen modular ItemMatkul menggunakan .map()"
        />
        <div style={{ display: 'grid', gap: '8px' }}>
          {daftarPraktikum.map(matkul => (
            <ItemMatkul
              key={matkul.id}
              kode={matkul.kode}
              nama={matkul.nama}
              sks={matkul.sks}
              hari={matkul.hari}
            />
          ))}
        </div>
      </section>

      {/* Interaktivitas Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '16px 20px',
          borderRadius: '10px',
          border: '1px dashed rgba(255, 255, 255, 0.12)',
          marginBottom: '40px',
        }}
      >
        <div>
          <div style={{ fontSize: '13px', fontWeight: '500', color: '#fafafa' }}>
            Pengujian Event Handler
          </div>
          <div style={{ fontSize: '12px', color: '#71717a' }}>
            Uji interaktivitas state & modal React
          </div>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="btn-minimal"
          style={{
            backgroundColor: '#fafafa',
            color: '#09090b',
            borderColor: '#fafafa',
            fontWeight: '600',
          }}
        >
          Buka Dialog Modal &rarr;
        </button>
      </div>

      {/* Bagian 3: Showcase Portofolio Mini (Tugas 3) */}
      <section style={{ marginBottom: '40px' }}>
        <SectionHeading
          title="Portofolio Proyek"
          subtitle="Tugas 3 — Showcase proyek mini dengan pencarian dan filter kategori"
        />

        {/* Filter & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {allCategories.map(cat => {
                const isActive = proyekFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setProyekFilter(cat)}
                    className={`btn-minimal ${isActive ? 'btn-minimal-active' : ''}`}
                    style={{ padding: '5px 11px', fontSize: '12px' }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <span style={{ fontSize: '12px', color: '#71717a' }}>
              {filteredProyek.length} dari {daftarProyek.length} proyek
            </span>
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#71717a',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Cari berdasarkan judul, deskripsi, atau teknologi..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 36px 9px 34px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                color: '#fafafa',
                fontSize: '13px',
                outline: 'none',
                transition: 'border-color 0.15s ease',
              }}
              onFocus={e => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#71717a',
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* List Card Proyek */}
        {filteredProyek.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '12px',
            }}
          >
            {filteredProyek.map(proyek => (
              <KartuProyek
                key={proyek.id}
                judul={proyek.judul}
                deskripsi={proyek.deskripsi}
                teknologi={proyek.teknologi}
                repoUrl={proyek.repoUrl}
              />
            ))}
          </div>
        ) : (
          <div
            className="minimal-card"
            style={{
              padding: '40px 20px',
              textAlign: 'center',
            }}
          >
            <p style={{ color: '#fafafa', fontSize: '14px', marginBottom: '4px', fontWeight: '500' }}>
              Tidak ada proyek yang sesuai
            </p>
            <p style={{ color: '#71717a', fontSize: '12px', marginBottom: '14px' }}>
              Coba sesuaikan kata kunci atau ubah filter kategori
            </p>
            <button
              onClick={() => {
                setProyekFilter('Semua');
                setSearchQuery('');
              }}
              className="btn-minimal"
              style={{ fontSize: '12px' }}
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </section>

      {/* Footer Minimalis */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          color: '#71717a',
          fontSize: '12px',
        }}
      >
        <div>
          Praktikum Pemrograman Web &bull; Modul 1
        </div>
        <div>
          React 19 &bull; Vite &bull; Dwi Dzaky Wibowo (243040011)
        </div>
      </footer>
    </div>
  );
}

export default App;
