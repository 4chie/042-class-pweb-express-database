import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="py-12 text-center">
      <p className="text-6xl font-extrabold text-blue-700">404</p>
      <h1 className="mt-2 text-2xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-sm text-gray-500">
        Alamat yang kamu buka tidak terdaftar atau sudah dipindahkan.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/"
          className="rounded-lg border border-transparent bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Kembali ke Halaman Utama
        </Link>
        <Link
          to="/products"
          className="rounded-lg border border-blue-700 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
        >
          Lihat Daftar Produk
        </Link>
      </div>
    </section>
  );
}
