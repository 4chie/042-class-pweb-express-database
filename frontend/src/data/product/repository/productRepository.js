// Repository: lapisan yang dipakai halaman/hook; menyembunyikan detail HTTP.
import {
  ApiError,
  fetchProducts,
  fetchProductById,
  postProduct,
  putProduct,
  deleteProductById,
} from "../source/productSource.js";

export const getProducts = () => fetchProducts();

// Mengembalikan null jika produk tidak ditemukan (404)
export async function getProductById(id) {
  try {
    return await fetchProductById(id);
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) return null;
    throw err;
  }
}

export const createProduct = (data) => postProduct(data);
export const updateProduct = (data) => putProduct(data);
export const removeProduct = (id) => deleteProductById(id);
