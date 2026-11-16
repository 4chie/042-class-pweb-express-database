const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Semua route produk diawali /products
app.use("/products", productRoutes);

// Handler untuk route yang tidak ada
app.use((req, res) => {
  res.status(404).json({ message: "Route tidak ditemukan" });
});

// Handler error umum (misalnya database tidak bisa diakses)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Terjadi kesalahan pada server" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
