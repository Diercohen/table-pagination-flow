import { useMemo, type FC } from "react";
import { PAGE_SIZE } from "../../../utils";
import { useTableContext } from "../Table.context";

const Pagination: FC = () => {
  const { setPage, totalCount, page } = useTableContext();

  const pageCount = useMemo(() => {
    return Math.ceil(totalCount / PAGE_SIZE);
  }, [totalCount]);

  return (
    <>
      <b
        style={{
          cursor: "pointer",
          pointerEvents: page == 1 ? "none" : "auto",
          color: page == 1 ? "gray" : "black",
        }}
        onClick={() => {
          setPage((prevPage) => prevPage - 1);
        }}
      >
        PREV
      </b>
      {Array(pageCount)
        .fill("")
        .map((_, index) => {
          return (
            <b
              onClick={() => {
                setPage(index + 1);
              }}
              style={{
                cursor: "pointer",
                marginInline: 4,
                textDecoration: page == index + 1 ? "underline" : "",
              }}
            >
              {index + 1}
            </b>
          );
        })}
      <b
        style={{
          cursor: "pointer",
          pointerEvents: page == pageCount ? "none" : "auto",
          color: page == pageCount ? "gray" : "black",
        }}
        onClick={() => {
          setPage((prevPage) => prevPage + 1);
        }}
      >
        NEXT
      </b>
    </>
  );
};
export default Pagination;
