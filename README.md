# API Daftar Produk (ExpressJS)

REST API sederhana untuk daftar produk. Data disimpan di array (tanpa database), jadi akan kembali ke data awal setiap server di-restart.

## Struktur Proyek

```
api-produk/
├── app.js                          # entry point, setup Express
├── package.json
├── testing.http                    # request untuk pengujian (REST Client)
├── data/
│   └── products.js                 # array data produk
├── routes/
│   └── productRoutes.js            # definisi URL + method
├── controllers/
│   └── productController.js        # logika tiap endpoint
└── README.md
```

## Cara Menjalankan

Prasyarat: Node.js sudah terpasang.

```bash
npm install
npm start
```

Server berjalan di `http://localhost:3000`.

## Daftar Endpoint

| Method | Endpoint        | Deskripsi                        | Status sukses | Status gagal |
| ------ | --------------- | -------------------------------- | ------------- | ------------ |
| GET    | `/products`     | Ambil semua produk               | 200           | -            |
| GET    | `/products/:id` | Ambil satu produk berdasarkan ID | 200           | 404          |
| POST   | `/products`     | Tambah produk baru               | 201           | 400          |

### Contoh Request dan Response

**GET /products** -> 200

```json
[
  { "id": 1, "name": "Buku", "price": 15000 },
  { "id": 2, "name": "Pulpen", "price": 5000 }
]
```

**GET /products/1** -> 200

```json
{ "id": 1, "name": "Buku", "price": 15000 }
```

**GET /products/999** -> 404

```json
{ "message": "Produk tidak ditemukan" }
```

**POST /products** -> 201

Body (JSON):

```json
{ "name": "Penggaris", "price": 7000 }
```

Response:

```json
{ "id": 3, "name": "Penggaris", "price": 7000 }
```

**POST /products** dengan body tidak valid -> 400

```json
{ "message": "name (string) dan price (number) wajib diisi" }
```

## Cara Menguji

Pengujian memakai file `testing.http` dengan ekstensi **REST Client** di VS Code (`humao.rest-client`).

1. Jalankan server dengan `npm start`.
2. Buka `testing.http` di VS Code.
3. Klik **Send Request** di atas masing-masing request. Respons (status + JSON) tampil di panel samping.

Isi `testing.http`:

```http
### 1. GET semua produk -> 200 + array
GET http://localhost:3000/products

### 2. GET produk id 1 -> 200 + objek Buku
GET http://localhost:3000/products/1

### 3. GET produk id 999 -> 404 + pesan JSON
GET http://localhost:3000/products/999

### 4. POST produk baru -> 201 + produk dengan id baru
POST http://localhost:3000/products
Content-Type: application/json

{
  "name": "Penggaris",
  "price": 7000
}

### 5. (opsional) POST data tidak valid -> 400
POST http://localhost:3000/products
Content-Type: application/json

{
  "name": "",
  "price": "abc"
}
```

## Bukti Pengujian

Screenshot hasil `testing.http` berada di folder `screenshots`:

| No  | Request                             | Hasil yang diharapkan                       |
| --- | ----------------------------------- | ------------------------------------------- |
| 1   | `GET /products`                     | 200 + array seluruh produk                  |
| 2   | `GET /products/1`                   | 200 + objek produk Buku                     |
| 3   | `GET /products/999`                 | 404 + pesan JSON produk tidak ditemukan     |
| 4   | `POST /products`                    | 201 + produk baru                           |
| 5   | `POST /products` (data tidak valid) | 400 + pesan JSON name dan price wajib diisi |
