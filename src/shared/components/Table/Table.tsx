import { FC } from 'react';
import { useTable, TableOptions, Row } from 'react-table';

interface TableProps extends TableOptions<{}> {
  onRowClick?: (row: Row<any>) => void;
}

const Table: FC<TableProps> = ({ data, columns, onRowClick }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table
      {...getTableProps()}
      className="bg-white/10 bg-opacity-10 shadow-lg w-[80vw] max-w-[980px] rounded-lg overflow-hidden backdrop-filter backdrop-blur-lg border"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="text-gray-600 text-left"
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="py-4 px-6 bg-white/10 bg-opacity-10 font-semibold uppercase"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              onClick={() => onRowClick && onRowClick(row)}
              className={
                i % 2 === 0
                  ? 'bg-white/40  bg-opacity-20 cursor-pointer'
                  : 'bg-white/10  bg-opacity-20 cursor-pointer'
              }
            >
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="py-4 px-6 border-b border-gray-200"
                >
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
