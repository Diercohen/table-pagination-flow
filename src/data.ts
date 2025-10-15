export type DataType = {
  id: number;
  name: string;
  email: string;
  age: number;
};

export const data: DataType[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 28 },
  { id: 2, name: "Bob Smith", email: "bob@example.com", age: 34 },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    age: 22,
  },
  { id: 4, name: "David Wilson", email: "david@example.com", age: 30 },
  { id: 5, name: "EvaAdams", email: "eva@example.com", age: 27 },
  { id: 6, name: "Frank Miller", email: "frank@example.com", age: 35 },
  { id: 7, name: "Grace Lee", email: "grace@example.com", age: 29 },
  { id: 8, name: "Henry Ford", email: "henry@example.com", age: 33 },
];

export type ColumnType = {
  label: string;
  key: string;
  cellType: "text" | "number";
};

export const column: ColumnType[] = [
  { label: "Name", key: "name", cellType: "text" },
  { label: "Email", key: "email", cellType: "text" },
  { label: "Age", key: "age", cellType: "number" },
];
