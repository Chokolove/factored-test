export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col text-white p-4 sm:p-10 gap-10 max-w-7xl w-full mx-auto">
      {children}
    </div>
  );
}
