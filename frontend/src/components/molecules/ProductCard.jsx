import { Link } from "react-router-dom";
import Button from "../atoms/Button.jsx";
import { formatRupiah } from "../../utils/format.js";

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <article className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <span className="text-xs text-gray-400">ID: {product.id}</span>
      <h3 className="mt-1 text-base font-bold">
        <Link to={`/products/${product.id}`} className="hover:text-blue-700 hover:underline">
          {product.name}
        </Link>
      </h3>
      <p className="font-bold text-blue-700">{formatRupiah(product.price)}</p>
      <Link
        to={`/products/${product.id}`}
        className="mb-3 mt-1 text-xs font-medium text-blue-700 hover:underline"
      >
        Lihat detail →
      </Link>
      <div className="mt-auto flex gap-2">
        <Button variant="outline" className="flex-1" onClick={() => onEdit(product)}>
          Edit
        </Button>
        <Button variant="dangerOutline" className="flex-1" onClick={() => onDelete(product)}>
          Hapus
        </Button>
      </div>
    </article>
  );
}
