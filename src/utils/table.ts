import type { DataType } from "../data";
export const PAGE_SIZE = 3;
export const getDataByPage = (commingData: DataType[], page: number) => {
  return structuredClone(commingData).splice((page - 1) * PAGE_SIZE, PAGE_SIZE);
};
