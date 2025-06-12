interface TableHeadersProps {
  tableHeaders: string[];
}
export default function TableHeaders({ tableHeaders }: TableHeadersProps) {
  return (
    <thead className="bg-light-blue text-white uppercase text-xs tracking-wider">
      <tr>
        {tableHeaders.map((header) => (
          <th key={header} className="px-6 py-3 text-left">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
