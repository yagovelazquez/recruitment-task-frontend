import { FC } from 'react';
import { useTable, TableOptions } from 'react-table';

interface TableProps extends TableOptions<{}> {
}

const Table: FC<TableProps> = ({data, columns}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table
      {...getTableProps()}
      className="bg-white bg-opacity-40 shadow-lg rounded-lg overflow-hidden backdrop-filter backdrop-blur-lg border border-gray-300"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="text-gray-600 text-left">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="py-4 px-6 bg-gray-100 bg-opacity-40 font-semibold uppercase">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="text-gray-600">
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={i % 2 === 0 ? 'bg-gray-100 bg-opacity-20' : 'bg-gray-50 bg-opacity-20'}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="py-4 px-6 border-b border-gray-200">
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
