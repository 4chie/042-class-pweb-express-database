const prisma = require("../lib/prisma");

// Mengisi data awal (Buku dan Pulpen) hanya jika tabel masih kosong
async function main() {
  const count = await prisma.product.count();
  if (count > 0) {
    console.log("Tabel products sudah berisi data, seed dilewati.");
    return;
  }

  await prisma.product.createMany({
    data: [
      { name: "Buku", price: 15000 },
      { name: "Pulpen", price: 5000 },
    ],
  });
  console.log("Seed berhasil: Buku dan Pulpen ditambahkan.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
