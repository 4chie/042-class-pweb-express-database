import { useState } from "react";
import Modal from "../molecules/Modal.jsx";
import FormField from "../molecules/FormField.jsx";
import Button from "../atoms/Button.jsx";

// Dipakai untuk Tambah Produk (tanpa prop `product`) dan Edit Produk (dengan `product`).
// `onSubmit` bersifat async (memanggil API); error dari server ditampilkan di form.
export default function ProductFormModal({ product, onSubmit, onClose }) {
  const isEdit = Boolean(product);
  const [name, setName] = useState(product ? product.name : "");
  const [price, setPrice] = useState(product ? String(product.price) : "");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = {};
    if (name.trim() === "") found.name = "Nama produk wajib diisi.";
    if (!(Number(price) > 0)) found.price = "Harga harus lebih dari 0.";
    else if (!Number.isInteger(Number(price))) found.price = "Harga harus berupa bilangan bulat.";
    setErrors(found);
    setServerError("");
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    try {
      await onSubmit({ name: name.trim(), price: Number(price) });
    } catch (err) {
      setServerError(err.message);
      setSubmitting(false);
    }
  };

  return (
    <Modal
      title={isEdit ? "Edit Produk" : "Tambah Produk"}
      description={isEdit ? "Perbarui informasi produk yang dipilih." : "Masukkan informasi produk baru."}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} noValidate>
        {isEdit && <p className="mb-2 text-xs text-gray-400">ID: {product.id}</p>}

        <FormField
          label="Nama Produk"
          type="text"
          placeholder="Contoh: Pulpen"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
        <FormField
          label="Harga (Rp)"
          type="number"
          placeholder="Contoh: 5000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          error={errors.price}
          hint="Harga harus lebih dari 0."
        />

        {serverError && (
          <p role="alert" className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
            {serverError}
          </p>
        )}

        <div className="mt-2 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose} disabled={submitting}>
            Batal
          </Button>
          <Button type="submit" disabled={submitting}>
            {submitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Simpan Produk"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
