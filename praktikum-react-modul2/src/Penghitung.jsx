import { useState } from 'react';
import Kartu from './Kartu';

function Penghitung() {
  // jumlah = nilai saat ini, setJumlah = fungsi untuk mengubahnya, 0 = nilai awal
  const [jumlah, setJumlah] = useState(0);

  const tambah = () => {
    setJumlah(jumlah + 1);
  };

  const ulangi = () => {
    setJumlah(0);
  };

  return (
    <Kartu judul="Penghitung Klik">
      <div className="penghitung-box">
        <span className="penghitung-angka">{jumlah}</span>
        <span className="penghitung-label">kali tombol telah diklik</span>
      </div>

      {/* Conditional rendering: pesan ini hanya muncul jika jumlah >= 5 */}
      {jumlah >= 5 && (
        <div className="pesan-apresiasi">
          <span>Wah, kamu rajin sekali mengklik!</span>
        </div>
      )}

      <div className="baris">
        <button className="tombol" onClick={tambah}>
          Klik Saya
        </button>
        <button className="tombol tombol-sekunder" onClick={ulangi}>
          Ulangi
        </button>
      </div>
    </Kartu>
  );
}

export default Penghitung;
