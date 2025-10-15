import { type FC } from "react";
import type { ColumnType } from "../../../data";
import { useTableContext } from "../Table.context";

interface ITableHeaderProps {
  columns: ColumnType[];
  sortableColumnsKey?: string[];
}
const TableHeader: FC<ITableHeaderProps> = ({
  columns,
  sortableColumnsKey,
}) => {
  const { query, setQuery, sortBy, setSortBy } = useTableContext();

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
        {columns.map((currentCol) => {
          const isDescending = sortBy.startsWith("-");
          return (
            <th
              onClick={() => {
                if (sortBy !== currentCol.key) {
                  return setSortBy(currentCol.key);
                }
                return setSortBy(
                  isDescending ? currentCol.key : "-" + currentCol.key
                );
              }}
            >
              {currentCol.label}
              {sortableColumnsKey?.includes(currentCol.key) &&
                sortBy.includes(currentCol.key) && (
                  <b>({isDescending ? "DESC" : "ASC"})</b>
                )}
            </th>
          );
        })}
      </tr>
    </>
  );
};
export default TableHeader;
