import Button from "../atoms/Button.jsx";

const tones = {
  error: "border-red-200 bg-red-50 text-red-700",
  info: "border-gray-200 bg-white text-gray-600",
};

export default function StatusMessage({ tone = "info", title, message, onRetry, children }) {
  return (
    <div className={`rounded-xl border p-6 text-center ${tones[tone]}`}>
      {title && <h2 className="text-base font-bold">{title}</h2>}
      {message && <p className="mt-1 text-sm">{message}</p>}
      {onRetry && (
        <Button variant="outline" className="mt-4" onClick={onRetry}>
          Coba Lagi
        </Button>
      )}
      {children}
    </div>
  );
}
