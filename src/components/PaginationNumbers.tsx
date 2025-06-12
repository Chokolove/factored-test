import clsx from "clsx";

interface PaginationNumbersProps {
  setNumber: (number: number) => void;
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
}

export default function PaginationNumbers({
  setNumber,
  currentPage,
  isLoading,
  totalPages,
}: PaginationNumbersProps) {
  return (
    <ul className="flex gap-2 justify-center flex-wrap">
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        const isActive = currentPage === pageNumber;

        return (
          <li key={index}>
            <button
              type="button"
              onClick={() => setNumber(pageNumber)}
              disabled={isLoading}
              className={clsx(
                "w-8 h-8 flex items-center justify-center text-sm rounded-md border transition font-medium cursor-pointer shadow-md hover:shadow-lg hover:shadow-consul-green",
                "shadow-lg",
                isActive
                  ? "bg-light-blue-soft text-black font-semibold border-light-blue-soft shadow-light-blue"
                  : "text-white border-gray-600",
                !isLoading &&
                  !isActive &&
                  "hover:bg-light-blue-soft hover:text-black hover:scale-105 hover:border-light-blue-soft",
                isLoading && "cursor-not-allowed opacity-50"
              )}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Go to page ${pageNumber}`}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
