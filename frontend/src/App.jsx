import { useState } from "react";
import { produkAwal } from "./data.js";
import ProductList from "./components/ProductList.jsx";
import SearchBar from "./components/SearchBar.jsx";

export default function App() {
  const [produk, setProduk] = useState(produkAwal);
  const [kataKunci, setKataKunci] = useState("");

  const hasilFilter = produk.filter((p) =>
    p.nama.toLowerCase().includes(kataKunci.trim().toLowerCase())
  );

  return (
    <main className="container">
      <header className="page-header">
        <div>
          <h1>Manajemen Produk</h1>
          <p className="subtitle">Kelola daftar produk dan harga dalam satu tempat.</p>
        </div>
        <button className="btn btn-primary">+ Tambah Produk</button>
      </header>

      <div className="toolbar">
        <SearchBar nilai={kataKunci} onChange={setKataKunci} />
        <span className="count">{produk.length} produk</span>
      </div>

      <ProductList daftar={hasilFilter} onEdit={() => {}} onHapus={() => {}} />

      <p className="footer-info">
        Menampilkan {hasilFilter.length} dari {produk.length} produk
      </p>
    </main>
  );
}
