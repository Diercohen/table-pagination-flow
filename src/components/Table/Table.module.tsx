import { useEffect, type FC } from "react";
import Pagination from "../Pagination";
import { getDataByPage } from "../Pagination/Pagination";
import { useTableContext } from "./Table.context";
import type { ITableModule } from "./Table.wrapper";
export const PAGE_SIZE = 3;

const TableModule: FC<ITableModule> = ({ data: wholeData, column }) => {
  const { data, setData, setTotalCount, page } = useTableContext();

  useEffect(() => {
    setTotalCount(wholeData.length);
    return setData(getDataByPage(wholeData, 1));
  }, []);

  useEffect(() => {
    return setData(getDataByPage(wholeData, page));
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
        {data.map((row) => {
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
