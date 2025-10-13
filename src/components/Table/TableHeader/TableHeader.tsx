import { type FC } from "react";
import { useTableContext } from "../Table.context";

const TableHeader: FC = () => {
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
    </>
  );
};
export default TableHeader;
