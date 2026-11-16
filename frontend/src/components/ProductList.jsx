import ProductCard from "./ProductCard.jsx";

export default function ProductList({ daftar, onEdit, onHapus }) {
  if (daftar.length === 0) {
    return <p className="empty">Tidak ada produk yang ditemukan.</p>;
  }

  return (
    <section className="grid">
      {daftar.map((p) => (
        <ProductCard key={p.id} produk={p} onEdit={onEdit} onHapus={onHapus} />
      ))}
    </section>
  );
}
