import type { FC } from "react";
import type { ColumnType, DataType } from "../../data";
import { TableProvider } from "./Table.context";
import TableModule from "./Table.module";

export interface ITableModule {
  data: DataType[];
  column: ColumnType[];
}
const TableWrapper: FC<ITableModule> = ({ data, column }) => {
  return (
    <TableProvider>
      <TableModule {...{ data, column }} />
    </TableProvider>
  );
};

export default TableWrapper;
