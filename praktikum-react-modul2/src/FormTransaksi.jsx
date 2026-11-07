import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('pemasukan');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keterangan.trim() || !nominal || Number(nominal) <= 0) return;

    // Mengubah nilai input nominal menjadi angka (Number) sebelum dikirim
    onTambah({
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis: jenis,
    });

    setKeterangan('');
    setNominal('');
  };

  const tidakValid = !keterangan.trim() || !nominal || Number(nominal) <= 0;

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="baris">
        <input
          className="input"
          type="text"
          placeholder="Keterangan (misal: Uang Saku)"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Nominal (Rp)"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
          min="1"
        />
      </div>
      <div className="baris">
        <select
          className="input"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="pemasukan">Pemasukan (+)</option>
          <option value="pengeluaran">Pengeluaran (-)</option>
        </select>
        <button className="tombol" type="submit" disabled={tidakValid}>
          Tambah Transaksi
        </button>
      </div>
    </form>
  );
}

export default FormTransaksi;
