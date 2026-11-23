import { useEffect } from "react";

export default function Modal({ title, description, onClose, children }) {
  // Tutup pop-up dengan tombol Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/45 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-sm rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Tutup"
          onClick={onClose}
          className="absolute right-3 top-2 text-2xl leading-none text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        {title && <h2 className="text-lg font-bold">{title}</h2>}
        {description && <p className="mb-4 mt-1 text-sm text-gray-500">{description}</p>}
        {children}
      </div>
    </div>
  );
}
