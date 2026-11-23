import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/atoms/Spinner.jsx";
import StatusMessage from "../components/molecules/StatusMessage.jsx";
import { getProductById } from "../data/product/repository/productRepository.js";
import { formatRupiah } from "../utils/format.js";

const BackLink = () => (
  <Link to="/products" className="text-sm font-medium text-blue-700 hover:underline">
    ← Kembali ke daftar produk
  </Link>
);

export default function ProductDetailPage() {
  const { id } = useParams();
  // status: loading | found | notfound | error
  const [state, setState] = useState({ status: "loading", product: null, message: "" });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading", product: null, message: "" });

    getProductById(id)
      .then((product) => {
        if (cancelled) return;
        setState(
          product
            ? { status: "found", product, message: "" }
            : { status: "notfound", product: null, message: "" }
        );
      })
      .catch((err) => {
        if (!cancelled) setState({ status: "error", product: null, message: err.message });
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  const { status, product, message } = state;

  return (
    <>
      <BackLink />

      <div className="mt-4">
        {status === "loading" && <Spinner />}

        {status === "notfound" && (
          <StatusMessage
            tone="error"
            title="Produk tidak ditemukan"
            message={`Produk dengan ID "${id}" tidak ada atau sudah dihapus.`}
          />
        )}

        {status === "error" && (
          <StatusMessage tone="error" title="Gagal memuat produk" message={message} />
        )}

        {status === "found" && (
          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <span className="text-xs text-gray-400">ID: {product.id}</span>
            <h1 className="mt-1 text-2xl font-bold">{product.name}</h1>
            <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-3">
                <dt className="text-xs text-gray-500">Nama Produk</dt>
                <dd className="font-semibold">{product.name}</dd>
              </div>
              <div className="rounded-lg bg-gray-50 p-3">
                <dt className="text-xs text-gray-500">Harga</dt>
                <dd className="font-bold text-blue-700">{formatRupiah(product.price)}</dd>
              </div>
            </dl>
          </article>
        )}
      </div>
    </>
  );
}
