import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar.jsx";

export default function PageLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 py-4 text-center text-xs text-gray-400">
        Tugas 4 Pemrograman Web · React Router, Tailwind CSS, dan Backend
      </footer>
    </div>
  );
}
