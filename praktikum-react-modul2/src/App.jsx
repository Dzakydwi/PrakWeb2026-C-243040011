import CatatanKeuangan from './CatatanKeuangan';
import { useState, useEffect } from 'react';
import './App.css';
import Kartu from './Kartu';
import Penghitung from './Penghitung';
import FormTugas from './Formtugas';
import ItemTugas from './Itemtugas';

function App() {
  // 1. State utama: membaca data awal dari localStorage
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem('daftar-tugas');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [
      { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
      { id: 2, judul: 'Pelajari useState', selesai: false },
    ];
  });

  // TUGAS 1: State baru untuk menampung pilihan filter ('semua' | 'belum' | 'selesai')
  const [filter, setFilter] = useState('semua');

  // Efek samping (useEffect)
  useEffect(() => {
    console.log('Aplikasi Daftar Tugas siap digunakan!');
  }, []);

  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  useEffect(() => {
    localStorage.setItem('daftar-tugas', JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  // Fungsi-fungsi manipulasi data state
  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }
      return tugas;
    });
    setDaftarTugas(daftarBaru);
  };

  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // TUGAS 2: Fungsi untuk menghapus semua tugas yang statusnya sudah selesai
  const hapusSemuaSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  // TUGAS 1: Memfilter array daftarTugas berdasarkan pilihan state filter
  const tugasTersaring = daftarTugas.filter((tugas) => {
    if (filter === 'belum') return !tugas.selesai;
    if (filter === 'selesai') return tugas.selesai;
    return true; // filter === 'semua'
  });

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  return (
    <div className="wadah">
      <div className="header-wadah">
        <span className="lencana-topik">Modul 2 • React Lanjutan</span>
        <h1 className="judul">Daftar Tugas Praktikum</h1>
        <p className="subjudul">Laboratorium Informatika</p>
      </div>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <div className="ringkasan-bar">
          <p className="ringkasan">
            <strong>{jumlahSelesai}</strong> dari {daftarTugas.length} tugas selesai
          </p>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{
                width: `${daftarTugas.length === 0 ? 0 : Math.round((jumlahSelesai / daftarTugas.length) * 100)}%`,
              }}
            />
          </div>
        </div>

        {/* TUGAS 1: Komponen Tombol Filter dengan className Dinamis */}
        <div className="baris-filter">
          <button
            className={`tombol-filter ${filter === 'semua' ? 'aktif' : ''}`}
            onClick={() => setFilter('semua')}
          >
            Semua ({daftarTugas.length})
          </button>
          <button
            className={`tombol-filter ${filter === 'belum' ? 'aktif' : ''}`}
            onClick={() => setFilter('belum')}
          >
            Belum Selesai ({daftarTugas.length - jumlahSelesai})
          </button>
          <button
            className={`tombol-filter ${filter === 'selesai' ? 'aktif' : ''}`}
            onClick={() => setFilter('selesai')}
          >
            Selesai ({jumlahSelesai})
          </button>
        </div>

        {/* Menampilkan tugas yang sudah disaring */}
        {tugasTersaring.length === 0 ? (
          <p className="kosong">Tidak ada tugas dalam kategori ini.</p>
        ) : (
          <ul className="daftar">
            {tugasTersaring.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}

        {/* TUGAS 2: Conditional rendering tombol Hapus Selesai menggunakan operator && */}
        {jumlahSelesai > 0 && (
          <button
            className="tombol tombol-merah"
            onClick={hapusSemuaSelesai}
            style={{ marginTop: '16px', width: '100%' }}
          >
            Hapus Semua yang Selesai
          </button>
        )}
      </Kartu>
      {/* TUGAS 3: Panggil CatatanKeuangan di LUAR Kartu */}
      <CatatanKeuangan />
    </div>
  );
}

export default App;