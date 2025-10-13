import { useEffect, useState, type FC } from "react";
import Pagination from "./Pagination";
import { getDataByPage } from "./Pagination/Pagination";
import { useTableContext } from "./Table.context";
import type { ITableModule } from "./Table.wrapper";
export const PAGE_SIZE = 3;

const TableModule: FC<ITableModule> = ({ data: wholeData, column }) => {
  const { allData, setTotalCount, page } = useTableContext();
  const [currentData, setCurrentData] = useState(allData);

  useEffect(() => {
    setTotalCount(wholeData.length);
    return setCurrentData(getDataByPage(wholeData, 1));
  }, []);

  useEffect(() => {
    return setCurrentData(getDataByPage(wholeData, page));
  }, [page]);

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          {column.map((currentCol) => (
            <th>{currentCol.label}</th>
          ))}
        </tr>
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
