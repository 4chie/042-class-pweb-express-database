import { Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./components/templates/PageLayout.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}
