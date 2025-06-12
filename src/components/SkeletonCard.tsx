export default function SkeletonCard() {
  return (
    <div className="space-y-2">
      <div className="h-5 bg-white/20 rounded w-3/4" /> {/* title */}
      <div className="h-4 bg-white/10 rounded w-2/3" /> {/* subtitle */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="h-3 bg-white/10 rounded w-full" />
        ))}
      </div>
    </div>
  );
}
