import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "./Button";
import PaginationNumbers from "./PaginationNumbers";

interface PaginationProps {
  previesPage: () => void;
  nextPage: () => void;
  page: number;
  setPage: (number: number) => void;
  totalPages: number;
  isFetching: boolean;
}
export default function Pagination({
  previesPage,
  nextPage,
  page,
  setPage,
  totalPages,
  isFetching,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
      <Button
        onClick={previesPage}
        isLoading={isFetching}
        ariaLabel="Previous page"
      >
        <ArrowLeft className="w-5 h-5" />
      </Button>

      <PaginationNumbers
        isLoading={isFetching}
        setNumber={setPage}
        currentPage={page}
        totalPages={totalPages}
      />
      <Button onClick={nextPage} isLoading={isFetching} ariaLabel="Next page">
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
}
