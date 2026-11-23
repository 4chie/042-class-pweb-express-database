export default function Input({ invalid = false, className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        invalid ? "border-red-500" : "border-gray-300"
      } ${className}`}
      {...props}
    />
  );
}
