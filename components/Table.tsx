import React, { useMemo } from 'react';
import {
  createColumnHelper,
  RowModel,
  Table,
  useReactTable,
} from '@tanstack/react-table';

interface Props {
  columns: [];
  data: [];
}

export const ReactTable = ({ columns, data }: Props) => {
  const columnHelper = createColumnHelper<typeof columns>();
  const tableData = useMemo(() => data, [data]);

  const table = useReactTable({
    columns,
    data: tableData,
    getCoreRowModel: function (table: Table<any>): () => RowModel<any> {
      throw new Error('Function not implemented.');
    },
  });

  return <table></table>;
};
