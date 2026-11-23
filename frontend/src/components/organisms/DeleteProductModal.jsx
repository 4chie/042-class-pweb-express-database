import { useState } from "react";
import Modal from "../molecules/Modal.jsx";
import Button from "../atoms/Button.jsx";
import { formatRupiah } from "../../utils/format.js";

export default function DeleteProductModal({ product, onConfirm, onClose }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = async () => {
    setSubmitting(true);
    setError("");
    try {
      await onConfirm();
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className="text-center">
        <div
          aria-hidden="true"
          className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-100"
        >
          🗑
        </div>
        <h2 className="text-lg font-bold">Hapus Produk?</h2>
        <p className="mb-4 mt-1 text-sm text-gray-500">
          Produk yang dihapus tidak dapat dikembalikan.
        </p>
      </div>

      <div className="mb-3 flex flex-col rounded-lg border border-gray-200 px-3 py-2">
        <span className="text-xs text-gray-400">ID: {product.id}</span>
        <strong>{product.name}</strong>
        <span className="font-bold text-blue-700">{formatRupiah(product.price)}</span>
      </div>

      {error && (
        <p role="alert" className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </p>
      )}

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onClose} disabled={submitting}>
          Batal
        </Button>
        <Button variant="danger" onClick={handleConfirm} disabled={submitting}>
          {submitting ? "Menghapus..." : "Hapus Produk"}
        </Button>
      </div>
    </Modal>
  );
}
