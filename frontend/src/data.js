// Data awal produk (disimpan di state React, tanpa backend)
export const produkAwal = [
  { id: 1, nama: "Pulpen", harga: 5000 },
  { id: 2, nama: "Buku Tulis", harga: 12000 },
  { id: 3, nama: "Spidol", harga: 8000 },
  { id: 4, nama: "Penggaris", harga: 6000 },
  { id: 5, nama: "Penghapus", harga: 3000 },
];

export const formatRupiah = (angka) =>
  "Rp" + Number(angka).toLocaleString("id-ID");
