import { useMemo, type FC } from "react";
import type { DataType } from "../../../data";
import { useTableContext } from "../Table.context";
import { PAGE_SIZE } from "../Table.module";
// eslint-disable-next-line react-refresh/only-export-components
export const getDataByPage = (commingData: DataType[], page: number) => {
  return structuredClone(commingData).splice((page - 1) * PAGE_SIZE, PAGE_SIZE);
};

const Pagination: FC = () => {
  const { setPage, totalCount } = useTableContext();

  const pageCount = useMemo(() => {
    return Math.ceil(totalCount / PAGE_SIZE);
  }, [totalCount]);

  return (
    <>
      {Array(pageCount)
        .fill("")
        .map((_, index) => {
          return (
            <b
              onClick={() => {
                setPage(index + 1);
              }}
              style={{ marginInline: 4 }}
            >
              {index + 1}
            </b>
          );
        })}
    </>
  );
};
export default Pagination;
