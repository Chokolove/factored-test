import TableHeaders from "./TableHeader";

interface TableProps<T> {
  tableHeaders: string[];
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
}

export default function Table<T>({
  tableHeaders,
  data,
  renderRow,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto mt-8 rounded-lg shadow-lg shadow-consul-green bg-imperial-gray border border-gray-600">
      <table className="min-w-full table-auto text-sm text-white rounded-lg">
        <TableHeaders tableHeaders={tableHeaders} />
        <tbody>{data.map(renderRow)}</tbody>
      </table>
    </div>
  );
}
