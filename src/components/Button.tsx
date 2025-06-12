import clsx from "clsx";
interface ButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  ariaLabel?: string;
  children: React.ReactNode;
}
export default function Button({
  onClick,
  isLoading,
  ariaLabel,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "p-2 rounded-md border border-gray-600 text-white hover:bg-gray-700 transition shadow-lg hover:shadow-consul-green",
        isLoading
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer hover:border-light-blue-soft"
      )}
      disabled={isLoading}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
