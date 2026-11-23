import { useCallback, useEffect, useState } from "react";
import * as productRepository from "../data/product/repository/productRepository.js";

// Mengelola daftar produk dari backend (muat, tambah, ubah, hapus)
export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      setProducts(await productRepository.getProducts());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const addProduct = async (data) => {
    const created = await productRepository.createProduct(data);
    setProducts((prev) => [...prev, created]);
    return created;
  };

  const editProduct = async (data) => {
    const updated = await productRepository.updateProduct(data);
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    return updated;
  };

  const deleteProduct = async (id) => {
    await productRepository.removeProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, loading, error, reload: load, addProduct, editProduct, deleteProduct };
}
