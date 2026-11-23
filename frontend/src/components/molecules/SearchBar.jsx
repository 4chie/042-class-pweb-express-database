import Input from "../atoms/Input.jsx";

export default function SearchBar({ value, onChange }) {
  return (
    <Input
      type="search"
      aria-label="Cari nama produk"
      placeholder="Cari nama produk..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="sm:max-w-xs"
    />
  );
}
