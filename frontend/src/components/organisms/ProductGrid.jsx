import ProductCard from "../molecules/ProductCard.jsx";

export default function ProductGrid({ products, onEdit, onDelete }) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </section>
  );
}
