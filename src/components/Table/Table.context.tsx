import {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import type { DataType } from "../../data";

interface ITableContextProps {
  // allData: RefObject<DataType[]>;
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
}
const TableContext = createContext<ITableContextProps>({
  // allData: { current: [] },
  data: [],
  setData: () => undefined,
  page: 1,
  setPage: () => undefined,
  totalCount: 1,
  setTotalCount: () => undefined,
});
export const TableProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  // const allData = useRef<DataType[]>([]);
  const value: ITableContextProps = {
    // allData,
    setTotalCount,
    totalCount,
    data,
    setData,
    page,
    setPage,
  };
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTableContext = (): ITableContextProps => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("there is no TableContext ");
  }
  return context;
};
