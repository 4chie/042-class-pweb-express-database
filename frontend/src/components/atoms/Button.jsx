const variants = {
  primary: "border-transparent bg-blue-700 text-white hover:bg-blue-800",
  outline: "border-blue-700 bg-white text-blue-700 hover:bg-blue-50",
  danger: "border-transparent bg-red-600 text-white hover:bg-red-700",
  dangerOutline: "border-red-600 bg-white text-red-600 hover:bg-red-50",
};

export default function Button({
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
