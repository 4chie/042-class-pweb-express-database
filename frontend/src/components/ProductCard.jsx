import { formatRupiah } from "../data.js";

export default function ProductCard({ produk, onEdit, onHapus }) {
  return (
    <article className="card">
      <span className="card-id">ID: {produk.id}</span>
      <h3 className="card-nama">{produk.nama}</h3>
      <p className="card-harga">{formatRupiah(produk.harga)}</p>
      <div className="card-actions">
        <button className="btn btn-outline" onClick={() => onEdit(produk)}>
          Edit
        </button>
        <button className="btn btn-danger-outline" onClick={() => onHapus(produk)}>
          Hapus
        </button>
      </div>
    </article>
  );
}
