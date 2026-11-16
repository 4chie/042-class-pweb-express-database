import Modal from "./Modal.jsx";
import { formatRupiah } from "../data.js";

export default function DeleteModal({ produk, onKonfirmasi, onBatal }) {
  return (
    <Modal onTutup={onBatal}>
      <div className="delete-body">
        <div className="delete-icon" aria-hidden="true">🗑</div>
        <h2 className="modal-title">Hapus Produk?</h2>
        <p className="modal-desc">Produk yang dihapus tidak dapat dikembalikan.</p>

        <div className="delete-info">
          <span className="card-id">ID: {produk.id}</span>
          <strong>{produk.nama}</strong>
          <span className="card-harga">{formatRupiah(produk.harga)}</span>
        </div>
      </div>

      <div className="modal-actions">
        <button className="btn btn-outline" onClick={onBatal}>
          Batal
        </button>
        <button className="btn btn-danger" onClick={onKonfirmasi}>
          Hapus Produk
        </button>
      </div>
    </Modal>
  );
}
