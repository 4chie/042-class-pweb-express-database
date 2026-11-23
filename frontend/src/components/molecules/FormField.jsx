import Input from "../atoms/Input.jsx";

export default function FormField({ label, error, hint, ...inputProps }) {
  return (
    <label className="mb-4 block">
      <span className="mb-1 block text-sm font-semibold">{label}</span>
      <Input invalid={Boolean(error)} {...inputProps} />
      {error ? (
        <small className="mt-1 block text-xs text-red-600">{error}</small>
      ) : (
        hint && <small className="mt-1 block text-xs text-gray-400">{hint}</small>
      )}
    </label>
  );
}
