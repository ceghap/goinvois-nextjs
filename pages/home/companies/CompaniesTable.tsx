'use client';
import {
  flexRender,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

interface Company {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const CompaniesTable = () => {
  const columnHelper = createColumnHelper<Company>();

  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.name, {
      id: 'name',
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Name</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('email', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Email</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('phone', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Phone</span>,
      footer: (info) => info.column.id,
    }),
  ];

  const data = [
    {
      id: '1',
      name: 'Company A',
      email: 'a@companya.com',
      phone: '0165656101',
    },
    {
      id: '2',
      name: 'Company B',
      email: 'b@companya.com',
      phone: '0165656101',
    },
    {
      id: '3',
      name: 'Company C',
      email: 'c@companya.com',
      phone: '0165656101',
    },
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="my-4">
      <table className="min-w-full text-xs dark:text-gray-100">
        <thead className="dark:bg-gray-800">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-left">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-3">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot className="dark:bg-gray-800">
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id} className="text-left">
              {footerGroup.headers.map((header) => (
                <th key={header.id} className="p-3">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};
