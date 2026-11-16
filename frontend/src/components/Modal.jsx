import { useEffect } from "react";

export default function Modal({ judul, deskripsi, onTutup, children }) {
  // Tutup pop-up dengan tombol Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onTutup();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onTutup]);

  return (
    <div className="overlay" onClick={onTutup}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" aria-label="Tutup" onClick={onTutup}>
          ×
        </button>
        {judul && <h2 className="modal-title">{judul}</h2>}
        {deskripsi && <p className="modal-desc">{deskripsi}</p>}
        {children}
      </div>
    </div>
  );
}
