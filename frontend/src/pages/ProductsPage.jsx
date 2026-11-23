import { useState } from "react";
import useProducts from "../hooks/useProducts.js";
import Button from "../components/atoms/Button.jsx";
import Spinner from "../components/atoms/Spinner.jsx";
import SearchBar from "../components/molecules/SearchBar.jsx";
import StatusMessage from "../components/molecules/StatusMessage.jsx";
import ProductGrid from "../components/organisms/ProductGrid.jsx";
import ProductFormModal from "../components/organisms/ProductFormModal.jsx";
import DeleteProductModal from "../components/organisms/DeleteProductModal.jsx";

export default function ProductsPage() {
  const { products, loading, error, reload, addProduct, editProduct, deleteProduct } =
    useProducts();
  const [keyword, setKeyword] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  const handleAdd = async (data) => {
    await addProduct(data);
    setShowAdd(false);
  };

  const handleEdit = async (data) => {
    await editProduct({ id: editing.id, ...data });
    setEditing(null);
  };

  const handleDelete = async () => {
    await deleteProduct(deleting.id);
    setDeleting(null);
  };

  return (
    <>
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Produk</h1>
          <p className="mt-1 text-sm text-gray-500">
            Kelola daftar produk dan harga dalam satu tempat.
          </p>
        </div>
        <Button onClick={() => setShowAdd(true)}>+ Tambah Produk</Button>
      </header>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={keyword} onChange={setKeyword} />
        {!loading && !error && (
          <span className="text-sm text-gray-500">{products.length} produk</span>
        )}
      </div>

      <div className="mt-4">
        {loading && <Spinner />}

        {!loading && error && (
          <StatusMessage
            tone="error"
            title="Gagal memuat produk"
            message={error}
            onRetry={reload}
          />
        )}

        {!loading && !error && filtered.length === 0 && (
          <StatusMessage
            message={
              products.length === 0
                ? "Belum ada produk. Klik “Tambah Produk” untuk menambahkan."
                : "Tidak ada produk yang cocok dengan pencarian."
            }
          />
        )}

        {!loading && !error && filtered.length > 0 && (
          <ProductGrid products={filtered} onEdit={setEditing} onDelete={setDeleting} />
        )}
      </div>

      {!loading && !error && (
        <p className="mt-4 text-xs text-gray-500">
          Menampilkan {filtered.length} dari {products.length} produk
        </p>
      )}

      {showAdd && <ProductFormModal onSubmit={handleAdd} onClose={() => setShowAdd(false)} />}

      {editing && (
        <ProductFormModal
          product={editing}
          onSubmit={handleEdit}
          onClose={() => setEditing(null)}
        />
      )}

      {deleting && (
        <DeleteProductModal
          product={deleting}
          onConfirm={handleDelete}
          onClose={() => setDeleting(null)}
        />
      )}
    </>
  );
}
