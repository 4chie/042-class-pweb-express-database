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

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
