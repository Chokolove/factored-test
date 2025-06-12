interface SkeletonRowProps {
  index: number;
  columns: number;
}
export default function SkeletonRow({ index, columns }: SkeletonRowProps) {
  return (
    <tr
      className={`transition duration-200 ${
        index % 2 === 0 ? "bg-[#2c2c2c]" : "bg-[#1f1f1f]"
      }`}
    >
      {[...Array(columns)].map((_, i) => (
        <td key={i} className="px-6 py-4 animate-pulse">
          <div className="h-5 w-full bg-gray-700 rounded"></div>
        </td>
      ))}
    </tr>
  );
}
