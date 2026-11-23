// Sumber data produk: semua pemanggilan HTTP ke backend ada di sini.
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function request(path, options = {}) {
  let res;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
  } catch {
    throw new ApiError(
      "Tidak dapat terhubung ke server. Pastikan backend sedang berjalan.",
      0
    );
  }

  let data = null;
  try {
    data = await res.json();
  } catch {
    // respons tanpa body JSON (mis. proxy gagal menghubungi backend)
  }

  if (!res.ok) {
    const pesan =
      data?.message ||
      (res.status >= 500
        ? "Server tidak dapat diakses. Pastikan backend sedang berjalan."
        : `Permintaan gagal (status ${res.status}).`);
    throw new ApiError(pesan, res.status);
  }

  return data;
}

export const fetchProducts = () => request("/products");

export const fetchProductById = (id) =>
  request(`/products/${encodeURIComponent(id)}`);

export const postProduct = ({ name, price }) =>
  request("/products", {
    method: "POST",
    body: JSON.stringify({ name, price }),
  });

// Backend menerima PUT /products dengan id di dalam body
export const putProduct = ({ id, name, price }) =>
  request("/products", {
    method: "PUT",
    body: JSON.stringify({ id, name, price }),
  });

export const deleteProductById = (id) =>
  request(`/products/${encodeURIComponent(id)}`, { method: "DELETE" });
