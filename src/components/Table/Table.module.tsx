import { useEffect, useState, type FC } from "react";
import Pagination from "./Pagination";
import { getDataByPage } from "./Pagination/Pagination";
import { useTableContext } from "./Table.context";
import type { ITableModule } from "./Table.wrapper";
import TableHeader from "./TableHeader";
export const PAGE_SIZE = 3;

const TableModule: FC<ITableModule> = ({ data: wholeData, column }) => {
  const { allData, setTotalCount, page, query, sortBy } = useTableContext();
  const [currentData, setCurrentData] = useState(allData);

  useEffect(() => {
    setTotalCount(wholeData.length);
    return setCurrentData(getDataByPage(wholeData, 1));
  }, []);

  useEffect(() => {
    return setCurrentData(getDataByPage(wholeData, page));
  }, [page]);

  useEffect(() => {
    if (query.trim() === "") {
      setCurrentData(wholeData);
    }
    const refinedData = wholeData
      .filter((data) => {
        return String(data.name + data.email)
          .toLowerCase()
          .includes(query);
      })
      .sort((A_DataType, B_DataType) => {
        let sortDiscendingIndicator: number = 1;
        const sortByKey = String(sortBy).replace("-", "");
        if (sortBy.startsWith("-")) {
          sortDiscendingIndicator = -1;
        }

        if (sortByKey) {
          let x = (A_DataType as any)?.[sortByKey];
          let y = (B_DataType as any)?.[sortByKey];
          if (typeof x == "string") {
            x = x?.toLowerCase();
            y = y?.toLowerCase();
          }
          if (x < y) {
            return -1 * sortDiscendingIndicator;
          }
          if (x > y) {
            return 1 * sortDiscendingIndicator;
          }
          return 0;
        }
        return 0;
      });
    setTotalCount(refinedData.length);
    setCurrentData(getDataByPage(refinedData, page));
  }, [query, page, sortBy]);

  return (
    <table>
      <thead>
        <TableHeader columns={column} sortableColumnsKey={["name", "age"]} />
      </thead>
      <tbody>
        {currentData.map((row) => {
          return (
            <tr>
              {Object.values(row).map((val) => {
                return <td>{val}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <Pagination />
      </tfoot>
    </table>
  );
};
export default TableModule;
