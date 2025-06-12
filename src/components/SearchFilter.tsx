import clsx from "clsx";

interface SearchFilterProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  isLoading: boolean;
}
export default function SearchFilter({
  value,
  placeholder = "",
  onChange,
  isLoading,
}: SearchFilterProps) {
  return (
    <div className="flex items-center gap-3 w-full max-w-xs border border-white/20 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-light-blue-soft rounded-md px-3 py-2"
      />
      <span className="relative flex h-3 w-3">
        <span
          className={clsx(
            " absolute inline-flex h-full w-full rounded-full bg-light-blue-soft opacity-75",
            isLoading ? "animate-ping" : ""
          )}
        ></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-light-blue-soft"></span>
      </span>
    </div>
  );
}
