import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
    isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:text-blue-700"
  }`;

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <Link to="/" className="text-lg font-extrabold text-blue-700">
          Manajemen Produk
        </Link>
        <div className="flex gap-1">
          <NavLink to="/products" className={linkClass}>
            Daftar Produk
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
