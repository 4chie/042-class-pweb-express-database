import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Permintaan ke /api/* diteruskan ke backend Express (http://localhost:3000)
// dengan awalan /api dihapus, jadi /api/products -> http://localhost:3000/products.
// Cara ini menghindari masalah CORS tanpa mengubah backend, dan tidak bentrok
// dengan route halaman /products/:id milik React Router.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
