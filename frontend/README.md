# Manajemen Produk (React + React Router + Tailwind CSS)

Frontend Tugas 4 (Minggu 13). Aplikasi ini mengambil dan menyimpan data produk lewat backend Express + Prisma di folder root repository.

## Fitur
- Daftar produk dari backend, lengkap dengan pencarian nama
- Tambah, edit, dan hapus produk (tersimpan ke database lewat API)
- Halaman detail `/products/:id` dengan tautan kembali ke daftar, dan pesan jelas jika produk tidak ditemukan
- Halaman 404 untuk URL yang tidak terdaftar
- Tampilan responsif dengan Tailwind CSS (mobile sampai desktop)

## Struktur (Atomic Design)
```
frontend/src
├── main.jsx, routes.jsx        # entry + daftar route
├── components/
│   ├── atoms/                  # Button, Input, Spinner
│   ├── molecules/              # Modal, FormField, SearchBar, StatusMessage, ProductCard
│   ├── organisms/              # Navbar, ProductGrid, ProductFormModal, DeleteProductModal
│   └── templates/              # PageLayout (Navbar + Outlet)
├── pages/                      # ProductsPage, ProductDetailPage, NotFoundPage
├── hooks/useProducts.js        # state daftar produk + aksi tambah/ubah/hapus
├── data/product/
│   ├── source/                 # pemanggilan HTTP (fetch) ke backend
│   └── repository/             # fungsi yang dipakai halaman/hook
└── utils/format.js
```

## Route
| URL | Halaman |
| --- | ------- |
| `/` | diarahkan ke `/products` |
| `/products` | daftar produk |
| `/products/:id` | detail produk |
| URL lain | halaman 404 |

## Cara Menjalankan

Prasyarat: Node.js 20.19+ dan database PostgreSQL (Neon). Jalankan backend **dan** frontend bersamaan di dua terminal.

**1. Backend** (di folder root repository)
```bash
npm install
cp .env.example .env          # isi DATABASE_URL dengan connection string Neon
npx prisma migrate deploy     # membuat tabel products
npx prisma generate
npm run prisma:seed           # (opsional) data awal
npm start                     # http://localhost:3000
```

**2. Frontend** (di folder `frontend`)
```bash
cd frontend
npm install
npm run dev                   # buka alamat yang tampil, biasanya http://localhost:5173
```

Frontend memanggil `/api/products`. Vite meneruskan permintaan itu ke `http://localhost:3000/products` (lihat `vite.config.js`), sehingga backend tidak perlu mengaktifkan CORS. Alamat API dapat diubah lewat `VITE_API_BASE_URL` (salin `.env.example` menjadi `.env.local`).

Jika backend belum berjalan, halaman daftar menampilkan pesan error dengan tombol **Coba Lagi**.
