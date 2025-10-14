import { type FC } from "react";
import type { ColumnType } from "../../../data";
import { useTableContext } from "../Table.context";

interface ITableHeaderProps {
  columns: ColumnType[];
}
const TableHeader: FC<ITableHeaderProps> = ({ columns }) => {
  const { query, setQuery } = useTableContext();

  const queryOnChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setQuery(value ?? "");
  };
  return (
    <>
      <label htmlFor="query">query</label>
      <input
        name="query"
        placeholder="query"
        onChange={queryOnChange}
        value={query}
      />
      <tr>
        <th>#</th>
        {columns.map((currentCol) => (
          <th>
            {currentCol.label} {currentCol.cellType}
          </th>
        ))}
      </tr>
    </>
  );
};
export default TableHeader;
