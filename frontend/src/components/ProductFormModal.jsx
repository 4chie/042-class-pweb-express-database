import { useState } from "react";
import Modal from "./Modal.jsx";

// Dipakai untuk pop-up Tambah Produk (tanpa prop `produk`)
// dan Edit Produk (dengan prop `produk` berisi data yang dipilih).
export default function ProductFormModal({ produk, onSimpan, onBatal }) {
  const modeEdit = Boolean(produk);
  const [nama, setNama] = useState(produk ? produk.nama : "");
  const [harga, setHarga] = useState(produk ? String(produk.harga) : "");
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const galat = {};
    if (nama.trim() === "") galat.nama = "Nama produk wajib diisi.";
    if (!(Number(harga) > 0)) galat.harga = "Harga harus lebih dari 0.";
    setError(galat);
    if (Object.keys(galat).length > 0) return;

    onSimpan({ nama: nama.trim(), harga: Number(harga) });
  };

  return (
    <Modal
      judul={modeEdit ? "Edit Produk" : "Tambah Produk"}
      deskripsi={
        modeEdit ? "Perbarui informasi produk yang dipilih." : "Masukkan informasi produk baru."
      }
      onTutup={onBatal}
    >
      <form onSubmit={handleSubmit} noValidate>
        {modeEdit && <p className="modal-id">ID: {produk.id}</p>}

        <label className="field">
          <span>Nama Produk</span>
          <input
            type="text"
            placeholder="Contoh: Pulpen"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          {error.nama && <small className="field-error">{error.nama}</small>}
        </label>

        <label className="field">
          <span>Harga (Rp)</span>
          <input
            type="number"
            placeholder="Contoh: 5000"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
          {error.harga ? (
            <small className="field-error">{error.harga}</small>
          ) : (
            <small className="field-hint">Harga harus lebih dari 0.</small>
          )}
        </label>

        <div className="modal-actions">
          <button type="button" className="btn btn-outline" onClick={onBatal}>
            Batal
          </button>
          <button type="submit" className="btn btn-primary">
            {modeEdit ? "Simpan Perubahan" : "Simpan Produk"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
