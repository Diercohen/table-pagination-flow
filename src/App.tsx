import "./App.css";
import TableWrapper from "./components/Table";
import { column, data } from "./data";
function App() {
  return (
    <>
      <TableWrapper data={data} column={column} />
    </>
  );
}

export default App;
