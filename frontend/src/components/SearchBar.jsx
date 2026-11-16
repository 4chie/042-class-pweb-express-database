export default function SearchBar({ nilai, onChange }) {
  return (
    <input
      type="search"
      className="search"
      placeholder="Cari nama produk..."
      value={nilai}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
