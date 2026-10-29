// src/App.jsx
import React, { useState } from 'react';   // ← tambah useState
import KartuProfil from './KartuProfil';
import BadgeSkill from './BadgeSkill';
import ItemMatkul from './ItemMatkul';
import KartuProyek from './KartuProyek';
import Modal from './Modal';                // ← import Modal
import fotoSaya from './assets/IMG_20260422_081710.jpg';

function App() {
  const [modalOpen, setModalOpen] = useState(false); // ← state modal

  const daftarPraktikum = [
    { id: 101, kode: 'IF211', nama: 'Pemrograman Web (React & Laravel)', sks: 2, hari: 'Selasa' },
    { id: 102, kode: 'IF212', nama: 'Peaktikum Pemograman', sks: 2, hari: 'Senin' },
    { id: 103, kode: 'IF213', nama: 'Praktikum Sistem Berorientasi Objek', sks: 1, hari: 'Selasa' },
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
      deskripsi: 'Aplikasi portal akademik interaktif berbasis SPA untuk memantau jadwal modul, progres praktikum, dan nilai tugas.',
      teknologi: ['React', 'Vite', 'JavaScript', 'CSS3'],
      repoUrl: 'https://github.com/example/praktikum-mahasiswa',
    },
    {
      id: 2,
      judul: 'E-Commerce Apoteker',
      deskripsi: 'Antarmuka toko daring dengan fitur keranjang belanja dinamis, filter kategori produk, dan kalkulasi total harga otomatis.',
      teknologi: ['PHP', 'Laravel', 'JavaScript', 'Docker'],
      repoUrl: 'https://github.com/Dzakydwi/Apoteker',
    },
    {
      id: 3,
      judul: 'TaskFlow: Manajemen Aktivitas & Tugas',
      deskripsi: 'Aplikasi To-Do List modular dengan persistensi data LocalStorage, filter status aktivitas, dan badge prioritas.',
      teknologi: ['React', 'Modular CSS', 'ES6+'],
      repoUrl: 'https://github.com/example/taskflow-app',
    },
    {
      id: 4,
      judul: 'Katalog Cuaca & Prakiraan Terkini',
      deskripsi: 'Dashboard prakiraan cuaca real-time mengonsumsi OpenWeatherMap REST API dengan visualisasi kondisi atmosfer per kota.',
      teknologi: ['React', 'Fetch API', 'Vite'],
      repoUrl: 'https://github.com/example/weather-dashboard',
    },
  ];

  const notifikasiSapaan = () => setModalOpen(true); // ← buka modal

  /* ---- Section heading helper ---- */
  const SectionHeading = ({ icon, title, subtitle }) => (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
        <span style={{
          width: '36px', height: '36px',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.25))',
          border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px',
        }}>{icon}</span>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#f1f5f9',
          letterSpacing: '-0.3px',
        }}>{title}</h2>
      </div>
      {subtitle && (
        <p style={{ fontSize: '13px', color: '#64748b', paddingLeft: '46px' }}>{subtitle}</p>
      )}
      <div style={{
        height: '1px',
        background: 'linear-gradient(to right, rgba(99,102,241,0.5), transparent)',
        marginTop: '12px',
      }} />
    </div>
  );

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 60px' }}>
      {/* ─── CUSTOM GLASS MODAL ─── */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ─── HERO HEADER ─── */}
      <header style={{
        textAlign: 'center',
        padding: '60px 20px 52px',
        position: 'relative',
      }}>
        {/* glow orb */}
        <div style={{
          position: 'absolute', top: '30px', left: '50%',
          transform: 'translateX(-50%)',
          width: '300px', height: '200px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          padding: '6px 16px',
          borderRadius: '999px',
          background: 'rgba(99,102,241,0.12)',
          border: '1px solid rgba(99,102,241,0.35)',
          marginBottom: '20px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#a5b4fc',
          letterSpacing: '0.5px',
        }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#6366f1', boxShadow: '0 0 8px #6366f1' }} />
          LABORATORIUM INFORMATIKA
        </div>

        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: '800',
          letterSpacing: '-1px',
          lineHeight: '1.15',
          marginBottom: '14px',
          background: 'linear-gradient(135deg, #f1f5f9 30%, #a5b4fc 70%, #67e8f9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Praktikum Pemrograman Web
        </h1>

        <p style={{
          fontSize: '15px',
          color: '#64748b',
          maxWidth: '420px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          Modul 1 — Pengenalan Fondasi Arsitektur <strong style={{ color: '#a5b4fc' }}>React JS</strong> & <strong style={{ color: '#67e8f9' }}>Vite</strong>
        </p>
      </header>

      {/* ─── PROFIL ─── */}
      <section style={{ marginBottom: '48px' }}>
        <SectionHeading icon="👤" title="Profil Mahasiswa Praktikan" />
        <KartuProfil
          nama="Dwi Dzaky Wibowo"
          npm="243040011"
          kelas="IF — Praktikum"
          deskripsi="Saya adalah Mahasiswa Informatika Semester 5 angkatan 2024 yang sedang menempuh kuliah di Universitas Pasundan, Fakultas Teknik, Prodi Teknik Informatika"
          status="Aktif"
          fotoUrl={fotoSaya}
        />

        {/* Tugas 1 — BadgeSkill */}
        <div className="glass" style={{ padding: '20px 24px', borderRadius: '16px' }}>
          <p style={{
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#6366f1',
            marginBottom: '14px',
          }}>
            Daftar Keahlian & Keterampilan
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {daftarSkill.map(skill => (
              <BadgeSkill key={skill.id} namaSkill={skill.namaSkill} level={skill.level} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── MATA KULIAH (List Rendering) ─── */}
      <section style={{ marginBottom: '48px' }}>
        <SectionHeading
          icon="📋"
          title="Daftar Rencana Praktikum Semester"
          subtitle="List Rendering menggunakan metode .map() dengan prop key unik"
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

      {/* ─── EVENT BUTTON ─── */}
      <div style={{ textAlign: 'center', margin: '16px 0 56px' }}>
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
            boxShadow: '0 0 24px rgba(99,102,241,0.5)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.7)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,0.5)';
          }}
        >
          ✨ Uji Interaktivitas Event Handler
        </button>
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#475569' }}>
          Klik tombol di atas untuk menguji event handling React
        </p>
      </div>

      {/* ─── PORTOFOLIO (Tugas 3) ─── */}
      <section style={{ marginBottom: '40px' }}>
        <SectionHeading
          icon="🚀"
          title="Showcase Portofolio Mini"
          subtitle="Koleksi proyek frontend dengan arsitektur komponen React modular (Tugas 3)"
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '16px',
        }}>
          {daftarProyek.map(proyek => (
            <KartuProyek
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              repoUrl={proyek.repoUrl}
            />
          ))}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '24px',
        textAlign: 'center',
        marginTop: '40px',
      }}>
        <p style={{ fontSize: '12px', color: '#334155', marginBottom: '6px' }}>
          Built with{' '}
          <span style={{ color: '#61dafb' }}>React</span> +{' '}
          <span style={{ color: '#646cff' }}>Vite</span>
        </p>
        <p style={{ fontSize: '12px', color: '#1e293b' }}>
          Praktikum Pemrograman Web &copy; 2026 — Modul 1
        </p>
      </footer>
    </div>
  );
}

export default App;
