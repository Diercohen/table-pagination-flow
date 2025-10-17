import { useState, type FC } from "react";
import type { ColumnType } from "../../../data";
import { debounce } from "../../../utils";
import { useTableContext } from "../Table.context";

interface ITableHeaderProps {
  columns: ColumnType[];
  sortableColumnsKey?: string[];
}
const TableHeader: FC<ITableHeaderProps> = ({
  columns,
  sortableColumnsKey,
}) => {
  const { setQuery, sortBy, setSortBy } = useTableContext();
  const [currentQuery, setCurentQuery] = useState("");
  const debouncedQuery = debounce(setQuery, 2000);
  const queryOnChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setCurentQuery(value ?? "");
    debouncedQuery(value ?? "");
  };
  return (
    <>
      <label htmlFor="query">query</label>
      <input
        name="query"
        placeholder="query"
        onChange={queryOnChange}
        value={currentQuery}
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
