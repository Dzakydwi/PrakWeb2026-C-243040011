function ItemTransaksi({ item, onHapus }) {
  const isPemasukan = item.jenis === 'pemasukan';

  return (
    <li className="item item-transaksi">
      <div className="item-transaksi-info">
        <span className={`badge-jenis ${isPemasukan ? 'badge-masuk' : 'badge-keluar'}`}>
          {isPemasukan ? 'Masuk' : 'Keluar'}
        </span>
        <span className="item-keterangan">{item.keterangan}</span>
      </div>
      <div className="item-transaksi-kanan">
        <strong className={isPemasukan ? 'teks-hijau' : 'teks-merah'}>
          {isPemasukan ? '+' : '-'} Rp {item.nominal.toLocaleString('id-ID')}
        </strong>
        <button
          className="tombol tombol-merah tombol-kecil"
          onClick={() => onHapus(item.id)}
        >
          Hapus
        </button>
      </div>
    </li>
  );
}

export default ItemTransaksi;
