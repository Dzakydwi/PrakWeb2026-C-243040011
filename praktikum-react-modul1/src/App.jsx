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
  // ─── STATE MANAGEMENT ───
  const [modalOpen, setModalOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState('Semua');
  const [proyekFilter, setProyekFilter] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Data daftar mata kuliah praktikum semester ini (Modul 1 Langkah 6)
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

  // 2. Data daftar keahlian untuk Tugas 1 (BadgeSkill)
  const daftarSkill = [
    { id: 1, namaSkill: 'JavaScript (ES6+)', level: 'Mahir' },
    { id: 2, namaSkill: 'React JS & JSX', level: 'Menengah' },
    { id: 3, namaSkill: 'HTML5 & CSS3', level: 'Mahir' },
    { id: 4, namaSkill: 'Node.js Runtime', level: 'Menengah' },
    { id: 5, namaSkill: 'Git & GitHub', level: 'Mahir' },
    { id: 6, namaSkill: 'PostgreSQL Database', level: 'Pemula' },
  ];

  // 3. Data proyek untuk Tugas 3 (Showcase Portofolio Mini - minimal 4 proyek)
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

  // ─── FILTER LOGIC DENGAN ARRAY .FILTER() ───
  // Filter Skill berdasarkan level
  const filteredSkills = daftarSkill.filter(skill => {
    if (skillFilter === 'Semua') return true;
    return skill.level.toLowerCase() === skillFilter.toLowerCase();
  });

  // Filter Proyek berdasarkan kategori teknologi & pencarian
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

  // Event handler untuk modal kustom
  const notifikasiSapaan = () => setModalOpen(true);

  return (
    <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 20px 60px' }}>
      {/* ─── SCROLL READING PROGRESS & BACK TO TOP ─── */}
      <ScrollProgressBar />

      {/* ─── CUSTOM GLASS MODAL ─── */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ─── HERO HEADER ─── */}
      <header
        style={{
          textAlign: 'center',
          padding: '60px 20px 48px',
          position: 'relative',
        }}
      >
        {/* Glow Orb Background */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '360px',
            height: '220px',
            background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.22) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Badge Lab */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '999px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            marginBottom: '20px',
            fontSize: '12px',
            fontWeight: '600',
            color: '#a5b4fc',
            letterSpacing: '0.6px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#6366f1',
              boxShadow: '0 0 10px #6366f1',
            }}
          />
          LABORATORIUM INFORMATIKA &bull; UNIVERSITAS PASUNDAN
        </div>

        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: '800',
            letterSpacing: '-1px',
            lineHeight: '1.15',
            marginBottom: '14px',
            background: 'linear-gradient(135deg, #f1f5f9 20%, #a5b4fc 65%, #67e8f9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Praktikum Pemrograman Web
        </h1>

        <p
          style={{
            fontSize: '15px',
            color: '#64748b',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}
        >
          Modul 1 &mdash; Fondasi Pengembangan Frontend Modern dengan{' '}
          <strong style={{ color: '#a5b4fc' }}>React JS</strong> &{' '}
          <strong style={{ color: '#67e8f9' }}>Vite</strong>
        </p>
      </header>

      {/* ─── STATISTIK CEPAT (NEW) ─── */}
      <StatsSection
        daftarPraktikum={daftarPraktikum}
        daftarSkill={daftarSkill}
        daftarProyek={daftarProyek}
      />

      {/* ─── BAGIAN PROFIL PRAKTIKAN ─── */}
      <section style={{ marginBottom: '48px' }}>
        <SectionHeading icon="👤" title="Profil Mahasiswa Praktikan" />
        <KartuProfil
          nama="Dwi Dzaky Wibowo"
          npm="243040011"
          kelas="IF — Praktikum"
          deskripsi="Saya adalah Mahasiswa Informatika Semester 5 angkatan 2024 yang sedang menempuh kuliah di Universitas Pasundan, Fakultas Teknik, Prodi Teknik Informatika."
          status="Aktif"
          fotoUrl={fotoSaya}
        />

        {/* ─── TUGAS 1: DAFTAR KEAHLIAN (BADGESKILL) ─── */}
        <div className="glass" style={{ padding: '22px 24px', borderRadius: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#6366f1',
                  marginBottom: '2px',
                }}
              >
                ⚡ Daftar Keahlian & Keterampilan (Tugas 1)
              </p>
              <p style={{ fontSize: '12px', color: '#64748b' }}>
                Tingkat kemahiran dihitung secara proporsional
              </p>
            </div>

            {/* Filter Pill Level Skill */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {['Semua', 'Mahir', 'Menengah', 'Pemula'].map(lvl => {
                const isActive = skillFilter === lvl;
                return (
                  <button
                    key={lvl}
                    onClick={() => setSkillFilter(lvl)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      border: isActive
                        ? '1px solid #6366f1'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: isActive
                        ? 'rgba(99, 102, 241, 0.25)'
                        : 'rgba(255, 255, 255, 0.03)',
                      color: isActive ? '#a5b4fc' : '#64748b',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          </div>

          {/* List of Skills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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

      {/* ─── BAGIAN MATA KULIAH (TUGAS 2: ITEMMATKUL) ─── */}
      <section style={{ marginBottom: '48px' }}>
        <SectionHeading
          icon="📋"
          title="Daftar Rencana Praktikum Semester"
          subtitle="List Rendering deklaratif menggunakan fungsi .map() dengan komponen modular ItemMatkul (Tugas 2)"
        />
        <div style={{ display: 'grid', gap: '10px' }}>
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

      {/* ─── EVENT BUTTON INTERAKTIVITAS ─── */}
      <div style={{ textAlign: 'center', margin: '20px 0 56px' }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            padding: '14px 32px',
            border: 'none',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '0.3px',
            cursor: 'pointer',
            boxShadow: '0 0 24px rgba(99, 102, 241, 0.5)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(99, 102, 241, 0.7)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 0 24px rgba(99, 102, 241, 0.5)';
          }}
        >
          ✨ Uji Interaktivitas Event Handler
        </button>
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#64748b' }}>
          Klik tombol di atas untuk membuka Glassmorphism Modal kustom React
        </p>
      </div>

      {/* ─── BAGIAN SHOWCASE PORTOFOLIO MINI (TUGAS 3) ─── */}
      <section style={{ marginBottom: '40px' }}>
        <SectionHeading
          icon="🚀"
          title="Showcase Portofolio Mini"
          subtitle="Koleksi proyek frontend & backend dengan fitur filter interaktif (Tugas 3)"
        />

        {/* Filter Bar & Search Input */}
        <div
          className="glass"
          style={{
            padding: '16px 20px',
            borderRadius: '14px',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {allCategories.map(cat => {
                const isActive = proyekFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setProyekFilter(cat)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      border: isActive
                        ? '1px solid #6366f1'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: isActive
                        ? 'rgba(99, 102, 241, 0.25)'
                        : 'rgba(255, 255, 255, 0.03)',
                      color: isActive ? '#a5b4fc' : '#94a3b8',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Counter */}
            <span style={{ fontSize: '12px', color: '#64748b' }}>
              Menampilkan <strong style={{ color: '#a5b4fc' }}>{filteredProyek.length}</strong>{' '}
              dari {daftarProyek.length} proyek
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
                fontSize: '14px',
                color: '#64748b',
              }}
            >
              🔍
            </span>
            <input
              type="text"
              placeholder="Cari proyek berdasarkan judul, deskripsi, atau teknologi..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 36px 9px 36px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                color: '#F1F5F9',
                fontSize: '13px',
                outline: 'none',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#6366f1';
                e.target.style.boxShadow = '0 0 12px rgba(99, 102, 241, 0.3)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
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
                  color: '#94a3b8',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProyek.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '16px',
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
          /* Empty State */
          <div
            className="glass"
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              borderRadius: '16px',
            }}
          >
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>🔎</div>
            <h4 style={{ color: '#f1f5f9', fontSize: '16px', marginBottom: '6px' }}>
              Tidak ada proyek yang sesuai
            </h4>
            <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '16px' }}>
              Coba cari kata kunci lain atau reset filter kategori ke "Semua"
            </p>
            <button
              onClick={() => {
                setProyekFilter('Semua');
                setSearchQuery('');
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                border: '1px solid #6366f1',
                color: '#a5b4fc',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Reset Filter
            </button>
          </div>
        )}
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '28px',
          textAlign: 'center',
          marginTop: '48px',
        }}
      >
        <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '6px' }}>
          Dikembangkan menggunakan <span style={{ color: '#61dafb' }}>React 19</span> +{' '}
          <span style={{ color: '#646cff' }}>Vite</span> dengan Arsitektur Komponen Modular
        </p>
        <p style={{ fontSize: '12px', color: '#475569' }}>
          Praktikum Pemrograman Web &copy; 2026 &bull; Modul 1
        </p>
      </footer>
    </div>
  );
}

export default App;
