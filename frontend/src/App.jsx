import { useState } from "react";
import { produkAwal } from "./data.js";

export default function App() {
  const [produk, setProduk] = useState(produkAwal);

  return (
    <main className="container">
      <header className="page-header">
        <div>
          <h1>Manajemen Produk</h1>
          <p className="subtitle">Kelola daftar produk dan harga dalam satu tempat.</p>
        </div>
        <button className="btn btn-primary">+ Tambah Produk</button>
      </header>
      <p className="count">{produk.length} produk</p>
    </main>
  );
}
