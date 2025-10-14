import { useEffect, useState, type FC } from "react";
import Pagination from "./Pagination";
import { getDataByPage } from "./Pagination/Pagination";
import { useTableContext } from "./Table.context";
import type { ITableModule } from "./Table.wrapper";
import TableHeader from "./TableHeader";
export const PAGE_SIZE = 3;

const TableModule: FC<ITableModule> = ({ data: wholeData, column }) => {
  const { allData, setTotalCount, page, query } = useTableContext();
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
    const refinedData = wholeData.filter((data) => {
      return String(data.name).toLowerCase().includes(query);
    });
    setTotalCount(refinedData.length);
    setCurrentData(getDataByPage(refinedData, page));
  }, [query, page]);

  return (
    <table>
      <thead>
        <TableHeader columns={column} />
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
