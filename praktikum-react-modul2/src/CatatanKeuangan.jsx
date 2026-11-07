import { useState, useEffect } from 'react';
import Kartu from './Kartu';
import FormTransaksi from './FormTransaksi';
import ItemTransaksi from './ItemTransaksi';

function CatatanKeuangan() {
  // Read state awal dari localStorage
  const [transaksi, setTransaksi] = useState(() => {
    const tersimpan = localStorage.getItem('catatan-keuangan');
    return tersimpan ? JSON.parse(tersimpan) : [];
  });

  // Sync ke localStorage tiap kali transaksi berubah
  useEffect(() => {
    localStorage.setItem('catatan-keuangan', JSON.stringify(transaksi));
  }, [transaksi]);

  const tambahTransaksi = (dataBaru) => {
    const itemBaru = { id: Date.now(), ...dataBaru };
    setTransaksi([...transaksi, itemBaru]);
  };

  const hapusTransaksi = (id) => {
    setTransaksi(transaksi.filter((t) => t.id !== id));
  };

  // Hitung total saldo otomatis dari state
  const totalSaldo = transaksi.reduce((acc, t) => {
    return t.jenis === 'pemasukan' ? acc + t.nominal : acc - t.nominal;
  }, 0);

  const totalPemasukan = transaksi
    .filter((t) => t.jenis === 'pemasukan')
    .reduce((acc, t) => acc + t.nominal, 0);

  const totalPengeluaran = transaksi
    .filter((t) => t.jenis === 'pengeluaran')
    .reduce((acc, t) => acc + t.nominal, 0);

  return (
    <div className="bagian-keuangan">
      <div className="keuangan-header">
        <span className="lencana-topik">Tugas 3</span>
        <h2 className="judul-keuangan">Catatan Keuangan Mini</h2>
        <p className="subjudul-keuangan">Kelola riwayat pemasukan dan pengeluaran</p>
      </div>

      <div className="kotak-ringkasan-saldo">
        <div className="saldo-label">Total Saldo Saat Ini</div>
        <div className={`saldo-nilai ${totalSaldo >= 0 ? 'teks-hijau' : 'teks-merah'}`}>
          Rp {totalSaldo.toLocaleString('id-ID')}
        </div>
        <div className="saldo-meta">
          <div className="meta-item">
            <span className="meta-dot hijau"></span>
            <span>Masuk: Rp {totalPemasukan.toLocaleString('id-ID')}</span>
          </div>
          <div className="meta-item">
            <span className="meta-dot merah"></span>
            <span>Keluar: Rp {totalPengeluaran.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>

      <Kartu judul="Form Transaksi">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Daftar Transaksi">
        {/* Conditional rendering pesan jika transaksi kosong */}
        {transaksi.length === 0 ? (
          <p className="kosong">Belum ada transaksi. Yuk catat keuanganmu!</p>
        ) : (
          <ul className="daftar">
            {transaksi.map((item) => (
              <ItemTransaksi key={item.id} item={item} onHapus={hapusTransaksi} />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default CatatanKeuangan;
