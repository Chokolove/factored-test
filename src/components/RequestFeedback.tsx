import { LoaderIcon } from "lucide-react";
interface RequestFeedbackProps {
  isError: boolean;
  isLoading: boolean;
}
export default function RequestFeedback({
  isError,
  isLoading,
}: RequestFeedbackProps) {
  return (
    <>
      {isError && (
        <div className="my-4 p-4 rounded-md border border-sith-red text-sith-red bg-red-100">
          <strong>Oops!</strong> Something went wrong while loading the films.
          <br />
          Please try again later.
        </div>
      )}

      {isLoading && (
        <div className="my-4 p-4 rounded-md text-white bg-light-blue-soft flex items-center gap-2 justify-center max-w-fit mx-auto">
          <LoaderIcon className="animate-spin" />
          Loading...
        </div>
      )}
    </>
  );
}
